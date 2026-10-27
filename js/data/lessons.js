// Lições curtas (explicação + exercícios). Temas inspirados nos assuntos do mairovergara.com,
// com explicações e exercícios próprios. 'mairo' é o termo de busca usado no link para o site dele.
// Exercícios: mc = múltipla escolha (a = índice correto) | gap = completar (a = respostas aceitas)
window.LESSONS = [
{
  id: 'l01', lv: 'b1', tag: 'Gramática', title: 'Present Perfect vs Simple Past', mairo: 'present perfect',
  body: `
<p>A dúvida número 1 do brasileiro. A regra prática: <b>tempo terminado e específico → Simple Past</b>. <b>Tempo não dito, ou que ainda não acabou → Present Perfect</b>.</p>
<table><tr><th>Simple Past</th><th>Present Perfect</th></tr>
<tr><td>I <em>saw</em> that movie <b>last week</b>.</td><td>I <em>have seen</em> that movie. (quando? não importa)</td></tr>
<tr><td>She <em>lived</em> in Rome <b>in 2015</b>.</td><td>She <em>has lived</em> in Rome <b>for</b> ten years. (ainda mora)</td></tr>
<tr><td>Did you call him <b>yesterday</b>?</td><td><em>Have</em> you called him <b>yet</b>?</td></tr></table>
<p>Palavras que "puxam" o Present Perfect: <em>ever, never, already, yet, just, so far, recently, since, for</em> (com período que continua).</p>
<p>Palavras que "puxam" o Simple Past: <em>yesterday, ago, last…, in 2019, when I was…</em></p>
<div class="ex">❌ I have finished it yesterday. → ✅ I <b>finished</b> it yesterday.</div>`,
  ex: [
    { type: 'mc', q: 'I ___ to Japan twice, but I want to go again.', opts: ['went', 'have been', 'was going', 'had gone'], a: 1, why: 'Experiência de vida sem tempo definido → Present Perfect.' },
    { type: 'mc', q: 'We ___ the contract three days ago.', opts: ['have signed', 'signed', 'have been signing', 'sign'], a: 1, why: '"ago" marca um ponto terminado no passado → Simple Past.' },
    { type: 'gap', q: 'She has worked here ___ 2018.', a: ['since'], why: '"since" + ponto de início; "for" + duração.' },
    { type: 'gap', q: 'I have known him ___ ten years.', a: ['for'], why: '"for" + duração (ten years).' },
    { type: 'mc', q: '"___ you ever eaten sushi?" "Yes, I ___ it last month in São Paulo."', opts: ['Did / have tried', 'Have / tried', 'Have / have tried', 'Did / tried'], a: 1, why: 'A pergunta é sobre experiência (Present Perfect); a resposta dá um tempo específico (Simple Past).' },
    { type: 'gap', q: "I haven't finished the report ___. (ainda)", a: ['yet'], why: '"yet" vai no fim de negativas e perguntas.' },
    { type: 'mc', q: 'Which sentence is correct?', opts: ['I have lost my keys yesterday.', 'I lost my keys. Can you help me find them?', 'I have lost my keys. Can you help me find them?', 'I was losing my keys yesterday.'], a: 2, why: 'O resultado afeta o presente (as chaves continuam perdidas) e não há tempo dito.' },
    { type: 'gap', q: 'This is the best coffee I have ___ had. (já, alguma vez)', a: ['ever'], why: 'Superlativo + Present Perfect + "ever".' }
  ]
},
{
  id: 'l02', lv: 'b2', tag: 'Phrasal verbs', title: 'Phrasal verbs com GET', mairo: 'phrasal verbs get',
  body: `
<p>O verbo <b>get</b> é o rei dos phrasal verbs. Aprenda os mais usados no dia a dia:</p>
<table><tr><th>Phrasal verb</th><th>Significado</th><th>Exemplo</th></tr>
<tr><td><em>get up</em></td><td>levantar (da cama)</td><td>I get up at 6.</td></tr>
<tr><td><em>get over</em></td><td>superar</td><td>She got over the flu quickly.</td></tr>
<tr><td><em>get along (with)</em></td><td>se dar bem</td><td>Do you get along with your boss?</td></tr>
<tr><td><em>get by</em></td><td>se virar (com pouco)</td><td>I get by with basic French.</td></tr>
<tr><td><em>get back</em></td><td>voltar; receber de volta</td><td>When did you get back from Lisbon?</td></tr>
<tr><td><em>get rid of</em></td><td>se livrar de</td><td>I need to get rid of these old clothes.</td></tr>
<tr><td><em>get away with</em></td><td>sair impune</td><td>He lied and got away with it.</td></tr>
<tr><td><em>get into</em></td><td>entrar; começar a gostar</td><td>I got into jazz last year.</td></tr>
<tr><td><em>get on</em></td><td>entrar (ônibus, trem, avião)</td><td>Get on the bus!</td></tr></table>
<div class="ex">Dica: <b>get in/out</b> é para carro e táxi; <b>get on/off</b> é para ônibus, trem, avião, bicicleta.</div>`,
  ex: [
    { type: 'mc', q: 'It took me weeks to ___ that cold.', opts: ['get over', 'get by', 'get on', 'get into'], a: 0, why: 'get over = se recuperar.' },
    { type: 'mc', q: 'My English is not perfect, but I can ___ when I travel.', opts: ['get rid of', 'get by', 'get back', 'get away'], a: 1, why: 'get by = se virar com o que tem.' },
    { type: 'gap', q: 'I really need to get ___ of all this junk in the garage.', a: ['rid'], why: 'get rid of = se livrar de.' },
    { type: 'mc', q: 'Quick, ___ the train! The doors are closing.', opts: ['get in', 'get on', 'get into', 'get up'], a: 1, why: 'Trem → get on.' },
    { type: 'gap', q: 'I get ___ well with my sister — we never fight.', a: ['along', 'on'], why: 'get along (with) / get on (with) = se dar bem.' },
    { type: 'mc', q: 'He broke the rules and ___ it. Nobody noticed.', opts: ['got over', 'got away with', 'got along with', 'got back'], a: 1, why: 'get away with = sair impune.' },
    { type: 'gap', q: 'What time did you get ___ home last night?', a: ['back'], why: 'get back home = voltar para casa.' },
    { type: 'mc', q: 'I ___ yoga during the pandemic and now I love it.', opts: ['got into', 'got on', 'got by', 'got over'], a: 0, why: 'get into = começar a curtir algo.' }
  ]
},
{
  id: 'l03', lv: 'b2', tag: 'Gramática', title: 'Used to × Be used to × Get used to', mairo: 'used to',
  body: `
<p>Três estruturas parecidas com sentidos bem diferentes:</p>
<table><tr><th>Estrutura</th><th>Sentido</th><th>Exemplo</th></tr>
<tr><td><em>used to + verbo</em></td><td>hábito no passado que não existe mais</td><td>I <b>used to smoke</b>. (eu fumava)</td></tr>
<tr><td><em>be used to + -ing/substantivo</em></td><td>estar acostumado</td><td>I'<b>m used to waking</b> up early.</td></tr>
<tr><td><em>get used to + -ing/substantivo</em></td><td>se acostumar (processo)</td><td>I'm <b>getting used to</b> the cold.</td></tr></table>
<p>O erro clássico é usar o infinitivo depois de <b>be/get used to</b>: aqui o <em>to</em> é preposição, então vem <b>-ing</b>.</p>
<div class="ex">❌ I'm used to work at night. → ✅ I'm used to <b>working</b> at night.</div>
<p>Na negativa/pergunta de <em>used to</em>: <b>didn't use to</b> / <b>Did you use to…?</b> (sem o "d").</p>`,
  ex: [
    { type: 'mc', q: 'When I was a kid, I ___ play video games all day.', opts: ['was used to', 'used to', 'got used to', 'am used to'], a: 1, why: 'Hábito passado que acabou → used to + verbo.' },
    { type: 'mc', q: "Don't worry about the noise. You'll ___ it.", opts: ['used to', 'get used to', 'use to', 'be use to'], a: 1, why: 'Processo de se acostumar no futuro → get used to.' },
    { type: 'gap', q: "I'm not used to ___ (drive) on the left.", a: ['driving'], why: 'be used to + -ing.' },
    { type: 'gap', q: 'Did you ___ to live in Rio?', a: ['use'], why: 'Na pergunta com "did", o verbo fica na base: use to.' },
    { type: 'mc', q: 'She ___ working night shifts, so she sleeps during the day.', opts: ['used to', 'is used to', 'uses to', 'gets use to'], a: 1, why: 'Está acostumada (estado atual) → is used to + -ing.' },
    { type: 'gap', q: "We didn't ___ to have a car, but now we have two.", a: ['use'], why: "didn't use to (sem d)." },
    { type: 'mc', q: 'It took me months to get used to ___ in a big city.', opts: ['live', 'living', 'lived', 'to live'], a: 1, why: 'get used to + -ing.' },
    { type: 'mc', q: 'Which means "eu era magro"?', opts: ['I am used to being thin.', 'I used to be thin.', 'I got used to be thin.', 'I use to be thin.'], a: 1, why: 'Estado passado que mudou → used to be.' }
  ]
},
{
  id: 'l04', lv: 'b1', tag: 'Vocabulário', title: 'Make × Do', mairo: 'make do diferença',
  body: `
<p>Os dois significam "fazer". Uma regra que funciona na maioria dos casos:</p>
<ul><li><b>MAKE</b>: criar, produzir, construir algo que não existia: <em>make a cake, make a plan, make noise, make a mistake</em>.</li>
<li><b>DO</b>: atividades, tarefas, trabalho, coisas genéricas: <em>do homework, do the dishes, do business, do something</em>.</li></ul>
<table><tr><th>MAKE</th><th>DO</th></tr>
<tr><td>make a decision</td><td>do your best</td></tr>
<tr><td>make money</td><td>do a favor</td></tr>
<tr><td>make an effort</td><td>do research</td></tr>
<tr><td>make friends</td><td>do the laundry</td></tr>
<tr><td>make a complaint</td><td>do damage</td></tr>
<tr><td>make sense</td><td>do exercise</td></tr></table>
<div class="ex">Memorize em blocos (collocations), não como regra: <b>make a mistake</b>, nunca "do a mistake".</div>`,
  ex: [
    { type: 'mc', q: "Could you ___ me a favor?", opts: ['make', 'do'], a: 1, why: 'do a favor.' },
    { type: 'mc', q: "Sorry, I ___ a mistake in your order.", opts: ['made', 'did'], a: 0, why: 'make a mistake.' },
    { type: 'mc', q: "Who's going to ___ the dishes tonight?", opts: ['make', 'do'], a: 1, why: 'Tarefas domésticas → do.' },
    { type: 'gap', q: "That doesn't ___ any sense!", a: ['make'], why: 'make sense.' },
    { type: 'gap', q: "I need to ___ some research before I buy a laptop.", a: ['do'], why: 'do research.' },
    { type: 'mc', q: 'He ___ a lot of money selling cars.', opts: ['makes', 'does'], a: 0, why: 'make money.' },
    { type: 'mc', q: 'The storm ___ a lot of damage to the houses.', opts: ['made', 'did'], a: 1, why: 'do damage.' },
    { type: 'gap', q: "It's hard to ___ friends when you move to a new city.", a: ['make'], why: 'make friends.' }
  ]
},
{
  id: 'l05', lv: 'b2', tag: 'Gramática', title: 'Condicionais: 1ª, 2ª e 3ª', mairo: 'conditional',
  body: `
<table><tr><th>Tipo</th><th>Estrutura</th><th>Uso</th></tr>
<tr><td><b>1st</b></td><td>If + present, <em>will</em> + verbo</td><td>possível/real: <i>If it rains, I'll stay home.</i></td></tr>
<tr><td><b>2nd</b></td><td>If + past, <em>would</em> + verbo</td><td>imaginário no presente: <i>If I had money, I'd travel.</i></td></tr>
<tr><td><b>3rd</b></td><td>If + past perfect, <em>would have</em> + particípio</td><td>passado que não aconteceu: <i>If I had studied, I would have passed.</i></td></tr></table>
<p>Na 2ª condicional, o formal é <b>If I were</b> (para todas as pessoas): <em>If I were you, I'd accept.</em></p>
<p><b>Mixed conditional</b> (C1): passado → consequência no presente: <em>If I had taken that job, I would be rich now.</em></p>
<div class="ex">❌ If I will see him, I'll tell him. → ✅ If I <b>see</b> him, I'll tell him. (nunca "will" depois de "if")</div>`,
  ex: [
    { type: 'mc', q: "If you heat ice, it ___.", opts: ['melts', 'would melt', 'will have melted', 'melted'], a: 0, why: 'Verdade geral → zero conditional (present + present).' },
    { type: 'gap', q: "If I ___ (be) you, I would talk to her.", a: ['were', 'was'], why: 'If I were you (was é aceito no informal).' },
    { type: 'mc', q: "If we leave now, we ___ the train.", opts: ['catch', 'will catch', 'would catch', 'would have caught'], a: 1, why: 'Situação real/possível → will.' },
    { type: 'mc', q: "If she had told me earlier, I ___ helped her.", opts: ['would', 'will have', 'would have', 'had'], a: 2, why: '3rd conditional → would have + particípio.' },
    { type: 'gap', q: "If I had more free time, I ___ learn to play the guitar.", a: ['would', "'d"], why: '2nd conditional → would.' },
    { type: 'mc', q: "If I had gone to bed earlier, I ___ so tired now.", opts: ["wouldn't have been", "wouldn't be", "won't be", "didn't be"], a: 1, why: 'Mixed: passado (had gone) → presente (now) → would be.' },
    { type: 'gap', q: "If it ___ (rain) tomorrow, we'll cancel the picnic.", a: ['rains'], why: '1st conditional: if + present simple.' },
    { type: 'mc', q: '"Se eu tivesse sabido, não teria vindo."', opts: ["If I knew, I wouldn't come.", "If I had known, I wouldn't have come.", "If I have known, I won't come.", "If I would know, I didn't come."], a: 1, why: '3rd conditional.' }
  ]
},
{
  id: 'l06', lv: 'b2', tag: 'Vocabulário', title: 'Falsos cognatos que enganam', mairo: 'falsos cognatos',
  body: `
<p>Palavras que parecem português mas significam outra coisa. Errar estas muda totalmente o sentido.</p>
<table><tr><th>Inglês</th><th>Significa</th><th>Não é</th></tr>
<tr><td><em>actually</em></td><td>na verdade</td><td>atualmente (= currently, nowadays)</td></tr>
<tr><td><em>pretend</em></td><td>fingir</td><td>pretender (= intend)</td></tr>
<tr><td><em>push</em></td><td>empurrar</td><td>puxar (= pull)</td></tr>
<tr><td><em>eventually</em></td><td>finalmente, por fim</td><td>eventualmente (= occasionally)</td></tr>
<tr><td><em>library</em></td><td>biblioteca</td><td>livraria (= bookstore)</td></tr>
<tr><td><em>parents</em></td><td>pais</td><td>parentes (= relatives)</td></tr>
<tr><td><em>sensible</em></td><td>sensato</td><td>sensível (= sensitive)</td></tr>
<tr><td><em>attend</em></td><td>comparecer</td><td>atender (= answer, serve)</td></tr>
<tr><td><em>college</em></td><td>faculdade</td><td>colégio (= high school)</td></tr>
<tr><td><em>lunch</em></td><td>almoço</td><td>lanche (= snack)</td></tr></table>`,
  ex: [
    { type: 'mc', q: '"Eu pretendo viajar em julho."', opts: ['I pretend to travel in July.', 'I intend to travel in July.'], a: 1, why: 'pretender = intend. Pretend = fingir.' },
    { type: 'mc', q: '"Atualmente eu moro em Recife."', opts: ['Actually, I live in Recife.', 'Currently, I live in Recife.'], a: 1, why: 'atualmente = currently/nowadays.' },
    { type: 'gap', q: 'I bought this book at a ___ downtown. (livraria)', a: ['bookstore', 'bookshop'], why: 'livraria = bookstore (library = biblioteca).' },
    { type: 'mc', q: 'All my ___ came to the wedding: uncles, aunts, cousins...', opts: ['parents', 'relatives'], a: 1, why: 'parentes = relatives.' },
    { type: 'mc', q: "She's very ___ — she cries at every movie.", opts: ['sensible', 'sensitive'], a: 1, why: 'sensível = sensitive.' },
    { type: 'gap', q: 'Could you ___ the phone? I\'m driving. (atender)', a: ['answer', 'get', 'pick up'], why: 'atender o telefone = answer the phone.' },
    { type: 'mc', q: 'We waited for hours, but ___ the doctor saw us.', opts: ['eventually', 'occasionally'], a: 0, why: 'eventually = por fim.' },
    { type: 'gap', q: '___ the door to open it — don\'t pull. (empurre)', a: ['push'], why: 'push = empurrar.' }
  ]
},
{
  id: 'l07', lv: 'b2', tag: 'Gramática', title: 'Voz passiva e "have something done"', mairo: 'voz passiva',
  body: `
<p><b>Voz passiva</b> = <em>be</em> (no tempo certo) + particípio. Use quando quem faz a ação não importa ou é óbvio.</p>
<table><tr><th>Tempo</th><th>Ativa</th><th>Passiva</th></tr>
<tr><td>Present</td><td>They clean the office.</td><td>The office <em>is cleaned</em>.</td></tr>
<tr><td>Past</td><td>They built it in 1920.</td><td>It <em>was built</em> in 1920.</td></tr>
<tr><td>Present perfect</td><td>Someone has stolen my bike.</td><td>My bike <em>has been stolen</em>.</td></tr>
<tr><td>Future</td><td>They will announce it.</td><td>It <em>will be announced</em>.</td></tr>
<tr><td>Continuous</td><td>They are painting the house.</td><td>The house <em>is being painted</em>.</td></tr></table>
<p><b>Causative (have/get something done)</b>: quando você paga alguém para fazer algo por você.</p>
<div class="ex">I cut my hair. (eu mesmo cortei) × I <b>had my hair cut</b>. (cortei no cabeleireiro)</div>`,
  ex: [
    { type: 'mc', q: 'This bridge ___ in 1890.', opts: ['built', 'was built', 'has built', 'is building'], a: 1, why: 'Passiva no passado: was + particípio.' },
    { type: 'gap', q: 'My phone has been ___ (steal)!', a: ['stolen'], why: 'Particípio de steal = stolen.' },
    { type: 'mc', q: "I'm going to ___ next week. (vou mandar consertar o carro)", opts: ['repair my car', 'have my car repaired', 'have repaired my car', 'be repaired my car'], a: 1, why: 'have + objeto + particípio.' },
    { type: 'gap', q: 'The results will ___ announced tomorrow.', a: ['be'], why: 'Futuro passivo: will be + particípio.' },
    { type: 'mc', q: "Sorry for the mess, the kitchen ___ right now.", opts: ['is painting', 'is being painted', 'has painted', 'paints'], a: 1, why: 'Ação em andamento na passiva: is being + particípio.' },
    { type: 'gap', q: 'English is ___ (speak) all over the world.', a: ['spoken'], why: 'Particípio de speak = spoken.' },
    { type: 'mc', q: 'Where do you usually get your hair ___?', opts: ['cut', 'cutting', 'to cut', 'cuts'], a: 0, why: 'get something done: cut é o particípio.' },
    { type: 'gap', q: 'Thousands of emails ___ sent every second. (present)', a: ['are'], why: 'Present simple passive: are + particípio.' }
  ]
},
{
  id: 'l08', lv: 'c1', tag: 'Gramática', title: 'Wish e If only', mairo: 'wish',
  body: `
<p><b>Wish/If only</b> expressam arrependimento ou desejo sobre algo que <b>não é</b> como você queria. O verbo "volta" um tempo:</p>
<table><tr><th>Sobre</th><th>Estrutura</th><th>Exemplo</th></tr>
<tr><td>presente</td><td>wish + past simple</td><td>I wish I <em>had</em> more time. (não tenho)</td></tr>
<tr><td>passado</td><td>wish + past perfect</td><td>I wish I <em>had studied</em> harder. (não estudei)</td></tr>
<tr><td>irritação/mudança</td><td>wish + would</td><td>I wish you <em>would stop</em> interrupting me.</td></tr>
<tr><td>habilidade</td><td>wish + could</td><td>I wish I <em>could</em> speak Italian.</td></tr></table>
<p><em>If only</em> é igual, só que mais enfático: <i>If only I had listened to you!</i></p>
<div class="ex">❌ I wish I have a car. → ✅ I wish I <b>had</b> a car.</div>`,
  ex: [
    { type: 'mc', q: "I wish I ___ taller.", opts: ['am', 'were', 'will be', 'have been'], a: 1, why: 'Desejo sobre o presente → past (were).' },
    { type: 'gap', q: "I wish I ___ (not / eat) so much last night.", a: ["hadn't eaten", 'had not eaten'], why: 'Arrependimento do passado → past perfect.' },
    { type: 'mc', q: "I wish my neighbors ___ so much noise.", opts: ["don't make", "wouldn't make", "didn't made", "won't make"], a: 1, why: 'Irritação com o comportamento dos outros → wouldn\'t.' },
    { type: 'gap', q: 'I wish I ___ play the piano. (habilidade)', a: ['could'], why: 'Habilidade → could.' },
    { type: 'mc', q: 'If only I ___ your advice!', opts: ['take', 'had taken', 'would take', 'have taken'], a: 1, why: 'Arrependimento do passado → past perfect.' },
    { type: 'mc', q: '"Queria que você estivesse aqui."', opts: ['I wish you are here.', 'I wish you were here.', 'I wish you would be here yesterday.', 'I want you were here.'], a: 1, why: 'wish + past.' },
    { type: 'gap', q: "She wishes she ___ (live) closer to her family. (presente)", a: ['lived'], why: 'Presente → past simple.' },
    { type: 'mc', q: 'Which sentence expresses regret about the past?', opts: ['I wish I knew the answer.', 'I wish I had known the answer.', 'I wish I could know the answer.', 'I wish I would know the answer.'], a: 1, why: 'Past perfect = passado.' }
  ]
},
{
  id: 'l09', lv: 'b2', tag: 'Writing', title: 'Conectores: although, however, despite…', mairo: 'conectivos',
  body: `
<p>Conectores dão fluidez ao texto e à fala. O segredo é saber <b>o que vem depois</b> de cada um.</p>
<table><tr><th>Conector</th><th>Depois vem</th><th>Exemplo</th></tr>
<tr><td><em>although / even though</em></td><td>frase completa</td><td>Although it was late, we kept working.</td></tr>
<tr><td><em>despite / in spite of</em></td><td>substantivo ou -ing</td><td>Despite the rain, we went out. / Despite being tired…</td></tr>
<tr><td><em>however / nevertheless</em></td><td>nova frase (com vírgula)</td><td>It's expensive. However, it's worth it.</td></tr>
<tr><td><em>whereas / while</em></td><td>contraste entre duas coisas</td><td>I love cities, whereas my wife prefers the countryside.</td></tr>
<tr><td><em>therefore / as a result</em></td><td>consequência</td><td>He was sick. Therefore, he stayed home.</td></tr>
<tr><td><em>moreover / furthermore</em></td><td>adicionar (formal)</td><td>The plan is cheap. Moreover, it's fast.</td></tr></table>
<div class="ex">❌ Despite it was raining… → ✅ <b>Although</b> it was raining… / <b>Despite the fact that</b> it was raining…</div>`,
  ex: [
    { type: 'mc', q: '___ the traffic, we arrived on time.', opts: ['Although', 'Despite', 'However', 'Whereas'], a: 1, why: 'Despite + substantivo.' },
    { type: 'mc', q: '___ he studied a lot, he failed the test.', opts: ['Despite', 'In spite of', 'Although', 'However'], a: 2, why: 'Although + frase completa.' },
    { type: 'gap', q: "The hotel was great. ___, the food was terrible. (no entanto)", a: ['However', 'Nevertheless', 'Nonetheless'], why: 'However + vírgula, começando nova frase.' },
    { type: 'mc', q: 'My brother is very outgoing, ___ I am quite shy.', opts: ['whereas', 'despite', 'therefore', 'moreover'], a: 0, why: 'Contraste entre duas pessoas → whereas.' },
    { type: 'gap', q: 'In spite ___ feeling sick, she went to work.', a: ['of'], why: 'in spite of + -ing.' },
    { type: 'mc', q: "The flight was cancelled. ___, we had to stay another night.", opts: ['Although', 'As a result', 'Whereas', 'Despite'], a: 1, why: 'Consequência → As a result / Therefore.' },
    { type: 'mc', q: 'Choose the correct sentence.', opts: ['Despite of the cold, we swam.', 'Despite the cold, we swam.', 'Although the cold, we swam.', 'However the cold, we swam.'], a: 1, why: 'Despite (sem "of") + substantivo.' },
    { type: 'gap', q: "___ though I was tired, I finished the book.", a: ['Even'], why: 'Even though + frase.' }
  ]
},
{
  id: 'l10', lv: 'b2', tag: 'Gramática', title: 'Reported speech (discurso indireto)', mairo: 'reported speech',
  body: `
<p>Para contar o que alguém disse, normalmente "voltamos" um tempo verbal:</p>
<table><tr><th>Fala direta</th><th>Discurso indireto</th></tr>
<tr><td>"I <em>am</em> tired."</td><td>She said (that) she <em>was</em> tired.</td></tr>
<tr><td>"I <em>will</em> call you."</td><td>He said he <em>would</em> call me.</td></tr>
<tr><td>"I <em>have finished</em>."</td><td>She said she <em>had finished</em>.</td></tr>
<tr><td>"I <em>can</em> help."</td><td>He said he <em>could</em> help.</td></tr>
<tr><td>"Where <em>do you live</em>?"</td><td>She asked me where <em>I lived</em>. (sem inversão!)</td></tr></table>
<p><b>Say × Tell</b>: <em>say something</em> / <em>tell someone something</em>. → She <b>told me</b> she was tired. / She <b>said</b> she was tired.</p>
<div class="ex">❌ He asked me where was the station. → ✅ He asked me where the station <b>was</b>.</div>`,
  ex: [
    { type: 'mc', q: '"I\'m hungry," he said. → He said he ___ hungry.', opts: ['is', 'was', 'has been', 'will be'], a: 1, why: 'am → was.' },
    { type: 'gap', q: '"I will help you." → She said she ___ help me.', a: ['would'], why: 'will → would.' },
    { type: 'mc', q: 'She ___ me that she was moving to Canada.', opts: ['said', 'told', 'spoke', 'talked'], a: 1, why: 'tell + pessoa.' },
    { type: 'mc', q: '"Where do you work?" → He asked me where ___.', opts: ['do I work', 'I worked', 'did I work', 'I do work'], a: 1, why: 'Pergunta indireta: ordem normal, sem auxiliar.' },
    { type: 'gap', q: '"I can\'t swim." → He said he ___ swim.', a: ["couldn't", 'could not'], why: "can't → couldn't." },
    { type: 'mc', q: '"I have lost my wallet." → She said she ___ her wallet.', opts: ['has lost', 'had lost', 'lost', 'was losing'], a: 1, why: 'have lost → had lost.' },
    { type: 'gap', q: 'He ___ that he would be late. (disse)', a: ['said'], why: 'say + that.' },
    { type: 'mc', q: '"Are you coming?" → She asked ___ I was coming.', opts: ['that', 'if', 'what', 'do'], a: 1, why: 'Pergunta de sim/não → if/whether.' }
  ]
},
{
  id: 'l11', lv: 'b1', tag: 'Gramática', title: 'Preposições de tempo: in, on, at', mairo: 'in on at',
  body: `
<p>Pense numa pirâmide: do mais geral para o mais específico.</p>
<table><tr><th>Preposição</th><th>Usa com</th><th>Exemplos</th></tr>
<tr><td><em>IN</em></td><td>meses, anos, estações, séculos, partes do dia</td><td>in May, in 2010, in summer, in the morning</td></tr>
<tr><td><em>ON</em></td><td>dias e datas</td><td>on Monday, on July 4th, on my birthday, on the weekend (US)</td></tr>
<tr><td><em>AT</em></td><td>horas e momentos exatos</td><td>at 7 p.m., at noon, at night, at the moment, at Christmas</td></tr></table>
<div class="ex">Exceções úteis: <b>at night</b> (mas in the morning), <b>on Monday morning</b> (dia específico vence), sem preposição com <b>this/next/last/every</b>: <i>I'll see you next Friday.</i></div>`,
  ex: [
    { type: 'gap', q: 'The meeting is ___ 3 p.m.', a: ['at'], why: 'Hora → at.' },
    { type: 'gap', q: 'I was born ___ 1995.', a: ['in'], why: 'Ano → in.' },
    { type: 'gap', q: "Let's meet ___ Friday.", a: ['on'], why: 'Dia da semana → on.' },
    { type: 'mc', q: "I can't sleep ___ night.", opts: ['in', 'on', 'at'], a: 2, why: 'at night (exceção).' },
    { type: 'mc', q: "See you ___ Monday morning!", opts: ['in', 'on', 'at'], a: 1, why: 'Dia específico → on.' },
    { type: 'mc', q: "I'll call you ___ next week.", opts: ['in', 'on', 'at', '(nada)'], a: 3, why: 'Sem preposição antes de next/last/this/every.' },
    { type: 'gap', q: 'We usually travel ___ December.', a: ['in'], why: 'Mês → in.' },
    { type: 'gap', q: 'What did you do ___ your birthday?', a: ['on'], why: 'Data específica → on.' }
  ]
},
{
  id: 'l12', lv: 'c1', tag: 'Speaking', title: 'Como soar natural: fillers e respostas', mairo: 'expressões conversação',
  body: `
<p>Nativos não respondem só "yes" ou "no". Eles usam pequenas expressões que dão tempo para pensar e deixam a fala natural.</p>
<table><tr><th>Função</th><th>Expressões</th></tr>
<tr><td>Ganhar tempo</td><td><em>Let me think… / Well… / That's a good question. / How can I put it…</em></td></tr>
<tr><td>Dar opinião</td><td><em>If you ask me… / The way I see it… / I'd say…</em></td></tr>
<tr><td>Concordar</td><td><em>Exactly. / Tell me about it! / I couldn't agree more.</em></td></tr>
<tr><td>Discordar com educação</td><td><em>I see your point, but… / I'm not so sure about that. / Not necessarily.</em></td></tr>
<tr><td>Pedir para repetir</td><td><em>Sorry, I didn't catch that. / Could you say that again?</em></td></tr>
<tr><td>Mudar de assunto</td><td><em>By the way… / Speaking of which… / Anyway…</em></td></tr></table>
<div class="ex"><b>"Tell me about it!"</b> não é um pedido. Significa "nem me fale!", para concordar com uma reclamação.</div>`,
  ex: [
    { type: 'mc', q: '"This traffic is a nightmare." — "___"', opts: ['Tell me about it!', 'Tell me it.', 'Say me about it!', 'Speak about it!'], a: 0, why: '"Tell me about it!" = nem me fale.' },
    { type: 'mc', q: 'You didn\'t hear what someone said. You say:', opts: ["Sorry, I didn't catch that.", 'Repeat.', "What you said?", 'I no understand.'], a: 0, why: 'Forma natural e educada.' },
    { type: 'mc', q: 'Best way to disagree politely:', opts: ["You're wrong.", 'I see your point, but I think…', 'No way, that\'s stupid.', 'I disagree you.'], a: 1, why: 'Reconhece o ponto antes de discordar.' },
    { type: 'gap', q: 'I couldn\'t agree ___. (concordo totalmente)', a: ['more'], why: "I couldn't agree more." },
    { type: 'mc', q: 'Which phrase gives you time to think?', opts: ['By the way…', "That's a good question…", 'Tell me about it.', 'Exactly.'], a: 1, why: 'Ganha tempo para formular a resposta.' },
    { type: 'gap', q: '___ the way, did you see the game last night? (aliás)', a: ['By'], why: 'By the way = aliás, a propósito.' },
    { type: 'mc', q: '"Speaking of which…" is used to:', opts: ['end a conversation', 'connect to a related topic', 'ask someone to repeat', 'disagree'], a: 1, why: 'Liga a um assunto relacionado.' },
    { type: 'gap', q: 'The ___ I see it, we should wait. (do jeito que eu vejo)', a: ['way'], why: 'The way I see it…' }
  ]
},
{
  id: 'l13', lv: 'c1', tag: 'Gramática', title: 'Inversão para ênfase (Never have I…)', mairo: 'inversão',
  body: `
<p>No inglês formal/avançado, algumas expressões negativas no começo da frase exigem <b>inversão</b> (auxiliar antes do sujeito), igual a uma pergunta.</p>
<table><tr><th>Normal</th><th>Com inversão</th></tr>
<tr><td>I have never seen such a mess.</td><td><em>Never have I</em> seen such a mess.</td></tr>
<tr><td>I had no sooner arrived than it started raining.</td><td><em>No sooner had I</em> arrived than it started raining.</td></tr>
<tr><td>You should not open this door under any circumstances.</td><td><em>Under no circumstances should you</em> open this door.</td></tr>
<tr><td>She not only sings, but she also dances.</td><td><em>Not only does she</em> sing, but she also dances.</td></tr>
<tr><td>I realized it only later.</td><td><em>Only later did I</em> realize it.</td></tr></table>
<p>Use em textos, apresentações e redações (IELTS/TOEFL). No dia a dia soa dramático, o que às vezes é exatamente a intenção.</p>`,
  ex: [
    { type: 'mc', q: 'Never ___ such a beautiful place.', opts: ['I have seen', 'have I seen', 'I saw', 'seen I have'], a: 1, why: 'Never + auxiliar + sujeito.' },
    { type: 'gap', q: 'Not only ___ he late, but he also forgot the documents. (was)', a: ['was'], why: 'Not only + was + he.' },
    { type: 'mc', q: 'Under no circumstances ___ the building during the test.', opts: ['you should leave', 'should you leave', 'you leave', 'leave you'], a: 1, why: 'Inversão com modal.' },
    { type: 'gap', q: 'No sooner ___ I sat down than the phone rang.', a: ['had'], why: 'No sooner had + sujeito + particípio.' },
    { type: 'mc', q: 'Only then ___ how serious the problem was.', opts: ['I understood', 'did I understand', 'I did understand', 'understood I'], a: 1, why: 'Only then + did + sujeito + verbo base.' },
    { type: 'gap', q: 'Rarely ___ she complain about anything. (present)', a: ['does'], why: 'Rarely + does + she.' },
    { type: 'mc', q: 'Not until I got home ___ I had lost my wallet.', opts: ['I realized', 'did I realize', 'I did realize', 'realized'], a: 1, why: 'Not until… + inversão na oração principal.' },
    { type: 'gap', q: 'Little ___ they know what was about to happen. (did)', a: ['did'], why: 'Little did they know… (expressão fixa).' }
  ]
},
{
  id: 'l14', lv: 'b2', tag: 'Phrasal verbs', title: 'Phrasal verbs com TAKE e PUT', mairo: 'phrasal verbs take',
  body: `
<table><tr><th>Phrasal verb</th><th>Significado</th><th>Exemplo</th></tr>
<tr><td><em>take off</em></td><td>decolar; tirar (roupa); fazer sucesso</td><td>The plane took off late. / Her career took off.</td></tr>
<tr><td><em>take up</em></td><td>começar (hobby); ocupar (espaço/tempo)</td><td>I took up running. / This sofa takes up too much space.</td></tr>
<tr><td><em>take after</em></td><td>puxar (a alguém da família)</td><td>She takes after her mother.</td></tr>
<tr><td><em>take back</em></td><td>devolver; retirar o que disse</td><td>I take it back — I was wrong.</td></tr>
<tr><td><em>put off</em></td><td>adiar</td><td>Don't put off until tomorrow…</td></tr>
<tr><td><em>put on</em></td><td>vestir; ganhar (peso)</td><td>Put on a jacket. / I put on 3 kilos.</td></tr>
<tr><td><em>put out</em></td><td>apagar (fogo, cigarro)</td><td>The firefighters put out the fire.</td></tr>
<tr><td><em>put up with</em></td><td>aguentar, tolerar</td><td>How do you put up with him?</td></tr></table>`,
  ex: [
    { type: 'mc', q: 'He really ___ his father — same nose, same laugh.', opts: ['takes after', 'takes up', 'takes off', 'puts up with'], a: 0, why: 'take after = puxar a alguém.' },
    { type: 'gap', q: 'Our flight took ___ two hours late.', a: ['off'], why: 'take off = decolar.' },
    { type: 'mc', q: "I've ___ a new hobby: pottery.", opts: ['taken up', 'taken after', 'put off', 'put on'], a: 0, why: 'take up = começar um hobby.' },
    { type: 'gap', q: "We had to put ___ the meeting until next week.", a: ['off'], why: 'put off = adiar.' },
    { type: 'mc', q: "It's cold outside. ___ your coat.", opts: ['Put on', 'Put out', 'Take after', 'Take up'], a: 0, why: 'put on = vestir.' },
    { type: 'gap', q: "I can't put up ___ his attitude anymore.", a: ['with'], why: 'put up with = tolerar.' },
    { type: 'mc', q: 'Please ___ your cigarette. This is a non-smoking area.', opts: ['put on', 'put out', 'take off', 'put off'], a: 1, why: 'put out = apagar.' },
    { type: 'gap', q: "I'm sorry, I take it ___. You were right.", a: ['back'], why: 'take back = retirar o que disse.' }
  ]
}
];

