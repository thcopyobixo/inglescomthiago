// Telas e roteamento (#/rota). Estudo livre: tudo aberto, sem sessão fixa, prática sem fim.
const view = $('#view');
const LV_ALLOWED = { b1: ['b1', 'b2'], b2: ['b1', 'b2', 'c1'], c1: ['b2', 'c1'] };
const byLevel = (list) => { const ok = LV_ALLOWED[Store.s.settings.level || 'b2']; const f = list.filter(x => ok.includes(x.lv)); return f.length ? f : list; };
const vocabById = Object.fromEntries(VOCAB.map(v => [v.id, v]));
// trilha em ordem de nível (B1 → B2 → C1), mantendo a ordem original dentro de cada nível
LESSONS.sort((a, b) => ['b1', 'b2', 'c1'].indexOf(a.lv) - ['b1', 'b2', 'c1'].indexOf(b.lv));
const findId = (list, id) => list.find(x => x.id === id);
const mairoLink = (term) => `https://www.mairovergara.com/?s=${encodeURIComponent(term)}`;
const plural = (n, one, many) => `${n.toLocaleString('pt-BR')} ${n === 1 ? one : many}`;
const lvTag = (lv) => `<span class="tag ${lv}">${lv.toUpperCase()}</span>`;
const LV_NAME = { b1: 'Intermediário', b2: 'Intermediário superior', c1: 'Avançado' };
const fmtTime = (min) => min >= 60 ? `${Math.floor(min / 60)}h ${String(Math.round(min % 60)).padStart(2, '0')}` : `${Math.round(min)} min`;
const pbtn = (text, label = 'Ouvir') => `<button class="pbtn" data-say="${esc(text)}" aria-label="${label}">${ic('play')}</button>`;

// botões de "ouvir" espalhados pela página: um clique toca, outro para
document.addEventListener('click', (e) => {
  const b = e.target.closest('[data-say]'); if (!b) return;
  const wasOn = b.classList.contains('playing');
  // botões de ícone trocam para "pausa" enquanto tocam; cartões com imagem só ganham destaque
  const off = (x) => { x.classList.remove('playing'); if (x.dataset.html) { x.innerHTML = x.dataset.html; delete x.dataset.html; } };
  $$('[data-say].playing').forEach(off);
  if (wasOn) { Speech.stop(); return; }
  b.classList.add('playing');
  if (b.classList.contains('pbtn')) { b.dataset.html = b.innerHTML; b.innerHTML = ic('pause'); }
  Speech.speak(b.dataset.say, { onend: () => off(b) });
});

function nextLesson() {
  return LESSONS.find(l => !Store.s.lessons[l.id]) || LESSONS[0];
}
const lessonIndex = (id) => LESSONS.findIndex(l => l.id === id);

// ---------- conclusão (o selo se desenha e a nota sobe) ----------
function celebrate({ title, res, xp, primary, secondary }) {
  const target = res.avg == null ? null : Math.round(res.avg * 100);
  view.innerHTML = `<div class="ex-wrap"><div class="celebrate">
      <div class="seal"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></div>
      <h2>${esc(title)}</h2>
      <div class="score" id="cScore">${target == null ? '—' : '0<small>%</small>'}</div>
      <div class="stats-line"><span>${ic('bolt', 'sm')}+${xp} XP</span><span>${ic('clock', 'sm')}${plural(Math.max(1, Math.round(res.secs / 60)), 'minuto', 'minutos')}</span></div>
      <div class="actions" style="justify-content:center;margin-top:32px">
        ${primary ? `<button class="pill" data-primary>${esc(primary.label)}${ic('arrow')}</button>` : ''}
        ${secondary ? `<a class="pill line" href="${secondary.href}">${esc(secondary.label)}</a>` : ''}
      </div>
    </div></div>`;
  if (primary) { const b = $('[data-primary]'); b.onclick = primary.run; b.focus({ preventScroll: true }); }
  if (target != null) {
    const el = $('#cScore'), t0 = performance.now(), dur = 900, reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const tick = (now) => {
      const k = reduce ? 1 : Math.min(1, (now - t0) / dur);
      el.innerHTML = `${Math.round(target * (1 - Math.pow(1 - k, 4)))}<small>%</small>`;
      if (k < 1) requestAnimationFrame(tick);
    };
    setTimeout(() => requestAnimationFrame(tick), 250);
  }
  renderResume();
}

// Prática sem fim: ao terminar uma rodada, "Mais uma rodada" gera outra do mesmo tipo
function practice(factory, title, back) {
  const tasks = factory();
  if (!tasks.length) { toast('Nada para praticar aqui por enquanto'); return; }
  Ex.Runner(view, tasks, {
    title, context: 'prática livre', onExit: () => route(),
    onDone: (res) => {
      const xp = Math.round((res.avg ?? 0) * 10) + 2; Store.addMinutes(res.secs / 60); Store.addXP(xp);
      celebrate({ title: `${title}: rodada concluída`, res, xp, primary: { label: 'Mais uma rodada', run: () => practice(factory, title, back) }, secondary: { label: 'Voltar', href: `#/${back}` } });
    }
  });
}

// Perguntas de compreensão (áudios e leituras)
function quiz(el, qs, onDone) {
  let answered = 0, ok = 0;
  el.innerHTML = qs.map((q, n) => `<div class="qitem" data-n="${n}"><div class="qq">${n + 1}. ${esc(q.q)}</div><div class="opts">${q.opts.map((o, k) => `<button class="opt" data-k="${k}"><span class="key">${String.fromCharCode(65 + k)}</span>${esc(o)}</button>`).join('')}</div></div>`).join('') + '<div id="qres"></div>';
  $$('.qitem', el).forEach(item => {
    const q = qs[+item.dataset.n];
    $$('.opt', item).forEach(b => b.onclick = () => {
      const k = +b.dataset.k; if (k === q.a) ok++;
      $$('.opt', item).forEach((x, j) => { x.disabled = true; if (j === q.a) x.classList.add('right'); else if (j === k) x.classList.add('wrong'); });
      if (++answered === qs.length) {
        const cls = ok === qs.length ? 'ok' : ok >= qs.length / 2 ? 'mid' : 'bad';
        $('#qres', el).innerHTML = `<div class="fb show ${cls}"><div class="fb-title">${ic(cls === 'ok' ? 'check' : 'alert', 'sm')}${ok} de ${qs.length} certas</div>${ok === qs.length ? 'Excelente compreensão.' : 'Releia o texto (ou ouça de novo com o texto visível) e veja onde estava a resposta.'}</div>`;
        onDone(ok / qs.length);
      }
    });
  });
}

// ---------- telas ----------
const R = {};

// ---------- curso diário ----------
// A lição de hoje é sempre a primeira não concluída: quem adianta lições hoje começa amanhã pela seguinte.
const STEPS = [
  { key: 'theory', name: 'Teoria', icon: 'book' },
  { key: 'vocab', name: 'Vocabulário', icon: 'cards' },
  { key: 'reading', name: 'Leitura', icon: 'read' },
  { key: 'listening', name: 'Listening', icon: 'headphones' },
  { key: 'speaking', name: 'Speaking', icon: 'mic' }
];
const cIndex = (id) => COURSE.findIndex(c => c.id === id);
const cState = (id) => Store.s.course[id] || (Store.s.course[id] = { steps: {} });
const cDone = (id) => !!Store.s.course[id]?.done;
const todayLesson = () => COURSE.find(c => !cDone(c.id)) || null;
const doneTodayLesson = () => COURSE.find(c => Store.s.course[c.id]?.done === Store.today()) || null;
const stepsDone = (id) => STEPS.filter(s => Store.s.course[id]?.steps?.[s.key] != null).length;
const nextStep = (id) => STEPS.findIndex(s => Store.s.course[id]?.steps?.[s.key] == null);

// vocabulário das lições entra no deck de revisão (só depois que você faz o teste da lição)
COURSE.forEach((c, ci) => {
  // imagens e frases de completar: vêm na própria lição (lições 11+) ou em course-practice.js (lições 1–10)
  Object.assign(c, (window.COURSE_PRACTICE || {})[c.id] || {});
  c.pics = c.pics || []; c.fill = c.fill || [];
  c.vocab.forEach((v, i) => VOCAB.push({ id: `${c.id}v${i}`, t: 'das lições', lesson: ci + 1, lv: c.lv, en: v.en, pt: v.pt, def: '', ex: v.ex, course: c.id }));
  c.pics.forEach((p, i) => VOCAB.push({ id: `${c.id}p${i}`, t: 'das lições', lesson: ci + 1, lv: c.lv, en: p.en, pt: p.pt, def: '', ex: '', img: p.img, course: c.id }));
});

function stepper(c, active) {
  return `<ol class="stepper">${STEPS.map((s, k) => {
    const v = Store.s.course[c.id]?.steps?.[s.key];
    return `<li><a href="#/aula/${c.id}/${k}" class="${v != null ? 'done' : ''} ${k === active ? 'on' : ''}"><span class="dot">${v != null ? ic('check', 'sm') : k + 1}</span><span class="lbl">${s.name}</span></a></li>`;
  }).join('')}</ol>`;
}

