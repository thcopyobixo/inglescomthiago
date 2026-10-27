// Listening: ditados (frases soltas) e áudios longos (diálogos e falas), gravados com vozes neurais.
// Vozes: US = Ava, Emma (mulheres) · Andrew, Brian (homens) | UK = Sonia, Libby (mulheres) · Ryan, Thomas (homens)
window.LISTENING = {
  dictation: [
    { id: 'd01', lv: 'b1', text: "I'm going to grab a coffee. Do you want anything?" },
    { id: 'd02', lv: 'b1', text: "We should have left earlier to avoid the traffic." },
    { id: 'd03', lv: 'b1', text: "Could you send me the file by the end of the day?" },
    { id: 'd04', lv: 'b1', text: "I haven't seen her since we graduated." },
    { id: 'd05', lv: 'b1', text: "What do you usually do on the weekends?" },
    { id: 'd06', lv: 'b1', text: "It's been raining all morning, so the game was cancelled." },
    { id: 'd07', lv: 'b1', text: "Let me know if you need a hand with anything." },
    { id: 'd08', lv: 'b1', text: "My phone died, so I couldn't call you back." },
    { id: 'd09', lv: 'b2', text: "If I had known about the party, I would have come." },
    { id: 'd10', lv: 'b2', text: "She's been working on that project for almost a year." },
    { id: 'd11', lv: 'b2', text: "I'm not used to getting up this early on a Sunday." },
    { id: 'd12', lv: 'b2', text: "They ended up staying at a hotel near the airport." },
    { id: 'd13', lv: 'b2', text: "Whatever you decide, I'll back you up." },
    { id: 'd14', lv: 'b2', text: "We ran out of time before we could discuss the budget." },
    { id: 'd15', lv: 'b2', text: "I wish I had paid more attention in my math classes." },
    { id: 'd16', lv: 'b2', text: "The meeting has been put off until next Thursday." },
    { id: 'd17', lv: 'b2', text: "Despite the bad weather, the concert went ahead as planned." },
    { id: 'd18', lv: 'b2', text: "He came up with a plan that nobody had thought of." },
    { id: 'd19', lv: 'b2', text: "You'd better take an umbrella, it looks like it's going to rain." },
    { id: 'd20', lv: 'b2', text: "I'd rather stay in tonight and watch a movie." },
    { id: 'd21', lv: 'b2', text: "It's no use complaining, they're not going to change the rules." },
    { id: 'd22', lv: 'b2', text: "By the time we got to the station, the train had already left." },
    { id: 'd23', lv: 'b2', text: "I can't figure out why the printer isn't working." },
    { id: 'd24', lv: 'b2', text: "Would you mind turning the music down a little?" },
    { id: 'd25', lv: 'c1', text: "Had I known how difficult it would be, I wouldn't have agreed." },
    { id: 'd26', lv: 'c1', text: "Not only did they lose the match, but they also lost their best player." },
    { id: 'd27', lv: 'c1', text: "The new policy is likely to be phased out within two years." },
    { id: 'd28', lv: 'c1', text: "She's arguably the most talented writer of her generation." },
    { id: 'd29', lv: 'c1', text: "It goes without saying that safety comes first." },
    { id: 'd30', lv: 'c1', text: "I'd have called you if I'd had your number." },
    { id: 'd31', lv: 'c1', text: "We need to strike a balance between speed and quality." },
    { id: 'd32', lv: 'c1', text: "There's no point in arguing about something we can't change." },
    { id: 'd33', lv: 'c1', text: "The film didn't quite live up to my expectations." },
    { id: 'd34', lv: 'c1', text: "Bear in mind that prices tend to go up during the holidays." },
    { id: 'd35', lv: 'c1', text: "He's been under a lot of pressure lately, so cut him some slack." },
    { id: 'd36', lv: 'c1', text: "Little did we know that the shop was about to close for good." }
  ],

  // kind: 'dialogue' (várias vozes) ou 'talk' (uma pessoa). Cada linha vira um arquivo de áudio.
  passages: [
    {
      id: 'p01', lv: 'b1', kind: 'dialogue', title: 'Ordering at a café', place: 'Uma cafeteria em Nova York',
      lines: [
        { s: 'Barista', v: 'en-US-EmmaNeural', t: "Hi there! What can I get started for you?" },
        { s: 'Leo', v: 'en-US-BrianNeural', t: "Hi. Can I get a medium latte, please? With oat milk, if you have it." },
        { s: 'Barista', v: 'en-US-EmmaNeural', t: "Sure, we've got oat. Would you like it hot or iced?" },
        { s: 'Leo', v: 'en-US-BrianNeural', t: "Hot, please. It's freezing out there today." },
        { s: 'Barista', v: 'en-US-EmmaNeural', t: "Tell me about it. Anything to eat? The blueberry muffins just came out of the oven." },
        { s: 'Leo', v: 'en-US-BrianNeural', t: "Oh, that sounds good. I'll take one. Actually, could you warm it up a little?" },
        { s: 'Barista', v: 'en-US-EmmaNeural', t: "No problem. Is that for here or to go?" },
        { s: 'Leo', v: 'en-US-BrianNeural', t: "For here. I'm meeting a friend, so I'll probably stay a while." },
        { s: 'Barista', v: 'en-US-EmmaNeural', t: "Great. That comes to eight fifty. And can I get a name for the order?" },
        { s: 'Leo', v: 'en-US-BrianNeural', t: "It's Leo. L, E, O. Can I pay by card?" },
        { s: 'Barista', v: 'en-US-EmmaNeural', t: "Absolutely, just tap it right there. Perfect. We'll call you when it's ready, Leo." }
      ],
      gloss: { 'get started for you': 'preparar para você (fala típica de barista)', 'iced': 'gelado, com gelo', 'tell me about it': 'nem me fale', 'warm it up': 'esquentar', 'for here or to go': 'para comer aqui ou para viagem', 'tap': 'encostar (pagamento por aproximação)' },
      qs: [
        { q: 'What kind of milk does Leo ask for?', opts: ['Regular milk', 'Oat milk', 'Almond milk', 'No milk'], a: 1 },
        { q: 'Why does Leo want his drink hot?', opts: ['He has a sore throat', "It's very cold outside", 'Iced drinks are more expensive', 'The barista recommends it'], a: 1 },
        { q: 'What does Leo ask the barista to do with the muffin?', opts: ['Cut it in half', 'Put it in a bag', 'Warm it up', 'Replace it with a cookie'], a: 2 },
        { q: 'Why is Leo staying at the café?', opts: ['He is waiting for a friend', 'He wants to work there', 'It is raining', 'His phone is charging'], a: 0 }
      ]
    },
    {
      id: 'p02', lv: 'b1', kind: 'dialogue', title: 'Running late', place: 'Uma ligação de celular',
      lines: [
        { s: 'Maya', v: 'en-US-AvaNeural', t: "Hey, where are you? The movie starts in fifteen minutes." },
        { s: 'Josh', v: 'en-US-AndrewNeural', t: "I know, I'm so sorry. I'm stuck on the bus. There was an accident on the highway, and we haven't moved in like ten minutes." },
        { s: 'Maya', v: 'en-US-AvaNeural', t: "Oh no. Is everyone okay?" },
        { s: 'Josh', v: 'en-US-AndrewNeural', t: "I think so. I can see an ambulance, but it doesn't look too serious. It's just blocking two lanes." },
        { s: 'Maya', v: 'en-US-AvaNeural', t: "Okay. Do you want me to wait outside, or should I go in and save you a seat?" },
        { s: 'Josh', v: 'en-US-AndrewNeural', t: "Go in, definitely. There's no point in both of us missing the beginning. I'll text you when I get there." },
        { s: 'Maya', v: 'en-US-AvaNeural', t: "Sounds good. I'll get you some popcorn, too. Salted, right?" },
        { s: 'Josh', v: 'en-US-AndrewNeural', t: "You know me too well. Thanks, Maya. I owe you one." },
        { s: 'Maya', v: 'en-US-AvaNeural', t: "You owe me like five at this point. See you soon!" }
      ],
      gloss: { 'stuck': 'preso, parado', 'like ten minutes': 'tipo uns dez minutos (informal)', 'lanes': 'faixas da pista', 'save you a seat': 'guardar um lugar para você', "there's no point in": 'não adianta', 'I owe you one': 'te devo essa' },
      qs: [
        { q: 'Why is Josh late?', opts: ['He overslept', 'His bus is stuck in traffic', 'He went to the wrong cinema', 'He lost his ticket'], a: 1 },
        { q: 'How serious does the accident look?', opts: ['Very serious', 'Not too serious', 'Nobody knows', 'There was no accident'], a: 1 },
        { q: 'What will Maya do?', opts: ['Wait outside', 'Go home', 'Go in and save a seat', 'Cancel the plan'], a: 2 },
        { q: 'What does "You owe me like five at this point" suggest?', opts: ['Josh owes her money', 'Josh is often late or asks for favors', 'They watched five movies', 'She is angry and leaving'], a: 1 }
      ]
    },
    {
      id: 'p03', lv: 'b1', kind: 'talk', title: 'A voicemail from the dentist', place: 'Mensagem de voz, sotaque britânico',
      lines: [
        { s: 'Receptionist', v: 'en-GB-LibbyNeural', t: "Hello, this is a message for Mr. Daniel Costa. It's Hannah calling from Brightside Dental Practice." },
        { s: 'Receptionist', v: 'en-GB-LibbyNeural', t: "I'm afraid Dr. Patel is unwell this week, so we need to reschedule your check-up on Thursday morning. Sorry for any inconvenience." },
        { s: 'Receptionist', v: 'en-GB-LibbyNeural', t: "We can offer you next Monday at a quarter past nine, or Tuesday afternoon at half past three. If neither of those suits you, just let us know and we'll find another time." },
        { s: 'Receptionist', v: 'en-GB-LibbyNeural', t: "Could you give us a ring back on oh-two-oh, seven-nine-four-six, two-two-one-eight? We're open until six o'clock today. Thanks very much, and have a lovely afternoon." }
      ],
      gloss: { "I'm afraid": 'infelizmente (forma educada de dar má notícia)', 'unwell': 'doente', 'reschedule': 'remarcar', 'check-up': 'consulta de rotina', 'suits you': 'fica bom para você', 'give us a ring': 'ligar para nós (britânico)', 'a quarter past nine': '9h15', 'half past three': '15h30' },
      qs: [
        { q: 'Why is the appointment being changed?', opts: ['The clinic is closing', 'The dentist is ill', 'Daniel asked to change it', 'There was a mistake in the system'], a: 1 },
        { q: 'Which new time is offered on Monday?', opts: ['9:15', '9:45', '3:30', '6:00'], a: 0 },
        { q: 'What should Daniel do if neither time works?', opts: ['Go on Thursday anyway', 'Send an email', 'Let them know so they can find another time', 'Find a different dentist'], a: 2 },
        { q: '"Give us a ring" means:', opts: ['Send us a gift', 'Call us', 'Come to the clinic', 'Write to us'], a: 1 }
      ]
    },
    {
      id: 'p04', lv: 'b2', kind: 'dialogue', title: 'Job interview: tell me about yourself', place: 'Entrevista de emprego em Londres',
      lines: [
        { s: 'Interviewer', v: 'en-GB-RyanNeural', t: "Thanks for coming in, Carla. So, to start with, could you tell me a little bit about yourself?" },
        { s: 'Carla', v: 'en-US-AvaNeural', t: "Sure. I'm a graphic designer, and for the last four years I've been working at a small agency in São Paulo, mostly on branding for restaurants and local shops." },
        { s: 'Carla', v: 'en-US-AvaNeural', t: "It's been a great experience, because in a small team you end up doing a bit of everything. I've dealt with clients directly, managed deadlines, and even trained two junior designers." },
        { s: 'Interviewer', v: 'en-GB-RyanNeural', t: "That sounds like a lot of responsibility. What made you decide to apply for this role?" },
        { s: 'Carla', v: 'en-US-AvaNeural', t: "Honestly, I feel I've learned as much as I can where I am. I'd like to work on bigger projects with an international team, and your studio's work for museums really caught my eye." },
        { s: 'Interviewer', v: 'en-GB-RyanNeural', t: "Good. And what would you say is your biggest weakness?" },
        { s: 'Carla', v: 'en-US-AvaNeural', t: "I used to find it hard to say no to clients, so I'd take on too much and end up working late. These days I'm much better at setting expectations at the start of a project, and it's made a real difference." },
        { s: 'Interviewer', v: 'en-GB-RyanNeural', t: "That's a very honest answer. One last thing for now: how would you feel about relocating to London?" },
        { s: 'Carla', v: 'en-US-AvaNeural', t: "I'd be thrilled, to be honest. I've visited twice, and I've been looking into it seriously for a while." }
      ],
      gloss: { 'branding': 'identidade de marca', 'you end up doing': 'você acaba fazendo', 'dealt with': 'lidei com', 'caught my eye': 'chamou minha atenção', 'take on too much': 'assumir coisas demais', 'setting expectations': 'alinhar expectativas', 'relocating': 'se mudar (a trabalho)', 'thrilled': 'muito animada' },
      qs: [
        { q: 'What has Carla mostly worked on?', opts: ['Websites for banks', 'Branding for restaurants and local shops', 'Museum exhibitions', 'Video games'], a: 1 },
        { q: 'Why does she want to leave her current job?', opts: ['She was fired', 'The salary is too low', 'She feels she has learned all she can there', 'She does not like her boss'], a: 2 },
        { q: 'What was her weakness?', opts: ['Arriving late', 'Saying no to clients', 'Working in teams', 'Speaking English'], a: 1 },
        { q: 'How does she feel about moving to London?', opts: ['Nervous and unsure', 'Not interested', 'Very excited', 'She has never thought about it'], a: 2 }
      ]
    },
    {
      id: 'p05', lv: 'b2', kind: 'dialogue', title: 'Planning a weekend trip', place: 'Dois amigos combinando uma viagem',
      lines: [
        { s: 'Nina', v: 'en-US-EmmaNeural', t: "Okay, so we've got three days off. I was thinking we could drive up to the mountains. There's a cabin by a lake that's not too expensive." },
        { s: 'Ben', v: 'en-US-AndrewNeural', t: "The mountains sound nice, but it's a five-hour drive. We'd lose almost a whole day just getting there and back." },
        { s: 'Nina', v: 'en-US-EmmaNeural', t: "True. What did you have in mind, then?" },
        { s: 'Ben', v: 'en-US-AndrewNeural', t: "What about the coast? It's only two hours away, and there's that seafood festival on Saturday." },
        { s: 'Nina', v: 'en-US-EmmaNeural', t: "Hmm, I'm not a big fan of crowds, and a festival weekend is going to be packed. Plus, hotels will probably double their prices." },
        { s: 'Ben', v: 'en-US-AndrewNeural', t: "Fair point. Okay, how about a compromise? We go to the coast, but we stay in that little town just south of the main beach. It's quieter, and we can still drive in for the festival if we feel like it." },
        { s: 'Nina', v: 'en-US-EmmaNeural', t: "I could live with that. As long as there's somewhere I can sit and read without someone's speaker blasting music next to me." },
        { s: 'Ben', v: 'en-US-AndrewNeural', t: "Deal. I'll look for places tonight and send you a few options." }
      ],
      gloss: { 'days off': 'dias de folga', 'what did you have in mind': 'o que você estava pensando', 'packed': 'lotado', 'fair point': 'é justo, bem lembrado', 'compromise': 'meio-termo, acordo', 'if we feel like it': 'se der vontade', 'I could live with that': 'por mim tudo bem', 'blasting': 'tocando muito alto' },
      qs: [
        { q: "What is Ben's problem with the mountains?", opts: ['It is too cold', 'The cabin is expensive', 'The drive is too long', 'He does not like lakes'], a: 2 },
        { q: "Why doesn't Nina like the festival idea at first?", opts: ['She hates seafood', 'She dislikes crowds and high prices', 'She has to work on Saturday', 'She gets carsick'], a: 1 },
        { q: 'What compromise do they reach?', opts: ['Stay home', 'Go to the mountains for one day', 'Stay in a quieter town near the coast', 'Go to the festival and sleep in the car'], a: 2 },
        { q: 'What will Ben do tonight?', opts: ['Book the cabin', 'Look for places to stay', 'Buy festival tickets', 'Call the hotel'], a: 1 }
      ]
    },
    {
      id: 'p06', lv: 'b2', kind: 'talk', title: 'How I finally learned to cook', place: 'Um episódio de podcast',
      lines: [
        { s: 'Host', v: 'en-US-BrianNeural', t: "For most of my twenties, my idea of cooking was boiling pasta and pouring sauce from a jar on top of it. I told myself I didn't have time, but honestly, I was just intimidated." },
        { s: 'Host', v: 'en-US-BrianNeural', t: "Recipes seemed to assume I already knew things nobody had ever taught me. What does 'season to taste' actually mean? How hot is 'medium heat'? Every time I tried something ambitious, it went wrong, and I'd give up and order takeout." },
        { s: 'Host', v: 'en-US-BrianNeural', t: "What changed everything was a piece of advice from my grandmother. She said, 'Stop trying to learn recipes. Learn one dish really well, and then change one thing at a time.'" },
        { s: 'Host', v: 'en-US-BrianNeural', t: "So I picked a simple tomato soup and made it every Sunday for two months. One week I added more garlic. The next, I roasted the tomatoes first. Slowly, I started to understand why things worked, not just what to do." },
        { s: 'Host', v: 'en-US-BrianNeural', t: "Now I cook almost every night, and I rarely follow a recipe exactly. The funny thing is, I think the same approach works for learning anything, languages included. Master the basics, repeat them until they're boring, and then start experimenting." }
      ],
      gloss: { 'a jar': 'um pote de vidro', 'intimidated': 'intimidado', 'season to taste': 'tempere a gosto', 'medium heat': 'fogo médio', 'takeout': 'comida para viagem, delivery', 'roasted': 'assou (no forno)', 'master': 'dominar' },
      qs: [
        { q: 'What was the real reason he did not cook?', opts: ['He had no kitchen', 'He felt intimidated', 'He was allergic to many foods', 'He worked at night'], a: 1 },
        { q: 'What was the problem with recipes?', opts: ['They were too expensive', 'They assumed knowledge he did not have', 'They were in another language', 'They used rare ingredients'], a: 1 },
        { q: "What was his grandmother's advice?", opts: ['Take a cooking class', 'Learn one dish well and change one thing at a time', 'Only cook on weekends', 'Always follow recipes exactly'], a: 1 },
        { q: 'What connection does he make at the end?', opts: ['Cooking is harder than languages', 'The same method works for learning anything', 'Grandmothers are the best teachers', 'Soup is the healthiest food'], a: 1 }
      ]
    },
    {
      id: 'p07', lv: 'b2', kind: 'dialogue', title: 'Returning a faulty product', place: 'Uma loja de eletrônicos no Reino Unido',
      lines: [
        { s: 'Assistant', v: 'en-GB-SoniaNeural', t: "Good morning. How can I help?" },
        { s: 'Customer', v: 'en-US-AndrewNeural', t: "Hi. I bought these headphones here last week, and the left side has already stopped working. I'd like to return them, please." },
        { s: 'Assistant', v: 'en-GB-SoniaNeural', t: "Oh dear, I'm sorry to hear that. Have you got the receipt with you?" },
        { s: 'Customer', v: 'en-US-AndrewNeural', t: "I've got it on my phone. Here, it was sent to my email." },
        { s: 'Assistant', v: 'en-GB-SoniaNeural', t: "Lovely, that's fine. So, I can either replace them with a new pair of the same model, or give you a full refund to your card. Which would you prefer?" },
        { s: 'Customer', v: 'en-US-AndrewNeural', t: "To be honest, I'm a bit worried the same thing will happen again. Is there a different model you'd recommend in a similar price range?" },
        { s: 'Assistant', v: 'en-GB-SoniaNeural', t: "These ones over here are about ten pounds more, but they come with a two-year guarantee instead of one, and we hardly ever get any back." },
        { s: 'Customer', v: 'en-US-AndrewNeural', t: "That sounds worth it. Can I just pay the difference?" },
        { s: 'Assistant', v: 'en-GB-SoniaNeural', t: "Of course. I'll process the exchange now, and you'll only be charged the extra ten pounds." }
      ],
      gloss: { 'faulty': 'com defeito', 'receipt': 'nota fiscal, recibo', 'refund': 'reembolso', 'price range': 'faixa de preço', 'guarantee': 'garantia', 'hardly ever': 'quase nunca', 'pay the difference': 'pagar a diferença', 'exchange': 'troca' },
      qs: [
        { q: "What's wrong with the headphones?", opts: ['They are too big', 'The left side stopped working', 'The battery is dead', 'They were the wrong color'], a: 1 },
        { q: 'How does the customer show the receipt?', opts: ['On paper', 'On his phone', 'He does not have it', 'On the store computer'], a: 1 },
        { q: 'Why does he not want the same model?', opts: ['It is too expensive', 'He is afraid it will break again', 'It is out of stock', 'His friend has it'], a: 1 },
        { q: 'What is the advantage of the other model?', opts: ['It is cheaper', 'It is wireless', 'It has a longer guarantee', 'It comes in more colors'], a: 2 }
      ]
    },
    {
      id: 'p08', lv: 'c1', kind: 'talk', title: 'Why we procrastinate', place: 'Uma mini-aula',
      lines: [
        { s: 'Lecturer', v: 'en-US-AvaNeural', t: "We tend to think of procrastination as a time-management problem, as if people simply don't know how to plan their day. But if that were true, a good calendar app would cure it, and we all know it doesn't." },
        { s: 'Lecturer', v: 'en-US-AvaNeural', t: "A more useful way to look at it is as a mood-management problem. When a task makes us feel anxious, bored, or insecure, avoiding it gives us instant relief. The cost of that relief, of course, is paid later, usually with interest." },
        { s: 'Lecturer', v: 'en-US-AvaNeural', t: "This explains why we often procrastinate on the things that matter most to us. A report your boss will read, an application for a job you really want, a difficult conversation. The higher the stakes, the stronger the urge to look away." },
        { s: 'Lecturer', v: 'en-US-AvaNeural', t: "So what actually helps? Two things, mainly. The first is making the starting point ridiculously small. Not 'write the report', but 'open the document and write one bad sentence'. Once we've started, momentum tends to carry us further than we expected." },
        { s: 'Lecturer', v: 'en-US-AvaNeural', t: "The second is self-compassion. It sounds counterintuitive, but people who forgive themselves for procrastinating tend to procrastinate less the next time, because the task carries less emotional weight. Beating yourself up, it turns out, just gives you one more feeling to avoid." }
      ],
      gloss: { 'cure': 'curar, resolver', 'relief': 'alívio', 'with interest': 'com juros', 'the stakes': 'o que está em jogo', 'urge': 'vontade forte, impulso', 'momentum': 'embalo', 'counterintuitive': 'contraintuitivo', 'beating yourself up': 'se culpar, se martirizar' },
      qs: [
        { q: 'According to the speaker, procrastination is mainly a problem of:', opts: ['Time management', 'Mood management', 'Laziness', 'Bad technology'], a: 1 },
        { q: 'Why do we procrastinate on important things?', opts: ['They are usually boring', 'High stakes make the urge to avoid them stronger', 'We forget about them', 'Other people distract us'], a: 1 },
        { q: 'What is meant by making the starting point "ridiculously small"?', opts: ['Doing the task very quickly', 'Choosing a tiny first action', 'Asking someone else to start', 'Only working for five minutes a day'], a: 1 },
        { q: 'Why does self-compassion help?', opts: ['It makes tasks shorter', 'It removes deadlines', 'The task carries less emotional weight', 'It makes us more competitive'], a: 2 }
      ]
    },
    {
      id: 'p09', lv: 'c1', kind: 'dialogue', title: 'Radio debate: cars in the city centre', place: 'Um programa de rádio britânico',
      lines: [
        { s: 'Host', v: 'en-GB-ThomasNeural', t: "Good evening and welcome back. Tonight's question: should private cars be banned from the city centre? With me are Grace, an urban planner, and Mark, who runs a hardware shop on the high street. Grace, let's start with you." },
        { s: 'Grace', v: 'en-US-EmmaNeural', t: "Thanks. Look, I'm not anti-car. But city centres were never designed for this volume of traffic. Where cities have restricted cars, you typically see cleaner air, fewer accidents, and streets that people actually want to spend time in." },
        { s: 'Mark', v: 'en-US-BrianNeural', t: "That all sounds lovely, but a lot of my customers are tradespeople. They're buying heavy tools and bags of cement. They're not going to carry those onto a bus. If they can't park nearby, they'll simply drive to the retail park outside town." },
        { s: 'Grace', v: 'en-US-EmmaNeural', t: "That's a fair concern, and it's exactly why a ban shouldn't be absolute. You can allow deliveries, loading bays, and access for people with disabilities, while still removing the through-traffic that doesn't need to be there." },
        { s: 'Mark', v: 'en-US-BrianNeural', t: "With respect, every scheme I've seen starts with exceptions and ends up with fines. Small shops operate on very thin margins. If footfall drops by even ten percent for a year, some of us won't survive long enough to enjoy the cleaner air." },
        { s: 'Host', v: 'en-GB-ThomasNeural', t: "So, Grace, is there a way to bring businesses like Mark's along, rather than imposing it on them?" },
        { s: 'Grace', v: 'en-US-EmmaNeural', t: "Absolutely. Introduce changes gradually, measure the impact on trade, and involve local businesses from day one. When that happens, shop owners often become the strongest supporters, because pedestrians tend to linger and spend more." }
      ],
      gloss: { 'city centre': 'centro da cidade (grafia britânica)', 'high street': 'rua comercial principal (UK)', 'tradespeople': 'profissionais de obra (pedreiros, eletricistas)', 'retail park': 'centro comercial fora da cidade', 'loading bays': 'áreas de carga e descarga', 'through-traffic': 'trânsito de passagem', 'thin margins': 'margens de lucro apertadas', 'footfall': 'movimento de clientes', 'linger': 'demorar-se, ficar mais tempo' },
      qs: [
        { q: "What is Grace's position?", opts: ['Cars should be banned completely', 'Cars should be restricted, with exceptions', 'Nothing should change', 'Only electric cars should be allowed'], a: 1 },
        { q: "Why is Mark worried?", opts: ['He has no car', 'His customers need to transport heavy items', 'He lives outside the city', 'He thinks buses are too expensive'], a: 1 },
        { q: 'What does Mark mean by "thin margins"?', opts: ['Small shops', 'Narrow streets', 'Low profits', 'Few employees'], a: 2 },
        { q: "According to Grace, why do shop owners often end up supporting the changes?", opts: ['They receive government money', 'Pedestrians stay longer and spend more', 'Rent becomes cheaper', 'They are forced to'], a: 1 }
      ]
    },
    {
      id: 'p10', lv: 'c1', kind: 'talk', title: 'The night I got lost in Tokyo', place: 'Uma história contada, sotaque britânico',
      lines: [
        { s: 'Storyteller', v: 'en-GB-RyanNeural', t: "On my second night in Tokyo, I decided to walk back to my hotel instead of taking the train. How hard could it be? I had a map on my phone and a decent sense of direction. Or so I thought." },
        { s: 'Storyteller', v: 'en-GB-RyanNeural', t: "About twenty minutes in, my battery died. I was in a quiet residential area, every street looked identical, and the few signs I could see were entirely in Japanese. I remember standing at a crossing, thinking, well, this is how it ends." },
        { s: 'Storyteller', v: 'en-GB-RyanNeural', t: "I walked into a tiny convenience store, mostly to buy a drink and gather my thoughts. The man behind the counter spoke almost no English, and my Japanese was limited to 'thank you' and 'excuse me'. So I showed him the hotel's business card." },
        { s: 'Storyteller', v: 'en-GB-RyanNeural', t: "He studied it for a moment, then did something I'll never forget. He locked the till, put a sign on the door, and walked me there himself. It took fifteen minutes. We didn't share a single sentence, but we laughed the whole way." },
        { s: 'Storyteller', v: 'en-GB-RyanNeural', t: "When we arrived, he bowed, waved off my attempt to give him money, and disappeared back into the night. I've travelled a fair bit since then, but that's still the moment I think of when someone asks me what kindness looks like." }
      ],
      gloss: { 'a decent sense of direction': 'um bom senso de direção', 'or so I thought': 'pelo menos era o que eu achava', 'convenience store': 'loja de conveniência', 'gather my thoughts': 'organizar as ideias', 'the till': 'o caixa (UK)', 'waved off': 'recusou com um gesto', 'a fair bit': 'bastante' },
      qs: [
        { q: 'Why did he decide to walk?', opts: ['The trains had stopped', 'He thought it would be easy', 'He had no money', 'A friend suggested it'], a: 1 },
        { q: 'What made the situation difficult?', opts: ['It was raining heavily', 'His phone died and the signs were in Japanese', 'He was injured', 'The store was closed'], a: 1 },
        { q: 'What did the shopkeeper do?', opts: ['Called a taxi', 'Drew a map', 'Closed the shop and walked him to the hotel', 'Lent him a phone charger'], a: 2 },
        { q: 'How does the storyteller remember this night?', opts: ['As a frightening mistake', 'As his idea of what kindness looks like', 'As the reason he stopped travelling', 'As a funny misunderstanding about money'], a: 1 }
      ]
    }
  ]
};
