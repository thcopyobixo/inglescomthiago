// Curso diário — lições 71 a 75 (temas de fundo anotados só no código).
window.COURSE = (window.COURSE || []).concat([

// ───────────────────────────── 71 · tema: equilíbrio entre vida e trabalho
{
  id: 'c71', lv: 'c1', title: 'Frases clivadas: What I need is..., It was... that', goal: 'Dar foco a uma parte da frase com What... is, It is/was... that/who, All I want is, The thing is, The reason why.',
  theory: `
<p>Em português, dizemos "O que eu preciso é de férias" em vez de simplesmente "Preciso de férias", para dar destaque. O inglês faz o mesmo com as <b>cleft sentences</b> (frases clivadas): a frase é "dividida" em duas partes para colocar o foco exatamente onde você quer. Elas são muito usadas na fala para enfatizar, corrigir ou organizar o pensamento, e aparecem o tempo todo em conversas sobre trabalho, estresse e prioridades.</p>

<h3>1. What... is/was: o que eu...</h3>
<p>A estrutura <b>What + sujeito + verbo + is/was + foco</b> destaca a informação no fim:</p>
<ul>
<li>Normal: <i>I need a long holiday.</i></li>
<li>Clivada: <i><b>What I need is</b> a long holiday.</i></li>
<li><i><b>What I love about my job is</b> the flexibility.</i></li>
<li><i><b>What worries me is</b> the number of hours we work.</i></li>
</ul>
<p>Com ações, use <b>do</b>: <i><b>What I did was</b> (to) switch off my phone for the whole weekend.</i> / <i><b>What you should do is</b> talk to your manager.</i></p>

<h3>2. It is/was... that/who: foi... que</h3>
<p>Destaca um elemento específico, muitas vezes para <b>corrigir</b> ou <b>contrastar</b>:</p>
<ul>
<li>Normal: <i>My boss suggested working from home.</i></li>
<li><i><b>It was my boss who</b> suggested working from home.</i> (não fui eu)</li>
<li><i><b>It was on Friday that</b> I finally took a day off.</i> (não na segunda)</li>
<li><i><b>It's not the work that</b> stresses me, <b>it's the meetings</b>.</i></li>
</ul>
<p>Use <b>who</b> para pessoas e <b>that</b> para o resto (that também é aceito para pessoas).</p>

<h3>3. All... is/was: tudo o que, só</h3>
<p>Para dizer que é <b>só isso</b>, nada mais:</p>
<ul>
<li><i><b>All I want is</b> a bit of peace and quiet.</i></li>
<li><i><b>All you have to do is</b> say no.</i></li>
<li><i><b>All I did was</b> ask for one day off!</i> (indignação)</li>
</ul>

<h3>4. Frases com palavras como thing, reason, place, person</h3>
<ul>
<li><i><b>The thing is</b>, I can't afford to work fewer hours.</i> (o problema é que)</li>
<li><i><b>The reason why</b> I'm tired <b>is that</b> I never stop thinking about work.</i></li>
<li><i><b>The person who</b> helped me most <b>was</b> my mentor.</i></li>
<li><i><b>The place where</b> I relax best <b>is</b> the mountains.</i></li>
<li><i><b>The last thing</b> I want <b>is</b> another meeting.</i></li>
</ul>

<h3>5. A versão invertida</h3>
<p>Também é possível colocar o foco no começo:</p>
<ul>
<li><i><b>A long holiday is what</b> I need.</i></li>
<li><i><b>Flexibility is what</b> people value most.</i></li>
</ul>

<h3>6. Para que servem na conversa</h3>
<table><tr><th>Função</th><th>Exemplo</th></tr>
<tr><td>enfatizar</td><td><em>What I really need is sleep.</em></td></tr>
<tr><td>corrigir</td><td><em>It wasn't Tom who called, it was Sarah.</em></td></tr>
<tr><td>apresentar um problema</td><td><em>The thing is, we're understaffed.</em></td></tr>
<tr><td>dar um conselho</td><td><em>What you should do is take a break.</em></td></tr>
<tr><td>ganhar tempo para pensar</td><td><em>What I'm trying to say is...</em></td></tr></table>

<h3>7. Pronúncia e ritmo</h3>
<p>Nessas frases, a voz costuma fazer uma pequena pausa depois de <b>is</b> e acentuar o foco: <i>What I need is... <b>SLEEP</b>.</i> Isso cria expectativa e deixa a fala mais expressiva.</p>

<h3>8. Vocabulário de equilíbrio vida-trabalho</h3>
<p><i>work-life balance</i> (equilíbrio vida-trabalho), <i>burnout</i> (esgotamento), <i>overtime</i> (hora extra), <i>switch off / unplug</i> (desligar), <i>a heavy workload</i> (carga pesada), <i>flexible hours</i>, <i>set boundaries</i> (impor limites), <i>take time off</i> (tirar folga), <i>understaffed</i> (com falta de pessoal).</p>
<div class="ex"><i>The thing is, I love my job. What I don't love is answering emails at eleven at night. So what I've started doing is setting boundaries: after seven, my laptop is closed. It wasn't easy, but it's the best decision I've made this year.</i></div>

<h3>Resumo</h3>
<ul>
<li><b>What I need is...</b> / <b>What I did was...</b></li>
<li><b>It was... who/that...</b> para destacar e corrigir.</li>
<li><b>All I want is...</b> = só isso.</li>
<li><b>The thing is / The reason why... is that...</b></li>
</ul>`,
  say: ["What I need is a long holiday.", "It was my boss who suggested working from home.", "All I want is a bit of peace and quiet.", "The thing is, I can't afford to work fewer hours.", "What you should do is talk to your manager.", "It's not the work that stresses me, it's the meetings."],
  vocab: [
    { en: 'what I need is', pt: 'o que eu preciso é', ex: "What I need is a good night's sleep." },
    { en: 'it was... who', pt: 'foi... quem', ex: "It was Anna who found the mistake." },
    { en: 'all I want is', pt: 'tudo o que eu quero é', ex: "All I want is a quiet weekend." },
    { en: 'the thing is', pt: 'o problema é que', ex: "The thing is, I don't have time." },
    { en: 'the reason why', pt: 'o motivo pelo qual', ex: "The reason why I left was the hours." },
    { en: 'work-life balance', pt: 'equilíbrio vida-trabalho', ex: "This job offers a good work-life balance." },
    { en: 'switch off', pt: 'desligar (mentalmente)', ex: "I find it hard to switch off at weekends." },
    { en: 'set boundaries', pt: 'impor limites', ex: "You need to set boundaries with your boss." },
    { en: 'workload', pt: 'carga de trabalho', ex: "My workload has doubled this year." },
    { en: 'overtime', pt: 'hora extra', ex: "We worked a lot of overtime last month." }
  ],
  pics: [
    { en: 'a laptop', pt: 'um notebook', img: 'Laptop' },
    { en: 'a low battery', pt: 'bateria fraca', img: 'Low battery' },
    { en: 'a full battery', pt: 'bateria cheia', img: 'Battery' },
    { en: 'a beach holiday', pt: 'férias na praia', img: 'Beach with umbrella' },
    { en: 'a hot drink', pt: 'uma bebida quente', img: 'Hot beverage' },
    { en: 'notifications off', pt: 'notificações desligadas', img: 'Bell with slash' },
    { en: 'balance', pt: 'equilíbrio', img: 'Yin yang' },
    { en: 'exhausted', pt: 'esgotado', img: 'Face exhaling' }
  ],
  fill: [
    { s: '___ I need is a long holiday.', a: 'What' },
    { s: 'It was my boss ___ suggested it.', a: 'who' },
    { s: '___ I want is a bit of peace and quiet.', a: 'All' },
    { s: 'The ___ is, I can\'t afford to work less.', a: 'thing' },
    { s: 'The reason ___ I left was the hours.', a: 'why' },
    { s: 'I find it hard to switch ___ at weekends.', a: 'off' },
    { s: 'You need to set ___ with your boss.', a: 'boundaries' }
  ],
  reading: {
    title: 'The four-day week experiment',
    paras: [
      "When a group of companies agreed to test a four-day working week, many managers expected chaos. What they got instead surprised them. Over six months, most companies reported that productivity stayed the same or even improved, while employees said they felt less stressed and slept better.",
      "What made the difference, according to researchers, wasn't simply the extra day off. It was the way companies reorganized their work. Meetings became shorter, unnecessary tasks disappeared and teams communicated more clearly. When time is limited, people focus on what really matters.",
      "Not everyone was convinced. Some managers said the model works well in offices but is much harder in hospitals, restaurants or factories, where someone has to be present every day. Others worried that employees would simply try to fit five days of work into four, and burn out faster.",
      "Still, the vast majority of companies decided to continue after the trial. As one director explained, 'The thing is, we always measured how long people worked. What we should have measured was what they achieved.'"
    ],
    gloss: { 'productivity': 'produtividade', 'reorganized': 'reorganizaram', 'disappeared': 'desapareceram', 'convinced': 'convencidos', 'burn out': 'se esgotar', 'achieved': 'conquistavam, realizavam' },
    qs: [
      { q: 'What happened to productivity in most companies?', opts: ['It fell sharply', 'It stayed the same or improved', 'It doubled', 'It wasn\'t measured'], a: 1 },
      { q: 'What made the difference, according to researchers?', opts: ['Only the extra day off', 'The way companies reorganized their work', 'Higher salaries', 'New technology'], a: 1 },
      { q: 'What concern did some managers have?', opts: ['It\'s harder in hospitals, restaurants or factories', 'Employees would be bored', 'It costs too much', 'Customers would complain'], a: 0 },
      { q: 'What did the director say they should have measured?', opts: ['Hours worked', 'What people achieved', 'Sick days', 'Emails sent'], a: 1 }
    ]
  },
  listening: {
    kind: 'dialogue', place: 'Duas amigas conversando depois do trabalho',
    lines: [
      { s: 'Priya', v: 'en-GB-SoniaNeural', t: "You look exhausted. Is everything okay?" },
      { s: 'Megan', v: 'en-US-AvaNeural', t: "Not really. The thing is, my workload has doubled since two people left the team, and nobody's replaced them." },
      { s: 'Priya', v: 'en-GB-SoniaNeural', t: "That's awful. Have you said anything to your manager?" },
      { s: 'Megan', v: 'en-US-AvaNeural', t: "I tried. But what she said was, 'Everyone's busy right now.' All I asked for was a bit of help with one project!" },
      { s: 'Priya', v: 'en-GB-SoniaNeural', t: "Hmm. What you should do is put it in writing. List everything you're doing and ask her to choose the priorities." },
      { s: 'Megan', v: 'en-US-AvaNeural', t: "That's a good idea. It's not the work itself that bothers me, it's the feeling that it never ends. I check emails at midnight." },
      { s: 'Priya', v: 'en-GB-SoniaNeural', t: "Then the first thing to do is switch off notifications after seven. When I did that, it changed everything." },
      { s: 'Megan', v: 'en-US-AvaNeural', t: "Was it you who told me about that app that blocks work emails at night?" },
      { s: 'Priya', v: 'en-GB-SoniaNeural', t: "Yes! I'll send you the link. What you need is a weekend without your laptop." }
    ],
    qs: [
      { q: 'Why has Megan\'s workload doubled?', opts: ['She was promoted', 'Two people left and nobody replaced them', 'She has a new client', 'She works part-time now'], a: 1 },
      { q: 'What did Megan ask her manager for?', opts: ['A pay rise', 'A bit of help with one project', 'A holiday', 'A new job'], a: 1 },
      { q: 'What does Priya suggest first?', opts: ['Quit', 'Put it in writing and ask her manager to choose priorities', 'Work at weekends', 'Ignore it'], a: 1 },
      { q: 'What bothers Megan most?', opts: ['The salary', 'The feeling that the work never ends', 'Her colleagues', 'The office'], a: 1 }
    ]
  },
  speaking: {
    shadow: [
      { text: "What I need is a long holiday.", tip: "Pausa curta depois de \"is\"; ênfase em holiday." },
      { text: "It was my boss who suggested it.", tip: "\"It was\" = i-tuaz; ênfase em boss." },
      { text: "All I want is a bit of peace and quiet.", tip: "\"All I want is\" = ó-lai-uón-tiz." },
      { text: "The thing is, I don't have time.", tip: "\"The thing is\" + pausa." },
      { text: "It's not the work that stresses me.", tip: "Contraste: ênfase em work." }
    ],
    prompt: { q: 'Talk about your work-life balance (or study-life balance). What do you need? What is the main problem? Use at least three cleft sentences.', hints: ['what I need is', 'the thing is', 'all I want is', 'it was... that'] }
  }
},

// ───────────────────────────── 72 · tema: viagem de carro
{
  id: 'c72', lv: 'c1', title: 'Hábitos irritantes: will, would, keep e always + contínuo', goal: 'He will leave his things everywhere; She was always complaining; He keeps stopping: falar de hábitos (e manias) no presente e no passado.',
  theory: `
<p>Uma viagem longa de carro revela os hábitos de todo mundo: quem sempre quer parar, quem sempre escolhe a música, quem fica perguntando "falta muito?". Em inglês, há várias estruturas para falar de <b>hábitos</b>, especialmente os <b>irritantes</b>, e elas carregam emoção. Nesta lição você vai aprender a usá-las no presente e no passado.</p>

<h3>1. Will para hábitos típicos (presente)</h3>
<p><b>Will</b> nem sempre fala do futuro. Pode descrever um comportamento <b>característico</b>:</p>
<ul>
<li><i>My dad <b>will</b> drive for six hours without stopping.</i> (é típico dele)</li>
<li><i>On long trips, the kids <b>will</b> usually fall asleep after an hour.</i></li>
</ul>
<p>Com <b>will acentuado</b> (WILL), expressa irritação:</p>
<ul>
<li><i>He <b>WILL</b> leave his empty coffee cups in the car!</i> (e isso me irrita)</li>
</ul>

<h3>2. Would para hábitos no passado</h3>
<p>Como você viu na lição 30, <b>would</b> descreve hábitos repetidos no passado (não estados):</p>
<ul>
<li><i>Every summer, we <b>would</b> drive to the coast.</i></li>
<li><i>My mum <b>would</b> pack sandwiches for the whole journey.</i></li>
</ul>
<p>Com ênfase, também mostra irritação: <i>He <b>WOULD</b> always get lost!</i></p>

<h3>3. Always + contínuo: a mania</h3>
<p><b>Be + always/constantly/forever + -ing</b> é a forma mais comum de reclamar de um hábito irritante:</p>
<ul>
<li><i>You'<b>re always changing</b> the radio station!</i></li>
<li><i>He'<b>s constantly checking</b> his phone while driving.</i></li>
<li><i>My brother <b>was forever asking</b>, "Are we there yet?"</i></li>
</ul>
<div class="ex">Compare: <i>He always drives carefully</i> (fato neutro) × <i>He's always driving too fast!</i> (reclamação).</div>

<h3>4. Keep + -ing: ficar fazendo</h3>
<p><b>Keep (on) + -ing</b> mostra repetição, frequentemente irritante:</p>
<ul>
<li><i>The GPS <b>keeps telling</b> me to turn left into a river.</i></li>
<li><i>Why do you <b>keep stopping</b>?</i></li>
<li><i>The car <b>kept making</b> a strange noise.</i></li>
</ul>

<h3>5. Used to × would × be used to</h3>
<table><tr><th>Estrutura</th><th>Sentido</th><th>Exemplo</th></tr>
<tr><td>used to + verbo</td><td>hábito ou estado passado</td><td><em>We used to have a red van.</em></td></tr>
<tr><td>would + verbo</td><td>ação repetida no passado</td><td><em>We would sing all the way.</em></td></tr>
<tr><td>be used to + -ing</td><td>estar acostumado</td><td><em>I'm used to driving on the left.</em></td></tr>
<tr><td>get used to + -ing</td><td>se acostumar</td><td><em>I'm getting used to the mountain roads.</em></td></tr></table>

<h3>6. Tend to: tendência</h3>
<p>Uma forma neutra (sem irritação) de falar de hábitos:</p>
<ul>
<li><i>I <b>tend to</b> drive more slowly at night.</i></li>
<li><i>Traffic <b>tends to</b> be worse on Fridays.</i></li>
</ul>

<h3>7. Linguagem de estrada</h3>
<table><tr><th>Expressão</th><th>Sentido</th></tr>
<tr><td><em>a road trip</em></td><td>viagem de carro</td></tr>
<tr><td><em>pull over</em></td><td>encostar o carro</td></tr>
<tr><td><em>fill up (the tank)</em></td><td>encher o tanque</td></tr>
<tr><td><em>a flat tyre / tire</em></td><td>pneu furado</td></tr>
<tr><td><em>break down</em></td><td>quebrar (veículo)</td></tr>
<tr><td><em>take a detour</em></td><td>fazer um desvio</td></tr>
<tr><td><em>a service station / rest stop</em></td><td>posto de serviço na estrada</td></tr>
<tr><td><em>a backseat driver</em></td><td>quem dá palpite na direção sem dirigir</td></tr></table>

<h3>8. Juntando tudo</h3>
<div class="ex"><i>When I was a kid, we would drive to my grandparents' house every Christmas. My dad would refuse to stop, and my sister was forever complaining that she felt sick. These days, I'm the driver, and my husband is always telling me how to drive. He's a terrible backseat driver. And the GPS keeps sending us down tiny country roads!</i></div>

<h3>Resumo</h3>
<ul>
<li><b>will / would</b> = hábito característico (com ênfase, irritação).</li>
<li><b>be always + -ing</b> = mania irritante.</li>
<li><b>keep + -ing</b> = repetição.</li>
<li><b>tend to</b> = tendência neutra.</li>
</ul>`,
  say: ["You're always changing the radio station!", "The GPS keeps telling me to turn left.", "Every summer, we would drive to the coast.", "My brother was forever asking, 'Are we there yet?'", "I tend to drive more slowly at night.", "We had to pull over because we had a flat tyre."],
  vocab: [
    { en: 'always + -ing', pt: 'vive fazendo (mania)', ex: "She's always losing her keys." },
    { en: 'keep + -ing', pt: 'ficar fazendo', ex: "The car keeps making a noise." },
    { en: 'would (habit)', pt: 'costumava (ação repetida)', ex: "We would stop for lunch at the same café." },
    { en: 'tend to', pt: 'tender a', ex: "I tend to get sleepy after lunch." },
    { en: 'road trip', pt: 'viagem de carro', ex: "We went on a road trip across the country." },
    { en: 'pull over', pt: 'encostar (o carro)', ex: "Pull over. I need to check the map." },
    { en: 'fill up', pt: 'encher o tanque', ex: "Let's fill up at the next station." },
    { en: 'flat tyre', pt: 'pneu furado', ex: "We got a flat tyre in the middle of nowhere." },
    { en: 'break down', pt: 'quebrar (veículo)', ex: "Our car broke down on the motorway." },
    { en: 'backseat driver', pt: 'palpiteiro no carro', ex: "Stop being a backseat driver!" }
  ],
  pics: [
    { en: 'a car', pt: 'um carro', img: 'Automobile' },
    { en: 'a petrol pump', pt: 'uma bomba de gasolina', img: 'Fuel pump' },
    { en: 'a motorway', pt: 'uma rodovia', img: 'Motorway' },
    { en: 'a map', pt: 'um mapa', img: 'World map' },
    { en: 'an SUV', pt: 'um SUV', img: 'Sport utility vehicle' },
    { en: 'a police car', pt: 'uma viatura', img: 'Police car' },
    { en: 'a stop sign', pt: 'uma placa de pare', img: 'Stop sign' },
    { en: 'sleepy', pt: 'sonolento', img: 'Sleeping face' }
  ],
  fill: [
    { s: "You're always ___ the radio station!", a: 'changing' },
    { s: 'The GPS ___ telling me to turn left.', a: 'keeps' },
    { s: 'Every summer, we ___ drive to the coast.', a: 'would' },
    { s: 'I ___ to drive more slowly at night.', a: 'tend' },
    { s: 'We had to pull ___ because of a flat tyre.', a: 'over' },
    { s: "Let's fill ___ at the next station.", a: 'up' },
    { s: 'Our car broke ___ on the motorway.', a: 'down' }
  ],
  reading: {
    title: 'The great family road trip',
    paras: [
      "For many people, the family road trip is a childhood memory full of contradictions: beautiful landscapes, terrible music, endless snacks and at least one argument per day. In my family, the trip to the south of France was an annual ritual.",
      "My father would plan the route months in advance, printing maps even after we had GPS. He would insist on leaving at four in the morning 'to avoid the traffic', and he would refuse to stop until the fuel light came on. My mother, meanwhile, was forever reminding him that the children needed the toilet.",
      "My brother and I had our own roles. He was always kicking the back of my seat, and I was constantly asking how much longer it would take. Every few hours, the car would fill with the smell of oranges, which my mother believed prevented car sickness. It didn't.",
      "Now that I have children of my own, I understand my parents much better. My kids keep asking if we're there yet, my daughter tends to fall asleep exactly ten minutes before we arrive, and I've caught myself refusing to stop for petrol. Some traditions, it seems, are passed down whether we like it or not."
    ],
    gloss: { 'contradictions': 'contradições', 'annual ritual': 'ritual anual', 'in advance': 'com antecedência', 'fuel light': 'luz de combustível', 'car sickness': 'enjoo de viagem', 'passed down': 'passadas adiante' },
    qs: [
      { q: 'What would the writer\'s father insist on?', opts: ['Driving at night', 'Leaving at four in the morning', 'Taking the train', 'Stopping every hour'], a: 1 },
      { q: 'What was the mother forever reminding the father?', opts: ['To slow down', 'That the children needed the toilet', 'To call the hotel', 'To check the map'], a: 1 },
      { q: 'Why did the mother bring oranges?', opts: ['For breakfast', 'She believed they prevented car sickness', 'For the smell', 'The kids loved them'], a: 1 },
      { q: 'What does the writer realize now?', opts: ['Road trips are boring', 'Some family traditions are passed down', 'Her parents were wrong', 'GPS is useless'], a: 1 }
    ]
  },
  listening: {
    kind: 'dialogue', place: 'Um casal no carro durante uma viagem',
    lines: [
      { s: 'Dan', v: 'en-US-AndrewNeural', t: "Why are you turning here? The GPS said straight on." },
      { s: 'Rachel', v: 'en-GB-LibbyNeural', t: "Because the GPS keeps sending us down these tiny roads. And you're always telling me how to drive." },
      { s: 'Dan', v: 'en-US-AndrewNeural', t: "I'm not a backseat driver! I'm just helping." },
      { s: 'Rachel', v: 'en-GB-LibbyNeural', t: "Helping? You've changed the music six times in the last hour." },
      { s: 'Dan', v: 'en-US-AndrewNeural', t: "Fair enough. Anyway, we need to fill up soon. The fuel light just came on." },
      { s: 'Rachel', v: 'en-GB-LibbyNeural', t: "You sound like my dad. He would always wait until the very last minute to stop for petrol." },
      { s: 'Dan', v: 'en-US-AndrewNeural', t: "Wait, what's that noise? The car keeps making this strange clicking sound." },
      { s: 'Rachel', v: 'en-GB-LibbyNeural', t: "Oh no. I think we've got a flat tyre. I'll pull over." },
      { s: 'Dan', v: 'en-US-AndrewNeural', t: "Okay. Good news: I'm actually quite good at changing tyres. I used to do it all the time with my old car." }
    ],
    qs: [
      { q: 'What is Rachel\'s complaint about the GPS?', opts: ['It\'s too loud', 'It keeps sending them down tiny roads', 'It doesn\'t work', 'It\'s in the wrong language'], a: 1 },
      { q: 'How many times has Dan changed the music?', opts: ['Twice', 'Six times', 'Ten times', 'Never'], a: 1 },
      { q: 'What would Rachel\'s dad always do?', opts: ['Drive too fast', 'Wait until the last minute to stop for petrol', 'Get lost', 'Sing'], a: 1 },
      { q: 'What problem do they have at the end?', opts: ['They run out of petrol', 'A flat tyre', 'The engine breaks down', 'They get lost'], a: 1 }
    ]
  },
  speaking: {
    shadow: [
      { text: "You're always changing the radio station!", tip: "Tom de reclamação: ênfase em always." },
      { text: "The GPS keeps telling me to turn left.", tip: "\"keeps telling\" = kiips-TÉ-ling." },
      { text: "Every summer, we would drive to the coast.", tip: "\"we would\" contrai: wid." },
      { text: "I tend to drive slowly at night.", tip: "\"tend to\" = TEN-tu." },
      { text: "Let's pull over and check the map.", tip: "\"pull over\" = pu-LOU-ver." }
    ],
    prompt: { q: 'Describe a long journey you remember, or the habits of people you travel with. Include at least one annoying habit (always + -ing or keep + -ing) and one past habit with would.', hints: ['is always + -ing', 'keeps + -ing', 'would', 'tend to'] }
  }
},

// ───────────────────────────── 73 · tema: debates e opiniões
{
  id: 'c73', lv: 'c1', title: 'Hedging: opinar com cautela e precisão', goal: 'Suavizar afirmações como um falante avançado: it seems, arguably, to some extent, I would argue, there is evidence to suggest.',
  theory: `
<p>Falantes avançados raramente fazem afirmações absolutas como "social media is bad" ou "everyone agrees". Em vez disso, usam <b>hedging</b> (linguagem de cautela): palavras que mostram o grau de certeza, evitam generalizações e tornam a opinião mais convincente e educada. É essencial em debates, redações acadêmicas, reuniões e qualquer discussão de temas polêmicos.</p>

<h3>1. Por que usar hedging?</h3>
<ul>
<li>Afirmações absolutas são fáceis de contestar: basta um contraexemplo.</li>
<li>Soa mais respeitoso com quem pensa diferente.</li>
<li>É o padrão em textos acadêmicos e em provas como IELTS e Cambridge C1.</li>
</ul>
<div class="ex">❌ <i>Social media makes teenagers depressed.</i><br>✅ <i>There is some evidence to suggest that heavy social media use <b>may</b> contribute to anxiety in <b>some</b> teenagers.</i></div>

<h3>2. Verbos de aparência</h3>
<ul>
<li><i>It <b>seems</b> that people are reading less.</i></li>
<li><i>The policy <b>appears to</b> have worked.</i></li>
<li><i>This <b>suggests</b> that the problem is more complex.</i></li>
<li><i>The data <b>indicate</b> a slight improvement.</i></li>
</ul>

<h3>3. Modais de possibilidade</h3>
<ul>
<li><i>This <b>may / might / could</b> explain the difference.</i></li>
<li><i>It <b>would seem</b> that the plan has failed.</i> (ainda mais cauteloso)</li>
<li><i>One <b>could argue</b> that technology has made us lonelier.</i></li>
</ul>

<h3>4. Advérbios e expressões de cautela</h3>
<table><tr><th>Expressão</th><th>Uso</th></tr>
<tr><td>arguably</td><td>pode-se dizer que (opinião defensável): <em>It's arguably the best film of the decade.</em></td></tr>
<tr><td>to some extent / to a certain extent</td><td>até certo ponto: <em>I agree with you to some extent.</em></td></tr>
<tr><td>largely / mainly</td><td>em grande parte: <em>The problem is largely economic.</em></td></tr>
<tr><td>relatively / somewhat</td><td>relativamente / um tanto: <em>The results were somewhat disappointing.</em></td></tr>
<tr><td>in most cases / generally</td><td>na maioria dos casos</td></tr>
<tr><td>presumably</td><td>presumivelmente</td></tr>
<tr><td>apparently</td><td>aparentemente</td></tr></table>

<h3>5. Quantificadores cautelosos</h3>
<p>Evite <i>all, everyone, never, always</i>. Prefira:</p>
<ul>
<li><i><b>many / most / some</b> people</i> em vez de <i>everyone</i></li>
<li><i><b>tend to</b></i>: <i>Young people <b>tend to</b> prefer streaming.</i></li>
<li><i><b>rarely / seldom</b></i> em vez de <i>never</i></li>
</ul>

<h3>6. Apresentando sua opinião</h3>
<table><tr><th>Mais direto</th><th>Mais cauteloso</th></tr>
<tr><td><em>I think...</em></td><td><em>I would argue that... / It seems to me that...</em></td></tr>
<tr><td><em>You're wrong.</em></td><td><em>I'm not sure I'd agree with that. / I see it slightly differently.</em></td></tr>
<tr><td><em>That's true.</em></td><td><em>That's a fair point. / There's some truth in that.</em></td></tr>
<tr><td><em>It's obvious that...</em></td><td><em>It's widely accepted that...</em></td></tr></table>

<h3>7. Concordando e discordando em debates</h3>
<ul>
<li>Concordar parcialmente: <i>I take your point, but... / While I agree to some extent, I think...</i></li>
<li>Discordar com educação: <i>I'm afraid I don't quite see it that way. / With respect, I think that's an oversimplification.</i></li>
<li>Pedir evidências: <i>What's the evidence for that? / Is that always the case?</i></li>
<li>Reconhecer o outro lado: <i>Admittedly, there are some drawbacks. / Granted, it's not perfect.</i></li>
</ul>

<h3>7b. Transformando uma opinião forte</h3>
<p>Veja como a mesma ideia pode ganhar camadas de cautela, da mais direta à mais acadêmica:</p>
<ul>
<li><i>Tourism destroys cities.</i> (absoluta, fácil de contestar)</li>
<li><i>Tourism can damage cities.</i> (modal)</li>
<li><i>Mass tourism can damage some historic cities.</i> (mais preciso)</li>
<li><i>It could be argued that mass tourism can, to some extent, damage historic city centres.</i> (acadêmica)</li>
</ul>
<p>Na conversa, a segunda ou terceira versão costuma bastar. A última é ideal para uma redação formal.</p>

<h3>8. Cuidado com o excesso</h3>
<p>Hedging demais faz você parecer inseguro ou evasivo: <i>"It might perhaps possibly be somewhat true"</i> não diz nada. O ideal é ser cauteloso nas afirmações incertas e direto nas que você pode sustentar.</p>

<h3>Resumo</h3>
<ul>
<li>Verbos: seem, appear, suggest, indicate.</li>
<li>Modais: may, might, could, would seem.</li>
<li>Advérbios: arguably, to some extent, largely, somewhat.</li>
<li>Opinião: I would argue, it seems to me, that's a fair point, I take your point but.</li>
</ul>`,
  say: ["It seems that people are reading less than before.", "I would argue that technology has made us lonelier.", "I agree with you to some extent, but it's more complicated.", "There is some evidence to suggest that it works.", "That's a fair point, but I see it slightly differently.", "It's arguably the most important invention of the century."],
  vocab: [
    { en: 'it seems that', pt: 'parece que', ex: "It seems that prices will keep rising." },
    { en: 'arguably', pt: 'pode-se dizer que', ex: "She's arguably the best player in the world." },
    { en: 'to some extent', pt: 'até certo ponto', ex: "I agree to some extent." },
    { en: 'I would argue', pt: 'eu diria, eu argumentaria', ex: "I would argue that the plan is too expensive." },
    { en: 'evidence to suggest', pt: 'evidências que sugerem', ex: "There is evidence to suggest that sleep improves memory." },
    { en: "that's a fair point", pt: 'é um ponto válido', ex: "That's a fair point. I hadn't thought of that." },
    { en: 'I take your point', pt: 'entendo seu argumento', ex: "I take your point, but there's another side." },
    { en: 'admittedly', pt: 'é verdade que, reconhecidamente', ex: "Admittedly, it's not perfect." },
    { en: 'somewhat', pt: 'um tanto', ex: "The results were somewhat surprising." },
    { en: 'oversimplification', pt: 'simplificação exagerada', ex: "That's an oversimplification of the problem." }
  ],
  pics: [
    { en: 'a speech bubble', pt: 'um balão de fala', img: 'Left speech bubble' },
    { en: 'an angry speech bubble', pt: 'um balão de raiva', img: 'Right anger bubble' },
    { en: 'a thought bubble', pt: 'um balão de pensamento', img: 'Thought balloon' },
    { en: 'a question mark', pt: 'um ponto de interrogação', img: 'Red question mark' },
    { en: 'scales (both sides)', pt: 'uma balança (os dois lados)', img: 'Balance scale' },
    { en: 'a magnifying glass', pt: 'uma lupa', img: 'Magnifying glass tilted left' },
    { en: 'thinking', pt: 'pensando', img: 'Thinking face' },
    { en: 'mind-blown', pt: 'impressionado', img: 'Exploding head' }
  ],
  fill: [
    { s: 'It ___ that people are reading less.', a: 'seems' },
    { s: 'I would ___ that it\'s too expensive.', a: 'argue' },
    { s: 'I agree with you to some ___.', a: 'extent' },
    { s: "That's a ___ point. I hadn't thought of that.", a: 'fair' },
    { s: 'I take your ___, but there\'s another side.', a: 'point' },
    { s: "___, it's not perfect, but it's a start.", a: 'Admittedly' },
    { s: "She's ___ the best player in the world.", a: 'arguably' }
  ],
  reading: {
    title: 'Why certainty can be unconvincing',
    paras: [
      "In public debates, the most confident voices often seem to win. People who speak in absolute terms, 'This will definitely work', 'Everyone knows that', can appear strong and decisive. Yet research on persuasion suggests that, in many situations, a little uncertainty is actually more convincing.",
      "One reason is trust. When a speaker admits the limits of their knowledge, listeners tend to see them as more honest. A doctor who says 'This treatment works in most cases, though not all' is arguably more credible than one who promises a guaranteed cure.",
      "Careful language also makes disagreement easier. If someone says 'I think you're completely wrong', the conversation becomes a fight. If they say 'I see it somewhat differently', the other person is more likely to listen. Hedging leaves room for both sides to change their minds without losing face.",
      "Admittedly, there are limits. Too much caution can sound weak or evasive, especially when the evidence is clear. The skill lies in matching your language to your level of certainty: confident where the facts are solid, cautious where they are not."
    ],
    gloss: { 'decisive': 'decidido', 'persuasion': 'persuasão', 'credible': 'confiável, crível', 'guaranteed cure': 'cura garantida', 'losing face': 'perder a pose, ser humilhado', 'evasive': 'evasivo' },
    qs: [
      { q: 'What does research on persuasion suggest?', opts: ['Confidence always wins', 'A little uncertainty is often more convincing', 'Nobody changes their mind', 'Facts don\'t matter'], a: 1 },
      { q: 'Why might a doctor who admits limits seem more credible?', opts: ['They are older', 'Listeners see them as more honest', 'They speak slowly', 'They are famous'], a: 1 },
      { q: 'How does careful language help in disagreements?', opts: ['It ends the conversation', 'It leaves room for both sides to change their minds', 'It makes people angry', 'It wins the argument'], a: 1 },
      { q: 'What is the skill described at the end?', opts: ['Always being cautious', 'Matching language to your level of certainty', 'Never giving opinions', 'Speaking louder'], a: 1 }
    ]
  },
  listening: {
    kind: 'dialogue', place: 'Um debate em uma aula',
    lines: [
      { s: 'Moderator', v: 'en-GB-ThomasNeural', t: "Today's question: should smartphones be banned in schools? Laura, would you like to start?" },
      { s: 'Laura', v: 'en-US-EmmaNeural', t: "Thank you. I would argue that a ban is necessary. There is evidence to suggest that phones reduce concentration, and many teachers say they're a constant distraction." },
      { s: 'Moderator', v: 'en-GB-ThomasNeural', t: "James, do you agree?" },
      { s: 'James', v: 'en-GB-RyanNeural', t: "To some extent. I take Laura's point about distraction. But I think a complete ban is somewhat extreme. Phones can also be useful learning tools." },
      { s: 'Laura', v: 'en-US-EmmaNeural', t: "That's a fair point, but in most cases students aren't using them to learn. They're on social media." },
      { s: 'James', v: 'en-GB-RyanNeural', t: "Admittedly, that's often true. But isn't it an oversimplification to say all students misuse them? Wouldn't it be better to teach responsible use?" },
      { s: 'Laura', v: 'en-US-EmmaNeural', t: "In theory, yes. But it seems to me that schools have tried that, and it hasn't really worked." },
      { s: 'Moderator', v: 'en-GB-ThomasNeural', t: "Interesting. So perhaps the question isn't whether to ban phones, but how to manage them. Let's open it up to the audience." }
    ],
    qs: [
      { q: 'What is Laura\'s position?', opts: ['Phones should be allowed', 'A ban is necessary', 'She has no opinion', 'Only teachers should have phones'], a: 1 },
      { q: 'What does James think about a complete ban?', opts: ['It\'s perfect', 'It\'s somewhat extreme', 'It\'s too weak', 'It already exists'], a: 1 },
      { q: 'What alternative does James suggest?', opts: ['Banning computers', 'Teaching responsible use', 'Longer breaks', 'More homework'], a: 1 },
      { q: 'How does the moderator reframe the question?', opts: ['Whether phones are expensive', 'How to manage phones, not whether to ban them', 'Whether students like school', 'Who should pay for phones'], a: 1 }
    ]
  },
  speaking: {
    shadow: [
      { text: "It seems that people are reading less.", tip: "\"It seems that\" = it-SIIMZ-dhat." },
      { text: "I would argue that it's too expensive.", tip: "\"would argue\" = wu-DÁR-giu." },
      { text: "I agree with you to some extent.", tip: "\"extent\" = iks-TENT." },
      { text: "That's a fair point, but I see it differently.", tip: "Tom calmo; pausa antes de but." },
      { text: "Admittedly, it's not perfect.", tip: "\"admittedly\" = ad-MI-tid-li." }
    ],
    prompt: { q: 'Give your opinion on a controversial topic (for example, working from home, social media or tourism). Use hedging language and acknowledge the other side.', hints: ['I would argue that', 'to some extent', 'admittedly', 'there is evidence to suggest'] }
  }
},

// ───────────────────────────── 74 · tema: crime e justiça
{
  id: 'c74', lv: 'c1', title: 'Passiva avançada: get passive, being done, to have been done', goal: 'Got arrested, avoid being caught, expect to be released, claim to have been robbed: a passiva em todas as suas formas.',
  theory: `
<p>Notícias sobre crimes e julgamentos estão cheias de voz passiva: alguém <i>foi preso</i>, <i>foi roubado</i>, <i>espera ser libertado</i>, <i>nega ter sido envolvido</i>. Você já conhece a passiva básica (<i>The thief was arrested</i>). Nesta lição você vai dominar as formas mais avançadas: a <b>get passive</b>, o <b>gerúndio passivo</b> e o <b>infinitivo passivo</b>, inclusive no passado.</p>

<h3>1. Get + particípio: a passiva informal</h3>
<p>Na fala, <b>get</b> substitui <b>be</b> em muitas passivas, especialmente quando algo <b>acontece</b> de repente, por acaso ou de forma negativa:</p>
<ul>
<li><i>He <b>got arrested</b> for shoplifting.</i> (= was arrested)</li>
<li><i>My bike <b>got stolen</b> last week.</i></li>
<li><i>Be careful not to <b>get caught</b>.</i></li>
<li><i>She <b>got fined</b> for speeding.</i></li>
</ul>
<p>Get passive <b>não</b> é usada com estados ou em textos formais: ❌ <i>The castle got built in 1200.</i> ✅ <i>The castle was built in 1200.</i></p>

<h3>2. Gerúndio passivo: being + particípio</h3>
<p>Depois de verbos e preposições que pedem <b>-ing</b>, a passiva é <b>being + particípio</b>:</p>
<ul>
<li><i>The suspect avoided <b>being caught</b> for months.</i></li>
<li><i>Nobody likes <b>being lied to</b>.</i></li>
<li><i>She was afraid of <b>being followed</b>.</i></li>
<li><i>He denied <b>being involved</b> in the robbery.</i></li>
</ul>
<p>No passado: <b>having been + particípio</b>: <i>He denied <b>having been</b> at the scene.</i></p>

<h3>3. Infinitivo passivo: to be + particípio</h3>
<p>Depois de verbos que pedem <b>to</b> (expect, want, hope, need, refuse...):</p>
<ul>
<li><i>The prisoner expects <b>to be released</b> next year.</i></li>
<li><i>The witnesses refused <b>to be interviewed</b>.</i></li>
<li><i>The case needs <b>to be investigated</b> properly.</i></li>
</ul>

<h3>4. Infinitivo passivo perfeito: to have been + particípio</h3>
<p>Para algo que aconteceu <b>antes</b>:</p>
<ul>
<li><i>She claims <b>to have been robbed</b> on her way home.</i></li>
<li><i>The painting is believed <b>to have been stolen</b> in 1990.</i> (lição 65)</li>
<li><i>He seems <b>to have been misled</b> by his lawyer.</i></li>
</ul>

<h3>5. Passiva com modais no passado</h3>
<ul>
<li><i>The door <b>must have been forced</b> open.</i></li>
<li><i>The crime <b>could have been prevented</b>.</i></li>
<li><i>He <b>should have been told</b> about his rights.</i></li>
</ul>

<h3>6. Tabela das formas</h3>
<table><tr><th>Forma</th><th>Ativa</th><th>Passiva</th></tr>
<tr><td>infinitivo</td><td>to arrest</td><td>to be arrested</td></tr>
<tr><td>infinitivo perfeito</td><td>to have arrested</td><td>to have been arrested</td></tr>
<tr><td>gerúndio</td><td>arresting</td><td>being arrested</td></tr>
<tr><td>gerúndio perfeito</td><td>having arrested</td><td>having been arrested</td></tr>
<tr><td>informal</td><td>—</td><td>got arrested</td></tr></table>

<h3>7. Have something done (sentido negativo)</h3>
<p>Na lição 46 você viu <i>have something done</i> para serviços. A mesma estrutura descreve coisas ruins que acontecem com você:</p>
<ul>
<li><i>I <b>had my wallet stolen</b> on the metro.</i></li>
<li><i>She <b>had her car broken into</b> last night.</i></li>
</ul>

<h3>8. Vocabulário de crime e justiça</h3>
<table><tr><th>Crime / pessoa</th><th>Sentido</th></tr>
<tr><td><em>burglary / burglar</em></td><td>arrombamento de casa / ladrão</td></tr>
<tr><td><em>robbery / robber</em></td><td>assalto / assaltante</td></tr>
<tr><td><em>shoplifting</em></td><td>furto em loja</td></tr>
<tr><td><em>fraud / scam</em></td><td>fraude / golpe</td></tr>
<tr><td><em>a witness / a suspect</em></td><td>testemunha / suspeito</td></tr>
<tr><td><em>be charged with</em></td><td>ser acusado formalmente de</td></tr>
<tr><td><em>be sentenced to</em></td><td>ser condenado a</td></tr>
<tr><td><em>be found guilty / innocent</em></td><td>ser considerado culpado / inocente</td></tr></table>

<h3>Resumo</h3>
<ul>
<li><b>get + particípio</b> = passiva informal (got stolen, got arrested).</li>
<li><b>being + particípio</b> depois de verbos/preposições com -ing.</li>
<li><b>to be / to have been + particípio</b> depois de verbos com to.</li>
<li><b>had my wallet stolen</b> = me roubaram a carteira.</li>
</ul>`,
  say: ["My bike got stolen outside the library last week.", "The suspect avoided being caught for months.", "He denied being involved in the robbery.", "The prisoner expects to be released next year.", "She claims to have been robbed on her way home.", "I had my wallet stolen on the metro."],
  vocab: [
    { en: 'get arrested', pt: 'ser preso', ex: "He got arrested at the airport." },
    { en: 'get caught', pt: 'ser pego', ex: "They got caught on camera." },
    { en: 'avoid being', pt: 'evitar ser', ex: "He avoided being recognized." },
    { en: 'expect to be', pt: 'esperar ser', ex: "She expects to be promoted." },
    { en: 'claim to have been', pt: 'alegar ter sido', ex: "He claims to have been at home all night." },
    { en: 'had my... stolen', pt: 'tive meu... roubado', ex: "I had my phone stolen at a concert." },
    { en: 'witness', pt: 'testemunha', ex: "Police are looking for witnesses." },
    { en: 'suspect', pt: 'suspeito', ex: "The suspect was taken to the police station." },
    { en: 'be charged with', pt: 'ser acusado de', ex: "He was charged with fraud." },
    { en: 'scam', pt: 'golpe', ex: "Don't click that link. It's a scam." }
  ],
  pics: [
    { en: 'a police car light', pt: 'uma sirene', img: 'Police car light' },
    { en: 'a police car coming', pt: 'uma viatura chegando', img: 'Oncoming police car' },
    { en: 'a magnifying glass', pt: 'uma lupa', img: 'Magnifying glass tilted right' },
    { en: 'chains', pt: 'correntes', img: 'Chains' },
    { en: 'a locked padlock', pt: 'um cadeado fechado', img: 'Locked' },
    { en: 'an unlocked padlock', pt: 'um cadeado aberto', img: 'Unlocked' },
    { en: 'a bank', pt: 'um banco', img: 'Bank' },
    { en: 'a courthouse', pt: 'um tribunal', img: 'Classical building' }
  ],
  fill: [
    { s: 'My bike got ___ last week.', a: 'stolen' },
    { s: 'The suspect avoided ___ caught for months.', a: 'being' },
    { s: 'The prisoner expects to ___ released next year.', a: 'be' },
    { s: 'She claims to have ___ robbed.', a: 'been' },
    { s: 'I had my wallet ___ on the metro.', a: 'stolen' },
    { s: 'He was charged ___ fraud.', a: 'with' },
    { s: 'Police are looking for ___ to the accident.', a: 'witnesses' }
  ],
  reading: {
    title: 'The scam that fooled thousands',
    paras: [
      "It started with a simple text message: 'Your parcel could not be delivered. Click here to reschedule.' Thousands of people who were expecting deliveries clicked the link, entered their card details to pay a small 'delivery fee', and had their accounts emptied within hours.",
      "Police say the scam was carefully designed to avoid being detected. The messages were sent from constantly changing numbers, and the fake websites looked almost identical to real delivery companies. Many victims only realized what had happened when their banks called them.",
      "After an eighteen-month investigation, five people were arrested in three different countries. One of them claimed to have been forced to work for the group, but prosecutors say he was one of its leaders. The suspects have been charged with fraud and are expected to be sentenced later this year.",
      "Experts warn that similar scams are bound to continue. Their advice is simple: never click on links in unexpected messages, and if in doubt, contact the company directly. As one investigator put it, 'Most people don't get scammed because they're careless. They get scammed because the criminals are very, very good.'"
    ],
    gloss: { 'reschedule': 'reagendar', 'emptied': 'esvaziadas', 'detected': 'detectado', 'identical': 'idênticos', 'prosecutors': 'promotores', 'careless': 'descuidados' },
    qs: [
      { q: 'What did the text message claim?', opts: ['They had won a prize', 'A parcel could not be delivered', 'Their bank account was blocked', 'A friend needed money'], a: 1 },
      { q: 'How did the scam avoid being detected?', opts: ['It was only in one country', 'Changing numbers and fake websites that looked real', 'It used letters', 'It was very small'], a: 1 },
      { q: 'What did one suspect claim?', opts: ['He was innocent', 'He had been forced to work for the group', 'He was a police officer', 'He didn\'t know the others'], a: 1 },
      { q: 'What is the experts\' advice?', opts: ['Use cash only', 'Never click links in unexpected messages', 'Change your bank', 'Stop buying online'], a: 1 }
    ]
  },
  listening: {
    kind: 'dialogue', place: 'Uma vítima falando com a polícia',
    lines: [
      { s: 'Officer', v: 'en-GB-RyanNeural', t: "Good afternoon. How can I help you?" },
      { s: 'Woman', v: 'en-US-AvaNeural', t: "I'd like to report a theft. I had my bag stolen at a café about an hour ago." },
      { s: 'Officer', v: 'en-GB-RyanNeural', t: "I'm sorry to hear that. Can you tell me what happened?" },
      { s: 'Woman', v: 'en-US-AvaNeural', t: "I was sitting at a table near the door. A man asked me for directions, and while I was looking at his map, someone must have taken my bag from the back of my chair." },
      { s: 'Officer', v: 'en-GB-RyanNeural', t: "That's a very common trick. One person distracts you while the other takes your things. Did anyone see it happen?" },
      { s: 'Woman', v: 'en-US-AvaNeural', t: "The waiter thinks he saw two men running out. And the café has cameras, so they might have been filmed." },
      { s: 'Officer', v: 'en-GB-RyanNeural', t: "Good. We'll ask for the recording. What was in the bag?" },
      { s: 'Woman', v: 'en-US-AvaNeural', t: "My wallet, my keys and my passport. I'm flying home on Friday. I really need my passport to be replaced quickly." },
      { s: 'Officer', v: 'en-GB-RyanNeural', t: "I'll give you a crime reference number. Take it to your embassy. And cancel your cards right away, before they get used." }
    ],
    qs: [
      { q: 'Where was the woman\'s bag stolen?', opts: ['On the metro', 'At a café', 'At the hotel', 'In the street'], a: 1 },
      { q: 'How was she distracted?', opts: ['Someone spilled coffee', 'A man asked her for directions', 'Her phone rang', 'A waiter talked to her'], a: 1 },
      { q: 'Why might the thieves have been filmed?', opts: ['A tourist was recording', 'The café has cameras', 'The police were there', 'She took a photo'], a: 1 },
      { q: 'What does the officer tell her to do immediately?', opts: ['Go to the hotel', 'Cancel her cards', 'Buy a new bag', 'Call her family'], a: 1 }
    ]
  },
  speaking: {
    shadow: [
      { text: "My bike got stolen last week.", tip: "\"got stolen\" = gót-STOU-len." },
      { text: "He avoided being caught for months.", tip: "\"being caught\" = bii-ing-KÓT." },
      { text: "She expects to be released next year.", tip: "\"to be released\" = tu-bi-ri-LIIST." },
      { text: "He claims to have been at home.", tip: "\"to have been\" = tu-(h)əv-bin." },
      { text: "I had my wallet stolen on the metro.", tip: "\"had my wallet stolen\": ênfase em stolen." }
    ],
    prompt: { q: 'Tell the story of a crime or scam (real, from the news, or invented). Use the get passive, being + participle and to have been + participle.', hints: ['got stolen', 'avoided being', 'claims to have been', 'had my... stolen'] }
  }
},

// ───────────────────────────── 75 · tema: apresentações profissionais
{
  id: 'c75', lv: 'c1', title: 'Sinalizando o discurso: estruture qualquer apresentação', goal: "Signposting: Let me start by..., Moving on to..., As I mentioned earlier..., To sum up...; conduzir o público com clareza.",
  theory: `
<p>Uma boa apresentação não depende só do conteúdo, mas de quão fácil é <b>acompanhar</b> o raciocínio. Os falantes mais claros usam <b>signposting</b> (sinalização): frases curtas que funcionam como placas de trânsito, dizendo ao público onde você está, para onde vai e o que é importante. Essa linguagem é essencial para reuniões, aulas, entrevistas e qualquer fala mais longa.</p>

<h3>1. Abrindo</h3>
<ul>
<li><i>Good morning, everyone. Thank you for coming.</i></li>
<li><i>Today I'd like to talk about... / The purpose of this presentation is to...</i></li>
<li><i>I've divided my talk into three parts.</i></li>
<li><i>First, I'll look at... Then I'll move on to... Finally, I'll...</i></li>
<li><i>Please feel free to interrupt if you have any questions. / I'll take questions at the end.</i></li>
</ul>

<h3>2. Começando e mudando de parte</h3>
<ul>
<li><i><b>Let me start by</b> giving you some background.</i></li>
<li><i><b>Moving on to</b> our second point...</i></li>
<li><i><b>That brings me to</b> the next question: cost.</i></li>
<li><i><b>Now let's turn to</b> the results.</i></li>
<li><i><b>So far, we've looked at</b> the problem. <b>Now</b> I'd like to suggest a solution.</i></li>
</ul>

<h3>3. Destacando o que importa</h3>
<ul>
<li><i><b>I'd like to stress / emphasize that</b>...</i></li>
<li><i><b>The key point here is</b>...</i></li>
<li><i><b>What's really important is</b>...</i> (frase clivada, lição 71)</li>
<li><i><b>It's worth noting that</b>...</i></li>
</ul>

<h3>4. Referindo-se a recursos visuais</h3>
<ul>
<li><i><b>As you can see</b> on this slide...</i></li>
<li><i><b>If you look at</b> this graph, you'll notice that...</i></li>
<li><i><b>This chart shows</b> a sharp increase in...</i></li>
<li>Verbos de tendência: <i>rise / increase, fall / drop, peak (atingir o pico), level off (se estabilizar), fluctuate (oscilar)</i>; com advérbios: <i>sharply, steadily, slightly, dramatically</i>.</li>
</ul>

<h3>5. Voltando e adiantando</h3>
<ul>
<li><i><b>As I mentioned earlier</b>, ...</i></li>
<li><i><b>Going back to</b> what I said about costs...</i></li>
<li><i><b>I'll come back to</b> this point later.</i></li>
<li><i><b>We'll look at this in more detail</b> in a moment.</i></li>
</ul>

<h3>6. Dando exemplos e reformulando</h3>
<ul>
<li><i><b>For instance / To give you an example</b>, ...</i></li>
<li><i><b>In other words</b>, ... / <b>To put it another way</b>, ...</i></li>
<li><i><b>What I mean is</b>...</i></li>
</ul>

<h3>7. Encerrando</h3>
<ul>
<li><i><b>To sum up / To summarize</b>, ...</i></li>
<li><i><b>Let me just recap</b> the main points.</i></li>
<li><i><b>In conclusion</b>, ...</i></li>
<li><i>Thank you for your attention. <b>I'd be happy to answer any questions.</b></i></li>
</ul>

<h3>8. Lidando com perguntas</h3>
<table><tr><th>Situação</th><th>Frase</th></tr>
<tr><td>boa pergunta</td><td><em>That's a great question.</em></td></tr>
<tr><td>ganhar tempo</td><td><em>Let me think about that for a second.</em></td></tr>
<tr><td>não sabe</td><td><em>I'm not sure off the top of my head, but I'll find out and get back to you.</em></td></tr>
<tr><td>fora do tema</td><td><em>That's slightly outside the scope of today's talk, but I'm happy to discuss it afterwards.</em></td></tr>
<tr><td>não entendeu</td><td><em>Sorry, could you rephrase the question?</em></td></tr></table>

<h3>9. Um roteiro mínimo</h3>
<div class="ex"><i>Good morning. Today I'd like to talk about our new app. I've divided my talk into three parts: the problem, our solution and the results. Let me start with the problem... Moving on to our solution... As you can see on this slide, downloads rose sharply in March... To sum up, ... Thank you. I'd be happy to answer any questions.</i></div>

<h3>Resumo</h3>
<ul>
<li>Abrir: <i>Today I'd like to talk about... I've divided my talk into...</i></li>
<li>Transições: <i>Moving on to... That brings me to... Now let's turn to...</i></li>
<li>Visuais: <i>As you can see... This chart shows...</i></li>
<li>Fechar: <i>To sum up... I'd be happy to answer any questions.</i></li>
</ul>`,
  say: ["Today I'd like to talk about our results for this year.", "I've divided my talk into three parts.", "Moving on to our second point, let's look at costs.", "As you can see on this slide, sales rose sharply in March.", "As I mentioned earlier, the key issue is time.", "To sum up, I'd like to stress three main points."],
  vocab: [
    { en: "I'd like to talk about", pt: 'eu gostaria de falar sobre', ex: "Today I'd like to talk about our new strategy." },
    { en: 'moving on to', pt: 'passando para', ex: "Moving on to the budget..." },
    { en: 'that brings me to', pt: 'isso me leva a', ex: "That brings me to my final point." },
    { en: 'as you can see', pt: 'como vocês podem ver', ex: "As you can see, the numbers are improving." },
    { en: 'as I mentioned earlier', pt: 'como mencionei antes', ex: "As I mentioned earlier, we're behind schedule." },
    { en: 'to sum up', pt: 'resumindo', ex: "To sum up, the project was a success." },
    { en: 'stress', pt: 'enfatizar', ex: "I'd like to stress that this is only a first step." },
    { en: 'rise sharply', pt: 'subir bruscamente', ex: "Prices rose sharply last year." },
    { en: 'level off', pt: 'se estabilizar', ex: "Sales levelled off in the summer." },
    { en: 'off the top of my head', pt: 'de cabeça, sem consultar', ex: "I don't know the exact number off the top of my head." }
  ],
  pics: [
    { en: 'a bar chart', pt: 'um gráfico de barras', img: 'Bar chart' },
    { en: 'a rising line', pt: 'uma linha em alta', img: 'Chart increasing' },
    { en: 'a falling line', pt: 'uma linha em queda', img: 'Chart decreasing' },
    { en: 'a microphone', pt: 'um microfone', img: 'Microphone' },
    { en: 'a clipboard', pt: 'uma prancheta', img: 'Clipboard' },
    { en: 'a pushpin', pt: 'um alfinete', img: 'Pushpin' },
    { en: 'a timer', pt: 'um cronômetro', img: 'Timer clock' },
    { en: 'a check mark', pt: 'um sinal de visto', img: 'Check mark button' }
  ],
  fill: [
    { s: "Today I'd like to ___ about our results.", a: 'talk' },
    { s: '___ on to our second point...', a: 'Moving' },
    { s: 'That ___ me to my final point.', a: 'brings' },
    { s: 'As you can ___ on this slide, sales rose.', a: 'see' },
    { s: 'As I ___ earlier, time is the key issue.', a: 'mentioned' },
    { s: 'To sum ___, the project was a success.', a: 'up' },
    { s: 'Sales levelled ___ in the summer.', a: 'off' }
  ],
  reading: {
    title: 'What makes a talk memorable',
    paras: [
      "Most people forget the majority of a presentation within a few days. What they remember is usually not the data, but a story, an image or a single clear message. That's why experienced speakers say that the most important preparation happens before you open your slides.",
      "The first step is deciding what you want your audience to remember. If you can't sum up your talk in one sentence, your audience certainly won't. Everything in the presentation should support that main message; anything that doesn't is probably unnecessary.",
      "The second is structure. Audiences relax when they know where they are. Simple signposts, 'I'll cover three points', 'That brings me to the second one', 'To sum up', act like a map. Without them, even brilliant content can feel confusing.",
      "Finally, speakers are advised to use slides as support, not as a script. A slide full of text forces people to choose between reading and listening, and they usually do neither well. One image, one number or one short phrase per slide is often far more powerful."
    ],
    gloss: { 'memorable': 'memorável', 'majority': 'maioria', 'sum up': 'resumir', 'certainly': 'com certeza', 'act like': 'funcionam como', 'script': 'roteiro' },
    qs: [
      { q: 'What do people usually remember from a presentation?', opts: ['All the data', 'A story, an image or one clear message', 'The slides', 'The speaker\'s clothes'], a: 1 },
      { q: 'What is the first step in preparing?', opts: ['Designing slides', 'Deciding what you want the audience to remember', 'Practicing jokes', 'Finding data'], a: 1 },
      { q: 'Why are signposts important?', opts: ['They look professional', 'They help the audience know where they are', 'They make talks longer', 'They replace data'], a: 1 },
      { q: 'What is the advice about slides?', opts: ['Put all your text on them', 'Use them as support with very little on each', 'Don\'t use slides', 'Read them aloud'], a: 1 }
    ]
  },
  listening: {
    kind: 'talk', place: 'Uma apresentação de resultados em uma empresa',
    lines: [
      { s: 'Speaker', v: 'en-US-EmmaNeural', t: "Good morning, everyone, and thank you for coming. Today I'd like to talk about the results of our new delivery service. I've divided my talk into three parts: what we did, what happened, and what we're planning next." },
      { s: 'Speaker', v: 'en-US-EmmaNeural', t: "Let me start by giving you some background. Last year, our customers' main complaint was slow delivery. So in January, we opened two new warehouses closer to our biggest cities." },
      { s: 'Speaker', v: 'en-US-EmmaNeural', t: "Moving on to the results. As you can see on this slide, average delivery time fell from four days to just under two. Orders rose sharply in the spring, then levelled off over the summer, which is normal for our sector." },
      { s: 'Speaker', v: 'en-US-EmmaNeural', t: "I'd like to stress that customer satisfaction also improved. In other words, people didn't just get their parcels faster, they were happier with the whole experience. That brings me to our plans: next year, we want to offer same-day delivery in three cities." },
      { s: 'Speaker', v: 'en-US-EmmaNeural', t: "To sum up: faster deliveries, more orders and happier customers. Thank you for your attention. I'd be happy to answer any questions." }
    ],
    qs: [
      { q: 'What was customers\' main complaint last year?', opts: ['High prices', 'Slow delivery', 'Bad products', 'Rude staff'], a: 1 },
      { q: 'What did the company do in January?', opts: ['Hired more drivers', 'Opened two new warehouses closer to big cities', 'Lowered prices', 'Closed stores'], a: 1 },
      { q: 'How did average delivery time change?', opts: ['From four days to just under two', 'From two days to one', 'It didn\'t change', 'From a week to four days'], a: 0 },
      { q: 'What does the company plan for next year?', opts: ['Opening abroad', 'Same-day delivery in three cities', 'Closing a warehouse', 'Free delivery everywhere'], a: 1 }
    ]
  },
  speaking: {
    shadow: [
      { text: "Today I'd like to talk about our results.", tip: "\"I'd like to\" = aid-LAIK-tu." },
      { text: "I've divided my talk into three parts.", tip: "\"divided\" = di-VAI-did." },
      { text: "Moving on to our second point...", tip: "Pausa depois de point." },
      { text: "As you can see, sales rose sharply.", tip: "\"rose sharply\" = rouz-SHÁRP-li." },
      { text: "To sum up, thank you for your attention.", tip: "\"sum up\" liga: sâ-MÂP." }
    ],
    prompt: { q: 'Give a short presentation (about one minute) on any topic you know well: your job, a hobby or a project. Use signposting to open, change topics, highlight a key point and close.', hints: ["I'd like to talk about", 'moving on to', "I'd like to stress", 'to sum up'] }
  }
}
]);