// Exemplos falados de cada lição (gravados com voz neural; tocam na página da lição)
(() => {
  const SAY = {
    l01: ["I've been to Lisbon twice, but I've never been to Porto.", "We moved here in 2019, and we've lived in this apartment ever since.", "Have you finished the report yet? No, I haven't even started.", "I lost my keys yesterday, but luckily I found them this morning."],
    l02: ["It took me a few weeks to get over the jet lag.", "I don't earn much, but I get by.", "I really need to get rid of all these old cables.", "Do you get along with your new neighbors?"],
    l03: ["When I was a teenager, I used to play guitar every day.", "I'm used to working from home now, so the office feels strange.", "It took me a while to get used to driving on the left.", "Did you use to live near the beach?"],
    l04: ["Could you do me a favor and pick up some bread?", "Don't worry, everyone makes mistakes at the beginning.", "I need to make a decision by Friday.", "Who's going to do the dishes tonight?"],
    l05: ["If it rains tomorrow, we'll stay in and watch a movie.", "If I had more free time, I'd learn to play the piano.", "If you'd told me earlier, I would have helped you.", "If I'd taken that job, I'd be living in Canada now."],
    l06: ["I actually prefer tea to coffee.", "I intend to travel more next year.", "Eventually, after three hours, the plane took off.", "My relatives are coming for Christmas, so the house will be full."],
    l07: ["This bridge was built more than a hundred years ago.", "My bike was stolen while I was at the gym.", "I'm having my car repaired, so I'm taking the bus this week.", "The results will be announced on Monday."],
    l08: ["I wish I had more time to read.", "I wish I hadn't said that to her.", "I wish you would stop leaving your shoes in the hallway.", "If only we'd left a few minutes earlier!"],
    l09: ["Although it was raining, we decided to go for a walk.", "Despite the traffic, we arrived on time.", "The hotel was lovely. However, the food was disappointing.", "I love the city, whereas my wife prefers the countryside."],
    l10: ["She said she was feeling a bit tired.", "He told me he would call later.", "They asked me where I lived.", "My boss asked if I could stay a little longer."],
    l11: ["The meeting starts at nine o'clock on Monday.", "I was born in March, in 1994.", "I usually go for a run in the morning.", "See you next Friday!"],
    l12: ["That's a good question. Let me think for a second.", "Sorry, I didn't catch that. Could you say it again?", "I see your point, but I'm not entirely convinced.", "This traffic is terrible. Tell me about it!"],
    l13: ["Never have I seen such a beautiful sunset.", "Not only did she win, but she also broke the record.", "No sooner had we sat down than the phone rang.", "Under no circumstances should you open this door."],
    l14: ["She really takes after her father.", "I took up yoga last year, and I love it.", "We had to put off the meeting until next week.", "Put on a jacket, it's getting cold."]
  };
  LESSONS.forEach(l => { l.say = SAY[l.id] || []; });
})();