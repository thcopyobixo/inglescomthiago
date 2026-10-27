// Curso diário — lições 1 a 5.
// Cada lição tem um tema de fundo (anotado só aqui no código, nunca mostrado no site):
// o tema guia as frases, o vocabulário, a leitura, o áudio e o speaking.
// Estrutura: theory (HTML) · say (exemplos com áudio) · vocab · reading · listening · speaking
window.COURSE = (window.COURSE || []).concat([

// ───────────────────────────── 1 · tema: apresentações e conversa informal
{
  id: 'c01', lv: 'b1', title: 'Falando sobre você e sua rotina', goal: 'Presente simples × presente contínuo para se apresentar e contar o que está acontecendo na sua vida.',
  theory: `
<p>Quando conhecemos alguém, quase tudo o que dizemos usa dois tempos verbais: o <b>presente simples</b> e o <b>presente contínuo</b>. Em português usamos "eu trabalho" para as duas ideias, mas em inglês a escolha muda o sentido. Dominar essa diferença é o primeiro passo para soar natural numa conversa.</p>

<h3>1. Presente simples: quem você é e o que você faz sempre</h3>
<p>Use o presente simples para fatos permanentes, hábitos e rotinas: sua profissão, de onde você é, o que costuma fazer. Ele responde à pergunta "como é a sua vida, em geral?".</p>
<table><tr><th>Uso</th><th>Exemplo</th></tr>
<tr><td>Profissão</td><td><em>I work in marketing.</em> / <em>She teaches math at a high school.</em></td></tr>
<tr><td>Origem</td><td><em>I'm originally from Recife, but I live in São Paulo.</em></td></tr>
<tr><td>Hábitos</td><td><em>I usually go to the gym after work.</em></td></tr>
<tr><td>Gostos</td><td><em>I really like hiking, and I love trying new restaurants.</em></td></tr></table>
<p>Atenção à terceira pessoa (he, she, it): o verbo ganha <b>-s</b> ou <b>-es</b>. <i>He works from home. She watches a lot of series. My brother goes to college in Curitiba.</i> Na negativa e na pergunta, quem recebe o -s é o auxiliar: <i>He doesn't work on Fridays. Does she live near here?</i></p>

<h3>2. Presente contínuo: o que está acontecendo agora ou nesta fase</h3>
<p>Use o presente contínuo (<b>am/is/are + verbo-ing</b>) para ações acontecendo neste momento e também para situações <b>temporárias</b>, uma fase da vida. É aqui que muitos brasileiros erram: o contínuo não é só "agora, neste segundo".</p>
<table><tr><th>Uso</th><th>Exemplo</th></tr>
<tr><td>Agora mesmo</td><td><em>I'm waiting for a friend, actually.</em></td></tr>
<tr><td>Fase temporária</td><td><em>I'm living with my parents until I find an apartment.</em></td></tr>
<tr><td>Projeto atual</td><td><em>I'm learning to play the guitar this year.</em></td></tr>
<tr><td>Mudança em andamento</td><td><em>My English is getting better.</em></td></tr></table>

<h3>3. Comparando lado a lado</h3>
<p>Veja como a mesma ideia muda de sentido:</p>
<ul>
<li><i>I work in a bank.</i> → é o meu emprego, uma situação estável.</li>
<li><i>I'm working in a bank this summer.</i> → é temporário, só nesta temporada.</li>
<li><i>She lives in London.</i> → ela mora lá, ponto.</li>
<li><i>She's living in London for six months.</i> → é uma fase, ela vai voltar.</li>
</ul>
<div class="ex">Dica de ouro: se você puder acrescentar "nesta fase", "por enquanto" ou "ultimamente" em português, provavelmente o inglês pede o contínuo.</div>

<h3>4. Verbos que quase nunca vão para o contínuo</h3>
<p>Alguns verbos descrevem estados, não ações, e por isso ficam no presente simples mesmo quando falamos do momento atual. Os mais comuns são <b>like, love, hate, want, need, know, understand, believe, remember, belong, seem</b>.</p>
<ul>
<li>❌ <i>I'm knowing him for years.</i> → ✅ <i>I've known him for years.</i></li>
<li>❌ <i>I'm wanting a coffee.</i> → ✅ <i>I want a coffee.</i></li>
<li>❌ <i>Are you understanding?</i> → ✅ <i>Do you understand?</i></li>
</ul>
<p>Uma exceção famosa vem da propaganda: <i>I'm loving it</i>. Ela funciona justamente porque quebra a regra para soar informal e animada.</p>

<h3>5. Frases prontas para se apresentar</h3>
<p>Numa primeira conversa, algumas estruturas aparecem o tempo todo. Vale decorar em blocos:</p>
<table><tr><th>Para dizer</th><th>Em inglês</th></tr>
<tr><td>O que você faz?</td><td><em>What do you do (for a living)?</em></td></tr>
<tr><td>Trabalho como...</td><td><em>I work as a nurse. / I'm a software developer.</em></td></tr>
<tr><td>Sou de... originalmente</td><td><em>I'm originally from Bahia.</em></td></tr>
<tr><td>Cresci em...</td><td><em>I grew up in a small town.</em></td></tr>
<tr><td>Estou morando aqui faz...</td><td><em>I've been living here for two years.</em></td></tr>
<tr><td>Curto muito...</td><td><em>I'm really into cooking.</em></td></tr>
<tr><td>E você?</td><td><em>How about you? / What about you?</em></td></tr></table>
<p>Repare na pergunta <i>What do you do?</i>: ela quer saber sua profissão. Para perguntar o que a pessoa está fazendo neste momento, usa-se <i>What are you doing?</i>, um erro clássico de quem traduz direto do português.</p>

<h3>6. Mantendo a conversa viva</h3>
<p>Responder só com fatos encerra a conversa. Nativos acrescentam um detalhe e devolvem a pergunta. Compare:</p>
<div class="ex"><b>Seco:</b> "Where are you from?" "Brazil."<br><b>Natural:</b> "Where are you from?" "I'm from Brazil, from Fortaleza. It's on the coast, so I really miss the beach here. How about you? Are you from around here?"</div>
<p>Outras expressões úteis: <i>Oh, nice! / That's cool. / No way, me too! / How long have you been here? / What brought you here?</i></p>

<h3>Resumo</h3>
<ul>
<li><b>Presente simples</b>: fatos, rotinas, gostos, coisas permanentes.</li>
<li><b>Presente contínuo</b>: agora, fases temporárias, projetos atuais, mudanças.</li>
<li>Verbos de estado (know, like, want, understand) ficam no simples.</li>
<li><i>What do you do?</i> = profissão; <i>What are you doing?</i> = agora.</li>
</ul>`,
  say: ["I work in marketing, but I'm studying design at night.", "I'm originally from Recife, but I've been living in São Paulo for two years.", "She works from home most days.", "I'm living with my parents until I find an apartment.", "What do you do for a living?", "I'm really into cooking these days. How about you?"],
  vocab: [
    { en: 'what do you do for a living', pt: 'com o que você trabalha', ex: "So, what do you do for a living?" },
    { en: 'originally from', pt: 'natural de, originalmente de', ex: "I'm originally from Bahia, but I grew up in Rio." },
    { en: 'grow up', pt: 'crescer (ser criado)', ex: "I grew up in a small town near the mountains." },
    { en: 'be into', pt: 'curtir, gostar muito de', ex: "I'm really into podcasts at the moment." },
    { en: 'commute', pt: 'trajeto até o trabalho; ir e voltar do trabalho', ex: "My commute takes about forty minutes." },
    { en: 'work from home', pt: 'trabalhar de casa', ex: "I work from home three days a week." },
    { en: 'coworker', pt: 'colega de trabalho', ex: "One of my coworkers invited me to this party." },
    { en: 'get to know', pt: 'conhecer melhor alguém', ex: "It's nice to get to know you better." },
    { en: 'catch up', pt: 'colocar o papo em dia', ex: "We should grab a coffee and catch up sometime." },
    { en: 'small talk', pt: 'conversa leve, papo furado', ex: "I'm not great at small talk with strangers." }
  ],
  reading: {
    title: 'New in town',
    paras: [
      "When Lucas moved from Belo Horizonte to Toronto last spring, he expected the cold to be the hardest part. It wasn't. The hardest part was walking into rooms full of people he didn't know and trying to start a conversation in a language he'd mostly studied from books.",
      "He works as a data analyst for a small health company, and most of his team works remotely. That's convenient, but it also means he doesn't meet many people during the week. So he decided to sign up for things: a running club on Saturdays, a cooking class on Wednesdays, and a monthly board game night at a café near his apartment.",
      "At first, small talk felt like an exam. People asked the same questions again and again: what do you do, where are you from, how long have you been here. Lucas started to notice, though, that the answers didn't really matter. What mattered was adding a little detail and asking something back.",
      "These days, he's getting much more comfortable. He's still not a fan of the winter, and he still misses his mother's cooking, but he has a group of friends he sees every week. 'The trick,' he says, 'is to stop trying to sound perfect. People just want to know who you are.'"
    ],
    gloss: { 'sign up for': 'se inscrever em', 'remotely': 'remotamente', 'board game': 'jogo de tabuleiro', 'felt like an exam': 'parecia uma prova', 'a fan of': 'fã de', 'the trick': 'o segredo, o truque' },
    qs: [
      { q: 'What did Lucas find hardest about moving?', opts: ['The cold weather', 'Starting conversations with strangers', 'Finding a job', 'The food'], a: 1 },
      { q: 'Why does he meet few people during the week?', opts: ['He works at night', 'His team mostly works remotely', 'He lives far from the city', 'He is always traveling'], a: 1 },
      { q: 'What did he learn about small talk?', opts: ['The answers must be perfect', 'Adding a detail and asking back matters most', 'It is only for business', 'Canadians avoid it'], a: 1 },
      { q: 'Which sentence describes his situation now?', opts: ['He wants to go back to Brazil', 'He is more comfortable and has friends', 'He stopped going to the clubs', 'He loves the winter'], a: 1 }
    ]
  },
  listening: {
    kind: 'dialogue', place: 'Numa festa na casa de um amigo',
    lines: [
      { s: 'Emma', v: 'en-US-EmmaNeural', t: "Hi! I don't think we've met. I'm Emma, I'm a friend of Dan's from college." },
      { s: 'Rafael', v: 'en-US-BrianNeural', t: "Nice to meet you, Emma. I'm Rafael. Dan and I work together, actually." },
      { s: 'Emma', v: 'en-US-EmmaNeural', t: "Oh, cool. So what do you do?" },
      { s: 'Rafael', v: 'en-US-BrianNeural', t: "I'm a UX designer. I design apps, mostly for banks. It sounds boring, but I really enjoy it." },
      { s: 'Emma', v: 'en-US-EmmaNeural', t: "It doesn't sound boring at all. Is that an accent I hear? Where are you from originally?" },
      { s: 'Rafael', v: 'en-US-BrianNeural', t: "Brazil, from Porto Alegre. I've been living here for about a year and a half." },
      { s: 'Emma', v: 'en-US-EmmaNeural', t: "No way! My sister is living in Brazil right now. She's teaching English in Florianópolis for a year." },
      { s: 'Rafael', v: 'en-US-BrianNeural', t: "Floripa? She's lucky. The beaches there are amazing. How about you, what do you do?" },
      { s: 'Emma', v: 'en-US-EmmaNeural', t: "I'm a nurse. I work nights at the moment, so parties like this are a rare treat." },
      { s: 'Rafael', v: 'en-US-BrianNeural', t: "Night shifts? That must be tough. Well, let me get you a drink, then. You've earned it." }
    ],
    qs: [
      { q: 'How does Rafael know Dan?', opts: ['From college', 'They work together', 'They are neighbors', 'They are cousins'], a: 1 },
      { q: 'What does Rafael do?', opts: ['He is a nurse', 'He is a teacher', 'He designs apps', 'He works at a bank as a manager'], a: 2 },
      { q: "What is Emma's sister doing?", opts: ['Studying in Porto Alegre', 'Teaching English in Brazil for a year', 'Working as a nurse', 'Traveling around Europe'], a: 1 },
      { q: 'Why are parties a "rare treat" for Emma?', opts: ['She does not like parties', 'She works night shifts at the moment', 'She lives far away', 'She is studying for exams'], a: 1 }
    ]
  },
  speaking: {
    shadow: [
      { text: "Hi, I don't think we've met. I'm Ana.", tip: "\"don't think we've\" sai quase junto: dontthinkweev." },
      { text: "I'm originally from Brazil, but I live in Lisbon now.", tip: "Ênfase em Brazil e Lisbon, as palavras que trazem informação." },
      { text: "I work in sales, but I'm studying to become a teacher.", tip: "Repare no contraste: work (sempre) × studying (fase atual)." },
      { text: "What do you do for a living?", tip: "\"What do you\" vira \"whaddaya\" na fala rápida." },
      { text: "I'm really into hiking these days. How about you?", tip: "A voz sobe no final de \"How about you?\"." }
    ],
    prompt: { q: 'Introduce yourself as if you were at a party: where you are from, what you do, and something you are doing these days.', hints: ["I'm originally from", 'I work as', "these days I'm", 'how about you'] }
  }
},

// ───────────────────────────── 2 · tema: cafeteria
{
  id: 'c02', lv: 'b1', title: 'Pedindo com educação', goal: 'Can, could, would e I\'d like: como fazer pedidos e perguntas educadas sem soar rude.',
  theory: `
<p>Em inglês, a educação mora na gramática. Um pedido direto que em português soa normal, como "me dá um café", pode parecer grosseiro em inglês. A diferença está em poucas palavras: <b>can, could, would, I'd like, would you mind</b>. Nesta lição você vai aprender a escolher o nível certo de formalidade em lojas, cafés, no trabalho e com amigos.</p>

<h3>1. A escada da educação</h3>
<p>Pense nos pedidos como uma escada. Quanto mais alto, mais educado e indireto:</p>
<table><tr><th>Nível</th><th>Estrutura</th><th>Exemplo</th></tr>
<tr><td>Direto (amigos íntimos)</td><td>Imperativo + please</td><td><em>Pass me the sugar, please.</em></td></tr>
<tr><td>Neutro</td><td>Can I / Can you...?</td><td><em>Can I get a latte?</em></td></tr>
<tr><td>Educado</td><td>Could I / Could you...?</td><td><em>Could you warm it up for me?</em></td></tr>
<tr><td>Muito educado</td><td>Would you mind + -ing?</td><td><em>Would you mind closing the window?</em></td></tr>
<tr><td>Formal</td><td>I was wondering if...</td><td><em>I was wondering if you could help me.</em></td></tr></table>
<p>Na prática, em cafés e lojas, <i>Can I get...?</i> e <i>Could I have...?</i> são os mais comuns. Ninguém vai achar estranho.</p>

<h3>2. Pedindo algo para você: I'd like, Can I get, Could I have</h3>
<p><b>I'd like</b> é a forma curta de <i>I would like</i> e significa "eu gostaria". É educado e serve em qualquer situação. <b>Can I get</b> é muito usado nos Estados Unidos em balcões. <b>Could I have</b> é um pouco mais cuidadoso.</p>
<ul>
<li><i>I'd like a medium cappuccino, please.</i></li>
<li><i>Can I get a blueberry muffin?</i></li>
<li><i>Could I have the check, please?</i></li>
</ul>
<div class="ex">Evite <b>"I want..."</b> ao pedir algo a um desconhecido. <i>I want a coffee</i> soa como uma criança exigindo. Prefira <i>I'd like a coffee</i>.</div>

<h3>3. Pedindo que alguém faça algo: Can you, Could you, Would you</h3>
<p>Quando a outra pessoa é que vai agir, a pergunta começa com <b>you</b>:</p>
<ul>
<li><i>Can you make it a little less sweet?</i></li>
<li><i>Could you put it in a to-go cup?</i></li>
<li><i>Would you write my name on it, please?</i></li>
</ul>
<p><b>Could</b> aqui não é passado. É apenas uma forma mais suave de <b>can</b>. O mesmo vale para <b>would</b> em relação a <b>will</b>.</p>

<h3>4. Would you mind...? O pedido mais gentil (e a resposta que confunde)</h3>
<p><b>Would you mind</b> significa literalmente "você se importaria". Depois dele vem o verbo com <b>-ing</b>:</p>
<ul>
<li><i>Would you mind watching my laptop for a minute?</i></li>
<li><i>Would you mind if I sat here?</i> (com <i>if</i>, usamos o passado)</li>
</ul>
<p>Cuidado com a resposta! Como a pergunta é "você se importa?", dizer <b>"No"</b> significa "não me importo, pode fazer". Respostas naturais: <i>No, not at all. / No problem. / Go ahead.</i> Se você responder <i>Yes</i>, está dizendo que se importa.</p>

<h3>5. Oferecendo algo: Would you like...?</h3>
<p>Para oferecer, usa-se <b>Would you like</b> + substantivo ou + to + verbo. É o que o barista diz para você:</p>
<table><tr><th>Oferta</th><th>Resposta natural</th></tr>
<tr><td><em>Would you like anything else?</em></td><td><em>No, that's all, thanks.</em></td></tr>
<tr><td><em>Would you like to try our new flavor?</em></td><td><em>Sure, why not?</em></td></tr>
<tr><td><em>Would you like a receipt?</em></td><td><em>Yes, please. / No, I'm good.</em></td></tr></table>
<p>Não confunda <b>Would you like</b> (você gostaria? = oferta) com <b>Do you like</b> (você gosta? = gosto geral). <i>Do you like coffee?</i> pergunta sobre seu gosto; <i>Would you like a coffee?</i> está oferecendo um.</p>

<h3>6. Pedindo permissão: Can I, Could I, May I</h3>
<p>Para pedir permissão, <b>Can I</b> é o padrão do dia a dia, <b>Could I</b> é um pouco mais educado e <b>May I</b> é formal, mas ainda usado em atendimento.</p>
<ul>
<li><i>Can I sit here?</i></li>
<li><i>Could I use your charger for a second?</i></li>
<li><i>May I ask what your Wi-Fi password is?</i></li>
</ul>

<h3>7. Suavizadores: as palavras que deixam tudo mais gentil</h3>
<p>Além dos verbos, nativos usam pequenas palavras para amaciar o pedido: <b>just, a little, maybe, possibly, for me, please</b>.</p>
<div class="ex"><b>Duro:</b> Can you change this?<br><b>Suave:</b> Could you possibly just change this for me? Sorry, I asked for oat milk.</div>
<p>E sempre agradeça: <i>Thanks so much. / I appreciate it. / That's perfect, thank you.</i></p>

<h3>Resumo</h3>
<ul>
<li>Para pedir algo para você: <b>I'd like / Can I get / Could I have</b>.</li>
<li>Para pedir que alguém faça algo: <b>Can you / Could you / Would you</b>.</li>
<li><b>Would you mind + -ing</b>; responda "No, not at all" para dizer que pode.</li>
<li><b>Would you like</b> = oferta; <b>Do you like</b> = gosto.</li>
<li>Evite "I want" com desconhecidos.</li>
</ul>`,
  say: ["Can I get a medium latte with oat milk, please?", "Could you warm it up for me?", "Would you mind watching my laptop for a minute?", "No, not at all. Go ahead.", "Would you like anything else? No, that's all, thanks.", "Could you possibly put it in a to-go cup?"],
  vocab: [
    { en: 'for here or to go', pt: 'para comer aqui ou para viagem', ex: "Is that for here or to go?" },
    { en: 'decaf', pt: 'descafeinado', ex: "I'll have a decaf, it's too late for real coffee." },
    { en: 'refill', pt: 'refil, encher de novo', ex: "Can I get a refill, please?" },
    { en: 'pastry', pt: 'doce de padaria (croissant, folhado)', ex: "Their pastries are baked every morning." },
    { en: 'barista', pt: 'barista', ex: "The barista spelled my name wrong again." },
    { en: 'the counter', pt: 'o balcão', ex: "You can pick up your order at the counter." },
    { en: 'keep the change', pt: 'pode ficar com o troco', ex: "Here's ten dollars. Keep the change." },
    { en: 'tip jar', pt: 'pote de gorjetas', ex: "I left a couple of coins in the tip jar." },
    { en: 'sold out', pt: 'esgotado', ex: "Sorry, the croissants are sold out." },
    { en: 'would you mind', pt: 'você se importaria de', ex: "Would you mind if I charged my phone here?" }
  ],
  reading: {
    title: 'The café that became an office',
    paras: [
      "Walk into almost any café in a big city on a weekday morning and you'll see the same scene: rows of laptops, people with headphones, and very few conversations. For many remote workers, the local coffee shop has quietly become their office.",
      "It's easy to see why. Working from home can be lonely, and the kitchen is always tempting you with snacks. A café offers background noise, a change of scenery and, of course, an endless supply of coffee. Some people say they actually concentrate better with a bit of noise around them.",
      "Café owners, however, have mixed feelings. A customer who buys one cappuccino and stays for five hours takes up a table that could serve several other people. Some cafés now limit Wi-Fi to two hours, while others have banned laptops on weekends, when the place is busiest.",
      "Most regulars try to be good guests. They buy something every couple of hours, share tables when it's crowded and keep video calls short. As one barista put it, 'I don't mind people working here. I mind people who forget it's still a café.'"
    ],
    gloss: { 'remote workers': 'pessoas que trabalham remotamente', 'tempting you': 'te tentando', 'a change of scenery': 'uma mudança de ambiente', 'mixed feelings': 'sentimentos contraditórios', 'banned': 'proibiram', 'regulars': 'clientes frequentes' },
    qs: [
      { q: 'Why do some people prefer working in cafés?', opts: ['Coffee is free', 'Home can be lonely and a café offers a change of scenery', 'Their companies require it', 'Cafés have better computers'], a: 1 },
      { q: 'What is the problem for café owners?', opts: ['Customers are too noisy', 'One customer can occupy a table for hours', 'Laptops break the Wi-Fi', 'People do not tip'], a: 1 },
      { q: 'What have some cafés done?', opts: ['Raised their prices', 'Limited Wi-Fi or banned laptops at busy times', 'Closed on weekdays', 'Opened offices'], a: 1 },
      { q: "What does the barista's comment mean?", opts: ['She dislikes people who work there', 'Working is fine, but people should respect the café', 'Cafés should be offices', 'She wants more customers'], a: 1 }
    ]
  },
  listening: {
    kind: 'dialogue', place: 'Um pedido que veio errado',
    lines: [
      { s: 'Customer', v: 'en-US-AvaNeural', t: "Excuse me, sorry to bother you. I think there might be a mistake with my order." },
      { s: 'Barista', v: 'en-US-AndrewNeural', t: "Oh no, let me take a look. What did you order?" },
      { s: 'Customer', v: 'en-US-AvaNeural', t: "I asked for a large iced latte with oat milk, but I think this one has regular milk. I'm lactose intolerant, so I can't really drink it." },
      { s: 'Barista', v: 'en-US-AndrewNeural', t: "I'm so sorry about that. You're right, the label says whole milk. I'll make you a new one right away." },
      { s: 'Customer', v: 'en-US-AvaNeural', t: "Thank you. Could you possibly make it a little less sweet this time? It was quite sugary." },
      { s: 'Barista', v: 'en-US-AndrewNeural', t: "Of course. I'll do half the syrup. And would you like a cookie while you wait? It's on the house, for the trouble." },
      { s: 'Customer', v: 'en-US-AvaNeural', t: "Oh, that's really kind. Sure, I'd love one. No rush with the drink." },
      { s: 'Barista', v: 'en-US-AndrewNeural', t: "It'll be about two minutes. I'll bring it over to your table." }
    ],
    qs: [
      { q: 'What was wrong with the order?', opts: ['It was hot instead of iced', 'It had regular milk instead of oat milk', 'It was the wrong size', 'It had no ice'], a: 1 },
      { q: 'Why is this a problem for the customer?', opts: ['She is on a diet', 'She is lactose intolerant', 'She does not like oat milk', 'She is in a hurry'], a: 1 },
      { q: 'What extra request does she make?', opts: ['Make it bigger', 'Make it less sweet', 'Add chocolate', 'Put it in a to-go cup'], a: 1 },
      { q: 'What does "on the house" mean?', opts: ['Delivered to her home', 'Free of charge', 'Made by the owner', 'Very expensive'], a: 1 }
    ]
  },
  speaking: {
    shadow: [
      { text: "Hi, can I get a medium cappuccino, please?", tip: "\"Can I get a\" soa como \"canaigeda\"." },
      { text: "Could you make it with oat milk?", tip: "\"Could you\" vira \"couldja\"." },
      { text: "That's all, thanks. Can I pay by card?", tip: "Pausa curta depois de \"thanks\"." },
      { text: "Would you mind if I sat here?", tip: "Ênfase em \"mind\"; a voz sobe no final." },
      { text: "Sorry, I think there's a mistake with my order.", tip: "Tom educado, sem pressa: sorry abre o pedido." }
    ],
    prompt: { q: 'You are at a café. Order a drink and something to eat, ask for one change, and then politely complain that something came wrong.', hints: ["can I get", 'could you', "I'd like", 'sorry, I think'] }
  }
},

// ───────────────────────────── 3 · tema: restaurante
{
  id: 'c03', lv: 'b1', title: 'Quantidades: some, any, much, many', goal: 'Contáveis e incontáveis, some/any, much/many, a few/a little, usando situações de quem come fora.',
  theory: `
<p>Uma das maiores fontes de erro em inglês é a diferença entre substantivos <b>contáveis</b> e <b>incontáveis</b>. Ela decide se você diz <i>much</i> ou <i>many</i>, <i>a few</i> ou <i>a little</i>, e até se a palavra pode ir para o plural. Nesta lição você vai ver tudo isso aplicado a pedidos, reservas e conversas à mesa.</p>

<h3>1. Contável × incontável</h3>
<p><b>Contáveis</b> são coisas que você pode contar uma a uma: <i>a table, two plates, three glasses</i>. Elas têm singular e plural.</p>
<p><b>Incontáveis</b> são massas, líquidos, conceitos ou coisas vistas como um todo: <i>water, rice, bread, money, advice, information, furniture</i>. Elas não vão para o plural e não usam <i>a/an</i>.</p>
<table><tr><th>Contável</th><th>Incontável</th></tr>
<tr><td>a sandwich, two sandwiches</td><td>bread (não "breads")</td></tr>
<tr><td>a coin, some coins</td><td>money</td></tr>
<tr><td>a suggestion, suggestions</td><td>advice (não "advices")</td></tr>
<tr><td>a chair, chairs</td><td>furniture</td></tr></table>
<div class="ex">Armadilhas de brasileiro: <b>information, advice, news, luggage, homework</b> são incontáveis em inglês. ❌ <i>Can you give me some advices?</i> ✅ <i>Can you give me some advice?</i></div>

<h3>2. Como "contar" um incontável</h3>
<p>Para falar de quantidades de algo incontável, usamos uma unidade: <b>a piece of, a glass of, a cup of, a slice of, a bowl of, a bottle of</b>.</p>
<ul>
<li><i>a glass of water, two glasses of wine</i></li>
<li><i>a slice of cake, a piece of advice</i></li>
<li><i>a bowl of soup, a bottle of sparkling water</i></li>
</ul>
<p>No restaurante, porém, é comum ouvir <i>Two coffees, please</i> ou <i>Three waters for the table</i>: nesse contexto entende-se "duas xícaras", "três copos".</p>

<h3>3. Some e any</h3>
<p><b>Some</b> e <b>any</b> indicam uma quantidade indefinida, como "algum/alguns" ou "um pouco de". A regra básica:</p>
<table><tr><th>Tipo de frase</th><th>Use</th><th>Exemplo</th></tr>
<tr><td>Afirmativa</td><td>some</td><td><em>We'd like some bread, please.</em></td></tr>
<tr><td>Negativa</td><td>any</td><td><em>We don't have any tables free right now.</em></td></tr>
<tr><td>Pergunta geral</td><td>any</td><td><em>Do you have any vegetarian options?</em></td></tr>
<tr><td>Oferta ou pedido</td><td>some</td><td><em>Would you like some water? / Could I have some more napkins?</em></td></tr></table>
<p>Repare na última linha: em ofertas e pedidos usamos <b>some</b> mesmo sendo pergunta, porque esperamos um "sim".</p>

<h3>4. Much, many e a lot of</h3>
<ul>
<li><b>many</b> + contável plural: <i>How many people are in your party?</i></li>
<li><b>much</b> + incontável: <i>How much time do we have before the kitchen closes?</i></li>
<li><b>a lot of / lots of</b> serve para os dois: <i>a lot of dishes, a lot of salt</i>.</li>
</ul>
<p>Na prática, <b>much</b> e <b>many</b> aparecem mais em perguntas e negativas: <i>There isn't much choice for vegans here.</i> Em frases afirmativas, nativos preferem <b>a lot of</b>: <i>This sauce has a lot of garlic.</i> Dizer <i>This sauce has much garlic</i> soa estranho.</p>

<h3>5. A few × a little, few × little</h3>
<table><tr><th>Expressão</th><th>Com</th><th>Sentido</th><th>Exemplo</th></tr>
<tr><td>a few</td><td>contáveis</td><td>alguns (positivo)</td><td><em>We need a few more minutes to decide.</em></td></tr>
<tr><td>a little</td><td>incontáveis</td><td>um pouco (positivo)</td><td><em>Could I have a little more sauce?</em></td></tr>
<tr><td>few</td><td>contáveis</td><td>poucos (negativo)</td><td><em>Few restaurants here stay open late.</em></td></tr>
<tr><td>little</td><td>incontáveis</td><td>pouco (negativo)</td><td><em>There's little parking near the restaurant.</em></td></tr></table>
<p>A presença do <b>a</b> muda a sensação: "a few" é "alguns, o suficiente"; "few" é "poucos, quase nenhum".</p>

<h3>6. Too much, too many e enough</h3>
<ul>
<li><i>There's too much salt in this soup.</i> (incontável)</li>
<li><i>There were too many people, so we left.</i> (contável)</li>
<li><i>Is there enough food for everyone?</i> / <i>We don't have enough chairs.</i></li>
</ul>

<h3>7. Linguagem de restaurante na prática</h3>
<table><tr><th>Situação</th><th>Frase</th></tr>
<tr><td>Reservar</td><td><em>I'd like to book a table for four at eight o'clock.</em></td></tr>
<tr><td>Chegar</td><td><em>Hi, we have a reservation under Costa.</em></td></tr>
<tr><td>Pedir tempo</td><td><em>Could we have a few more minutes?</em></td></tr>
<tr><td>Alergia</td><td><em>I'm allergic to nuts. Does this dish have any?</em></td></tr>
<tr><td>Ponto da carne</td><td><em>Medium rare, please.</em> (mal passado = rare, ao ponto = medium, bem passado = well-done)</td></tr>
<tr><td>Pedir a conta</td><td><em>Could we get the check, please?</em> (EUA) / <em>the bill</em> (Reino Unido)</td></tr>
<tr><td>Dividir</td><td><em>Could we split the bill?</em></td></tr></table>

<h3>Resumo</h3>
<ul>
<li>Incontáveis não têm plural nem "a": information, advice, money, bread.</li>
<li><b>some</b> em afirmativas, ofertas e pedidos; <b>any</b> em negativas e perguntas gerais.</li>
<li><b>many</b> + plural, <b>much</b> + incontável; nas afirmativas prefira <b>a lot of</b>.</li>
<li><b>a few</b> / <b>a little</b> = positivo; <b>few</b> / <b>little</b> = negativo.</li>
</ul>`,
  say: ["I'd like to book a table for four at eight o'clock.", "Do you have any vegetarian options?", "Could we have a few more minutes to decide?", "There's a little too much salt in this soup.", "I'm allergic to nuts. Does this dish have any?", "Could we get the check, please?"],
  vocab: [
    { en: 'book a table', pt: 'reservar uma mesa', ex: "I booked a table for eight o'clock." },
    { en: 'a party of four', pt: 'um grupo de quatro pessoas', ex: "Do you have room for a party of four?" },
    { en: 'starter', pt: 'entrada', ex: "We shared two starters before the main course." },
    { en: 'main course', pt: 'prato principal', ex: "For the main course, I'll have the salmon." },
    { en: 'side dish', pt: 'acompanhamento', ex: "It comes with a side dish of your choice." },
    { en: 'medium rare', pt: 'ao ponto para mal passado', ex: "I'd like my steak medium rare, please." },
    { en: 'allergic to', pt: 'alérgico a', ex: "My son is allergic to peanuts." },
    { en: 'the check', pt: 'a conta (EUA)', ex: "Could we get the check when you have a moment?" },
    { en: 'split the bill', pt: 'dividir a conta', ex: "Let's split the bill three ways." },
    { en: 'leftovers', pt: 'sobras (para levar)', ex: "Could you box up the leftovers for us?" }
  ],
  reading: {
    title: 'To tip or not to tip?',
    paras: [
      "Few things confuse travelers more than tipping. In some countries, leaving extra money for your server is almost compulsory. In others, it can be seen as unnecessary or even a little awkward. Knowing the local custom can save you from an uncomfortable moment when the check arrives.",
      "In the United States, tipping is a big part of how restaurant workers earn a living, because base wages for servers are often low. Most customers leave somewhere between fifteen and twenty percent of the bill, and many leave more for excellent service. Leaving nothing usually sends a clear message that something went very wrong.",
      "In many European countries, the situation is different. A service charge is often included, or servers earn a regular wage, so people simply round up the bill or leave a few coins. In Japan, tipping is generally not expected at all, and staff may politely return any extra money you leave on the table.",
      "When in doubt, the simplest solution is to ask. A quick question to the hotel staff, or a look at the bottom of the menu, usually tells you whether service is included. And if it isn't clear, a little extra for good service is rarely a mistake."
    ],
    gloss: { 'compulsory': 'obrigatório', 'awkward': 'constrangedor', 'earn a living': 'ganhar a vida', 'base wages': 'salário-base', 'service charge': 'taxa de serviço', 'round up': 'arredondar para cima', 'when in doubt': 'na dúvida' },
    qs: [
      { q: 'Why is tipping so important in the US?', opts: ['Food is cheap', 'Servers often have low base wages', 'It is the law', 'Restaurants are expensive'], a: 1 },
      { q: 'How much do Americans usually tip?', opts: ['About 5 percent', 'Between 15 and 20 percent', 'Exactly 10 percent', 'Nothing'], a: 1 },
      { q: 'What can happen in Japan if you leave extra money?', opts: ['Staff may return it', 'You will be charged more', 'It is expected', 'It is illegal'], a: 0 },
      { q: 'What is the writer\'s advice when you are not sure?', opts: ['Never tip', 'Always tip 20 percent', 'Ask or check if service is included', 'Pay in cash'], a: 2 }
    ]
  },
  listening: {
    kind: 'dialogue', place: 'Num restaurante, fazendo o pedido',
    lines: [
      { s: 'Server', v: 'en-US-AndrewNeural', t: "Good evening! Are you ready to order, or would you like a few more minutes?" },
      { s: 'Julia', v: 'en-US-EmmaNeural', t: "I think we're ready. Could I ask a quick question first? Does the pesto pasta have any nuts in it? I'm allergic to pine nuts." },
      { s: 'Server', v: 'en-US-AndrewNeural', t: "Good question. Our pesto is made with pine nuts, so I wouldn't recommend it. The mushroom risotto is nut-free, though, and it's very popular." },
      { s: 'Julia', v: 'en-US-EmmaNeural', t: "Perfect, I'll have the risotto, then." },
      { s: 'Paul', v: 'en-US-BrianNeural', t: "And I'll go for the steak, medium rare, with a side of fries. Could I have a little extra pepper sauce on the side?" },
      { s: 'Server', v: 'en-US-AndrewNeural', t: "Of course. Anything to drink?" },
      { s: 'Paul', v: 'en-US-BrianNeural', t: "Just some sparkling water for the table, please. A large bottle." },
      { s: 'Server', v: 'en-US-AndrewNeural', t: "Great. I'll bring some bread while you wait. The steak takes about twenty minutes." },
      { s: 'Julia', v: 'en-US-EmmaNeural', t: "No problem, we're not in a hurry. Thank you!" }
    ],
    qs: [
      { q: 'Why does Julia avoid the pesto pasta?', opts: ['She does not like basil', 'She is allergic to pine nuts', 'It is too expensive', 'It is sold out'], a: 1 },
      { q: 'What does the server recommend?', opts: ['The steak', 'The mushroom risotto', 'A salad', 'The fish'], a: 1 },
      { q: 'How does Paul want his steak?', opts: ['Well-done', 'Medium', 'Medium rare', 'Rare'], a: 2 },
      { q: 'What will the server bring while they wait?', opts: ['Wine', 'Bread', 'Soup', 'Dessert'], a: 1 }
    ]
  },
  speaking: {
    shadow: [
      { text: "Hi, we have a reservation for two under Silva.", tip: "\"under Silva\": a reserva fica \"sob\" o nome." },
      { text: "Do you have any vegetarian options?", tip: "Ênfase em \"vegetarian\": ve-ge-TA-rian." },
      { text: "I'll have the salmon with a side salad, please.", tip: "\"I'll have the\" sai junto: ailhavthe." },
      { text: "Could we have a little more bread?", tip: "\"a little\" no americano soa \"a lidl\"." },
      { text: "Could we get the check, please?", tip: "\"get the\" vira \"gedthe\"." }
    ],
    prompt: { q: 'Describe the last time you ate at a restaurant: what you ordered, how much food there was, and whether there were any problems.', hints: ['a lot of', 'a few', 'some', 'any', 'too much'] }
  }
},

// ───────────────────────────── 4 · tema: cozinhar em casa
{
  id: 'c04', lv: 'b1', title: 'Dando instruções passo a passo', goal: 'Imperativo, conectores de sequência e verbos de ação para explicar como se faz qualquer coisa.',
  theory: `
<p>Explicar como fazer algo é uma das habilidades mais úteis numa língua: uma receita, o caminho até sua casa, como usar um aplicativo. Em inglês, isso depende de três ferramentas: o <b>imperativo</b>, os <b>conectores de sequência</b> e um bom repertório de <b>verbos de ação</b>. Nesta lição usamos a cozinha como laboratório, mas tudo serve para qualquer tipo de instrução.</p>

<h3>1. O imperativo: simples e direto</h3>
<p>O imperativo é o verbo na forma base, sem sujeito: <i>Chop the onions. Add the salt. Stir well.</i> Em português usamos "pique", "adicione", "mexa". Em inglês ele não soa mal-educado em instruções: é o padrão de receitas, manuais e tutoriais.</p>
<ul>
<li>Afirmativo: <i>Preheat the oven to 200 degrees.</i></li>
<li>Negativo: <b>Don't</b> + verbo: <i>Don't open the oven while the cake is baking.</i></li>
<li>Ênfase: <b>Make sure</b> / <b>Be careful</b>: <i>Make sure the pan is really hot. Be careful not to burn the garlic.</i></li>
</ul>
<div class="ex">Em conversa, para suavizar, nativos usam <b>you</b>: <i>You just chop everything, then you throw it in the pan.</i> Soa como alguém explicando a um amigo, não como um manual.</div>

<h3>2. Conectores de sequência</h3>
<p>São eles que transformam uma lista de ordens numa explicação clara:</p>
<table><tr><th>Função</th><th>Conectores</th></tr>
<tr><td>Começar</td><td><em>First, / First of all, / To start,</em></td></tr>
<tr><td>Continuar</td><td><em>Then, / Next, / After that,</em></td></tr>
<tr><td>Ao mesmo tempo</td><td><em>While the pasta is cooking, ... / Meanwhile, ...</em></td></tr>
<tr><td>Assim que</td><td><em>Once the water boils, ... / As soon as it's golden, ...</em></td></tr>
<tr><td>Até</td><td><em>Stir until the sauce thickens.</em></td></tr>
<tr><td>Terminar</td><td><em>Finally, / Lastly, / To finish,</em></td></tr></table>
<p>Atenção: depois de <b>once, as soon as, until, when</b> usamos o presente, mesmo falando do futuro: <i>Once the water <b>boils</b>, add the pasta.</i> Nunca "once the water will boil".</p>

<h3>3. Verbos da cozinha (e de muitas outras coisas)</h3>
<table><tr><th>Verbo</th><th>Sentido</th><th>Exemplo</th></tr>
<tr><td>chop</td><td>picar</td><td><em>Chop the onion finely.</em></td></tr>
<tr><td>slice</td><td>fatiar</td><td><em>Slice the tomatoes thinly.</em></td></tr>
<tr><td>peel</td><td>descascar</td><td><em>Peel the potatoes.</em></td></tr>
<tr><td>stir</td><td>mexer</td><td><em>Stir the sauce every few minutes.</em></td></tr>
<tr><td>boil</td><td>ferver, cozinhar em água</td><td><em>Boil the eggs for eight minutes.</em></td></tr>
<tr><td>fry</td><td>fritar</td><td><em>Fry the garlic in olive oil.</em></td></tr>
<tr><td>bake</td><td>assar (pão, bolo)</td><td><em>Bake for thirty minutes.</em></td></tr>
<tr><td>roast</td><td>assar (carne, legumes)</td><td><em>Roast the vegetables with herbs.</em></td></tr>
<tr><td>season</td><td>temperar</td><td><em>Season with salt and pepper.</em></td></tr>
<tr><td>drain</td><td>escorrer</td><td><em>Drain the pasta, but keep some water.</em></td></tr></table>

<h3>4. Advérbios que dão precisão</h3>
<p>Instruções boas dizem <b>como</b> fazer: <i>finely</i> (bem miudinho), <i>thinly</i> (fino), <i>gently</i> (delicadamente), <i>slowly</i>, <i>well</i>, <i>occasionally</i> (de vez em quando), <i>constantly</i> (sem parar).</p>
<ul>
<li><i>Stir constantly, or the milk will burn.</i></li>
<li><i>Fold the egg whites in gently.</i></li>
</ul>

<h3>5. Quantidades e medidas</h3>
<p>Receitas em inglês usam muito: <b>a pinch of salt</b> (uma pitada), <b>a tablespoon</b> (colher de sopa), <b>a teaspoon</b> (colher de chá), <b>a cup of flour</b>, <b>a handful of</b> (um punhado), <b>a dash of</b> (um pingo), <b>a clove of garlic</b> (um dente de alho).</p>

<h3>6. Explicando o resultado esperado</h3>
<p>Para dizer quando algo está pronto, usamos <b>until</b> + resultado:</p>
<ul>
<li><i>Fry the onions until they're soft and golden.</i></li>
<li><i>Bake until a knife comes out clean.</i></li>
<li><i>Cook until the sauce is thick enough to coat a spoon.</i></li>
</ul>

<h3>7. Juntando tudo</h3>
<div class="ex"><i>First, boil some salted water. While it's heating up, chop two cloves of garlic finely. Then, fry the garlic gently in olive oil until it's golden, but be careful not to burn it. Once the water boils, add the pasta and cook it for about nine minutes. Drain it, keeping a little of the water, and toss everything together. Finally, season with salt, pepper and a handful of parsley.</i></div>
<p>Repare como os conectores organizam tudo e como os advérbios dão precisão. Esse mesmo modelo serve para ensinar alguém a montar um móvel ou configurar um celular.</p>

<h3>Resumo</h3>
<ul>
<li>Imperativo = verbo base, sem sujeito; negativo com <b>don't</b>.</li>
<li>Sequência: <b>first, then, next, after that, meanwhile, finally</b>.</li>
<li>Depois de <b>once / until / as soon as</b>, use o presente.</li>
<li>Advérbios (finely, gently, constantly) deixam a instrução clara.</li>
</ul>`,
  say: ["First, chop the onion and two cloves of garlic finely.", "While the water is heating up, slice the tomatoes.", "Once the water boils, add the pasta.", "Fry the garlic gently until it's golden, but don't burn it.", "Season with a pinch of salt and some black pepper.", "Bake for thirty minutes, or until a knife comes out clean."],
  vocab: [
    { en: 'chop', pt: 'picar', ex: "Chop the onions and set them aside." },
    { en: 'stir', pt: 'mexer', ex: "Stir the sauce every few minutes." },
    { en: 'preheat the oven', pt: 'preaquecer o forno', ex: "Preheat the oven to 180 degrees." },
    { en: 'a pinch of', pt: 'uma pitada de', ex: "Add a pinch of salt to the dough." },
    { en: 'a clove of garlic', pt: 'um dente de alho', ex: "Crush a clove of garlic and add it to the pan." },
    { en: 'until golden', pt: 'até dourar', ex: "Fry the potatoes until golden." },
    { en: 'drain', pt: 'escorrer', ex: "Drain the pasta and keep a cup of the water." },
    { en: 'recipe', pt: 'receita', ex: "This recipe is from my grandmother." },
    { en: 'ingredients', pt: 'ingredientes', ex: "You only need five ingredients for this dish." },
    { en: 'from scratch', pt: 'do zero, caseiro', ex: "She makes her bread from scratch every weekend." }
  ],
  reading: {
    title: 'The five-ingredient dinner',
    paras: [
      "Many people say they don't cook because they don't have time. But often the real problem isn't time; it's decisions. After a long day, opening the fridge and trying to invent a meal can feel exhausting, so ordering delivery wins again.",
      "One popular solution is the five-ingredient rule. The idea is simple: every dinner you cook during the week uses no more than five main ingredients, not counting basics like oil, salt and pepper. Fewer ingredients mean less shopping, less chopping and much less washing up.",
      "A classic example is pasta with garlic, lemon and spinach. You boil the pasta, fry a little garlic in olive oil, throw in a handful of spinach until it wilts, then mix everything with lemon juice and grated cheese. It takes fifteen minutes and tastes like something from a restaurant.",
      "Fans of the rule say it also makes them better cooks. With only five ingredients, each one matters, so they start paying attention to quality and technique. And on the nights when even five feels like too much, there's always the most underrated dinner of all: eggs on toast."
    ],
    gloss: { 'exhausting': 'exaustivo', 'washing up': 'lavar a louça', 'throw in': 'jogar dentro', 'wilts': 'murcha', 'grated cheese': 'queijo ralado', 'underrated': 'subestimado' },
    qs: [
      { q: 'According to the text, what is often the real reason people do not cook?', opts: ['Lack of money', 'Having to make decisions after a long day', 'Small kitchens', 'Not liking food'], a: 1 },
      { q: 'What does the five-ingredient rule exclude from the count?', opts: ['Vegetables', 'Pasta', 'Basics like oil, salt and pepper', 'Cheese'], a: 2 },
      { q: 'How long does the pasta example take?', opts: ['Five minutes', 'Fifteen minutes', 'Thirty minutes', 'An hour'], a: 1 },
      { q: 'Why might the rule make people better cooks?', opts: ['They use more spices', 'Each ingredient matters, so they focus on quality and technique', 'They cook more often for friends', 'Recipes become longer'], a: 1 }
    ]
  },
  listening: {
    kind: 'dialogue', place: 'Uma amiga explicando uma receita por telefone',
    lines: [
      { s: 'Sofia', v: 'en-GB-SoniaNeural', t: "Hiya! You wanted my shakshuka recipe, right? Have you got a pen?" },
      { s: 'Tom', v: 'en-GB-RyanNeural', t: "I'm ready. Go slowly, though. I'm a terrible cook." },
      { s: 'Sofia', v: 'en-GB-SoniaNeural', t: "Don't worry, it's really easy. First, chop an onion and a red pepper, and fry them gently in olive oil for about ten minutes, until they're soft." },
      { s: 'Tom', v: 'en-GB-RyanNeural', t: "Onion, pepper, ten minutes. Got it. Then what?" },
      { s: 'Sofia', v: 'en-GB-SoniaNeural', t: "Then add two cloves of garlic and a teaspoon of cumin and paprika. Stir for a minute, but don't let the garlic burn, or it'll taste bitter." },
      { s: 'Tom', v: 'en-GB-RyanNeural', t: "Okay. And the tomatoes?" },
      { s: 'Sofia', v: 'en-GB-SoniaNeural', t: "Next, pour in a tin of chopped tomatoes and let it simmer until the sauce gets thick, maybe ten more minutes. Season it with salt and pepper." },
      { s: 'Tom', v: 'en-GB-RyanNeural', t: "And when do the eggs go in?" },
      { s: 'Sofia', v: 'en-GB-SoniaNeural', t: "Once the sauce is thick, make little holes with a spoon and crack an egg into each one. Put a lid on and cook until the whites are set but the yolks are still runny. Finally, sprinkle some fresh coriander on top. Serve it with bread." },
      { s: 'Tom', v: 'en-GB-RyanNeural', t: "That actually sounds doable. If it goes wrong, I'm blaming you." }
    ],
    qs: [
      { q: 'What does Tom say about himself?', opts: ['He is a chef', 'He is a terrible cook', 'He does not like eggs', 'He has no time'], a: 1 },
      { q: 'Why should the garlic not burn?', opts: ['It will taste bitter', 'It will smell bad', 'The pan will break', 'It will lose its color'], a: 0 },
      { q: 'When should the eggs go in?', opts: ['At the beginning', 'With the onions', 'Once the sauce is thick', 'After serving'], a: 2 },
      { q: 'How should the yolks be at the end?', opts: ['Completely hard', 'Still runny', 'Mixed with the sauce', 'Removed'], a: 1 }
    ]
  },
  speaking: {
    shadow: [
      { text: "First, chop the onion finely.", tip: "\"chop the\": o p quase não solta ar antes do th." },
      { text: "Then, fry it gently in olive oil.", tip: "\"olive oil\" = ÓL-iv OIL, sem o i final." },
      { text: "Once the water boils, add the pasta.", tip: "Pausa natural depois da vírgula." },
      { text: "Stir it every few minutes, until the sauce thickens.", tip: "\"thickens\" começa com th sem vibrar: língua entre os dentes." },
      { text: "Finally, season it with salt and pepper.", tip: "Ênfase em \"Finally\" para fechar a sequência." }
    ],
    prompt: { q: 'Explain, step by step, how to make a simple dish you know well (or a typical Brazilian dish).', hints: ['first', 'then', 'once', 'until', 'finally'] }
  }
},

// ───────────────────────────── 5 · tema: supermercado e compras de casa
{
  id: 'c05', lv: 'b1', title: 'Embalagens, medidas e how much / how many', goal: 'Expressões de quantidade (a loaf of, a carton of, a bunch of), perguntas com how much/how many e o vocabulário de uma ida às compras.',
  theory: `
<p>Fazer compras parece simples até você precisar pedir "um pacote de", "uma dúzia de" ou "um maço de" em inglês. Essas expressões são muito específicas e raramente se traduzem palavra por palavra. Nesta lição você vai aprender as embalagens e medidas mais comuns, revisar <b>how much / how many</b> e aprender a falar de preços, ofertas e quantidades.</p>

<h3>1. Embalagens e unidades: o "contador" de cada coisa</h3>
<p>Como vimos na lição sobre quantidades, incontáveis precisam de uma unidade. Cada tipo de produto tem a sua:</p>
<table><tr><th>Expressão</th><th>Usada para</th><th>Exemplo</th></tr>
<tr><td>a loaf of</td><td>pão inteiro</td><td><em>a loaf of bread</em></td></tr>
<tr><td>a carton of</td><td>caixa (leite, ovos, suco)</td><td><em>a carton of milk, a carton of eggs</em></td></tr>
<tr><td>a bunch of</td><td>cacho, maço</td><td><em>a bunch of bananas, a bunch of parsley</em></td></tr>
<tr><td>a can / a tin of</td><td>lata (EUA / Reino Unido)</td><td><em>a can of beans, a tin of tomatoes</em></td></tr>
<tr><td>a jar of</td><td>pote de vidro</td><td><em>a jar of honey</em></td></tr>
<tr><td>a bag of</td><td>saco, pacote</td><td><em>a bag of rice, a bag of chips</em></td></tr>
<tr><td>a bottle of</td><td>garrafa</td><td><em>a bottle of olive oil</em></td></tr>
<tr><td>a pack of</td><td>pacote (vários itens)</td><td><em>a pack of gum, a six-pack of beer</em></td></tr>
<tr><td>a bar of</td><td>barra</td><td><em>a bar of chocolate, a bar of soap</em></td></tr>
<tr><td>a head of</td><td>pé (alface, repolho)</td><td><em>a head of lettuce</em></td></tr>
<tr><td>a dozen</td><td>dúzia</td><td><em>a dozen eggs</em> (sem "of")</td></tr></table>
<div class="ex">Detalhe importante: dizemos <b>a dozen eggs</b>, sem "of". Mas <b>dozens of people</b>, com "of", quando é uma quantidade vaga.</div>

<h3>2. Pesos e medidas</h3>
<p>Nos Estados Unidos ainda se usam <b>pounds</b> (libras, cerca de 450 g) e <b>ounces</b>. No Reino Unido e na maior parte do mundo, <b>kilos</b> e <b>grams</b>. Frases úteis:</p>
<ul>
<li><i>Could I have half a kilo of ground beef?</i></li>
<li><i>I'll take about two hundred grams of ham, sliced thin.</i></li>
<li><i>How much is it per kilo?</i></li>
</ul>

<h3>3. How much × how many</h3>
<table><tr><th>Pergunta</th><th>Com</th><th>Exemplo</th></tr>
<tr><td>How many...?</td><td>contáveis no plural</td><td><em>How many eggs do we need?</em></td></tr>
<tr><td>How much...?</td><td>incontáveis</td><td><em>How much milk is left?</em></td></tr>
<tr><td>How much is / are...?</td><td>preço</td><td><em>How much is this cheese? How much are the avocados?</em></td></tr></table>
<p>Para perguntar preço, a forma mais natural é <b>How much is it?</b> ou <b>How much does it cost?</b>. No plural: <b>How much are they?</b></p>

<h3>4. Falando de preços e ofertas</h3>
<table><tr><th>Expressão</th><th>Sentido</th></tr>
<tr><td><em>on sale</em></td><td>em promoção</td></tr>
<tr><td><em>buy one, get one free</em></td><td>leve dois, pague um</td></tr>
<tr><td><em>a good deal / a bargain</em></td><td>uma pechincha</td></tr>
<tr><td><em>pricey / overpriced</em></td><td>caro / caro demais</td></tr>
<tr><td><em>it's a rip-off</em></td><td>é um roubo (informal)</td></tr>
<tr><td><em>store brand</em></td><td>marca própria do mercado</td></tr>
<tr><td><em>expiration date / best before</em></td><td>data de validade</td></tr></table>
<p>Lembre: <b>on sale</b> é "em promoção"; <b>for sale</b> é "à venda". <i>This house is for sale</i> (está à venda); <i>these shoes are on sale</i> (estão com desconto).</p>

<h3>5. Lugares e coisas do mercado</h3>
<ul>
<li><b>aisle</b> (corredor; o "s" é mudo: /ail/): <i>The rice is in aisle five.</i></li>
<li><b>cart</b> (EUA) / <b>trolley</b> (Reino Unido): carrinho.</li>
<li><b>checkout</b>: caixa; <b>self-checkout</b>: caixa de autoatendimento.</li>
<li><b>cashier</b>: operador de caixa; <b>receipt</b>: recibo, nota (o "p" é mudo: /ri-SIIT/).</li>
<li><b>produce section</b>: setor de frutas e verduras; <b>frozen food</b>: congelados; <b>dairy</b>: laticínios.</li>
</ul>

<h3>6. Fazendo uma lista e falando do que falta</h3>
<p>Em casa, a conversa sobre compras usa muito <b>run out of</b> (acabar), <b>there's no / there isn't any</b>, <b>we're out of</b> e <b>we need to get</b>:</p>
<div class="ex"><i>We're out of milk, and there's only a little coffee left. We need to get some bread, a dozen eggs and a bunch of bananas. Oh, and the olive oil is almost finished, so let's get a big bottle. It's on sale this week.</i></div>

<h3>7. No caixa</h3>
<table><tr><th>Você ouve</th><th>Você responde</th></tr>
<tr><td><em>Did you find everything you were looking for?</em></td><td><em>Yes, thanks.</em></td></tr>
<tr><td><em>Do you need a bag?</em></td><td><em>No, I brought my own.</em></td></tr>
<tr><td><em>Cash or card?</em></td><td><em>Card, please.</em></td></tr>
<tr><td><em>Would you like your receipt?</em></td><td><em>No, that's okay.</em></td></tr></table>

<h3>Resumo</h3>
<ul>
<li>Cada produto tem sua unidade: loaf, carton, bunch, can, jar, bag, bar.</li>
<li><b>a dozen eggs</b> (sem of).</li>
<li><b>How many</b> + contável; <b>how much</b> + incontável ou preço.</li>
<li><b>on sale</b> = em promoção; <b>for sale</b> = à venda.</li>
<li><b>We're out of / we ran out of</b> = acabou.</li>
</ul>`,
  say: ["We're out of milk, so let's get a carton on the way home.", "Could I have half a kilo of ground beef, please?", "How much are the avocados? They're on sale this week.", "Excuse me, which aisle is the rice in?", "Do you need a bag? No, thanks, I brought my own.", "I'll take a loaf of bread and a dozen eggs."],
  vocab: [
    { en: 'a loaf of bread', pt: 'um pão (inteiro)', ex: "Can you grab a loaf of bread on your way home?" },
    { en: 'a carton of eggs', pt: 'uma caixa de ovos', ex: "We need a carton of eggs for the cake." },
    { en: 'a bunch of bananas', pt: 'um cacho de bananas', ex: "I bought a bunch of bananas and some apples." },
    { en: 'aisle', pt: 'corredor (de mercado, avião)', ex: "The pasta is in aisle seven." },
    { en: 'checkout', pt: 'caixa (do mercado)', ex: "The line at the checkout was huge." },
    { en: 'on sale', pt: 'em promoção', ex: "Coffee is on sale this week, so I got two bags." },
    { en: 'expiration date', pt: 'data de validade', ex: "Always check the expiration date on yogurt." },
    { en: 'run out of', pt: 'ficar sem, acabar', ex: "We ran out of coffee this morning." },
    { en: 'store brand', pt: 'marca própria do mercado', ex: "The store brand is just as good and much cheaper." },
    { en: 'receipt', pt: 'recibo, nota fiscal', ex: "Keep the receipt in case you need to return it." }
  ],
  reading: {
    title: 'How supermarkets make you spend more',
    paras: [
      "Have you ever gone to the supermarket for milk and come home with a full bag of things you didn't plan to buy? You're not alone, and it's not entirely your fault. Supermarkets are carefully designed to keep you walking, looking and adding things to your cart.",
      "Notice where the basics are. Milk, eggs and bread are often at the back of the store, so you have to walk past dozens of tempting products to reach them. The most profitable items tend to sit at eye level, while cheaper brands are placed on the bottom shelves, where fewer people bother to look.",
      "Even the smell and the music play a role. The scent of fresh bread near the entrance makes people feel hungry, and hungry shoppers buy more. Slow background music can make customers walk more slowly and spend a little longer in each aisle.",
      "The good news is that a few simple habits can protect your wallet. Make a list and stick to it, never shop on an empty stomach, and look at the top and bottom shelves before grabbing what's in front of you. Your future self, and your bank account, will thank you."
    ],
    gloss: { 'tempting': 'tentador', 'profitable': 'lucrativo', 'eye level': 'altura dos olhos', 'bother to look': 'se dar ao trabalho de olhar', 'scent': 'cheiro, aroma', 'stick to it': 'se manter fiel a ela', 'on an empty stomach': 'de barriga vazia' },
    qs: [
      { q: 'Why are basics like milk often at the back of the store?', opts: ['They need refrigeration there', 'So customers walk past many other products', 'They are cheap', 'Workers prefer it'], a: 1 },
      { q: 'Where are the most profitable products usually placed?', opts: ['On the bottom shelves', 'At eye level', 'Near the exit', 'In the parking lot'], a: 1 },
      { q: 'What effect does slow music have?', opts: ['Customers leave faster', 'Customers walk more slowly and stay longer', 'Customers buy less', 'Customers get annoyed'], a: 1 },
      { q: 'Which is NOT one of the tips at the end?', opts: ['Make a list', "Don't shop when hungry", 'Look at top and bottom shelves', 'Shop only at night'], a: 3 }
    ]
  },
  listening: {
    kind: 'dialogue', place: 'Um casal fazendo a lista de compras',
    lines: [
      { s: 'Mia', v: 'en-US-AvaNeural', t: "Okay, I'm making the shopping list. What do we need?" },
      { s: 'Ben', v: 'en-US-AndrewNeural', t: "Well, we're out of coffee, which is an emergency. And there's no milk left either." },
      { s: 'Mia', v: 'en-US-AvaNeural', t: "Coffee and milk. How many eggs do we have?" },
      { s: 'Ben', v: 'en-US-AndrewNeural', t: "Just two, I think. Let's get a dozen. Oh, and a loaf of that whole-wheat bread you like." },
      { s: 'Mia', v: 'en-US-AvaNeural', t: "Good idea. What about dinner for the weekend? Your parents are coming on Saturday." },
      { s: 'Ben', v: 'en-US-AndrewNeural', t: "Right! Let's make lasagna. We'll need ground beef, maybe a kilo, two cans of tomatoes and a lot of cheese." },
      { s: 'Mia', v: 'en-US-AvaNeural', t: "How much cheese is a lot of cheese?" },
      { s: 'Ben', v: 'en-US-AndrewNeural', t: "With my dad? At least half a kilo. And let's get a bunch of basil and a bag of salad for the side." },
      { s: 'Mia', v: 'en-US-AvaNeural', t: "Got it. I'll check the app first. I think pasta and olive oil are on sale this week, so we can stock up." }
    ],
    qs: [
      { q: 'What does Ben call an emergency?', opts: ['Having no milk', 'Being out of coffee', 'His parents visiting', 'Having no eggs'], a: 1 },
      { q: 'How many eggs do they decide to buy?', opts: ['Two', 'Six', 'A dozen', 'None'], a: 2 },
      { q: 'What will they cook for Ben\'s parents?', opts: ['Steak', 'Lasagna', 'Pizza', 'Salad only'], a: 1 },
      { q: 'Why does Mia want to check the app?', opts: ['To order delivery', 'To see what is on sale', 'To find a recipe', 'To pay the bill'], a: 1 }
    ]
  },
  speaking: {
    shadow: [
      { text: "We're out of coffee, so we need to get some.", tip: "\"out of\" vira \"oudov\"." },
      { text: "How much is a kilo of tomatoes?", tip: "\"How much is a\" sai num fôlego só." },
      { text: "I'll take a loaf of bread and a carton of milk.", tip: "\"loaf of\" = lôuf-ov, o f liga no of." },
      { text: "Excuse me, which aisle is the olive oil in?", tip: "\"aisle\" = /ail/, o s é mudo." },
      { text: "These are on sale, buy one, get one free.", tip: "Ritmo de anúncio: ênfase em one e free." }
    ],
    prompt: { q: 'Describe your last trip to the supermarket: what you needed, what you actually bought, and whether anything was on sale.', hints: ['a bag of', 'a bunch of', "we're out of", 'on sale', 'how much'] }
  }
}
]);
