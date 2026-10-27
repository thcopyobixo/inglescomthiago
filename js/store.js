// Progresso de cada usuário: cópia no navegador (localStorage, por usuário) + nuvem (sync.js)
const Store = (() => {
  let KEY = 'fluentdaily.v1';
  const DEF = {
    xp: 0, streak: 0, lastDay: null,
    days: {},          // 'YYYY-MM-DD': { min, steps:{review:true,...}, xp }
    srs: {},           // vocabId: { ease, ivl, due, reps, lapses }
    newToday: { day: null, n: 0 },
    lessons: {},       // lessonId: { done:true, best: 0..1 }
    seen: {},          // ids de exercícios já feitos: listening/speaking/writing
    speak: { n: 0, sum: 0 },
    listen: { n: 0, ok: 0 },
    write: { n: 0, ok: 0 },
    journal: [],       // textos livres de writing
    last: null,        // { href, label } — o que você estava fazendo, para "Continuar"
    scores: {},        // id de áudio/leitura -> melhor acerto (0..1)
    course: {},        // lição do curso -> { steps: { theory, vocab, reading, listening, speaking }, done: 'YYYY-MM-DD' }
    settings: { level: 'b2', voice: '', rate: 1, stt: 'auto', accent: 'en-US', newPerDay: 6 }
  };
  let s, onSave = null;
  const normalize = (data) => { const o = Object.assign(structuredClone(DEF), data || {}); o.settings = Object.assign({}, DEF.settings, o.settings); return o; };
  function load() {
    try { s = normalize(JSON.parse(localStorage.getItem(KEY) || '{}')); }
    catch { s = structuredClone(DEF); }
  }
  load();

  // troca para o progresso de um usuário (uid) ou para o modo local (null)
  function use(uid) { KEY = uid ? `fluentdaily.v1.${uid}` : 'fluentdaily.v1'; load(); }
  // substitui pelo que veio da nuvem, sem disparar novo envio
  function replace(data) { s = normalize(data); try { localStorage.setItem(KEY, JSON.stringify(s)); } catch {} }
  const isEmpty = () => !s._t && !s.xp && !Object.keys(s.srs).length && !Object.keys(s.lessons).length;

  const save = () => {
    s._t = Date.now(); // carimbo para decidir qual cópia é mais nova (navegador × nuvem)
    try { localStorage.setItem(KEY, JSON.stringify(s)); } catch {}
    onSave && onSave(s);
  };
  const today = (d = new Date()) => d.toLocaleDateString('en-CA'); // YYYY-MM-DD local
  const addDays = (iso, n) => { const d = new Date(iso + 'T12:00'); d.setDate(d.getDate() + n); return today(d); };

  function day(iso = today()) { return s.days[iso] || (s.days[iso] = { min: 0, steps: {}, xp: 0 }); }

  function touchStreak() {
    const t = today();
    if (s.lastDay === t) return;
    s.streak = s.lastDay === addDays(t, -1) ? s.streak + 1 : 1;
    s.lastDay = t;
  }

  function addXP(n) { s.xp += n; day().xp += n; touchStreak(); save(); }
  function addMinutes(m) { day().min = Math.round((day().min + m) * 10) / 10; touchStreak(); save(); }

  // ---- SRS (SM-2 simplificado) ----
  // grade: 0 errei, 1 difícil, 2 bom, 3 fácil
  function grade(id, g) {
    const c = s.srs[id] || { ease: 2.5, ivl: 0, due: today(), reps: 0, lapses: 0 };
    if (g === 0) { c.reps = 0; c.ivl = 0; c.lapses++; c.ease = Math.max(1.3, c.ease - 0.2); }
    else {
      c.reps++;
      if (c.reps === 1) c.ivl = g === 3 ? 3 : 1;
      else if (c.reps === 2) c.ivl = g === 1 ? 3 : 6;
      else c.ivl = Math.round(c.ivl * (g === 1 ? 1.2 : g === 3 ? c.ease * 1.3 : c.ease));
      c.ease = Math.max(1.3, c.ease + (g === 1 ? -0.15 : g === 3 ? 0.15 : 0));
    }
    c.due = addDays(today(), c.ivl);
    s.srs[id] = c; save();
    return c;
  }
  function dueCards() {
    const t = today();
    return Object.entries(s.srs).filter(([, c]) => c.due <= t).map(([id]) => id);
  }
  function newCardsLeft() {
    if (s.newToday.day !== today()) s.newToday = { day: today(), n: 0 };
    return Math.max(0, s.settings.newPerDay - s.newToday.n);
  }
  function countNew() { newCardsLeft(); s.newToday.n++; save(); }

  function markSeen(id) { s.seen[id] = today(); save(); }
  function setLast(href, label) { s.last = { href, label }; save(); }
  function setScore(id, v) { s.scores[id] = Math.max(s.scores[id] || 0, v); markSeen(id); }
  // minutos estudados nos últimos n dias
  function minutesSince(n) { let m = 0; for (let k = 0; k < n; k++) m += s.days[addDays(today(), -k)]?.min || 0; return m; }

  function reset() { s = structuredClone(DEF); save(); }

  return {
    get s() { return s; }, save, use, replace, isEmpty, set onSave(fn) { onSave = fn; }, today, addDays, day, addXP, addMinutes,
    grade, dueCards, newCardsLeft, countNew, markSeen, setLast, setScore, minutesSince, reset
  };
})();

// utilidades
const $ = (sel, el = document) => el.querySelector(sel);
const $$ = (sel, el = document) => [...el.querySelectorAll(sel)];
const esc = (t) => String(t).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const ic = (name, cls = '') => `<svg class="ic ${cls}" aria-hidden="true"><use href="#i-${name}"/></svg>`;
function shuffle(a, rnd = Math.random) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function seeded(str) { let h = 1779033703 ^ str.length; for (let i = 0; i < str.length; i++) { h = Math.imul(h ^ str.charCodeAt(i), 3432918353); h = h << 13 | h >>> 19; } return () => { h = Math.imul(h ^ h >>> 16, 2246822507); h = Math.imul(h ^ h >>> 13, 3266489909); return ((h ^= h >>> 16) >>> 0) / 4294967296; }; }
function toast(msg) { const t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toast._t); toast._t = setTimeout(() => t.classList.remove('show'), 2200); }
// escolhe itens priorizando os nunca vistos, depois os vistos há mais tempo
function pickFresh(list, n, rnd = Math.random) {
  const seen = Store.s.seen;
  return shuffle(list, rnd).sort((a, b) => (seen[a.id] || '') < (seen[b.id] || '') ? -1 : (seen[a.id] || '') > (seen[b.id] || '') ? 1 : 0).slice(0, n);
}
