// Reconhecimento de voz LOCAL (Whisper tiny em inglês, rodando no próprio navegador via transformers.js).
// Usado quando o reconhecimento do navegador não existe (Firefox) ou não alcança o servidor de voz
// (Brave, Opera, VPN, bloqueadores: erro "network"). O modelo (~41 MB) é baixado uma vez e fica em cache.
const LocalSTT = (() => {
  const LIB = 'https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.0.2';
  const MODEL = 'Xenova/whisper-tiny.en';
  const supported = !!(navigator.mediaDevices && window.MediaRecorder && (window.AudioContext || window.webkitAudioContext));
  let pipePromise = null;

  // carrega o modelo uma vez; onProgress(0..100) enquanto baixa
  function load(onProgress) {
    if (!pipePromise) {
      const files = {};
      pipePromise = import(LIB).then(T => {
        T.env.allowLocalModels = false;
        return T.pipeline('automatic-speech-recognition', MODEL, {
          dtype: 'q8', device: 'wasm',
          progress_callback: (p) => {
            if (p.status !== 'progress' || !p.total) return;
            files[p.file] = [p.loaded, p.total];
            const v = Object.values(files), done = v.reduce((a, x) => a + x[0], 0), all = v.reduce((a, x) => a + x[1], 0);
            onProgress && onProgress(Math.round(done / all * 100));
          }
        });
      }).catch(e => {
        // um download interrompido pode deixar arquivo corrompido no cache: limpa para a próxima tentativa baixar de novo
        pipePromise = null;
        try { window.caches && caches.delete('transformers-cache'); } catch {}
        e.stage = 'load'; throw e;
      });
    }
    return pipePromise;
  }

  // áudio gravado -> Float32Array mono a 16 kHz (o formato que o Whisper espera)
  async function toPCM16k(blob) {
    const AC = window.AudioContext || window.webkitAudioContext;
    const ctx = new AC();
    const buf = await ctx.decodeAudioData(await blob.arrayBuffer());
    ctx.close();
    const off = new OfflineAudioContext(1, Math.ceil(buf.duration * 16000), 16000);
    const src = off.createBufferSource(); src.buffer = buf; src.connect(off.destination); src.start();
    return (await off.startRendering()).getChannelData(0);
  }

  // Whisper às vezes "inventa" frases em silêncio; descarta as mais comuns
  const HALLUCINATION = /^(thank you\.?|thanks for watching\.?|you|\[.*\]|\(.*\))$/i;

  // Mesma interface do Speech.listen: { continuous, onInterim, onResult(text, alts), onEnd, onError }
  function listen(opts = {}) {
    let stopped = false, rec = null, stream = null, raf = 0, ctx = null;
    const chunks = [];
    const ctrl = { stop: () => { if (!stopped) { stopped = true; rec && rec.state !== 'inactive' && rec.stop(); } } };
    const fail = (e) => { opts.onError && opts.onError(e); opts.onResult && opts.onResult('', []); opts.onEnd && opts.onEnd(); };

    (async () => {
      // começa a baixar o modelo enquanto a pessoa fala
      const ready = load((pc) => opts.onInterim && opts.onInterim(`Preparando o reconhecimento de voz (só na primeira vez)… ${pc}%`));
      try { stream = await navigator.mediaDevices.getUserMedia({ audio: true }); }
      catch (e) { return fail(e && e.name === 'NotAllowedError' ? 'not-allowed' : 'audio-capture'); }
      rec = new MediaRecorder(stream);
      rec.ondataavailable = (e) => e.data.size && chunks.push(e.data);
      rec.onstop = async () => {
        cancelAnimationFrame(raf); ctx && ctx.close(); stream.getTracks().forEach(t => t.stop());
        if (!chunks.length) return fail('no-speech');
        opts.onInterim && opts.onInterim('Transcrevendo…');
        let stage = 'decode';
        try {
          const pcm = await toPCM16k(new Blob(chunks, { type: rec.mimeType }));
          stage = 'load';
          const asr = await ready;
          stage = 'transcribe';
          const out = await asr(pcm, { chunk_length_s: 30 });
          const text = (out.text || '').trim();
          opts.onResult && opts.onResult(HALLUCINATION.test(text) ? '' : text, []);
          if (!text) opts.onError && opts.onError('no-speech');
        } catch (e) {
          console.error('[Inglês com Thiago] reconhecimento local falhou na etapa', stage, e);
          const detail = String((e && (e.message || e.name)) || e).slice(0, 120);
          opts.onError && opts.onError(`local-failed|${stage}|${detail}`); opts.onResult && opts.onResult('', []);
        }
        opts.onEnd && opts.onEnd();
      };
      rec.start(250);
      opts.onInterim && opts.onInterim('Ouvindo… (fale e depois pare)');

      // frase curta: para sozinho depois de ~1,3 s de silêncio após a fala (ou 12 s no máximo)
      if (!opts.continuous) {
        const AC = window.AudioContext || window.webkitAudioContext;
        ctx = new AC(); const an = ctx.createAnalyser(); an.fftSize = 1024;
        ctx.createMediaStreamSource(stream).connect(an);
        const data = new Uint8Array(an.fftSize), t0 = performance.now();
        let spoke = false, quietSince = 0;
        const tick = (now) => {
          if (stopped) return;
          an.getByteTimeDomainData(data);
          let sum = 0; for (const v of data) { const x = (v - 128) / 128; sum += x * x; }
          const loud = Math.sqrt(sum / data.length) > 0.035;
          if (loud) { spoke = true; quietSince = 0; } else if (spoke && !quietSince) quietSince = now;
          if ((spoke && quietSince && now - quietSince > 1300) || now - t0 > 12000) return ctrl.stop();
          raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      }
    })();
    return ctrl;
  }

  return { supported, listen, load };
})();
