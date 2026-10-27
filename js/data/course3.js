// Curso diário — lições 11 a 15 (temas de fundo anotados só no código).
window.COURSE = (window.COURSE || []).concat([

// ───────────────────────────── 11 · tema: médico e sintomas
{
  id: 'c11', lv: 'b1', title: 'Explicando o que você está sentindo', goal: 'Descrever sintomas, dores e há quanto tempo algo acontece, com have, feel, hurt e for/since.',
  theory: `
<p>Ficar doente em outro país é estressante, e não conseguir explicar o que se sente deixa tudo pior. A boa notícia é que a linguagem da saúde é bem previsível: com poucos verbos (<b>have, feel, hurt, ache</b>) e algumas estruturas de tempo, você consegue descrever quase qualquer problema para um médico ou farmacêutico.</p>

<h3>1. Have: o verbo dos sintomas</h3>
<p>Em português dizemos "estou com dor de cabeça" ou "estou com febre". Em inglês, quase sempre usamos <b>have</b> (ou <i>have got</i>, no Reino Unido):</p>
<table><tr><th>Português</th><th>Inglês</th></tr>
<tr><td>Estou com dor de cabeça.</td><td><em>I have a headache.</em></td></tr>
<tr><td>Estou com febre.</td><td><em>I have a fever.</em> (UK: <em>a temperature</em>)</td></tr>
<tr><td>Estou resfriado.</td><td><em>I have a cold.</em></td></tr>
<tr><td>Estou com tosse.</td><td><em>I have a cough.</em></td></tr>
<tr><td>Estou com dor de garganta.</td><td><em>I have a sore throat.</em></td></tr>
<tr><td>Estou com o nariz escorrendo.</td><td><em>I have a runny nose.</em></td></tr></table>
<p>Repare no artigo <b>a</b>: <i>a headache, a cold, a cough</i>. É um erro comum dizer "I have headache" sem o artigo.</p>

<h3>2. As dores: -ache, hurt e sore</h3>
<p>Para algumas partes do corpo existe uma palavra pronta com <b>-ache</b>: <i>headache, stomachache, toothache, backache, earache</i>. Para as outras, usamos o verbo <b>hurt</b> (doer) ou o adjetivo <b>sore</b> (dolorido):</p>
<ul>
<li><i>My knee hurts when I walk.</i> (Meu joelho dói quando eu ando.)</li>
<li><i>My shoulders are sore after the gym.</i></li>
<li><i>It hurts here, on the left side.</i></li>
</ul>
<div class="ex">Atenção: <b>hurt</b> concorda com a parte do corpo. <i>My feet <b>hurt</b></i> (plural) × <i>My back <b>hurts</b></i> (singular). E no passado, hurt continua hurt: <i>I hurt my ankle playing football.</i></div>

<h3>3. Feel: como você está se sentindo</h3>
<p>Use <b>feel</b> + adjetivo para estados gerais:</p>
<ul>
<li><i>I feel dizzy.</i> (tonto) · <i>I feel sick / nauseous.</i> (enjoado) · <i>I feel weak.</i> (fraco)</li>
<li><i>I don't feel well.</i> / <i>I'm not feeling very well today.</i></li>
<li><i>I feel a bit under the weather.</i> (meio indisposto, informal)</li>
</ul>
<p>No inglês americano, <b>I feel sick</b> pode significar "estou doente" ou "estou enjoado"; no britânico, <b>sick</b> costuma ser "enjoado, com vontade de vomitar".</p>

<h3>4. Há quanto tempo? For, since e o present perfect</h3>
<p>O médico sempre pergunta <b>How long have you had these symptoms?</b> Como o sintoma começou no passado e continua agora, a resposta usa o <b>present perfect</b>:</p>
<ul>
<li><i>I've had this cough <b>for</b> about a week.</i> (for + duração)</li>
<li><i>I've had a fever <b>since</b> Sunday.</i> (since + ponto de início)</li>
<li><i>It started three days ago.</i> (passado simples + ago, quando falamos do começo)</li>
</ul>
<div class="ex">❌ <i>I have this pain since Monday.</i> ✅ <i>I've had this pain since Monday.</i></div>

<h3>5. Descrevendo melhor a dor</h3>
<p>Quanto mais detalhes, melhor o diagnóstico. Palavras úteis:</p>
<table><tr><th>Tipo</th><th>Em inglês</th></tr>
<tr><td>Dor aguda, pontada</td><td><em>a sharp pain</em></td></tr>
<tr><td>Dor contínua, fraca</td><td><em>a dull ache</em></td></tr>
<tr><td>Latejante</td><td><em>a throbbing pain</em></td></tr>
<tr><td>Vai e volta</td><td><em>it comes and goes</em></td></tr>
<tr><td>Piora à noite</td><td><em>it gets worse at night</em></td></tr></table>
<p>Para intensidade, o médico pode pedir uma nota: <i>On a scale of one to ten, how bad is the pain?</i></p>

<h3>6. No consultório</h3>
<table><tr><th>Médico</th><th>Paciente</th></tr>
<tr><td><em>What seems to be the problem?</em></td><td><em>I've had a terrible headache since yesterday.</em></td></tr>
<tr><td><em>Are you allergic to anything?</em></td><td><em>Yes, I'm allergic to penicillin.</em></td></tr>
<tr><td><em>Are you taking any medication?</em></td><td><em>Just something for my blood pressure.</em></td></tr>
<tr><td><em>I'll write you a prescription.</em></td><td><em>How often should I take it?</em></td></tr></table>
<p><b>Prescription</b> é a receita médica; <b>medication</b> ou <b>medicine</b> é o remédio. E <b>drug</b> também significa remédio, apesar de lembrar "droga".</p>

<h3>Resumo</h3>
<ul>
<li><b>have + a + sintoma</b>: I have a cold, a fever, a sore throat.</li>
<li><b>-ache</b> para dores comuns; <b>hurt</b> ou <b>sore</b> para o resto.</li>
<li><b>feel</b> + adjetivo: dizzy, sick, weak.</li>
<li>Duração: <b>I've had... for / since</b>.</li>
</ul>`,
  say: ["I have a terrible headache and a sore throat.", "My back hurts when I sit for too long.", "I've had this cough for about a week.", "I don't feel very well. I feel a bit dizzy.", "It's a sharp pain, and it gets worse at night.", "I'm allergic to penicillin."],
  vocab: [
    { en: 'headache', pt: 'dor de cabeça', ex: "I've had a headache all morning." },
    { en: 'sore throat', pt: 'dor de garganta', ex: "I have a sore throat and a runny nose." },
    { en: 'fever', pt: 'febre', ex: "She stayed home because she had a fever." },
    { en: 'hurt', pt: 'doer; machucar', ex: "My knee hurts when I go down the stairs." },
    { en: 'dizzy', pt: 'tonto', ex: "I felt dizzy after standing up too quickly." },
    { en: 'under the weather', pt: 'meio indisposto', ex: "I'm feeling a bit under the weather today." },
    { en: 'prescription', pt: 'receita médica', ex: "The doctor gave me a prescription for antibiotics." },
    { en: 'symptoms', pt: 'sintomas', ex: "How long have you had these symptoms?" },
    { en: 'appointment', pt: 'consulta (marcada)', ex: "I made an appointment for Thursday morning." },
    { en: 'get better', pt: 'melhorar', ex: "I hope you get better soon." }
  ],
  pics: [
    { en: 'a thermometer', pt: 'um termômetro', img: 'Thermometer' },
    { en: 'a pill', pt: 'um comprimido', img: 'Pill' },
    { en: 'a syringe', pt: 'uma seringa', img: 'Syringe' },
    { en: 'a stethoscope', pt: 'um estetoscópio', img: 'Stethoscope' },
    { en: 'a bandage', pt: 'um curativo', img: 'Adhesive bandage' },
    { en: 'a tooth', pt: 'um dente', img: 'Tooth' },
    { en: 'a crutch', pt: 'uma muleta', img: 'Crutch' },
    { en: 'an ambulance', pt: 'uma ambulância', img: 'Ambulance' }
  ],
  fill: [
    { s: "I've had a terrible ___ since I woke up.", a: 'headache' },
    { s: 'My ankle ___ when I walk.', a: 'hurts' },
    { s: "I've had this cough ___ about a week.", a: 'for' },
    { s: 'I felt ___ and had to sit down.', a: 'dizzy' },
    { s: 'The doctor wrote me a ___ for some antibiotics.', a: 'prescription' },
    { s: 'I made an ___ with the dentist for Friday.', a: 'appointment' },
    { s: "Stay in bed and you'll get ___ soon.", a: 'better' }
  ],
  reading: {
    title: 'When to see a doctor (and when to rest)',
    paras: [
      "Most of the time, a cold is just a cold. You feel tired for a few days, your nose won't stop running, and then, slowly, you get better. Doctors usually recommend the same simple things: rest, plenty of fluids and a little patience.",
      "But some symptoms deserve more attention. A fever that lasts more than three days, difficulty breathing, or a pain that is sharp and sudden are all good reasons to make an appointment. The same goes for any symptom that keeps getting worse instead of better.",
      "Many people avoid the doctor because they don't want to waste anyone's time. Others search their symptoms online and end up convinced they have something terrible. Neither approach is ideal. A short conversation with a professional can save you days of worry.",
      "If you're traveling, it's worth knowing a few key phrases before you need them. Being able to say what hurts, how long it has hurt, and whether you're allergic to anything can make a stressful visit much easier, for you and for the person trying to help."
    ],
    gloss: { 'fluids': 'líquidos', 'deserve': 'merecem', 'lasts': 'dura', 'sudden': 'repentina', 'waste anyone\'s time': 'fazer alguém perder tempo', 'convinced': 'convencido' },
    qs: [
      { q: 'What do doctors usually recommend for a cold?', opts: ['Antibiotics', 'Rest, fluids and patience', 'Surgery', 'Exercise'], a: 1 },
      { q: 'Which is a good reason to see a doctor?', opts: ['A runny nose', 'Feeling a bit tired', 'A fever lasting more than three days', 'Sneezing once'], a: 2 },
      { q: 'What problem does searching symptoms online cause?', opts: ['It is expensive', 'People become convinced they have something terrible', 'It takes too long', 'It is always wrong'], a: 1 },
      { q: 'What advice does the text give travelers?', opts: ['Avoid doctors abroad', 'Learn key health phrases in advance', 'Carry antibiotics', 'Buy travel insurance'], a: 1 }
    ]
  },
  listening: {
    kind: 'dialogue', place: 'Num consultório médico',
    lines: [
      { s: 'Doctor', v: 'en-US-EmmaNeural', t: "Hello, have a seat. So, what seems to be the problem?" },
      { s: 'Patient', v: 'en-US-BrianNeural', t: "I've had a really bad sore throat since Monday, and now I have a fever too." },
      { s: 'Doctor', v: 'en-US-EmmaNeural', t: "I see. How high is the fever?" },
      { s: 'Patient', v: 'en-US-BrianNeural', t: "Last night it was almost thirty-nine degrees. And my whole body aches." },
      { s: 'Doctor', v: 'en-US-EmmaNeural', t: "Any coughing or difficulty breathing?" },
      { s: 'Patient', v: 'en-US-BrianNeural', t: "A little cough, but breathing is fine. It just hurts a lot when I swallow." },
      { s: 'Doctor', v: 'en-US-EmmaNeural', t: "Let me take a look. Open wide, please. Yes, your throat is very red. Are you allergic to any medication?" },
      { s: 'Patient', v: 'en-US-BrianNeural', t: "Not that I know of." },
      { s: 'Doctor', v: 'en-US-EmmaNeural', t: "Okay. It looks like a bacterial infection, so I'll write you a prescription for antibiotics. Take one pill twice a day for seven days, even if you feel better sooner." },
      { s: 'Patient', v: 'en-US-BrianNeural', t: "Twice a day for a week. Got it. Should I stay home from work?" },
      { s: 'Doctor', v: 'en-US-EmmaNeural', t: "Yes, at least until the fever is gone. Drink plenty of water and get some rest." }
    ],
    qs: [
      { q: 'Since when has the patient had a sore throat?', opts: ['Since yesterday', 'Since Monday', 'For a month', 'Since last night'], a: 1 },
      { q: 'What hurts when he swallows?', opts: ['His ears', 'His throat', 'His stomach', 'His teeth'], a: 1 },
      { q: 'How should he take the antibiotics?', opts: ['Once a day for three days', 'Twice a day for seven days', 'Three times a day for a month', 'Only when he feels bad'], a: 1 },
      { q: 'What does the doctor say about work?', opts: ['He can go tomorrow', 'He should stay home until the fever is gone', 'He should work from home', 'Work is not a problem'], a: 1 }
    ]
  },
  speaking: {
    shadow: [
      { text: "I have a headache and a sore throat.", tip: "\"headache\" = HED-eik; o ch soa como k." },
      { text: "My back hurts when I sit for too long.", tip: "\"hurts\" tem o r americano: hârts." },
      { text: "I've had this cough for about a week.", tip: "\"cough\" = /kóf/; o gh soa como f." },
      { text: "I don't feel very well today.", tip: "\"feel very well\": todas as palavras fortes, ritmo lento." },
      { text: "Are you allergic to anything?", tip: "\"allergic\" = a-LER-jik, ênfase na segunda sílaba." }
    ],
    prompt: { q: 'Imagine you are at the doctor. Describe your symptoms, how long you have had them and how you feel.', hints: ["I've had", 'since', 'it hurts', 'I feel'] }
  }
},

// ───────────────────────────── 12 · tema: farmácia e cuidados
{
  id: 'c12', lv: 'b1', title: 'Conselhos e obrigações', goal: 'Should, must, have to e don\'t have to: dar conselhos, falar de regras e do que não é necessário.',
  theory: `
<p>Na farmácia, no trabalho ou em casa, passamos o dia dando e recebendo conselhos e falando de regras: "você deveria descansar", "tem que tomar com comida", "não precisa de receita". Em inglês, isso é feito com os <b>modal verbs</b> de conselho e obrigação. A diferença entre eles é pequena na forma, mas grande no sentido, principalmente na negativa.</p>

<h3>1. Should: o conselho</h3>
<p><b>Should</b> (deveria) é a forma mais comum de dar conselho. Depois dele vem o verbo na forma base, sem "to":</p>
<ul>
<li><i>You should drink more water.</i></li>
<li><i>You shouldn't take this on an empty stomach.</i></li>
<li><i>Should I take it before or after meals?</i></li>
</ul>
<p>Para suavizar ainda mais: <i>Maybe you should... / I think you should... / If I were you, I'd...</i></p>
<div class="ex">❌ <i>You should to rest.</i> ✅ <i>You should rest.</i> Modais nunca levam "to" depois (com exceção de <i>have to</i> e <i>ought to</i>).</div>

<h3>2. Must e have to: obrigação</h3>
<p>Os dois indicam obrigação, mas com uma nuance:</p>
<table><tr><th>Forma</th><th>Origem da obrigação</th><th>Exemplo</th></tr>
<tr><td><b>must</b></td><td>vem de quem fala, de uma regra escrita ou de algo muito importante</td><td><em>You must keep this medicine in the fridge.</em></td></tr>
<tr><td><b>have to</b></td><td>vem de fora: uma lei, uma regra, uma situação</td><td><em>I have to show a prescription to buy antibiotics.</em></td></tr></table>
<p>No dia a dia, <b>have to</b> é muito mais usado. <b>Must</b> aparece em bulas, avisos e instruções formais: <i>This medicine must not be given to children under twelve.</i></p>
<p>No passado, os dois viram <b>had to</b>: <i>I had to wait an hour at the pharmacy.</i></p>

<h3>3. A armadilha: mustn't × don't have to</h3>
<p>No afirmativo, must e have to são parecidos. Na negativa, significam coisas <b>completamente diferentes</b>:</p>
<table><tr><th>Forma</th><th>Sentido</th><th>Exemplo</th></tr>
<tr><td><b>mustn't</b></td><td>é proibido, não pode</td><td><em>You mustn't drink alcohol with this medicine.</em></td></tr>
<tr><td><b>don't have to</b></td><td>não é necessário, mas pode</td><td><em>You don't have to make an appointment. Just come in.</em></td></tr></table>
<div class="ex">Pense assim: <b>mustn't</b> = não faça; <b>don't have to</b> = não precisa fazer. Confundir os dois pode causar um problema sério numa farmácia!</div>

<h3>4. Need to e needn't</h3>
<p><b>Need to</b> funciona como have to: <i>You need to take it every eight hours.</i> Na negativa, <b>don't need to</b> ou <b>needn't</b> (mais britânico) significam "não precisa": <i>You don't need to finish the whole box if the pain stops.</i></p>

<h3>5. Had better: conselho com alerta</h3>
<p><b>Had better</b> (geralmente contraído: <i>you'd better</i>) é mais forte que should. Ele sugere que algo ruim pode acontecer se a pessoa não seguir o conselho:</p>
<ul>
<li><i>You'd better see a doctor if the fever doesn't go down.</i></li>
<li><i>We'd better hurry. The pharmacy closes at eight.</i></li>
</ul>
<p>Apesar do "had", ele fala do presente ou do futuro, não do passado.</p>

<h3>6. Linguagem da farmácia</h3>
<table><tr><th>Situação</th><th>Frase</th></tr>
<tr><td>Pedir algo</td><td><em>Do you have anything for a headache?</em></td></tr>
<tr><td>Precisa de receita?</td><td><em>Do I need a prescription for this?</em></td></tr>
<tr><td>Venda livre</td><td><em>It's available over the counter.</em></td></tr>
<tr><td>Dose</td><td><em>How many should I take? / Take two tablets every six hours.</em></td></tr>
<tr><td>Efeitos colaterais</td><td><em>Are there any side effects? / It might make you drowsy.</em></td></tr></table>
<p><b>Over the counter</b> é o remédio de venda livre, sem receita; <b>drowsy</b> significa sonolento.</p>

<h3>Resumo</h3>
<ul>
<li><b>should</b> = conselho; <b>had better</b> = conselho com alerta.</li>
<li><b>must</b> = obrigação forte, regras escritas; <b>have to</b> = obrigação externa, mais comum.</li>
<li><b>mustn't</b> = proibido; <b>don't have to</b> = não é necessário.</li>
<li>Passado de must e have to: <b>had to</b>.</li>
</ul>`,
  say: ["You should drink plenty of water and get some rest.", "You mustn't drink alcohol while you're taking this.", "You don't have to make an appointment. Just come in.", "Do I need a prescription for this?", "You'd better see a doctor if the fever doesn't go down.", "Take two tablets every six hours, after meals."],
  vocab: [
    { en: 'over the counter', pt: 'de venda livre, sem receita', ex: "You can buy this painkiller over the counter." },
    { en: 'painkiller', pt: 'analgésico', ex: "I took a painkiller and went to bed." },
    { en: 'side effects', pt: 'efeitos colaterais', ex: "Are there any side effects I should know about?" },
    { en: 'drowsy', pt: 'sonolento', ex: "This medicine might make you drowsy." },
    { en: 'dose', pt: 'dose', ex: "Don't take more than the recommended dose." },
    { en: 'on an empty stomach', pt: 'de estômago vazio', ex: "Don't take these pills on an empty stomach." },
    { en: 'tablet', pt: 'comprimido', ex: "Take one tablet every eight hours." },
    { en: 'pharmacist', pt: 'farmacêutico', ex: "Ask the pharmacist if you have any questions." },
    { en: 'cream', pt: 'pomada, creme', ex: "Put this cream on the rash twice a day." },
    { en: "you'd better", pt: 'é melhor você', ex: "You'd better go home and rest." }
  ],
  pics: [
    { en: 'pills', pt: 'comprimidos', img: 'Pill' },
    { en: 'a lotion', pt: 'uma loção', img: 'Lotion bottle' },
    { en: 'a toothbrush', pt: 'uma escova de dentes', img: 'Toothbrush' },
    { en: 'soap', pt: 'sabonete', img: 'Soap' },
    { en: 'a razor', pt: 'um barbeador', img: 'Razor' },
    { en: 'toilet paper', pt: 'papel higiênico', img: 'Roll of paper' },
    { en: 'a sponge', pt: 'uma esponja', img: 'Sponge' },
    { en: 'glasses', pt: 'óculos', img: 'Glasses' }
  ],
  fill: [
    { s: 'You ___ drink more water. It will help.', a: 'should' },
    { s: "You ___ drink alcohol with this medicine. It's dangerous.", a: "mustn't" },
    { s: "You don't ___ to make an appointment. Just walk in.", a: 'have' },
    { s: 'This painkiller is sold over the ___.', a: 'counter' },
    { s: 'It might make you ___, so don\'t drive.', a: 'drowsy' },
    { s: "Don't take it on an empty ___.", a: 'stomach' },
    { s: 'Are there any side ___?', a: 'effects' }
  ],
  reading: {
    title: 'The pharmacist will see you now',
    paras: [
      "In many countries, the pharmacy has quietly become the first stop for minor health problems. Instead of waiting days for a doctor's appointment, people walk into a pharmacy, describe their symptoms and leave with advice and, often, something to help.",
      "Pharmacists are trained to recognize common conditions such as colds, allergies, skin rashes and minor infections. They can recommend over-the-counter treatments, explain how and when to take them, and warn about side effects or dangerous combinations with other medicines.",
      "Just as importantly, they know when a problem is beyond them. A good pharmacist will tell you, politely but clearly, that you must see a doctor, for example if a fever has lasted too long or if a symptom could be a sign of something more serious.",
      "So next time you feel under the weather, don't be shy. Ask questions, mention any medication you're already taking and be honest about your symptoms. The person behind the counter has probably heard it all before."
    ],
    gloss: { 'first stop': 'primeira parada', 'minor': 'pequenos, leves', 'rashes': 'irritações na pele', 'warn about': 'alertar sobre', 'beyond them': 'além da capacidade deles', 'shy': 'tímido' },
    qs: [
      { q: 'Why do many people go to a pharmacy first?', opts: ['Medicine is free there', 'They avoid waiting days for a doctor', 'Doctors recommend it', 'Pharmacies are open 24 hours'], a: 1 },
      { q: 'What can pharmacists do, according to the text?', opts: ['Perform surgery', 'Recommend treatments and warn about side effects', 'Write any prescription', 'Replace doctors completely'], a: 1 },
      { q: 'When will a good pharmacist send you to a doctor?', opts: ['Never', 'When a fever has lasted too long', 'When you ask for vitamins', 'Only on weekends'], a: 1 },
      { q: 'What should you mention to the pharmacist?', opts: ['Your salary', 'Other medication you are taking', 'Your favorite brand', 'Nothing'], a: 1 }
    ]
  },
  listening: {
    kind: 'dialogue', place: 'Numa farmácia em Londres',
    lines: [
      { s: 'Pharmacist', v: 'en-GB-LibbyNeural', t: "Hi there, how can I help?" },
      { s: 'Customer', v: 'en-US-AvaNeural', t: "Hi. I've got a really bad cold, and I have a meeting tomorrow I can't miss. Do you have anything that could help?" },
      { s: 'Pharmacist', v: 'en-GB-LibbyNeural', t: "Of course. What are your symptoms, exactly?" },
      { s: 'Customer', v: 'en-US-AvaNeural', t: "A blocked nose, a headache and a bit of a sore throat. No fever, though." },
      { s: 'Pharmacist', v: 'en-GB-LibbyNeural', t: "Okay. These tablets are good for a blocked nose and the headache. You should take two every four to six hours, but no more than eight in a day." },
      { s: 'Customer', v: 'en-US-AvaNeural', t: "Do I need a prescription for them?" },
      { s: 'Pharmacist', v: 'en-GB-LibbyNeural', t: "No, they're over the counter. Are you taking any other medication at the moment?" },
      { s: 'Customer', v: 'en-US-AvaNeural', t: "Just some paracetamol I took this morning." },
      { s: 'Pharmacist', v: 'en-GB-LibbyNeural', t: "Then you mustn't take any more paracetamol today. These already contain it, and taking both could be dangerous." },
      { s: 'Customer', v: 'en-US-AvaNeural', t: "Oh, I didn't know that. Thank you. Anything for the throat?" },
      { s: 'Pharmacist', v: 'en-GB-LibbyNeural', t: "These lozenges will help. And you'd better drink lots of warm water with honey. If it isn't better in a week, you should see your doctor." }
    ],
    qs: [
      { q: 'Why does the customer want to feel better quickly?', opts: ['She is traveling', 'She has an important meeting tomorrow', 'She has an exam', 'She is getting married'], a: 1 },
      { q: 'Which symptom does she NOT have?', opts: ['A blocked nose', 'A headache', 'A fever', 'A sore throat'], a: 2 },
      { q: 'Why mustn\'t she take more paracetamol?', opts: ['It is expensive', 'The tablets already contain paracetamol', 'It makes her drowsy', 'She is allergic'], a: 1 },
      { q: 'When should she see a doctor?', opts: ['Tomorrow', 'If it is not better in a week', 'Only if she has a fever', 'Never'], a: 1 }
    ]
  },
  speaking: {
    shadow: [
      { text: "Do you have anything for a headache?", tip: "\"anything for a\" liga: enithinforê." },
      { text: "Do I need a prescription for this?", tip: "\"prescription\" = pri-SKRIP-shun." },
      { text: "You should take two tablets every six hours.", tip: "Ênfase nos números: TWO, SIX." },
      { text: "You mustn't drink alcohol with this medicine.", tip: "\"mustn't\" = /MÂS-nt/, o primeiro t é mudo." },
      { text: "You'd better see a doctor if it gets worse.", tip: "\"You'd better\" = yudbéder." }
    ],
    prompt: { q: 'A friend has a bad cold. Give them advice: what they should do, what they mustn\'t do and what they don\'t have to worry about.', hints: ['you should', "you mustn't", "you don't have to", "you'd better"] }
  }
},

// ───────────────────────────── 13 · tema: academia e exercícios
{
  id: 'c13', lv: 'b1', title: 'Com que frequência? Hábitos e rotinas', goal: 'Advérbios de frequência, how often e expressões como once a week para falar de hábitos.',
  theory: `
<p>Falar de hábitos é uma das conversas mais comuns do dia a dia: quantas vezes você treina, se costuma acordar cedo, se nunca come doce. Para isso, o inglês usa <b>advérbios de frequência</b> e <b>expressões de frequência</b>. O conteúdo é simples, mas a <b>posição</b> dessas palavras na frase é o que mais confunde brasileiros.</p>

<h3>1. Os advérbios de frequência</h3>
<p>Do mais frequente para o menos frequente:</p>
<table><tr><th>Advérbio</th><th>Aproximadamente</th><th>Exemplo</th></tr>
<tr><td>always</td><td>100%</td><td><em>I always warm up before running.</em></td></tr>
<tr><td>usually</td><td>90%</td><td><em>I usually go to the gym after work.</em></td></tr>
<tr><td>often</td><td>70%</td><td><em>She often swims on weekends.</em></td></tr>
<tr><td>sometimes</td><td>50%</td><td><em>We sometimes play tennis.</em></td></tr>
<tr><td>occasionally</td><td>30%</td><td><em>I occasionally do yoga.</em></td></tr>
<tr><td>rarely / seldom</td><td>10%</td><td><em>He rarely misses a training session.</em></td></tr>
<tr><td>never</td><td>0%</td><td><em>I never exercise on Sundays.</em></td></tr></table>

<h3>2. A posição: antes do verbo principal, depois do to be</h3>
<p>Esta é a regra de ouro:</p>
<ul>
<li><b>Antes</b> do verbo principal: <i>I <b>usually</b> run in the morning.</i></li>
<li><b>Depois</b> do verbo to be: <i>I'm <b>always</b> tired after spinning class.</i></li>
<li><b>Entre</b> o auxiliar e o verbo principal: <i>I have <b>never</b> been to a gym. / I can <b>rarely</b> train on weekdays.</i></li>
</ul>
<div class="ex">❌ <i>I go always to the gym.</i> ✅ <i>I always go to the gym.</i><br>❌ <i>I always am late.</i> ✅ <i>I'm always late.</i></div>
<p><b>Sometimes</b> e <b>usually</b> também podem abrir a frase, para dar ênfase: <i>Sometimes I train twice a day.</i> Já <b>always</b> e <b>never</b> quase nunca vão para o início.</p>

<h3>3. Never e a negativa</h3>
<p><b>Never</b> já é negativo, então não se usa "not" junto. ❌ <i>I don't never eat sugar.</i> ✅ <i>I never eat sugar.</i> Para negar com outros advérbios, a forma natural é: <i>I don't usually eat breakfast. / I don't often go out on weeknights.</i></p>

<h3>4. Expressões de frequência: once, twice, three times</h3>
<p>Quando queremos ser exatos, usamos expressões que normalmente vão no <b>fim</b> da frase:</p>
<table><tr><th>Expressão</th><th>Sentido</th></tr>
<tr><td><em>once a week</em></td><td>uma vez por semana</td></tr>
<tr><td><em>twice a month</em></td><td>duas vezes por mês</td></tr>
<tr><td><em>three times a day</em></td><td>três vezes por dia</td></tr>
<tr><td><em>every day / every other day</em></td><td>todo dia / dia sim, dia não</td></tr>
<tr><td><em>on Mondays / on weekends</em></td><td>às segundas / nos fins de semana</td></tr>
<tr><td><em>from time to time / now and then</em></td><td>de vez em quando</td></tr></table>
<p>Exemplo: <i>I go to the gym three times a week, and I go running every other day.</i></p>
<div class="ex"><b>Every day</b> (separado) é advérbio: <i>I train every day.</i> <b>Everyday</b> (junto) é adjetivo: <i>my everyday routine</i>.</div>

<h3>5. Perguntando sobre frequência</h3>
<ul>
<li><i>How often do you work out?</i> (Com que frequência você treina?)</li>
<li><i>Do you ever go swimming?</i> (Você costuma nadar? / Você chega a nadar?)</li>
<li><i>How many times a week do you train?</i></li>
</ul>
<p>Repare em <b>ever</b> nas perguntas: <i>Do you ever...?</i> é muito natural para hábitos e significa "alguma vez, costuma".</p>

<h3>6. Linguagem da academia</h3>
<table><tr><th>Expressão</th><th>Sentido</th></tr>
<tr><td><em>work out</em></td><td>malhar, treinar</td></tr>
<tr><td><em>warm up / cool down</em></td><td>aquecer / desaquecer</td></tr>
<tr><td><em>lift weights</em></td><td>levantar peso</td></tr>
<tr><td><em>a set of ten reps</em></td><td>uma série de dez repetições</td></tr>
<tr><td><em>get in shape / stay fit</em></td><td>entrar em forma / manter a forma</td></tr>
<tr><td><em>be sore</em></td><td>estar dolorido</td></tr></table>

<h3>Resumo</h3>
<ul>
<li>Advérbios: always, usually, often, sometimes, rarely, never.</li>
<li>Posição: antes do verbo principal, depois do to be, entre auxiliar e verbo.</li>
<li>Expressões exatas (once a week, every other day) vão no fim da frase.</li>
<li><b>How often...?</b> e <b>Do you ever...?</b> para perguntar.</li>
</ul>`,
  say: ["I usually work out three times a week, after work.", "I'm always tired after spinning class.", "I never exercise on Sundays. That's my rest day.", "How often do you go to the gym?", "Do you ever go swimming?", "I go running every other day, early in the morning."],
  vocab: [
    { en: 'work out', pt: 'malhar, treinar', ex: "I try to work out at least three times a week." },
    { en: 'warm up', pt: 'aquecer (antes do exercício)', ex: "Always warm up before you start running." },
    { en: 'every other day', pt: 'dia sim, dia não', ex: "I go swimming every other day." },
    { en: 'get in shape', pt: 'entrar em forma', ex: "I want to get in shape before the summer." },
    { en: 'lift weights', pt: 'levantar peso, fazer musculação', ex: "He lifts weights at the gym near his office." },
    { en: 'sore', pt: 'dolorido', ex: "My legs are really sore after yesterday's workout." },
    { en: 'how often', pt: 'com que frequência', ex: "How often do you go to the gym?" },
    { en: 'rarely', pt: 'raramente', ex: "I rarely miss a training session." },
    { en: 'membership', pt: 'mensalidade, plano (de academia)', ex: "My gym membership costs fifty dollars a month." },
    { en: 'stay fit', pt: 'manter a forma', ex: "Cycling to work helps me stay fit." }
  ],
  pics: [
    { en: 'sneakers', pt: 'tênis', img: 'Running shoe' },
    { en: 'a bicycle', pt: 'uma bicicleta', img: 'Bicycle' },
    { en: 'a stopwatch', pt: 'um cronômetro', img: 'Stopwatch' },
    { en: 'a basketball', pt: 'uma bola de basquete', img: 'Basketball' },
    { en: 'tennis', pt: 'tênis (esporte)', img: 'Tennis' },
    { en: 'goggles', pt: 'óculos de natação', img: 'Goggles' },
    { en: 'a running shirt', pt: 'uma camiseta de corrida', img: 'Running shirt' },
    { en: 'a boxing glove', pt: 'uma luva de boxe', img: 'Boxing glove' }
  ],
  fill: [
    { s: 'I ___ go to the gym after work, almost every day.', a: 'usually' },
    { s: "I'm ___ tired after a long run.", a: 'always' },
    { s: 'How ___ do you work out?', a: 'often' },
    { s: 'I go swimming every ___ day.', a: 'other' },
    { s: 'Always warm ___ before you start.', a: 'up' },
    { s: 'My legs are really ___ after yesterday.', a: 'sore' },
    { s: 'I play tennis ___ a week, on Tuesdays.', a: 'once' }
  ],
  reading: {
    title: 'The secret of people who never skip the gym',
    paras: [
      "Everyone knows someone who seems to work out every single day without effort. They're up at six, they never miss a session, and they rarely complain. It's tempting to think they simply have more willpower than the rest of us. In most cases, they don't.",
      "What they usually have is a routine that removes decisions. They train at the same time, on the same days, and often with the same people. Their gym bag is packed the night before. By the time they wake up, there's nothing to decide; they just follow the plan.",
      "Another common habit is starting small. Instead of promising to train for two hours every day, they begin with twenty minutes, three times a week. Once that feels normal, they slowly add more. A small habit that you actually keep is worth more than an ambitious one you abandon after two weeks.",
      "Finally, consistent exercisers rarely depend on motivation alone. They accept that some days they won't feel like it, and they go anyway, even if they only do half the workout. As one personal trainer likes to say, 'You don't have to feel like it. You just have to show up.'"
    ],
    gloss: { 'skip': 'faltar, pular', 'willpower': 'força de vontade', 'removes decisions': 'elimina decisões', 'packed': 'arrumada (mala)', 'worth more': 'vale mais', 'show up': 'aparecer, comparecer' },
    qs: [
      { q: 'According to the text, what do consistent exercisers usually have?', opts: ['More willpower', 'A routine that removes decisions', 'More free time', 'Expensive equipment'], a: 1 },
      { q: 'What do they do the night before?', opts: ['Go to bed late', 'Pack their gym bag', 'Eat a big meal', 'Watch videos'], a: 1 },
      { q: 'What does "starting small" mean here?', opts: ['Training only on weekends', 'Beginning with short, regular sessions', 'Using light weights only', 'Training alone'], a: 1 },
      { q: "What is the trainer's main message?", opts: ['Wait until you feel motivated', 'Show up even when you don\'t feel like it', 'Train two hours a day', 'Rest more'], a: 1 }
    ]
  },
  listening: {
    kind: 'dialogue', place: 'Na recepção de uma academia',
    lines: [
      { s: 'Trainer', v: 'en-US-AndrewNeural', t: "Hi! Welcome. Are you interested in a membership?" },
      { s: 'Visitor', v: 'en-US-EmmaNeural', t: "Yes, I think so. I want to get back in shape. I used to run, but I haven't exercised in about a year." },
      { s: 'Trainer', v: 'en-US-AndrewNeural', t: "No problem, lots of people start that way. How often do you think you could come?" },
      { s: 'Visitor', v: 'en-US-EmmaNeural', t: "Realistically, three times a week. I usually finish work at six, so evenings are best." },
      { s: 'Trainer', v: 'en-US-AndrewNeural', t: "Evenings are busy, but it's never too crowded after seven. Do you ever do group classes?" },
      { s: 'Visitor', v: 'en-US-EmmaNeural', t: "Sometimes. I tried spinning once and I was sore for three days." },
      { s: 'Trainer', v: 'en-US-AndrewNeural', t: "That happens! I'd suggest starting with two strength sessions and one class a week. And always warm up for ten minutes first." },
      { s: 'Visitor', v: 'en-US-EmmaNeural', t: "That sounds manageable. How much is the membership?" },
      { s: 'Trainer', v: 'en-US-AndrewNeural', t: "It's forty-five a month, and the first session with a trainer is free. We can plan your routine together." }
    ],
    qs: [
      { q: 'Why does the visitor want to join?', opts: ['To meet people', 'To get back in shape', 'To train for a marathon', 'Her doctor told her to'], a: 1 },
      { q: 'How often can she come?', opts: ['Every day', 'Once a week', 'Three times a week', 'Only on weekends'], a: 2 },
      { q: 'What happened when she tried spinning?', opts: ['She loved it', 'She was sore for three days', 'She got injured', 'She fell asleep'], a: 1 },
      { q: 'What is free?', opts: ['The first month', 'The first session with a trainer', 'Group classes', 'A towel'], a: 1 }
    ]
  },
  speaking: {
    shadow: [
      { text: "I usually work out three times a week.", tip: "\"usually\" = YU-ju-a-li; o s soa como j de 'jeito'." },
      { text: "I'm always tired after a long run.", tip: "\"always\" depois do \"I'm\": a ordem importa." },
      { text: "How often do you go to the gym?", tip: "\"often\" pode ter o t mudo: ÓF-en." },
      { text: "I never exercise on Sundays.", tip: "\"exercise\" = EK-ser-saiz." },
      { text: "Do you ever go swimming on weekends?", tip: "A voz sobe no final: pergunta de sim ou não." }
    ],
    prompt: { q: 'Describe your weekly routine: how often you exercise, sleep well, cook, see friends, and something you never do.', hints: ['usually', 'once a week', 'every other day', 'never', 'how often'] }
  }
},

// ───────────────────────────── 14 · tema: escritório e trabalho
{
  id: 'c14', lv: 'b2', title: 'Falando do seu trabalho', goal: 'Descrever funções e responsabilidades: be in charge of, deal with, be responsible for, e o present perfect para conquistas.',
  theory: `
<p>"O que você faz?" é uma das primeiras perguntas em qualquer conversa, e responder só com o nome do cargo costuma ser pouco. Nesta lição você vai aprender a descrever <b>o que você faz no dia a dia</b>, <b>pelo que é responsável</b> e <b>o que já conquistou</b> no trabalho, usando estruturas que nativos usam em entrevistas, reuniões e conversas informais.</p>

<h3>1. Do cargo à função</h3>
<p>Para dizer o cargo, usamos <b>I'm a/an...</b> ou <b>I work as a/an...</b>. Para dizer onde, <b>I work for</b> (empresa) ou <b>I work in</b> (área):</p>
<ul>
<li><i>I'm an accountant. I work for a small logistics company.</i></li>
<li><i>I work in marketing, mostly on social media campaigns.</i></li>
<li><i>I work as a project manager at a tech startup.</i></li>
</ul>
<div class="ex">Não esqueça o artigo: ❌ <i>I'm engineer.</i> ✅ <i>I'm an engineer.</i> Em inglês, profissão sempre leva a/an.</div>

<h3>2. Responsabilidades: as estruturas-chave</h3>
<table><tr><th>Estrutura</th><th>Sentido</th><th>Exemplo</th></tr>
<tr><td>be responsible for + -ing/substantivo</td><td>ser responsável por</td><td><em>I'm responsible for hiring new staff.</em></td></tr>
<tr><td>be in charge of</td><td>estar à frente de, comandar</td><td><em>She's in charge of the sales team.</em></td></tr>
<tr><td>deal with</td><td>lidar com</td><td><em>I deal with customer complaints.</em></td></tr>
<tr><td>handle</td><td>cuidar de, administrar</td><td><em>He handles all the paperwork.</em></td></tr>
<tr><td>report to</td><td>responder a (chefe)</td><td><em>I report directly to the CEO.</em></td></tr>
<tr><td>work on</td><td>trabalhar em (projeto)</td><td><em>I'm working on a new app at the moment.</em></td></tr></table>
<p>Repare que depois de preposição (for, of, with) o verbo vai para <b>-ing</b>: <i>responsible for <b>managing</b>, in charge of <b>organizing</b></i>.</p>

<h3>3. Rotina × projeto atual</h3>
<p>Como vimos na lição 1, o presente simples descreve a rotina e o presente contínuo, o que está acontecendo nesta fase:</p>
<ul>
<li><i>I usually spend my mornings answering emails.</i> (rotina)</li>
<li><i>This month I'm preparing a big presentation for a client.</i> (projeto atual)</li>
<li><i>We're expanding into two new markets this year.</i></li>
</ul>

<h3>4. Conquistas: o present perfect</h3>
<p>Para falar de resultados e experiência sem dizer quando, use o <b>present perfect</b>. É o tempo ideal para entrevistas e currículos falados:</p>
<ul>
<li><i>I've managed teams of up to fifteen people.</i></li>
<li><i>Since I joined the company, we've doubled our sales.</i></li>
<li><i>I've worked in three different countries.</i></li>
</ul>
<p>Se você der o momento exato, volte ao passado simples: <i>In 2022, I led the launch of our first product.</i></p>

<h3>5. Verbos fortes para descrever o que você fez</h3>
<p>Em vez de "do" e "make", profissionais usam verbos mais precisos:</p>
<table><tr><th>Verbo</th><th>Sentido</th></tr>
<tr><td>manage</td><td>gerenciar</td></tr>
<tr><td>lead</td><td>liderar</td></tr>
<tr><td>develop</td><td>desenvolver</td></tr>
<tr><td>improve</td><td>melhorar</td></tr>
<tr><td>reduce / increase</td><td>reduzir / aumentar</td></tr>
<tr><td>launch</td><td>lançar</td></tr>
<tr><td>negotiate</td><td>negociar</td></tr></table>
<p>Exemplo: <i>I led a project that reduced delivery times by twenty percent.</i></p>

<h3>6. Falando do ambiente de trabalho</h3>
<ul>
<li><i>I work nine to five, Monday to Friday.</i> / <i>I work shifts.</i> (turnos)</li>
<li><i>We have a hybrid model: three days in the office, two from home.</i></li>
<li><i>My workload is pretty heavy right now.</i> (carga de trabalho)</li>
<li><i>I get along really well with my team.</i></li>
<li><i>The best part of my job is... / The most challenging part is...</i></li>
</ul>

<h3>Resumo</h3>
<ul>
<li>Cargo com artigo: <b>I'm an engineer</b>; empresa com <b>work for</b>.</li>
<li><b>responsible for / in charge of / deal with / report to</b> + -ing ou substantivo.</li>
<li>Rotina no presente simples; projeto atual no contínuo.</li>
<li>Conquistas sem data: <b>present perfect</b>.</li>
</ul>`,
  say: ["I work for a small logistics company. I'm in charge of the operations team.", "I'm responsible for hiring and training new staff.", "I deal with customer complaints, so I'm on the phone a lot.", "This month, I'm working on a big presentation for a client.", "Since I joined the company, we've doubled our sales.", "The most challenging part of my job is the workload."],
  vocab: [
    { en: 'in charge of', pt: 'responsável por, à frente de', ex: "She's in charge of the marketing department." },
    { en: 'deal with', pt: 'lidar com', ex: "I deal with suppliers from all over the world." },
    { en: 'report to', pt: 'responder a (um chefe)', ex: "I report directly to the operations director." },
    { en: 'workload', pt: 'carga de trabalho', ex: "My workload doubles at the end of the year." },
    { en: 'deadline', pt: 'prazo', ex: "We're working late to meet the deadline." },
    { en: 'colleague', pt: 'colega de trabalho', ex: "My colleagues and I have lunch together on Fridays." },
    { en: 'shift', pt: 'turno', ex: "Nurses at this hospital work twelve-hour shifts." },
    { en: 'promotion', pt: 'promoção (no trabalho)', ex: "She got a promotion after only two years." },
    { en: 'launch', pt: 'lançar; lançamento', ex: "We're launching a new product in March." },
    { en: 'paperwork', pt: 'papelada, burocracia', ex: "I spend too much time on paperwork." }
  ],
  pics: [
    { en: 'a laptop', pt: 'um notebook', img: 'Laptop' },
    { en: 'a computer', pt: 'um computador', img: 'Desktop computer' },
    { en: 'a printer', pt: 'uma impressora', img: 'Printer' },
    { en: 'a calendar', pt: 'um calendário', img: 'Calendar' },
    { en: 'a clipboard', pt: 'uma prancheta', img: 'Clipboard' },
    { en: 'a paperclip', pt: 'um clipe de papel', img: 'Paperclip' },
    { en: 'a folder', pt: 'uma pasta (de arquivos)', img: 'File folder' },
    { en: 'a telephone', pt: 'um telefone', img: 'Telephone' }
  ],
  fill: [
    { s: "She's in ___ of the sales team.", a: 'charge' },
    { s: 'I deal ___ customer complaints every day.', a: 'with' },
    { s: "I'm responsible for ___ new staff.", a: 'hiring' },
    { s: 'We worked all weekend to meet the ___.', a: 'deadline' },
    { s: 'I report ___ the head of operations.', a: 'to' },
    { s: 'He got a ___ after only two years.', a: 'promotion' },
    { s: "My ___ is really heavy this month.", a: 'workload' }
  ],
  reading: {
    title: 'What do you actually do?',
    paras: [
      "Job titles have become strangely mysterious. A few decades ago, most people had titles that explained themselves: teacher, nurse, accountant, mechanic. Today, offices are full of 'growth hackers', 'customer success managers' and 'chief happiness officers', and even their families aren't always sure what they do.",
      "That's why the most useful answer to 'What do you do?' is rarely the title itself. People respond much better to a simple description of what you do every day and why it matters. 'I make sure our customers actually use the software they've paid for' is clearer than 'I'm a customer success manager', and much more interesting.",
      "The same applies in job interviews. Recruiters say candidates often list responsibilities, such as 'I was responsible for social media', when what they really want to hear are results. 'I grew our Instagram audience from two thousand to fifty thousand followers' tells a much better story.",
      "So next time someone asks what you do, try a three-part answer: who you work for, what you're responsible for, and one thing you're proud of. It takes less than thirty seconds, and it turns a polite question into a real conversation."
    ],
    gloss: { 'mysterious': 'misteriosos', 'explained themselves': 'se explicavam sozinhos', 'recruiters': 'recrutadores', 'list': 'listar', 'audience': 'público', 'proud of': 'orgulhoso de' },
    qs: [
      { q: 'What is the problem with modern job titles?', opts: ['They are too long to say', 'They often do not explain what people do', 'They are only in English', 'They change every year'], a: 1 },
      { q: 'What is the most useful answer to "What do you do?"', opts: ['Your exact title', 'A simple description of what you do and why it matters', 'Your salary', 'The name of your company only'], a: 1 },
      { q: 'What do recruiters really want to hear?', opts: ['Responsibilities', 'Results', 'Hobbies', 'Job titles'], a: 1 },
      { q: 'What is the "three-part answer"?', opts: ['Name, age and city', 'Company, responsibility and one achievement', 'Title, salary and boss', 'Education, skills and hobbies'], a: 1 }
    ]
  },
  listening: {
    kind: 'dialogue', place: 'Conversa num evento de networking',
    lines: [
      { s: 'Sarah', v: 'en-GB-SoniaNeural', t: "So, Marcos, what brings you to this conference?" },
      { s: 'Marcos', v: 'en-US-AndrewNeural', t: "I work for a food delivery app in Brazil. I'm in charge of our partnerships with restaurants." },
      { s: 'Sarah', v: 'en-GB-SoniaNeural', t: "Oh, interesting. What does that involve, day to day?" },
      { s: 'Marcos', v: 'en-US-AndrewNeural', t: "Mostly negotiating contracts and dealing with problems when things go wrong. If a restaurant is unhappy, they usually end up talking to my team." },
      { s: 'Sarah', v: 'en-GB-SoniaNeural', t: "That sounds stressful." },
      { s: 'Marcos', v: 'en-US-AndrewNeural', t: "It can be. But I love it. Since I took over the team, we've signed more than three thousand new restaurants." },
      { s: 'Sarah', v: 'en-GB-SoniaNeural', t: "Three thousand? That's impressive. Who do you report to?" },
      { s: 'Marcos', v: 'en-US-AndrewNeural', t: "To our head of operations. And at the moment I'm working on our expansion into Chile, which is why I'm here, to learn from companies that have done it before. What about you?" },
      { s: 'Sarah', v: 'en-GB-SoniaNeural', t: "I'm a consultant. I help companies plan international expansions, actually. Maybe we should grab a coffee later." }
    ],
    qs: [
      { q: 'What is Marcos in charge of?', opts: ['Marketing', 'Partnerships with restaurants', 'Delivery drivers', 'The mobile app'], a: 1 },
      { q: 'What does his job mostly involve?', opts: ['Cooking', 'Negotiating contracts and solving problems', 'Writing code', 'Hiring drivers'], a: 1 },
      { q: 'What has his team achieved?', opts: ['Opened offices in Chile', 'Signed more than three thousand restaurants', 'Doubled the company\'s profits', 'Won an award'], a: 1 },
      { q: 'Why might Sarah and Marcos meet again?', opts: ['They are old friends', 'She helps companies with international expansion', 'She wants a job', 'She owns a restaurant'], a: 1 }
    ]
  },
  speaking: {
    shadow: [
      { text: "I work for a small tech company in São Paulo.", tip: "\"work for\": o r de work é o r americano, língua enrolada." },
      { text: "I'm in charge of a team of eight people.", tip: "\"in charge of\" liga: inchárjov." },
      { text: "I deal with clients from all over the world.", tip: "\"deal with\" = diil-with; o th sem vibrar no final." },
      { text: "We've doubled our sales since last year.", tip: "\"doubled\" = DÂ-bould." },
      { text: "At the moment, I'm working on a new project.", tip: "Ênfase em \"new\" e \"project\"." }
    ],
    prompt: { q: 'Describe your job (or a job you would like to have): who you work for, what you are responsible for and one thing you are proud of.', hints: ['I work for', "I'm in charge of", 'I deal with', "I've"] }
  }
},

// ───────────────────────────── 15 · tema: entrevista de emprego
{
  id: 'c15', lv: 'b2', title: 'Gerúndio ou infinitivo?', goal: 'Quando usar enjoy doing, want to do, e os verbos que mudam de sentido (stop, remember, try).',
  theory: `
<p>Em inglês, quando um verbo vem logo depois de outro, ele assume uma de duas formas: <b>-ing</b> (gerúndio) ou <b>to + verbo</b> (infinitivo). <i>I enjoy working in teams</i>, mas <i>I want to work in teams</i>. Não existe uma regra lógica única: depende do primeiro verbo. A boa notícia é que os verbos mais usados são poucos, e eles aparecem o tempo todo em entrevistas de emprego.</p>

<h3>1. Verbos seguidos de -ing</h3>
<p>Estes pedem o verbo seguinte com <b>-ing</b>:</p>
<table><tr><th>Verbo</th><th>Exemplo</th></tr>
<tr><td>enjoy</td><td><em>I enjoy solving complex problems.</em></td></tr>
<tr><td>avoid</td><td><em>I try to avoid making promises I can't keep.</em></td></tr>
<tr><td>consider</td><td><em>I'm considering moving to a bigger company.</em></td></tr>
<tr><td>finish</td><td><em>I've just finished studying for my MBA.</em></td></tr>
<tr><td>mind</td><td><em>I don't mind working weekends occasionally.</em></td></tr>
<tr><td>keep</td><td><em>I keep thinking about that offer.</em></td></tr>
<tr><td>suggest</td><td><em>My manager suggested applying for this role.</em></td></tr>
<tr><td>imagine / miss / practice</td><td><em>I miss working with clients directly.</em></td></tr></table>
<p>Também usamos -ing <b>depois de qualquer preposição</b>: <i>I'm good at organizing. I'm interested in learning. I'm looking forward to hearing from you.</i></p>
<div class="ex">❌ <i>I look forward to hear from you.</i> ✅ <i>I look forward to hearing from you.</i> Aqui o "to" é preposição, então vem -ing.</div>

<h3>2. Verbos seguidos de to + verbo</h3>
<table><tr><th>Verbo</th><th>Exemplo</th></tr>
<tr><td>want / would like</td><td><em>I'd like to grow in my career.</em></td></tr>
<tr><td>hope / expect</td><td><em>I hope to lead a team one day.</em></td></tr>
<tr><td>decide / plan</td><td><em>I decided to change careers last year.</em></td></tr>
<tr><td>manage</td><td><em>I managed to finish the project ahead of schedule.</em> (conseguir)</td></tr>
<tr><td>agree / refuse</td><td><em>They agreed to give me more responsibility.</em></td></tr>
<tr><td>learn / offer / need</td><td><em>I learned to code by myself.</em></td></tr></table>
<p>Um truque para memorizar: muitos verbos de <b>futuro, intenção ou decisão</b> (want, hope, plan, decide, expect) pedem o infinitivo.</p>

<h3>3. Os dois servem, com o mesmo sentido</h3>
<p><b>like, love, hate, prefer, start, begin, continue</b> aceitam as duas formas quase sem diferença: <i>I love working here = I love to work here. It started raining = It started to rain.</i></p>
<p>Mas <b>would like / would love / would prefer</b> pedem sempre o infinitivo: <i>I'd love to work abroad.</i></p>

<h3>4. Os verbos que mudam de sentido</h3>
<p>Este é o ponto que separa o intermediário do avançado:</p>
<table><tr><th>Verbo</th><th>+ -ing</th><th>+ to</th></tr>
<tr><td>stop</td><td><em>I stopped smoking.</em> (parei o hábito)</td><td><em>I stopped to smoke.</em> (parei para fumar)</td></tr>
<tr><td>remember</td><td><em>I remember meeting him.</em> (lembro de ter encontrado)</td><td><em>Remember to call him.</em> (lembre-se de ligar)</td></tr>
<tr><td>forget</td><td><em>I'll never forget winning that prize.</em></td><td><em>Don't forget to send your CV.</em></td></tr>
<tr><td>try</td><td><em>Try restarting the computer.</em> (teste, experimente)</td><td><em>I tried to open it, but I couldn't.</em> (esforço)</td></tr>
<tr><td>regret</td><td><em>I regret leaving that job.</em> (me arrependo)</td><td><em>We regret to inform you...</em> (lamentamos informar)</td></tr></table>
<div class="ex">Dica: com <b>remember</b> e <b>forget</b>, o <b>-ing</b> olha para o passado (algo que já aconteceu); o <b>to</b> olha para o futuro (algo a fazer).</div>

<h3>5. Na entrevista</h3>
<ul>
<li><i>I enjoy working under pressure, and I don't mind traveling.</i></li>
<li><i>I decided to apply because I want to work on international projects.</i></li>
<li><i>In my last job, I managed to reduce costs by fifteen percent.</i></li>
<li><i>I'm really interested in learning more about this role.</i></li>
<li><i>I look forward to hearing from you.</i> (fechamento clássico de e-mail)</li>
</ul>

<h3>Resumo</h3>
<ul>
<li><b>-ing</b> depois de enjoy, avoid, consider, finish, mind, keep, suggest e de preposições.</li>
<li><b>to + verbo</b> depois de want, would like, hope, plan, decide, manage, agree.</li>
<li>like, love, start: os dois; would like: só to.</li>
<li>stop, remember, forget, try e regret mudam de sentido.</li>
</ul>`,
  say: ["I enjoy solving problems, and I don't mind working under pressure.", "I decided to apply because I want to work on international projects.", "I managed to finish the project two weeks ahead of schedule.", "I'm really interested in learning more about this role.", "Don't forget to send me your updated CV.", "I look forward to hearing from you."],
  vocab: [
    { en: 'apply for', pt: 'se candidatar a', ex: "I'd like to apply for the position of project manager." },
    { en: 'strengths', pt: 'pontos fortes', ex: "One of my strengths is communication." },
    { en: 'weakness', pt: 'ponto fraco', ex: "My biggest weakness is that I'm a perfectionist." },
    { en: 'hire', pt: 'contratar', ex: "They're hiring two new developers." },
    { en: 'under pressure', pt: 'sob pressão', ex: "I work well under pressure." },
    { en: 'look forward to', pt: 'aguardar com expectativa', ex: "I look forward to hearing from you." },
    { en: 'manage to', pt: 'conseguir (fazer algo difícil)', ex: "We managed to finish on time." },
    { en: 'skills', pt: 'habilidades', ex: "This job requires strong technical skills." },
    { en: 'résumé', pt: 'currículo (EUA)', ex: "Please send your résumé by Friday." },
    { en: 'salary', pt: 'salário', ex: "What are your salary expectations?" }
  ],
  pics: [
    { en: 'a tie', pt: 'uma gravata', img: 'Necktie' },
    { en: 'a briefcase', pt: 'uma pasta executiva', img: 'Briefcase' },
    { en: 'a handshake', pt: 'um aperto de mão', img: 'Handshake' },
    { en: 'a document', pt: 'um documento', img: 'Page facing up' },
    { en: 'a trophy', pt: 'um troféu', img: 'Trophy' },
    { en: 'an idea', pt: 'uma ideia', img: 'Light bulb' },
    { en: 'a chart', pt: 'um gráfico', img: 'Chart increasing' },
    { en: 'a name badge', pt: 'um crachá', img: 'Name badge' }
  ],
  fill: [
    { s: 'I enjoy ___ in a team.', a: 'working' },
    { s: 'I decided ___ apply for this job last week.', a: 'to' },
    { s: 'I look forward to ___ from you.', a: 'hearing' },
    { s: 'We managed ___ finish the project on time.', a: 'to' },
    { s: "I don't mind ___ on weekends occasionally.", a: 'traveling' },
    { s: "One of my ___ is that I'm very organized.", a: 'strengths' },
    { s: "I'd like to apply ___ the marketing position.", a: 'for' }
  ],
  reading: {
    title: 'The question everyone dreads',
    paras: [
      "Almost every job interview includes some version of the same question: 'What is your biggest weakness?' Candidates dread it, and for good reason. Answer too honestly and you might lose the job; answer with a cliché like 'I'm a perfectionist' and the interviewer may roll their eyes.",
      "Recruiters say the question isn't really about the weakness at all. What they want to see is self-awareness and the ability to improve. A good answer names a real but manageable weakness, explains how it has affected your work, and, most importantly, shows what you're doing about it.",
      "For example, a candidate might say: 'I used to find it hard to delegate. I wanted to do everything myself, which meant I sometimes worked late and slowed the team down. Over the last year, I've started giving clear responsibilities to others and checking in once a week instead of every day. It's made a big difference.'",
      "Notice what that answer avoids: it doesn't pretend the weakness is secretly a strength, and it doesn't mention something essential to the job. If you're applying to be an accountant, 'I'm not great with numbers' is probably a step too far."
    ],
    gloss: { 'dread': 'temem, morrem de medo', 'cliché': 'clichê', 'roll their eyes': 'revirar os olhos', 'self-awareness': 'autoconhecimento', 'delegate': 'delegar', 'a step too far': 'longe demais' },
    qs: [
      { q: 'Why do candidates dread the weakness question?', opts: ['It is always the first question', 'Honest answers can hurt them and clichés sound bad', 'It is illegal to ask', 'They have no weaknesses'], a: 1 },
      { q: 'What do recruiters really want to see?', opts: ['Perfection', 'Self-awareness and the ability to improve', 'Confidence only', 'Technical skills'], a: 1 },
      { q: 'What was the weakness in the example answer?', opts: ['Being late', 'Finding it hard to delegate', 'Speaking in public', 'Using computers'], a: 1 },
      { q: 'Why is "I\'m not great with numbers" a bad answer for an accountant?', opts: ['It is a cliché', 'It is essential to the job', 'It is too short', 'It sounds arrogant'], a: 1 }
    ]
  },
  listening: {
    kind: 'dialogue', place: 'Uma entrevista de emprego por vídeo',
    lines: [
      { s: 'Interviewer', v: 'en-US-EmmaNeural', t: "Thanks for joining us, Lucas. Let's start with why you decided to apply for this position." },
      { s: 'Lucas', v: 'en-US-BrianNeural', t: "Sure. I've worked in customer support for four years, and I really enjoy helping people. But I'd like to move into a role where I can improve the process, not just solve individual problems." },
      { s: 'Interviewer', v: 'en-US-EmmaNeural', t: "Can you give me an example of a time you improved a process?" },
      { s: 'Lucas', v: 'en-US-BrianNeural', t: "Last year, I noticed we kept getting the same questions about refunds. I suggested creating a short video guide, and we managed to reduce those calls by almost forty percent." },
      { s: 'Interviewer', v: 'en-US-EmmaNeural', t: "Impressive. And how do you deal with working under pressure?" },
      { s: 'Lucas', v: 'en-US-BrianNeural', t: "Honestly, I don't mind it. I try to avoid panicking by breaking big problems into smaller tasks. And I always remember to take a short break before I answer an angry customer." },
      { s: 'Interviewer', v: 'en-US-EmmaNeural', t: "Good. This role involves some travel. Would that be a problem?" },
      { s: 'Lucas', v: 'en-US-BrianNeural', t: "Not at all. I'd love to visit our other offices. I'm actually considering learning Spanish because of the team in Mexico." },
      { s: 'Interviewer', v: 'en-US-EmmaNeural', t: "That would definitely help. Well, thank you, Lucas. We'll be in touch by the end of the week." },
      { s: 'Lucas', v: 'en-US-BrianNeural', t: "Thank you. I look forward to hearing from you." }
    ],
    qs: [
      { q: 'Why does Lucas want to change roles?', opts: ['He wants a higher salary', 'He wants to improve processes, not just solve problems', 'He dislikes customers', 'He wants to work from home'], a: 1 },
      { q: 'What did his video guide achieve?', opts: ['It won a prize', 'It reduced refund calls by almost forty percent', 'It increased sales', 'It replaced the support team'], a: 1 },
      { q: 'How does he avoid panicking under pressure?', opts: ['He goes home early', 'He breaks big problems into smaller tasks', 'He asks his manager', 'He ignores the problem'], a: 1 },
      { q: 'What is he considering?', opts: ['Moving to Mexico', 'Learning Spanish', 'Quitting his job', 'Studying law'], a: 1 }
    ]
  },
  speaking: {
    shadow: [
      { text: "I enjoy working with people from different cultures.", tip: "\"enjoy working\": as duas palavras com ênfase." },
      { text: "I decided to apply because I want to grow.", tip: "\"decided to\" = di-SAI-did-tu." },
      { text: "We managed to reduce costs by fifteen percent.", tip: "\"fifteen\" tem ênfase no final: fif-TIIN." },
      { text: "I don't mind working under pressure.", tip: "\"don't mind\": o t quase some: dounmaind." },
      { text: "I look forward to hearing from you.", tip: "Frase de fechamento: tom calmo e educado." }
    ],
    prompt: { q: 'Answer three interview questions: Why do you want this job? What do you enjoy doing at work? What is something you managed to do that you are proud of?', hints: ['I enjoy', 'I decided to', 'I managed to', "I'd like to"] }
  }
}
]);