R.home = () => {
  const S = Store.s, tl = todayLesson(), dt = doneTodayLesson();
  const due = Store.dueCards().length;
  const freshAudio = LISTENING.passages.filter(p => !S.seen[p.id]).concat(LISTENING.passages.filter(p => S.seen[p.id])).slice(0, 3);
  const doneN = COURSE.filter(c => cDone(c.id)).length;
  // destaque: a lição de hoje (ou a já concluída hoje, com a opção de adiantar a próxima)
  let hero;
  if (dt) {
    hero = `<p class="day-label">${ic('check', 'sm')}Lição de hoje concluída</p>
      <h1>${esc(dt.title)}</h1>
      <p class="lead">Ótimo trabalho. Amanhã a sua lição será ${tl ? `<b>${esc(tl.title)}</b>` : 'a próxima que for publicada'}. Se quiser, pode adiantar agora.</p>
      <div class="row">${tl ? `<a class="pill" href="#/aula/${tl.id}">Adiantar a próxima lição${ic('arrow')}</a>` : ''}<a class="pill line" href="#/vocab">Revisar vocabulário</a></div>`;
  } else if (tl) {
    const k = stepsDone(tl.id), n = cIndex(tl.id) + 1;
    hero = `<p class="day-label">Lição de hoje · Lição ${n} · ${tl.lv.toUpperCase()}</p>
      <h1>${esc(tl.title)}</h1>
      <p class="lead">${esc(tl.goal)}</p>
      ${stepper(tl, nextStep(tl.id))}
      <div class="row"><a class="pill" href="#/aula/${tl.id}">${k ? `Continuar: ${STEPS[nextStep(tl.id)].name}` : 'Começar a lição de hoje'}${ic('arrow')}</a><a class="pill line" href="#/licoes">Ver todas as lições</a></div>`;
  } else {
    hero = `<p class="day-label">${ic('check', 'sm')}Curso em dia</p><h1>Você concluiu todas as lições publicadas.</h1>
      <p class="lead">Novas lições chegam em breve. Enquanto isso, revise o vocabulário e pratique livremente.</p>
      <div class="row"><a class="pill" href="#/vocab">Revisar vocabulário${ic('arrow')}</a><a class="pill line" href="#/pratica">Prática livre</a></div>`;
  }
  view.innerHTML = `
    <section class="hero today">
      <span class="orb" style="width:96px;height:96px;left:7%;top:84px;background:var(--sage)"></span>
      <span class="orb" style="width:34px;height:34px;right:15%;top:300px;background:var(--mustard-tint)"></span>
      <svg class="squiggle" style="right:7%;top:120px" width="130" height="64" aria-hidden="true"><path d="M4 52 C 30 0, 62 0, 62 32 S 96 62, 126 10" fill="none" stroke="#9CC3A5" stroke-width="5" stroke-linecap="round"/></svg>
      ${hero}
    </section>
    <section class="wrap">
      <div class="hub">
        <a class="tile feature" href="#/licoes">
          <span class="mark">${ic('book')}</span>
          <h3>Suas lições</h3>
          <p>Uma lição completa por dia: teoria, vocabulário, leitura, listening e speaking.</p>
          <div class="next-list">${COURSE.filter(c => !cDone(c.id)).slice(0, 3).map((c, k) => `<span><b>${esc(c.title)}</b>${k === 0 && !dt ? 'hoje' : k === 0 || (k === 1 && !dt) ? 'amanhã' : `em ${k + (dt ? 1 : 0)} dias`}</span>`).join('') || '<span><b>Tudo concluído por enquanto.</b></span>'}</div>
          <span class="foot">${doneN} de ${COURSE.length} concluídas ${ic('arrow')}</span>
        </a>
        <a class="tile" href="#/vocab"><span class="mark">${ic('cards')}</span><h3>Revisão</h3><p>As palavras das suas lições voltam no dia certo para você não esquecer.</p><span class="foot">${due ? `${due} para revisar hoje` : 'Nada pendente hoje'} ${ic('arrow')}</span><span class="orb" style="background:var(--mustard-tint)"></span></a>
        <a class="tile" href="#/listening"><span class="mark">${ic('headphones')}</span><h3>Listening extra</h3><p>Diálogos e histórias com vozes nativas.</p><span class="foot">${LISTENING.passages.length} áudios ${ic('arrow')}</span></a>
        <a class="tile" href="#/leitura"><span class="mark">${ic('read')}</span><h3>Leitura extra</h3><p>Textos com glossário e narração.</p><span class="foot">${READING.length} textos ${ic('arrow')}</span></a>
        <a class="tile" href="#/pratica"><span class="mark">${ic('pen')}</span><h3>Prática livre</h3><p>Speaking, writing, ditado e gramática, quanto quiser.</p><span class="foot">Praticar ${ic('arrow')}</span><span class="orb"></span></a>
      </div>
    </section>
    <section class="band"><div class="in">
      <div><h2>Uma lição por dia. O resto, no seu ritmo.</h2><p>A lição do dia leva você por todas as habilidades. Depois dela, pratique o quanto quiser: tudo conta no seu progresso.</p>
        <div class="row" style="margin-top:28px"><a class="pill cream" href="#/progresso">Ver meu progresso${ic('arrow')}</a></div></div>
      <div class="stats"><div><b>${fmtTime(Store.minutesSince(7))}</b><span>nos últimos 7 dias</span></div><div><b>${S.streak}</b><span>${S.streak === 1 ? 'dia seguido' : 'dias seguidos'}</span></div><div><b>${doneN}</b><span>${doneN === 1 ? 'lição concluída' : 'lições concluídas'}</span></div></div>
    </div></section>
    <section class="section wrap">
      <div class="section-head"><h2>Ouça agora</h2><a class="link" href="#/listening">Todos os áudios ${ic('arrow', 'sm')}</a></div>
      <div class="cards">${freshAudio.map(audioCard).join('')}</div>
    </section>`;
};

// ---------- lista de lições: passadas, hoje e próximos dias ----------
R.licoes = () => {
  const tl = todayLesson(), dt = doneTodayLesson();
  const ti = tl ? cIndex(tl.id) : COURSE.length;
  const when = (c, i) => {
    const st = Store.s.course[c.id];
    if (st?.done) return st.done === Store.today() ? 'concluída hoje' : `concluída em ${new Date(st.done + 'T12:00').toLocaleDateString('pt-BR', { day: 'numeric', month: 'short' })}`;
    const off = i - ti + (dt ? 1 : 0);
    return off === 0 ? 'hoje' : off === 1 ? 'amanhã' : `em ${off} dias`;
  };
  const doneN = COURSE.filter(c => cDone(c.id)).length;
  view.innerHTML = `<div class="wrap">
    <header class="page-head"><h1>Lições</h1><p class="lead">${doneN} de ${COURSE.length} concluídas. Uma lição por dia aparece em destaque no início, mas todas estão abertas: você pode rever as passadas ou adiantar as próximas.</p></header>
    <div class="rows" style="margin-bottom:56px">${COURSE.map((c, i) => {
      const st = Store.s.course[c.id], k = stepsDone(c.id), isToday = tl && c.id === tl.id && !dt;
      return `<a class="lrow ${st?.done ? 'done' : ''} ${isToday ? 'is-today' : ''}" href="#/aula/${c.id}"><span class="n">${String(i + 1).padStart(2, '0')}</span>
        <div><h4>${esc(c.title)}</h4><div class="tiny">${c.lv.toUpperCase()} · ${when(c, i)}${!st?.done && k ? ` · ${k} de 5 etapas` : ''}</div></div>
        <span class="end">${isToday ? '<span class="tag b2">Hoje</span>' : st?.done ? `<span class="check">${ic('check', 'sm')}</span>` : ''}${ic('arrow')}</span></a>`;
    }).join('')}</div>
    <p class="sub" style="margin-bottom:80px">Novas lições são adicionadas aos poucos. Para revisar pontos de gramática soltos, use a <a href="#/gramatica">gramática rápida</a>.</p></div>`;
};

// ---------- uma lição: 5 etapas ----------
R.aula = (id, stepArg) => {
  const c = findId(COURSE, id); if (!c) return go('licoes');
  const n = cIndex(id) + 1;
  let k = stepArg != null && stepArg !== '' ? Math.max(0, Math.min(4, +stepArg)) : nextStep(id);
  if (k < 0) k = 0; // lição concluída: abre na teoria
  Store.setLast(`#/aula/${id}`, `Continuar: Lição ${n}`);
  const s = STEPS[k];
  view.innerHTML = `<div class="narrow lesson">
    <header class="page-head"><a class="crumb" href="#/licoes">${ic('back', 'sm')}Lições</a>
      <div class="meta" style="margin:0 0 10px">${lvTag(c.lv)}<span>Lição ${n} de ${COURSE.length}</span>${cDone(id) ? `<span class="check">${ic('check', 'sm')}concluída</span>` : ''}</div>
      <h1 style="font-size:clamp(34px,4.4vw,54px)">${esc(c.title)}</h1>
      ${stepper(c, k)}</header>
    <div id="step"></div></div>`;
  STEP_VIEW[s.key]($('#step'), c, k);
};

// marca uma etapa como feita e segue para a próxima (ou fecha a lição)
function finishStep(c, key, score, secs = 0) {
  const st = cState(c.id);
  st.steps[key] = score == null ? 1 : Math.max(st.steps[key] || 0, score);
  if (secs) Store.addMinutes(Math.min(40, secs / 60));
  const gained = 5 + Math.round((score ?? 1) * 10);
  Store.addXP(gained);
  const k = STEPS.findIndex(s => s.key === key);
  if (!st.done && STEPS.every(s => st.steps[s.key] != null)) {
    st.done = Store.today(); Store.addXP(30); Store.save();
    const next = todayLesson();
    view.innerHTML = '';
    return celebrate({ title: `Lição ${cIndex(c.id) + 1} concluída`, res: { avg: avgSteps(c.id), secs },
      xp: 30, primary: { label: 'Voltar ao início', run: () => go('') },
      secondary: next ? { label: 'Adiantar a próxima', href: `#/aula/${next.id}` } : null });
  }
  Store.save();
  const nk = STEPS.findIndex((s, j) => j > k && st.steps[s.key] == null);
  // lição já concluída antes, refeita até a última etapa: fecha com a tela de conclusão (sem XP extra)
  if (nk < 0 && k === STEPS.length - 1 && st.done) {
    const next = todayLesson();
    view.innerHTML = '';
    return celebrate({ title: `Lição ${cIndex(c.id) + 1} revisada`, res: { avg: avgSteps(c.id), secs },
      xp: gained, primary: { label: 'Voltar ao início', run: () => go('') },
      secondary: next ? { label: 'Ir para a lição de hoje', href: `#/aula/${next.id}` } : null });
  }
  go(`aula/${c.id}/${nk >= 0 ? nk : Math.min(4, k + 1)}`);
}
const avgSteps = (id) => { const v = STEPS.map(s => Store.s.course[id].steps[s.key]).filter(x => typeof x === 'number'); return v.length ? v.reduce((a, b) => a + b, 0) / v.length : 1; };
const stepNext = (label) => `<div class="step-foot"><button class="pill" data-finish>${label}${ic('arrow')}</button></div>`;

