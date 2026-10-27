// Curso diário — lições 21 a 25 (temas de fundo anotados só no código).
window.COURSE = (window.COURSE || []).concat([

// ───────────────────────────── 21 · tema: combinar programas com amigos
{
  id: 'c21', lv: 'b1', title: 'Fazendo sugestões e combinando planos', goal: "Let's, how about, why don't we, shall we: sugerir, aceitar e recusar convites com naturalidade.",
  theory: `
<p>Combinar um programa parece simples, mas envolve várias pequenas habilidades: sugerir uma ideia, reagir à sugestão do outro, recusar sem ser grosseiro e fechar os detalhes (dia, hora, lugar). Em inglês, cada uma dessas etapas tem estruturas próprias, e algumas delas pedem formas verbais específicas que confundem quem traduz do português.</p>

<h3>1. As estruturas de sugestão e o que vem depois</h3>
<table><tr><th>Estrutura</th><th>Depois vem</th><th>Exemplo</th></tr>
<tr><td>Let's</td><td>verbo base</td><td><em>Let's go to the beach on Saturday.</em></td></tr>
<tr><td>Shall we</td><td>verbo base</td><td><em>Shall we order a pizza?</em></td></tr>
<tr><td>Why don't we</td><td>verbo base</td><td><em>Why don't we watch a movie tonight?</em></td></tr>
<tr><td>How about / What about</td><td>-ing ou substantivo</td><td><em>How about going bowling? / What about Friday?</em></td></tr>
<tr><td>We could</td><td>verbo base</td><td><em>We could try that new Thai restaurant.</em></td></tr>
<tr><td>Do you feel like</td><td>-ing</td><td><em>Do you feel like going out?</em></td></tr>
<tr><td>Do you fancy (UK)</td><td>-ing ou substantivo</td><td><em>Do you fancy a coffee?</em></td></tr></table>
<div class="ex">O erro mais comum: ❌ <i>How about go to the cinema?</i> ✅ <i>How about going to the cinema?</i> Depois de how about e what about, sempre <b>-ing</b>.</div>

<h3>2. Aceitando</h3>
<ul>
<li><i>Sounds good! / Sounds great!</i></li>
<li><i>Good idea. / Why not?</i></li>
<li><i>I'd love to.</i> (para convites)</li>
<li><i>Count me in!</i> (Pode contar comigo!)</li>
<li><i>I'm up for it.</i> (Topo!)</li>
</ul>

<h3>3. Recusando com educação</h3>
<p>Um "no" seco soa rude. A fórmula natural tem três partes: <b>agradecer ou lamentar + desculpa + alternativa</b>:</p>
<div class="ex"><i>I'd love to, but I've got a family dinner on Saturday. How about Sunday instead?</i></div>
<ul>
<li><i>Sorry, I can't make it. / I'm busy that day.</i></li>
<li><i>I'm not really in the mood tonight.</i></li>
<li><i>Maybe another time? / Can I take a rain check?</i> (Fica para outra vez?)</li>
<li><i>I'm not a big fan of horror movies. What about a comedy?</i></li>
</ul>

<h3>4. Fechando os detalhes</h3>
<table><tr><th>Para</th><th>Frases</th></tr>
<tr><td>Hora</td><td><em>What time works for you? / Is seven okay?</em></td></tr>
<tr><td>Lugar</td><td><em>Where should we meet? / Let's meet outside the station.</em></td></tr>
<tr><td>Confirmar</td><td><em>So, Friday at eight at Mario's. See you there!</em></td></tr>
<tr><td>Mudar</td><td><em>Can we push it back to eight thirty?</em> (adiar um pouco)</td></tr>
<tr><td>Cancelar</td><td><em>Something came up. Can we reschedule?</em></td></tr></table>
<p><b>Something came up</b> (surgiu um imprevisto) é a desculpa universal em inglês: educada e sem detalhes.</p>

<h3>5. Planos combinados: o presente contínuo</h3>
<p>Como você viu na lição sobre futuro, quando algo já está combinado usamos o <b>presente contínuo</b>: <i>We're meeting at seven. Are you coming to the party?</i> Para perguntar se a pessoa está livre: <i>Are you doing anything on Saturday? / Are you free on Friday night?</i></p>

<h3>6. Verbos de programa</h3>
<ul>
<li><b>hang out</b> (sair junto, passar tempo): <i>We just hung out at my place.</i></li>
<li><b>go out</b> (sair à noite): <i>Do you want to go out tonight?</i></li>
<li><b>stay in</b> (ficar em casa): <i>I'd rather stay in and watch something.</i></li>
<li><b>grab a bite / grab a drink</b> (comer algo rápido / tomar algo)</li>
<li><b>catch a movie</b> (pegar um cinema)</li>
</ul>

<h3>Resumo</h3>
<ul>
<li>Let's / shall we / why don't we / we could + verbo base.</li>
<li>How about / what about / feel like + <b>-ing</b>.</li>
<li>Recusar: lamentar + desculpa + alternativa.</li>
<li>Combinados: presente contínuo; imprevisto: <b>something came up</b>.</li>
</ul>`,
  say: ["How about going bowling on Saturday?", "Why don't we grab a bite after work?", "I'd love to, but I've got a family dinner. How about Sunday instead?", "Sounds great! Count me in.", "What time works for you? Is seven okay?", "Sorry, something came up. Can we reschedule?"],
  vocab: [
    { en: 'how about', pt: 'que tal', ex: "How about going to the beach tomorrow?" },
    { en: 'count me in', pt: 'pode contar comigo', ex: "A barbecue on Sunday? Count me in!" },
    { en: "can't make it", pt: 'não vou conseguir ir', ex: "Sorry, I can't make it on Friday." },
    { en: 'rain check', pt: 'fica para outra vez', ex: "Can I take a rain check on dinner?" },
    { en: 'something came up', pt: 'surgiu um imprevisto', ex: "Something came up at work, so I'll be late." },
    { en: 'hang out', pt: 'sair junto, passar tempo', ex: "We usually hang out at the park on weekends." },
    { en: 'stay in', pt: 'ficar em casa', ex: "I'm tired. Let's just stay in tonight." },
    { en: 'grab a bite', pt: 'comer algo rápido', ex: "Do you want to grab a bite after class?" },
    { en: 'up for it', pt: 'a fim, disposto', ex: "Karaoke? I'm up for it!" },
    { en: 'works for you', pt: 'fica bom para você', ex: "Does Saturday morning work for you?" }
  ],
  pics: [
    { en: 'popcorn', pt: 'pipoca', img: 'Popcorn' },
    { en: 'pizza', pt: 'pizza', img: 'Pizza' },
    { en: 'bowling', pt: 'boliche', img: 'Bowling' },
    { en: 'a ticket', pt: 'um ingresso', img: 'Ticket' },
    { en: 'a party', pt: 'uma festa', img: 'Party popper' },
    { en: 'the beach', pt: 'a praia', img: 'Beach with umbrella' },
    { en: 'camping', pt: 'acampar, acampamento', img: 'Camping' },
    { en: 'a picnic basket', pt: 'uma cesta de piquenique', img: 'Basket' }
  ],
  fill: [
    { s: 'How about ___ to the cinema tonight?', a: 'going' },
    { s: "Why don't we ___ a pizza?", a: 'order' },
    { s: 'A barbecue on Sunday? Count me ___!', a: 'in' },
    { s: "Sorry, I can't make ___ on Friday.", a: 'it' },
    { s: "Something came ___, so I can't go.", a: 'up' },
    { s: "I'm tired. Let's just stay ___ tonight.", a: 'in' },
    { s: 'Does seven o\'clock ___ for you?', a: 'work' }
  ],
  reading: {
    title: 'Why making plans is harder than ever',
    paras: [
      "Ask a group of friends to choose a day for dinner and watch what happens. One can't do Tuesdays, another works late on Thursdays, someone is traveling next week and someone else will 'see how they feel'. Two weeks later, the dinner still hasn't happened.",
      "Psychologists have a name for part of this problem: the culture of keeping options open. With so many events, invitations and messages competing for our time, many people avoid committing in case something better comes up. The result is a lot of 'maybe' and very few actual meetings.",
      "Some friend groups have found a simple solution: a fixed date. The first Friday of every month, for example, is always dinner night, at the same place, no discussion needed. Whoever can come, comes. It sounds rigid, but it removes the exhausting negotiation and makes the meeting a habit.",
      "Another trick is to make specific suggestions instead of vague ones. 'We should hang out sometime' almost never leads anywhere. 'How about pizza at my place on Saturday at seven?' gets a clear yes or no. Specific plans are easier to accept, and much harder to forget."
    ],
    gloss: { 'keeping options open': 'manter as opções em aberto', 'competing for': 'competindo por', 'committing': 'se comprometer', 'in case': 'caso, para o caso de', 'rigid': 'rígido', 'leads anywhere': 'leva a algum lugar' },
    qs: [
      { q: 'What usually happens when friends try to choose a date?', opts: ['They agree quickly', 'The dinner often doesn\'t happen for weeks', 'They always choose Friday', 'They meet online'], a: 1 },
      { q: 'What is "the culture of keeping options open"?', opts: ['Inviting everyone', 'Avoiding commitment in case something better appears', 'Changing restaurants often', 'Working late'], a: 1 },
      { q: 'What solution have some groups found?', opts: ['A fixed monthly date', 'Meeting online only', 'Paying in advance', 'Inviting fewer people'], a: 0 },
      { q: 'Why are specific suggestions better?', opts: ['They are more polite', 'They get a clear yes or no', 'They are cheaper', 'They include more people'], a: 1 }
    ]
  },
  listening: {
    kind: 'dialogue', place: 'Amigos combinando o fim de semana',
    lines: [
      { s: 'Mia', v: 'en-US-EmmaNeural', t: "Hey! Are you doing anything this Saturday?" },
      { s: 'Leo', v: 'en-US-BrianNeural', t: "Not really. Why, what did you have in mind?" },
      { s: 'Mia', v: 'en-US-EmmaNeural', t: "A few of us are thinking of going camping by the lake. Do you feel like coming?" },
      { s: 'Leo', v: 'en-US-BrianNeural', t: "Camping? I'd love to, but it's supposed to rain all weekend." },
      { s: 'Mia', v: 'en-US-EmmaNeural', t: "Ugh, really? Okay, plan B. Why don't we go bowling and then grab a pizza?" },
      { s: 'Leo', v: 'en-US-BrianNeural', t: "Now that I'm up for. What time works for you?" },
      { s: 'Mia', v: 'en-US-EmmaNeural', t: "How about meeting at the bowling alley at six?" },
      { s: 'Leo', v: 'en-US-BrianNeural', t: "Could we push it back to seven? I'm helping my brother move in the afternoon." },
      { s: 'Mia', v: 'en-US-EmmaNeural', t: "Sure, seven is fine. I'll tell the others. Shall we invite Sam too?" },
      { s: 'Leo', v: 'en-US-BrianNeural', t: "Definitely. But if he's late again, he's paying for the pizza." }
    ],
    qs: [
      { q: 'What was the first plan?', opts: ['Going to the cinema', 'Camping by the lake', 'A dinner party', 'Going to the beach'], a: 1 },
      { q: 'Why does Leo say no to the first plan?', opts: ['He is busy', 'It is supposed to rain', 'He hates camping', 'It is too expensive'], a: 1 },
      { q: 'Why does Leo want to meet at seven?', opts: ['He works until six', 'He is helping his brother move', 'He has a date', 'The bowling alley opens at seven'], a: 1 },
      { q: 'What does Leo say about Sam?', opts: ['He can\'t come', 'If he is late, he pays for the pizza', 'He is driving', 'He is bringing a friend'], a: 1 }
    ]
  },
  speaking: {
    shadow: [
      { text: "How about going bowling this weekend?", tip: "\"How about\" = hau-a-BAUT; ênfase no final." },
      { text: "Why don't we grab a bite after work?", tip: "\"Why don't we\" = wai-doun-wi, rápido." },
      { text: "I'd love to, but I can't make it on Friday.", tip: "Pausa depois de \"love to\"; tom simpático." },
      { text: "Sounds great! Count me in.", tip: "Animado: a voz sobe em \"great\"." },
      { text: "Can we push it back to eight?", tip: "\"push it back\" liga: pushitbék." }
    ],
    prompt: { q: 'Invite a friend to do something this weekend. Make a suggestion, react to an imaginary "no", suggest an alternative and agree on a time and place.', hints: ['how about', "why don't we", "I'd love to, but", 'what time works for you'] }
  }
},

// ───────────────────────────── 22 · tema: filmes e séries
{
  id: 'c22', lv: 'b1', title: 'Bored ou boring? Adjetivos que enganam', goal: 'Adjetivos com -ed (como você se sente) e -ing (como a coisa é), e como dar opiniões sobre filmes e séries.',
  theory: `
<p>Uma das frases que mais causam risadas involuntárias em inglês é "I'm boring" dita por quem queria dizer "estou entediado". A diferença entre <b>bored</b> e <b>boring</b> parece pequena, mas muda tudo: um descreve o que você <b>sente</b>, o outro descreve o que a coisa (ou a pessoa) <b>é</b>. Nesta lição você vai dominar esses pares e aprender a opinar sobre filmes e séries como um nativo.</p>

<h3>1. A regra: -ed sente, -ing causa</h3>
<table><tr><th>-ed: como a pessoa se sente</th><th>-ing: o que causa o sentimento</th></tr>
<tr><td><em>I was bored during the movie.</em></td><td><em>The movie was boring.</em></td></tr>
<tr><td><em>I'm interested in documentaries.</em></td><td><em>This documentary is interesting.</em></td></tr>
<tr><td><em>She was frightened.</em></td><td><em>It was a frightening scene.</em></td></tr>
<tr><td><em>We were disappointed with the ending.</em></td><td><em>The ending was disappointing.</em></td></tr></table>
<div class="ex">Cuidado: <b>I'm boring</b> significa "eu sou chato". <b>I'm bored</b> é "estou entediado". Da mesma forma, <i>I'm confusing</i> quer dizer "eu sou confuso" (deixo os outros confusos), e <i>I'm confused</i> é "estou confuso".</div>

<h3>2. Os pares mais usados</h3>
<table><tr><th>-ed</th><th>-ing</th><th>Sentido</th></tr>
<tr><td>excited</td><td>exciting</td><td>animado / empolgante</td></tr>
<tr><td>amazed</td><td>amazing</td><td>impressionado / incrível</td></tr>
<tr><td>surprised</td><td>surprising</td><td>surpreso / surpreendente</td></tr>
<tr><td>confused</td><td>confusing</td><td>confuso / confuso (que confunde)</td></tr>
<tr><td>tired</td><td>tiring</td><td>cansado / cansativo</td></tr>
<tr><td>annoyed</td><td>annoying</td><td>irritado / irritante</td></tr>
<tr><td>moved</td><td>moving</td><td>emocionado / tocante</td></tr>
<tr><td>shocked</td><td>shocking</td><td>chocado / chocante</td></tr></table>
<p>Repare na preposição que costuma vir depois do -ed: <i>interested <b>in</b>, excited <b>about</b>, bored <b>with</b>, disappointed <b>with/by</b>, surprised <b>by/at</b></i>.</p>

<h3>3. Indo além de "good" e "bad"</h3>
<p>Para opinar com mais cor, troque os adjetivos básicos por outros mais fortes:</p>
<table><tr><th>Básico</th><th>Mais expressivo</th></tr>
<tr><td>very good</td><td><em>brilliant, gripping</em> (prende a atenção)<em>, a must-see</em></td></tr>
<tr><td>very bad</td><td><em>awful, terrible, a waste of time</em></td></tr>
<tr><td>very funny</td><td><em>hilarious</em></td></tr>
<tr><td>very sad</td><td><em>heartbreaking</em></td></tr>
<tr><td>very scary</td><td><em>terrifying</em></td></tr></table>
<p>Com adjetivos "extremos" (amazing, awful, hilarious), não use <b>very</b>. Use <b>absolutely</b> ou <b>really</b>: ❌ <i>very hilarious</i>, ✅ <i>absolutely hilarious</i>.</p>

<h3>4. Falando de filmes e séries</h3>
<ul>
<li><i>It's about a detective who...</i> (A história é sobre...)</li>
<li><i>It's set in Tokyo in the 1980s.</i> (A história se passa em...)</li>
<li><i>It stars Emma Stone.</i> (É estrelado por...)</li>
<li><i>The plot is a bit slow, but the acting is great.</i></li>
<li><i>I binge-watched the whole season in two days.</i> (maratonei)</li>
<li><i>No spoilers, please!</i></li>
</ul>

<h3>5. Recomendando ou não</h3>
<ul>
<li><i>You have to watch it. It's a must-see.</i></li>
<li><i>It's worth watching, especially the second season.</i></li>
<li><i>I wouldn't bother. It's really overrated.</i> (superestimado)</li>
<li><i>It didn't live up to the hype.</i> (não correspondeu às expectativas)</li>
</ul>

<h3>6. Gêneros e pessoas por trás do filme</h3>
<table><tr><th>Gênero</th><th>Em inglês</th></tr>
<tr><td>comédia romântica</td><td><em>a romantic comedy / a rom-com</em></td></tr>
<tr><td>suspense</td><td><em>a thriller</em></td></tr>
<tr><td>terror</td><td><em>a horror movie</em></td></tr>
<tr><td>ficção científica</td><td><em>a sci-fi movie</em></td></tr>
<tr><td>desenho animado</td><td><em>an animated movie / a cartoon</em></td></tr>
<tr><td>documentário</td><td><em>a documentary</em></td></tr></table>
<p>Pessoas: <b>the director</b> (diretor), <b>the cast</b> (elenco), <b>the main character</b> (protagonista), <b>the screenplay</b> (roteiro). E um falso cognato importante: <b>novel</b> é romance (livro); a novela de TV é <b>soap opera</b>.</p>
<div class="ex">Dica de conversa: em vez de só dizer <i>It was good</i>, explique por quê: <i>It was gripping because the main character was so unpredictable.</i> Uma opinião com motivo sempre gera mais conversa.</div>

<h3>Resumo</h3>
<ul>
<li><b>-ed</b> = como alguém se sente; <b>-ing</b> = como a coisa é.</li>
<li>bored/boring, interested/interesting, confused/confusing.</li>
<li>Adjetivos extremos com <b>absolutely</b>, não very.</li>
<li>about, set in, stars, binge-watch, worth watching, overrated.</li>
</ul>`,
  say: ["I was so bored that I fell asleep halfway through.", "The ending was really disappointing.", "It's set in Tokyo, and the acting is brilliant.", "I binge-watched the whole season in two days.", "It's absolutely hilarious. You have to watch it.", "Honestly, I wouldn't bother. It's really overrated."],
  vocab: [
    { en: 'bored', pt: 'entediado', ex: "I got bored after the first episode." },
    { en: 'boring', pt: 'chato, entediante', ex: "The second half of the movie was really boring." },
    { en: 'gripping', pt: 'envolvente, que prende', ex: "It's a gripping thriller from start to finish." },
    { en: 'binge-watch', pt: 'maratonar', ex: "We binge-watched the whole series last weekend." },
    { en: 'plot', pt: 'enredo, trama', ex: "The plot was too complicated for me." },
    { en: 'set in', pt: 'que se passa em', ex: "The story is set in Paris in the 1920s." },
    { en: 'overrated', pt: 'superestimado', ex: "Everyone loves it, but I think it's overrated." },
    { en: 'worth watching', pt: 'vale a pena assistir', ex: "The documentary is definitely worth watching." },
    { en: 'hilarious', pt: 'hilário', ex: "The new comedy is absolutely hilarious." },
    { en: 'disappointing', pt: 'decepcionante', ex: "The final season was a bit disappointing." }
  ],
  pics: [
    { en: 'a cinema', pt: 'um cinema', img: 'Cinema' },
    { en: 'a movie camera', pt: 'uma câmera de filmagem', img: 'Movie camera' },
    { en: 'a television', pt: 'uma televisão', img: 'Television' },
    { en: 'a ghost', pt: 'um fantasma', img: 'Ghost' },
    { en: 'a film', pt: 'um filme (rolo)', img: 'Film frames' },
    { en: 'theater', pt: 'teatro', img: 'Performing arts' },
    { en: 'tickets', pt: 'ingressos', img: 'Admission tickets' },
    { en: 'a clapperboard', pt: 'uma claquete', img: 'Clapper board' }
  ],
  fill: [
    { s: "I was so ___ that I fell asleep.", a: 'bored' },
    { s: 'The movie was really ___. Nothing happened.', a: 'boring' },
    { s: "I'm really ___ in documentaries about space.", a: 'interested' },
    { s: 'The story is ___ in London in the 1990s.', a: 'set' },
    { s: 'We ___ the whole season in one weekend.', a: 'binge-watched' },
    { s: "Everyone loves it, but I think it's ___.", a: 'overrated' },
    { s: 'The documentary is definitely worth ___.', a: 'watching' }
  ],
  reading: {
    title: 'The end of the weekly episode',
    paras: [
      "Not long ago, watching a series meant waiting. A new episode came out once a week, at the same time, and everyone talked about it the next morning. If you missed it, you had to wait for a repeat or ask a friend what happened.",
      "Streaming changed everything. Many platforms now release entire seasons in a single day, and binge-watching has become normal. It's not unusual for people to finish a ten-episode series in one weekend, sometimes in one very long night.",
      "This freedom has clear advantages: you watch when you want, at your own pace, without adverts. But some critics argue that something was lost. When everyone binges at different speeds, there's no shared moment, and the fear of spoilers makes conversations awkward.",
      "Interestingly, some platforms have started going back to weekly releases for their biggest shows. Their reasoning is simple: a series that people discuss every week for two months stays in the news far longer than one that everyone finishes in three days and then forgets."
    ],
    gloss: { 'repeat': 'reprise', 'release': 'lançar', 'at your own pace': 'no seu ritmo', 'adverts': 'comerciais', 'shared moment': 'momento compartilhado', 'awkward': 'constrangedor' },
    qs: [
      { q: 'How did people watch series in the past?', opts: ['All at once', 'One episode a week', 'Only on weekends', 'Online'], a: 1 },
      { q: 'What did streaming make normal?', opts: ['Weekly episodes', 'Binge-watching', 'Watching with adverts', 'Watching at the cinema'], a: 1 },
      { q: 'What do some critics say was lost?', opts: ['Picture quality', 'The shared moment of watching together', 'Cheap prices', 'Long seasons'], a: 1 },
      { q: 'Why are some platforms returning to weekly releases?', opts: ['It is cheaper', 'Shows stay in the news longer', 'Viewers asked for it', 'Production is slower'], a: 1 }
    ]
  },
  listening: {
    kind: 'dialogue', place: 'Dois amigos falando de séries',
    lines: [
      { s: 'Ana', v: 'en-US-AvaNeural', t: "Have you started the new season of that detective series?" },
      { s: 'Ben', v: 'en-GB-RyanNeural', t: "I watched the first two episodes, but honestly, I got a bit bored. The plot is so slow this time." },
      { s: 'Ana', v: 'en-US-AvaNeural', t: "Really? I thought the first episode was boring too, but it gets much better. Episode four is absolutely gripping." },
      { s: 'Ben', v: 'en-GB-RyanNeural', t: "Okay, maybe I'll give it another chance. Is the ending good? No spoilers!" },
      { s: 'Ana', v: 'en-US-AvaNeural', t: "I won't say anything. Let's just say I was very surprised. And a little confused, to be honest." },
      { s: 'Ben', v: 'en-GB-RyanNeural', t: "Confused in a good way or a bad way?" },
      { s: 'Ana', v: 'en-US-AvaNeural', t: "Good, I think. I had to watch the last ten minutes twice. What are you watching instead?" },
      { s: 'Ben', v: 'en-GB-RyanNeural', t: "A documentary about deep-sea creatures. It sounds boring, but it's amazing. I binge-watched it in one night." },
      { s: 'Ana', v: 'en-US-AvaNeural', t: "Deep-sea creatures? You're full of surprises. Send me the name." }
    ],
    qs: [
      { q: 'Why did Ben stop watching the series?', opts: ['He was busy', 'He got bored with the slow plot', 'He didn\'t understand English', 'The episodes were too long'], a: 1 },
      { q: 'What does Ana say about episode four?', opts: ['It is boring', 'It is absolutely gripping', 'It is confusing', 'She didn\'t watch it'], a: 1 },
      { q: 'How did Ana feel about the ending?', opts: ['Bored', 'Surprised and a little confused', 'Angry', 'Disappointed'], a: 1 },
      { q: 'What is Ben watching instead?', opts: ['A comedy', 'A documentary about deep-sea creatures', 'A horror movie', 'A cooking show'], a: 1 }
    ]
  },
  speaking: {
    shadow: [
      { text: "I was so bored that I fell asleep.", tip: "\"bored\" = /bórd/, uma sílaba só." },
      { text: "The ending was really disappointing.", tip: "\"disappointing\" = dis-a-POIN-ting." },
      { text: "It's set in London in the nineties.", tip: "\"set in\" liga: sétin." },
      { text: "It's absolutely hilarious.", tip: "\"absolutely\" = AB-so-lut-li; ênfase no início." },
      { text: "Honestly, I think it's a bit overrated.", tip: "\"honestly\" começa com h mudo: ÓN-est-li." }
    ],
    prompt: { q: 'Talk about a movie or series you watched recently: what it is about, where it is set, how you felt watching it and whether you recommend it.', hints: ["it's about", "it's set in", 'I was', 'worth watching', 'boring / exciting'] }
  }
},

// ───────────────────────────── 23 · tema: música
{
  id: 'c23', lv: 'b2', title: 'Gostos e preferências', goal: 'Like, love, prefer, would rather e would prefer: dizer do que você gosta e o que prefere, no geral e agora.',
  theory: `
<p>Falar de gostos é uma das formas mais fáceis de criar conexão com alguém, e música é um dos assuntos favoritos para isso. Mas em inglês há uma diferença importante entre gostar <b>em geral</b> (<i>I like jazz</i>) e preferir <b>numa situação específica</b> (<i>I'd rather listen to jazz tonight</i>). Nesta lição você vai dominar <b>like, love, prefer, would like, would rather</b> e <b>would prefer</b>, cada um com sua estrutura.</p>

<h3>1. Gostos gerais: like, love, enjoy, hate</h3>
<p>Para gostos permanentes, use o presente simples. Depois desses verbos, o próximo verbo pode vir com <b>-ing</b> (mais comum) ou com <b>to</b>:</p>
<ul>
<li><i>I love listening to old records.</i></li>
<li><i>She enjoys going to live concerts.</i> (enjoy: só -ing)</li>
<li><i>I can't stand loud music in restaurants.</i> (não suporto)</li>
<li><i>I'm really into indie rock at the moment.</i></li>
</ul>
<p>Para graduar: <i>I'm crazy about / I'm a huge fan of</i> (adoro) → <i>I quite like</i> (gosto razoavelmente) → <i>I'm not a big fan of / It's not really my thing</i> (não gosto muito).</p>

<h3>2. Prefer: preferências gerais</h3>
<p><b>Prefer</b> compara duas coisas com <b>to</b> (não "than"):</p>
<ul>
<li><i>I prefer rock <b>to</b> pop.</i></li>
<li><i>I prefer listening to music <b>to</b> watching TV.</i></li>
<li>Com infinitivo, a comparação usa <b>rather than</b>: <i>I prefer to listen <b>rather than</b> sing.</i></li>
</ul>
<div class="ex">❌ <i>I prefer jazz than pop.</i> ✅ <i>I prefer jazz to pop.</i></div>

<h3>3. Would like / would love: desejo agora</h3>
<p><b>Would like</b> é mais educado que "want" e fala de uma vontade específica, não de um gosto geral. Depois dele vem sempre <b>to + verbo</b>:</p>
<table><tr><th>Gosto geral</th><th>Vontade agora</th></tr>
<tr><td><em>I like going to concerts.</em></td><td><em>I'd like to go to the concert on Friday.</em></td></tr>
<tr><td><em>Do you like jazz?</em></td><td><em>Would you like to hear this new song?</em></td></tr></table>

<h3>4. Would rather: preferência numa situação</h3>
<p><b>Would rather</b> (contraído: <i>I'd rather</i>) significa "preferiria". Ele é seguido do <b>verbo base, sem to</b>, e compara com <b>than</b>:</p>
<ul>
<li><i>I'd rather stay home tonight.</i></li>
<li><i>I'd rather listen to something calm than heavy metal right now.</i></li>
<li><i>Would you rather go to the festival or watch it online?</i></li>
<li>Negativa: <i>I'd rather not go.</i> (Prefiro não ir.)</li>
</ul>
<div class="ex">❌ <i>I'd rather to stay home.</i> ✅ <i>I'd rather stay home.</i> Would rather nunca leva "to".</div>

<h3>5. Would prefer: igual, mas com to</h3>
<p><b>Would prefer</b> tem o mesmo sentido de would rather, porém pede <b>to + verbo</b>: <i>I'd prefer to sit at the back.</i> = <i>I'd rather sit at the back.</i></p>

<h3>6. Comparando as estruturas</h3>
<table><tr><th>Estrutura</th><th>Depois vem</th><th>Comparação</th></tr>
<tr><td>prefer</td><td>-ing / substantivo</td><td>to</td></tr>
<tr><td>would prefer</td><td>to + verbo</td><td>rather than</td></tr>
<tr><td>would rather</td><td>verbo base</td><td>than</td></tr></table>

<h3>7. Vocabulário de música</h3>
<ul>
<li><b>a gig / a live show</b> (show), <b>a festival</b>, <b>the lineup</b> (atrações)</li>
<li><b>catchy</b> (chiclete, que gruda), <b>lyrics</b> (letra), <b>a cover</b> (versão)</li>
<li><b>play by ear</b> (tocar de ouvido), <b>be out of tune</b> (desafinado)</li>
<li><b>have a song stuck in your head</b> (estar com a música na cabeça)</li>
</ul>

<h3>Resumo</h3>
<ul>
<li>Gostos gerais: like/love/enjoy + -ing.</li>
<li><b>prefer A to B</b>; nunca "than".</li>
<li><b>would like</b> + to = vontade agora.</li>
<li><b>would rather</b> + verbo base (+ than); <b>would prefer</b> + to.</li>
</ul>`,
  say: ["I love listening to old records on Sunday mornings.", "I prefer live music to recorded music.", "I'd rather stay home tonight than go to a crowded club.", "Would you like to come to a gig on Friday?", "Rap isn't really my thing, but I'm a huge fan of jazz.", "I've had that song stuck in my head all day."],
  vocab: [
    { en: "I'd rather", pt: 'eu preferiria', ex: "I'd rather listen to something calm right now." },
    { en: 'prefer', pt: 'preferir', ex: "I prefer acoustic songs to electronic music." },
    { en: 'gig', pt: 'show (de música)', ex: "We went to a great gig last night." },
    { en: 'lyrics', pt: 'letra (de música)', ex: "I love the melody, but the lyrics are a bit silly." },
    { en: 'catchy', pt: 'chiclete, fácil de grudar', ex: "That chorus is so catchy." },
    { en: 'stuck in my head', pt: 'grudada na minha cabeça', ex: "I've had this song stuck in my head all day." },
    { en: "not my thing", pt: 'não é a minha praia', ex: "Opera is not really my thing." },
    { en: 'out of tune', pt: 'desafinado', ex: "The guitar is a bit out of tune." },
    { en: 'lineup', pt: 'programação, atrações (de festival)', ex: "The festival lineup this year is amazing." },
    { en: "can't stand", pt: 'não suporto', ex: "I can't stand loud music in restaurants." }
  ],
  pics: [
    { en: 'a guitar', pt: 'um violão, uma guitarra', img: 'Guitar' },
    { en: 'a keyboard', pt: 'um teclado', img: 'Musical keyboard' },
    { en: 'a drum', pt: 'um tambor', img: 'Drum' },
    { en: 'headphones', pt: 'fones de ouvido', img: 'Headphone' },
    { en: 'a microphone', pt: 'um microfone', img: 'Microphone' },
    { en: 'a violin', pt: 'um violino', img: 'Violin' },
    { en: 'a saxophone', pt: 'um saxofone', img: 'Saxophone' },
    { en: 'a trumpet', pt: 'um trompete', img: 'Trumpet' }
  ],
  fill: [
    { s: "I'd ___ stay home tonight.", a: 'rather' },
    { s: 'I prefer jazz ___ pop music.', a: 'to' },
    { s: 'Would you like ___ come to the concert?', a: 'to' },
    { s: "I've had that song stuck in my ___ all day.", a: 'head' },
    { s: 'The chorus is really ___. Everyone sings along.', a: 'catchy' },
    { s: "I love the melody, but I don't understand the ___.", a: 'lyrics' },
    { s: "Heavy metal isn't really my ___.", a: 'thing' }
  ],
  reading: {
    title: 'Why the songs of your teens stay with you',
    paras: [
      "Most people have a strong opinion about which decade had the best music, and, curiously, it's usually the decade when they were teenagers. Whether you grew up with eighties pop, nineties rock or 2000s hip-hop, those songs often feel more meaningful than anything released later.",
      "Researchers who study music and memory believe there's a reason for this. Between the ages of roughly twelve and twenty-two, our brains are especially sensitive to emotional experiences. First loves, first concerts and first heartbreaks all happen during these years, and the music playing at the time becomes attached to those memories.",
      "That's why a song you haven't heard in twenty years can instantly take you back to a specific summer, a car journey or a friend's bedroom. The song itself might not be particularly good; what moves you is everything it reminds you of.",
      "This also explains why older generations sometimes struggle with new music. It's not necessarily that today's songs are worse; it's that they arrive without the emotional history. So next time someone says 'music was better in my day', they may be talking less about music and more about being young."
    ],
    gloss: { 'curiously': 'curiosamente', 'meaningful': 'significativo', 'heartbreaks': 'desilusões amorosas', 'attached to': 'ligado a', 'take you back': 'te levar de volta', 'struggle with': 'ter dificuldade com' },
    qs: [
      { q: 'Which decade do most people think had the best music?', opts: ['The current decade', 'The decade when they were teenagers', 'The 1960s', 'The decade they were born'], a: 1 },
      { q: 'Why is music from our teens so powerful, according to researchers?', opts: ['It was better produced', 'Our brains are especially sensitive to emotional experiences then', 'We listened to it more on the radio', 'It was simpler'], a: 1 },
      { q: 'What really moves you when you hear an old song?', opts: ['The quality of the song', 'The memories it brings back', 'The singer\'s voice', 'The volume'], a: 1 },
      { q: 'Why might older people struggle with new music?', opts: ['It is always worse', 'It arrives without emotional history for them', 'They can\'t hear it well', 'It is too expensive'], a: 1 }
    ]
  },
  listening: {
    kind: 'dialogue', place: 'Escolhendo um show para ir',
    lines: [
      { s: 'Chloe', v: 'en-GB-LibbyNeural', t: "So, there are two gigs on Saturday. A jazz trio at the Blue Note or that rock band at the stadium. Which would you prefer?" },
      { s: 'Sam', v: 'en-US-AndrewNeural', t: "Honestly? I'd rather see the jazz trio. Stadium shows aren't really my thing anymore. Too crowded." },
      { s: 'Chloe', v: 'en-GB-LibbyNeural', t: "Really? I thought you loved that band." },
      { s: 'Sam', v: 'en-US-AndrewNeural', t: "I do! I listen to their albums all the time. I just prefer small venues to huge ones. You can actually see the musicians." },
      { s: 'Chloe', v: 'en-GB-LibbyNeural', t: "Fair enough. I'd prefer to sit down anyway. My feet are still sore from the festival." },
      { s: 'Sam', v: 'en-US-AndrewNeural', t: "Ha! How was it, by the way? The lineup looked amazing." },
      { s: 'Chloe', v: 'en-GB-LibbyNeural', t: "Brilliant, but the last band was terrible. The singer was completely out of tune." },
      { s: 'Sam', v: 'en-US-AndrewNeural', t: "Oh no. Well, the jazz tickets are only twenty-five pounds. Would you like me to book them?" },
      { s: 'Chloe', v: 'en-GB-LibbyNeural', t: "Yes, please. And let's have dinner before. I'd rather not go on an empty stomach." }
    ],
    qs: [
      { q: 'Which gig does Sam prefer?', opts: ['The rock band at the stadium', 'The jazz trio', 'Neither', 'Both'], a: 1 },
      { q: 'Why does Sam prefer small venues?', opts: ['They are cheaper', 'You can actually see the musicians', 'He hates rock', 'They are closer to home'], a: 1 },
      { q: 'What was wrong with the last band at the festival?', opts: ['They were late', 'The singer was out of tune', 'They played too short', 'It rained'], a: 1 },
      { q: 'What do they decide to do before the gig?', opts: ['Have a drink', 'Have dinner', 'Go home', 'Meet friends'], a: 1 }
    ]
  },
  speaking: {
    shadow: [
      { text: "I'd rather stay home and listen to some records.", tip: "\"I'd rather\" = aid-RÉ-der." },
      { text: "I prefer small venues to big stadiums.", tip: "\"prefer\" tem ênfase no final: pri-FÂR." },
      { text: "Would you like to come to a gig on Friday?", tip: "\"Would you\" vira \"wudja\"." },
      { text: "Heavy metal isn't really my thing.", tip: "\"my thing\": th sem vibrar, língua entre os dentes." },
      { text: "I've had this song stuck in my head all day.", tip: "\"stuck in\" liga: stâkin." }
    ],
    prompt: { q: 'Talk about your taste in music: what you love, what you can\'t stand, what you prefer, and what you would rather do on a Friday night.', hints: ["I'm a huge fan of", "I can't stand", 'I prefer... to', "I'd rather"] }
  }
},

// ───────────────────────────── 24 · tema: esportes
{
  id: 'c24', lv: 'b2', title: 'Há quanto tempo? Present perfect contínuo', goal: 'Have been doing para atividades que começaram no passado e continuam, ou que acabaram e deixaram marcas.',
  theory: `
<p>"Jogo futebol há dez anos", "estou treinando desde as seis", "você estava correndo? Está todo suado!". Em português usamos o presente ou o gerúndio para essas ideias. Em inglês, elas pedem o <b>present perfect continuous</b> (<i>have been + -ing</i>), um tempo que conecta uma atividade do passado com o presente e dá ênfase à <b>duração</b> ou ao <b>processo</b>.</p>

<h3>1. A forma</h3>
<table><tr><th>Afirmativa</th><th>Negativa</th><th>Pergunta</th></tr>
<tr><td><em>I've been training.</em></td><td><em>I haven't been training.</em></td><td><em>Have you been training?</em></td></tr>
<tr><td><em>She's been playing.</em></td><td><em>She hasn't been playing.</em></td><td><em>Has she been playing?</em></td></tr></table>

<h3>2. Uso 1: algo que começou e ainda continua</h3>
<p>É o uso principal, quase sempre com <b>for</b> ou <b>since</b>:</p>
<ul>
<li><i>I've been playing tennis <b>for</b> ten years.</i> (comecei há dez anos e ainda jogo)</li>
<li><i>We've been waiting <b>since</b> seven o'clock.</i></li>
<li><i>How long have you been running?</i> (Há quanto tempo você corre?)</li>
</ul>
<div class="ex">O erro clássico de brasileiro: ❌ <i>I play tennis for ten years.</i> / ❌ <i>I am playing since 2015.</i> ✅ <i>I've been playing tennis for ten years / since 2015.</i></div>

<h3>3. Uso 2: atividade recente que deixou marcas</h3>
<p>Mesmo se a atividade acabou de terminar, usamos esse tempo quando o resultado é visível agora:</p>
<ul>
<li><i>You're all sweaty. Have you been running?</i></li>
<li><i>My legs hurt because I've been cycling all morning.</i></li>
<li><i>The pitch is wet. It's been raining.</i></li>
</ul>

<h3>4. Contínuo × simples: duração × resultado</h3>
<p>A diferença entre <i>I've been doing</i> e <i>I've done</i> é de foco:</p>
<table><tr><th>Present perfect continuous</th><th>Present perfect simple</th></tr>
<tr><td>foco na atividade, na duração</td><td>foco no resultado, na quantidade</td></tr>
<tr><td><em>I've been training all morning.</em></td><td><em>I've trained five times this week.</em></td></tr>
<tr><td><em>She's been running for an hour.</em></td><td><em>She's run ten kilometers.</em></td></tr>
<tr><td><em>I've been reading that book.</em> (ainda não terminei)</td><td><em>I've read that book.</em> (terminei)</td></tr></table>
<p>Quando há um <b>número</b> ou uma <b>quantidade</b> (five times, ten kilometers, three goals), use o present perfect simples.</p>

<h3>5. Verbos que não vão para o contínuo</h3>
<p>Verbos de estado (know, like, believe, belong, own) continuam no present perfect simples mesmo com duração: ❌ <i>I've been knowing him for years.</i> ✅ <i>I've known him for years.</i> ❌ <i>I've been having this bike since 2019.</i> ✅ <i>I've had this bike since 2019.</i></p>

<h3>6. Vocabulário esportivo</h3>
<table><tr><th>Expressão</th><th>Sentido</th></tr>
<tr><td><em>play / go / do</em></td><td>play + esportes com bola (play football), go + -ing (go swimming), do + artes marciais e atividades (do yoga, do karate)</td></tr>
<tr><td><em>score a goal</em></td><td>marcar um gol</td></tr>
<tr><td><em>win / beat</em></td><td>vencer (uma partida) / vencer (um adversário)</td></tr>
<tr><td><em>a draw / a tie</em></td><td>um empate</td></tr>
<tr><td><em>a fan / supporter</em></td><td>torcedor</td></tr>
<tr><td><em>the pitch / court / field</em></td><td>campo / quadra / campo (EUA)</td></tr>
<tr><td><em>get injured</em></td><td>se lesionar</td></tr></table>
<div class="ex">Cuidado: <b>win</b> é para a partida ou o prêmio (<i>We won the game</i>); <b>beat</b> é para o adversário (<i>We beat Brazil</i>). ❌ <i>We won Brazil.</i></div>
<p>Para placares, diga os números com <b>to</b>: <i>We won three to one</i> (3 a 1). Zero no futebol britânico vira <b>nil</b> (<i>two-nil</i>), e no tênis, <b>love</b> (<i>fifteen-love</i>). Um empate em zero é <i>a goalless draw</i>.</p>

<h3>Resumo</h3>
<ul>
<li><b>have been + -ing</b> para algo que começou e continua (for / since).</li>
<li>Também para atividade recente com marcas visíveis.</li>
<li>Duração → contínuo; quantidade/resultado → simples.</li>
<li>Verbos de estado ficam no simples: I've known, I've had.</li>
</ul>`,
  say: ["I've been playing football for almost fifteen years.", "How long have you been running?", "You're all sweaty. Have you been training?", "She's run ten kilometers this morning.", "I've had this bike since 2019.", "We beat them three to one, but we didn't win the league."],
  vocab: [
    { en: 'how long have you been', pt: 'há quanto tempo você', ex: "How long have you been playing the guitar?" },
    { en: 'score a goal', pt: 'marcar um gol', ex: "He scored a goal in the last minute." },
    { en: 'beat', pt: 'vencer (um adversário)', ex: "We beat them three to one." },
    { en: 'a draw', pt: 'um empate', ex: "The match ended in a draw." },
    { en: 'get injured', pt: 'se lesionar', ex: "She got injured during training." },
    { en: 'supporter', pt: 'torcedor', ex: "He's been a supporter of the club since he was a kid." },
    { en: 'pitch', pt: 'campo (de futebol)', ex: "The players are coming onto the pitch." },
    { en: 'referee', pt: 'árbitro, juiz', ex: "The referee gave a red card." },
    { en: 'league', pt: 'campeonato, liga', ex: "Our team is top of the league." },
    { en: 'sweaty', pt: 'suado', ex: "You're all sweaty. Have you been running?" }
  ],
  pics: [
    { en: 'a soccer ball', pt: 'uma bola de futebol', img: 'Soccer ball' },
    { en: 'a basketball', pt: 'uma bola de basquete', img: 'Basketball' },
    { en: 'a volleyball', pt: 'uma bola de vôlei', img: 'Volleyball' },
    { en: 'a trophy', pt: 'um troféu', img: 'Trophy' },
    { en: 'a goal', pt: 'um gol (a trave)', img: 'Goal net' },
    { en: 'a stadium', pt: 'um estádio', img: 'Stadium' },
    { en: 'an ice skate', pt: 'um patins de gelo', img: 'Ice skate' },
    { en: 'a baseball', pt: 'uma bola de beisebol', img: 'Baseball' }
  ],
  fill: [
    { s: "I've been ___ football for ten years.", a: 'playing' },
    { s: 'How ___ have you been running?', a: 'long' },
    { s: "We've been waiting ___ seven o'clock.", a: 'since' },
    { s: 'We ___ them three to one.', a: 'beat' },
    { s: 'He ___ a goal in the last minute.', a: 'scored' },
    { s: 'The match ended in a ___.', a: 'draw' },
    { s: 'She got ___ during training and missed the final.', a: 'injured' }
  ],
  reading: {
    title: 'Why amateur athletes keep getting injured',
    paras: [
      "Every year, thousands of people decide to get fit by signing up for a race or joining a weekend football team. And every year, a surprising number of them get injured within the first few months. Physiotherapists say the reason is almost always the same: doing too much, too soon.",
      "Someone who hasn't been exercising for years suddenly starts running five times a week. Their heart and lungs adapt quickly, so they feel great, but their muscles, tendons and joints need much more time. After a few weeks, something starts to hurt, and many people ignore it until it becomes a serious problem.",
      "Experts recommend a simple rule: increase your training by no more than ten percent per week. If you ran twenty kilometers this week, run no more than twenty-two next week. It feels slow, but it gives your body time to adapt.",
      "Rest days matter too. Muscles get stronger while you recover, not while you train. As one coach puts it, 'People who have been training for years know that the rest day is part of the workout. Beginners think it's a day off.'"
    ],
    gloss: { 'signing up for': 'se inscrever em', 'physiotherapists': 'fisioterapeutas', 'too much, too soon': 'demais, rápido demais', 'tendons': 'tendões', 'joints': 'articulações', 'recover': 'se recuperam' },
    qs: [
      { q: 'What is the main reason amateur athletes get injured?', opts: ['Bad equipment', 'Doing too much, too soon', 'Not stretching', 'Bad weather'], a: 1 },
      { q: 'Why do beginners feel great at first?', opts: ['Their muscles adapt quickly', 'Their heart and lungs adapt quickly', 'They take supplements', 'They train less'], a: 1 },
      { q: 'What is the ten percent rule?', opts: ['Rest ten percent of the time', 'Increase training by no more than ten percent per week', 'Run ten percent faster', 'Train ten days in a row'], a: 1 },
      { q: 'What do experienced athletes know about rest days?', opts: ['They are a waste of time', 'They are part of the workout', 'They are only for beginners', 'They should be avoided'], a: 1 }
    ]
  },
  listening: {
    kind: 'dialogue', place: 'Depois de um jogo de futebol amador',
    lines: [
      { s: 'Coach', v: 'en-GB-ThomasNeural', t: "Well played, everyone! A draw against the top team isn't bad at all." },
      { s: 'Rafa', v: 'en-US-BrianNeural', t: "We should have won, though. We've been training so hard for this game." },
      { s: 'Coach', v: 'en-GB-ThomasNeural', t: "I know. You've been brilliant in training. How's your knee, by the way? You were limping in the second half." },
      { s: 'Rafa', v: 'en-US-BrianNeural', t: "It's been hurting for about two weeks, but only when I run fast." },
      { s: 'Coach', v: 'en-GB-ThomasNeural', t: "Two weeks? Have you been playing on it the whole time?" },
      { s: 'Rafa', v: 'en-US-BrianNeural', t: "Yeah. I didn't want to miss the game." },
      { s: 'Coach', v: 'en-GB-ThomasNeural', t: "Rafa, you've scored six goals this season. We need you healthy, not injured for three months. I want you to see a physio this week." },
      { s: 'Rafa', v: 'en-US-BrianNeural', t: "Okay, okay. I'll book an appointment tomorrow." },
      { s: 'Coach', v: 'en-GB-ThomasNeural', t: "Good. And no running until they say it's fine. Rest is part of training too." }
    ],
    qs: [
      { q: 'What was the result of the game?', opts: ['They won', 'They lost', 'It was a draw', 'It was cancelled'], a: 2 },
      { q: 'How long has Rafa\'s knee been hurting?', opts: ['Two days', 'About two weeks', 'Two months', 'Since the game'], a: 1 },
      { q: 'How many goals has Rafa scored this season?', opts: ['Two', 'Three', 'Six', 'Ten'], a: 2 },
      { q: 'What does the coach want Rafa to do?', opts: ['Train harder', 'See a physio and rest', 'Play the next game', 'Change positions'], a: 1 }
    ]
  },
  speaking: {
    shadow: [
      { text: "I've been playing tennis for ten years.", tip: "\"I've been\" = aiv-bin, bem rápido." },
      { text: "How long have you been running?", tip: "\"been running\": ênfase em running." },
      { text: "You're all sweaty. Have you been training?", tip: "\"sweaty\" = SUÉ-di." },
      { text: "We beat them three to one.", tip: "\"beat them\" = biit-dhem; o t quase some." },
      { text: "She's scored six goals this season.", tip: "\"scored six\" liga: skórdsix." }
    ],
    prompt: { q: 'Talk about a sport or physical activity in your life: how long you have been doing it, what you have achieved and a time you got injured or had a problem.', hints: ["I've been", 'for / since', "I've won / scored", 'got injured'] }
  }
},

// ───────────────────────────── 25 · tema: celular e tecnologia
{
  id: 'c25', lv: 'b2', title: 'Resolvendo problemas: a voz passiva', goal: 'Voz passiva no presente e no passado para falar de sistemas, defeitos e soluções (it is made, it was fixed).',
  theory: `
<p>Quando falamos de tecnologia, quase sempre o importante é <b>o que acontece com a coisa</b>, e não quem fez: "o arquivo foi apagado", "os dados são salvos na nuvem", "o celular está sendo consertado". Para isso o inglês usa a <b>voz passiva</b>, muito comum em manuais, atendimento técnico e notícias. Nesta lição você vai aprender a formá-la e a usá-la para descrever problemas e soluções.</p>

<h3>1. A forma: be + particípio</h3>
<p>A passiva é formada por <b>be</b> (no tempo desejado) + o <b>particípio</b> do verbo principal:</p>
<table><tr><th>Tempo</th><th>Ativa</th><th>Passiva</th></tr>
<tr><td>Presente</td><td><em>They update the app every week.</em></td><td><em>The app <b>is updated</b> every week.</em></td></tr>
<tr><td>Passado</td><td><em>Someone deleted my files.</em></td><td><em>My files <b>were deleted</b>.</em></td></tr>
<tr><td>Present perfect</td><td><em>They have fixed the bug.</em></td><td><em>The bug <b>has been fixed</b>.</em></td></tr>
<tr><td>Contínuo</td><td><em>They are repairing my laptop.</em></td><td><em>My laptop <b>is being repaired</b>.</em></td></tr>
<tr><td>Futuro / modal</td><td><em>They will send a code.</em></td><td><em>A code <b>will be sent</b> to your phone.</em></td></tr></table>

<h3>2. Quando usar a passiva</h3>
<ul>
<li>Quando <b>não sabemos</b> quem fez: <i>My account was hacked.</i></li>
<li>Quando <b>não importa</b> quem fez: <i>Your data is stored securely.</i></li>
<li>Quando é <b>óbvio</b>: <i>The phone was made in China.</i></li>
<li>Para soar mais <b>formal ou impessoal</b>, como em avisos e e-mails de empresas: <i>Your password has been changed.</i></li>
</ul>
<p>Se quiser dizer quem fez, use <b>by</b>: <i>The app was developed by a small team in Lisbon.</i></p>

<h3>3. Get no lugar de be</h3>
<p>Na fala informal, especialmente para coisas ruins ou inesperadas, os nativos usam <b>get</b> no lugar de be:</p>
<ul>
<li><i>My phone got stolen on the bus.</i></li>
<li><i>The file got deleted by mistake.</i></li>
<li><i>Did your laptop get fixed?</i></li>
</ul>

<h3>4. Descrevendo problemas</h3>
<table><tr><th>Problema</th><th>Em inglês</th></tr>
<tr><td>Travou</td><td><em>It froze. / It keeps freezing.</em></td></tr>
<tr><td>O app fecha sozinho</td><td><em>The app keeps crashing.</em></td></tr>
<tr><td>Não liga</td><td><em>It won't turn on.</em></td></tr>
<tr><td>A bateria acaba rápido</td><td><em>The battery dies really fast.</em></td></tr>
<tr><td>Sem sinal / sem internet</td><td><em>I have no signal. / The Wi-Fi is down.</em></td></tr>
<tr><td>Tela quebrada</td><td><em>The screen is cracked.</em></td></tr></table>
<p>Repare em <b>won't</b>: <i>it won't turn on</i> significa "não quer ligar", uma recusa persistente, não um futuro.</p>

<h3>5. Soluções e instruções</h3>
<ul>
<li><i>Have you tried turning it off and on again?</i> (try + -ing = experimentar)</li>
<li><i>Make sure it's plugged in.</i></li>
<li><i>Try clearing the cache / restarting the router.</i></li>
<li><i>The latest update needs to be installed.</i> (passiva com need)</li>
<li><i>It should be fixed by tomorrow.</i></li>
</ul>

<h3>6. Phrasal verbs de tecnologia</h3>
<ul>
<li><b>back up</b> (fazer backup): <i>Back up your photos before the update.</i></li>
<li><b>log in / log out</b> (entrar / sair da conta)</li>
<li><b>plug in / unplug</b> (ligar na tomada / desligar)</li>
<li><b>set up</b> (configurar): <i>Can you help me set up my new phone?</i></li>
<li><b>run out of</b> (ficar sem): <i>My phone ran out of battery.</i></li>
</ul>
<div class="ex">No suporte técnico, a pergunta mais famosa do mundo é <i>Have you tried turning it off and on again?</i> Ela é tão comum que virou piada, mas resolve uma quantidade surpreendente de problemas. Outra frase útil quando você liga para um atendimento: <i>I've already tried that, and it didn't work.</i></div>

<h3>Resumo</h3>
<ul>
<li>Passiva = <b>be + particípio</b>, em qualquer tempo.</li>
<li>Use quando quem fez é desconhecido, óbvio ou não importa.</li>
<li>Informal: <b>get + particípio</b> (got stolen, got deleted).</li>
<li>Problemas: keeps crashing, won't turn on, the battery dies.</li>
</ul>`,
  say: ["My account was hacked last night.", "Your password has been changed successfully.", "My laptop is being repaired, so I'm using my phone.", "The app keeps crashing every time I open it.", "Have you tried turning it off and on again?", "Back up your photos before you install the update."],
  vocab: [
    { en: 'keeps crashing', pt: 'fica travando, fechando sozinho', ex: "The app keeps crashing when I open the camera." },
    { en: "won't turn on", pt: 'não liga (de jeito nenhum)', ex: "My laptop won't turn on." },
    { en: 'back up', pt: 'fazer backup', ex: "Always back up your files before an update." },
    { en: 'set up', pt: 'configurar', ex: "Can you help me set up my new phone?" },
    { en: 'hacked', pt: 'hackeado', ex: "My email account was hacked." },
    { en: 'cracked', pt: 'trincado, rachado', ex: "I dropped my phone and the screen is cracked." },
    { en: 'update', pt: 'atualização; atualizar', ex: "Install the latest update to fix the bug." },
    { en: 'log in', pt: 'entrar (na conta)', ex: "I can't log in. I forgot my password." },
    { en: 'signal', pt: 'sinal (de celular)', ex: "There's no signal in the basement." },
    { en: 'plugged in', pt: 'ligado na tomada', ex: "Make sure the router is plugged in." }
  ],
  pics: [
    { en: 'a mobile phone', pt: 'um celular', img: 'Mobile phone' },
    { en: 'a battery', pt: 'uma bateria', img: 'Battery' },
    { en: 'a low battery', pt: 'bateria fraca', img: 'Low battery' },
    { en: 'a laptop', pt: 'um notebook', img: 'Laptop' },
    { en: 'a computer mouse', pt: 'um mouse', img: 'Computer mouse' },
    { en: 'a keyboard', pt: 'um teclado', img: 'Keyboard' },
    { en: 'a plug', pt: 'um plugue', img: 'Electric plug' },
    { en: 'a lock', pt: 'um cadeado', img: 'Locked' }
  ],
  fill: [
    { s: 'My account ___ hacked last night.', a: 'was' },
    { s: 'Your password has ___ changed.', a: 'been' },
    { s: 'The app keeps ___ when I open it.', a: 'crashing' },
    { s: "My laptop won't turn ___.", a: 'on' },
    { s: 'Always back ___ your photos before an update.', a: 'up' },
    { s: 'I dropped my phone and now the screen is ___.', a: 'cracked' },
    { s: 'My phone is being ___ at the store.', a: 'repaired' }
  ],
  reading: {
    title: 'Why your phone gets slower every year',
    paras: [
      "Almost everyone has noticed it: a phone that felt incredibly fast when it was new becomes frustratingly slow after two or three years. Apps take longer to open, the battery dies before the end of the day and the keyboard lags behind your fingers.",
      "Part of the reason is the battery itself. Batteries are made of chemicals that slowly wear out each time they're charged. As a battery ages, it can no longer deliver power as efficiently, and some phones are designed to slow down slightly to prevent sudden shutdowns.",
      "Software also plays a role. Every year, new versions of apps and operating systems are released, and they're usually built for the latest, most powerful devices. On an older phone, the same software has to work much harder.",
      "The good news is that a few simple steps can help. Deleting apps you don't use, clearing storage, and replacing an old battery can make a phone feel almost new again. Before buying a new device, it's worth trying the cheapest fix first."
    ],
    gloss: { 'frustratingly': 'frustrantemente', 'lags behind': 'fica atrás, atrasa', 'wear out': 'se desgastam', 'deliver power': 'fornecer energia', 'shutdowns': 'desligamentos', 'storage': 'armazenamento' },
    qs: [
      { q: 'What happens to phones after two or three years?', opts: ['They get faster', 'They become slower', 'They stop working completely', 'They get cheaper'], a: 1 },
      { q: 'Why do batteries lose efficiency?', opts: ['They are made of chemicals that wear out', 'They are too small', 'They get dirty', 'They are badly designed'], a: 0 },
      { q: 'Why does new software slow down old phones?', opts: ['It contains viruses', 'It is built for newer, more powerful devices', 'It is too expensive', 'It deletes files'], a: 1 },
      { q: 'What does the text recommend before buying a new phone?', opts: ['Buying a new charger', 'Trying cheap fixes like replacing the battery', 'Turning it off every night', 'Using it less'], a: 1 }
    ]
  },
  listening: {
    kind: 'dialogue', place: 'Ligação para o suporte técnico',
    lines: [
      { s: 'Agent', v: 'en-US-EmmaNeural', t: "Thank you for calling tech support. How can I help you today?" },
      { s: 'Customer', v: 'en-GB-RyanNeural', t: "Hi. My laptop has been really slow since the last update, and now it won't turn on at all." },
      { s: 'Agent', v: 'en-US-EmmaNeural', t: "I'm sorry to hear that. Is it plugged in at the moment?" },
      { s: 'Customer', v: 'en-GB-RyanNeural', t: "Yes, and the light on the charger is on, so the power is fine." },
      { s: 'Agent', v: 'en-US-EmmaNeural', t: "Okay. Could you try holding down the power button for fifteen seconds?" },
      { s: 'Customer', v: 'en-GB-RyanNeural', t: "Hold on. Okay, something's happening. Yes! It's turning on." },
      { s: 'Agent', v: 'en-US-EmmaNeural', t: "Great. It sounds like the update wasn't installed properly. I'll send you a link, and the correct version will be downloaded automatically." },
      { s: 'Customer', v: 'en-GB-RyanNeural', t: "Brilliant. Should I back up my files first? I've got years of photos on here." },
      { s: 'Agent', v: 'en-US-EmmaNeural', t: "Definitely. Nothing should be deleted, but it's always better to be safe. Is there anything else I can help you with?" },
      { s: 'Customer', v: 'en-GB-RyanNeural', t: "No, that's everything. Thanks so much for your help." }
    ],
    qs: [
      { q: 'What was the original problem?', opts: ['The screen was cracked', 'The laptop was slow and then wouldn\'t turn on', 'The battery was missing', 'The charger was broken'], a: 1 },
      { q: 'How did they get it to turn on?', opts: ['By replacing the battery', 'By holding the power button for fifteen seconds', 'By unplugging the charger', 'By calling a technician'], a: 1 },
      { q: 'What does the agent think caused the problem?', opts: ['A virus', 'The update wasn\'t installed properly', 'The charger', 'Water damage'], a: 1 },
      { q: 'What does the customer decide to do before the update?', opts: ['Buy a new laptop', 'Back up his files', 'Delete his photos', 'Call again later'], a: 1 }
    ]
  },
  speaking: {
    shadow: [
      { text: "My account was hacked last night.", tip: "\"hacked\" = /hékt/, uma sílaba." },
      { text: "The app keeps crashing every time I open it.", tip: "\"keeps crashing\": ênfase em crashing." },
      { text: "My laptop won't turn on.", tip: "\"won't\" = /wount/, diferente de \"want\"." },
      { text: "Have you tried turning it off and on again?", tip: "\"turning it off\" liga: târningitóf." },
      { text: "The bug has been fixed in the latest update.", tip: "\"has been fixed\": ritmo rápido, ênfase em fixed." }
    ],
    prompt: { q: 'Describe a technology problem you have had (phone, computer, internet): what happened, what was done to fix it and what you learned.', hints: ['it keeps', "it won't", 'was fixed / was deleted', 'back up'] }
  }
}
]);
