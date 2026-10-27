// Lê os arquivos de dados do site e lista todos os textos que precisam de áudio (texto + voz).
// Uso: node tools/extract.js <pasta do site> <saida.json>
const fs = require('fs'), vm = require('vm'), path = require('path');
const root = process.argv[2];
const dataDir = path.join(root, 'js/data');
const ctx = { window: {} }; vm.createContext(ctx);
// ordem importa: arquivos base, depois todos os course*.js em ordem numérica
const courseFiles = fs.readdirSync(dataDir).filter(f => /^course\d+\.js$/.test(f)).sort((a, b) => parseInt(a.match(/\d+/)) - parseInt(b.match(/\d+/)));
const files = ['vocab.js', 'lessons.js', 'listening.js', 'speaking.js', 'writing.js', 'reading.js', ...courseFiles, 'course-practice.js'].filter(f => fs.existsSync(path.join(dataDir, f)));
for (const f of files) vm.runInContext(fs.readFileSync(path.join(dataDir, f), 'utf8').replace(/LESSONS\.forEach/, 'window.LESSONS.forEach'), ctx);
const W = ctx.window;
const US = ['en-US-AvaNeural', 'en-US-AndrewNeural', 'en-US-EmmaNeural', 'en-US-BrianNeural'];
const UK = ['en-GB-SoniaNeural', 'en-GB-RyanNeural'];
let k = 0; const rot = () => US[k++ % US.length];
const out = new Map();
const add = (text, voice) => { if (text && !out.has(text)) out.set(text, voice || rot()); };
W.VOCAB.forEach(v => { const vc = rot(); add(v.en, vc); add(v.ex, vc); });
W.LISTENING.dictation.forEach((d, i) => add(d.text, i % 4 === 3 ? UK[i % 2] : rot()));
W.LISTENING.passages.forEach(p => p.lines.forEach(l => add(l.t, l.v)));
W.READING.forEach(r => r.paras.forEach(t => add(t, r.v)));
W.SPEAKING.shadow.forEach(s => add(s.text, rot()));
W.SPEAKING.prompts.forEach(p => add(p.q, rot()));
W.LESSONS.forEach(l => (l.say || []).forEach(t => add(t, rot())));
// curso diário: exemplos da teoria, vocabulário, leitura (um narrador por lição), diálogo e speaking
(W.COURSE || []).forEach(c => {
  c.say.forEach(t => add(t, rot()));
  c.vocab.forEach(v => { const vc = rot(); add(v.en, vc); add(v.ex, vc); });
  const narrator = rot(); c.reading.paras.forEach(t => add(t, narrator));
  c.listening.lines.forEach(l => add(l.t, l.v));
  c.speaking.shadow.forEach(s => add(s.text, rot()));
});
// teste de vocabulário: nomes dos objetos das imagens e as frases de completar já preenchidas
const practice = [...Object.values(W.COURSE_PRACTICE || {}), ...(W.COURSE || []).filter(c => c.pics || c.fill)];
practice.forEach(x => {
  (x.pics || []).forEach(p => add(p.en, rot()));
  (x.fill || []).forEach(f => add(f.s.replace('___', f.a), rot()));
});
fs.writeFileSync(process.argv[3], JSON.stringify([...out].map(([text, voice]) => ({ text, voice }))));
console.log(out.size, 'textos;', (W.COURSE || []).length, 'lições');