const STEP_VIEW = {
  theory(el, c) {
    const t0 = Date.now();
    el.innerHTML = `<p class="sub step-intro">${esc(c.goal)} Leia com calma, ouça os exemplos e depois siga para o vocabulário.</p>
      <article class="prose">${c.theory}</article>
      <section style="margin-top:44px"><h3>Ouça os exemplos</h3><p class="sub" style="margin-top:4px">Ouça e repita em voz alta, imitando o ritmo e a entonação.</p>
        <div class="say-list">${c.say.map(t => `<div class="say">${pbtn(t)}<span>${esc(t)}</span></div>`).join('')}</div></section>
      ${stepNext('Concluir a teoria')}`;
    $('[data-finish]', el).onclick = () => finishStep(c, 'theory', null, (Date.now() - t0) / 1000);
  },

  vocab(el, c) {
    el.innerHTML = `<p class="sub step-intro">Estude os objetos e as ${c.vocab.length} expressões da lição: toque para ouvir. Depois vem o teste, no estilo Duolingo: imagens, pares, ouvir e escolher, montar frases e completar frases. Tudo entra na sua revisão diária.</p>
      ${c.pics.length ? `<h3 style="margin-bottom:14px">Objetos</h3><div class="pic-study">${c.pics.map(p => `<button class="pic" data-say="${esc(p.en)}"><img src="${Duo.imgSrc(p.img)}" alt="" loading="lazy"><b>${esc(p.en)}</b><span>${esc(p.pt)}</span></button>`).join('')}</div><h3 style="margin:36px 0 6px">Expressões</h3>` : ''}
      <div class="vlist">${c.vocab.map(v => `<div class="vitem"><button class="pbtn" data-pair="${esc(v.en)}|${esc(v.ex)}" aria-label="Ouvir ${esc(v.en)}">${ic('play')}</button><div><b>${esc(v.en)}</b><div class="tiny">${esc(v.pt)} · <i>${esc(v.ex)}</i></div></div><span></span></div>`).join('')}</div>
      ${stepNext('Fazer o teste de vocabulário')}`;
    $$('[data-pair]', el).forEach(b => b.onclick = () => { const [w, ex] = b.dataset.pair.split('|'); Speech.playSeq([w, ex]); });
    $('[data-finish]', el).onclick = () => {
      const tasks = vocabTest(c);
      Ex.Runner(view, tasks, { title: 'Teste de vocabulário', context: `Lição ${cIndex(c.id) + 1}`, onExit: () => route(),
        onDone: (res) => {
          // cada palavra entra no deck: acertou = intervalo normal, errou = revisa amanhã
          // cada palavra testada entra no deck com a pior nota que teve: acertou tudo = intervalo normal, errou = revisa amanhã
          const worst = {};
          res.results.forEach(r => (r.task.vids || []).forEach(id => { worst[id] = Math.min(worst[id] ?? 1, r.score ?? 1); }));
          Object.entries(worst).forEach(([id, sc]) => { if (!Store.s.srs[id]) Store.grade(id, sc >= 0.99 ? 2 : 0); });
          finishStep(c, 'vocab', res.avg ?? 0, res.secs);
        } });
    };
  },

  reading(el, c) {
    const r = c.reading, t0 = Date.now();
    const mark = (t) => { let h = esc(t); for (const [en, pt] of Object.entries(r.gloss)) { const re = new RegExp(`\\b(${en.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})\\b`, 'i'); h = h.replace(re, `<span class="gl" title="${esc(pt)}">$1</span>`); } return h; };
    el.innerHTML = `<p class="sub step-intro">Leia o texto (pode ouvir a narração) e responda às perguntas. Palavras pontilhadas mostram a tradução ao passar o mouse.</p>
      <h2 style="font-size:34px;margin-bottom:18px">${esc(r.title)}</h2>
      <div id="pl" style="margin-bottom:30px"></div>
      <article class="article">${r.paras.map(t => `<div class="para">${pbtn(t, 'Ouvir parágrafo')}<p>${mark(t)}</p></div>`).join('')}</article>
      <section style="margin-top:32px"><h3>Glossário</h3>${glossHTML(r.gloss)}</section>
      <section style="margin-top:44px"><h3>Perguntas</h3><div class="qblock" id="qz" style="margin-top:16px"></div></section>
      <div id="nx"></div>`;
    const ps = $$('.article p', el);
    mountPlayer($('#pl', el), r.paras, { label: `Ouvir o texto · ${r.paras.length} parágrafos`, onLine: (i) => ps.forEach((p, j) => p.classList.toggle('active', j === i)) });
    quiz($('#qz', el), r.qs, (ratio) => { $('#nx', el).innerHTML = stepNext('Seguir para o listening'); $('[data-finish]', el).onclick = () => finishStep(c, 'reading', ratio, (Date.now() - t0) / 1000); });
  },

  listening(el, c) {
    const p = c.listening, t0 = Date.now();
    el.innerHTML = `<p class="sub step-intro">${esc(p.place)}. Primeiro ouça sem ler, responda às perguntas e depois faça um ditado curto com frases do áudio.</p>
      <div id="pl"></div>
      <div class="spread" style="margin-top:22px"><h3>Transcrição</h3><button class="pill soft sm" data-tr>${ic('text', 'sm')}Mostrar texto</button></div>
      <div class="script hidden" id="script">${p.lines.map((l, k) => `<div class="line ${p.kind === 'talk' ? 'talk' : ''}" data-k="${k}"><span class="s">${esc(l.s)}</span><span class="t">${esc(l.t)}</span></div>`).join('')}</div>
      <section style="margin-top:44px"><h3>Perguntas</h3><div class="qblock" id="qz" style="margin-top:16px"></div></section>
      <div id="nx"></div>`;
    const lines = $$('.line', el);
    const player = mountPlayer($('#pl', el), p.lines.map(l => l.t), { label: p.kind === 'dialogue' ? `Diálogo · ${p.lines.length} falas` : `Fala · ${p.lines.length} trechos`, onLine: (k) => lines.forEach((x, j) => x.classList.toggle('active', j === k)) });
    lines.forEach(x => x.onclick = () => player.play(+x.dataset.k));
    $('[data-tr]', el).onclick = (e) => { const s = $('#script', el); s.classList.toggle('hidden'); e.currentTarget.innerHTML = `${ic('text', 'sm')}${s.classList.contains('hidden') ? 'Mostrar texto' : 'Esconder texto'}`; };
    quiz($('#qz', el), p.qs, (ratio) => {
      $('#script', el).classList.remove('hidden');
      $('#nx', el).innerHTML = stepNext('Fazer o ditado (3 frases)');
      $('[data-finish]', el).onclick = () => {
        // ditado com as 3 falas mais curtas do próprio áudio
        const picks = p.lines.map((l, i) => ({ l, i })).filter(x => x.l.t.split(' ').length >= 5).sort((a, b) => a.l.t.length - b.l.t.length).slice(0, 3);
        Ex.Runner(view, picks.map(x => ({ type: 'dict', item: { id: `${c.id}d${x.i}`, lv: c.lv, text: x.l.t } })), { title: 'Ditado', context: `Lição ${cIndex(c.id) + 1}`, onExit: () => route(),
          onDone: (res) => finishStep(c, 'listening', (ratio + (res.avg ?? 0)) / 2, (Date.now() - t0) / 1000) });
      };
    });
  },

  speaking(el, c) {
    const sp = c.speaking;
    el.innerHTML = `<p class="sub step-intro">Última etapa. Ouça cada frase, repita em voz alta e veja o que o reconhecimento entendeu. No fim, fale livremente por até 60 segundos sobre o tema proposto.</p>
      ${micNotice()}
      <div class="say-list">${sp.shadow.map(s => `<div class="say">${pbtn(s.text)}<span>${esc(s.text)}</span></div>`).join('')}</div>
      <div class="panel flat" style="margin-top:28px"><h3>Fala livre</h3><p style="margin-top:8px;font-size:17px">${esc(sp.prompt.q)}</p><p class="tiny" style="margin-top:8px">Tente usar: ${sp.prompt.hints.map(esc).join(', ')}</p></div>
      ${stepNext('Começar o speaking')}`;
    $('[data-finish]', el).onclick = () => {
      const n = cIndex(c.id) + 1;
      const tasks = [...sp.shadow.map((s, i) => ({ type: 'shadow', item: { id: `${c.id}s${i}`, lv: c.lv, focus: `Lição ${n}`, tip: s.tip, text: s.text } })),
        { type: 'talk', item: { id: `${c.id}t`, lv: c.lv, q: sp.prompt.q, hints: sp.prompt.hints }, secs: 60 }];
      Ex.Runner(view, tasks, { title: 'Speaking', context: `Lição ${n}`, onExit: () => route(), onDone: (res) => finishStep(c, 'speaking', res.avg, res.secs) });
    };
  }
};

