// Confere todas as lições do curso: campos obrigatórios, quantidades, respostas válidas, vozes e imagens.
// Uso: node tools/check_course.js <pasta do site>
const fs = require('fs'), vm = require('vm'), path = require('path');
const root = process.argv[2] || '.';
const dataDir = path.join(root, 'js/data');
const ctx = { window: {} }; vm.createContext(ctx);
const files = fs.readdirSync(dataDir).filter(f => /^course\d+\.js$/.test(f)).sort((a, b) => parseInt(a.match(/\d+/)) - parseInt(b.match(/\d+/)));
for (const f of [...files, 'course-practice.js']) {
  try { vm.runInContext(fs.readFileSync(path.join(dataDir, f), 'utf8'), ctx, { filename: f }); }
  catch (e) { console.log('ERRO DE SINTAXE em', f, e.message); process.exit(1); }
}
const C = ctx.window.COURSE, P = ctx.window.COURSE_PRACTICE || {};
const emoji = new Set(fs.readFileSync(path.join(root, 'tools/fluent3d.txt'), 'utf8').split('\n').map(l => (l.match(/^assets\/([^/]+)\/3D\//) || [])[1]).filter(Boolean));
const VOICES = new Set(['en-US-AvaNeural', 'en-US-AndrewNeural', 'en-US-EmmaNeural', 'en-US-BrianNeural', 'en-GB-SoniaNeural', 'en-GB-RyanNeural', 'en-GB-LibbyNeural', 'en-GB-ThomasNeural']);
const problems = []; const ids = new Set();
C.forEach((c, i) => {
  const p = (m) => problems.push(`${c.id || '#' + (i + 1)}: ${m}`);
  if (ids.has(c.id)) p('id repetido'); ids.add(c.id);
  for (const k of ['id', 'lv', 'title', 'goal', 'theory', 'say', 'vocab', 'reading', 'listening', 'speaking']) if (!c[k]) p('falta ' + k);
  const words = (c.theory || '').replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  if (words < 500) p(`teoria curta (${words} palavras)`);
  if ((c.vocab || []).length < 8) p('menos de 8 palavras no vocabulário');
  (c.vocab || []).forEach(v => { if (!v.en || !v.pt || !v.ex) p('vocab incompleto: ' + JSON.stringify(v)); });
  const pr = P[c.id] || c;
  if ((pr.pics || []).length < 6) p('menos de 6 imagens');
  (pr.pics || []).forEach(x => { if (!emoji.has(x.img)) p('imagem inexistente: ' + x.img); });
  if ((pr.fill || []).length < 6) p('menos de 6 frases de completar');
  (pr.fill || []).forEach(f => { if ((f.s.match(/___/g) || []).length !== 1) p('frase sem exatamente uma lacuna: ' + f.s); });
  const qs = (arr, where) => (arr || []).forEach(q => { if (!(q.a >= 0 && q.a < q.opts.length)) p(`${where}: resposta fora das opções em "${q.q}"`); });
  if (c.reading) { if ((c.reading.paras || []).length < 3) p('leitura curta'); qs(c.reading.qs, 'leitura'); }
  if (c.listening) { (c.listening.lines || []).forEach(l => { if (!VOICES.has(l.v)) p('voz inválida: ' + l.v); }); if ((c.listening.lines || []).length < (c.listening.kind === 'talk' ? 4 : 6)) p('diálogo curto'); qs(c.listening.qs, 'listening'); }
  if (c.speaking) { if ((c.speaking.shadow || []).length < 5) p('menos de 5 frases de speaking'); if (!c.speaking.prompt) p('falta prompt de fala livre'); }
});
console.log(C.length, 'lições;', problems.length ? problems.length + ' problemas:' : 'tudo certo');
problems.forEach(x => console.log(' -', x));
