// Voz: síntese (listening) + reconhecimento (speaking) + gravação (shadowing)
const Speech = (() => {
  const synth = window.speechSynthesis;
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  let voices = [];

  function loadVoices() { voices = synth ? synth.getVoices().filter(v => /^en[-_]/i.test(v.lang)) : []; }
  if (synth) { loadVoices(); synth.onvoiceschanged = loadVoices; }

  // Prefere vozes "naturais" (Edge) e Google; respeita a escolha nos Ajustes
  function pickVoice() {
    const st = Store.s.settings;
    if (st.voice) { const v = voices.find(v => v.name === st.voice); if (v) return v; }
    const acc = voices.filter(v => v.lang.replace('_', '-').startsWith(st.accent));
    const pool = acc.length ? acc : voices;
    return pool.find(v => /natural|online/i.test(v.name)) || pool.find(v => /google/i.test(v.name)) || pool[0];
  }

  // Toca o MP3 gravado com voz neural (audio/manifest.js); sem arquivo, cai na voz do navegador
  let cur = null, seq = 0;
  const hasAudio = (text) => !!(window.AUDIO && window.AUDIO[text]);
  function speak(text, { rate, onend } = {}) {
    stop();
    if (hasAudio(text)) {
      const a = new Audio('audio/' + window.AUDIO[text]);
      a.playbackRate = rate || Store.s.settings.rate || 1;
      a.onended = () => { if (cur === a) cur = null; onend && onend(); };
      cur = a;
      a.play().catch(() => {});
      return a;
    }
    // sem MP3 gravado: avisa no console (ajuda a achar texto sem áudio ou lista de áudios antiga)
    console.warn('[FluentDaily] sem áudio gravado, usando voz do navegador:', text);
    if (!synth) { toast('Seu navegador não tem síntese de voz'); return; }
    const u = new SpeechSynthesisUtterance(text);
    const v = pickVoice();
    if (v) { u.voice = v; u.lang = v.lang; } else u.lang = Store.s.settings.accent;
    u.rate = rate || Store.s.settings.rate;
    if (onend) u.onend = onend;
    synth.speak(u);
    return u;
  }
  function stop() {
    seq++;
    if (cur) { cur.pause(); cur = null; }
    synth && synth.cancel();
  }
  // Toca várias falas em sequência (diálogos, textos por parágrafo). onLine(i) avisa qual está tocando.
  function playSeq(texts, { rate, from = 0, onLine, onend } = {}) {
    stop();
    const id = seq;
    let i = from;
    const next = () => {
      if (id !== seq) return;
      if (i >= texts.length) { onend && onend(); return; }
      onLine && onLine(i);
      speak(texts[i], { rate, onend: () => { if (id !== seq) return; i++; next(); } });
      seq = id; // speak() chama stop(); mantém esta sequência viva
    };
    next();
  }
  const playing = () => !!cur && !cur.paused;

  // Qual reconhecimento usar: o do navegador (rápido, precisa do servidor de voz do Google/Microsoft)
  // ou o local (Whisper, funciona em qualquer navegador). Se o do navegador der erro de rede uma vez,
  // este aparelho passa a usar o local direto.
  const LOCAL_FLAG = 'fluentdaily.sttLocal';
  const useLocal = () => Store.s.settings.stt === 'local' || (Store.s.settings.stt !== 'browser' && (!SR || localStorage.getItem(LOCAL_FLAG) === '1'));

  // Reconhecimento de fala. opts: { continuous, onInterim(text), onResult(best, alts), onEnd(), onError(msg) }
  function listen(opts = {}) {
    stop();
    if (useLocal()) {
      if (!LocalSTT.supported) { opts.onError && opts.onError('unsupported'); return null; }
      return LocalSTT.listen(opts);
    }
    if (!SR) { opts.onError && opts.onError('unsupported'); return null; }
    let fallback = null; // reconhecimento local assumindo no meio, se o do navegador falhar por rede
    const r = new SR();
    r.lang = Store.s.settings.accent;
    r.interimResults = true;
    r.continuous = !!opts.continuous;
    r.maxAlternatives = 4;
    let finalText = '', alts = [];
    r.onresult = (e) => {
      let interim = '';
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const res = e.results[i];
        if (res.isFinal) {
          finalText += res[0].transcript + ' ';
          alts = [...res].map(a => a.transcript);
        } else interim += res[0].transcript;
      }
      opts.onInterim && opts.onInterim((finalText + interim).trim());
    };
    r.onerror = (e) => {
      if (e.error === 'network' && Store.s.settings.stt !== 'browser' && LocalSTT.supported) {
        try { localStorage.setItem(LOCAL_FLAG, '1'); } catch {}
        toast('Usando o reconhecimento de voz local');
        fallback = LocalSTT.listen(opts);
        return;
      }
      opts.onError && opts.onError(e.error);
    };
    r.onend = () => { if (fallback) return; opts.onResult && opts.onResult(finalText.trim(), alts); opts.onEnd && opts.onEnd(); };
    try { r.start(); } catch (err) { opts.onError && opts.onError(String(err)); }
    return { stop: () => (fallback ? fallback.stop() : r.stop()) };
  }

  // Gravação para comparar sua voz com o modelo
  async function record() {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const rec = new MediaRecorder(stream); const chunks = [];
    rec.ondataavailable = e => chunks.push(e.data);
    const done = new Promise(res => rec.onstop = () => { stream.getTracks().forEach(t => t.stop()); res(URL.createObjectURL(new Blob(chunks, { type: rec.mimeType }))); });
    rec.start();
    return { stop: () => { rec.state !== 'inactive' && rec.stop(); return done; } };
  }

  const errMsg = (e) => ({
    'unsupported': 'Este navegador não permite gravar áudio. Use o Chrome, o Edge ou o Firefox atualizados.',
    'not-allowed': 'Microfone bloqueado. Clique no cadeado da barra de endereço e permita o microfone.',
    'no-speech': 'Não ouvi nada. Tente de novo falando um pouco mais alto e perto do microfone.',
    'audio-capture': 'Nenhum microfone encontrado. Confira se ele está conectado e liberado no Windows.',
    'network': 'O reconhecimento do navegador não alcançou o servidor de voz. Em Ajustes, escolha "Reconhecimento local".',
    'local-failed': 'O reconhecimento local não conseguiu carregar. Confira a internet (o modelo é baixado na primeira vez) e tente de novo.'
  }[e] || 'Erro no reconhecimento: ' + e);

  return {
    speak, stop, playSeq, playing, hasAudio, listen, record, errMsg,
    get voices() { return voices; },
    get canListen() { return !!SR || LocalSTT.supported; },
    get canSpeak() { return !!synth; }
  };
})();