// Teste de vocabulário no estilo Duolingo: imagens, pares, ouvir e escolher, montar frases e completar 7 frases.
function vocabTest(c) {
  const V = c.vocab.map((v, i) => ({ ...v, vid: `${c.id}v${i}` }));
  const P = shuffle(c.pics.map((p, i) => ({ ...p, vid: `${c.id}p${i}` })));
  const picOpts = (p) => shuffle([p, ...shuffle(c.pics.filter(x => x.en !== p.en)).slice(0, 3)]);
  const listen = (v) => ({ type: 'listenpick', vids: [v.vid], word: v, opts: shuffle([v.en, ...shuffle(V.filter(x => x !== v)).slice(0, 3).map(x => x.en)]) });
  // frases curtas dos exemplos para "toque no que ouvir", com 3 palavras de outros exemplos como distração
  const shortEx = shuffle(V.filter(v => v.ex.split(' ').length <= 10));
  const build = (v) => {
    const own = new Set(v.ex.split(/\s+/).map(w => w.toLowerCase()));
    const extra = shuffle([...new Set(V.filter(x => x !== v).flatMap(x => x.ex.split(/\s+/)))].filter(w => !own.has(w.toLowerCase()))).slice(0, 3);
    return { type: 'build', vids: [v.vid], text: v.ex, extra };
  };
  const half = Math.ceil(V.length / 2), sv = shuffle(V);
  const tasks = [];
  if (P[0]) tasks.push({ type: 'pickimg', vids: [P[0].vid], word: P[0], options: picOpts(P[0]) });
  tasks.push({ type: 'pairs', vids: sv.slice(0, half).map(v => v.vid), items: sv.slice(0, Math.min(half, 5)) });
  tasks.push(listen(sv[0]));
  if (P[2]) tasks.push({ type: 'sayimg', vids: [P[2].vid], pic: P[2] });
  if (shortEx[0]) tasks.push(build(shortEx[0]));
  if (P[1]) tasks.push({ type: 'pickimg', vids: [P[1].vid], word: P[1], options: picOpts(P[1]) });
  tasks.push({ type: 'pairs', vids: sv.slice(half).map(v => v.vid), items: sv.slice(half, half + 5) });
  if (c.fill.length) tasks.push({ type: 'fill', items: shuffle(c.fill) });
  tasks.push(listen(sv[half]));
  if (P[3]) tasks.push({ type: 'sayimg', vids: [P[3].vid], pic: P[3] });
  if (shortEx[1]) tasks.push(build(shortEx[1]));
  return tasks;
}

// ---------- gramática rápida (as lições curtas de antes) ----------
R.gramatica = () => {
  view.innerHTML = `<div class="wrap">
    <header class="page-head"><a class="crumb" href="#/pratica">${ic('back', 'sm')}Prática</a><h1>Gramática rápida</h1><p class="lead">Explicações curtas e exercícios sobre pontos específicos. Bom para revisar o que apareceu nas lições.</p></header>
    <div class="rows" style="margin-bottom:80px">${LESSONS.map((l, i) => { const p = Store.s.lessons[l.id]; return `<a class="lrow ${p ? 'done' : ''}" href="#/licao/${l.id}"><span class="n">${String(i + 1).padStart(2, '0')}</span><div><h4>${esc(l.title)}</h4><div class="tiny">${l.lv.toUpperCase()} · ${esc(l.tag)} · ${l.ex.length} exercícios</div></div><span class="end">${p ? `<span class="check">${ic('check', 'sm')}${Math.round(p.best * 100)}%</span>` : ''}${ic('arrow')}</span></a>`; }).join('')}</div></div>`;
};

// ---------- prática livre ----------
R.pratica = () => {
  view.innerHTML = `<div class="wrap">
    <header class="page-head"><h1>Prática livre</h1><p class="lead">Depois da lição do dia, continue praticando o quanto quiser. Cada atividade termina com "mais uma rodada".</p></header>
    <div class="cards" style="margin-bottom:80px">
      ${[['listening', 'headphones', 'Listening', `${LISTENING.passages.length} áudios e ditado sem fim`], ['leitura', 'read', 'Leitura', `${READING.length} textos com glossário`], ['speaking', 'mic', 'Speaking', 'Shadowing por som e fala livre'], ['writing', 'pen', 'Writing', 'Correção, tradução, transformação e redação'], ['gramatica', 'book', 'Gramática rápida', `${LESSONS.length} pontos de gramática`], ['vocab', 'cards', 'Vocabulário', 'Revisão e palavras novas']]
        .map(([r, i, t, d]) => `<a class="card" href="#/${r}"><div class="top"><span class="mark-sm">${ic(i)}</span></div><h3>${t}</h3><p>${d}</p><div class="foot"><span>Abrir</span>${ic('arrow')}</div></a>`).join('')}
    </div></div>`;
};

R.licao = (id) => {
  const l = findId(LESSONS, id); if (!l) return go('licoes');
  const i = lessonIndex(id), prev = LESSONS[i - 1], next = LESSONS[i + 1];
  Store.setLast(`#/licao/${id}`, `Continuar: ${l.title}`);
  view.innerHTML = `<div class="narrow">
    <header class="page-head"><a class="crumb" href="#/gramatica">${ic('back', 'sm')}Gramática rápida</a><h1 style="font-size:clamp(36px,4.6vw,58px)">${esc(l.title)}</h1>
      <div class="meta">${lvTag(l.lv)}<span>${esc(l.tag)}</span><span>·</span><span>Lição ${i + 1} de ${LESSONS.length}</span></div></header>
    <article class="prose">${l.body}</article>
    <section style="margin-top:44px"><h3>Ouça os exemplos</h3><p class="sub" style="margin-top:4px">Ouça e repita em voz alta, imitando o ritmo e a entonação.</p>
      <div class="say-list">${l.say.map(t => `<div class="say">${pbtn(t)}<span>${esc(t)}</span></div>`).join('')}</div></section>
    <div class="actions" style="margin-top:36px">
      <button class="pill" data-start>Fazer os ${l.ex.length} exercícios${ic('arrow')}</button>
      <a class="pill line" href="${mairoLink(l.mairo)}" target="_blank" rel="noopener">Ver mais no Mairo Vergara${ic('external', 'sm')}</a>
    </div>
    <nav class="pager">${prev ? `<a href="#/licao/${prev.id}"><span>← Anterior</span><b>${esc(prev.title)}</b></a>` : ''}${next ? `<a class="next" href="#/licao/${next.id}"><span>Próxima →</span><b>${esc(next.title)}</b></a>` : ''}</nav>
    <div style="height:72px"></div></div>`;
  $('[data-start]').onclick = () => runLesson(l);
};

function runLesson(l) {
  const i = lessonIndex(l.id), next = LESSONS[i + 1];
  Ex.Runner(view, shuffle(l.ex).map(e => ({ ...e })), {
    title: l.title, onExit: () => route(),
    onDone: (res) => {
      const prev = Store.s.lessons[l.id];
      Store.s.lessons[l.id] = { done: true, best: Math.max(prev?.best || 0, res.avg ?? 0) }; Store.save();
      const xp = 10 + Math.round((res.avg ?? 0) * 10); Store.addMinutes(res.secs / 60); Store.addXP(xp);
      if (next) Store.setLast(`#/licao/${next.id}`, `Próxima: ${next.title}`);
      celebrate({ title: 'Lição concluída', res, xp,
        primary: next ? { label: `Próxima: ${next.title}`, run: () => go(`licao/${next.id}`) } : { label: 'Refazer exercícios', run: () => runLesson(l) },
        secondary: { label: 'Voltar à lição', href: `#/licao/${l.id}` } });
    }
  });
}

// ---------- listening ----------
function audioCard(p) {
  const sc = Store.s.scores[p.id];
  return `<a class="card ${sc != null ? 'done' : ''}" href="#/audio/${p.id}">
    <div class="top">${lvTag(p.lv)}<span class="tiny row" style="gap:6px">${ic(p.kind === 'dialogue' ? 'users' : 'headphones', 'sm')}${p.kind === 'dialogue' ? 'Diálogo' : 'Fala'}</span></div>
    <h3>${esc(p.title)}</h3><p>${esc(p.place)}</p>
    <div class="foot"><span>${p.qs.length} perguntas</span>${sc != null ? `<span class="check">${ic('check', 'sm')}${Math.round(sc * 100)}%</span>` : ic('play')}</div></a>`;
}

R.listening = () => {
  view.innerHTML = `<div class="wrap">
    <header class="page-head"><h1>Listening</h1><p class="lead">Diálogos, histórias e conversas reais do dia a dia, gravados com vozes neurais nativas. Ouça quantas vezes quiser.</p></header>
    <div class="section-head" style="margin-bottom:20px"><h2 style="font-size:32px">Áudios com perguntas</h2><span class="sub">${LISTENING.passages.length} áudios</span></div>
    <div class="cards">${LISTENING.passages.map(audioCard).join('')}</div>
    <section class="panel flat" style="margin:56px 0 80px"><div class="spread" style="align-items:flex-start">
      <div style="max-width:52ch"><h3>Ditado sem fim</h3><p class="sub" style="margin-top:6px">Ouça frases com fala natural (contrações, linking) e escreva o que ouviu. Ao terminar 8 frases, continue com mais 8, quantas vezes quiser.</p></div>
      <div class="row">${['b1', 'b2', 'c1'].map(l => `<button class="pill soft" data-lv="${l}">${l.toUpperCase()}</button>`).join('')}<button class="pill" data-lv="">Misturado</button></div></div></section>
  </div>`;
  $$('[data-lv]').forEach(b => b.onclick = () => {
    const pool = b.dataset.lv ? LISTENING.dictation.filter(x => x.lv === b.dataset.lv) : byLevel(LISTENING.dictation);
    practice(() => pickFresh(pool, 8).map(item => ({ type: 'dict', item })), 'Ditado', 'listening');
  });
};

