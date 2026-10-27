// Supabase falso, só para testar login e sincronização localmente (não é usado pelo site real)
(() => {
  const K = 'fake-supabase-db';
  const db = JSON.parse(localStorage.getItem(K) || '{"users":{},"progress":{},"session":null}');
  const persist = () => localStorage.setItem(K, JSON.stringify(db));
  const listeners = [];
  const fire = (ev) => listeners.forEach(cb => cb(ev, db.session));
  const client = {
    auth: {
      getSession: async () => ({ data: { session: db.session } }),
      onAuthStateChange: (cb) => { listeners.push(cb); return { data: { subscription: { unsubscribe() {} } } }; },
      signInWithPassword: async ({ email, password }) => {
        const u = Object.values(db.users).find(x => x.email === email);
        if (!u || u.password !== password) return { data: {}, error: { message: 'Invalid login credentials' } };
        db.session = { user: { id: u.id, email: u.email, user_metadata: u.user_metadata } }; persist(); fire('SIGNED_IN');
        return { data: { session: db.session }, error: null };
      },
      signUp: async ({ email, password, options }) => {
        if (Object.values(db.users).some(x => x.email === email)) return { data: {}, error: { message: 'User already registered' } };
        const u = { id: crypto.randomUUID(), email, password, user_metadata: options?.data || {} };
        db.users[u.id] = u; db.session = { user: { id: u.id, email, user_metadata: u.user_metadata } }; persist(); fire('SIGNED_IN');
        return { data: { session: db.session }, error: null };
      },
      signOut: async () => { db.session = null; persist(); fire('SIGNED_OUT'); return { error: null }; },
      resetPasswordForEmail: async () => ({ error: null }),
      updateUser: async () => ({ error: null })
    },
    from: () => ({
      select: () => ({ eq: (_, id) => ({ maybeSingle: async () => ({ data: db.progress[id] ? { data: db.progress[id] } : null, error: null }) }) }),
      upsert: async (row) => { db.progress[row.user_id] = row.data; persist(); window.__pushes = (window.__pushes || 0) + 1; return { error: null }; }
    })
  };
  window.supabase = { createClient: () => client };
  window.FAKE_DB = db;
})();
