// Correção: normalização, comparação palavra a palavra e tolerância a erros de digitação
const Check = (() => {
  const CONTR = {
    "i'm": 'i am', "you're": 'you are', "we're": 'we are', "they're": 'they are', "he's": 'he is', "she's": 'she is', "it's": 'it is',
    "that's": 'that is', "there's": 'there is', "what's": 'what is', "who's": 'who is', "where's": 'where is', "let's": 'let us',
    "i've": 'i have', "you've": 'you have', "we've": 'we have', "they've": 'they have', "i'd": 'i would', "you'd": 'you would',
    "he'd": 'he would', "she'd": 'she would', "we'd": 'we would', "they'd": 'they would', "i'll": 'i will', "you'll": 'you will',
    "he'll": 'he will', "she'll": 'she will', "we'll": 'we will', "they'll": 'they will', "it'll": 'it will',
    "don't": 'do not', "doesn't": 'does not', "didn't": 'did not', "isn't": 'is not', "aren't": 'are not', "wasn't": 'was not',
    "weren't": 'were not', "haven't": 'have not', "hasn't": 'has not', "hadn't": 'had not', "won't": 'will not', "wouldn't": 'would not',
    "can't": 'cannot', "couldn't": 'could not', "shouldn't": 'should not', "mustn't": 'must not', "needn't": 'need not',
    "gonna": 'going to', "wanna": 'want to', "gotta": 'got to'
  };
  // contrações escritas sem apóstrofo (só as que não viram outra palavra)
  ["don't", "doesn't", "didn't", "isn't", "aren't", "wasn't", "weren't", "haven't", "hasn't", "hadn't", "can't", "couldn't",
    "shouldn't", "wouldn't", "mustn't", "i'm", "i've", "you're", "they're", "you've", "they've", "you'll", "they'll", "that's", "there's", "what's"]
    .forEach(k => CONTR[k.replace(/'/g, '')] = CONTR[k]);

  // o reconhecimento de fala devolve números como dígitos ("30"); o alvo usa palavras
  const ONES = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const TENS = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  function numWords(n) {
    if (n < 20) return ONES[n];
    if (n < 100) return TENS[Math.floor(n / 10)] + (n % 10 ? ' ' + ONES[n % 10] : '');
    return null;
  }

  function norm(t) {
    return String(t).toLowerCase()
      .replace(/[’‘`´]/g, "'").replace(/[“”]/g, '"')
      .replace(/\bcan not\b/g, 'cannot')
      .split(/\s+/).map(w => w.replace(/^[^\w']+|[^\w']+$/g, '')).filter(Boolean)
      .map(w => CONTR[w] || (/^\d{1,2}$/.test(w) && numWords(+w)) || w).join(' ')
      .replace(/'s\b/g, 's').replace(/'/g, '')
      .replace(/\s+/g, ' ').trim();
  }
  const words = (t) => norm(t).split(' ').filter(Boolean);

  function lev(a, b) {
    const m = a.length, n = b.length; if (!m) return n; if (!n) return m;
    let prev = Array.from({ length: n + 1 }, (_, j) => j);
    for (let i = 1; i <= m; i++) {
      const cur = [i];
      for (let j = 1; j <= n; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      prev = cur;
    }
    return prev[n];
  }
  const sim = (a, b) => { a = norm(a); b = norm(b); const L = Math.max(a.length, b.length); return L ? 1 - lev(a, b) / L : 1; };

  // Para frases faladas/ditadas: alinhamento por LCS entre palavras do alvo e do que foi dito.
  // Palavras longas com 1 letra de diferença contam como acerto (erro de digitação no ditado);
  // palavras curtas precisam ser exatas, senão "tree" passaria por "three".
  function align(target, said) {
    const T = target.split(/\s+/).filter(Boolean);  // mantém a forma original para exibir
    const sn = words(said).join(' ');
    // alvo e fala expandidos no mesmo formato (I'm -> i am); cada token lembra de qual palavra exibida veio
    const tTokens = []; T.forEach((w, i) => norm(w).split(' ').filter(Boolean).forEach(x => tTokens.push({ x, i })));
    const sTokens = sn ? sn.split(' ') : [];
    const eq = (a, b) => a === b || (a.length >= 7 && lev(a, b) <= 1);
    const m = tTokens.length, n = sTokens.length;
    const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
    for (let i = m - 1; i >= 0; i--) for (let j = n - 1; j >= 0; j--)
      dp[i][j] = eq(tTokens[i].x, sTokens[j]) ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
    const hitTok = new Array(m).fill(false); const extra = [];
    let i = 0, j = 0;
    while (i < m && j < n) {
      if (eq(tTokens[i].x, sTokens[j])) { hitTok[i] = true; i++; j++; }
      else if (dp[i + 1][j] >= dp[i][j + 1]) i++;
      else { extra.push(sTokens[j]); j++; }
    }
    while (j < n) extra.push(sTokens[j++]);
    // uma palavra exibida é "acerto" se todos os seus tokens foram acertados
    // (palavras sem token, como um travessão solto, contam como acerto)
    const hit = T.map((_, k) => {
      const idx = tTokens.map((t, q) => t.i === k ? q : -1).filter(q => q >= 0);
      return idx.every(q => hitTok[q]);
    });
    const score = m ? hitTok.filter(Boolean).length / m : 0;
    return { words: T.map((w, k) => ({ w, hit: hit[k] })), extra, score };
  }
  const wordsHTML = (al) => al.words.map(x => `<span class="w ${x.hit ? 'hit' : 'miss'}">${esc(x.w)}</span>`).join(' ');

  // Para respostas escritas: compara com uma lista de respostas aceitas
  // -> {status:'ok'|'typo'|'bad', best}
  function answer(input, accepted) {
    const n = norm(input); if (!n) return { status: 'bad', best: accepted[0] };
    let best = accepted[0], bestSim = -1;
    for (const a of accepted) {
      if (norm(a) === n) return { status: 'ok', best: a };
      const sc = sim(a, n); if (sc > bestSim) { bestSim = sc; best = a; }
    }
    const L = norm(best).length;
    if (lev(norm(best), n) <= (L > 25 ? 2 : 1)) return { status: 'typo', best };
    return { status: 'bad', best, sim: bestSim };
  }

  return { norm, words, lev, sim, align, wordsHTML, answer };
})();