// Player compartilhado por áudios (falas) e leituras (parágrafos)
function mountPlayer(box, texts, { label, onLine }) {
  let idx = 0, on = false, rate = Store.s.settings.rate || 1;
  box.innerHTML = `<div class="player">
    <button class="big" data-pp aria-label="Tocar">${ic('play')}</button>
    <div class="info"><b>${esc(label)}</b><span data-pos>${texts.length} trechos</span></div>
    <div class="ctrl"><div class="seg" role="group" aria-label="Velocidade">${[[1, '1×'], [0.85, '0,85×'], [0.7, '0,7×']].map(([r, t]) => `<button data-rate="${r}" class="${r === rate ? 'on' : ''}">${t}</button>`).join('')}</div></div>
    <div class="prog"><i></i></div></div>`;
  const pp = $('[data-pp]', box), pos = $('[data-pos]', box), bar = $('.prog i', box);
  const setOn = (v) => { on = v; pp.innerHTML = ic(v ? 'pause' : 'play'); pp.setAttribute('aria-label', v ? 'Pausar' : 'Tocar'); };
  const play = (from) => {
    idx = from; setOn(true);
    Speech.playSeq(texts, { rate, from, onLine: (i) => { idx = i; pos.textContent = `Trecho ${i + 1} de ${texts.length}`; bar.style.width = `${(i + 1) / texts.length * 100}%`; onLine && onLine(i); },
      onend: () => { setOn(false); idx = 0; onLine && onLine(-1); pos.textContent = 'Fim. Toque para ouvir de novo.'; } });
  };
  pp.onclick = () => { if (on) { Speech.stop(); setOn(false); } else play(idx); };
  $$('[data-rate]', box).forEach(b => b.onclick = () => { rate = +b.dataset.rate; $$('[data-rate]', box).forEach(x => x.classList.toggle('on', x === b)); if (on) play(idx); });
  return { play, stop: () => { Speech.stop(); setOn(false); } };
}

const glossHTML = (g) => `<div class="gloss">${Object.entries(g).map(([en, pt]) => `<div><b>${esc(en)}</b><span>${esc(pt)}</span></div>`).join('')}</div>`;

R.audio = (id) => {
  const p = findId(LISTENING.passages, id); if (!p) return go('listening');
  const t0 = Date.now(), i = LISTENING.passages.indexOf(p), next = LISTENING.passages[i + 1] || LISTENING.passages[0];
  Store.setLast(`#/audio/${id}`, `Continuar: ${p.title}`);
  view.innerHTML = `<div class="narrow">
    <header class="page-head"><a class="crumb" href="#/listening">${ic('back', 'sm')}Listening</a><h1 style="font-size:clamp(36px,4.6vw,58px)">${esc(p.title)}</h1>
      <div class="meta">${lvTag(p.lv)}<span>${esc(p.place)}</span></div></header>
    <p class="sub" style="margin-bottom:16px">Primeiro ouça sem ler. Depois responda, e só então mostre o texto e ouça de novo acompanhando.</p>
    <div id="pl"></div>
    <div class="spread" style="margin-top:22px"><h3>Transcrição</h3><button class="pill soft sm" data-tr>${ic('text', 'sm')}Mostrar texto</button></div>
    <div class="script hidden" id="script">${p.lines.map((l, k) => `<div class="line ${p.kind === 'talk' ? 'talk' : ''}" data-k="${k}"><span class="s">${esc(l.s)}</span><span class="t">${esc(l.t)}</span></div>`).join('')}</div>
    <section style="margin-top:48px"><h3>Perguntas</h3><div class="qblock" id="qz" style="margin-top:16px"></div></section>
    <section style="margin-top:48px"><h3>Vocabulário do áudio</h3>${glossHTML(p.gloss)}</section>
    <nav class="pager"><a class="next" href="#/audio/${next.id}"><span>Próximo áudio →</span><b>${esc(next.title)}</b></a></nav>
    <div style="height:72px"></div></div>`;
  const lines = $$('.line');
  const player = mountPlayer($('#pl'), p.lines.map(l => l.t), { label: p.kind === 'dialogue' ? `Diálogo · ${p.lines.length} falas` : `Fala · ${p.lines.length} trechos`,
    onLine: (k) => { lines.forEach((el, j) => el.classList.toggle('active', j === k)); if (k >= 0 && !$('#script').classList.contains('hidden')) lines[k].scrollIntoView({ block: 'nearest', behavior: 'smooth' }); } });
  lines.forEach(el => el.onclick = () => player.play(+el.dataset.k));
  $('[data-tr]').onclick = (e) => { const s = $('#script'); s.classList.toggle('hidden'); e.currentTarget.innerHTML = `${ic('text', 'sm')}${s.classList.contains('hidden') ? 'Mostrar texto' : 'Esconder texto'}`; };
  quiz($('#qz'), p.qs, (ratio) => {
    Store.setScore(p.id, ratio); Store.s.listen.n++; if (ratio === 1) Store.s.listen.ok++;
    Store.addMinutes(Math.min(30, (Date.now() - t0) / 60000)); Store.addXP(10 + Math.round(ratio * 10));
    $('#script').classList.remove('hidden'); $('[data-tr]').innerHTML = `${ic('text', 'sm')}Esconder texto`;
  });
};

// ---------- leitura ----------
R.leitura = () => {
  view.innerHTML = `<div class="wrap">
    <header class="page-head"><h1>Leitura</h1><p class="lead">Textos escritos com cuidado, do B1 ao C1, com glossário, perguntas e narração por parágrafo.</p></header>
    <div class="cards" style="margin-bottom:80px">${READING.map(r => { const sc = Store.s.scores[r.id]; return `<a class="card ${sc != null ? 'done' : ''}" href="#/ler/${r.id}">
      <div class="top">${lvTag(r.lv)}<span class="tiny">${r.mins} min de leitura</span></div><h3>${esc(r.title)}</h3><p>${esc(r.paras[0].slice(0, 120))}…</p>
      <div class="foot"><span>${r.qs.length} perguntas</span>${sc != null ? `<span class="check">${ic('check', 'sm')}${Math.round(sc * 100)}%</span>` : ic('arrow')}</div></a>`; }).join('')}</div></div>`;
};

R.ler = (id) => {
  const r = findId(READING, id); if (!r) return go('leitura');
  const t0 = Date.now(), i = READING.indexOf(r), next = READING[i + 1] || READING[0];
  Store.setLast(`#/ler/${id}`, `Continuar: ${r.title}`);
  // marca no texto as palavras do glossário (primeira ocorrência)
  const mark = (t) => { let h = esc(t); for (const [en, pt] of Object.entries(r.gloss)) { const re = new RegExp(`\\b(${en.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})\\b`, 'i'); h = h.replace(re, `<span class="gl" title="${esc(pt)}">$1</span>`); } return h; };
  view.innerHTML = `<div class="narrow">
    <header class="page-head"><a class="crumb" href="#/leitura">${ic('back', 'sm')}Leitura</a><h1 style="font-size:clamp(36px,4.6vw,58px)">${esc(r.title)}</h1>
      <div class="meta">${lvTag(r.lv)}<span>${r.mins} min de leitura</span><span>·</span><span>Palavras pontilhadas têm tradução: passe o mouse</span></div></header>
    <div id="pl" style="margin-bottom:34px"></div>
    <article class="article">${r.paras.map((t, k) => `<div class="para">${pbtn(t, 'Ouvir parágrafo')}<p data-k="${k}">${mark(t)}</p></div>`).join('')}</article>
    <section style="margin-top:36px"><h3>Glossário</h3>${glossHTML(r.gloss)}</section>
    <section style="margin-top:48px"><h3>Perguntas</h3><div class="qblock" id="qz" style="margin-top:16px"></div></section>
    <nav class="pager"><a class="next" href="#/ler/${next.id}"><span>Próximo texto →</span><b>${esc(next.title)}</b></a></nav>
    <div style="height:72px"></div></div>`;
  const ps = $$('.article p');
  mountPlayer($('#pl'), r.paras, { label: `Ouvir o texto todo · ${r.paras.length} parágrafos`, onLine: (k) => ps.forEach((el, j) => el.classList.toggle('active', j === k)) });
  quiz($('#qz'), r.qs, (ratio) => { Store.setScore(r.id, ratio); Store.addMinutes(Math.min(40, (Date.now() - t0) / 60000)); Store.addXP(10 + Math.round(ratio * 10)); });
};

// ---------- speaking ----------
const FOCUS_DESC = { 'TH': 'O som que não existe em português: think, this, three.', '-ED': 'Passado sem o "ê" extra: worked, played, wanted.', 'Linking': 'Palavras que se juntam na fala rápida: pick it up, did you.', 'Vogais': 'Vogais curtas e longas: ship × sheep, full × fool.', 'R / H': 'O R americano e o H que é só ar.', 'Entonação': 'Quando a voz sobe, quando desce, onde cai a ênfase.', 'Fluência': 'Frases do dia a dia ditas num fôlego só.' };
function micNotice() {
  const n = (msg) => `<div class="notice">${ic('alert', 'sm')}<span>${msg}</span></div>`;
  if (!Speech.canListen) return n(Speech.errMsg('unsupported'));
  if (location.protocol === 'file:') return n('Você abriu o site direto do arquivo. Para o microfone funcionar bem, use o <b>abrir-site.bat</b>.');
  return '';
}
R.speaking = () => {
  const focuses = [...new Set(SPEAKING.shadow.map(s => s.focus))];
  view.innerHTML = `<div class="wrap">
    <header class="page-head"><h1>Speaking</h1><p class="lead">Ouça a voz nativa, fale, e veja palavra por palavra o que o reconhecimento entendeu. Sua voz é gravada para você comparar.</p></header>
    ${micNotice()}
    <div class="section-head" style="margin-bottom:20px"><h2 style="font-size:32px">Shadowing por som</h2><button class="pill" data-f="">Misturar tudo${ic('arrow')}</button></div>
    <div class="cards">${focuses.map(f => `<button class="card" data-f="${esc(f)}"><div class="top"><span class="tag">${esc(f)}</span><span class="tiny">${SPEAKING.shadow.filter(s => s.focus === f).length} frases</span></div><h3>${esc(f)}</h3><p>${esc(FOCUS_DESC[f] || '')}</p><div class="foot"><span>Treinar</span>${ic('mic')}</div></button>`).join('')}</div>
    <div class="section-head" style="margin:64px 0 20px"><h2 style="font-size:32px">Fala livre</h2><span class="sub">60 segundos por tema</span></div>
    <div class="vlist" style="margin-bottom:80px">${SPEAKING.prompts.map(p => `<div class="vitem">${pbtn(p.q, 'Ouvir pergunta')}<div><b>${esc(p.q)}</b><div class="tiny">${p.lv.toUpperCase()} · use: ${p.hints.slice(0, 3).map(esc).join(', ')}</div></div><button class="pill soft sm" data-p="${p.id}">${Store.s.seen[p.id] ? ic('check', 'sm') : ic('mic', 'sm')}Falar</button></div>`).join('')}</div></div>`;
  $$('[data-f]').forEach(b => b.onclick = () => {
    const pool = b.dataset.f ? SPEAKING.shadow.filter(s => s.focus === b.dataset.f) : byLevel(SPEAKING.shadow);
    practice(() => pickFresh(pool, 6).map(item => ({ type: 'shadow', item })), b.dataset.f ? `Shadowing: ${b.dataset.f}` : 'Shadowing', 'speaking');
  });
  $$('[data-p]').forEach(b => b.onclick = () => {
    const first = findId(SPEAKING.prompts, b.dataset.p); let used = false;
    practice(() => { const item = used ? pickFresh(SPEAKING.prompts, 1)[0] : first; used = true; return [{ type: 'talk', item, secs: 60 }]; }, 'Fala livre', 'speaking');
  });
};

