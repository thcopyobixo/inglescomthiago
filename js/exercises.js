// Motor de exercícios: recebe uma lista de tarefas e as mostra uma de cada vez.
// Cada tipo chama done(score 0..1) ao terminar; o Runner mostra o botão "Continuar".
const Ex = (() => {

  function Runner(el, tasks, { title = '', context = '', onDone, onExit } = {}) {
    let i = 0, results = [];
    const t0 = Date.now();
    function draw() {
      if (i >= tasks.length) return finish();
      el.innerHTML = `<div class="ex-wrap">
        <div class="ex-head">
          <h2>${esc(title)}${context ? ` <span class="muted">· ${esc(context)}</span>` : ''}</h2>
          <div class="row" style="flex:1;justify-content:flex-end;flex-wrap:nowrap">
            <div class="bar" style="max-width:260px"><i style="width:${(i / tasks.length) * 100}%"></i></div>
            <span class="tnum tiny">${i + 1} / ${tasks.length}</span>
            <button class="pill soft sm icon" data-exit aria-label="Sair do exercício">${ic('x')}</button>
          </div>
        </div>
        <div class="task" id="task"></div></div>`;
      $('[data-exit]', el).onclick = () => { Speech.stop(); onExit ? onExit() : history.back(); };
      const box = $('#task', el);
      const task = tasks[i];
      TYPES[task.type](box, task, (score) => {
        results.push({ task, score });
        const nx = document.createElement('div'); nx.className = 'actions';
        nx.innerHTML = `<button class="pill" data-next>${i + 1 < tasks.length ? 'Continuar' : 'Concluir'} <kbd>Enter</kbd></button>`;
        box.appendChild(nx);
        const b = $('[data-next]', nx); b.focus({ preventScroll: true });
        b.onclick = () => { Speech.stop(); i++; draw(); };
      });
      const first = $('input,textarea,button.opt,[data-play],[data-flip]', box);
      if (first) first.focus({ preventScroll: true });
    }
    function finish() {
      const secs = (Date.now() - t0) / 1000;
      results.forEach(r => { if (r.task.override != null) r.score = r.task.override; });
      const scored = results.filter(r => r.score !== null);
      const avg = scored.length ? scored.reduce((a, r) => a + r.score, 0) / scored.length : null; // null = tudo pulado
      onDone && onDone({ results, avg, secs });
    }
    draw();
  }

  // Enter = verificar/continuar
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' || e.shiftKey) return;
    if (e.target.tagName === 'TEXTAREA') return;
    const next = $('[data-next]'); if (next) { e.preventDefault(); next.click(); return; }
    const chk = $('[data-check]'); if (chk && !chk.disabled) { e.preventDefault(); chk.click(); }
  });

  const fb = (box, cls, html) => { const f = document.createElement('div'); f.className = `fb ${cls} show`; f.innerHTML = html; box.appendChild(f); return f; };
  const FB_ICON = { ok: 'check', mid: 'alert', bad: 'x' };
  const fbTitle = (cls, text) => `<div class="fb-title">${ic(FB_ICON[cls], 'sm')}${text}</div>`;
  const lvTag = (lv) => `<span class="tag ${lv}">${lv.toUpperCase()}</span>`;
  // linha de título da tarefa: nome à esquerda, nível à direita
  const head = (title, lv) => `<div class="spread task-meta"><span>${title}</span>${lv ? lvTag(lv) : ''}</div>`;
  const pct = (x) => `${Math.round(x * 100)}<small>%</small>`;
  const playBtns = () => `<button class="pill soft" data-play>${ic('play')}Ouvir</button><button class="pill soft" data-slow>${ic('slow')}Devagar</button>`;
  function wirePlay(box, text) {
    const p = $('[data-play]', box), s = $('[data-slow]', box);
    if (p) p.onclick = () => Speech.speak(text);
    if (s) s.onclick = () => Speech.speak(text, { rate: 0.7 });
  }
  const setBtn = (b, icon, label) => { b.innerHTML = `${ic(icon)}${label}`; };

  const TYPES = {
    // --- flashcard SRS ---
    flash(box, t, done) {
      const v = t.card;
      box.innerHTML = `
        <div class="flash" data-flip tabindex="0" role="button" aria-label="Virar cartão">
          <div class="flash-in">
            <div class="face">${v.img ? `<img class="flash-img" src="${Duo.imgSrc(v.img)}" alt="">` : `<span class="tag">${esc(v.t)}</span>`}<div class="big">${esc(v.en)}</div><div class="sub">Você sabe o que significa?</div><span class="hint">${ic('flip', 'sm')}Clique ou aperte espaço para virar</span></div>
            <div class="face back"><div class="big">${esc(v.en)}</div><div class="pt">${esc(v.pt)}</div><div class="def">${esc(v.def)}</div>${v.ex ? `<div class="exq">“${esc(v.ex)}”</div>` : ''}</div>
          </div>
        </div>
        <div class="actions" style="justify-content:center"><button class="pill soft sm" data-say>${ic('volume')}Pronúncia</button><button class="pill soft sm" data-sayex>${ic('volume')}Exemplo</button></div>
        <div class="grades" hidden>
          <button class="pill" data-g="0">Errei<small>de novo hoje</small></button>
          <button class="pill" data-g="1">Difícil<small>revisar logo</small></button>
          <button class="pill" data-g="2">Bom<small>intervalo normal</small></button>
          <button class="pill" data-g="3">Fácil<small>intervalo longo</small></button>
        </div>`;
      const fl = $('.flash', box), gr = $('.grades', box);
      const flip = () => { fl.classList.add('flip'); gr.hidden = false; };
      fl.onclick = flip; fl.onkeydown = (e) => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); e.stopPropagation(); flip(); } };
      $('[data-say]', box).onclick = () => Speech.speak(v.en);
      $('[data-sayex]', box).onclick = () => Speech.speak(v.ex);
      $$('[data-g]', box).forEach(b => b.onclick = () => {
        const g = +b.dataset.g;
        if (!Store.s.srs[v.id]) Store.countNew();
        const c = Store.grade(v.id, g);
        if (g === 0) t.requeue && t.requeue(t);
        gr.innerHTML = `<div class="tiny" style="grid-column:1/-1;text-align:center">${g === 0 ? 'Volta ainda nesta revisão.' : `Próxima revisão em ${c.ivl} dia${c.ivl > 1 ? 's' : ''}.`}</div>`;
        done(g === 0 ? 0 : 1);
      });
    },

    // --- múltipla escolha ---
    mc(box, t, done) {
      box.innerHTML = `<div class="q">${fmtQ(t.q)}</div><div class="opts">${t.opts.map((o, k) => `<button class="opt" data-k="${k}"><span class="key">${k + 1}</span>${esc(o)}</button>`).join('')}</div>`;
      const pick = (k) => {
        const ok = k === t.a;
        $$('.opt', box).forEach((b, j) => { b.disabled = true; if (j === t.a) b.classList.add('right'); else if (j === k) b.classList.add('wrong'); });
        fb(box, ok ? 'ok' : 'bad', `${fbTitle(ok ? 'ok' : 'bad', ok ? 'Correto!' : 'Não foi dessa vez.')}${t.why ? esc(t.why) : ''}`);
        done(ok ? 1 : 0);
      };
      $$('.opt', box).forEach(b => b.onclick = () => pick(+b.dataset.k));
      box.onkeydown = (e) => { const n = +e.key; if (n >= 1 && n <= t.opts.length && !$('.opt', box).disabled) pick(n - 1); };
    },

    // --- completar lacuna ---
    gap(box, t, done) {
      box.innerHTML = `<div class="q">${fmtQ(t.q)}</div><input class="field" placeholder="Digite a resposta" autocomplete="off" spellcheck="false" aria-label="Resposta"><div class="actions"><button class="pill" data-check>Verificar</button></div>`;
      const inp = $('input', box), chk = $('[data-check]', box);
      chk.onclick = () => {
        const r = Check.answer(inp.value, t.a);
        inp.disabled = true; chk.parentElement.remove();
        if (r.status === 'ok') fb(box, 'ok', `${fbTitle('ok', 'Correto!')}${esc(t.why || '')}`);
        else if (r.status === 'typo') fb(box, 'mid', `${fbTitle('mid', `Quase: ${esc(r.best)}`)}${esc(t.why || '')}`);
        else fb(box, 'bad', `${fbTitle('bad', `Resposta: ${esc(t.a.join(' / '))}`)}${esc(t.why || '')}`);
        done(r.status === 'bad' ? 0 : 1);
      };
    },

    // --- ditado ---
    dict(box, t, done) {
      box.innerHTML = `
        ${head('Ditado', t.item.lv)}
        <div class="q">Ouça e escreva exatamente o que ouviu.</div>
        <div class="row" style="margin-bottom:14px">${playBtns()}</div>
        <input class="field" placeholder="Escreva aqui…" autocomplete="off" spellcheck="false" aria-label="O que você ouviu">
        <div class="actions"><button class="pill" data-check>Verificar</button><button class="pill soft" data-skip>Não entendi</button></div>`;
      wirePlay(box, t.item.text);
      setTimeout(() => Speech.speak(t.item.text), 300);
      const inp = $('input', box);
      const check = (skip) => {
        const al = Check.align(t.item.text, skip ? '' : inp.value);
        inp.disabled = true; $('.actions', box).remove();
        const p = Math.round(al.score * 100);
        fb(box, p >= 90 ? 'ok' : p >= 60 ? 'mid' : 'bad', `<div class="spread" style="align-items:flex-start"><div class="words">${Check.wordsHTML(al)}</div><div class="score" style="font-size:32px">${pct(al.score)}</div></div><div class="tiny" style="margin-top:8px">Em vermelho: palavras que faltaram ou saíram diferentes.</div>`);
        Store.markSeen(t.item.id); Store.s.listen.n++; if (p >= 90) Store.s.listen.ok++; Store.save();
        done(al.score);
      };
      $('[data-check]', box).onclick = () => check(false);
      $('[data-skip]', box).onclick = () => check(true);
    },

    // --- shadowing / leitura em voz alta ---
    shadow(box, t, done) {
      const s = t.item; let best = 0, tries = 0, recUrl = null, rec = null, sr = null, finished = false;
      box.innerHTML = `
        ${head(`Shadowing · ${esc(s.focus)}`, s.lv)}
        <div class="q lead">${esc(s.text)}</div>
        <div class="tip">${ic('bulb', 'sm')}<span>${esc(s.tip)}</span></div>
        <div class="row" style="margin:18px 0 4px">${playBtns()}<button class="pill rec" data-rec>${ic('mic')}Falar</button><button class="pill soft" data-mine disabled>${ic('play')}Minha voz</button></div>
        <div class="interim"></div>
        <div id="res"></div>
        <div class="actions"><button class="pill soft sm" data-skipsp>Não posso falar agora</button></div>`;
      wirePlay(box, s.text);
      if (!Speech.canListen) $('#res', box).innerHTML = `<div class="notice">${ic('alert', 'sm')}<span>${Speech.errMsg('unsupported')} Você ainda pode ouvir, gravar e comparar sua voz.</span></div>`;
      const btn = $('[data-rec]', box), mine = $('[data-mine]', box), interim = $('.interim', box), res = $('#res', box);
      mine.onclick = () => recUrl && new Audio(recUrl).play();
      const end = () => { if (finished) return; finished = true; $('[data-skipsp]', box)?.parentElement.remove(); Store.markSeen(s.id); done(tries ? best : null); };
      $('[data-skipsp]', box).onclick = end;
      btn.onclick = async () => {
        if (btn.classList.contains('on')) { sr && sr.stop(); return; }
        btn.classList.add('on'); setBtn(btn, 'stop', 'Parar'); interim.textContent = 'Ouvindo…';
        try { rec = await Speech.record(); } catch { rec = null; }
        const stopAll = async () => { btn.classList.remove('on'); setBtn(btn, 'mic', 'Falar de novo'); if (rec) { recUrl = await rec.stop(); mine.disabled = false; } };
        if (!Speech.canListen) { setTimeout(() => { stopAll(); }, 5000); return; }
        sr = Speech.listen({
          onInterim: (x) => interim.textContent = x,
          onError: (e) => { if (e !== 'no-speech' && e !== 'aborted') res.innerHTML = `<div class="notice">${ic('alert', 'sm')}<span>${Speech.errMsg(e)}</span></div>`; else interim.textContent = Speech.errMsg(e); },
          onResult: (said, alts) => {
            stopAll();
            if (!said) return;
            // usa a alternativa que mais se aproxima do alvo
            const cands = [said, ...alts];
            let al = null; cands.forEach(c => { const a = Check.align(s.text, c); if (!al || a.score > al.score) al = a; });
            tries++; best = Math.max(best, al.score);
            const p = Math.round(al.score * 100);
            Store.s.speak.n++; Store.s.speak.sum += al.score; Store.save();
            interim.textContent = '';
            res.innerHTML = `<div class="fb show ${p >= 90 ? 'ok' : p >= 65 ? 'mid' : 'bad'}">
              <div class="spread" style="align-items:flex-start"><div class="words">${Check.wordsHTML(al)}</div><div class="score">${p}</div></div>
              <div class="heard">Entendi: “${esc(said)}”</div>
              <div class="tiny" style="margin-top:6px">${p >= 90 ? 'Excelente! Ouça sua voz e compare com o modelo.' : 'As palavras em vermelho não foram reconhecidas. Ouça o modelo e repita focando nelas.'}</div></div>`;
            if (p >= 90 || tries >= 3) end();
            else if (!$('[data-accept]', box)) {
              const a = document.createElement('div'); a.className = 'actions';
              a.innerHTML = `<button class="pill soft" data-accept>Seguir com ${p} pontos</button>`;
              res.after(a); $('[data-accept]', a).onclick = () => { a.remove(); end(); };
            } else $('[data-accept]', box).textContent = `Seguir com ${Math.round(best * 100)} pontos`;
          }
        });
      };
    },

    // --- fala livre ---
    talk(box, t, done) {
      const p = t.item; let sr = null, rec = null, recUrl = null, start = 0, timer = null;
      const LIMIT = t.secs || 60;
      box.innerHTML = `
        ${head('Fala livre', p.lv)}
        <div class="q lead">${esc(p.q)}</div>
        <div class="instr">Fale por até ${LIMIT} segundos. Tente usar: ${p.hints.map(h => `<em style="color:var(--accent);font-style:normal">${esc(h)}</em>`).join(', ')}</div>
        <div class="row" style="margin:18px 0 4px"><button class="pill rec" data-rec>${ic('mic')}Começar a falar</button><span class="clock" id="clock">${ic('clock')}0:00</span><button class="pill soft" data-mine disabled>${ic('play')}Ouvir minha resposta</button></div>
        <div class="interim"></div><div id="res"></div>
        <div class="actions"><button class="pill soft sm" data-skipsp>Pular</button></div>`;
      const btn = $('[data-rec]', box), clock = $('#clock', box), interim = $('.interim', box), res = $('#res', box), mine = $('[data-mine]', box);
      mine.onclick = () => recUrl && new Audio(recUrl).play();
      $('[data-skipsp]', box).onclick = () => { $('[data-skipsp]', box).parentElement.remove(); done(null); };
      const stop = () => { sr && sr.stop(); };
      btn.onclick = async () => {
        if (btn.classList.contains('on')) return stop();
        if (!Speech.canListen) { res.innerHTML = `<div class="notice">${ic('alert', 'sm')}<span>${Speech.errMsg('unsupported')}</span></div>`; return; }
        btn.classList.add('on'); setBtn(btn, 'stop', 'Terminar'); start = Date.now();
        try { rec = await Speech.record(); } catch { rec = null; }
        timer = setInterval(() => { const s = Math.floor((Date.now() - start) / 1000); clock.innerHTML = `${ic('clock')}${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`; if (s >= LIMIT) stop(); }, 250);
        sr = Speech.listen({
          continuous: true,
          onInterim: (x) => interim.textContent = x,
          onError: (e) => { if (e !== 'no-speech' && e !== 'aborted') res.innerHTML = `<div class="notice">${ic('alert', 'sm')}<span>${Speech.errMsg(e)}</span></div>`; },
          onResult: async (said) => {
            clearInterval(timer); btn.classList.remove('on'); setBtn(btn, 'mic', 'Falar de novo');
            if (rec) { recUrl = await rec.stop(); mine.disabled = false; }
            interim.textContent = '';
            if (!said) return;
            const secs = Math.max(1, (Date.now() - start) / 1000);
            const w = Check.words(said), wpm = Math.round(w.length / secs * 60);
            const uniq = new Set(w).size;
            const used = p.hints.filter(h => Check.norm(said).includes(Check.norm(h)));
            const fillers = (Check.norm(said).match(/\b(um|uh|er|like|you know)\b/g) || []).length;
            const sc = Math.min(1, (Math.min(w.length, 80) / 80) * 0.6 + (used.length / p.hints.length) * 0.4);
            Store.s.speak.n++; Store.s.speak.sum += sc; Store.markSeen(p.id);
            res.innerHTML = `<div class="fb show ok">
              <div class="mini-stats"><div><b>${w.length}</b><span>palavras</span></div><div><b>${wpm}</b><span>por minuto (nativo: 120–160)</span></div><div><b>${uniq}</b><span>palavras diferentes</span></div></div>
              <div>Expressões-alvo: ${p.hints.map(h => used.includes(h) ? `<span class="check">${ic('check', 'sm')}${esc(h)}</span>` : `<span style="color:var(--dim)">${esc(h)}</span>`).join(' · ')}</div>
              ${fillers > 3 ? `<div class="tiny" style="margin-top:6px">Você usou ${fillers} "fillers" (um, like…). Tente trocá-los por pausas curtas.</div>` : ''}
              <div class="heard" style="margin-top:12px"><b>Transcrição:</b> ${esc(said)}</div></div>`;
            const sk = $('[data-skipsp]', box); if (sk) sk.parentElement.remove();
            if (!$('[data-next]', box)) done(sc);
          }
        });
      };
    },

    // --- correção / tradução / transformação ---
    write(box, t, done) {
      const it = t.item;
      const top = t.mode === 'fix' ? `${head('Corrija a frase', it.lv)}<div class="q" style="color:#ffc2c2">${esc(it.wrong)}</div>`
        : t.mode === 'translate' ? `${head('Traduza para o inglês', it.lv)}<div class="q">${esc(it.pt)}</div>`
        : `${head(esc(it.inst), it.lv)}<div class="q">${esc(it.src)}</div>`;
      box.innerHTML = `${top}<input class="field" placeholder="Escreva em inglês…" autocomplete="off" spellcheck="false" aria-label="Sua resposta em inglês"><div class="actions"><button class="pill" data-check>Verificar</button><button class="pill soft" data-skip>Ver resposta</button></div>`;
      const inp = $('input', box);
      const check = (skip) => {
        const r = skip ? { status: 'bad', best: it.a[0] } : Check.answer(inp.value, it.a);
        inp.disabled = true; $('.actions', box).remove();
        const others = it.a.filter(x => x !== r.best).slice(0, 3);
        const tip = it.tip ? `<div class="row" style="margin-top:8px;gap:7px;flex-wrap:nowrap;align-items:flex-start">${ic('bulb', 'sm')}<span>${esc(it.tip)}</span></div>` : '';
        const alt = others.length ? `<div class="tiny" style="margin-top:8px">Também aceito: ${others.map(esc).join(' · ')}</div>` : '';
        let html;
        if (r.status === 'ok') html = `${fbTitle('ok', 'Perfeito!')}${tip}${alt}`;
        else if (r.status === 'typo') html = `${fbTitle('mid', 'Quase, só um detalhe')}${esc(r.best)}${tip}${alt}`;
        else {
          const al = Check.align(it.a[0], skip ? '' : inp.value);
          html = `${fbTitle('bad', 'Resposta modelo')}<div class="words" style="margin:6px 0">${Check.wordsHTML(al)}</div>${tip}${alt}${skip ? '' : '<div class="tiny" style="margin-top:8px">Se a sua frase também estiver correta, marque abaixo.</div>'}`;
        }
        const f = fb(box, r.status === 'ok' ? 'ok' : r.status === 'typo' ? 'mid' : 'bad', html);
        Store.markSeen(it.id); Store.s.write.n++; if (r.status !== 'bad') Store.s.write.ok++; Store.save();
        if (r.status === 'bad' && !skip) {
          const a = document.createElement('div'); a.className = 'actions';
          a.innerHTML = `<button class="pill soft sm" data-mine>${ic('check', 'sm')}A minha também estava certa</button>`;
          f.after(a);
          $('[data-mine]', a).onclick = () => { a.remove(); t.override = 1; Store.s.write.ok++; Store.save(); toast('Ok, contei como acerto'); };
        }
        done(r.status === 'bad' ? 0 : 1);
      };
      $('[data-check]', box).onclick = () => check(false);
      $('[data-skip]', box).onclick = () => check(true);
    },

    // --- redação livre ---
    essay(box, t, done) {
      const p = t.item;
      box.innerHTML = `
        ${head(`Redação · mínimo ${p.min} palavras`, p.lv)}
        <div class="q lead">${esc(p.q)}</div>
        <div class="row" style="margin-bottom:12px;gap:6px"><span class="sub">Tente usar:</span>${p.target.map(x => `<span class="tag" data-t="${esc(x)}">${esc(x)}</span>`).join('')}</div>
        <textarea class="field" placeholder="Start writing…" spellcheck="true" aria-label="Seu texto"></textarea>
        <div class="spread" style="margin-top:8px"><span class="tiny tnum" id="wc">0 palavras</span><span class="tiny">O corretor do navegador sublinha erros de ortografia.</span></div>
        <div class="actions"><button class="pill" data-fin>Concluir</button><button class="pill soft" data-read>${ic('volume')}Ouvir meu texto</button></div>`;
      const ta = $('textarea', box), wc = $('#wc', box);
      ta.oninput = () => {
        const n = Check.words(ta.value).length; wc.textContent = `${n} palavras${n >= p.min ? ' · mínimo atingido' : ''}`;
        $$('[data-t]', box).forEach(s => { const on = Check.norm(ta.value).includes(Check.norm(s.dataset.t)); s.style.color = on ? 'var(--ok)' : ''; s.style.borderColor = on ? 'var(--okline)' : ''; });
      };
      $('[data-read]', box).onclick = () => ta.value.trim() && Speech.speak(ta.value);
      $('[data-fin]', box).onclick = () => {
        const n = Check.words(ta.value).length;
        if (n < 10) { toast('Escreva pelo menos algumas frases'); return; }
        const used = p.target.filter(x => Check.norm(ta.value).includes(Check.norm(x)));
        Store.s.journal.unshift({ id: p.id, q: p.q, text: ta.value, date: Store.today(), words: n });
        Store.markSeen(p.id); Store.save();
        ta.disabled = true; $('.actions', box).remove();
        const cls = n >= p.min ? 'ok' : 'mid';
        fb(box, cls, `${fbTitle(cls, `${n} palavras, ${used.length} de ${p.target.length} expressões-alvo`)}Texto salvo no seu diário (aba Writing).
          <div class="tiny" style="margin-top:8px">Dica: cole o texto no ChatGPT/Claude e peça "correct my text and explain the mistakes" para uma correção detalhada.</div>`);
        done(Math.min(1, n / p.min) * 0.7 + (used.length / p.target.length) * 0.3);
      };
    }
  };

  // destaca "___" como lacuna
  function fmtQ(q) { return esc(q).replace(/_{2,}/g, '<span class="gap"></span>'); }

  return { Runner, TYPES };
})();
