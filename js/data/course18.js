// Curso diário — lições 86 a 90 (temas de fundo anotados só no código).
window.COURSE = (window.COURSE || []).concat([

// ───────────────────────────── 86 · tema: planejamento urbano
{
  id: 'c86', lv: 'c1', title: 'Coesão: the former, the latter, respectively, this + substantivo', goal: 'Ligar ideias sem repetir: the former / the latter, respectively, this approach, such measures, the above, as follows.',
  theory: `
<p>Um texto avançado não é só uma sequência de frases corretas: as frases precisam estar <b>conectadas</b>. Uma das técnicas mais importantes é a <b>referência</b>: retomar algo já mencionado sem repetir as mesmas palavras. Nesta lição você vai aprender as ferramentas de coesão que aparecem em artigos, relatórios e discussões, usando debates sobre planejamento das cidades como cenário.</p>

<h3>1. The former / the latter</h3>
<p>Quando você menciona <b>duas</b> coisas, pode retomá-las assim:</p>
<ul>
<li><b>the former</b> = o primeiro dos dois</li>
<li><b>the latter</b> = o segundo dos dois</li>
</ul>
<div class="ex"><i>The city considered two options: building a new motorway or expanding the metro. <b>The former</b> would be cheaper, but <b>the latter</b> would reduce pollution.</i></div>
<p>Use apenas com <b>duas</b> opções. Para três ou mais, diga <i>the first, the second, the last</i>.</p>

<h3>2. Respectively</h3>
<p><b>Respectively</b> (respectivamente) liga duas listas na mesma ordem:</p>
<ul>
<li><i>The new parks in the north and south cost five and eight million, <b>respectively</b>.</i></li>
<li><i>Anna and Paul are the architect and the engineer, <b>respectively</b>.</i></li>
</ul>

<h3>3. This / these + substantivo-resumo</h3>
<p>Uma técnica poderosa: retomar uma ideia inteira com <b>this/these + um substantivo que a resume</b>:</p>
<ul>
<li><i>Many cities are closing their centres to cars. <b>This approach</b> has reduced pollution significantly.</i></li>
<li><i>Rents doubled and families moved away. <b>These changes</b> transformed the neighbourhood.</i></li>
<li><i>Some residents protested. <b>This reaction</b> was not unexpected.</i></li>
</ul>
<p>Substantivos úteis: <i>approach, problem, issue, trend, development, measure, situation, decision, process, change, view</i>.</p>
<div class="ex">Evite "this" sozinho quando ele pode ser ambíguo: <i>Rents rose and parks closed. This was a problem.</i> (o quê?) → <i>This combination of factors was a problem.</i></div>

<h3>4. Such + substantivo</h3>
<p><b>Such</b> retoma algo com o sentido de "desse tipo":</p>
<ul>
<li><i>Cycle lanes, wider pavements and more trees: <b>such measures</b> make streets safer.</i></li>
<li><i>In <b>such cases</b>, residents should be consulted.</i></li>
</ul>

<h3>5. Do so, the same, likewise</h3>
<ul>
<li><i>Paris banned cars from some streets, and London is planning to <b>do so</b> too.</i></li>
<li><i>Copenhagen invested in cycling. Amsterdam did <b>the same</b>.</i></li>
<li><i>Barcelona created car-free zones. <b>Likewise</b>, Madrid restricted traffic in its centre.</i></li>
</ul>

<h3>6. Referências em textos formais</h3>
<table><tr><th>Expressão</th><th>Sentido</th></tr>
<tr><td><em>the above / the aforementioned</em></td><td>o que foi mencionado acima</td></tr>
<tr><td><em>as follows</em></td><td>como segue</td></tr>
<tr><td><em>the following</em></td><td>o seguinte</td></tr>
<tr><td><em>as mentioned above / as stated earlier</em></td><td>como mencionado</td></tr>
<tr><td><em>in this respect / in this regard</em></td><td>nesse aspecto</td></tr></table>
<ul>
<li><i>The main recommendations are <b>as follows</b>: ...</i></li>
<li><i><b>In this respect</b>, Vienna is a model for other cities.</i></li>
</ul>

<h3>7. Pronomes possessivos e demonstrativos</h3>
<ul>
<li><i>Vienna's housing policy is very different from <b>that of</b> London.</i> (= the housing policy of London)</li>
<li><i>The prices in the centre are higher than <b>those</b> in the suburbs.</i></li>
</ul>
<p><b>That of / those of</b> evitam repetir o substantivo em comparações formais.</p>

<h3>8. Vocabulário de urbanismo</h3>
<p><i>urban planning</i> (planejamento urbano), <i>a car-free zone</i>, <i>public transport</i>, <i>a cycle lane</i> (ciclovia), <i>green spaces</i> (áreas verdes), <i>affordable housing</i> (moradia acessível), <i>pedestrianize</i> (transformar em calçadão), <i>residents</i> (moradores), <i>infrastructure</i>, <i>zoning</i> (zoneamento).</p>

<h3>Resumo</h3>
<ul>
<li><b>the former / the latter</b> = o primeiro / o segundo (de dois).</li>
<li><b>respectively</b> liga duas listas na mesma ordem.</li>
<li><b>this approach / these changes / such measures</b> resumem ideias.</li>
<li><b>do so, the same, likewise, that of, those</b> evitam repetição.</li>
</ul>`,
  say: ["The former would be cheaper, but the latter would reduce pollution.", "The two parks cost five and eight million, respectively.", "This approach has reduced pollution significantly.", "Such measures make streets safer for everyone.", "Paris banned cars from some streets, and London is planning to do so too.", "Prices in the centre are higher than those in the suburbs."],
  vocab: [
    { en: 'the former', pt: 'o primeiro (de dois)', ex: "Of the two plans, the former is cheaper." },
    { en: 'the latter', pt: 'o segundo (de dois)', ex: "I prefer the latter option." },
    { en: 'respectively', pt: 'respectivamente', ex: "They are 30 and 35, respectively." },
    { en: 'this approach', pt: 'essa abordagem', ex: "This approach has worked in many cities." },
    { en: 'such measures', pt: 'tais medidas', ex: "Such measures are often unpopular at first." },
    { en: 'as follows', pt: 'como segue', ex: "The steps are as follows." },
    { en: 'likewise', pt: 'da mesma forma', ex: "Likewise, other cities followed the plan." },
    { en: 'affordable housing', pt: 'moradia acessível', ex: "The city needs more affordable housing." },
    { en: 'pedestrianize', pt: 'transformar em calçadão', ex: "They pedestrianized the main street." },
    { en: 'green spaces', pt: 'áreas verdes', ex: "Green spaces improve mental health." }
  ],
  pics: [
    { en: 'a national park', pt: 'um parque nacional', img: 'National park' },
    { en: 'houses', pt: 'casas', img: 'Houses' },
    { en: 'a house with a garden', pt: 'uma casa com jardim', img: 'House with garden' },
    { en: 'a bus stop', pt: 'um ponto de ônibus', img: 'Bus stop' },
    { en: 'a fountain', pt: 'uma fonte', img: 'Fountain' },
    { en: 'light rail', pt: 'um VLT', img: 'Light rail' },
    { en: 'a factory', pt: 'uma fábrica', img: 'Factory' },
    { en: 'a department store', pt: 'uma loja de departamentos', img: 'Department store' }
  ],
  fill: [
    { s: 'The ___ would be cheaper, but the latter is greener.', a: 'former' },
    { s: 'The former is fast, but the ___ is safer.', a: 'latter' },
    { s: 'They cost five and eight million, ___.', a: 'respectively' },
    { s: '___ measures make streets safer.', a: 'Such' },
    { s: 'London is planning to do ___ too.', a: 'so' },
    { s: 'Prices here are higher than ___ in the suburbs.', a: 'those' },
    { s: 'The main steps are as ___.', a: 'follows' }
  ],
  reading: {
    title: 'The fifteen-minute city',
    paras: [
      "Imagine being able to reach everything you need, such as work, school, shops, a doctor and a park, within a fifteen-minute walk or bike ride from home. This is the idea behind the 'fifteen-minute city', a concept that has inspired urban planners from Paris to Melbourne.",
      "Supporters see two main benefits: less traffic and stronger communities. The former reduces pollution and noise; the latter, they argue, comes from people spending more time in their own neighbourhoods, meeting neighbours and supporting local businesses. Such changes, they say, could make cities healthier and happier.",
      "Critics, however, raise concerns. Some fear that the approach could increase property prices in well-served areas, pushing poorer residents out. Others worry about restrictions on driving, especially for people who work far from home. These objections have led to heated public debates in several cities.",
      "In practice, most cities are adopting the idea gradually: adding cycle lanes, opening schoolyards as parks at weekends, and encouraging small shops in residential streets. Whether this process will transform cities or simply improve them slightly remains to be seen, but the question it raises is a powerful one: what kind of daily life should a city make possible?"
    ],
    gloss: { 'concept': 'conceito', 'well-served': 'bem servidas', 'pushing out': 'expulsando', 'objections': 'objeções', 'heated': 'acalorados', 'remains to be seen': 'ainda está para ser visto' },
    qs: [
      { q: 'What is the idea of the fifteen-minute city?', opts: ['Faster cars', 'Reaching everything you need within fifteen minutes on foot or by bike', 'Shorter working days', 'Fifteen-minute buses'], a: 1 },
      { q: 'In paragraph 2, what does "the latter" refer to?', opts: ['Less traffic', 'Stronger communities', 'Pollution', 'Noise'], a: 1 },
      { q: 'What do some critics fear?', opts: ['More traffic', 'Higher property prices pushing poorer residents out', 'Fewer parks', 'Too many shops'], a: 1 },
      { q: 'How are most cities adopting the idea?', opts: ['All at once', 'Gradually', 'Not at all', 'By banning cars completely'], a: 1 }
    ]
  },
  listening: {
    kind: 'talk', place: 'Uma urbanista falando em uma reunião de moradores',
    lines: [
      { s: 'Planner', v: 'en-US-EmmaNeural', t: "Good evening, everyone. Tonight I'd like to present two proposals for the old station site: a shopping centre or a public park with affordable housing." },
      { s: 'Planner', v: 'en-US-EmmaNeural', t: "The former would bring jobs and tax income quickly. The latter would take longer to build, but it would provide around three hundred homes and the green space many of you have asked for." },
      { s: 'Planner', v: 'en-US-EmmaNeural', t: "The estimated costs are forty and fifty-five million, respectively. However, the second option would qualify for national funding, which would reduce the cost to the city considerably." },
      { s: 'Planner', v: 'en-US-EmmaNeural', t: "Several cities in our region have faced similar decisions. Most chose housing and parks, and this approach has generally been popular with residents. Likewise, local businesses have benefited from the extra people living nearby." },
      { s: 'Planner', v: 'en-US-EmmaNeural', t: "The next steps are as follows: a public consultation this month, a vote in the council in March and, if approved, construction starting next year. I'd now be happy to hear your views." }
    ],
    qs: [
      { q: 'What are the two proposals for the old station site?', opts: ['A school or a hospital', 'A shopping centre or a park with affordable housing', 'A stadium or a car park', 'Offices or a museum'], a: 1 },
      { q: 'What would the shopping centre bring?', opts: ['Green space', 'Jobs and tax income quickly', 'Homes', 'Lower costs'], a: 1 },
      { q: 'How much would the park and housing option cost?', opts: ['Forty million', 'Fifty-five million', 'Three hundred million', 'Fifteen million'], a: 1 },
      { q: 'When will the council vote?', opts: ['This month', 'In March', 'Next year', 'Tonight'], a: 1 }
    ]
  },
  speaking: {
    shadow: [
      { text: "The former is cheaper, but the latter is greener.", tip: "\"former\" = FÓR-mer; \"latter\" = LÉ-der." },
      { text: "They cost five and eight million, respectively.", tip: "\"respectively\" = ri-SPEK-tiv-li." },
      { text: "This approach has reduced pollution.", tip: "\"approach\" = a-PROUTCH." },
      { text: "Such measures make streets safer.", tip: "\"such measures\" = sâtch-MÉ-jerz." },
      { text: "The next steps are as follows.", tip: "\"as follows\" = az-FÓ-louz." }
    ],
    prompt: { q: 'Compare two options for improving your city or neighbourhood (for example, more parks vs. more parking). Use the former/the latter, this + noun and such.', hints: ['the former', 'the latter', 'this approach', 'such measures'] }
  }
},

// ───────────────────────────── 87 · tema: hábitos e psicologia
{
  id: 'c87', lv: 'c1', title: 'Adjetivos graduáveis e extremos: very tired × absolutely exhausted', goal: 'Combinar intensificadores com o tipo certo de adjetivo: very / extremely + graduáveis; absolutely / utterly + extremos; fairly, rather, quite.',
  theory: `
<p>Por que um nativo diz <i>"absolutely exhausted"</i> mas nunca "absolutely tired"? E por que <i>"very delicious"</i> soa estranho? A resposta está na diferença entre adjetivos <b>graduáveis</b> e <b>não graduáveis (extremos)</b>. Dominar essa diferença, junto com os intensificadores certos, deixa sua fala muito mais natural e expressiva. Falar de hábitos, motivação e emoções é o contexto ideal para praticar.</p>

<h3>1. Adjetivos graduáveis</h3>
<p>Têm graus: algo pode ser <b>um pouco</b>, <b>bem</b> ou <b>muito</b> cansativo. Combinam com <b>very, extremely, really, incredibly, a bit, fairly, rather</b>:</p>
<ul>
<li><i>I'm <b>very tired</b>. / It's <b>extremely difficult</b> to change a habit.</i></li>
<li><i>The first week was <b>a bit hard</b>.</i></li>
</ul>

<h3>2. Adjetivos extremos (não graduáveis)</h3>
<p>Já contêm a ideia de "muito". Combinam com <b>absolutely, completely, totally, utterly, really</b>, mas <b>não</b> com very:</p>
<table><tr><th>Graduável</th><th>Extremo</th></tr>
<tr><td>tired</td><td>exhausted</td></tr>
<tr><td>good</td><td>amazing, fantastic, brilliant</td></tr>
<tr><td>bad</td><td>awful, terrible, dreadful</td></tr>
<tr><td>hungry</td><td>starving</td></tr>
<tr><td>surprised</td><td>astonished, amazed</td></tr>
<tr><td>difficult</td><td>impossible</td></tr>
<tr><td>angry</td><td>furious</td></tr>
<tr><td>scared</td><td>terrified</td></tr>
<tr><td>tasty</td><td>delicious</td></tr>
<tr><td>big / small</td><td>huge, enormous / tiny</td></tr>
<tr><td>cold / hot</td><td>freezing / boiling</td></tr>
<tr><td>interesting</td><td>fascinating</td></tr></table>
<div class="ex">❌ <i>very exhausted, very delicious, very impossible</i><br>✅ <i>absolutely exhausted, absolutely delicious, completely impossible</i></div>

<h3>3. Really: o coringa</h3>
<p><b>Really</b> funciona com os dois tipos: <i>really tired</i> e <i>really exhausted</i>. Por isso é o intensificador mais comum na fala.</p>

<h3>4. Utterly, completely, totally</h3>
<p>São mais usados com adjetivos de sentido <b>negativo</b> ou de "totalidade":</p>
<ul>
<li><i><b>utterly</b> ridiculous, <b>utterly</b> miserable</i></li>
<li><i><b>completely</b> different, <b>completely</b> wrong, <b>totally</b> unnecessary</i></li>
</ul>

<h3>5. Fairly, quite, rather, pretty: graus intermediários</h3>
<table><tr><th>Palavra</th><th>Sentido</th><th>Exemplo</th></tr>
<tr><td>fairly</td><td>razoavelmente (neutro)</td><td><em>The habit was fairly easy to start.</em></td></tr>
<tr><td>pretty</td><td>bem (informal)</td><td><em>I'm pretty good at keeping routines.</em></td></tr>
<tr><td>rather</td><td>um tanto (UK; muitas vezes negativo ou de surpresa)</td><td><em>It was rather harder than I expected.</em></td></tr>
<tr><td>quite</td><td>bastante (UK) / muito (US)</td><td><em>It's quite difficult.</em></td></tr></table>
<p>Atenção: com adjetivos extremos, <b>quite</b> significa "totalmente": <i>You're <b>quite right</b>.</i> = você está totalmente certo. <i>It's <b>quite impossible</b>.</i> = é totalmente impossível.</p>

<h3>6. Ordem com artigo</h3>
<ul>
<li><i>It's <b>quite a</b> good idea.</i> / <i>It's <b>rather a</b> long process.</i> (quite/rather antes do a)</li>
<li><i>It's <b>a fairly</b> simple habit.</i> / <i>It's <b>a very</b> common problem.</i> (fairly/very depois do a)</li>
</ul>

<h3>7. Advérbio + adjetivo: combinações naturais</h3>
<p>Algumas combinações são fixas e soam muito naturais: <i>deeply moved</i> (profundamente comovido), <i>highly motivated</i>, <i>bitterly disappointed</i>, <i>painfully slow</i>, <i>wide awake</i> (bem acordado), <i>fast asleep</i> (em sono profundo), <i>perfectly normal</i>, <i>blissfully happy</i>.</p>

<h3>8. Vocabulário de hábitos</h3>
<p><i>form / break a habit</i> (criar / largar um hábito), <i>willpower</i> (força de vontade), <i>a routine</i>, <i>procrastinate</i> (procrastinar), <i>a trigger</i> (gatilho), <i>stick to</i> (manter, seguir), <i>slip back into</i> (voltar a, recair), <i>consistency</i> (consistência).</p>
<div class="ex"><i>The first week of my new routine was absolutely exhausting, and by Friday I was starving all the time. But it got fairly easy after a month. Now I'm pretty good at sticking to it, and I feel completely different.</i></div>

<h3>Resumo</h3>
<ul>
<li>Graduáveis: <b>very, extremely, a bit</b> + tired, hungry, good.</li>
<li>Extremos: <b>absolutely, completely, utterly</b> + exhausted, starving, amazing.</li>
<li><b>really</b> funciona com os dois.</li>
<li><b>fairly, pretty, rather, quite</b> = graus intermediários; <i>quite right</i> = totalmente certo.</li>
</ul>`,
  say: ["By the end of the week, I was absolutely exhausted.", "Changing a habit is extremely difficult at first.", "It got fairly easy after a month.", "You're quite right. Willpower isn't enough.", "I was bitterly disappointed when I gave up.", "Now I'm pretty good at sticking to my routine."],
  vocab: [
    { en: 'absolutely exhausted', pt: 'completamente esgotado', ex: "After the marathon, I was absolutely exhausted." },
    { en: 'starving', pt: 'morrendo de fome', ex: "I'm starving. Let's eat." },
    { en: 'utterly', pt: 'totalmente (negativo)', ex: "The plan was utterly ridiculous." },
    { en: 'fairly', pt: 'razoavelmente', ex: "The new habit was fairly easy to start." },
    { en: 'pretty', pt: 'bem, bastante (informal)', ex: "I'm pretty sure it'll work." },
    { en: 'bitterly disappointed', pt: 'profundamente decepcionado', ex: "She was bitterly disappointed with the result." },
    { en: 'break a habit', pt: 'largar um hábito', ex: "It takes time to break a bad habit." },
    { en: 'willpower', pt: 'força de vontade', ex: "Willpower alone isn't enough." },
    { en: 'stick to', pt: 'manter, seguir', ex: "Try to stick to your plan for a month." },
    { en: 'procrastinate', pt: 'procrastinar', ex: "I always procrastinate when I'm stressed." }
  ],
  pics: [
    { en: 'exhausted', pt: 'esgotado', img: 'Weary face' },
    { en: 'astonished', pt: 'perplexo', img: 'Astonished face' },
    { en: 'boiling hot', pt: 'morrendo de calor', img: 'Hot face' },
    { en: 'freezing cold', pt: 'congelando', img: 'Cold face' },
    { en: 'terrified', pt: 'apavorado', img: 'Face screaming in fear' },
    { en: 'fast asleep', pt: 'em sono profundo', img: 'Sleeping face' },
    { en: 'crazy', pt: 'maluco', img: 'Zany face' },
    { en: 'embarrassed', pt: 'envergonhado', img: 'Flushed face' }
  ],
  fill: [
    { s: 'By Friday I was ___ exhausted.', a: 'absolutely' },
    { s: "I'm ___. Let's eat something now.", a: 'starving' },
    { s: 'Changing a habit is ___ difficult at first.', a: 'extremely' },
    { s: "You're quite ___. Willpower isn't enough.", a: 'right' },
    { s: 'She was ___ disappointed with the result.', a: 'bitterly' },
    { s: 'Try to stick ___ your plan for a month.', a: 'to' },
    { s: 'It takes time to ___ a bad habit.', a: 'break' }
  ],
  reading: {
    title: 'Why willpower is overrated',
    paras: [
      "When people fail to stick to a new habit, they usually blame themselves: 'I just don't have enough willpower.' Psychologists who study behaviour say this explanation is almost completely wrong. People who seem to have incredible self-control, research suggests, don't actually resist temptation more often. They simply face it less.",
      "The secret is the environment. Someone who wants to eat better but keeps biscuits on the kitchen table is fighting an exhausting battle every day. Someone who doesn't buy biscuits in the first place doesn't need willpower at all. Small changes like putting your running shoes by the door or leaving your phone in another room can make good habits fairly easy and bad ones rather inconvenient.",
      "Another common mistake is starting too big. People decide to go to the gym every day, read fifty pages a night and wake up at five, all at once. By the second week, they're utterly exhausted and bitterly disappointed with themselves. Experts recommend starting with something so small it feels almost ridiculous, like one push-up or one page.",
      "Consistency matters far more than intensity. A tiny habit repeated daily slowly becomes automatic, and once it is, it can grow. As one researcher puts it, 'Don't try to be absolutely perfect. Try to be pretty good, every day.'"
    ],
    gloss: { 'self-control': 'autocontrole', 'resist temptation': 'resistir à tentação', 'in the first place': 'para começo de conversa', 'inconvenient': 'inconvenientes', 'push-up': 'flexão', 'intensity': 'intensidade' },
    qs: [
      { q: 'What does research suggest about people with great self-control?', opts: ['They resist temptation more', 'They simply face temptation less', 'They are born that way', 'They sleep more'], a: 1 },
      { q: 'What is "the secret", according to the text?', opts: ['More willpower', 'The environment', 'Expensive gyms', 'Motivation videos'], a: 1 },
      { q: 'What common mistake do people make?', opts: ['Starting too small', 'Starting too big', 'Never starting', 'Asking for help'], a: 1 },
      { q: 'What matters more than intensity?', opts: ['Money', 'Consistency', 'Speed', 'Talent'], a: 1 }
    ]
  },
  listening: {
    kind: 'dialogue', place: 'Dois amigos falando sobre uma nova rotina',
    lines: [
      { s: 'Ben', v: 'en-GB-RyanNeural', t: "So, how's the new morning routine going? You were going to get up at six every day." },
      { s: 'Lucy', v: 'en-US-AvaNeural', t: "Honestly? The first week was absolutely awful. I was exhausted by Wednesday and starving all morning." },
      { s: 'Ben', v: 'en-GB-RyanNeural', t: "Ha! Did you give up?" },
      { s: 'Lucy', v: 'en-US-AvaNeural', t: "Almost. I was bitterly disappointed with myself. Then I read that I'd started too big. Gym, meditation, journaling, all at once. It was utterly unrealistic." },
      { s: 'Ben', v: 'en-GB-RyanNeural', t: "So what did you change?" },
      { s: 'Lucy', v: 'en-US-AvaNeural', t: "Now I just do ten minutes of stretching and drink a glass of water. It's fairly easy, and I've stuck to it for six weeks." },
      { s: 'Ben', v: 'en-GB-RyanNeural', t: "That's brilliant. I'm pretty bad at routines. I always slip back into old habits after a few days." },
      { s: 'Lucy', v: 'en-US-AvaNeural', t: "Start with something tiny. Seriously, it feels ridiculous at first, but it works. You're quite capable of it." },
      { s: 'Ben', v: 'en-GB-RyanNeural', t: "Okay. Tomorrow: one push-up. Don't laugh." }
    ],
    qs: [
      { q: 'What was Lucy\'s original plan?', opts: ['Go to bed early', 'Get up at six every day', 'Stop drinking coffee', 'Run a marathon'], a: 1 },
      { q: 'Why did the first week go badly?', opts: ['She was sick', 'She started too big', 'She had no time', 'She moved house'], a: 1 },
      { q: 'What does Lucy do now?', opts: ['Gym every morning', 'Ten minutes of stretching and a glass of water', 'Meditation for an hour', 'Nothing'], a: 1 },
      { q: 'What will Ben do tomorrow?', opts: ['Get up at six', 'One push-up', 'Go to the gym', 'Start journaling'], a: 1 }
    ]
  },
  speaking: {
    shadow: [
      { text: "By Friday I was absolutely exhausted.", tip: "\"absolutely\" = ÉB-so-lut-li; ênfase forte." },
      { text: "Changing a habit is extremely difficult.", tip: "\"extremely\" = iks-TRIIM-li." },
      { text: "It got fairly easy after a month.", tip: "\"fairly easy\" = FÉR-li-II-zi." },
      { text: "You're quite right.", tip: "quite + extremo = totalmente." },
      { text: "I'm pretty good at sticking to it.", tip: "\"pretty good\" = PRI-di-GUD (americano)." }
    ],
    prompt: { q: 'Talk about a habit you tried to start or break. Describe how it felt using both gradable and extreme adjectives with the right intensifiers.', hints: ['absolutely exhausted', 'extremely difficult', 'fairly easy', 'pretty good'] }
  }
},

// ───────────────────────────── 88 · tema: desastres de viagem
{
  id: 'c88', lv: 'c1', title: 'Contando histórias com vida: presente narrativo e marcadores', goal: 'So I\'m standing there..., all of a sudden, it turns out, to cut a long story short: contar casos de forma envolvente.',
  theory: `
<p>Contar uma boa história é uma arte, e em inglês ela tem truques próprios. Quando nativos contam um caso engraçado ou um desastre de viagem para amigos, eles muitas vezes mudam para o <b>presente</b> para criar suspense ("So I'm standing at the gate, and this guy comes up to me..."), usam <b>marcadores de discurso</b> para guiar o ouvinte e expressões para criar expectativa. Nesta lição, você vai aprender a contar histórias que prendem a atenção.</p>

<h3>1. O presente narrativo</h3>
<p>Em histórias informais e piadas, o presente deixa a narração mais viva, como se o ouvinte estivesse lá:</p>
<ul>
<li><b>presente contínuo</b> para o cenário: <i>So <b>I'm standing</b> at the check-in desk, and <b>it's raining</b> outside...</i></li>
<li><b>presente simples</b> para as ações: <i>...and this woman <b>comes</b> up to me and <b>says</b>, "Is this your bag?"</i></li>
<li><b>present perfect</b> para o que já aconteceu: <i>I<b>'ve</b> just <b>lost</b> my passport, right?</i></li>
</ul>
<p>Isso só funciona em contextos informais. Em textos formais ou relatos, use os tempos do passado (lição 63).</p>

<h3>2. Começando a história</h3>
<ul>
<li><i>You'll never guess what happened to me...</i></li>
<li><i>Did I ever tell you about the time I...?</i></li>
<li><i>So, this one time, in Rome...</i></li>
<li><i>The funniest thing happened last week.</i></li>
</ul>

<h3>3. Marcadores que movem a história</h3>
<table><tr><th>Função</th><th>Marcadores</th></tr>
<tr><td>sequência</td><td><em>so, then, after that, the next thing I know</em></td></tr>
<tr><td>surpresa</td><td><em>all of a sudden, suddenly, out of nowhere, before I knew it</em></td></tr>
<tr><td>revelação</td><td><em>it turns out (that), as it turned out, it was only then that</em></td></tr>
<tr><td>voltar ao assunto</td><td><em>anyway, where was I?, so, as I was saying</em></td></tr>
<tr><td>resumir</td><td><em>to cut a long story short, long story short</em></td></tr>
<tr><td>final</td><td><em>in the end, eventually, luckily, at the end of the day</em></td></tr></table>

<h3>4. Discurso direto com "say" e "go"</h3>
<p>Na fala informal, nativos citam o que as pessoas disseram com <b>say</b>, <b>go</b> e <b>be like</b>:</p>
<ul>
<li><i>And he <b>says</b>, "Sorry, the flight's cancelled."</i></li>
<li><i>And I <b>go</b>, "You're joking!"</i> (informal)</li>
<li><i>And she<b>'s like</b>, "No, seriously."</i> (muito informal, jovem)</li>
</ul>

<h3>5. Criando suspense e envolvendo o ouvinte</h3>
<ul>
<li><i>And guess what?</i></li>
<li><i>You won't believe this, but...</i></li>
<li><i>And that's not even the worst part.</i></li>
<li><i>I kid you not.</i> (juro, não estou brincando)</li>
<li><i>I'm not exaggerating.</i></li>
</ul>

<h3>6. Reagindo à história de alguém</h3>
<p>Um bom ouvinte reage. Algumas reações naturais:</p>
<ul>
<li><i>No way! / You're kidding! / Seriously?</i></li>
<li><i>Oh no! What did you do?</i></li>
<li><i>Then what happened?</i></li>
<li><i>That's hilarious! / That's a nightmare!</i></li>
<li><i>I can't believe it!</i></li>
</ul>

<h3>7. Expressões para desastres de viagem</h3>
<table><tr><th>Expressão</th><th>Sentido</th></tr>
<tr><td><em>miss a connection</em></td><td>perder a conexão</td></tr>
<tr><td><em>be stranded</em></td><td>ficar preso, sem saída</td></tr>
<tr><td><em>lost luggage / my bag went missing</em></td><td>bagagem extraviada</td></tr>
<tr><td><em>be overbooked</em></td><td>ter overbooking</td></tr>
<tr><td><em>a nightmare</em></td><td>um pesadelo</td></tr>
<tr><td><em>a blessing in disguise</em></td><td>há males que vêm para bem</td></tr>
<tr><td><em>in the middle of nowhere</em></td><td>no meio do nada</td></tr></table>

<h3>8. Uma história completa</h3>
<div class="ex"><i>Did I ever tell you about my trip to Lisbon? So, I'm sitting at the airport, the flight's already delayed three hours, and all of a sudden they announce it's cancelled. And guess what? My bag has already gone on another plane. To cut a long story short, I spent the night in a tiny hotel in the middle of nowhere. But it turns out the owner was a chef, and he cooked the best dinner of my life. A real blessing in disguise!</i></div>

<h3>Resumo</h3>
<ul>
<li>Presente narrativo: <i>So I'm standing there, and this guy comes up...</i></li>
<li>Marcadores: all of a sudden, it turns out, anyway, to cut a long story short.</li>
<li>Citar falas: <i>he says / I go / she's like</i>.</li>
<li>Reagir: <i>No way! Then what happened?</i></li>
</ul>`,
  say: ["So I'm standing at the gate, and this guy comes up to me.", "All of a sudden, they announce the flight's cancelled.", "It turns out my bag had gone on another plane.", "To cut a long story short, we spent the night at the airport.", "And guess what? That's not even the worst part.", "In the end, it was a blessing in disguise."],
  vocab: [
    { en: 'all of a sudden', pt: 'de repente', ex: "All of a sudden, the lights went out." },
    { en: 'it turns out', pt: 'acontece que, no fim', ex: "It turns out he was the hotel owner." },
    { en: 'to cut a long story short', pt: 'resumindo a história', ex: "To cut a long story short, we missed the flight." },
    { en: 'the next thing I know', pt: 'quando vi', ex: "The next thing I know, I'm in Paris instead of Rome." },
    { en: 'anyway', pt: 'enfim, de qualquer forma', ex: "Anyway, where was I?" },
    { en: 'be stranded', pt: 'ficar preso, ilhado', ex: "We were stranded at the airport for two days." },
    { en: 'go missing', pt: 'sumir, extraviar', ex: "My suitcase went missing in Madrid." },
    { en: 'in the middle of nowhere', pt: 'no meio do nada', ex: "The car broke down in the middle of nowhere." },
    { en: 'a blessing in disguise', pt: 'há males que vêm para bem', ex: "Missing the train was a blessing in disguise." },
    { en: 'no way', pt: 'não acredito!', ex: "No way! That's amazing!" }
  ],
  pics: [
    { en: 'an airplane', pt: 'um avião', img: 'Airplane' },
    { en: 'a departure', pt: 'uma decolagem', img: 'Airplane departure' },
    { en: 'luggage', pt: 'bagagem', img: 'Luggage' },
    { en: 'passport control', pt: 'controle de passaporte', img: 'Passport control' },
    { en: 'a desert island', pt: 'uma ilha deserta', img: 'Desert island' },
    { en: 'a storm', pt: 'uma tempestade', img: 'Cloud with lightning and rain' },
    { en: 'a volcano', pt: 'um vulcão', img: 'Volcano' },
    { en: 'a hut', pt: 'uma cabana', img: 'Hut' }
  ],
  fill: [
    { s: 'All of a ___, the flight was cancelled.', a: 'sudden' },
    { s: 'It ___ out my bag was on another plane.', a: 'turns' },
    { s: 'To cut a long story ___, we stayed the night.', a: 'short' },
    { s: '___, where was I?', a: 'Anyway' },
    { s: 'We were ___ at the airport for two days.', a: 'stranded' },
    { s: 'My suitcase went ___ in Madrid.', a: 'missing' },
    { s: 'It was a blessing in ___.', a: 'disguise' }
  ],
  reading: {
    title: 'The worst trip of my life (and why I\'d do it again)',
    paras: [
      "Everyone has a travel disaster story, but mine starts better than most. I'd booked a cheap flight to Iceland to see the northern lights. Two hours before landing, the pilot announced that a volcano had erupted and the airport was closed. We were diverted to a small town in Scotland, where nobody had expected a planeload of confused tourists.",
      "It turned out that every hotel in town was full. A local school opened its gym for us, and two hundred strangers spent the night on exercise mats. Then, all of a sudden, the lights went out. A storm had cut the power across the whole region.",
      "And this is the part I'll never forget. Somebody found candles, someone else had a guitar, and a group of retired teachers from Canada started organizing games. By midnight, people from twelve countries were singing together in the dark. A local baker brought fresh bread at dawn, refusing any money.",
      "To cut a long story short, I never saw the northern lights. I reached Iceland four days later, when it was time to fly home. But when people ask about my best trip, that's still the one I talk about. It was a nightmare, a blessing in disguise and, somehow, the best night of my travels."
    ],
    gloss: { 'erupted': 'entrou em erupção', 'diverted': 'desviado', 'planeload': 'avião lotado', 'exercise mats': 'colchonetes', 'retired': 'aposentados', 'at dawn': 'ao amanhecer' },
    qs: [
      { q: 'Why couldn\'t the plane land in Iceland?', opts: ['Bad weather', 'A volcano erupted and the airport closed', 'A strike', 'A technical problem'], a: 1 },
      { q: 'Where did the passengers spend the night?', opts: ['In hotels', 'In a school gym', 'At the airport', 'On the plane'], a: 1 },
      { q: 'What happened when the lights went out?', opts: ['People panicked', 'People sang, played games and connected', 'Everyone slept', 'They left the school'], a: 1 },
      { q: 'Did the writer see the northern lights?', opts: ['Yes, on the first night', 'No, never', 'Yes, from Scotland', 'Yes, four days later'], a: 1 }
    ]
  },
  listening: {
    kind: 'dialogue', place: 'Amigos contando histórias de viagem em um bar',
    lines: [
      { s: 'Tom', v: 'en-GB-RyanNeural', t: "Did I ever tell you about the time I ended up in the wrong country?" },
      { s: 'Ana', v: 'en-US-AvaNeural', t: "No way! The wrong country? What happened?" },
      { s: 'Tom', v: 'en-GB-RyanNeural', t: "So, I'm in Vienna, right? And I'm taking an overnight train to Prague. I fall asleep, and the next thing I know, it's morning, and everyone's speaking Hungarian." },
      { s: 'Ana', v: 'en-US-AvaNeural', t: "You're kidding! How?" },
      { s: 'Tom', v: 'en-GB-RyanNeural', t: "It turns out the train splits in two in the middle of the night. Half goes to Prague, half goes to Budapest. And guess which half I was in?" },
      { s: 'Ana', v: 'en-US-AvaNeural', t: "Oh no! What did you do?" },
      { s: 'Tom', v: 'en-GB-RyanNeural', t: "Well, I was going to buy a ticket straight back. But then I thought, I'm already here. To cut a long story short, I stayed in Budapest for a week. And that's where I met Sara." },
      { s: 'Ana', v: 'en-US-AvaNeural', t: "Wait, your wife Sara? That's amazing! So falling asleep on the train was a blessing in disguise." },
      { s: 'Tom', v: 'en-GB-RyanNeural', t: "Exactly. Best mistake I ever made." }
    ],
    qs: [
      { q: 'Where was Tom trying to go?', opts: ['Budapest', 'Prague', 'Vienna', 'Berlin'], a: 1 },
      { q: 'What happened while he was asleep?', opts: ['His bag was stolen', 'The train split, and his half went to Budapest', 'The train broke down', 'He missed his stop'], a: 1 },
      { q: 'How long did Tom stay in Budapest?', opts: ['One night', 'A week', 'A month', 'A year'], a: 1 },
      { q: 'Who did Tom meet in Budapest?', opts: ['An old friend', 'Sara, his future wife', 'A famous person', 'His boss'], a: 1 }
    ]
  },
  speaking: {
    shadow: [
      { text: "So I'm standing at the gate, and this guy comes up to me.", tip: "Ritmo de história: \"So...\" com pausa." },
      { text: "All of a sudden, the lights go out.", tip: "\"all of a sudden\" = ó-lo-va-SÂ-dn." },
      { text: "It turns out he was the owner.", tip: "\"turns out\" = târn-ZAUT." },
      { text: "To cut a long story short, we missed the flight.", tip: "\"cut a long\" = kâ-da-LÓNG." },
      { text: "No way! Then what happened?", tip: "Reação animada: tom sobe em way." }
    ],
    prompt: { q: 'Tell a travel story (real or invented) as if you were talking to friends. Use the narrative present, at least three discourse markers and a dramatic ending.', hints: ["so I'm standing", 'all of a sudden', 'it turns out', 'to cut a long story short'] }
  }
},

// ───────────────────────────── 89 · tema: decisões da comunidade
{
  id: 'c89', lv: 'c1', title: 'Causa e consequência em registro formal', goal: 'Due to, owing to, as a result of, consequently, thereby, hence, which led to: explicar causas e efeitos com precisão.',
  theory: `
<p>Explicar <b>por que</b> algo aconteceu e <b>o que</b> resultou disso é uma das funções mais importantes da linguagem, seja numa reunião de condomínio, numa redação ou num relatório. Na lição 43 você conheceu <i>therefore</i> e <i>as a result</i>; agora vamos muito além. Além de <i>because</i> e <i>so</i>, o inglês tem um repertório rico de conectores de causa e consequência, cada um com sua gramática e seu grau de formalidade. Debates sobre decisões da comunidade local são o cenário perfeito para praticar.</p>

<h3>1. Causa + oração</h3>
<p>Seguidos de sujeito + verbo:</p>
<ul>
<li><i>The park was closed <b>because</b> the trees were damaged.</i></li>
<li><i><b>As / Since</b> the budget was limited, the council chose the cheaper option.</i> (as/since: causa já conhecida, geralmente no início)</li>
<li><i>The meeting was postponed, <b>given that</b> few residents could attend.</i></li>
</ul>

<h3>2. Causa + substantivo</h3>
<p><b>Due to, owing to, because of, as a result of, on account of</b> são seguidos de um <b>substantivo</b> (ou -ing):</p>
<ul>
<li><i>The project was delayed <b>due to</b> a lack of funding.</i></li>
<li><i><b>Owing to</b> heavy rain, the festival was cancelled.</i> (formal)</li>
<li><i><b>As a result of</b> the protests, the plan was changed.</i></li>
<li><i><b>Thanks to</b> the volunteers, the garden was finished on time.</i> (causa positiva)</li>
</ul>
<div class="ex">❌ <i>Due to it rained, the event was cancelled.</i><br>✅ <i>Due to the rain... / Because it rained... / Due to the fact that it rained...</i></div>

<h3>3. Consequência: novas frases</h3>
<p>No início de uma nova frase, seguidos de vírgula:</p>
<table><tr><th>Conector</th><th>Registro</th><th>Exemplo</th></tr>
<tr><td>So</td><td>informal</td><td><em>The road was dangerous, so they added a crossing.</em></td></tr>
<tr><td>As a result</td><td>neutro</td><td><em>Traffic increased. <b>As a result</b>, residents complained.</em></td></tr>
<tr><td>Therefore</td><td>formal</td><td><em>The building is unsafe. <b>Therefore</b>, it must be closed.</em></td></tr>
<tr><td>Consequently</td><td>formal</td><td><em>Funding was cut. <b>Consequently</b>, the library reduced its hours.</em></td></tr>
<tr><td>Hence</td><td>muito formal</td><td><em>The area floods often; <b>hence</b> the new drainage system.</em> (hence + substantivo)</td></tr>
<tr><td>For this reason</td><td>neutro</td><td><em><b>For this reason</b>, we propose a public vote.</em></td></tr></table>

<h3>4. Thereby + -ing</h3>
<p><b>Thereby</b> (desse modo) liga uma ação ao seu resultado direto, com <b>-ing</b>:</p>
<ul>
<li><i>The council built a new bridge, <b>thereby reducing</b> travel time by half.</i></li>
<li><i>Residents organized a petition, <b>thereby forcing</b> the council to reconsider.</i></li>
</ul>
<p>Na fala, é mais natural usar <b>, which</b>: <i>...which reduced travel time by half.</i></p>

<h3>5. Verbos de causa e efeito</h3>
<ul>
<li>Causa → efeito: <i>lead to, result in, cause, bring about, trigger, give rise to</i><br><i>The new road <b>led to</b> an increase in noise.</i></li>
<li>Efeito ← causa: <i>result from, stem from, be caused by, arise from</i><br><i>The problem <b>stems from</b> poor communication.</i></li>
</ul>
<div class="ex">Cuidado: <b>result in</b> (causa → efeito) × <b>result from</b> (efeito ← causa).<br><i>Poor planning resulted in delays. / Delays resulted from poor planning.</i></div>

<h3>6. Finalidade: so that, in order to</h3>
<p>Diferente de consequência, a finalidade mostra a <b>intenção</b>:</p>
<ul>
<li><i>Speed bumps were installed <b>so that</b> children could cross safely.</i></li>
<li><i>The meeting was held online <b>in order to</b> include more residents.</i></li>
<li><i>Signs were put up <b>so as not to</b> confuse visitors.</i></li>
</ul>

<h3>7. Vocabulário de decisões comunitárias</h3>
<p><i>the local council</i> (prefeitura, câmara local), <i>a petition</i> (abaixo-assinado), <i>a public consultation</i> (consulta pública), <i>residents</i> (moradores), <i>a proposal</i> (proposta), <i>vote on</i> (votar), <i>funding</i> (verba), <i>raise an objection</i> (fazer uma objeção), <i>reach a consensus</i> (chegar a um consenso), <i>implement</i> (implementar).</p>

<h3>Resumo</h3>
<ul>
<li>Causa + oração: because, as, since, given that.</li>
<li>Causa + substantivo: due to, owing to, because of, as a result of.</li>
<li>Consequência: as a result, therefore, consequently, hence, thereby + -ing.</li>
<li>result in (→) × result from (←); so that / in order to = finalidade.</li>
</ul>`,
  say: ["The project was delayed due to a lack of funding.", "Owing to heavy rain, the festival was cancelled.", "Funding was cut. Consequently, the library reduced its hours.", "The council built a new bridge, thereby reducing travel time by half.", "Poor planning resulted in serious delays.", "Residents organized a petition so that the park would stay open."],
  vocab: [
    { en: 'due to', pt: 'devido a', ex: "The train was late due to a signal failure." },
    { en: 'owing to', pt: 'em razão de (formal)', ex: "Owing to the storm, the event was postponed." },
    { en: 'consequently', pt: 'consequentemente', ex: "Prices rose. Consequently, sales fell." },
    { en: 'thereby', pt: 'desse modo', ex: "They cut costs, thereby saving the company." },
    { en: 'hence', pt: 'daí, por isso', ex: "The road is dangerous; hence the speed limit." },
    { en: 'result in', pt: 'resultar em', ex: "The changes resulted in fewer accidents." },
    { en: 'result from', pt: 'resultar de', ex: "The flooding resulted from poor drainage." },
    { en: 'petition', pt: 'abaixo-assinado', ex: "Over five thousand people signed the petition." },
    { en: 'local council', pt: 'governo local, prefeitura', ex: "The local council approved the plan." },
    { en: 'reach a consensus', pt: 'chegar a um consenso', ex: "After hours of debate, they reached a consensus." }
  ],
  pics: [
    { en: 'a ballot box', pt: 'uma urna', img: 'Ballot box with ballot' },
    { en: 'a protest sign', pt: 'um cartaz de protesto', img: 'Placard' },
    { en: 'a megaphone', pt: 'um megafone', img: 'Megaphone' },
    { en: 'a town hall', pt: 'uma prefeitura', img: 'Classical building' },
    { en: 'a school', pt: 'uma escola', img: 'School' },
    { en: 'a post office', pt: 'uma agência dos correios', img: 'Post office' },
    { en: 'a handshake (agreement)', pt: 'um aperto de mãos (acordo)', img: 'Handshake' },
    { en: 'a seedling (new project)', pt: 'uma muda (novo projeto)', img: 'Seedling' }
  ],
  fill: [
    { s: 'The project was delayed ___ to a lack of funding.', a: 'due' },
    { s: '___ to heavy rain, the festival was cancelled.', a: 'Owing' },
    { s: 'Funding was cut. ___, the library closed early.', a: 'Consequently' },
    { s: 'They built a bridge, ___ reducing travel time.', a: 'thereby' },
    { s: 'Poor planning resulted ___ delays.', a: 'in' },
    { s: 'The flooding resulted ___ poor drainage.', a: 'from' },
    { s: 'Over five thousand people signed the ___.', a: 'petition' }
  ],
  reading: {
    title: 'The street that voted for children',
    paras: [
      "For years, Elm Road was a shortcut for drivers avoiding the main road. As a result, hundreds of cars raced past its houses every morning, and parents were afraid to let their children walk to the nearby primary school. Several minor accidents had already occurred, owing to the narrow pavements and fast traffic.",
      "In 2021, a group of parents started a petition asking the local council to close the street to through traffic during school hours. Within a month, it had been signed by nearly two thousand residents. Consequently, the council agreed to run a six-month trial.",
      "The results surprised even the organizers. Traffic on Elm Road fell by eighty percent, thereby making it safe for children to walk and cycle. The number of pupils arriving by car dropped sharply, which in turn reduced congestion around the school. Some drivers complained that traffic on nearby roads had increased, and the council adjusted traffic lights so that the main road could handle the extra cars.",
      "After a public consultation, the trial was made permanent. Local officials say the success resulted from careful listening rather than quick decisions. 'We didn't impose anything,' one councillor explained. 'Residents identified the problem, proposed the solution and helped us measure the impact. Hence the strong support.'"
    ],
    gloss: { 'shortcut': 'atalho', 'raced past': 'passavam em alta velocidade', 'through traffic': 'tráfego de passagem', 'trial': 'teste, experiência', 'congestion': 'congestionamento', 'impose': 'impor' },
    qs: [
      { q: 'Why were parents afraid on Elm Road?', opts: ['There was no school', 'Hundreds of cars used it as a shortcut', 'It was dark', 'It was flooded'], a: 1 },
      { q: 'What did the petition ask for?', opts: ['A new school', 'Closing the street to through traffic during school hours', 'More parking', 'Lower speed limits on the main road'], a: 1 },
      { q: 'What happened to traffic on Elm Road during the trial?', opts: ['It doubled', 'It fell by eighty percent', 'It stayed the same', 'It fell by ten percent'], a: 1 },
      { q: 'What did officials say the success resulted from?', opts: ['Quick decisions', 'Careful listening to residents', 'Police controls', 'A lot of money'], a: 1 }
    ]
  },
  listening: {
    kind: 'dialogue', place: 'Uma reunião de moradores',
    lines: [
      { s: 'Chair', v: 'en-GB-ThomasNeural', t: "Good evening, everyone. The first item tonight is the community garden. As you know, it was closed last month due to safety concerns." },
      { s: 'Resident', v: 'en-US-EmmaNeural', t: "Can you explain exactly what the concerns were?" },
      { s: 'Chair', v: 'en-GB-ThomasNeural', t: "Of course. The old wall at the back was damaged during the storms. Consequently, the council decided it wasn't safe to keep the garden open." },
      { s: 'Resident', v: 'en-US-EmmaNeural', t: "But the garden is really important for the older residents. Many of them have no other outdoor space." },
      { s: 'Chair', v: 'en-GB-ThomasNeural', t: "I completely agree. That's why we've applied for funding to repair the wall. Owing to the high number of requests, though, we won't hear back until March." },
      { s: 'Resident', v: 'en-US-EmmaNeural', t: "Could we open part of the garden in the meantime? The front area is far from the wall." },
      { s: 'Chair', v: 'en-GB-ThomasNeural', t: "That's a good suggestion. If we put up a temporary fence, we could reopen the front section, thereby allowing people to use most of the garden safely." },
      { s: 'Resident', v: 'en-US-EmmaNeural', t: "I'm sure volunteers would help put it up, so that it doesn't cost the council anything." },
      { s: 'Chair', v: 'en-GB-ThomasNeural', t: "Excellent. Shall we vote on the proposal? All those in favour?" }
    ],
    qs: [
      { q: 'Why was the community garden closed?', opts: ['Lack of volunteers', 'Safety concerns about a damaged wall', 'No funding', 'Complaints about noise'], a: 1 },
      { q: 'What damaged the wall?', opts: ['A car', 'The storms', 'Children', 'Old age only'], a: 1 },
      { q: 'When will they hear about the funding?', opts: ['Next week', 'In March', 'Tonight', 'Next year'], a: 1 },
      { q: 'What does the resident propose?', opts: ['Closing the garden permanently', 'Reopening the front section with a temporary fence', 'Moving the garden', 'Raising money with a party'], a: 1 }
    ]
  },
  speaking: {
    shadow: [
      { text: "The project was delayed due to a lack of funding.", tip: "\"due to a\" = DIUU-tu-a." },
      { text: "Owing to heavy rain, the event was cancelled.", tip: "\"owing to\" = OU-ing-tu." },
      { text: "Consequently, the library reduced its hours.", tip: "\"consequently\" = KÓN-si-kuent-li." },
      { text: "They built a bridge, thereby reducing travel time.", tip: "\"thereby\" = dhér-BAI." },
      { text: "Poor planning resulted in serious delays.", tip: "\"resulted in\" = ri-ZÂL-ti-din." }
    ],
    prompt: { q: 'Describe a problem in your neighbourhood, city or workplace: what caused it, what consequences it had and what could be done. Use formal cause and effect language.', hints: ['due to', 'as a result', 'consequently', 'resulted in'] }
  }
},

// ───────────────────────────── 90 · tema: balanço da jornada
{
  id: 'c90', lv: 'c1', title: 'Olhando para trás: refletindo e projetando o futuro', goal: 'Juntar tudo: looking back, I wish I had, if I could start again, what I\'ve learned is, I\'m determined to, from now on.',
  theory: `
<p>Chegamos à última lição. Ela é diferente das outras: em vez de uma estrutura nova, você vai <b>combinar</b> muito do que aprendeu para fazer algo que todo falante avançado precisa fazer bem: <b>refletir</b> sobre uma experiência e falar dos próximos passos. Pense nesta lição como uma revisão em ação, usando como tema a própria jornada de aprender inglês.</p>

<h3>1. Olhando para trás</h3>
<ul>
<li><i><b>Looking back</b>, I realize that I was too afraid of making mistakes.</i></li>
<li><i><b>In hindsight</b>, I should have started speaking much earlier.</i> (em retrospecto)</li>
<li><i><b>When I first started</b>, I couldn't understand a single song.</i></li>
<li><i><b>It's hard to believe</b> that a year ago I was nervous ordering a coffee in English.</i></li>
</ul>

<h3>2. Arrependimentos e hipóteses (lições 52, 58, 66)</h3>
<ul>
<li><i>I <b>wish I had</b> practiced speaking from day one.</i></li>
<li><i><b>If I had known</b> how useful podcasts were, I <b>would have listened</b> to them sooner.</i></li>
<li><i><b>If I had started</b> younger, I <b>would probably be</b> fluent by now.</i> (mista)</li>
<li><i><b>If I could start again</b>, I'd spend less time on grammar lists and more on conversation.</i></li>
</ul>

<h3>3. Conquistas (lições 24, 81)</h3>
<ul>
<li><i>I<b>'ve managed to</b> read three novels in English.</i></li>
<li><i>I<b>'ve been studying</b> almost every day for months.</i></li>
<li><i>For the first time, I <b>was able to</b> follow a meeting without getting lost.</i></li>
<li><i>I've finally <b>got the hang of</b> phrasal verbs.</i></li>
</ul>

<h3>4. Destacando o aprendizado principal (lição 71)</h3>
<ul>
<li><i><b>What I've learned is that</b> consistency matters more than talent.</i></li>
<li><i><b>The most important thing</b> I've discovered <b>is</b> that mistakes are part of the process.</i></li>
<li><i><b>It was</b> speaking with real people <b>that</b> made the biggest difference.</i></li>
<li><i><b>Not only</b> has my English improved, <b>but</b> I've <b>also</b> become more confident.</i> (inversão, lição 64)</li>
</ul>

<h3>5. Planos e determinação</h3>
<table><tr><th>Grau de compromisso</th><th>Exemplo</th></tr>
<tr><td>intenção</td><td><em>I'm going to watch films without subtitles.</em></td></tr>
<tr><td>determinação forte</td><td><em>I'm determined to pass the C1 exam next year.</em></td></tr>
<tr><td>compromisso</td><td><em>I've committed to speaking English for an hour every day.</em></td></tr>
<tr><td>meta com prazo</td><td><em>By this time next year, I'll have finished my first course in English.</em> (lição 44)</td></tr>
<tr><td>mudança de hábito</td><td><em>From now on, I'm going to think in English as much as possible.</em></td></tr>
<tr><td>esperança</td><td><em>I'm hoping to work abroad one day.</em></td></tr></table>

<h3>6. Expressando gratidão e incentivo</h3>
<ul>
<li><i>I couldn't have done it without...</i> (não teria conseguido sem)</li>
<li><i>I'm really grateful for...</i></li>
<li><i>Keep it up! / Stick with it! / You've come a long way!</i> (você evoluiu muito)</li>
<li><i>Practice makes perfect. / Little by little.</i></li>
</ul>

<h3>7. Uma reflexão completa</h3>
<div class="ex"><i>Looking back, it's hard to believe how much has changed. When I first started, I couldn't understand native speakers at all. In hindsight, I wish I had started speaking earlier instead of waiting until I felt "ready". What I've learned is that you're never completely ready. I've managed to have real conversations, I've read books I would never have imagined reading, and I've stopped translating everything in my head. From now on, I'm determined to keep practicing every day, and by this time next year, I hope I'll have reached a level where English feels like a second home.</i></div>

<h3>8. E agora?</h3>
<p>Terminar este curso não é o fim do aprendizado. Algumas sugestões para continuar evoluindo:</p>
<ul>
<li>Volte às lições que pareceram mais difíceis: <b>revisar é aprender de novo, mais fundo</b>.</li>
<li>Consuma conteúdo de que você realmente gosta em inglês: séries, podcasts, livros, jogos.</li>
<li>Fale sempre que puder, mesmo com erros. Fluência vem do uso, não da perfeição.</li>
<li>Escreva um pequeno diário em inglês: três frases por dia já fazem diferença.</li>
</ul>

<h3>Resumo</h3>
<ul>
<li>Olhar para trás: looking back, in hindsight, when I first started.</li>
<li>Arrependimentos: I wish I had, if I had known, if I could start again.</li>
<li>Conquistas: I've managed to, I was able to, I've got the hang of.</li>
<li>Futuro: I'm determined to, from now on, by this time next year I'll have...</li>
</ul>`,
  say: ["Looking back, I realize I was too afraid of making mistakes.", "In hindsight, I should have started speaking much earlier.", "What I've learned is that consistency matters more than talent.", "I've managed to have real conversations in English.", "From now on, I'm determined to practice every day.", "By this time next year, I hope I'll have reached a new level."],
  vocab: [
    { en: 'looking back', pt: 'olhando para trás', ex: "Looking back, it was the best decision I made." },
    { en: 'in hindsight', pt: 'em retrospecto', ex: "In hindsight, I should have asked for help." },
    { en: 'come a long way', pt: 'evoluir muito', ex: "Your English has come a long way!" },
    { en: 'be determined to', pt: 'estar determinado a', ex: "I'm determined to finish the course." },
    { en: 'from now on', pt: 'de agora em diante', ex: "From now on, I'll speak English at work." },
    { en: 'commit to', pt: 'comprometer-se com', ex: "I've committed to studying every morning." },
    { en: 'keep it up', pt: 'continue assim', ex: "Great progress! Keep it up!" },
    { en: 'stick with it', pt: 'persistir', ex: "It's hard at first, but stick with it." },
    { en: "couldn't have done it without", pt: 'não teria conseguido sem', ex: "I couldn't have done it without my teacher." },
    { en: 'little by little', pt: 'pouco a pouco', ex: "Little by little, it gets easier." }
  ],
  pics: [
    { en: 'a graduation cap', pt: 'um capelo de formatura', img: 'Graduation cap' },
    { en: 'a trophy', pt: 'um troféu', img: 'Trophy' },
    { en: 'a medal', pt: 'uma medalha', img: 'Sports medal' },
    { en: 'footprints (the journey)', pt: 'pegadas (a jornada)', img: 'Footprints' },
    { en: 'a finish flag', pt: 'uma bandeira de chegada', img: 'Chequered flag' },
    { en: 'a sunrise (a new start)', pt: 'um nascer do sol (recomeço)', img: 'Sunrise' },
    { en: 'a rainbow', pt: 'um arco-íris', img: 'Rainbow' },
    { en: 'a compass', pt: 'uma bússola', img: 'Compass' }
  ],
  fill: [
    { s: '___ back, I realize I was too afraid of mistakes.', a: 'Looking' },
    { s: 'In ___, I should have started speaking earlier.', a: 'hindsight' },
    { s: 'I wish I ___ practiced speaking from day one.', a: 'had' },
    { s: "I've ___ to have real conversations in English.", a: 'managed' },
    { s: "From now ___, I'm going to think in English.", a: 'on' },
    { s: "I'm ___ to pass the exam next year.", a: 'determined' },
    { s: 'Your English has come a long ___!', a: 'way' }
  ],
  reading: {
    title: 'What fluent speakers did differently',
    paras: [
      "When researchers interviewed adults who had reached a high level in a foreign language, they expected to find a common method: a particular textbook, app or school. Instead, they found something more interesting. The methods varied enormously, but the attitudes were remarkably similar.",
      "First, almost all of them had accepted making mistakes early on. Looking back, many said that their biggest breakthrough came not from studying more, but from deciding to speak before they felt ready. As one put it, 'I wish someone had told me that sounding silly is part of the process, not a sign of failure.'",
      "Second, they had connected the language to things they genuinely loved. Some learned through football commentary, others through cooking videos, video games or novels. Because they enjoyed it, they kept going long after the initial excitement had faded. In hindsight, several said, finding pleasure in the language was more important than finding the perfect course.",
      "Finally, they were patient. Nobody described a sudden moment of fluency. Instead, they spoke of small victories: understanding a joke, dreaming in the language, being mistaken for a local on the phone. Little by little, these moments added up. Their advice for learners was almost always the same: keep going, even on the days when it feels like nothing is changing, because that is usually when the most is changing."
    ],
    gloss: { 'varied enormously': 'variavam enormemente', 'remarkably': 'notavelmente', 'breakthrough': 'grande avanço', 'genuinely': 'genuinamente', 'faded': 'desaparecido', 'added up': 'se somaram' },
    qs: [
      { q: 'What did researchers find among fluent speakers?', opts: ['They all used the same app', 'Their methods varied, but their attitudes were similar', 'They all lived abroad', 'They started as children'], a: 1 },
      { q: 'What was the biggest breakthrough for many of them?', opts: ['Studying more grammar', 'Deciding to speak before they felt ready', 'Buying a better textbook', 'Taking an exam'], a: 1 },
      { q: 'Why did connecting the language to things they loved help?', opts: ['It was cheaper', 'They enjoyed it, so they kept going', 'It was faster', 'Teachers recommended it'], a: 1 },
      { q: 'How did they describe reaching fluency?', opts: ['As a sudden moment', 'As many small victories that added up', 'As impossible', 'As boring'], a: 1 }
    ]
  },
  listening: {
    kind: 'dialogue', place: 'Uma aluna conversando com o professor no fim do curso',
    lines: [
      { s: 'Teacher', v: 'en-GB-RyanNeural', t: "So, this is our last session. How do you feel, looking back on the whole course?" },
      { s: 'Student', v: 'en-US-AvaNeural', t: "Honestly, it's hard to believe how much has changed. When I first started, I couldn't follow a conversation if people spoke fast." },
      { s: 'Teacher', v: 'en-GB-RyanNeural', t: "And now?" },
      { s: 'Student', v: 'en-US-AvaNeural', t: "Now I watch series without subtitles, and last week I managed to give a presentation at work in English. I was terrified, but it went well." },
      { s: 'Teacher', v: 'en-GB-RyanNeural', t: "That's fantastic. You've come a long way. Is there anything you'd do differently?" },
      { s: 'Student', v: 'en-US-AvaNeural', t: "In hindsight, I wish I had started speaking sooner. I spent months just doing grammar exercises because I was afraid of making mistakes." },
      { s: 'Teacher', v: 'en-GB-RyanNeural', t: "That's very common. So, what's next for you?" },
      { s: 'Student', v: 'en-US-AvaNeural', t: "I'm determined to take the C1 exam next year. And from now on, I'm going to join a conversation group every week, so I don't lose what I've learned." },
      { s: 'Teacher', v: 'en-GB-RyanNeural', t: "That sounds like a great plan. Keep it up, and stick with it, even when it feels slow." },
      { s: 'Student', v: 'en-US-AvaNeural', t: "I will. And thank you. I really couldn't have done it without these lessons." }
    ],
    qs: [
      { q: 'What couldn\'t the student do at the beginning?', opts: ['Read', 'Follow fast conversations', 'Write emails', 'Pronounce words'], a: 1 },
      { q: 'What did she manage to do last week?', opts: ['Pass an exam', 'Give a presentation at work in English', 'Travel abroad', 'Read a novel'], a: 1 },
      { q: 'What does she wish she had done differently?', opts: ['Studied more grammar', 'Started speaking sooner', 'Taken a different course', 'Watched fewer series'], a: 1 },
      { q: 'What is she going to do from now on?', opts: ['Stop studying', 'Join a conversation group every week', 'Move abroad', 'Teach English'], a: 1 }
    ]
  },
  speaking: {
    shadow: [
      { text: "Looking back, it's hard to believe how much has changed.", tip: "Tom reflexivo; pausa depois de \"Looking back\"." },
      { text: "In hindsight, I should have started speaking earlier.", tip: "\"hindsight\" = HAIND-sait." },
      { text: "What I've learned is that consistency matters.", tip: "Frase clivada: ênfase em consistency." },
      { text: "From now on, I'm determined to practice every day.", tip: "\"determined\" = di-TÂR-mind." },
      { text: "Your English has come a long way!", tip: "\"come a long way\" = kâ-ma-lóng-UEI." }
    ],
    prompt: { q: 'Reflect on your English learning journey: where you started, what you have achieved, what you wish you had done differently and what you are determined to do next.', hints: ['looking back', 'I wish I had', "I've managed to", "I'm determined to"] }
  }
}
]);