// ---------- vocabulário ----------
function reviewTasks(max = 15, onlyNew = false) {
  const due = onlyNew ? [] : shuffle(Store.dueCards()).slice(0, max);
  const fresh = byLevel(VOCAB.filter(v => !Store.s.srs[v.id] && !v.course)); // palavras das lições entram pelo teste da lição
  const news = fresh.slice(0, Math.max(0, (onlyNew ? 10 : Math.min(Store.newCardsLeft(), max - due.length)))).map(v => v.id);
  let ids = [...due, ...news];
  if (!ids.length) ids = shuffle(Object.keys(Store.s.srs)).slice(0, 10);
  if (!ids.length) ids = fresh.slice(0, 10).map(v => v.id);
  const tasks = ids.map(id => ({ type: 'flash', card: vocabById[id] }));
  const requeue = (t) => tasks.push({ ...t });
  tasks.forEach(t => t.requeue = requeue);
  return tasks;
}
R.vocab = () => {
  const types = [...new Set(VOCAB.map(v => v.t))];
  const learning = Object.keys(Store.s.srs).length, due = Store.dueCards().length;
  const mature = Object.values(Store.s.srs).filter(c => c.ivl >= 21).length;
  view.innerHTML = `<div class="wrap">
    <header class="page-head"><h1>Vocabulário</h1><p class="lead">${VOCAB.length} expressões, ${learning} em estudo, ${mature} dominadas. A revisão traz cada palavra de volta pouco antes de você esquecer.</p>
      <div class="row" style="margin-top:26px"><button class="pill" data-rev>${ic('cards')}Revisar${due ? ` (${due})` : ''}</button><button class="pill line" data-new>Aprender 10 novas</button></div></header>
    <div class="row" style="margin-bottom:22px;align-items:flex-start">
      <input class="field search" placeholder="Buscar palavra ou tradução…" id="q" aria-label="Buscar no vocabulário">
      <div class="tabs" style="margin:0" id="ft"><button class="on" data-t="">Todas</button>${types.map(t => `<button data-t="${esc(t)}">${esc(t)}</button>`).join('')}</div>
    </div>
    <div class="vlist" id="vl" style="margin-bottom:80px"></div></div>`;
  let ft = '';
  const draw = () => {
    const q = Check.norm($('#q').value);
    const L = VOCAB.filter(v => (!ft || v.t === ft) && (!q || Check.norm(v.en + ' ' + v.pt).includes(q)));
    $('#vl').innerHTML = L.map(v => {
      const c = Store.s.srs[v.id];
      const st = !c ? 'nova' : c.due <= Store.today() ? '<span style="color:var(--warn)">revisar hoje</span>' : `próxima em ${Math.max(0, Math.round((new Date(c.due) - new Date(Store.today())) / 864e5))} d`;
      return `<div class="vitem">${pbtn(v.en + '|' + v.ex, `Ouvir ${esc(v.en)}`)}<div><b>${esc(v.en)}</b> <span class="tag ${v.lv}" style="vertical-align:3px">${v.lv.toUpperCase()}</span><div class="tiny">${esc(v.pt)} · <i>${esc(v.ex)}</i></div></div><span class="tiny tnum">${st}</span></div>`;
    }).join('') || '<div class="empty">Nada encontrado para essa busca.</div>';
    // palavra + exemplo em sequência
    $$('#vl .pbtn').forEach(b => { const [w, ex] = b.dataset.say.split('|'); b.removeAttribute('data-say'); b.onclick = () => Speech.playSeq([w, ex]); });
  };
  $('#q').oninput = draw;
  $$('#ft button').forEach(b => b.onclick = () => { $$('#ft button').forEach(x => x.classList.remove('on')); b.classList.add('on'); ft = b.dataset.t; draw(); });
  $('[data-rev]').onclick = () => practice(() => reviewTasks(20), 'Revisão', 'vocab');
  $('[data-new]').onclick = () => practice(() => reviewTasks(10, true), 'Palavras novas', 'vocab');
  draw();
};

// ---------- writing ----------
R.writing = () => {
  const modes = [['fix', 'Corrigir erros', 'Os erros mais comuns de brasileiros. Reescreva a frase certa.'], ['translate', 'Traduzir', 'Do português para um inglês natural, não palavra por palavra.'], ['transform', 'Transformar', 'Reescreva usando a estrutura pedida, como nas provas de Cambridge.']];
  const J = Store.s.journal;
  view.innerHTML = `<div class="wrap">
    <header class="page-head"><h1>Writing</h1><p class="lead">${plural(Store.s.write.n, 'frase escrita', 'frases escritas')}, ${Store.s.write.n ? Math.round(Store.s.write.ok / Store.s.write.n * 100) : 0}% de acerto. Cada rodada tem 6 frases, e você faz quantas rodadas quiser.</p></header>
    <div class="cards">${modes.map(([m, t, d]) => { const pool = WRITING[m], seen = pool.filter(x => Store.s.seen[x.id]).length; return `<button class="card" data-m="${m}"><div class="top"><span class="tag">${pool.length} frases</span><span class="tiny">${seen} feitas</span></div><h3>${t}</h3><p>${d}</p><div class="foot"><span>Começar</span>${ic('arrow')}</div></button>`; }).join('')}</div>
    <div class="section-head" style="margin:64px 0 20px"><h2 style="font-size:32px">Redação</h2><span class="sub">Textos livres com expressões-alvo</span></div>
    <div class="vlist">${WRITING.prompts.map(p => `<div class="vitem"><span class="tag ${p.lv}">${p.lv.toUpperCase()}</span><div><b style="font-size:19px">${esc(p.q)}</b><div class="tiny">mínimo ${p.min} palavras · use: ${p.target.map(esc).join(', ')}</div></div><button class="pill soft sm" data-e="${p.id}">${Store.s.seen[p.id] ? ic('check', 'sm') : ic('pen', 'sm')}Escrever</button></div>`).join('')}</div>
    <div class="section-head" style="margin:64px 0 20px"><h2 style="font-size:32px">Seu diário</h2><span class="sub">${plural(J.length, 'texto', 'textos')}</span></div>
    ${J.length ? J.map((j, k) => `<div class="panel"><div class="spread" style="align-items:flex-start"><h3 style="font-size:21px;max-width:60ch">${esc(j.q)}</h3><span class="tiny tnum">${j.date} · ${j.words} palavras</span></div><p style="margin-top:14px;white-space:pre-wrap;color:var(--soft);max-width:72ch">${esc(j.text)}</p><div class="actions"><button class="pill soft sm" data-copy="${k}">${ic('copy', 'sm')}Copiar texto</button></div></div>`).join('') : '<div class="empty">Seus textos de redação aparecem aqui.</div>'}
    <div style="height:80px"></div></div>`;
  $$('[data-m]').forEach(b => b.onclick = () => { const m = b.dataset.m; practice(() => pickFresh(byLevel(WRITING[m]), 6).map(item => ({ type: 'write', mode: m, item })), modes.find(x => x[0] === m)[1], 'writing'); });
  $$('[data-e]').forEach(b => b.onclick = () => {
    const first = findId(WRITING.prompts, b.dataset.e); let used = false; // depois do tema escolhido, sugere um ainda não feito
    practice(() => { const item = used ? pickFresh(byLevel(WRITING.prompts), 1)[0] : first; used = true; return [{ type: 'essay', item }]; }, 'Redação', 'writing');
  });
  $$('[data-copy]').forEach(b => b.onclick = () => { navigator.clipboard.writeText(J[+b.dataset.copy].text); toast('Texto copiado'); });
};

