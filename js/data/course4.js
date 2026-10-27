// Curso diário — lições 16 a 20 (temas de fundo anotados só no código).
window.COURSE = (window.COURSE || []).concat([

// ───────────────────────────── 16 · tema: e-mails e reuniões
{
  id: 'c16', lv: 'b2', title: 'Formal ou informal? E-mails e reuniões', goal: 'Escolher o tom certo: frases prontas para e-mails, reuniões e mensagens de trabalho.',
  theory: `
<p>No trabalho, o inglês muda de tom o tempo todo: um e-mail para um cliente novo, uma mensagem rápida para um colega, uma reunião com a diretoria. Errar o tom raramente causa um desastre, mas pode soar frio, rude ou exageradamente cerimonioso. Nesta lição você vai aprender a escolher o registro certo e terá um repertório de frases prontas.</p>

<h3>1. Os três níveis</h3>
<table><tr><th>Função</th><th>Formal</th><th>Neutro</th><th>Informal</th></tr>
<tr><td>Abrir</td><td><em>Dear Mr. Smith,</em></td><td><em>Hi Sarah,</em></td><td><em>Hey!</em></td></tr>
<tr><td>Motivo</td><td><em>I am writing to inquire about...</em></td><td><em>I'm writing about...</em></td><td><em>Quick question about...</em></td></tr>
<tr><td>Pedir</td><td><em>I would be grateful if you could...</em></td><td><em>Could you please...?</em></td><td><em>Can you...?</em></td></tr>
<tr><td>Anexo</td><td><em>Please find attached...</em></td><td><em>I've attached...</em></td><td><em>Here's the file.</em></td></tr>
<tr><td>Fechar</td><td><em>Kind regards, / Yours sincerely,</em></td><td><em>Best, / Thanks,</em></td><td><em>Cheers! / Talk soon</em></td></tr></table>
<p>Na dúvida, escolha o <b>neutro</b>. Ele é educado sem ser rígido e funciona com quase todo mundo.</p>

<h3>2. O que deixa um texto formal</h3>
<ul>
<li><b>Sem contrações:</b> <i>I am, we will, do not</i> em vez de <i>I'm, we'll, don't</i>.</li>
<li><b>Verbos mais longos:</b> <i>receive</i> (get), <i>require</i> (need), <i>inform</i> (tell), <i>assist</i> (help), <i>provide</i> (give).</li>
<li><b>Pedidos indiretos:</b> <i>I would appreciate it if... / Would it be possible to...?</i></li>
<li><b>Voz passiva</b> para soar impessoal: <i>The invoice has been sent.</i></li>
</ul>

<h3>3. Frases essenciais de e-mail</h3>
<table><tr><th>Situação</th><th>Frase</th></tr>
<tr><td>Responder</td><td><em>Thank you for your email. / Thanks for getting back to me.</em></td></tr>
<tr><td>Dar seguimento</td><td><em>I'm just following up on my previous email.</em></td></tr>
<tr><td>Atraso na resposta</td><td><em>Sorry for the late reply.</em></td></tr>
<tr><td>Confirmar</td><td><em>I can confirm that... / Just to confirm, ...</em></td></tr>
<tr><td>Oferecer ajuda</td><td><em>Let me know if you have any questions.</em></td></tr>
<tr><td>Prazo</td><td><em>Could you send it by Friday, please?</em></td></tr>
<tr><td>Encerrar</td><td><em>I look forward to hearing from you.</em></td></tr></table>
<div class="ex"><b>Following up</b> é uma das expressões mais úteis do inglês corporativo: é a forma educada de cobrar uma resposta sem parecer impaciente.</div>

<h3>4. Linguagem de reunião</h3>
<table><tr><th>Função</th><th>Frases</th></tr>
<tr><td>Começar</td><td><em>Shall we get started? / Let's kick off.</em></td></tr>
<tr><td>Pauta</td><td><em>The main thing on the agenda today is...</em></td></tr>
<tr><td>Dar a palavra</td><td><em>What do you think, Ana? / Would you like to add anything?</em></td></tr>
<tr><td>Interromper</td><td><em>Sorry to interrupt, but... / Can I just add something?</em></td></tr>
<tr><td>Pedir esclarecimento</td><td><em>Could you clarify what you mean by...?</em></td></tr>
<tr><td>Voltar ao foco</td><td><em>Let's get back to the main point.</em></td></tr>
<tr><td>Encerrar</td><td><em>Let's wrap up. To sum up, ... / I'll send a follow-up email.</em></td></tr></table>

<h3>5. Discordar com educação</h3>
<p>Em reuniões, discordar diretamente ("You're wrong") soa agressivo. Nativos suavizam:</p>
<ul>
<li><i>I see your point, but I'm not sure that's the best option.</i></li>
<li><i>That's a good idea. My only concern is the budget.</i></li>
<li><i>Have we considered...?</i> (sugere outra opção sem atacar a primeira)</li>
</ul>

<h3>6. Mensagens rápidas (chat do trabalho)</h3>
<p>Em ferramentas como Slack ou Teams, o tom é informal, mas ainda profissional. São comuns as abreviações <b>ASAP</b> (as soon as possible), <b>FYI</b> (for your information), <b>EOD</b> (end of day) e <b>OOO</b> (out of office): <i>FYI, the client moved the meeting to 3 p.m. Can you send me the slides by EOD?</i></p>

<h3>Resumo</h3>
<ul>
<li>Escolha o tom pelo destinatário; na dúvida, use o neutro.</li>
<li>Formal: sem contrações, verbos longos, pedidos indiretos.</li>
<li><b>Following up</b> para cobrar com educação; <b>Please find attached</b> para anexos.</li>
<li>Reunião: <b>kick off, agenda, wrap up, follow-up email</b>.</li>
</ul>`,
  say: ["I'm just following up on my previous email.", "Please find attached the updated report.", "I would be grateful if you could send the contract by Friday.", "Sorry to interrupt, but can I just add something?", "Let's wrap up. I'll send a follow-up email this afternoon.", "Thanks for getting back to me so quickly."],
  vocab: [
    { en: 'follow up', pt: 'dar seguimento, cobrar uma resposta', ex: "I'm just following up on my email from last week." },
    { en: 'attached', pt: 'anexado, em anexo', ex: "Please find attached the invoice for October." },
    { en: 'agenda', pt: 'pauta (de reunião)', ex: "What's on the agenda for today's meeting?" },
    { en: 'wrap up', pt: 'encerrar, finalizar', ex: "Let's wrap up and continue tomorrow." },
    { en: 'get back to', pt: 'retornar, responder', ex: "I'll get back to you by the end of the day." },
    { en: 'reschedule', pt: 'remarcar', ex: "Could we reschedule the call for Thursday?" },
    { en: 'concern', pt: 'preocupação', ex: "My main concern is the deadline." },
    { en: 'clarify', pt: 'esclarecer', ex: "Could you clarify what you mean by 'urgent'?" },
    { en: 'out of office', pt: 'fora do escritório, ausente', ex: "I'll be out of office until Monday." },
    { en: 'kick off', pt: 'começar (reunião, projeto)', ex: "Let's kick off with a quick update from each team." }
  ],
  pics: [
    { en: 'an email', pt: 'um e-mail', img: 'E-mail' },
    { en: 'an envelope', pt: 'um envelope', img: 'Envelope' },
    { en: 'a calendar', pt: 'um calendário', img: 'Spiral calendar' },
    { en: 'a pushpin', pt: 'uma tachinha', img: 'Pushpin' },
    { en: 'a memo', pt: 'um memorando, uma anotação', img: 'Memo' },
    { en: 'a bar chart', pt: 'um gráfico de barras', img: 'Bar chart' },
    { en: 'a notepad', pt: 'um bloco de notas', img: 'Spiral notepad' },
    { en: 'a pen', pt: 'uma caneta', img: 'Pen' }
  ],
  fill: [
    { s: "I'm just following ___ on my previous email.", a: 'up' },
    { s: 'Please find ___ the report you asked for.', a: 'attached' },
    { s: "What's on the ___ for today's meeting?", a: 'agenda' },
    { s: "Let's wrap ___ and continue tomorrow.", a: 'up' },
    { s: "I'll get ___ to you by Friday.", a: 'back' },
    { s: 'Could we ___ the meeting for next week?', a: 'reschedule' },
    { s: 'Could you ___ what you mean?', a: 'clarify' }
  ],
  reading: {
    title: 'The email that nobody reads',
    paras: [
      "The average office worker receives dozens of emails every day, and most of them are only skimmed. If you want your message to be read and answered, length and clarity matter more than perfect grammar.",
      "Start with the subject line. 'Meeting' tells the reader almost nothing; 'Can we move Friday's client meeting to 3 p.m.?' tells them exactly what you need before they even open the message. Many busy managers decide what to read first based on the subject line alone.",
      "Next, put the most important information at the top. If you're asking for something, ask in the first two sentences, not in the fifth paragraph. Background details can come later, for anyone who wants them.",
      "Finally, make the next step obvious. A clear request with a deadline, such as 'Could you confirm by Wednesday?', gets far more replies than a vague 'Let me know what you think.' Short, specific and polite: that's the formula for an email that actually gets answered."
    ],
    gloss: { 'skimmed': 'lidos por cima', 'subject line': 'linha de assunto', 'background details': 'detalhes de contexto', 'obvious': 'óbvio', 'vague': 'vago', 'formula': 'fórmula' },
    qs: [
      { q: 'What happens to most work emails, according to the text?', opts: ['They are deleted', 'They are only skimmed', 'They are printed', 'They are forwarded'], a: 1 },
      { q: 'Why is "Meeting" a bad subject line?', opts: ['It is too formal', 'It tells the reader almost nothing', 'It is too long', 'It is rude'], a: 1 },
      { q: 'Where should your request appear?', opts: ['At the end', 'In the first two sentences', 'In an attachment', 'In the subject line only'], a: 1 },
      { q: 'Which request gets more replies?', opts: ['Let me know what you think', 'Could you confirm by Wednesday?', 'Any thoughts?', 'Whenever you can'], a: 1 }
    ]
  },
  listening: {
    kind: 'dialogue', place: 'O início de uma reunião de equipe',
    lines: [
      { s: 'Manager', v: 'en-GB-SoniaNeural', t: "Morning, everyone. Shall we get started? We've only got thirty minutes, so let's keep it quick." },
      { s: 'Manager', v: 'en-GB-SoniaNeural', t: "The main thing on the agenda today is the launch date for the new app. Pedro, can you give us an update?" },
      { s: 'Pedro', v: 'en-US-AndrewNeural', t: "Sure. Development is almost finished, but testing is behind schedule. If we launch on the first of March, I'm worried we'll find bugs after release." },
      { s: 'Lisa', v: 'en-US-AvaNeural', t: "Sorry to interrupt, but the marketing campaign is already booked for March. Moving the date would be expensive." },
      { s: 'Pedro', v: 'en-US-AndrewNeural', t: "I see your point, but launching with serious bugs could be even more expensive." },
      { s: 'Manager', v: 'en-GB-SoniaNeural', t: "Both fair concerns. Have we considered a soft launch? We could release it to a small group of users first and do the full launch two weeks later." },
      { s: 'Lisa', v: 'en-US-AvaNeural', t: "That could work. I'd need to check with the agency, though." },
      { s: 'Manager', v: 'en-GB-SoniaNeural', t: "Great. Lisa, could you get back to us on that by Thursday? Okay, let's wrap up. I'll send a follow-up email with the action points." }
    ],
    qs: [
      { q: 'What is the main topic of the meeting?', opts: ['Hiring new staff', 'The launch date of a new app', 'The office move', 'Budget cuts'], a: 1 },
      { q: 'What is Pedro worried about?', opts: ['Marketing costs', 'Finding bugs after release', 'The team being too small', 'Losing a client'], a: 1 },
      { q: 'Why does Lisa disagree?', opts: ['She dislikes the app', 'The marketing campaign is already booked for March', 'She is on vacation', 'Testing is finished'], a: 1 },
      { q: 'What does the manager suggest?', opts: ['Cancelling the app', 'A soft launch with a small group first', 'Hiring more testers', 'Launching in January'], a: 1 }
    ]
  },
  speaking: {
    shadow: [
      { text: "Shall we get started? We don't have much time.", tip: "\"Shall we\" = shêl-wi, rápido." },
      { text: "I'm just following up on my previous email.", tip: "\"following up\" liga: fólouingâp." },
      { text: "Sorry to interrupt, but can I add something?", tip: "Tom educado; pausa depois de \"but\"." },
      { text: "I see your point, but my main concern is the budget.", tip: "Ênfase em \"concern\" e \"budget\"." },
      { text: "Let's wrap up. I'll send a follow-up email.", tip: "\"wrap up\" = rép-âp; o w é mudo." }
    ],
    prompt: { q: 'Imagine you are leading a short meeting: open it, present the main topic, politely disagree with an idea and close the meeting.', hints: ['shall we get started', 'the main thing on the agenda', 'I see your point, but', "let's wrap up"] }
  }
},

// ───────────────────────────── 17 · tema: dinheiro e banco
{
  id: 'c17', lv: 'b1', title: 'Números, preços e porcentagens', goal: 'Falar números grandes, valores, datas, porcentagens e decimais sem travar.',
  theory: `
<p>Números parecem fáceis até alguém dizer "two point five million" rápido ao telefone. Em inglês, a forma de ler valores, porcentagens, decimais e anos tem regras próprias, e algumas são o contrário do português. Nesta lição você vai aprender a dizer e entender números com confiança, usando situações de banco, compras e finanças.</p>

<h3>1. Números grandes</h3>
<table><tr><th>Número</th><th>Em inglês</th></tr>
<tr><td>125</td><td><em>a hundred and twenty-five</em> (UK) / <em>one hundred twenty-five</em> (US)</td></tr>
<tr><td>1,500</td><td><em>one thousand five hundred</em> ou <em>fifteen hundred</em></td></tr>
<tr><td>25,000</td><td><em>twenty-five thousand</em></td></tr>
<tr><td>2,400,000</td><td><em>two point four million</em></td></tr>
<tr><td>1,000,000,000</td><td><em>one billion</em> (= um bilhão)</td></tr></table>
<div class="ex">Duas regras importantes: <b>hundred, thousand e million não vão para o plural</b> depois de um número (❌ <i>two thousands</i>, ✅ <i>two thousand</i>). E em inglês a <b>vírgula separa milhares</b> e o <b>ponto separa decimais</b>: <i>1,500.75</i> é mil e quinhentos e setenta e cinco centavos.</div>

<h3>2. Decimais e porcentagens</h3>
<ul>
<li><i>2.5</i> = <em>two point five</em> (nunca "two comma five")</li>
<li><i>0.75</i> = <em>zero point seven five</em> ou <em>point seven five</em></li>
<li><i>15%</i> = <em>fifteen percent</em>; <i>a 3.5% increase</i> = <em>a three point five percent increase</em></li>
</ul>
<p>Depois do ponto, os dígitos são lidos um por um: <i>3.14</i> = <em>three point one four</em>.</p>

<h3>3. Dinheiro</h3>
<table><tr><th>Escrito</th><th>Falado</th></tr>
<tr><td>$5.99</td><td><em>five ninety-nine</em> / <em>five dollars and ninety-nine cents</em></td></tr>
<tr><td>£12.50</td><td><em>twelve fifty</em> / <em>twelve pounds fifty</em></td></tr>
<tr><td>€300</td><td><em>three hundred euros</em></td></tr>
<tr><td>R$1,200</td><td><em>one thousand two hundred reais</em></td></tr></table>
<p>No dia a dia, as pessoas encurtam: <i>It's twenty-nine ninety-five.</i> Gírias comuns: <b>a buck</b> (um dólar, EUA), <b>a quid</b> (uma libra, Reino Unido), <b>a grand</b> (mil).</p>

<h3>4. Anos e datas</h3>
<ul>
<li>Anos são lidos em pares: <i>1998</i> = <em>nineteen ninety-eight</em>; <i>2015</i> = <em>twenty fifteen</em> ou <em>two thousand fifteen</em>.</li>
<li><i>2005</i> = <em>two thousand five</em> (ou <em>two thousand and five</em>, UK).</li>
<li>Datas usam números ordinais: <i>March 3rd</i> = <em>March third</em> (EUA) / <em>the third of March</em> (UK).</li>
</ul>
<div class="ex">Cuidado com o formato: nos EUA, <b>04/05</b> é 5 de abril (mês/dia). No Reino Unido e no Brasil, é 4 de maio.</div>

<h3>5. Thirteen × thirty: a confusão clássica</h3>
<p>Os números de 13 a 19 têm a <b>ênfase no fim</b> (thir<b>TEEN</b>, fif<b>TEEN</b>); as dezenas têm a <b>ênfase no começo</b> (<b>THIR</b>ty, <b>FIF</b>ty). Na dúvida, peça confirmação: <i>Sorry, was that fifteen or fifty? One-five or five-zero?</i></p>

<h3>6. Linguagem do banco e das finanças</h3>
<table><tr><th>Expressão</th><th>Sentido</th></tr>
<tr><td><em>open an account</em></td><td>abrir uma conta</td></tr>
<tr><td><em>withdraw / deposit</em></td><td>sacar / depositar</td></tr>
<tr><td><em>transfer money</em></td><td>transferir dinheiro</td></tr>
<tr><td><em>balance</em></td><td>saldo</td></tr>
<tr><td><em>fee / charge</em></td><td>taxa, tarifa</td></tr>
<tr><td><em>interest rate</em></td><td>taxa de juros</td></tr>
<tr><td><em>pay in installments</em></td><td>pagar parcelado</td></tr>
<tr><td><em>save / spend</em></td><td>economizar / gastar</td></tr></table>

<h3>7. Confirmando valores ao telefone ou no balcão</h3>
<p>Números são a informação mais fácil de entender errado. Nativos confirmam o tempo todo, e você também deve:</p>
<ul>
<li><i>Sorry, could you repeat the amount?</i> (Pode repetir o valor?)</li>
<li><i>Just to confirm, that's two thousand four hundred, right?</i></li>
<li><i>Is that per month or per year?</i></li>
<li><i>Does that include tax?</i> (Inclui impostos?)</li>
</ul>
<p>Para números de telefone e de conta, os dígitos são lidos um por um, e o zero costuma virar <b>oh</b>: <i>0207</i> = <em>oh-two-oh-seven</em>. Números repetidos podem ser agrupados: <i>55</i> = <em>double five</em>, especialmente no Reino Unido.</p>

<h3>Resumo</h3>
<ul>
<li>hundred, thousand, million: sem plural depois de número.</li>
<li>Vírgula = milhar; ponto = decimal (<b>point</b>).</li>
<li>Anos em pares; datas com ordinais.</li>
<li>-teen com ênfase no fim; -ty no começo.</li>
</ul>`,
  say: ["The total comes to one thousand two hundred and fifty dollars.", "Inflation went up by three point five percent last year.", "Sorry, was that fifteen or fifty?", "I'd like to withdraw two hundred euros, please.", "Can I pay in installments?", "My birthday is on March third, nineteen ninety-four."],
  vocab: [
    { en: 'withdraw', pt: 'sacar (dinheiro)', ex: "I need to withdraw some cash before the trip." },
    { en: 'balance', pt: 'saldo', ex: "I checked my balance on the app." },
    { en: 'fee', pt: 'taxa, tarifa', ex: "The bank charges a small fee for international transfers." },
    { en: 'interest rate', pt: 'taxa de juros', ex: "The interest rate on this loan is quite high." },
    { en: 'installments', pt: 'parcelas', ex: "I'm paying for the laptop in ten installments." },
    { en: 'transfer', pt: 'transferência; transferir', ex: "I'll transfer the money to your account tonight." },
    { en: 'savings', pt: 'economias, poupança', ex: "We used our savings to buy the apartment." },
    { en: 'budget', pt: 'orçamento', ex: "We need to stick to a budget this month." },
    { en: 'a grand', pt: 'mil (dólares, libras; informal)', ex: "That trip cost us about three grand." },
    { en: 'afford', pt: 'ter condições de pagar', ex: "We can't afford a new car right now." }
  ],
  pics: [
    { en: 'a banknote', pt: 'uma cédula', img: 'Dollar banknote' },
    { en: 'a coin', pt: 'uma moeda', img: 'Coin' },
    { en: 'a credit card', pt: 'um cartão de crédito', img: 'Credit card' },
    { en: 'a money bag', pt: 'um saco de dinheiro', img: 'Money bag' },
    { en: 'a bank', pt: 'um banco', img: 'Bank' },
    { en: 'a receipt', pt: 'um recibo', img: 'Receipt' },
    { en: 'a purse', pt: 'uma carteira (de moedas)', img: 'Purse' },
    { en: 'a piggy bank', pt: 'um cofrinho', img: 'Pig' }
  ],
  fill: [
    { s: 'I need to ___ some cash from the ATM.', a: 'withdraw' },
    { s: 'The bank charges a small ___ for transfers.', a: 'fee' },
    { s: "I'm paying for the TV in twelve ___.", a: 'installments' },
    { s: 'Let me check my ___ before I buy it.', a: 'balance' },
    { s: "We can't ___ a vacation this year.", a: 'afford' },
    { s: 'Inflation went up by three ___ five percent.', a: 'point' },
    { s: 'We need to stick to a ___ this month.', a: 'budget' }
  ],
  reading: {
    title: 'The invisible cost of small payments',
    paras: [
      "A coffee here, a delivery fee there, a streaming subscription you forgot about. Individually, small payments seem harmless. Together, they can quietly eat a significant part of your monthly budget, and because they're small, most people never add them up.",
      "Financial planners often suggest a simple experiment: write down every single purchase for thirty days, no matter how small. Many people are shocked by the result. Five dollars a day on snacks and drinks, for example, adds up to more than eighteen hundred dollars a year.",
      "Subscriptions are another common trap. It's easy to sign up for a free trial and forget to cancel it. Some studies suggest that a large number of people pay for at least one service they no longer use. Checking your bank statement once a month can save a surprising amount.",
      "None of this means you should never buy a coffee again. The point is to spend on purpose. If a daily coffee makes you happy, keep it, but cancel the app you haven't opened since March. Small changes, repeated for months, become real savings."
    ],
    gloss: { 'harmless': 'inofensivo', 'eat': 'consumir, corroer', 'add them up': 'somá-los', 'trap': 'armadilha', 'free trial': 'teste grátis', 'bank statement': 'extrato bancário', 'on purpose': 'de propósito, com intenção' },
    qs: [
      { q: 'Why do people rarely notice small payments?', opts: ['Banks hide them', 'They are small, so people never add them up', 'They are paid in cash', 'They are tax-free'], a: 1 },
      { q: 'How much do five dollars a day add up to in a year?', opts: ['About five hundred dollars', 'More than eighteen hundred dollars', 'Exactly one thousand dollars', 'Five thousand dollars'], a: 1 },
      { q: 'What is the trap with free trials?', opts: ['They are never free', 'People forget to cancel them', 'They require a loan', 'They are illegal'], a: 1 },
      { q: 'What does "spend on purpose" mean?', opts: ['Never spend money', 'Spend consciously on what really matters to you', 'Spend only on weekends', 'Spend more on coffee'], a: 1 }
    ]
  },
  listening: {
    kind: 'dialogue', place: 'Atendimento no banco',
    lines: [
      { s: 'Clerk', v: 'en-US-EmmaNeural', t: "Good morning. How can I help you today?" },
      { s: 'Customer', v: 'en-GB-RyanNeural', t: "Hi. I'd like to transfer some money to my sister in Portugal. What are the fees?" },
      { s: 'Clerk', v: 'en-US-EmmaNeural', t: "For international transfers, there's a flat fee of fifteen dollars, plus the exchange rate. How much would you like to send?" },
      { s: 'Customer', v: 'en-GB-RyanNeural', t: "Two thousand five hundred dollars." },
      { s: 'Clerk', v: 'en-US-EmmaNeural', t: "Okay. Today's rate is zero point nine two euros per dollar, so she would receive about two thousand three hundred euros." },
      { s: 'Customer', v: 'en-GB-RyanNeural', t: "Sorry, was that fifteen or fifty dollars for the fee?" },
      { s: 'Clerk', v: 'en-US-EmmaNeural', t: "Fifteen. One-five. And the money usually arrives in two to three business days." },
      { s: 'Customer', v: 'en-GB-RyanNeural', t: "Great. Could you also tell me my current balance?" },
      { s: 'Clerk', v: 'en-US-EmmaNeural', t: "Of course. After the transfer, you'll have four thousand one hundred and twelve dollars and forty cents in your checking account." }
    ],
    qs: [
      { q: 'Where does the customer want to send money?', opts: ['To Spain', 'To Portugal', 'To Brazil', 'To the UK'], a: 1 },
      { q: 'How much is the fee?', opts: ['Fifty dollars', 'Fifteen dollars', 'Five dollars', 'There is no fee'], a: 1 },
      { q: 'How long does the transfer take?', opts: ['Immediately', 'Two to three business days', 'One week', 'One month'], a: 1 },
      { q: 'How much will he have after the transfer?', opts: ['$4,112.40', '$2,500', '$1,400', '$41,124'], a: 0 }
    ]
  },
  speaking: {
    shadow: [
      { text: "It costs twenty-nine dollars and ninety-five cents.", tip: "\"twenty-nine\": no americano, o t de twenty quase some: twéni." },
      { text: "Sales went up by three point five percent.", tip: "\"point\" para o decimal, nunca \"comma\"." },
      { text: "Sorry, was that fifteen or fifty?", tip: "fif-TEEN × FIF-ty: exagere a diferença." },
      { text: "I was born in nineteen ninety-six.", tip: "Ano lido em pares: nineteen / ninety-six." },
      { text: "I'd like to withdraw three hundred euros.", tip: "\"withdraw\" = with-DRÓ." }
    ],
    prompt: { q: 'Talk about money: the price of things you bought recently, a big purchase you want to make and how you plan to save for it.', hints: ['it cost', 'percent', 'save', 'budget', 'afford'] }
  }
},

// ───────────────────────────── 18 · tema: alugar um apartamento
{
  id: 'c18', lv: 'b2', title: 'Perguntas indiretas e educadas', goal: 'Do you know where...? Could you tell me if...? Perguntar com educação e sem inverter a frase.',
  theory: `
<p>Uma pergunta direta como <i>Where is the station?</i> é correta, mas pode soar seca, principalmente com desconhecidos ou em situações formais. Nativos costumam "embrulhar" a pergunta numa frase mais gentil: <i>Could you tell me where the station is?</i> Essas são as <b>perguntas indiretas</b>, e o segredo delas está numa mudança de ordem que confunde muita gente.</p>

<h3>1. A estrutura</h3>
<p>Uma pergunta indireta tem duas partes: uma <b>frase de abertura</b> e a pergunta propriamente dita, que passa a ter <b>ordem de afirmação</b> (sujeito antes do verbo):</p>
<table><tr><th>Direta</th><th>Indireta</th></tr>
<tr><td><em>Where is the bathroom?</em></td><td><em>Could you tell me where the bathroom <b>is</b>?</em></td></tr>
<tr><td><em>How much is the rent?</em></td><td><em>Do you know how much the rent <b>is</b>?</em></td></tr>
<tr><td><em>When can I move in?</em></td><td><em>I was wondering when I <b>can</b> move in.</em></td></tr></table>
<div class="ex">O erro mais comum: ❌ <i>Could you tell me where is the bathroom?</i> Na indireta, o verbo vai para depois do sujeito: ✅ <i>where the bathroom is</i>.</div>

<h3>2. Frases de abertura</h3>
<ul>
<li><i>Could you tell me...?</i> (padrão, educado)</li>
<li><i>Do you know...?</i> (neutro)</li>
<li><i>Do you happen to know...?</i> (bem gentil: "por acaso você sabe")</li>
<li><i>I was wondering...</i> (indireto e formal, termina com ponto final)</li>
<li><i>Would you mind telling me...?</i></li>
<li><i>I'd like to know...</i></li>
</ul>

<h3>3. Sumindo com do, does e did</h3>
<p>Quando a pergunta direta usa o auxiliar <b>do/does/did</b>, ele <b>desaparece</b> na indireta, e o verbo principal volta a ser conjugado:</p>
<table><tr><th>Direta</th><th>Indireta</th></tr>
<tr><td><em>What time does the office open?</em></td><td><em>Do you know what time the office <b>opens</b>?</em></td></tr>
<tr><td><em>How much did you pay?</em></td><td><em>Can I ask how much you <b>paid</b>?</em></td></tr>
<tr><td><em>Where do I sign?</em></td><td><em>Could you show me where I <b>sign</b>?</em></td></tr></table>

<h3>4. Perguntas de sim ou não: if / whether</h3>
<p>Quando a pergunta direta não tem palavra interrogativa (é de sim ou não), usamos <b>if</b> ou <b>whether</b>:</p>
<ul>
<li><i>Is the apartment furnished?</i> → <i>Do you know <b>if</b> the apartment is furnished?</i></li>
<li><i>Are pets allowed?</i> → <i>Could you tell me <b>whether</b> pets are allowed?</i></li>
<li><i>Does the rent include bills?</i> → <i>I was wondering <b>if</b> the rent includes bills.</i></li>
</ul>
<p><b>Whether</b> é um pouco mais formal, e é comum com "or not": <i>I'd like to know whether or not there's parking.</i></p>

<h3>5. Por que isso importa</h3>
<p>Perguntas indiretas são essenciais em situações em que você precisa de algo de alguém: um corretor, um atendente, um professor, um chefe. Elas mostram educação e também suavizam perguntas delicadas, como sobre dinheiro: <i>Would you mind telling me how much the deposit is?</i> soa muito melhor do que <i>How much is the deposit?</i> numa primeira conversa.</p>

<h3>6. Vocabulário de aluguel</h3>
<table><tr><th>Expressão</th><th>Sentido</th></tr>
<tr><td><em>rent</em></td><td>aluguel; alugar (como inquilino)</td></tr>
<tr><td><em>landlord / landlady</em></td><td>proprietário / proprietária</td></tr>
<tr><td><em>tenant</em></td><td>inquilino</td></tr>
<tr><td><em>lease</em></td><td>contrato de aluguel</td></tr>
<tr><td><em>deposit</em></td><td>caução</td></tr>
<tr><td><em>furnished / unfurnished</em></td><td>mobiliado / sem móveis</td></tr>
<tr><td><em>utilities / bills included</em></td><td>contas (luz, água, gás) incluídas</td></tr>
<tr><td><em>move in / move out</em></td><td>se mudar para / sair do imóvel</td></tr></table>

<h3>Resumo</h3>
<ul>
<li>Abertura educada + pergunta com <b>ordem de afirmação</b>.</li>
<li>do/does/did desaparecem; o verbo é conjugado normalmente.</li>
<li>Perguntas de sim ou não: <b>if / whether</b>.</li>
<li><i>I was wondering...</i> termina com ponto final, não interrogação.</li>
</ul>`,
  say: ["Could you tell me how much the rent is?", "Do you know if the apartment is furnished?", "I was wondering when I can move in.", "Would you mind telling me how much the deposit is?", "Do you happen to know whether pets are allowed?", "Could you show me where I need to sign?"],
  vocab: [
    { en: 'landlord', pt: 'proprietário (do imóvel)', ex: "The landlord lives in the apartment downstairs." },
    { en: 'tenant', pt: 'inquilino', ex: "The previous tenant left the place very clean." },
    { en: 'lease', pt: 'contrato de aluguel', ex: "We signed a one-year lease." },
    { en: 'deposit', pt: 'caução', ex: "You'll get your deposit back when you move out." },
    { en: 'furnished', pt: 'mobiliado', ex: "Is the apartment furnished or unfurnished?" },
    { en: 'utilities', pt: 'contas (luz, água, gás)', ex: "The rent doesn't include utilities." },
    { en: 'move in', pt: 'se mudar (para um lugar)', ex: "When can we move in?" },
    { en: 'neighborhood', pt: 'bairro, vizinhança', ex: "It's a quiet neighborhood with lots of parks." },
    { en: 'I was wondering', pt: 'eu queria saber, será que', ex: "I was wondering if the rent is negotiable." },
    { en: 'whether', pt: 'se (em perguntas indiretas)', ex: "Could you tell me whether there's parking?" }
  ],
  pics: [
    { en: 'a house', pt: 'uma casa', img: 'House' },
    { en: 'a key', pt: 'uma chave', img: 'Key' },
    { en: 'a bed', pt: 'uma cama', img: 'Bed' },
    { en: 'a sofa', pt: 'um sofá', img: 'Couch and lamp' },
    { en: 'a window', pt: 'uma janela', img: 'Window' },
    { en: 'a bathtub', pt: 'uma banheira', img: 'Bathtub' },
    { en: 'a door', pt: 'uma porta', img: 'Door' },
    { en: 'a chair', pt: 'uma cadeira', img: 'Chair' }
  ],
  fill: [
    { s: 'Could you tell me how much the rent ___?', a: 'is' },
    { s: 'Do you know ___ the apartment is furnished?', a: 'if' },
    { s: 'I was ___ when I can move in.', a: 'wondering' },
    { s: 'The ___ lives in the apartment downstairs.', a: 'landlord' },
    { s: "You'll get your ___ back when you move out.", a: 'deposit' },
    { s: "Does the rent include ___ like water and electricity?", a: 'utilities' },
    { s: 'We signed a one-year ___.', a: 'lease' }
  ],
  reading: {
    title: 'Questions to ask before you sign',
    paras: [
      "Finding an apartment can be so exhausting that, when you finally see a place you like, the temptation is to sign immediately. But a few minutes of questions during the viewing can save you months of problems later.",
      "Start with money beyond the rent. Ask whether the utilities are included, how much they usually cost in winter, and when and how the deposit will be returned. It's also worth asking if the rent is likely to go up when the lease is renewed.",
      "Then look closely at the apartment itself. Turn on the taps, check the water pressure in the shower and open the windows. Ask the landlord if there have been any problems with mold, noise or heating. A good landlord will answer honestly; a vague answer can be a warning sign.",
      "Finally, think about daily life. Do you know how long the commute to work will take at rush hour? Is the neighborhood quiet at night? If possible, visit the area twice, once during the day and once in the evening. The perfect apartment on a terrible street isn't really perfect."
    ],
    gloss: { 'viewing': 'visita ao imóvel', 'renewed': 'renovado', 'taps': 'torneiras', 'water pressure': 'pressão da água', 'mold': 'mofo', 'warning sign': 'sinal de alerta' },
    qs: [
      { q: 'What is the main temptation when you find a place you like?', opts: ['To negotiate a lot', 'To sign immediately', 'To ask too many questions', 'To keep looking'], a: 1 },
      { q: 'Which money question does the text suggest?', opts: ['How much the landlord earns', 'Whether utilities are included', 'The price of furniture', 'The cost of parking tickets'], a: 1 },
      { q: 'What might a vague answer from the landlord be?', opts: ['A sign of honesty', 'A warning sign', 'Normal politeness', 'A joke'], a: 1 },
      { q: 'Why visit the area twice?', opts: ['To meet the neighbors', 'To see it during the day and in the evening', 'Because the landlord asks', 'To measure the rooms'], a: 1 }
    ]
  },
  listening: {
    kind: 'dialogue', place: 'Visitando um apartamento para alugar',
    lines: [
      { s: 'Agent', v: 'en-US-AndrewNeural', t: "So this is the living room. As you can see, there's lots of natural light." },
      { s: 'Renter', v: 'en-US-AvaNeural', t: "It's lovely. Could you tell me how much the rent is, exactly?" },
      { s: 'Agent', v: 'en-US-AndrewNeural', t: "It's eighteen hundred a month, on a twelve-month lease." },
      { s: 'Renter', v: 'en-US-AvaNeural', t: "And do you know if that includes utilities?" },
      { s: 'Agent', v: 'en-US-AndrewNeural', t: "Water is included, but electricity and internet are separate. Most tenants pay around a hundred and twenty dollars a month for both." },
      { s: 'Renter', v: 'en-US-AvaNeural', t: "Okay. I was wondering whether pets are allowed. I have a small dog." },
      { s: 'Agent', v: 'en-US-AndrewNeural', t: "Small pets are fine, but there's an extra pet deposit of three hundred dollars." },
      { s: 'Renter', v: 'en-US-AvaNeural', t: "That's reasonable. Would you mind telling me why the previous tenant left?" },
      { s: 'Agent', v: 'en-US-AndrewNeural', t: "Not at all. They bought a house, actually. They lived here for four years and never had any problems." },
      { s: 'Renter', v: 'en-US-AvaNeural', t: "Good to know. And do you happen to know when I could move in?" },
      { s: 'Agent', v: 'en-US-AndrewNeural', t: "It's available from the first of next month. If you're interested, I can send you the application today." }
    ],
    qs: [
      { q: 'How much is the rent?', opts: ['$1,200', '$1,800', '$1,500', '$800'], a: 1 },
      { q: 'What is included in the rent?', opts: ['Electricity', 'Internet', 'Water', 'Everything'], a: 2 },
      { q: 'What is the extra cost for the dog?', opts: ['A $300 pet deposit', '$100 a month', 'Nothing', '$30 a week'], a: 0 },
      { q: 'Why did the previous tenant leave?', opts: ['There were problems with noise', 'They bought a house', 'The rent went up', 'They moved abroad'], a: 1 }
    ]
  },
  speaking: {
    shadow: [
      { text: "Could you tell me how much the rent is?", tip: "\"Could you tell me\" = couldja-tellmi." },
      { text: "Do you know if the apartment is furnished?", tip: "\"furnished\" = FÂR-nisht, uma sílaba no final." },
      { text: "I was wondering when I can move in.", tip: "Frase afirmativa: a voz desce no final." },
      { text: "Would you mind telling me how much the deposit is?", tip: "Ênfase em \"mind\" e \"deposit\"." },
      { text: "Do you happen to know whether pets are allowed?", tip: "\"whether\" soa igual a \"weather\"." }
    ],
    prompt: { q: 'You are visiting an apartment to rent. Ask the landlord at least five polite indirect questions about the place.', hints: ['could you tell me', 'do you know if', 'I was wondering', 'would you mind telling me'] }
  }
},

// ───────────────────────────── 19 · tema: tarefas de casa
{
  id: 'c19', lv: 'b1', title: 'Phrasal verbs da casa', goal: 'Tidy up, take out, put away, clean up: phrasal verbs do dia a dia e onde colocar o objeto.',
  theory: `
<p>A rotina da casa está cheia de <b>phrasal verbs</b>: arrumar o quarto, tirar o lixo, guardar as compras, lavar a louça. Eles são verbos combinados com partículas (up, out, away, off) e são tão comuns que é difícil manter uma conversa doméstica sem eles. Além do significado, nesta lição você vai aprender a regra de <b>onde colocar o objeto</b>, que é o ponto mais traiçoeiro.</p>

<h3>1. Os phrasal verbs da casa</h3>
<table><tr><th>Phrasal verb</th><th>Sentido</th><th>Exemplo</th></tr>
<tr><td>tidy up</td><td>arrumar, organizar</td><td><em>Can you tidy up your room before dinner?</em></td></tr>
<tr><td>clean up</td><td>limpar (uma bagunça)</td><td><em>Let's clean up the kitchen after the party.</em></td></tr>
<tr><td>take out</td><td>tirar, levar para fora</td><td><em>It's your turn to take out the trash.</em></td></tr>
<tr><td>put away</td><td>guardar no lugar</td><td><em>Put away the groceries, please.</em></td></tr>
<tr><td>throw away / out</td><td>jogar fora</td><td><em>Throw away those old magazines.</em></td></tr>
<tr><td>pick up</td><td>pegar do chão; buscar alguém</td><td><em>Pick up your socks!</em></td></tr>
<tr><td>wipe down</td><td>passar um pano</td><td><em>Wipe down the counter after cooking.</em></td></tr>
<tr><td>hang up</td><td>pendurar</td><td><em>Hang up your coat, it's on the floor.</em></td></tr>
<tr><td>turn on / off</td><td>ligar / desligar</td><td><em>Turn off the lights when you leave.</em></td></tr>
<tr><td>run out of</td><td>ficar sem</td><td><em>We've run out of dish soap.</em></td></tr></table>

<h3>2. Separáveis: onde vai o objeto?</h3>
<p>A maioria dos phrasal verbs acima é <b>separável</b>: o objeto pode ficar no meio ou no fim.</p>
<ul>
<li><i>Take out the trash.</i> = <i>Take the trash out.</i></li>
<li><i>Turn off the TV.</i> = <i>Turn the TV off.</i></li>
</ul>
<p>Mas quando o objeto é um <b>pronome</b> (it, them, her...), ele <b>tem</b> que ficar no meio:</p>
<div class="ex">✅ <i>Take it out.</i> ❌ <i>Take out it.</i><br>✅ <i>Put them away.</i> ❌ <i>Put away them.</i><br>✅ <i>Turn it off.</i> ❌ <i>Turn off it.</i></div>
<p>Essa é a regra que mais derruba brasileiros, porque em português dizemos "desliga ela" na ordem contrária.</p>

<h3>3. Inseparáveis</h3>
<p>Alguns phrasal verbs nunca se separam: o objeto sempre vem depois da partícula. Os mais comuns na casa:</p>
<ul>
<li><b>look after</b> (cuidar de): <i>Can you look after the dog this weekend?</i></li>
<li><b>run out of</b> (ficar sem): <i>We ran out of milk.</i></li>
<li><b>get rid of</b> (se livrar de): <i>We need to get rid of this old sofa.</i></li>
<li><b>deal with</b> (lidar com): <i>I'll deal with the dishes.</i></li>
</ul>

<h3>4. Make × do na casa</h3>
<p>Revisando a lição da gramática rápida: tarefas domésticas usam <b>do</b>: <i>do the dishes, do the laundry, do the cleaning, do the shopping, do the ironing</i>. Mas: <b>make the bed</b>, <b>make dinner</b>, <b>make a mess</b> (fazer bagunça).</p>

<h3>5. Dividindo as tarefas</h3>
<p>Conversas sobre tarefas usam muito estas estruturas:</p>
<ul>
<li><i>Whose turn is it to do the dishes?</i> (De quem é a vez?)</li>
<li><i>It's your turn. I did them yesterday.</i></li>
<li><i>Could you give me a hand with the laundry?</i> (me dar uma mão)</li>
<li><i>I'll cook if you clean up.</i></li>
<li><i>Let's take turns.</i> (Vamos revezar.)</li>
</ul>

<h3>6. Reclamando com jeito</h3>
<p>Para pedir algo sem começar uma briga:</p>
<ul>
<li><i>Would you mind putting your shoes away?</i></li>
<li><i>Could you remember to turn off the stove next time?</i></li>
<li><i>It would be great if we could keep the kitchen tidy.</i></li>
</ul>

<h3>Resumo</h3>
<ul>
<li>tidy up, clean up, take out, put away, throw away, pick up, hang up, turn off.</li>
<li>Separáveis: com pronome, ele vai no meio: <b>take it out</b>.</li>
<li>Inseparáveis: look after, run out of, get rid of, deal with.</li>
<li>do the dishes / laundry, mas make the bed / a mess.</li>
</ul>`,
  say: ["Can you take out the trash? It's full.", "Put the groceries away before the ice cream melts.", "Turn it off when you leave the room, please.", "Whose turn is it to do the dishes?", "We've run out of dish soap again.", "I'll cook dinner if you clean up afterwards."],
  vocab: [
    { en: 'tidy up', pt: 'arrumar, organizar', ex: "Please tidy up your room before your grandmother arrives." },
    { en: 'take out the trash', pt: 'tirar o lixo', ex: "It's your turn to take out the trash." },
    { en: 'put away', pt: 'guardar (no lugar)', ex: "Can you put away the clean dishes?" },
    { en: 'throw away', pt: 'jogar fora', ex: "I threw away all the old magazines." },
    { en: 'do the laundry', pt: 'lavar a roupa', ex: "I usually do the laundry on Sundays." },
    { en: 'make a mess', pt: 'fazer bagunça', ex: "The kids made a mess in the living room." },
    { en: 'whose turn', pt: 'de quem é a vez', ex: "Whose turn is it to cook tonight?" },
    { en: 'give me a hand', pt: 'me dar uma mão, ajudar', ex: "Could you give me a hand with these boxes?" },
    { en: 'get rid of', pt: 'se livrar de', ex: "We need to get rid of this old sofa." },
    { en: 'chores', pt: 'tarefas domésticas', ex: "We split the chores between the three of us." }
  ],
  pics: [
    { en: 'a broom', pt: 'uma vassoura', img: 'Broom' },
    { en: 'a sponge', pt: 'uma esponja', img: 'Sponge' },
    { en: 'a bucket', pt: 'um balde', img: 'Bucket' },
    { en: 'a trash can', pt: 'uma lixeira', img: 'Wastebasket' },
    { en: 'a basket', pt: 'um cesto', img: 'Basket' },
    { en: 'soap', pt: 'sabão', img: 'Soap' },
    { en: 'a toilet', pt: 'um vaso sanitário', img: 'Toilet' },
    { en: 'a plunger', pt: 'um desentupidor', img: 'Plunger' }
  ],
  fill: [
    { s: "It's your turn to take ___ the trash.", a: 'out' },
    { s: 'Put the groceries ___ before they get warm.', a: 'away' },
    { s: 'The TV is still on. Can you turn it ___?', a: 'off' },
    { s: '___ turn is it to do the dishes?', a: 'Whose' },
    { s: 'I usually do the ___ on Sundays.', a: 'laundry' },
    { s: 'We need to get ___ of this old sofa.', a: 'rid' },
    { s: 'Could you give me a ___ with these boxes?', a: 'hand' }
  ],
  reading: {
    title: 'Who does the dishes?',
    paras: [
      "Ask any group of roommates what they argue about most, and the answer is rarely money or noise. It's chores. Dishes left in the sink, a trash can that nobody takes out, a bathroom that only one person ever seems to clean.",
      "The problem usually isn't laziness; it's invisibility. People notice the chores they do themselves and underestimate the ones others do. One roommate remembers cleaning the kitchen three times this week, but doesn't notice that someone else bought the toilet paper and paid the bills.",
      "Many households solve this with a simple chart on the fridge. Each person takes turns with the main tasks, and the list rotates every week. It sounds childish, but it removes the need to keep score and, more importantly, it stops arguments before they start.",
      "Another popular rule is 'clean as you go'. Instead of leaving everything for a big cleaning day, you wash the pan as soon as you finish cooking and put things away right after using them. Ten minutes a day is a lot less painful than three hours on a Saturday."
    ],
    gloss: { 'roommates': 'colegas de casa', 'argue': 'discutir, brigar', 'laziness': 'preguiça', 'underestimate': 'subestimar', 'households': 'lares, casas', 'keep score': 'contar pontos', 'clean as you go': 'limpar enquanto usa' },
    qs: [
      { q: 'What do roommates argue about most, according to the text?', opts: ['Money', 'Noise', 'Chores', 'Guests'], a: 2 },
      { q: 'What is the real problem behind chore arguments?', opts: ['Laziness', 'People don\'t notice what others do', 'Lack of time', 'Expensive cleaning products'], a: 1 },
      { q: 'How does a chart on the fridge help?', opts: ['It makes chores faster', 'It rotates tasks and stops arguments', 'It saves money', 'It replaces cleaning'], a: 1 },
      { q: 'What does "clean as you go" mean?', opts: ['Clean only when guests come', 'Clean small things right away instead of all at once', 'Hire a cleaner', 'Clean while walking'], a: 1 }
    ]
  },
  listening: {
    kind: 'dialogue', place: 'Dois colegas de apartamento organizando a casa',
    lines: [
      { s: 'Jake', v: 'en-US-BrianNeural', t: "Okay, my parents are coming at six, and this place is a mess. Can you give me a hand?" },
      { s: 'Nina', v: 'en-US-EmmaNeural', t: "Sure. What do you want me to do?" },
      { s: 'Jake', v: 'en-US-BrianNeural', t: "Could you do the dishes? I'll tidy up the living room." },
      { s: 'Nina', v: 'en-US-EmmaNeural', t: "Fine, but I did them yesterday too. Whose turn is it really?" },
      { s: 'Jake', v: 'en-US-BrianNeural', t: "Fair enough, it's mine. Okay, I'll do the dishes, and you take out the trash and put away the clean laundry?" },
      { s: 'Nina', v: 'en-US-EmmaNeural', t: "Deal. Oh, and we've run out of trash bags. Can you pick some up on the way back from the store?" },
      { s: 'Jake', v: 'en-US-BrianNeural', t: "Sure. And let's get rid of those boxes in the hallway. My mom will definitely notice them." },
      { s: 'Nina', v: 'en-US-EmmaNeural', t: "I'll take them down to the recycling. Hey, what about your bike? It's been in the kitchen for a week." },
      { s: 'Jake', v: 'en-US-BrianNeural', t: "Okay, okay, I'll put it away. You're starting to sound like my mother." }
    ],
    qs: [
      { q: 'Why does Jake want to clean the apartment?', opts: ['There is a party', 'His parents are coming at six', 'The landlord is visiting', 'Nina asked him'], a: 1 },
      { q: 'Whose turn is it to do the dishes?', opts: ['Nina\'s', 'Jake\'s', 'Nobody\'s', 'Both'], a: 1 },
      { q: 'What have they run out of?', opts: ['Dish soap', 'Trash bags', 'Toilet paper', 'Laundry detergent'], a: 1 },
      { q: 'Where has Jake\'s bike been?', opts: ['In the hallway', 'In the kitchen', 'On the balcony', 'In his bedroom'], a: 1 }
    ]
  },
  speaking: {
    shadow: [
      { text: "Can you take out the trash, please?", tip: "\"take out\" liga: teikaut." },
      { text: "Put them away before dinner.", tip: "\"Put them away\": o pronome fica no meio." },
      { text: "Whose turn is it to do the dishes?", tip: "\"Whose\" soa igual a \"who's\": /huuz/." },
      { text: "We've run out of dish soap again.", tip: "\"run out of\" = rânaudov." },
      { text: "Could you give me a hand with the laundry?", tip: "Pedido gentil, a voz sobe no final." }
    ],
    prompt: { q: 'Describe how chores are divided in your home: who does what, what you hate doing and a rule you would like everyone to follow.', hints: ['take out', 'put away', 'do the dishes', 'whose turn', 'tidy up'] }
  }
},

// ───────────────────────────── 20 · tema: família e relacionamentos
{
  id: 'c20', lv: 'b1', title: 'Quem é quem: who, which e that', goal: 'Orações relativas para descrever pessoas, coisas e lugares sem repetir palavras.',
  theory: `
<p>Para falar da família e das pessoas da nossa vida, precisamos juntar informações: "a minha prima que mora em Lisboa", "o presente que a minha avó me deu", "a casa onde eu cresci". Em inglês, essas ligações são feitas com os <b>pronomes relativos</b>: <b>who, which, that, where, whose</b>. Com eles, suas frases ficam mais longas, mais naturais e muito menos repetitivas.</p>

<h3>1. Who: para pessoas</h3>
<ul>
<li><i>My cousin <b>who</b> lives in Lisbon is a doctor.</i></li>
<li><i>That's the woman <b>who</b> taught me to swim.</i></li>
<li><i>I have an uncle <b>who</b> can speak five languages.</i></li>
</ul>

<h3>2. Which: para coisas e animais</h3>
<ul>
<li><i>This is the watch <b>which</b> my grandfather gave me.</i></li>
<li><i>We have a dog <b>which</b> is scared of cats.</i></li>
</ul>

<h3>3. That: para pessoas e coisas (o mais usado na fala)</h3>
<p>No inglês falado, <b>that</b> substitui who e which na maioria das vezes:</p>
<ul>
<li><i>The cousin <b>that</b> lives in Lisbon...</i></li>
<li><i>The watch <b>that</b> my grandfather gave me...</i></li>
</ul>
<div class="ex">Dica prática: na dúvida entre who e which, use <b>that</b>. Ele quase sempre funciona nas frases que identificam de quem ou do que estamos falando.</div>

<h3>4. Quando dá para omitir o pronome</h3>
<p>Se o pronome é o <b>objeto</b> do verbo (ou seja, depois dele vem outro sujeito), ele pode desaparecer. Nativos fazem isso o tempo todo:</p>
<table><tr><th>Com pronome</th><th>Sem pronome (mais natural)</th></tr>
<tr><td><em>The gift that my aunt sent...</em></td><td><em>The gift my aunt sent...</em></td></tr>
<tr><td><em>The man who I married...</em></td><td><em>The man I married...</em></td></tr></table>
<p>Mas quando o pronome é o <b>sujeito</b> (logo depois dele vem o verbo), ele é obrigatório: <i>My brother <b>who</b> lives in Rio</i>, nunca ❌ <i>My brother lives in Rio is...</i></p>

<h3>5. Where e whose</h3>
<ul>
<li><b>where</b> para lugares: <i>This is the house <b>where</b> I grew up.</i></li>
<li><b>whose</b> para posse (cujo): <i>I have a friend <b>whose</b> father is a famous chef.</i></li>
</ul>
<p><b>Whose</b> é muito útil e pouco usado por brasileiros: <i>She's the girl whose wedding we went to last year.</i></p>

<h3>6. Com vírgulas: informação extra</h3>
<p>Quando a informação é só um comentário (a pessoa já está identificada), usamos <b>vírgulas</b>, e aí <b>não se pode usar that</b>:</p>
<ul>
<li><i>My mother, <b>who</b> is seventy, still runs every morning.</i> (só tenho uma mãe; a idade é um extra)</li>
<li><i>Our family house, <b>which</b> is near the beach, is for sale.</i></li>
</ul>
<p>Compare: <i>My sister who lives in Canada</i> (tenho mais de uma irmã; estou dizendo qual) × <i>My sister, who lives in Canada,</i> (tenho só uma; morar no Canadá é um detalhe).</p>

<h3>7. Vocabulário de família</h3>
<table><tr><th>Inglês</th><th>Português</th></tr>
<tr><td>parents / relatives</td><td>pais / parentes</td></tr>
<tr><td>siblings</td><td>irmãos (em geral)</td></tr>
<tr><td>in-laws / mother-in-law</td><td>sogros / sogra</td></tr>
<tr><td>stepfather / half-brother</td><td>padrasto / meio-irmão</td></tr>
<tr><td>niece / nephew</td><td>sobrinha / sobrinho</td></tr>
<tr><td>only child</td><td>filho único</td></tr>
<tr><td>be close to</td><td>ser próximo de</td></tr></table>

<h3>8. Erros comuns de brasileiros</h3>
<ul>
<li>❌ <i>The man which I met.</i> ✅ <i>The man who (ou that) I met.</i> Which é só para coisas.</li>
<li>❌ <i>My sister, that lives in Canada, ...</i> ✅ <i>My sister, who lives in Canada, ...</i> Com vírgulas, nunca use that.</li>
<li>❌ <i>The house where I live in.</i> ✅ <i>The house where I live</i> ou <i>The house I live in.</i> Não repita a preposição.</li>
<li>❌ <i>The friend who his father is a chef.</i> ✅ <i>The friend whose father is a chef.</i></li>
</ul>
<p>Uma última dica: <b>parents</b> é falso cognato e significa apenas "pai e mãe". Para "parentes", use <b>relatives</b>.</p>

<h3>Resumo</h3>
<ul>
<li><b>who</b> pessoas, <b>which</b> coisas, <b>that</b> os dois (sem vírgulas).</li>
<li>Pronome objeto pode sumir: <i>the gift my aunt sent</i>.</li>
<li><b>where</b> lugares; <b>whose</b> posse.</li>
<li>Com vírgulas é informação extra; aí só who ou which.</li>
</ul>`,
  say: ["My cousin who lives in Lisbon is coming to visit.", "This is the watch my grandfather gave me.", "That's the house where I grew up.", "I have a friend whose father is a famous chef.", "My mother, who is seventy, still runs every morning.", "I'm really close to my siblings."],
  vocab: [
    { en: 'siblings', pt: 'irmãos (em geral)', ex: "I have three siblings: two brothers and a sister." },
    { en: 'relatives', pt: 'parentes', ex: "All our relatives came for Christmas." },
    { en: 'in-laws', pt: 'sogros, família do cônjuge', ex: "We're having dinner with my in-laws on Sunday." },
    { en: 'niece', pt: 'sobrinha', ex: "My niece just started college." },
    { en: 'nephew', pt: 'sobrinho', ex: "My nephew is obsessed with dinosaurs." },
    { en: 'only child', pt: 'filho único', ex: "As an only child, I always wanted a brother." },
    { en: 'be close to', pt: 'ser próximo de', ex: "I'm very close to my grandmother." },
    { en: 'grow up', pt: 'crescer (ser criado)', ex: "This is the town where I grew up." },
    { en: 'take after', pt: 'puxar (a alguém da família)', ex: "She really takes after her father." },
    { en: 'whose', pt: 'cujo, de quem', ex: "I have a friend whose mother is a famous singer." }
  ],
  pics: [
    { en: 'a baby bottle', pt: 'uma mamadeira', img: 'Baby bottle' },
    { en: 'a birthday cake', pt: 'um bolo de aniversário', img: 'Birthday cake' },
    { en: 'a wedding', pt: 'um casamento', img: 'Wedding' },
    { en: 'a family home', pt: 'uma casa de família', img: 'House with garden' },
    { en: 'a teddy bear', pt: 'um ursinho de pelúcia', img: 'Teddy bear' },
    { en: 'a ring', pt: 'um anel', img: 'Ring' },
    { en: 'a family photo', pt: 'uma foto de família', img: 'Framed picture' },
    { en: 'a hug', pt: 'um abraço', img: 'People hugging' }
  ],
  fill: [
    { s: 'My cousin ___ lives in Lisbon is a doctor.', a: 'who' },
    { s: 'This is the house ___ I grew up.', a: 'where' },
    { s: 'I have a friend ___ father is a famous chef.', a: 'whose' },
    { s: 'I have two ___: a brother and a sister.', a: 'siblings' },
    { s: "We're having lunch with my ___ on Sunday.", a: 'in-laws' },
    { s: 'She really takes ___ her mother.', a: 'after' },
    { s: "I'm very ___ to my grandmother.", a: 'close' }
  ],
  reading: {
    title: 'The changing shape of the family',
    paras: [
      "The image of a 'typical family', two parents and two or three children living under one roof, describes fewer households every year. In many countries, families have become smaller, more varied and more spread out than at any time in history.",
      "People are having children later and having fewer of them. Many couples decide not to have children at all, and the number of only children has grown. At the same time, stepfamilies, single-parent households and grandparents raising their grandchildren have become far more common.",
      "Families are also more geographically scattered. It's normal for siblings to live in different cities or even different countries, and for grandparents to meet their grandchildren mostly on a screen. Video calls have become the new Sunday lunch for millions of people.",
      "Despite all these changes, surveys suggest that family is still one of the things people value most. The shape has changed, but the need to belong, to have people who know your story and are on your side, seems to stay exactly the same."
    ],
    gloss: { 'under one roof': 'sob o mesmo teto', 'spread out': 'espalhadas', 'stepfamilies': 'famílias com padrasto ou madrasta', 'raising': 'criando', 'scattered': 'dispersas', 'on your side': 'do seu lado' },
    qs: [
      { q: 'What is happening to the "typical family"?', opts: ['It is becoming more common', 'It describes fewer households every year', 'It has disappeared completely', 'It is growing in size'], a: 1 },
      { q: 'Which trend is mentioned?', opts: ['People are having more children', 'People are having children later and fewer of them', 'Everyone lives with grandparents', 'Stepfamilies are disappearing'], a: 1 },
      { q: 'What has become "the new Sunday lunch"?', opts: ['Restaurants', 'Video calls', 'Holidays', 'Text messages'], a: 1 },
      { q: 'What has NOT changed, according to the text?', opts: ['The size of families', 'The need to belong', 'Where families live', 'The age of parents'], a: 1 }
    ]
  },
  listening: {
    kind: 'dialogue', place: 'Mostrando fotos de família para uma amiga',
    lines: [
      { s: 'Laura', v: 'en-US-AvaNeural', t: "Look, these are the photos from my brother's wedding." },
      { s: 'Tom', v: 'en-GB-RyanNeural', t: "Oh, lovely! Who's the woman in the blue dress?" },
      { s: 'Laura', v: 'en-US-AvaNeural', t: "That's my aunt Clara, the one who lives in Chile. She flew in especially for the wedding." },
      { s: 'Tom', v: 'en-GB-RyanNeural', t: "And the little boy who's dancing on the table?" },
      { s: 'Laura', v: 'en-US-AvaNeural', t: "My nephew, Leo. He's five, and he takes after my brother completely. Same energy, same terrible dance moves." },
      { s: 'Tom', v: 'en-GB-RyanNeural', t: "Ha! Where was this taken? It's beautiful." },
      { s: 'Laura', v: 'en-US-AvaNeural', t: "At my grandparents' farm. It's the place where we spent every summer when we were kids." },
      { s: 'Tom', v: 'en-GB-RyanNeural', t: "And who's the man next to your mum?" },
      { s: 'Laura', v: 'en-US-AvaNeural', t: "That's Paul, my stepfather. He's the one whose speech made everyone cry. He's been part of the family for twenty years." }
    ],
    qs: [
      { q: 'Whose wedding are the photos from?', opts: ['Laura\'s', 'Her brother\'s', 'Her aunt\'s', 'Tom\'s'], a: 1 },
      { q: 'Where does aunt Clara live?', opts: ['In Spain', 'In Chile', 'In Brazil', 'On the farm'], a: 1 },
      { q: 'Who does Leo take after?', opts: ['His mother', 'Laura\'s brother', 'His grandfather', 'Aunt Clara'], a: 1 },
      { q: 'Who made everyone cry?', opts: ['Laura', 'Her brother', 'Her stepfather Paul', 'Leo'], a: 2 }
    ]
  },
  speaking: {
    shadow: [
      { text: "My cousin who lives in Lisbon is a doctor.", tip: "Sem vírgula: estou dizendo qual primo." },
      { text: "This is the house where I grew up.", tip: "\"grew up\" liga: gruup." },
      { text: "I have a friend whose father is a famous chef.", tip: "\"whose\" = /huuz/." },
      { text: "My mother, who is seventy, still runs every day.", tip: "Com vírgulas: pausa curta antes e depois." },
      { text: "I'm really close to my siblings.", tip: "\"close\" (próximo) = /klous/ com s, não z." }
    ],
    prompt: { q: 'Describe your family: who the people are, where they live, someone you are close to and a place that is important to your family.', hints: ['who', 'where', 'whose', "I'm close to", 'takes after'] }
  }
}
]);
