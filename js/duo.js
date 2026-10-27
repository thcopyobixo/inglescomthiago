// Exercícios de vocabulário no estilo Duolingo (somam-se aos tipos de Ex.TYPES):
// pickimg (escolha a imagem) · sayimg (diga o que é) · pairs (ligue os pares) · fill (complete as frases)
// build (monte o que ouviu) · listenpick (ouça e escolha)
(() => {
  const T = Ex.TYPES;
  const imgSrc = (name) => `img/fluent/${name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}.png`;
  const noArticle = (t) => Check.norm(t).replace(/^(a|an|the|some)\s+/, '');
  const speakBtn = (text, big) => `<button class="pbtn ${big ? 'big' : ''}" data-say="${esc(text)}" aria-label="Ouvir">${ic('volume')}</button>`;
  const fbBox = (box, ok, title, extra = '') => {
    const f = document.createElement('div'); f.className = `fb show ${ok === true ? 'ok' : ok === false ? 'bad' : 'mid'}`;
    f.innerHTML = `<div class="fb-title">${ic(ok === true ? 'check' : ok === false ? 'x' : 'alert', 'sm')}${title}</div>${extra}`;
    box.appendChild(f);
  };
  // botão "Verificar" do rodapé; some quando a resposta é conferida
  const checkBar = (box, label = 'Verificar') => {
    const a = document.createElement('div'); a.className = 'actions duo-actions';
    a.innerHTML = `<button class="pill" data-check disabled>${label}</button>`;
    box.appendChild(a); return $('[data-check]', a);
  };

  // 1. Escolha a imagem certa para a palavra ouvida/lida
  T.pickimg = (box, t, done) => {
    box.innerHTML = `<div class="task-meta"><span>Selecione a imagem certa</span></div>
      <div class="q duo-q">${speakBtn(t.word.en)}<span>${esc(t.word.en)}</span></div>
      <div class="img-grid">${t.options.map((p, k) => `<button class="img-card" data-k="${k}"><img src="${imgSrc(p.img)}" alt="" loading="lazy"><span class="cap">${esc(p.en)}</span></button>`).join('')}</div>`;
    setTimeout(() => Speech.speak(t.word.en), 250);
    let pick = -1; const chk = checkBar(box);
    $$('.img-card', box).forEach(b => b.onclick = () => { pick = +b.dataset.k; $$('.img-card', box).forEach(x => x.classList.toggle('sel', x === b)); chk.disabled = false; });
    chk.onclick = () => {
      const ok = t.options[pick].en === t.word.en;
      box.classList.add('revealed'); chk.parentElement.remove();
      $$('.img-card', box).forEach((b, k) => { b.disabled = true; if (t.options[k].en === t.word.en) b.classList.add('right'); else if (k === pick) b.classList.add('wrong'); });
      fbBox(box, ok, ok ? 'Correto!' : `Era esta: ${esc(t.word.en)}`, `<span class="tiny">${esc(t.word.en)} = ${esc(t.word.pt)}</span>`);
      done(ok ? 1 : 0);
    };
  };

  // 2. Veja a imagem e diga (ou digite) o que é
  T.sayimg = (box, t, done) => {
    const p = t.pic; let finished = false, sr = null;
    box.innerHTML = `<div class="task-meta"><span>O que é isto? Diga em inglês</span></div>
      <div class="say-img"><img src="${imgSrc(p.img)}" alt=""></div>
      <div class="row" style="justify-content:center;margin:6px 0 14px"><button class="pill rec" data-rec>${ic('mic')}Falar</button></div>
      <div class="interim" style="text-align:center"></div>
      <input class="field" placeholder="…ou digite aqui" autocomplete="off" spellcheck="false" aria-label="Resposta">`;
    const inp = $('input', box), interim = $('.interim', box), btn = $('[data-rec]', box), chk = checkBar(box);
    inp.oninput = () => { chk.disabled = !inp.value.trim(); };
    const grade = (answer, fromVoice) => {
      if (finished) return; finished = true;
      const ok = noArticle(answer) === noArticle(p.en) || (Check.lev(noArticle(answer), noArticle(p.en)) <= 1 && noArticle(p.en).length > 4);
      inp.disabled = true; btn.disabled = true; chk.parentElement.remove();
      fbBox(box, ok, ok ? 'Isso mesmo!' : `Resposta: ${esc(p.en)}`, `${fromVoice ? `<div class="heard">Entendi: “${esc(answer)}”</div>` : ''}<span class="tiny">${esc(p.en)} = ${esc(p.pt)}</span>`);
      Speech.speak(p.en);
      done(ok ? 1 : 0);
    };
    chk.onclick = () => grade(inp.value, false);
    btn.onclick = () => {
      if (!Speech.canListen) { toast(Speech.errMsg('unsupported')); inp.focus(); return; }
      if (btn.classList.contains('on')) { sr && sr.stop(); return; }
      btn.classList.add('on'); btn.innerHTML = `${ic('stop')}Parar`; interim.textContent = 'Ouvindo…';
      sr = Speech.listen({
        onInterim: (x) => interim.textContent = x,
        onError: (e) => { interim.textContent = Speech.errMsg(e); },
        onResult: (said, alts) => {
          btn.classList.remove('on'); btn.innerHTML = `${ic('mic')}Falar de novo`;
          if (!said) return;
          // aceita qualquer alternativa do reconhecimento que bata com a resposta
          const hit = [said, ...alts].find(a => noArticle(a) === noArticle(p.en) || noArticle(a).endsWith(noArticle(p.en)));
          interim.textContent = '';
          grade(hit || said, true);
        }
      });
    };
  };

  // 3. Ligue os pares inglês ↔ português
  T.pairs = (box, t, done) => {
    const L = shuffle(t.items.map((x, i) => ({ i, text: x.en }))), Rr = shuffle(t.items.map((x, i) => ({ i, text: x.pt })));
    box.innerHTML = `<div class="task-meta"><span>Toque nos pares correspondentes</span></div>
      <div class="pairs"><div class="col">${L.map(x => `<button class="pair" data-side="L" data-i="${x.i}">${esc(x.text)}</button>`).join('')}</div>
      <div class="col">${Rr.map(x => `<button class="pair" data-side="R" data-i="${x.i}">${esc(x.text)}</button>`).join('')}</div></div>`;
    let sel = null, mistakes = 0, matched = 0;
    $$('.pair', box).forEach(b => b.onclick = () => {
      if (b.classList.contains('ok')) return;
      if (b.dataset.side === 'L') Speech.speak(b.textContent);
      if (!sel || sel.dataset.side === b.dataset.side) { $$('.pair.sel', box).forEach(x => x.classList.remove('sel')); sel = b; b.classList.add('sel'); return; }
      if (sel.dataset.i === b.dataset.i) {
        [sel, b].forEach(x => { x.classList.remove('sel'); x.classList.add('ok'); x.disabled = true; });
        sel = null;
        if (++matched === t.items.length) {
          const score = Math.max(0, 1 - mistakes / t.items.length);
          fbBox(box, mistakes === 0 ? true : null, mistakes === 0 ? 'Perfeito, todos certos!' : `Concluído com ${mistakes} erro${mistakes > 1 ? 's' : ''}`);
          done(score);
        }
      } else {
        mistakes++;
        [sel, b].forEach(x => { x.classList.remove('sel'); x.classList.add('no'); setTimeout(() => x.classList.remove('no'), 500); });
        sel = null;
      }
    });
  };

  // 4. Complete as frases: uma linha de palavras, várias frases com lacuna
  T.fill = (box, t, done) => {
    const items = t.items, bank = shuffle(items.map((x, i) => ({ i, w: x.a })));
    box.innerHTML = `<div class="task-meta"><span>Complete as frases com as palavras abaixo</span></div>
      <div class="bank">${bank.map((x, k) => `<button class="chip" data-k="${k}">${esc(x.w)}</button>`).join('')}</div>
      <ol class="fill-list">${items.map((x, i) => { const [a, b] = x.s.split('___'); return `<li data-i="${i}"><span>${esc(a)}</span><button class="slot" data-i="${i}" aria-label="Lacuna ${i + 1}">&nbsp;</button><span>${esc(b || '')}</span></li>`; }).join('')}</ol>`;
    const chk = checkBar(box);
    const slots = $$('.slot', box), chips = $$('.chip', box), filled = new Array(items.length).fill(null);
    let target = 0; // lacuna que recebe a próxima palavra
    const refresh = () => {
      slots.forEach((s, i) => { s.classList.toggle('target', i === target); s.classList.toggle('full', filled[i] != null); s.innerHTML = filled[i] != null ? esc(bank[filled[i]].w) : '&nbsp;'; });
      chips.forEach((c, k) => c.classList.toggle('used', filled.includes(k)));
      chk.disabled = filled.includes(null);
    };
    chips.forEach(c => c.onclick = () => {
      const k = +c.dataset.k; if (filled.includes(k)) return;
      if (filled[target] != null) target = filled.indexOf(null);
      if (target < 0) return;
      filled[target] = k;
      const nx = filled.indexOf(null); target = nx < 0 ? target : nx;
      refresh();
    });
    slots.forEach(s => s.onclick = () => { const i = +s.dataset.i; if (filled[i] != null) filled[i] = null; target = i; refresh(); });
    refresh();
    chk.onclick = () => {
      let ok = 0;
      slots.forEach((s, i) => { const right = bank[filled[i]].w === items[i].a; if (right) ok++; s.classList.add(right ? 'right' : 'wrong'); s.disabled = true; if (!right) s.insertAdjacentHTML('afterend', `<span class="fix">${esc(items[i].a)}</span>`); });
      chips.forEach(c => c.disabled = true); chk.parentElement.remove();
      // ouvir cada frase completa
      $$('.fill-list li', box).forEach((li, i) => li.insertAdjacentHTML('afterbegin', `<button class="pbtn sm" data-say="${esc(items[i].s.replace('___', items[i].a))}" aria-label="Ouvir">${ic('play')}</button>`));
      fbBox(box, ok === items.length ? true : ok >= items.length / 2 ? null : false, `${ok} de ${items.length} frases certas`);
      done(ok / items.length);
    };
  };

  // 5. Toque no que você ouvir: monte a frase com as peças
  T.build = (box, t, done) => {
    // peças sem pontuação (como no Duolingo); a correção ignora pontuação
    const clean = (w) => w.replace(/^["“(]+|[.,!?;:"”)]+$/g, '');
    const words = t.text.split(/\s+/).map(clean);
    const tiles = shuffle([...words, ...t.extra.map(clean)].map((w, k) => ({ k, w })));
    box.innerHTML = `<div class="task-meta"><span>Toque no que você ouvir</span></div>
      <div class="row" style="gap:12px;margin:4px 0 18px">${speakBtn(t.text, true)}<button class="pill soft sm" data-slow>${ic('slow', 'sm')}Devagar</button></div>
      <div class="build-line" aria-live="polite"></div>
      <div class="tiles">${tiles.map(x => `<button class="chip" data-k="${x.k}">${esc(x.w)}</button>`).join('')}</div>`;
    setTimeout(() => Speech.speak(t.text), 300);
    $('[data-slow]', box).onclick = () => Speech.speak(t.text, { rate: 0.7 });
    const line = $('.build-line', box), chk = checkBar(box), picked = [];
    const draw = () => {
      line.innerHTML = picked.map((k, pos) => `<button class="chip in" data-pos="${pos}">${esc(tiles.find(x => x.k === k).w)}</button>`).join('');
      $$('.tiles .chip', box).forEach(c => c.classList.toggle('used', picked.includes(+c.dataset.k)));
      $$('.chip.in', line).forEach(c => c.onclick = () => { picked.splice(+c.dataset.pos, 1); draw(); });
      chk.disabled = !picked.length;
    };
    $$('.tiles .chip', box).forEach(c => c.onclick = () => { const k = +c.dataset.k; if (!picked.includes(k)) { picked.push(k); draw(); } });
    chk.onclick = () => {
      const said = picked.map(k => tiles.find(x => x.k === k).w).join(' ');
      const r = Check.answer(said, [t.text]);
      $$('.chip', box).forEach(c => c.disabled = true); chk.parentElement.remove();
      fbBox(box, r.status !== 'bad', r.status === 'ok' ? 'Correto!' : r.status === 'typo' ? 'Quase perfeito' : 'Resposta certa:', `<div style="margin-top:4px">${esc(t.text)}</div>`);
      done(r.status === 'bad' ? 0 : 1);
    };
  };

  // 6. Ouça e escolha o que foi dito
  T.listenpick = (box, t, done) => {
    box.innerHTML = `<div class="task-meta"><span>Ouça e escolha o que foi dito</span></div>
      <div class="row" style="gap:12px;margin:4px 0 22px">${speakBtn(t.word.en, true)}<button class="pill soft sm" data-slow>${ic('slow', 'sm')}Devagar</button></div>
      <div class="opts">${t.opts.map((o, k) => `<button class="opt" data-k="${k}"><span class="key">${k + 1}</span>${esc(o)}</button>`).join('')}</div>`;
    setTimeout(() => Speech.speak(t.word.en), 300);
    $('[data-slow]', box).onclick = () => Speech.speak(t.word.en, { rate: 0.7 });
    $$('.opt', box).forEach(b => b.onclick = () => {
      const k = +b.dataset.k, ok = t.opts[k] === t.word.en;
      $$('.opt', box).forEach((x, j) => { x.disabled = true; if (t.opts[j] === t.word.en) x.classList.add('right'); else if (j === k) x.classList.add('wrong'); });
      fbBox(box, ok, ok ? 'Correto!' : `Foi dito: ${esc(t.word.en)}`, `<span class="tiny">${esc(t.word.en)} = ${esc(t.word.pt)}</span>`);
      done(ok ? 1 : 0);
    });
  };

  window.Duo = { imgSrc };
})();