// ---------- progresso ----------
function heat(n) {
  let out = '';
  for (let k = n - 1; k >= 0; k--) {
    const iso = Store.addDays(Store.today(), -k); const m = Store.s.days[iso]?.min || 0;
    out += `<i class="${m >= 45 ? 'l3' : m >= 15 ? 'l2' : m > 0 ? 'l1' : ''}${k === 0 ? ' today' : ''}" title="${iso}: ${Math.round(m)} min"></i>`;
  }
  return out;
}
R.progresso = () => {
  const S = Store.s, totalMin = Object.values(S.days).reduce((a, d) => a + d.min, 0);
  const pct = (a, b) => b ? Math.round(a / b * 100) + '%' : '—';
  const sk = (name, val, note) => `<div class="skillrow"><span>${name}</span><span class="tiny">${note}</span><b class="tnum" style="text-align:right">${val}</b></div>`;
  view.innerHTML = `<div class="wrap"><header class="page-head"><h1>Progresso</h1><p class="lead">Tudo o que você estudou, sem metas nem cobranças. Fica salvo neste navegador.</p></header></div>
    <section class="band"><div class="in"><div><h2>${fmtTime(totalMin)} de inglês até agora.</h2><p>${plural(S.xp, 'ponto de experiência', 'pontos de experiência')} somados em lições, áudios, leituras e práticas.</p></div>
      <div class="stats"><div><b>${fmtTime(Store.minutesSince(7))}</b><span>últimos 7 dias</span></div><div><b>${S.streak}</b><span>${S.streak === 1 ? 'dia seguido' : 'dias seguidos'}</span></div><div><b>${Object.values(S.srs).filter(c => c.ivl >= 21).length}</b><span>palavras dominadas</span></div></div></div></section>
    <div class="wrap" style="padding-top:56px;padding-bottom:80px">
      <div class="grid2" style="align-items:start">
        <section class="panel"><div class="spread"><h3>Últimos 5 meses</h3><div class="legend">menos <i style="background:var(--rule)"></i><i style="background:#C9DCC4"></i><i style="background:#7FB08F"></i><i style="background:var(--green)"></i> 45+ min</div></div><div class="heat" style="margin-top:18px">${heat(147)}</div></section>
        <section class="panel"><h3 style="margin-bottom:8px">Por habilidade</h3>
          ${sk('Lições', `${LESSONS.filter(l => S.lessons[l.id]).length}/${LESSONS.length}`, 'concluídas')}
          ${sk('Listening', `${LISTENING.passages.filter(p => S.scores[p.id] != null).length}/${LISTENING.passages.length}`, 'áudios respondidos')}
          ${sk('Leitura', `${READING.filter(r => S.scores[r.id] != null).length}/${READING.length}`, 'textos lidos')}
          ${sk('Speaking', S.speak.n ? Math.round(S.speak.sum / S.speak.n * 100) : '—', `nota média em ${plural(S.speak.n, 'tentativa', 'tentativas')}`)}
          ${sk('Writing', pct(S.write.ok, S.write.n), `acerto em ${plural(S.write.n, 'frase', 'frases')}`)}
          ${sk('Ditado', pct(S.listen.ok, S.listen.n), 'com 90% ou mais')}</section>
      </div>
      <section class="panel flat" style="margin-top:18px"><h3 style="margin-bottom:8px">Lições</h3>${LESSONS.map(l => { const p = S.lessons[l.id]; return `<div class="skillrow"><a href="#/licao/${l.id}" style="color:var(--ink);text-decoration:none">${esc(l.title)}</a><span class="bar"><i style="width:${(p?.best || 0) * 100}%"></i></span><span class="tiny tnum" style="text-align:right">${p ? Math.round(p.best * 100) + '%' : '—'}</span></div>`; }).join('')}</section>
    </div>`;
};

// ---------- ajustes ----------
R.ajustes = () => {
  const st = Store.s.settings, voices = Speech.voices;
  view.innerHTML = `<div class="narrow"><header class="page-head"><h1>Ajustes</h1><p class="lead">Velocidade do áudio, nível dos exercícios misturados e backup.</p></header>
    <section class="panel">
      <div class="setting"><label class="field-label" for="rt">Velocidade padrão do áudio <span class="tiny tnum" id="rtv">${st.rate}×</span></label><input id="rt" type="range" min="0.6" max="1.2" step="0.05" value="${st.rate}"></div>
      <div class="setting"><button class="pill soft" id="test">${ic('play', 'sm')}Testar voz</button></div>
      <div class="setting"><label class="field-label" for="lv">Seu nível</label><select id="lv" class="field">${[['b1', 'B1: Intermediário'], ['b2', 'B2: Intermediário superior'], ['c1', 'C1: Avançado']].map(([v, l]) => `<option value="${v}" ${(st.level || 'b2') === v ? 'selected' : ''}>${l}</option>`).join('')}</select><div class="tiny" style="margin-top:6px">Usado quando você escolhe "Misturado" ou "Aprender novas".</div></div>
      <div class="setting"><label class="field-label" for="stt">Reconhecimento de voz (speaking)</label><select id="stt" class="field">
        ${[['auto', 'Automático (recomendado)'], ['browser', 'Do navegador (Chrome e Edge)'], ['local', 'Local, no seu computador (qualquer navegador)']].map(([v, l]) => `<option value="${v}" ${(st.stt || 'auto') === v ? 'selected' : ''}>${l}</option>`).join('')}</select>
        <div class="tiny" style="margin-top:6px">O do navegador é mais rápido, mas depende do servidor de voz do Google ou da Microsoft e não funciona no Brave, no Opera, no Firefox ou com algumas VPNs. O local usa o Whisper: baixa ~41 MB na primeira vez e depois funciona em qualquer navegador. No automático, o site troca sozinho para o local se o do navegador falhar.</div>
        <div class="row" style="margin-top:12px"><button class="pill soft sm" id="mic">${ic('mic', 'sm')}Testar microfone</button><span class="tiny" id="micres"></span></div></div>
      <div class="setting"><label class="field-label" for="np">Palavras novas por revisão</label><input id="np" type="number" min="0" max="30" class="field tnum" style="max-width:120px" value="${st.newPerDay}"></div>
      <div class="setting"><label class="field-label" for="vc">Voz reserva (para textos sem áudio gravado)</label><select id="vc" class="field"><option value="">Automática</option>${voices.map(v => `<option ${st.voice === v.name ? 'selected' : ''}>${esc(v.name)}</option>`).join('')}</select><div class="tiny" style="margin-top:6px">Todo o conteúdo do site já tem áudio gravado com vozes neurais. Esta voz só é usada para o texto que você mesmo escreve.</div></div>
    </section>
    <section class="panel"><h3>Conta</h3>${Cloud.user
      ? `<p class="sub" style="margin:6px 0 18px">Você está conectado como <b style="color:var(--ink)">${esc(Cloud.name())}</b> (${esc(Cloud.handle())}). Seu progresso é salvo na nuvem e aparece em qualquer aparelho em que você entrar.</p>
        <div class="row"><a class="pill soft" href="#/nova-senha">Trocar senha</a><button class="pill line" data-logout>Sair da conta</button></div>`
      : `<p class="sub" style="margin:6px 0 0">O login ainda não está ativado, então o progresso fica só neste navegador. Para ativar contas, siga o guia em <b>supabase/COMO-ATIVAR-LOGIN.md</b>.</p>`}</section>
    <section class="panel"><h3>Backup</h3><p class="sub" style="margin:6px 0 18px">${Cloud.user ? 'Uma cópia extra do seu progresso, em arquivo.' : 'Exporte para não perder ou para levar para outro computador.'}</p>
      <div class="row"><button class="pill soft" id="exp">Exportar progresso</button><label class="pill soft">Importar<input type="file" id="imp" accept=".json" hidden></label><button class="pill line" id="rst" style="color:var(--bad);border-color:var(--bad)">Apagar tudo</button></div></section>
    <div style="height:80px"></div></div>`;
  const set = (k, v) => { st[k] = v; Store.save(); };
  $('#rt').oninput = (e) => { set('rate', +e.target.value); $('#rtv').textContent = e.target.value + '×'; };
  $('#lv').onchange = (e) => { set('level', e.target.value); toast('Nível salvo'); };
  $('#np').onchange = (e) => set('newPerDay', Math.max(0, Math.min(30, +e.target.value || 0)));
  $('#vc').onchange = (e) => set('voice', e.target.value);
  $('#stt').onchange = (e) => { set('stt', e.target.value); if (e.target.value === 'auto') { try { localStorage.removeItem('fluentdaily.sttLocal'); } catch {} } toast('Reconhecimento de voz salvo'); };
  $('#mic').onclick = (e) => {
    const b = e.currentTarget, out = $('#micres');
    if (b.classList.contains('rec')) { b._sr && b._sr.stop(); return; }
    b.classList.add('rec'); b.innerHTML = `${ic('stop', 'sm')}Parar`; out.textContent = 'Diga: "Hello, how are you?"';
    b._sr = Speech.listen({
      onInterim: (x) => out.textContent = x,
      onError: (er) => out.textContent = Speech.errMsg(er),
      onResult: (said) => { b.classList.remove('rec'); b.innerHTML = `${ic('mic', 'sm')}Testar microfone`; if (said) out.innerHTML = `Funcionou! Entendi: <b>“${esc(said)}”</b>`; }
    });
  };
  $('#test').onclick = () => Speech.speak(LISTENING.passages[0].lines[0].t);
  $('#exp').onclick = () => { const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([JSON.stringify(Store.s, null, 1)], { type: 'application/json' })); a.download = `ingles-com-thiago-${Store.today()}.json`; a.click(); };
  $('#imp').onchange = async (e) => { try { Store.replace(JSON.parse(await e.target.files[0].text())); Store.save(); toast('Progresso importado'); route(); } catch { toast('Arquivo inválido: escolha um backup exportado pelo Inglês com Thiago'); } };
  $('#rst').onclick = () => { if (confirm('Apagar todo o seu progresso? Isso não pode ser desfeito.')) { Store.reset(); go(''); } };
};

