// Contas e sincronização na nuvem (Supabase): login por e-mail/senha e uma linha de progresso por usuário.
const Cloud = (() => {
  const cfg = window.FD_CONFIG || {};
  const enabled = !!(cfg.supabaseUrl && cfg.supabaseAnonKey && window.supabase);
  const sb = enabled ? window.supabase.createClient(cfg.supabaseUrl, cfg.supabaseAnonKey) : null;
  const LEGACY_KEY = 'fluentdaily.v1'; // progresso de antes do login
  let user = null, timer = null, pending = null, status = 'saved', onChange = null, onStatus = null;

  // Login por nome de usuário: o Supabase exige e-mail, então "thiago" vira "thiago@users.fluentdaily.app"
  // por baixo dos panos (nenhum e-mail é enviado; a confirmação de e-mail fica desligada no projeto).
  const USER_DOMAIN = 'users.fluentdaily.app';
  const toEmail = (login) => { const v = login.trim().toLowerCase(); return v.includes('@') ? v : `${v}@${USER_DOMAIN}`; };
  const isUsernameAccount = (u) => (u?.email || '').endsWith('@' + USER_DOMAIN);
  const validUsername = (v) => /^[a-z0-9_.]{3,20}$/.test(v.trim().toLowerCase());

  const setStatus = (st) => { status = st; onStatus && onStatus(st); };
  const here = () => location.origin + location.pathname;

  async function init() {
    if (!sb) return null;
    const { data } = await sb.auth.getSession();
    user = data.session?.user || null;
    // limpa os tokens que o link do e-mail deixa no endereço
    if (/access_token|error_description/.test(location.hash)) history.replaceState(null, '', here() + '#/');
    sb.auth.onAuthStateChange((event, session) => {
      const u = session?.user || null, changed = (u?.id || null) !== (user?.id || null);
      user = u;
      if (changed || event === 'PASSWORD_RECOVERY') onChange && onChange(event, u);
    });
    return user;
  }

  // Junta o progresso da nuvem com o deste aparelho: fica a cópia salva por último
  async function pull() {
    const { data, error } = await sb.from('progress').select('data').eq('user_id', user.id).maybeSingle();
    if (error) throw error;
    if (!data) {
      if (Store.isEmpty()) { // primeira vez: aproveita o progresso feito antes de existir login
        try { const old = JSON.parse(localStorage.getItem(LEGACY_KEY) || 'null'); if (old) Store.replace(old); } catch {}
      }
      await push(Store.s);
      return;
    }
    if ((Store.s._t || 0) > (data.data?._t || 0)) await push(Store.s);
    else Store.replace(data.data);
  }

  async function push(d) {
    const { error } = await sb.from('progress').upsert({ user_id: user.id, data: d, updated_at: new Date().toISOString() });
    if (error) throw error;
  }
  // cada save() do Store agenda um envio; vários saves seguidos viram um só
  function schedule(s) {
    if (!user) return;
    pending = s; clearTimeout(timer); timer = setTimeout(flush, 1500);
    setStatus('saving');
  }
  async function flush() {
    clearTimeout(timer);
    if (!pending || !user) return;
    const d = pending; pending = null;
    try { await push(d); setStatus(pending ? 'saving' : 'saved'); }
    catch { pending = pending || d; setStatus('offline'); timer = setTimeout(flush, 10000); }
  }
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') flush(); });
  window.addEventListener('online', () => pending && flush());

  // Mensagens do Supabase traduzidas
  function msg(error) {
    const m = (error && (error.message || String(error))) || '';
    if (/invalid login credentials/i.test(m)) return 'Usuário ou senha incorretos.';
    if (/already registered|already been registered/i.test(m)) return 'Esse nome de usuário já existe. Escolha outro ou use "Entrar".';
    if (/email not confirmed/i.test(m)) return 'Confirme seu e-mail primeiro: abra o link que enviamos para você.';
    if (/password should be at least|weak password/i.test(m)) return 'A senha precisa ter pelo menos 6 caracteres.';
    if (/unable to validate email|invalid email|email address .* is invalid/i.test(m)) return 'O servidor recusou esse usuário. Tente outro nome (só letras minúsculas, números, _ ou ponto).';
    if (/rate limit|too many/i.test(m)) return 'Muitas tentativas seguidas. Espere um minuto e tente de novo.';
    if (/failed to fetch|network/i.test(m)) return 'Sem conexão com o servidor. Verifique sua internet.';
    return 'Não deu certo: ' + m;
  }

  return {
    enabled,
    get user() { return user; },
    get status() { return status; },
    set onChange(fn) { onChange = fn; },
    set onStatus(fn) { onStatus = fn; },
    init, pull, schedule, flush, msg,
    validUsername, isUsernameAccount: () => isUsernameAccount(user),
    name: () => user?.user_metadata?.name || (user?.email || '').split('@')[0],
    // como mostrar a conta: @usuario, ou o e-mail para contas antigas criadas com e-mail
    handle: () => isUsernameAccount(user) ? '@' + user.email.split('@')[0] : (user?.email || ''),
    signIn: (login, password) => sb.auth.signInWithPassword({ email: toEmail(login), password }),
    signUp: (name, username, password) => sb.auth.signUp({ email: toEmail(username), password, options: { data: { name, username: username.trim().toLowerCase() }, emailRedirectTo: here() } }),
    resetPassword: (email) => sb.auth.resetPasswordForEmail(email, { redirectTo: here() }),
    updatePassword: (password) => sb.auth.updateUser({ password }),
    async signOut() { await flush(); await sb.auth.signOut(); }
  };
})();
