// Curso diário — lições 51 a 55 (temas de fundo anotados só no código).
window.COURSE = (window.COURSE || []).concat([

// ───────────────────────────── 51 · tema: ligações telefônicas
{
  id: 'c51', lv: 'b2', title: 'Falando ao telefone', goal: 'Frases e phrasal verbs de ligação: hold on, put through, call back, cut off, e como entender quem fala rápido.',
  theory: `
<p>Falar ao telefone em outra língua é um dos maiores desafios para qualquer estudante: não há expressões faciais nem gestos para ajudar, o áudio às vezes é ruim e as pessoas falam rápido. A boa notícia é que as ligações seguem roteiros muito previsíveis. Nesta lição você vai aprender as frases de cada etapa e os phrasal verbs que aparecem em quase toda ligação.</p>

<h3>1. Atendendo e se apresentando</h3>
<ul>
<li>Informal: <i>Hello? / Hi, it's Ana.</i></li>
<li>Profissional: <i>Good morning, Brightside Marketing, Paula speaking. How can I help you?</i></li>
<li>Dizendo quem é: <i>Hi, this is Carlos from the bank.</i> (no telefone, use <b>this is</b>, não "I am")</li>
<li>Perguntando quem é: <i>Who's calling, please? / May I ask who's calling?</i></li>
</ul>

<h3>2. Pedindo para falar com alguém</h3>
<ul>
<li><i>Could I speak to Mr. Lima, please?</i></li>
<li><i>I'm calling about the job advert. / I'm calling to confirm my appointment.</i></li>
<li><i>Is Sarah available?</i></li>
</ul>

<h3>3. Os phrasal verbs do telefone</h3>
<table><tr><th>Phrasal verb</th><th>Sentido</th><th>Exemplo</th></tr>
<tr><td>hold on / hang on</td><td>aguardar na linha</td><td><em>Hold on a second, I'll get him.</em></td></tr>
<tr><td>put through</td><td>transferir a ligação</td><td><em>I'll put you through to the sales department.</em></td></tr>
<tr><td>call back / ring back (UK)</td><td>retornar a ligação</td><td><em>Can you call me back in ten minutes?</em></td></tr>
<tr><td>hang up</td><td>desligar</td><td><em>Don't hang up! I haven't finished.</em></td></tr>
<tr><td>cut off</td><td>a ligação cair</td><td><em>Sorry, we got cut off.</em></td></tr>
<tr><td>pick up</td><td>atender</td><td><em>I called three times, but nobody picked up.</em></td></tr>
<tr><td>get through</td><td>conseguir falar com</td><td><em>I couldn't get through to customer service.</em></td></tr>
<tr><td>speak up</td><td>falar mais alto</td><td><em>Could you speak up a bit? The line is bad.</em></td></tr></table>

<h3>4. Quando a pessoa não está</h3>
<ul>
<li><i>I'm afraid she's not available at the moment. / He's in a meeting.</i></li>
<li><i>Would you like to leave a message?</i></li>
<li><i>Can I take a message?</i></li>
<li><i>Could you ask her to call me back? My number is...</i></li>
</ul>

<h3>5. Quando você não entende</h3>
<p>Essas frases salvam qualquer ligação:</p>
<ul>
<li><i>Sorry, I didn't catch that. Could you repeat it?</i></li>
<li><i>Could you speak a bit more slowly, please?</i></li>
<li><i>Could you spell that for me?</i></li>
<li><i>Sorry, the line is really bad. You're breaking up.</i> (a voz está cortando)</li>
<li><i>Just to confirm, that's Thursday at 3 p.m.?</i></li>
</ul>
<div class="ex">Para soletrar nomes, nativos usam palavras de referência: <i>B as in Bravo, M as in Mike</i>. E números de telefone são ditos dígito a dígito, com o zero como <b>oh</b>: <i>oh-seven-nine...</i></div>

<h3>6. Encerrando</h3>
<ul>
<li><i>Thanks for your help. / Thanks for calling.</i></li>
<li><i>I'll let you go.</i> (forma educada de encerrar: "vou deixar você")</li>
<li><i>Talk to you soon. / Speak soon. / Bye for now.</i></li>
</ul>

<h3>7. Mensagens de voz</h3>
<p>Uma mensagem clara tem: quem você é, o motivo, o que você quer e como te encontrar:</p>
<div class="ex"><i>Hi, this is Julia Santos. I'm calling about my order, number 4521. It hasn't arrived yet. Could you call me back on 0207 555 0123? Thanks, bye.</i></div>

<h3>Resumo</h3>
<ul>
<li>No telefone: <b>this is...</b> para se apresentar.</li>
<li>hold on, put through, call back, hang up, cut off, pick up, get through.</li>
<li>Não entendeu? <i>Sorry, I didn't catch that. Could you spell that?</i></li>
<li>Recados: <i>Can I take a message? / Could you ask him to call me back?</i></li>
</ul>`,
  say: ["Hi, this is Carlos from the bank. Could I speak to Ms. Lima, please?", "Hold on a second. I'll put you through.", "Sorry, we got cut off. Can you hear me now?", "I'm afraid she's in a meeting. Can I take a message?", "Sorry, I didn't catch that. Could you spell your name?", "Could you ask him to call me back this afternoon?"],
  vocab: [
    { en: 'hold on', pt: 'aguardar (na linha)', ex: "Hold on a moment, please." },
    { en: 'put through', pt: 'transferir (a ligação)', ex: "I'll put you through to the manager." },
    { en: 'call back', pt: 'retornar a ligação', ex: "Can you call me back after lunch?" },
    { en: 'hang up', pt: 'desligar (o telefone)', ex: "He hung up before I could explain." },
    { en: 'get cut off', pt: 'a ligação cair', ex: "Sorry, we got cut off." },
    { en: 'pick up', pt: 'atender', ex: "Nobody picked up the phone." },
    { en: 'get through', pt: 'conseguir falar', ex: "I couldn't get through to the airline." },
    { en: 'take a message', pt: 'anotar um recado', ex: "She's out. Can I take a message?" },
    { en: "didn't catch that", pt: 'não entendi isso', ex: "Sorry, I didn't catch that." },
    { en: 'breaking up', pt: 'cortando (voz na ligação)', ex: "You're breaking up. I'll call you back." }
  ],
  pics: [
    { en: 'a telephone', pt: 'um telefone', img: 'Telephone receiver' },
    { en: 'a mobile phone', pt: 'um celular', img: 'Mobile phone' },
    { en: 'a fax machine', pt: 'um fax', img: 'Fax machine' },
    { en: 'signal bars', pt: 'barras de sinal', img: 'Antenna bars' },
    { en: 'vibrate mode', pt: 'modo vibrar', img: 'Vibration mode' },
    { en: 'a loud speaker', pt: 'volume alto', img: 'Speaker high volume' },
    { en: 'mute', pt: 'mudo', img: 'Muted speaker' },
    { en: 'a pager', pt: 'um pager', img: 'Pager' }
  ],
  fill: [
    { s: 'Hold ___ a second. I\'ll get him.', a: 'on' },
    { s: "I'll put you ___ to the sales department.", a: 'through' },
    { s: 'Can you call me ___ in ten minutes?', a: 'back' },
    { s: 'Sorry, we got cut ___.', a: 'off' },
    { s: 'I called three times, but nobody picked ___.', a: 'up' },
    { s: "Sorry, I didn't ___ that. Could you repeat it?", a: 'catch' },
    { s: "She's not here. Can I take a ___?", a: 'message' }
  ],
  reading: {
    title: 'Why young people hate phone calls',
    paras: [
      "For older generations, the phone call was the most natural way to communicate. Today, many people under thirty say they find calls stressful and avoid them whenever possible. Some even let their phone ring until it stops, then send a text asking what the caller wanted.",
      "Part of the reason is control. With a text message, you can think before you answer, edit what you write and reply when it suits you. A phone call happens in real time: you have to respond immediately, and there's no way to take back something awkward you've said.",
      "Calls also feel more intrusive. A message waits patiently until you're ready, but a ringing phone demands attention right now, interrupting whatever you were doing. For a generation used to multitasking, that interruption can feel almost rude.",
      "Still, communication experts argue that calls have advantages that texts can't match. Tone of voice prevents misunderstandings, complicated problems are solved faster, and hearing someone's voice builds a stronger connection. Many suggest a simple compromise: send a quick message first asking, 'Is now a good time to call?'"
    ],
    gloss: { 'stressful': 'estressante', 'when it suits you': 'quando for conveniente', 'take back': 'retirar (o que disse)', 'intrusive': 'invasivo', 'multitasking': 'fazer várias coisas ao mesmo tempo', 'compromise': 'meio-termo' },
    qs: [
      { q: 'How do many people under thirty feel about phone calls?', opts: ['They love them', 'They find them stressful', 'They prefer them to texts', 'They don\'t have phones'], a: 1 },
      { q: 'What advantage do text messages offer?', opts: ['They are cheaper', 'You can think and edit before answering', 'They are faster', 'They are more personal'], a: 1 },
      { q: 'Why do calls feel intrusive?', opts: ['They are expensive', 'They demand attention immediately', 'They are too long', 'They are recorded'], a: 1 },
      { q: 'What compromise do experts suggest?', opts: ['Only using email', 'Sending a message first asking if it\'s a good time to call', 'Never calling', 'Calling only at night'], a: 1 }
    ]
  },
  listening: {
    kind: 'dialogue', place: 'Uma ligação para uma empresa',
    lines: [
      { s: 'Receptionist', v: 'en-GB-LibbyNeural', t: "Good morning, Harper and Lowe, Emily speaking. How can I help you?" },
      { s: 'Caller', v: 'en-US-BrianNeural', t: "Hi, good morning. This is Rafael Costa. I'm calling about the interview I have next week. Could I speak to Mr. Harper, please?" },
      { s: 'Receptionist', v: 'en-GB-LibbyNeural', t: "I'm afraid he's in a meeting at the moment. Would you like to leave a message?" },
      { s: 'Caller', v: 'en-US-BrianNeural', t: "Yes, please. I need to change the time of the interview. I have a problem with my flight." },
      { s: 'Receptionist', v: 'en-GB-LibbyNeural', t: "No problem. Could you spell your surname for me?" },
      { s: 'Caller', v: 'en-US-BrianNeural', t: "Sure. It's C-O-S-T-A. Costa." },
      { s: 'Receptionist', v: 'en-GB-LibbyNeural', t: "Thank you. And what's the best number to call you back on?" },
      { s: 'Caller', v: 'en-US-BrianNeural', t: "It's oh-seven-nine-four-two, five-five-one, three-eight-six." },
      { s: 'Receptionist', v: 'en-GB-LibbyNeural', t: "Sorry, the line is breaking up a bit. Was that three-eight-six at the end?" },
      { s: 'Caller', v: 'en-US-BrianNeural', t: "Yes, that's right. Three-eight-six." },
      { s: 'Receptionist', v: 'en-GB-LibbyNeural', t: "Perfect. I'll ask Mr. Harper to call you back this afternoon. Thanks for calling." }
    ],
    qs: [
      { q: 'Why is Rafael calling?', opts: ['To apply for a job', 'To change the time of his interview', 'To cancel his interview', 'To ask about salary'], a: 1 },
      { q: 'Why can\'t he speak to Mr. Harper?', opts: ['He is on holiday', 'He is in a meeting', 'He left the company', 'He is sick'], a: 1 },
      { q: 'What problem does Rafael have?', opts: ['He is sick', 'A problem with his flight', 'He found another job', 'His car broke down'], a: 1 },
      { q: 'When will Mr. Harper call back?', opts: ['Tomorrow morning', 'This afternoon', 'Next week', 'In ten minutes'], a: 1 }
    ]
  },
  speaking: {
    shadow: [
      { text: "Hi, this is Ana from the marketing team.", tip: "No telefone: \"this is\", nunca \"I am\"." },
      { text: "Hold on a second. I'll put you through.", tip: "\"put you through\" = putchu-THRUU." },
      { text: "Sorry, we got cut off.", tip: "\"cut off\" liga: kâtóf." },
      { text: "Could you spell that for me, please?", tip: "\"spell that\": pausa curta, tom educado." },
      { text: "You're breaking up. I'll call you back.", tip: "\"breaking up\" = brei-kin-ÂP." }
    ],
    prompt: { q: 'Role-play a phone call: you call a company to speak to someone who isn\'t available. Introduce yourself, explain why you are calling and leave a message with your number.', hints: ['this is', "I'm calling about", 'could you ask him to call me back', 'my number is'] }
  }
},

// ───────────────────────────── 52 · tema: desculpas e justificativas
{
  id: 'c52', lv: 'b2', title: 'Pedindo desculpas e reconhecendo erros', goal: "Should have, shouldn't have e could have para arrependimentos e críticas, e as melhores fórmulas de desculpas.",
  theory: `
<p>Pedir desculpas bem é uma habilidade social essencial, em qualquer língua. Em inglês, um pedido de desculpas completo costuma ter três partes: reconhecer o erro, explicar (sem se justificar demais) e oferecer uma solução. Nesta lição você vai aprender essas fórmulas e os modais que usamos para falar do que <b>deveríamos</b> ou <b>poderíamos</b> ter feito: <b>should have, shouldn't have, could have</b>.</p>

<h3>1. Should have + particípio: deveria ter feito</h3>
<p>Expressa arrependimento ou crítica sobre algo que <b>não</b> foi feito:</p>
<ul>
<li><i>I <b>should have called</b> you. I'm sorry.</i> (não liguei)</li>
<li><i>You <b>should have told</b> me earlier.</i> (você não me contou)</li>
<li><i>We <b>should have left</b> home earlier.</i></li>
</ul>

<h3>2. Shouldn't have + particípio: não deveria ter feito</h3>
<p>Para algo que <b>foi</b> feito e foi um erro:</p>
<ul>
<li><i>I <b>shouldn't have said</b> that. It was unfair.</i> (eu disse)</li>
<li><i>You <b>shouldn't have spent</b> so much on a gift!</i> (muito usado como agradecimento educado)</li>
</ul>

<h3>3. Could have + particípio: poderia ter feito</h3>
<p>Uma possibilidade que <b>não foi usada</b>. Muitas vezes soa como uma crítica suave:</p>
<ul>
<li><i>You <b>could have asked</b> me for help!</i> (você podia ter me pedido)</li>
<li><i>I <b>could have done</b> better, but I was tired.</i></li>
<li><i>It <b>could have been</b> worse.</i> (poderia ter sido pior)</li>
</ul>

<h3>4. Pronúncia</h3>
<p>Na fala, <b>have</b> fica reduzido: <i>should've</i> ("shudov"), <i>could've</i> ("cudov"), <i>shouldn't have</i> ("shudntov"). Por isso, nunca escreva "should of" ou "could of".</p>

<h3>5. Fórmulas de desculpas</h3>
<table><tr><th>Intensidade</th><th>Frases</th></tr>
<tr><td>Leve (pequenos incidentes)</td><td><em>Sorry! / Oops, my bad. / Excuse me.</em></td></tr>
<tr><td>Neutra</td><td><em>I'm sorry about that. / I apologize for the delay.</em></td></tr>
<tr><td>Forte</td><td><em>I'm really sorry. / I'm so sorry, it was completely my fault.</em></td></tr>
<tr><td>Formal (escrita)</td><td><em>Please accept my apologies. / We sincerely apologize for any inconvenience.</em></td></tr></table>
<p>Estruturas: <b>sorry for + -ing</b> (<i>sorry for being late</i>), <b>sorry about + substantivo</b> (<i>sorry about the mess</i>) e <b>apologize for</b> (<i>I apologize for the confusion</i>).</p>

<h3>6. Assumindo a culpa sem se esconder</h3>
<p>Um bom pedido de desculpas evita frases que transferem a culpa:</p>
<div class="ex">❌ <i>I'm sorry if you were offended.</i> (põe o problema no outro)<br>✅ <i>I'm sorry I said that. It was unkind, and I shouldn't have done it.</i></div>
<ul>
<li><i>It was my fault. / I take full responsibility.</i></li>
<li><i>I didn't mean to upset you.</i> (não foi minha intenção)</li>
<li><i>It won't happen again.</i></li>
<li><i>How can I make it up to you?</i> (como posso compensar?)</li>
</ul>

<h3>6b. Should have × could have × would have</h3>
<p>Esses três modais no passado são fáceis de confundir. Pense assim:</p>
<ul>
<li><b>should have</b> = era o certo, e não aconteceu (julgamento): <i>I should have checked the time.</i></li>
<li><b>could have</b> = era possível, e não aconteceu (possibilidade): <i>I could have taken a taxi.</i></li>
<li><b>would have</b> = teria acontecido, se algo fosse diferente (condição): <i>I would have come if I'd known.</i></li>
</ul>
<div class="ex">Uma desculpa completa costuma combinar os três: <i>I'm sorry I missed the meeting. I should have set an alarm. I would have called, but my phone was dead. I could have borrowed someone's phone, though. That was my mistake.</i></div>

<h3>7. Aceitando desculpas</h3>
<ul>
<li><i>Don't worry about it. / No problem. / It's okay.</i></li>
<li><i>Apology accepted.</i></li>
<li><i>These things happen. / Forget about it.</i></li>
</ul>

<h3>Resumo</h3>
<ul>
<li><b>should have + particípio</b>: deveria ter (e não fez).</li>
<li><b>shouldn't have</b>: não deveria ter (e fez).</li>
<li><b>could have</b>: poderia ter (possibilidade não usada).</li>
<li>Desculpas: reconheça, explique pouco, ofereça solução.</li>
</ul>`,
  say: ["I'm so sorry. I should have called you.", "I shouldn't have said that. It was unfair.", "You could have asked me for help!", "Sorry for being late. The traffic was terrible.", "It was completely my fault, and it won't happen again.", "How can I make it up to you?"],
  vocab: [
    { en: 'should have', pt: 'deveria ter', ex: "I should have checked the address." },
    { en: "shouldn't have", pt: 'não deveria ter', ex: "You shouldn't have bought me a gift!" },
    { en: 'could have', pt: 'poderia ter', ex: "You could have told me!" },
    { en: 'apologize', pt: 'pedir desculpas', ex: "I apologize for the confusion." },
    { en: 'my fault', pt: 'minha culpa', ex: "It was my fault. I forgot to send it." },
    { en: "didn't mean to", pt: 'não tive a intenção de', ex: "I didn't mean to hurt your feelings." },
    { en: 'make it up to', pt: 'compensar (alguém)', ex: "Let me make it up to you. Dinner's on me." },
    { en: 'my bad', pt: 'foi mal (informal)', ex: "Oops, my bad. I took your seat." },
    { en: 'inconvenience', pt: 'transtorno', ex: "We apologize for any inconvenience." },
    { en: 'take responsibility', pt: 'assumir a responsabilidade', ex: "The manager took responsibility for the mistake." }
  ],
  pics: [
    { en: 'sorry', pt: 'desculpa (rosto suplicante)', img: 'Pleading face' },
    { en: 'flowers', pt: 'flores', img: 'Bouquet' },
    { en: 'an alarm clock', pt: 'um despertador', img: 'Alarm clock' },
    { en: 'an hourglass', pt: 'uma ampulheta', img: 'Hourglass not done' },
    { en: 'awkward', pt: 'constrangido', img: 'Grimacing face' },
    { en: 'a gift', pt: 'um presente', img: 'Wrapped gift' },
    { en: 'a love letter', pt: 'uma carta', img: 'Love letter' },
    { en: 'a watch', pt: 'um relógio de pulso', img: 'Watch' }
  ],
  fill: [
    { s: 'I should ___ called you. I\'m sorry.', a: 'have' },
    { s: "I ___ have said that. It was unfair.", a: "shouldn't" },
    { s: 'You ___ have asked me for help!', a: 'could' },
    { s: 'Sorry for ___ late.', a: 'being' },
    { s: 'It was my ___. I forgot to send it.', a: 'fault' },
    { s: "I didn't ___ to hurt your feelings.", a: 'mean' },
    { s: 'How can I make it ___ to you?', a: 'up' }
  ],
  reading: {
    title: 'The art of the perfect apology',
    paras: [
      "Everyone makes mistakes, but not everyone knows how to apologize. A bad apology can make a situation worse, while a good one can repair a relationship and even make it stronger. Researchers who study communication have identified a few elements that most effective apologies share.",
      "The first is a clear acknowledgment of what went wrong. 'Mistakes were made' or 'I'm sorry if anyone was upset' don't count. People want to hear that you understand exactly what you did: 'I'm sorry I missed your birthday. I should have remembered.'",
      "The second is responsibility without excuses. A short explanation can help, but a long list of reasons usually sounds like you're trying to escape the blame. Saying 'It was my fault' is often more powerful than any explanation.",
      "Finally, the best apologies look forward. Offering to fix the problem, or explaining what you'll do differently next time, shows that the apology is more than words. As one researcher puts it, 'An apology is a promise about the future as much as a statement about the past.'"
    ],
    gloss: { 'repair': 'reparar', 'share': 'compartilham', 'acknowledgment': 'reconhecimento', 'don\'t count': 'não valem', 'escape the blame': 'fugir da culpa', 'look forward': 'olham para o futuro' },
    qs: [
      { q: 'What can a good apology do?', opts: ['Make things worse', 'Repair and even strengthen a relationship', 'Avoid all problems', 'Replace a gift'], a: 1 },
      { q: 'Why don\'t phrases like "Mistakes were made" count?', opts: ['They are too formal', 'They don\'t clearly acknowledge what you did', 'They are too long', 'They are rude'], a: 1 },
      { q: 'What does a long list of reasons usually sound like?', opts: ['Honesty', 'Trying to escape the blame', 'Good manners', 'Responsibility'], a: 1 },
      { q: 'What do the best apologies do, according to the last paragraph?', opts: ['They are very short', 'They look forward and offer to fix the problem', 'They include a gift', 'They are written'], a: 1 }
    ]
  },
  listening: {
    kind: 'dialogue', place: 'Um amigo pedindo desculpas por esquecer um compromisso',
    lines: [
      { s: 'Pedro', v: 'en-US-AndrewNeural', t: "Hey, Clara. Listen, I'm so sorry about last night." },
      { s: 'Clara', v: 'en-GB-SoniaNeural', t: "I waited at the restaurant for an hour, Pedro. You could have at least sent a message." },
      { s: 'Pedro', v: 'en-US-AndrewNeural', t: "I know. I should have texted you. I completely forgot about our dinner. It was my fault." },
      { s: 'Clara', v: 'en-GB-SoniaNeural', t: "What happened?" },
      { s: 'Pedro', v: 'en-US-AndrewNeural', t: "I stayed late at work, and my phone died. But that's not an excuse. I shouldn't have made plans on a deadline day." },
      { s: 'Clara', v: 'en-GB-SoniaNeural', t: "I was really worried, you know. I thought something might have happened to you." },
      { s: 'Pedro', v: 'en-US-AndrewNeural', t: "I didn't mean to worry you. How can I make it up to you? Dinner this Saturday, my treat, and I'll put a reminder on my phone, my laptop and my fridge." },
      { s: 'Clara', v: 'en-GB-SoniaNeural', t: "Ha! Okay. Apology accepted. But if you forget again, you're paying for dessert too." }
    ],
    qs: [
      { q: 'How long did Clara wait at the restaurant?', opts: ['Ten minutes', 'An hour', 'Two hours', 'All night'], a: 1 },
      { q: 'What does Clara say Pedro could have done?', opts: ['Called the restaurant', 'At least sent a message', 'Come later', 'Cancelled earlier'], a: 1 },
      { q: 'Why did Pedro forget?', opts: ['He was sick', 'He stayed late at work and his phone died', 'He was traveling', 'He was with other friends'], a: 1 },
      { q: 'How does Pedro offer to make it up to her?', opts: ['A gift', 'Dinner on Saturday, his treat', 'Flowers', 'A trip'], a: 1 }
    ]
  },
  speaking: {
    shadow: [
      { text: "I'm so sorry. I should have called you.", tip: "\"should have called\" = shudov-KÓLD." },
      { text: "I shouldn't have said that.", tip: "\"shouldn't have\" = SHU-dntov." },
      { text: "You could have asked me for help!", tip: "Tom de crítica suave: ênfase em asked." },
      { text: "It was completely my fault.", tip: "\"fault\" = /fólt/; o l é pronunciado." },
      { text: "How can I make it up to you?", tip: "\"make it up\" liga: meikidâp." }
    ],
    prompt: { q: 'Apologize for a mistake (real or imagined): say what you did, what you should or shouldn\'t have done, and how you will make it up to the person.', hints: ["I'm sorry", 'I should have', "I shouldn't have", 'make it up to you'] }
  }
},

// ───────────────────────────── 53 · tema: infância e criação dos filhos
{
  id: 'c53', lv: 'b2', title: 'Permissão e regras: let, make, be allowed to, be supposed to', goal: 'Falar de regras, permissões e expectativas: let someone do, make someone do, be allowed to, be supposed to.',
  theory: `
<p>Falar de infância e de como pais criam filhos envolve muitas regras: "meus pais me deixavam ficar acordado até tarde", "minha mãe me obrigava a comer verduras", "a gente não podia ver TV durante a semana", "eu devia estar estudando, mas...". Em inglês, essas ideias usam estruturas específicas, e algumas delas pedem o verbo <b>sem "to"</b>, o que confunde muita gente.</p>

<h3>1. Let + pessoa + verbo base: deixar</h3>
<p><b>Let</b> significa "deixar, permitir". Atenção: depois da pessoa vem o verbo <b>sem to</b>:</p>
<ul>
<li><i>My parents <b>let</b> me <b>stay</b> up late on Fridays.</i></li>
<li><i>They didn't <b>let</b> us <b>play</b> video games during the week.</i></li>
<li><i><b>Let</b> me <b>help</b> you with that.</i></li>
</ul>
<div class="ex">❌ <i>My parents let me to stay up late.</i> ✅ <i>My parents let me stay up late.</i></div>

<h3>2. Make + pessoa + verbo base: obrigar, fazer alguém fazer</h3>
<p><b>Make</b> (no sentido de obrigar) também pede o verbo <b>sem to</b>:</p>
<ul>
<li><i>My mother <b>made</b> me <b>eat</b> all my vegetables.</i></li>
<li><i>The teacher <b>made</b> us <b>rewrite</b> the essay.</i></li>
<li><i>That movie <b>made</b> me <b>cry</b>.</i> (fazer alguém sentir algo)</li>
</ul>
<p>Na voz passiva, porém, o <b>to</b> volta: <i>I <b>was made to</b> apologize.</i></p>

<h3>3. Be allowed to: ter permissão</h3>
<p>Para falar de permissões do ponto de vista de quem as recebe, use <b>be allowed to + verbo</b>:</p>
<ul>
<li><i>I <b>wasn't allowed to</b> go out on school nights.</i></li>
<li><i><b>Were</b> you <b>allowed to</b> have pets?</i></li>
<li><i>Kids <b>are</b>n't <b>allowed to</b> use phones in class.</i></li>
</ul>
<p>Compare: <i>My parents let me go out</i> = <i>I was allowed to go out.</i></p>

<h3>4. Have to × be allowed to</h3>
<ul>
<li><i>I <b>had to</b> do my homework before dinner.</i> (obrigação)</li>
<li><i>I <b>was allowed to</b> watch TV after dinner.</i> (permissão)</li>
<li><i>I <b>didn't have to</b> help with the housework.</i> (não era obrigado)</li>
<li><i>I <b>wasn't allowed to</b> eat sweets.</i> (era proibido)</li>
</ul>

<h3>5. Be supposed to: deveria (expectativa)</h3>
<p><b>Be supposed to</b> expressa o que é esperado, combinado ou a regra, muitas vezes quando a realidade é diferente:</p>
<ul>
<li><i>I <b>was supposed to</b> be studying, but I was reading comics.</i></li>
<li><i>You'<b>re</b> not <b>supposed to</b> feed the animals.</i> (não é permitido)</li>
<li><i>The kids <b>are supposed to</b> be in bed by nine.</i></li>
<li><i>What time <b>are</b> we <b>supposed to</b> arrive?</i></li>
</ul>

<h3>6. Get + pessoa + to + verbo: convencer</h3>
<p>Diferente de make, <b>get</b> sugere convencer, não obrigar, e pede o <b>to</b>:</p>
<ul>
<li><i>I finally <b>got</b> my son <b>to eat</b> broccoli.</i></li>
<li><i>She <b>got</b> her parents <b>to buy</b> her a puppy.</i></li>
</ul>

<h3>6b. Let, make e allow lado a lado</h3>
<p>Repare que <b>allow</b> (sem "be") também pode ser usado na voz ativa, mas pede <b>to</b>, ao contrário de let:</p>
<ul>
<li><i>My parents <b>let</b> me <b>go</b>.</i> (sem to)</li>
<li><i>My parents <b>allowed</b> me <b>to go</b>.</i> (com to)</li>
<li><i>I <b>was allowed to go</b>.</i> (passiva, com to)</li>
</ul>
<p>E <b>let</b> não tem forma passiva natural: não se diz "I was let go out". Para a passiva, troque por <b>be allowed to</b>.</p>
<div class="ex">❌ <i>They made me to apologize.</i> ✅ <i>They made me apologize.</i><br>❌ <i>They allowed me go.</i> ✅ <i>They allowed me to go.</i></div>

<h3>7. Vocabulário de infância e criação</h3>
<table><tr><th>Expressão</th><th>Sentido</th></tr>
<tr><td><em>bring up / raise</em></td><td>criar (filhos)</td></tr>
<tr><td><em>strict / easygoing</em></td><td>rígido / tranquilo</td></tr>
<tr><td><em>be grounded</em></td><td>ficar de castigo</td></tr>
<tr><td><em>pocket money / an allowance</em></td><td>mesada</td></tr>
<tr><td><em>spoil a child</em></td><td>mimar uma criança</td></tr>
<tr><td><em>behave / misbehave</em></td><td>se comportar / se comportar mal</td></tr>
<tr><td><em>a curfew</em></td><td>horário para voltar para casa</td></tr></table>

<h3>Resumo</h3>
<ul>
<li><b>let / make + pessoa + verbo base</b> (sem to).</li>
<li><b>be allowed to</b> = ter permissão.</li>
<li><b>be supposed to</b> = deveria (o esperado, a regra).</li>
<li><b>get + pessoa + to + verbo</b> = convencer.</li>
</ul>`,
  say: ["My parents let me stay up late on Fridays.", "My mother made me eat all my vegetables.", "I wasn't allowed to go out on school nights.", "I was supposed to be studying, but I was reading comics.", "I finally got my son to eat broccoli.", "My dad was strict, but my mom was quite easygoing."],
  vocab: [
    { en: 'let me', pt: 'me deixar', ex: "My parents let me choose my own clothes." },
    { en: 'made me', pt: 'me obrigou, me fez', ex: "My teacher made me read the poem aloud." },
    { en: 'be allowed to', pt: 'ter permissão para', ex: "We weren't allowed to watch TV at dinner." },
    { en: 'be supposed to', pt: 'deveria, era para', ex: "You're supposed to wear a uniform." },
    { en: 'bring up', pt: 'criar (filhos)', ex: "She was brought up by her grandparents." },
    { en: 'strict', pt: 'rígido, severo', ex: "My parents were very strict about homework." },
    { en: 'grounded', pt: 'de castigo', ex: "I was grounded for a week after the party." },
    { en: 'pocket money', pt: 'mesada', ex: "I got ten dollars of pocket money a week." },
    { en: 'spoiled', pt: 'mimado', ex: "He's a bit spoiled. He gets everything he wants." },
    { en: 'curfew', pt: 'horário para voltar para casa', ex: "My curfew was ten o'clock." }
  ],
  pics: [
    { en: 'a baby bottle', pt: 'uma mamadeira', img: 'Baby bottle' },
    { en: 'a teddy bear', pt: 'um ursinho', img: 'Teddy bear' },
    { en: 'a kite', pt: 'uma pipa', img: 'Kite' },
    { en: 'a yo-yo', pt: 'um ioiô', img: 'Yo-yo' },
    { en: 'a slide', pt: 'um escorregador', img: 'Playground slide' },
    { en: 'a crayon', pt: 'um giz de cera', img: 'Crayon' },
    { en: 'a lollipop', pt: 'um pirulito', img: 'Lollipop' },
    { en: 'a skateboard', pt: 'um skate', img: 'Skateboard' }
  ],
  fill: [
    { s: 'My parents let me ___ up late on Fridays.', a: 'stay' },
    { s: 'My mother made me ___ all my vegetables.', a: 'eat' },
    { s: "I wasn't ___ to go out on school nights.", a: 'allowed' },
    { s: 'I was ___ to be studying, but I was playing.', a: 'supposed' },
    { s: 'I finally got my son ___ eat broccoli.', a: 'to' },
    { s: 'I was ___ for a week after the party.', a: 'grounded' },
    { s: 'She was brought ___ by her grandparents.', a: 'up' }
  ],
  reading: {
    title: 'Strict parents or free-range kids?',
    paras: [
      "A generation ago, many children in cities and towns were allowed to walk to school alone, play in the street until dark and explore their neighborhoods with friends. Today, in many places, those same freedoms would make some parents extremely nervous.",
      "Some parents believe that children need close supervision to stay safe and succeed. They organize their kids' schedules carefully, limit screen time and don't let them go out alone until they're much older. Critics call this 'helicopter parenting', because the parents seem to hover constantly above their children.",
      "Others prefer a more 'free-range' approach. They let their children take small risks, solve their own problems and spend time without adults. Supporters argue that kids who are allowed to make mistakes become more independent, confident and resilient.",
      "Most families, of course, fall somewhere in between, and what's reasonable depends a lot on the neighborhood and the child. But the debate raises a useful question for any parent: are the rules we make there to protect our children, or to protect us from worrying?"
    ],
    gloss: { 'supervision': 'supervisão', 'hover': 'pairar', 'free-range': 'criação livre', 'take risks': 'correr riscos', 'resilient': 'resilientes', 'in between': 'no meio-termo' },
    qs: [
      { q: 'What were many children allowed to do a generation ago?', opts: ['Use smartphones', 'Walk to school alone and play outside until dark', 'Stay home from school', 'Drive at fifteen'], a: 1 },
      { q: 'Why is it called "helicopter parenting"?', opts: ['Parents travel a lot', 'Parents seem to hover constantly above their children', 'It started with pilots', 'Children play with helicopters'], a: 1 },
      { q: 'What do supporters of the "free-range" approach argue?', opts: ['Children need more rules', 'Kids allowed to make mistakes become more independent', 'Children should study more', 'Screens are good'], a: 1 },
      { q: 'What question does the last paragraph raise?', opts: ['Are rules there to protect children or to protect parents from worrying?', 'Should children work?', 'Is school necessary?', 'Should parents be stricter?'], a: 0 }
    ]
  },
  listening: {
    kind: 'dialogue', place: 'Dois amigos comparando as regras da infância',
    lines: [
      { s: 'Ana', v: 'en-US-AvaNeural', t: "Were your parents strict when you were a kid?" },
      { s: 'Tom', v: 'en-GB-RyanNeural', t: "Very! I wasn't allowed to watch TV on school days, and my mum made me practice the piano every afternoon." },
      { s: 'Ana', v: 'en-US-AvaNeural', t: "Every afternoon? That's intense. Did you like it?" },
      { s: 'Tom', v: 'en-GB-RyanNeural', t: "I hated it then, but I'm grateful now. What about you?" },
      { s: 'Ana', v: 'en-US-AvaNeural', t: "My parents were quite easygoing. They let me stay up late at weekends, and I didn't have to help with the housework much." },
      { s: 'Tom', v: 'en-GB-RyanNeural', t: "Lucky you! Did you have a curfew when you were a teenager?" },
      { s: 'Ana', v: 'en-US-AvaNeural', t: "Yes, eleven o'clock. Once I came home at two, and they grounded me for a month. I was supposed to be at a friend's house, but we'd gone to a concert." },
      { s: 'Tom', v: 'en-GB-RyanNeural', t: "Ha! So you weren't that innocent after all." },
      { s: 'Ana', v: 'en-US-AvaNeural', t: "Not at all. And now I have two kids, and I'm the strict one. I can't get them to go to bed before ten!" }
    ],
    qs: [
      { q: 'What was Tom not allowed to do?', opts: ['Play outside', 'Watch TV on school days', 'Have friends over', 'Eat sweets'], a: 1 },
      { q: 'What did Tom\'s mum make him do?', opts: ['Do housework', 'Practice the piano every afternoon', 'Read every night', 'Play sports'], a: 1 },
      { q: 'Why was Ana grounded?', opts: ['She failed an exam', 'She came home at two after going to a concert', 'She broke something', 'She was rude'], a: 1 },
      { q: 'What problem does Ana have with her kids?', opts: ['They don\'t eat', 'She can\'t get them to go to bed before ten', 'They watch too much TV', 'They don\'t study'], a: 1 }
    ]
  },
  speaking: {
    shadow: [
      { text: "My parents let me stay up late on Fridays.", tip: "\"let me stay\": sem to depois de let." },
      { text: "My mother made me eat my vegetables.", tip: "\"made me eat\" = meid-mi-IIT." },
      { text: "I wasn't allowed to go out on school nights.", tip: "\"allowed\" = a-LAUD; rima com \"loud\"." },
      { text: "I was supposed to be studying.", tip: "\"supposed to\" = sa-POUS-tu; o d some." },
      { text: "I finally got my son to eat broccoli.", tip: "\"got my son to\": aqui o to aparece." }
    ],
    prompt: { q: 'Describe the rules in your house when you were a child: what your parents let you do, made you do, and what you weren\'t allowed to do. Would you raise children the same way?', hints: ['let me', 'made me', "wasn't allowed to", 'was supposed to'] }
  }
},

// ───────────────────────────── 54 · tema: compras online
{
  id: 'c54', lv: 'b2', title: 'Pode ser devolvido: passiva com modais e need doing', goal: 'Can be returned, must be signed, needs replacing: a linguagem de políticas de loja, entregas e garantias.',
  theory: `
<p>Comprar online significa ler muitas regras: "o produto pode ser devolvido em 30 dias", "a encomenda deve ser assinada", "o cartão será cobrado no envio". Essa linguagem usa muito a <b>voz passiva com modais</b>. Nesta lição você vai dominar essa estrutura e também uma forma muito natural de dizer que algo precisa de conserto: <b>need + -ing</b>.</p>

<h3>1. Modal + be + particípio</h3>
<p>A estrutura é sempre a mesma: <b>modal + be + particípio</b>.</p>
<table><tr><th>Modal</th><th>Exemplo</th></tr>
<tr><td>can</td><td><em>Items <b>can be returned</b> within 30 days.</em></td></tr>
<tr><td>must</td><td><em>The package <b>must be signed</b> for on delivery.</em></td></tr>
<tr><td>should</td><td><em>Fragile items <b>should be handled</b> with care.</em></td></tr>
<tr><td>will</td><td><em>Your card <b>will be charged</b> when the item is shipped.</em></td></tr>
<tr><td>may / might</td><td><em>Delivery <b>may be delayed</b> during the holidays.</em></td></tr>
<tr><td>have to</td><td><em>The form <b>has to be completed</b> before the refund.</em></td></tr></table>

<h3>2. Negativas</h3>
<ul>
<li><i>Sale items <b>can't be exchanged</b>.</i></li>
<li><i>This product <b>mustn't be washed</b> in hot water.</i></li>
<li><i>Opened software <b>won't be refunded</b>.</i></li>
</ul>

<h3>3. No passado: modal + have been + particípio</h3>
<p>Para deduções e críticas sobre o passado na passiva:</p>
<ul>
<li><i>The package <b>must have been delivered</b> to the wrong address.</i></li>
<li><i>It <b>should have been sent</b> yesterday.</i></li>
<li><i>The box <b>might have been damaged</b> during shipping.</i></li>
</ul>

<h3>4. Need + -ing: precisa ser feito</h3>
<p>Uma forma muito comum de expressar que algo precisa de conserto ou manutenção, com sentido passivo:</p>
<ul>
<li><i>My laptop <b>needs repairing</b>.</i> = <i>My laptop needs to be repaired.</i></li>
<li><i>The screen <b>needs replacing</b>.</i></li>
<li><i>These shoes <b>need cleaning</b>.</i></li>
</ul>
<div class="ex">Compare: <i>I need to clean the shoes</i> (eu preciso limpar) × <i>The shoes need cleaning</i> (os sapatos precisam ser limpos, não importa por quem).</div>

<h3>5. Linguagem de compras online</h3>
<table><tr><th>Expressão</th><th>Sentido</th></tr>
<tr><td><em>add to cart / check out</em></td><td>adicionar ao carrinho / finalizar a compra</td></tr>
<tr><td><em>shipping / delivery fee</em></td><td>frete</td></tr>
<tr><td><em>track your order</em></td><td>rastrear o pedido</td></tr>
<tr><td><em>out of stock / back in stock</em></td><td>esgotado / disponível novamente</td></tr>
<tr><td><em>a return policy</em></td><td>política de devolução</td></tr>
<tr><td><em>a refund / store credit</em></td><td>reembolso / crédito na loja</td></tr>
<tr><td><em>a warranty / guarantee</em></td><td>garantia</td></tr>
<tr><td><em>a promo code / discount code</em></td><td>cupom de desconto</td></tr></table>

<h3>6. Lendo uma política de devolução</h3>
<div class="ex"><i>Items can be returned within 30 days of delivery, provided they are unused and in their original packaging. Refunds will be processed within five working days. Sale items cannot be exchanged or refunded. Returns must be sent with a copy of the receipt.</i></div>
<p>Repare como quase todas as frases usam passiva com modal: é o estilo padrão de termos e condições.</p>

<h3>6b. Por que tanta passiva?</h3>
<p>Em textos de lojas, o foco está no produto, no pedido ou no pagamento, e não em quem faz a ação. Quem vai processar o reembolso? Não importa para o cliente. Por isso a passiva domina:</p>
<ul>
<li>Ativa: <i>We will process your refund within five days.</i></li>
<li>Passiva: <i>Your refund will be processed within five days.</i></li>
</ul>
<p>A versão passiva também soa mais impessoal e oficial. Quando você mesmo escrever uma reclamação, pode misturar: use a ativa para o que você fez (<i>I ordered a lamp on May 3rd</i>) e a passiva para o que deveria ter acontecido (<i>It should have been delivered by May 10th</i>).</p>

<h3>7. Reclamando de uma entrega</h3>
<ul>
<li><i>My order hasn't arrived. It should have been delivered on Monday.</i></li>
<li><i>The item was damaged when it arrived. The box must have been dropped.</i></li>
<li><i>I was charged twice. Could the extra payment be refunded?</i></li>
</ul>

<h3>Resumo</h3>
<ul>
<li>Passiva com modal: <b>can / must / should / will + be + particípio</b>.</li>
<li>Passado: <b>must / should / might + have been + particípio</b>.</li>
<li><b>need + -ing</b> = precisa ser feito (needs repairing).</li>
<li>Vocabulário: check out, track, out of stock, return policy, refund.</li>
</ul>`,
  say: ["Items can be returned within thirty days.", "The package must be signed for on delivery.", "Your card will be charged when the item is shipped.", "It should have been delivered on Monday.", "My laptop screen needs replacing.", "Sorry, that size is out of stock at the moment."],
  vocab: [
    { en: 'can be returned', pt: 'pode ser devolvido', ex: "Unused items can be returned within 30 days." },
    { en: 'will be charged', pt: 'será cobrado', ex: "You won't be charged until the item ships." },
    { en: 'needs replacing', pt: 'precisa ser trocado', ex: "The battery needs replacing." },
    { en: 'track your order', pt: 'rastrear seu pedido', ex: "You can track your order online." },
    { en: 'out of stock', pt: 'esgotado', ex: "The blue one is out of stock." },
    { en: 'shipping', pt: 'envio, frete', ex: "Shipping is free on orders over fifty dollars." },
    { en: 'check out', pt: 'finalizar a compra', ex: "Add it to your cart and check out." },
    { en: 'return policy', pt: 'política de devolução', ex: "Always read the return policy before you buy." },
    { en: 'warranty', pt: 'garantia', ex: "The laptop has a two-year warranty." },
    { en: 'promo code', pt: 'cupom de desconto', ex: "Use this promo code for ten percent off." }
  ],
  pics: [
    { en: 'a shopping cart', pt: 'um carrinho de compras', img: 'Shopping cart' },
    { en: 'a package', pt: 'um pacote', img: 'Package' },
    { en: 'a delivery truck', pt: 'um caminhão de entrega', img: 'Delivery truck' },
    { en: 'a credit card', pt: 'um cartão de crédito', img: 'Credit card' },
    { en: 'a laptop', pt: 'um notebook', img: 'Laptop' },
    { en: 'a label', pt: 'uma etiqueta', img: 'Label' },
    { en: 'shopping bags', pt: 'sacolas de compras', img: 'Shopping bags' },
    { en: 'a secure lock', pt: 'um cadeado (segurança)', img: 'Locked with key' }
  ],
  fill: [
    { s: 'Items can be ___ within 30 days.', a: 'returned' },
    { s: 'The package must ___ signed for.', a: 'be' },
    { s: 'It should have ___ delivered on Monday.', a: 'been' },
    { s: 'The battery needs ___.', a: 'replacing' },
    { s: 'You can ___ your order online.', a: 'track' },
    { s: 'Sorry, the blue one is out of ___.', a: 'stock' },
    { s: 'The laptop has a two-year ___.', a: 'warranty' }
  ],
  reading: {
    title: 'The hidden cost of free returns',
    paras: [
      "Free delivery and free returns have transformed online shopping. Many customers now order several sizes of the same item, keep the one that fits and send the rest back. For shoppers, it's convenient. For companies and the environment, it's far more complicated.",
      "Every returned item has to be transported, checked, cleaned and repackaged before it can be sold again. Some products can't be resold at all: they may have been damaged, worn or simply be out of season by the time they arrive back at the warehouse. In some cases, it's cheaper for a company to destroy them than to process them.",
      "Returns also have an environmental impact. Extra deliveries mean more fuel, more packaging and more emissions. Experts estimate that a significant share of online clothing purchases is returned, which adds up to millions of extra journeys every year.",
      "As a result, some retailers have started charging small fees for returns or offering discounts to customers who keep their orders. Shoppers can help too: checking size guides, reading reviews and thinking twice before ordering 'just in case' can reduce returns without making shopping any less enjoyable."
    ],
    gloss: { 'transformed': 'transformaram', 'repackaged': 'reembalado', 'resold': 'revendido', 'warehouse': 'armazém', 'retailers': 'varejistas', 'just in case': 'só por precaução' },
    qs: [
      { q: 'What do many customers do with free returns?', opts: ['Never return anything', 'Order several sizes and send the rest back', 'Only buy in stores', 'Return items after a year'], a: 1 },
      { q: 'Why can some returned items not be resold?', opts: ['They are too cheap', 'They may be damaged, worn or out of season', 'They are lost', 'Customers keep them'], a: 1 },
      { q: 'What is one environmental impact of returns?', opts: ['Less packaging', 'More fuel, packaging and emissions', 'Fewer deliveries', 'Cleaner warehouses'], a: 1 },
      { q: 'What have some retailers started doing?', opts: ['Stopping online sales', 'Charging small fees for returns', 'Giving free gifts', 'Raising prices'], a: 1 }
    ]
  },
  listening: {
    kind: 'dialogue', place: 'Atendimento de uma loja online por telefone',
    lines: [
      { s: 'Agent', v: 'en-US-EmmaNeural', t: "Thanks for calling ShopNow. How can I help you today?" },
      { s: 'Customer', v: 'en-GB-RyanNeural', t: "Hi. I ordered a coffee machine last week, but it still hasn't arrived. The website said it would be delivered on Monday." },
      { s: 'Agent', v: 'en-US-EmmaNeural', t: "I'm sorry about that. Can I have your order number?" },
      { s: 'Customer', v: 'en-GB-RyanNeural', t: "It's 7-7-3-4-9." },
      { s: 'Agent', v: 'en-US-EmmaNeural', t: "Thank you. I can see it was shipped on Friday, but it seems the package was sent to an old address. It must have been saved on your account." },
      { s: 'Customer', v: 'en-GB-RyanNeural', t: "Oh no, I moved last month. Can it be redirected?" },
      { s: 'Agent', v: 'en-US-EmmaNeural', t: "Unfortunately, it can't be redirected once it's on the way. But it will be returned to us automatically, and I can send a new one to your current address today." },
      { s: 'Customer', v: 'en-GB-RyanNeural', t: "That would be great. Will I be charged for the second delivery?" },
      { s: 'Agent', v: 'en-US-EmmaNeural', t: "No, the shipping will be free. And please update your address on the website so it doesn't happen again. The new package should be delivered by Thursday." }
    ],
    qs: [
      { q: 'What did the customer order?', opts: ['A laptop', 'A coffee machine', 'A phone', 'Clothes'], a: 1 },
      { q: 'What went wrong?', opts: ['The item was broken', 'It was sent to an old address', 'It was never shipped', 'The wrong item was sent'], a: 1 },
      { q: 'Why can\'t the package be redirected?', opts: ['It was lost', 'It\'s already on the way', 'The address doesn\'t exist', 'It\'s too heavy'], a: 1 },
      { q: 'Will the customer pay for the second delivery?', opts: ['Yes, full price', 'No, the shipping is free', 'Half price', 'Only if it\'s late'], a: 1 }
    ]
  },
  speaking: {
    shadow: [
      { text: "Items can be returned within thirty days.", tip: "\"can be returned\" = kən-bi-ri-TÂRND." },
      { text: "Your card will be charged when it ships.", tip: "\"will be charged\" = wil-bi-CHÁRJD." },
      { text: "It should have been delivered on Monday.", tip: "\"should have been\" = shudov-bin." },
      { text: "The screen needs replacing.", tip: "\"needs replacing\": ênfase em replacing." },
      { text: "Sorry, that model is out of stock.", tip: "\"out of stock\" liga: audov-STÓK." }
    ],
    prompt: { q: 'Describe a problem you had with an online purchase (real or imagined): what happened, what should have happened and how the problem was or could be solved.', hints: ['should have been', 'can be returned', 'will be refunded', 'needs replacing'] }
  }
},

// ───────────────────────────── 55 · tema: casamentos
{
  id: 'c55', lv: 'b2', title: 'O futuro visto do passado: was going to, would, was about to', goal: 'Falar de planos que mudaram e de expectativas do passado: was going to, was about to, would.',
  theory: `
<p>Muitas histórias começam com um plano que não deu certo: "a gente ia casar na praia, mas choveu", "eu estava prestes a sair quando ele ligou", "achei que ela ia chorar". Para falar de um futuro <b>visto a partir do passado</b>, o inglês tem estruturas específicas: <b>was/were going to</b>, <b>was/were about to</b> e <b>would</b>. Casamentos, cheios de planos e imprevistos, são o cenário perfeito.</p>

<h3>1. Was / were going to: o plano que mudou</h3>
<p>Descreve uma intenção do passado, muitas vezes que <b>não aconteceu</b>:</p>
<ul>
<li><i>We <b>were going to</b> get married on the beach, but it rained.</i></li>
<li><i>I <b>was going to</b> call you, but I forgot.</i></li>
<li><i>She <b>wasn't going to</b> invite him, but she changed her mind.</i></li>
</ul>
<p>É uma forma natural de dar desculpas e contar mudanças de planos.</p>

<h3>2. Was / were about to: estava prestes a</h3>
<p>Algo que ia acontecer <b>imediatamente</b>, quando foi interrompido:</p>
<ul>
<li><i>The ceremony <b>was about to</b> start when the groom realized he'd lost the rings.</i></li>
<li><i>I <b>was about to</b> leave when you called.</i></li>
</ul>
<p>Também existe <b>was on the point of + -ing</b>, mais formal: <i>She was on the point of cancelling the wedding.</i></p>

<h3>3. Would: o futuro no discurso indireto e nas expectativas</h3>
<p><b>Would</b> funciona como o "will do passado":</p>
<ul>
<li><i>I knew she <b>would</b> say yes.</i> (eu sabia que ela diria sim)</li>
<li><i>They promised they <b>would</b> be there.</i></li>
<li><i>I never thought I <b>would</b> get married so young.</i></li>
</ul>
<p>É também o que você usa ao relatar uma fala com "will": <i>"I'll help you" → He said he would help me.</i></p>

<h3>4. Was supposed to: era para ser</h3>
<p>Como na lição 53, <b>was supposed to</b> indica o que estava combinado ou esperado, e que não aconteceu:</p>
<ul>
<li><i>The band <b>was supposed to</b> play until midnight, but they left at eleven.</i></li>
<li><i>The cake <b>was supposed to</b> arrive at noon.</i></li>
</ul>

<h3>5. Comparando</h3>
<table><tr><th>Estrutura</th><th>Ideia</th><th>Exemplo</th></tr>
<tr><td>was going to</td><td>intenção / plano passado</td><td><em>I was going to wear a blue dress.</em></td></tr>
<tr><td>was about to</td><td>ia acontecer naquele instante</td><td><em>The bride was about to arrive.</em></td></tr>
<tr><td>would</td><td>previsão ou promessa vista do passado</td><td><em>I knew it would be a great day.</em></td></tr>
<tr><td>was supposed to</td><td>combinado, esperado</td><td><em>The photographer was supposed to be there at ten.</em></td></tr></table>

<h3>6. Contando um dia com imprevistos</h3>
<div class="ex"><i>We were going to have the reception in the garden, but the forecast said it would rain all day. The night before, we were about to give up and cancel everything when my uncle offered his barn. The caterers were supposed to arrive at noon, but they got lost. In the end, it was the best day of our lives.</i></div>

<h3>7. Vocabulário de casamentos</h3>
<table><tr><th>Expressão</th><th>Sentido</th></tr>
<tr><td><em>the bride / the groom</em></td><td>a noiva / o noivo (no casamento)</td></tr>
<tr><td><em>fiancé / fiancée</em></td><td>noivo / noiva (durante o noivado)</td></tr>
<tr><td><em>the best man / the maid of honor</em></td><td>padrinho principal / madrinha principal</td></tr>
<tr><td><em>the ceremony / the reception</em></td><td>a cerimônia / a festa</td></tr>
<tr><td><em>the vows</em></td><td>os votos</td></tr>
<tr><td><em>the honeymoon</em></td><td>a lua de mel</td></tr>
<tr><td><em>walk down the aisle</em></td><td>entrar na igreja (caminhar até o altar)</td></tr>
<tr><td><em>tie the knot</em></td><td>casar (informal)</td></tr></table>

<h3>Resumo</h3>
<ul>
<li><b>was going to</b> = ia (plano que muitas vezes mudou).</li>
<li><b>was about to</b> = estava prestes a.</li>
<li><b>would</b> = futuro visto do passado (I knew she would...).</li>
<li><b>was supposed to</b> = era para (combinado).</li>
</ul>`,
  say: ["We were going to get married on the beach, but it rained.", "The ceremony was about to start when he realized he'd lost the rings.", "I knew she would say yes.", "The band was supposed to play until midnight.", "I was going to call you, but I completely forgot.", "They finally tied the knot after ten years together."],
  vocab: [
    { en: 'was going to', pt: 'ia (plano no passado)', ex: "I was going to wear a suit, but it was too hot." },
    { en: 'was about to', pt: 'estava prestes a', ex: "I was about to leave when you arrived." },
    { en: 'was supposed to', pt: 'era para, deveria', ex: "The photographer was supposed to arrive at ten." },
    { en: 'bride', pt: 'noiva (no dia do casamento)', ex: "The bride looked beautiful." },
    { en: 'groom', pt: 'noivo (no dia do casamento)', ex: "The groom was so nervous he forgot his speech." },
    { en: 'best man', pt: 'padrinho principal', ex: "The best man gave a hilarious speech." },
    { en: 'reception', pt: 'festa de casamento, recepção', ex: "The reception was in a beautiful garden." },
    { en: 'vows', pt: 'votos', ex: "They wrote their own wedding vows." },
    { en: 'honeymoon', pt: 'lua de mel', ex: "They went to Bali for their honeymoon." },
    { en: 'tie the knot', pt: 'casar (informal)', ex: "They tied the knot last summer." }
  ],
  pics: [
    { en: 'a wedding', pt: 'um casamento', img: 'Wedding' },
    { en: 'a ring', pt: 'um anel', img: 'Ring' },
    { en: 'a bouquet', pt: 'um buquê', img: 'Bouquet' },
    { en: 'a toast', pt: 'um brinde', img: 'Clinking glasses' },
    { en: 'a top hat', pt: 'uma cartola', img: 'Top hat' },
    { en: 'champagne', pt: 'champanhe', img: 'Bottle with popping cork' },
    { en: 'a wedding cake', pt: 'um bolo de casamento', img: 'Birthday cake' },
    { en: 'a dress', pt: 'um vestido', img: 'Dress' }
  ],
  fill: [
    { s: 'We were ___ to get married on the beach.', a: 'going' },
    { s: 'The ceremony was ___ to start when it started raining.', a: 'about' },
    { s: 'I knew she ___ say yes.', a: 'would' },
    { s: 'The photographer was ___ to arrive at ten.', a: 'supposed' },
    { s: 'The best ___ gave a hilarious speech.', a: 'man' },
    { s: 'They went to Bali for their ___.', a: 'honeymoon' },
    { s: 'They tied the ___ last summer.', a: 'knot' }
  ],
  reading: {
    title: 'The wedding that almost didn\'t happen',
    paras: [
      "Lucy and Dan had planned everything for more than a year. They were going to get married in a small vineyard in Portugal, with sixty guests, a jazz band and dinner under the stars. Nothing, they thought, could go wrong.",
      "Two days before the wedding, the vineyard called with terrible news: a storm had damaged the roof of the main building, and it wouldn't be repaired in time. Lucy was about to cancel everything when the owner of a small restaurant in the village offered his terrace instead.",
      "The day itself brought more surprises. The band was supposed to arrive at six, but their van broke down on the motorway. So the groom's grandmother, who had been a professional singer in the 1970s, picked up the microphone and sang for nearly an hour. Nobody had known she could still sing like that.",
      "Years later, Lucy says she wouldn't change a thing. 'We were going to have the perfect wedding,' she explains, 'and instead we had a real one. Every guest still talks about it. I never imagined that losing the venue would give us the best night of our lives.'"
    ],
    gloss: { 'vineyard': 'vinícola', 'damaged': 'danificou', 'in time': 'a tempo', 'terrace': 'terraço', 'broke down': 'quebrou', 'venue': 'local (do evento)' },
    qs: [
      { q: 'Where were Lucy and Dan going to get married?', opts: ['In a church', 'In a vineyard in Portugal', 'On a beach', 'In a hotel'], a: 1 },
      { q: 'What happened two days before the wedding?', opts: ['The groom got sick', 'A storm damaged the vineyard\'s roof', 'The band cancelled', 'It snowed'], a: 1 },
      { q: 'Who sang when the band didn\'t arrive?', opts: ['The bride', 'The groom\'s grandmother', 'The restaurant owner', 'A guest'], a: 1 },
      { q: 'How does Lucy feel about the wedding now?', opts: ['She regrets it', 'She wouldn\'t change a thing', 'She wants to repeat it', 'She is still angry'], a: 1 }
    ]
  },
  listening: {
    kind: 'dialogue', place: 'Amigos relembrando um casamento',
    lines: [
      { s: 'Jo', v: 'en-GB-SoniaNeural', t: "Do you remember Mark and Anna's wedding? What a day!" },
      { s: 'Sam', v: 'en-US-BrianNeural', t: "How could I forget? I was the best man, and I was about to give my speech when I realized I'd left it at the hotel." },
      { s: 'Jo', v: 'en-GB-SoniaNeural', t: "No! What did you do?" },
      { s: 'Sam', v: 'en-US-BrianNeural', t: "I improvised. I was going to tell a funny story about our university days, but I panicked and told the story of how they met instead." },
      { s: 'Jo', v: 'en-GB-SoniaNeural', t: "Well, it worked. Anna cried. I knew she would." },
      { s: 'Sam', v: 'en-US-BrianNeural', t: "And then the DJ, who was supposed to play until two, fell asleep at midnight!" },
      { s: 'Jo', v: 'en-GB-SoniaNeural', t: "I'd forgotten about that! Mark's dad took over and played eighties music for two hours." },
      { s: 'Sam', v: 'en-US-BrianNeural', t: "Best part of the night. Everyone said they wouldn't dance, and everyone ended up dancing." },
      { s: 'Jo', v: 'en-GB-SoniaNeural', t: "They've just had their tenth anniversary, you know. I never thought we'd still be talking about that wedding." }
    ],
    qs: [
      { q: 'What was Sam\'s role at the wedding?', opts: ['The groom', 'The best man', 'The DJ', 'A guest'], a: 1 },
      { q: 'What problem did Sam have?', opts: ['He arrived late', 'He left his speech at the hotel', 'He lost the rings', 'He got sick'], a: 1 },
      { q: 'What happened to the DJ?', opts: ['He didn\'t come', 'He fell asleep at midnight', 'He played the wrong music', 'He left early'], a: 1 },
      { q: 'Who played music after the DJ?', opts: ['Sam', 'Mark\'s dad', 'Anna', 'Jo'], a: 1 }
    ]
  },
  speaking: {
    shadow: [
      { text: "We were going to get married on the beach.", tip: "\"were going to\" pode virar \"wer-gona\"." },
      { text: "I was about to leave when you called.", tip: "\"about to\" = a-BAU-tu." },
      { text: "I knew she would say yes.", tip: "\"she would\" contrai: shiid." },
      { text: "The band was supposed to play until midnight.", tip: "\"supposed to\" = sa-POUS-tu." },
      { text: "They tied the knot after ten years together.", tip: "\"knot\" = /nót/; o k é mudo." }
    ],
    prompt: { q: 'Tell the story of an event (a wedding, a party, a trip) where plans changed: what was going to happen, what was supposed to happen, and what actually happened.', hints: ['was going to', 'was about to', 'was supposed to', 'I knew it would'] }
  }
}
]);