// ---------- conta: entrar, criar conta, recuperar senha ----------
R.entrar = () => {
  let mode = 'in'; // in | up | forgot
  const draw = () => {
    view.innerHTML = `<section class="auth wrap">
      <div class="auth-copy">
        <h1>${mode === 'up' ? 'Comece a sua trilha.' : mode === 'forgot' ? 'Esqueceu a senha?' : 'Welcome back.'}</h1>
        <p class="lead">${mode === 'up' ? 'Escolha um nome de usuário e uma senha. Seu progresso fica salvo e você continua de qualquer aparelho.' : mode === 'forgot' ? 'Contas com nome de usuário não têm e-mail, então a senha é redefinida pelo administrador do site. Mande uma mensagem para ele com o seu usuário.' : 'Entre para continuar exatamente de onde parou. Neste aparelho você só precisa entrar uma vez.'}</p>
      </div>
      <form class="auth-card" novalidate>
        ${mode !== 'forgot' ? `<div class="tabs auth-tabs" role="tablist"><button type="button" data-m="in" class="${mode === 'in' ? 'on' : ''}">Entrar</button><button type="button" data-m="up" class="${mode === 'up' ? 'on' : ''}">Criar conta</button></div>` : ''}
        ${mode === 'up' ? `<div class="setting"><label class="field-label" for="an">Seu nome</label><input class="field" id="an" autocomplete="name" placeholder="Como quer ser chamado" required></div>` : ''}
        ${mode !== 'forgot' ? `<div class="setting"><label class="field-label" for="ae">Nome de usuário</label><input class="field" id="ae" autocomplete="username" autocapitalize="none" spellcheck="false" placeholder="ex.: thiago_23" required>${mode === 'up' ? '<div class="tiny" style="margin-top:6px">De 3 a 20 caracteres: letras minúsculas, números, _ ou ponto.</div>' : ''}</div>
        <div class="setting"><label class="field-label" for="ap">Senha</label><input class="field" id="ap" type="password" autocomplete="${mode === 'up' ? 'new-password' : 'current-password'}" minlength="6" required>${mode === 'up' ? '<div class="tiny" style="margin-top:6px">Pelo menos 6 caracteres. Anote: não há recuperação por e-mail.</div>' : ''}</div>
        <div id="amsg" role="alert"></div>
        <button class="pill" type="submit" style="width:100%;margin-top:22px">${mode === 'up' ? 'Criar conta' : 'Entrar'}</button>` : ''}
        <div class="auth-foot">${mode === 'in' ? '<button type="button" class="link" data-m="forgot">Esqueci minha senha</button>' : mode === 'forgot' ? '<button type="button" class="pill" data-m="in" style="width:100%">Voltar para entrar</button>' : '<span class="tiny">Só você vê o seu progresso.</span>'}</div>
      </form></section>`;
    $$('[data-m]').forEach(b => b.onclick = () => { mode = b.dataset.m; draw(); });
    if (mode === 'forgot') return;
    const form = $('.auth-card'), btn = $('button[type=submit]', form), msgBox = $('#amsg');
    const show = (cls, text) => { msgBox.innerHTML = `<div class="fb show ${cls}" style="margin-top:18px">${text}</div>`; };
    form.onsubmit = async (e) => {
      e.preventDefault();
      const login = $('#ae').value.trim(), pw = $('#ap').value, name = $('#an')?.value.trim() || '';
      if (mode === 'up' && !name) return show('bad', 'Digite seu nome.');
      if (!login) return show('bad', 'Digite seu nome de usuário.');
      if (mode === 'up' && !Cloud.validUsername(login)) return show('bad', 'O usuário precisa ter de 3 a 20 caracteres, só com letras minúsculas, números, _ ou ponto (sem espaços nem acentos).');
      if (pw.length < 6) return show('bad', 'A senha precisa ter pelo menos 6 caracteres.');
      btn.disabled = true; const label = btn.textContent; btn.textContent = 'Aguarde…';
      try {
        if (mode === 'in') { const { error } = await Cloud.signIn(login, pw); if (error) throw error; }
        else {
          const { data, error } = await Cloud.signUp(name, login, pw); if (error) throw error;
          if (!data.session) show('mid', 'Conta criada, mas o projeto ainda pede confirmação por e-mail. Desligue "Confirm email" no Supabase e entre de novo.');
        }
      } catch (err) { show('bad', esc(Cloud.msg(err))); }
      btn.disabled = false; btn.textContent = label;
    };
    $(mode === 'up' ? '#an' : '#ae').focus();
  };
  draw();
};

R['nova-senha'] = () => {
  view.innerHTML = `<section class="auth wrap"><div class="auth-copy"><h1>Crie uma nova senha.</h1><p class="lead">Escolha uma senha com pelo menos 6 caracteres.</p></div>
    <form class="auth-card" novalidate><div class="setting"><label class="field-label" for="np1">Nova senha</label><input class="field" id="np1" type="password" autocomplete="new-password" minlength="6"></div>
      <div id="amsg" role="alert"></div><button class="pill" type="submit" style="width:100%;margin-top:22px">Salvar nova senha</button></form></section>`;
  $('.auth-card').onsubmit = async (e) => {
    e.preventDefault();
    const pw = $('#np1').value;
    if (pw.length < 6) { $('#amsg').innerHTML = '<div class="fb show bad" style="margin-top:18px">A senha precisa ter pelo menos 6 caracteres.</div>'; return; }
    const { error } = await Cloud.updatePassword(pw);
    if (error) $('#amsg').innerHTML = `<div class="fb show bad" style="margin-top:18px">${esc(Cloud.msg(error))}</div>`;
    else { toast('Senha alterada'); go(''); }
  };
};

// menu do usuário no topo: iniciais, nome, estado da sincronização, sair
const SYNC_LABEL = { saved: 'Progresso salvo na nuvem', saving: 'Salvando…', offline: 'Sem conexão: salvo neste aparelho, envio quando voltar' };
function renderUser() {
  const box = $('#user');
  if (!Cloud.user) { box.innerHTML = ''; return; }
  const name = Cloud.name(), ini = name.split(/\s+/).map(w => w[0]).slice(0, 2).join('').toUpperCase();
  box.innerHTML = `<button class="avatar" aria-haspopup="true" aria-expanded="false" aria-label="Conta de ${esc(name)}">${esc(ini)}<i class="sync-dot ${Cloud.status}"></i></button>
    <div class="user-menu" hidden><b>${esc(name)}</b><span class="tiny">${esc(Cloud.handle())}</span><span class="tiny sync-text">${SYNC_LABEL[Cloud.status]}</span>
      <a href="#/progresso">Meu progresso</a><a href="#/ajustes">Ajustes</a><button data-logout>Sair</button></div>`;
  const btn = $('.avatar', box), menu = $('.user-menu', box);
  btn.onclick = (e) => { e.stopPropagation(); menu.hidden = !menu.hidden; btn.setAttribute('aria-expanded', !menu.hidden); };
  menu.onclick = () => { menu.hidden = true; };
}
document.addEventListener('click', (e) => {
  if (e.target.closest('[data-logout]')) { Cloud.signOut(); return; }
  const m = $('.user-menu'); if (m && !m.hidden && !e.target.closest('.user')) m.hidden = true;
});
Cloud.onStatus = (st) => { const d = $('.sync-dot'), t = $('.sync-text'); if (d) d.className = `sync-dot ${st}`; if (t) t.textContent = SYNC_LABEL[st]; };

// ---------- roteador ----------
// mudar para o mesmo hash não dispara hashchange: nesse caso redesenha direto
function go(r) { const h = '#/' + r; if (location.hash === h) route(); else location.hash = h; }
function renderResume() {
  const b = $('#resume'), last = Store.s.last;
  const tl = todayLesson();
  b.href = last ? last.href : tl ? `#/aula/${tl.id}` : '#/licoes';
  b.textContent = last ? 'Continuar' : 'Começar';
}
const NAV_OF = { aula: 'licoes', licao: 'pratica', gramatica: 'pratica', listening: 'pratica', audio: 'pratica', leitura: 'pratica', ler: 'pratica', speaking: 'pratica', writing: 'pratica' };
const PUBLIC = ['entrar', 'nova-senha'];
function route() {
  Speech.stop();
  const [name, arg, arg2] = location.hash.replace(/^#\/?/, '').split('/');
  let r = R[name] ? name : 'home';
  // com login ativado, quem não entrou só vê a tela de entrada
  const guest = Cloud.enabled && !Cloud.user;
  if (guest && !PUBLIC.includes(r)) r = 'entrar';
  if (!guest && r === 'entrar') r = 'home';
  document.body.classList.toggle('guest', guest);
  $$('#nav a').forEach(a => { const on = a.dataset.r === (NAV_OF[r] || r); a.classList.toggle('on', on); on ? a.setAttribute('aria-current', 'page') : a.removeAttribute('aria-current'); });
  R[r](arg, arg2);
  renderResume();
  const nav = $('#nav'), on = $('#nav a.on');
  if (innerWidth <= 760 && on) nav.scrollLeft = on.offsetLeft - nav.clientWidth / 2 + on.offsetWidth / 2;
  view.focus({ preventScroll: true });
  window.scrollTo(0, 0);
}
window.addEventListener('hashchange', route);
// práticas rodam sem mudar o endereço; um link para a página atual precisa redesenhá-la
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href^="#/"]');
  if (a && a.getAttribute('href') === location.hash) { e.preventDefault(); route(); }
});

// ---------- início: com login, carrega o progresso do usuário antes de mostrar o site ----------
async function enterAs(user) {
  Store.onSave = null;
  Store.use(user.id);
  try { await Cloud.pull(); } catch { toast('Sem conexão: usando o progresso salvo neste aparelho'); }
  Store.onSave = Cloud.schedule;
  renderUser();
}
Cloud.onChange = async (event, user) => {
  if (event === 'PASSWORD_RECOVERY') { if (user) await enterAs(user); go('nova-senha'); return; }
  if (user) { await enterAs(user); toast(`Olá, ${Cloud.name()}!`); if (/entrar/.test(location.hash)) go(''); else route(); }
  else { Store.onSave = null; Store.use(null); renderUser(); go('entrar'); route(); }
};
(async () => {
  if (Cloud.enabled) {
    view.innerHTML = '<div class="empty" style="margin:120px auto;max-width:420px;border:0">Carregando…</div>';
    const user = await Cloud.init().catch(() => null);
    if (user) await enterAs(user);
  }
  route();
})();
