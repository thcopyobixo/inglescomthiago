// Leitura: textos graduados com glossário, perguntas e narração neural (um áudio por parágrafo).
window.READING = [
  {
    id: 'r01', lv: 'b1', title: 'The case for the afternoon nap', v: 'en-US-EmmaNeural', mins: 3,
    paras: [
      "In many countries, taking a nap in the middle of the day is seen as a sign of laziness. In others, it's simply part of the routine. In parts of Spain, Greece and Latin America, the afternoon rest has been a tradition for generations, and more and more people elsewhere are starting to see why.",
      "The idea is simple. After lunch, most of us feel a dip in energy. It isn't only because of the food: our body clock naturally makes us a little sleepy in the early afternoon. Instead of fighting that feeling with another coffee, a nap works with it.",
      "The secret is to keep it short. Twenty minutes is usually enough to feel more alert without waking up confused and heavy. Sleep for much longer than that, and you may fall into a deeper stage of sleep, which is why a long nap can leave you feeling worse than before.",
      "Some companies have noticed. A few now offer quiet rooms where employees can rest for a while, hoping that a rested team will make fewer mistakes and have better ideas. Still, in most offices, putting your head down on your desk would get you some strange looks.",
      "If you want to try it, choose a dark, quiet place, set an alarm, and don't worry if you don't actually fall asleep. Even lying still with your eyes closed for a few minutes can help you start the second half of the day with a clearer head."
    ],
    gloss: { 'nap': 'cochilo', 'laziness': 'preguiça', 'a dip in energy': 'uma queda de energia', 'body clock': 'relógio biológico', 'alert': 'alerta, desperto', 'strange looks': 'olhares estranhos', 'lying still': 'deitado sem se mexer' },
    qs: [
      { q: 'Why do people feel sleepy after lunch, according to the text?', opts: ['Only because of the food', 'Their body clock makes them sleepy then', 'They sleep badly at night', 'Offices are too warm'], a: 1 },
      { q: 'What is the ideal length of a nap?', opts: ['About five minutes', 'About twenty minutes', 'About an hour', 'As long as you want'], a: 1 },
      { q: 'Why can a long nap make you feel worse?', opts: ['You may enter a deeper stage of sleep', 'You miss lunch', 'You will not sleep at night', 'It raises your heart rate'], a: 0 },
      { q: 'What does the writer say if you cannot fall asleep?', opts: ['Drink coffee instead', 'Try again the next day', 'Resting with your eyes closed can still help', 'Go for a walk'], a: 2 }
    ]
  },
  {
    id: 'r02', lv: 'b2', title: 'Words that refuse to be translated', v: 'en-GB-SoniaNeural', mins: 4,
    paras: [
      "Every language has a handful of words that seem to resist translation. Brazilians love to point out that there is no single English word for 'saudade', that bittersweet longing for someone or something that is gone, or may never return. English speakers can describe the feeling, but it takes them a whole sentence.",
      "Portuguese is far from alone. Danish has 'hygge', a cosy, candlelit sense of comfort and togetherness that has become an international lifestyle trend. Japanese has 'tsundoku', the habit of buying books and letting them pile up unread. German, famously, can glue words together to name very specific emotions, such as the guilty pleasure of enjoying someone else's misfortune.",
      "It's tempting to conclude that people who lack a word for something cannot feel it. Linguists are generally sceptical of that idea. An English speaker who has never heard of 'saudade' still misses their grandmother. What a single word does is make a feeling easier to notice, to talk about and to share.",
      "In that sense, untranslatable words are less like locked doors and more like signposts. They show us what a culture has found important enough to name. A country where people meet every afternoon for coffee will probably have more words for those moments than a country where everyone eats lunch alone at their desk.",
      "For language learners, these words are a gift. They remind us that learning a language isn't just swapping one label for another. It's learning to see the world through slightly different eyes, and occasionally discovering a feeling you had all along but had never been able to name."
    ],
    gloss: { 'a handful of': 'um punhado de, poucos', 'longing': 'anseio, saudade', 'cosy': 'aconchegante (grafia britânica)', 'pile up': 'acumular, empilhar', 'misfortune': 'desgraça, azar', 'sceptical': 'cético (grafia britânica)', 'signposts': 'placas de sinalização', 'swapping': 'trocar' },
    qs: [
      { q: "What is the main point about 'saudade' in English?", opts: ['English speakers cannot feel it', 'It needs a whole sentence to explain', 'It has an exact equivalent', 'It is only used in poetry'], a: 1 },
      { q: "What does 'tsundoku' describe?", opts: ['Reading many books at once', 'Buying books and not reading them', 'Writing in a diary', 'Lending books to friends'], a: 1 },
      { q: 'What do most linguists think about lacking a word for a feeling?', opts: ['It means you cannot feel it', 'It is impossible to explain', 'You can still feel it; the word just makes it easier to notice', 'Only children are affected'], a: 2 },
      { q: 'Why does the writer call these words "signposts"?', opts: ['They are written on streets', 'They show what a culture considers important', 'They are difficult to pronounce', 'They block communication'], a: 1 }
    ]
  },
  {
    id: 'r03', lv: 'b2', title: 'The quiet comeback of the paper notebook', v: 'en-US-AndrewNeural', mins: 4,
    paras: [
      "A decade ago, it seemed obvious that paper notebooks were on their way out. Phones could store thousands of notes, sync them across devices and search them in seconds. Why would anyone carry a notebook and a pen? And yet, walk into any bookshop today and you'll find an entire wall of them, some costing as much as a nice dinner.",
      "Part of the answer is distraction. A notebook does exactly one thing. It doesn't buzz, it doesn't show you the news, and it never tempts you to check, just for a second, what your friends are up to. For people who spend all day in front of screens, writing by hand can feel like closing a door to a noisy room.",
      "There's also the way handwriting slows us down. Typing lets us record what someone says almost word for word, often without really thinking about it. Writing by hand is too slow for that, so we're forced to summarise, choose what matters and put it in our own words. Many students find that this extra effort helps them remember more.",
      "None of this means people are abandoning technology. Most notebook fans still use their phones constantly; they simply keep certain kinds of thinking on paper. Planning a project, working through a problem, writing a journal at the end of the day: these are tasks where many people prefer a blank page to a blinking cursor.",
      "Perhaps that's the real lesson. New tools rarely replace old ones completely. Instead, they push them into the jobs they do best. The paper notebook didn't win the battle against the smartphone, but it found a role the smartphone was never very good at."
    ],
    gloss: { 'on their way out': 'saindo de moda, acabando', 'sync': 'sincronizar', 'buzz': 'vibrar', 'what your friends are up to': 'o que seus amigos estão fazendo', 'word for word': 'palavra por palavra', 'summarise': 'resumir (grafia britânica)', 'blinking cursor': 'cursor piscando' },
    qs: [
      { q: 'Why did paper notebooks seem to be disappearing ten years ago?', opts: ['Paper became too expensive', 'Phones could do the same job more efficiently', 'Schools banned them', 'People stopped writing'], a: 1 },
      { q: 'What advantage of notebooks is mentioned in the second paragraph?', opts: ['They are cheaper', 'They do not distract you', 'They last longer', 'They are easier to share'], a: 1 },
      { q: 'Why might handwriting help us remember?', opts: ['It forces us to summarise and choose what matters', 'It is faster than typing', 'It uses more colors', 'It is more beautiful'], a: 0 },
      { q: 'What is the "real lesson" in the last paragraph?', opts: ['Old tools always win', 'New tools push old ones into the jobs they do best', 'Smartphones will disappear', 'Technology is bad for students'], a: 1 }
    ]
  },
  {
    id: 'r04', lv: 'b2', title: 'A short history of the coffee break', v: 'en-US-AvaNeural', mins: 4,
    paras: [
      "For millions of office workers, the coffee break is as natural as breathing. Around mid-morning, people drift towards the kitchen, fill their mugs, and spend ten minutes talking about anything except work. It feels like it has always existed. In fact, it's a fairly modern invention.",
      "Coffee itself has been drunk socially for centuries. Coffee houses in places like Istanbul, London and Vienna were famous meeting points where people read the news, argued about politics and did business. But these were places you went to in your free time, not breaks built into the working day.",
      "The idea of a scheduled pause became common in the twentieth century, as more people began working in factories and offices with fixed hours. Employers gradually realised that tired workers made more mistakes, and that a short rest could improve both safety and productivity. A hot drink happened to be the perfect excuse.",
      "Today, the coffee break has become much more than a caffeine stop. It's where new employees learn who's who, where colleagues from different departments actually meet, and where many good ideas begin as casual conversations. Some managers even argue that the informal chat by the coffee machine is one of the most valuable parts of the day.",
      "That's partly why remote workers often say they miss the office, even if they don't miss the commute. You can schedule a video call, but it's much harder to recreate the unplanned two-minute chat that turns into a solution. The coffee break, it turns out, was never really about the coffee."
    ],
    gloss: { 'drift towards': 'ir aos poucos em direção a', 'mugs': 'canecas', 'coffee houses': 'cafés (estabelecimentos)', 'scheduled': 'programado', 'happened to be': 'por acaso era', "who's who": 'quem é quem', 'commute': 'trajeto casa-trabalho', 'unplanned': 'não planejado' },
    qs: [
      { q: 'What does the writer say about the coffee break?', opts: ['It is ancient', 'It is a fairly modern invention', 'It was invented in Brazil', 'It is disappearing'], a: 1 },
      { q: 'How were old coffee houses different from modern coffee breaks?', opts: ['They served tea only', 'People went there in their free time', 'They were only for women', 'They were inside factories'], a: 1 },
      { q: 'Why did employers start allowing breaks?', opts: ['Workers demanded coffee', 'Rested workers made fewer mistakes', 'Coffee became cheaper', 'The law required it'], a: 1 },
      { q: 'What do remote workers miss, according to the text?', opts: ['The commute', 'Free coffee', 'Unplanned conversations', 'Their desks'], a: 2 }
    ]
  },
  {
    id: 'r05', lv: 'c1', title: 'Who owns your attention?', v: 'en-GB-RyanNeural', mins: 5,
    paras: [
      "When a product is free, the saying goes, you are the product. Most of the apps on our phones cost nothing to download, yet the companies behind them are among the most valuable in the world. What they sell, in one form or another, is our attention, packaged and auctioned to advertisers.",
      "This business model has consequences for design. If revenue depends on how long you stay, every feature is under pressure to keep you there a little longer. Infinite scrolling removes natural stopping points. Notifications are timed to pull you back in. Videos start playing before you've decided whether you want to watch them.",
      "None of these techniques is sinister on its own, and many genuinely make products easier to use. The problem lies in the incentive behind them. A tool designed to help you finish a task wants you to leave satisfied. A tool designed to maximise engagement wants you never to finish at all.",
      "Critics argue that this creates an unfair contest: individual willpower against teams of engineers whose job is to overcome it. Defenders respond that adults are perfectly capable of putting their phones down, and that no one is forced to download anything. The truth, as usual, probably lies somewhere in between.",
      "What seems clear is that attention is a finite resource, and that spending it is a choice, even when it doesn't feel like one. Small changes can tip the balance: turning off non-essential notifications, keeping the phone out of the bedroom, or simply asking, before opening an app, what you actually came to do. It won't defeat the attention economy, but it can make you a slightly more expensive product."
    ],
    gloss: { 'the saying goes': 'como diz o ditado', 'auctioned': 'leiloado', 'revenue': 'receita, faturamento', 'stopping points': 'pontos de parada', 'sinister': 'sinistro, mal-intencionado', 'incentive': 'incentivo', 'engagement': 'engajamento', 'willpower': 'força de vontade', 'finite': 'finito', 'tip the balance': 'fazer a balança pender' },
    qs: [
      { q: 'What do free apps really sell, according to the writer?', opts: ['Personal photos', "Users' attention", 'Software licences', 'Phones'], a: 1 },
      { q: 'Why does infinite scrolling matter in this argument?', opts: ['It saves battery', 'It removes natural stopping points', 'It is difficult to use', 'It shows fewer ads'], a: 1 },
      { q: 'According to the writer, where does the real problem lie?', opts: ['In each design technique itself', 'In the incentive behind the techniques', 'In the users', 'In advertising laws'], a: 1 },
      { q: 'What does "a slightly more expensive product" mean in the last sentence?', opts: ['Apps will cost more', 'Your attention becomes harder to capture', 'You will spend more money', 'Phones will become more expensive'], a: 1 }
    ]
  },
  {
    id: 'r06', lv: 'c1', title: 'What makes a street worth walking?', v: 'en-US-BrianNeural', mins: 5,
    paras: [
      "Some streets invite you to wander. You slow down, look into shop windows and somehow end up walking twice as far as you meant to. Others make you want to get to the end as quickly as possible, even if they're perfectly safe. The difference is rarely an accident; it's usually a matter of design.",
      "One of the most important factors is what urban designers call 'active frontage': buildings whose ground floors open onto the street, with doors, windows and things happening inside. A row of cafés and small shops gives your eyes something new every few seconds. A long blank wall or a car park gives them nothing, and the walk feels longer than it is.",
      "Scale matters, too. Streets that are lined with buildings of a moderate height, with trees and enough width for people to pass each other comfortably, tend to feel like outdoor rooms. Very wide roads with fast traffic, on the other hand, can make pedestrians feel exposed, as though they were trespassing on space designed for something else.",
      "Then there are the small, almost invisible details: benches where an older person can rest, shade on a hot afternoon, pavements without sudden steps, crossings that don't force you to wait for minutes on end. None of these is dramatic on its own, but together they send a clear message about who the street is for.",
      "The encouraging part is that walkability isn't reserved for historic European centres. Cities all over the world are redesigning streets that were built around cars, often with surprisingly modest changes. Sometimes all it takes is a few trees, wider pavements and a reason to stop, and a place people used to rush through becomes a place they choose to stay."
    ],
    gloss: { 'wander': 'passear sem rumo', 'active frontage': 'fachada ativa (térreo aberto para a rua)', 'car park': 'estacionamento (UK)', 'lined with': 'margeado por, com fileiras de', 'trespassing': 'invadindo propriedade', 'pavements': 'calçadas (UK)', 'on end': 'sem parar, a fio', 'rush through': 'passar correndo' },
    qs: [
      { q: 'What is "active frontage"?', opts: ['Fast traffic', 'Ground floors that open onto the street', 'Large parks', 'Tall office buildings'], a: 1 },
      { q: 'Why does a blank wall make a walk feel longer?', opts: ['It blocks the sun', 'It gives your eyes nothing to look at', 'It is dangerous', 'It makes the street narrower'], a: 1 },
      { q: 'How can very wide roads make pedestrians feel?', opts: ['Relaxed', 'Exposed', 'Excited', 'Lost'], a: 1 },
      { q: 'What is the "encouraging part" mentioned at the end?', opts: ['Only European cities can be walkable', 'Walkability often requires only modest changes', 'Cars are being banned everywhere', 'People prefer driving'], a: 1 }
    ]
  }
];
