// Speaking: frases para shadowing (com foco de pronúncia) e perguntas abertas.
window.SPEAKING = {
  shadow: [
    // TH
    { id: 's01', lv: 'b1', focus: 'TH', tip: 'Ponha a ponta da língua entre os dentes no "th".', text: 'I think three of them are thirty.' },
    { id: 's02', lv: 'b1', focus: 'TH', tip: 'O "th" de "the/this" vibra; o de "think" é só ar.', text: "This is the third time this month." },
    { id: 's03', lv: 'b2', focus: 'TH', tip: 'Não troque por "f" nem "d".', text: "Thanks for thinking of me on my birthday." },
    // -ED
    { id: 's04', lv: 'b1', focus: '-ED', tip: '"worked" = /wɜrkt/, uma sílaba só. Não diga "worked-ê".', text: 'I worked late and walked home.' },
    { id: 's05', lv: 'b2', focus: '-ED', tip: 'Só tem "id" depois de t/d: wanted, needed.', text: 'She wanted to know why I needed more time.' },
    { id: 's06', lv: 'b2', focus: '-ED', tip: 'played /d/, stopped /t/, started /ɪd/.', text: 'We played, stopped for lunch, and started again.' },
    // Linking
    { id: 's07', lv: 'b1', focus: 'Linking', tip: 'Junte as palavras: "pick-it-up".', text: 'Pick it up and put it on the table.' },
    { id: 's08', lv: 'b2', focus: 'Linking', tip: '"What do you" vira "whaddaya" na fala rápida.', text: 'What do you want to do after work?' },
    { id: 's09', lv: 'b2', focus: 'Linking', tip: '"Get out of" soa como "geddoudov".', text: 'Get out of here, I don\'t believe it!' },
    { id: 's10', lv: 'b2', focus: 'Linking', tip: '"Did you" vira "didja".', text: 'Did you get a chance to look at it?' },
    { id: 's11', lv: 'c1', focus: 'Linking', tip: '"Should have" vira "shoulda".', text: 'I should have known it was too good to be true.' },
    // Vogais
    { id: 's12', lv: 'b1', focus: 'Vogais', tip: 'ship /ɪ/ curto × sheep /iː/ longo.', text: 'The sheep are on the ship.' },
    { id: 's13', lv: 'b2', focus: 'Vogais', tip: 'bad /æ/ (boca aberta) × bed /e/.', text: 'The man had a bad day at the bank.' },
    { id: 's14', lv: 'b2', focus: 'Vogais', tip: 'full /ʊ/ curto × fool /uː/ longo.', text: 'Look, the pool is full of food.' },
    { id: 's15', lv: 'c1', focus: 'Vogais', tip: 'Schwa /ə/: as sílabas fracas quase somem.', text: 'A banana and a tomato for the computer guy.' },
    // R e H
    { id: 's16', lv: 'b1', focus: 'R / H', tip: 'O "h" inglês é só ar, como um suspiro (não é o "r" de "rato").', text: 'His house is behind the hospital.' },
    { id: 's17', lv: 'b2', focus: 'R / H', tip: 'O "r" inicial é com a língua recuada, sem tocar o céu da boca.', text: 'Red roses really are romantic.' },
    // Entonação
    { id: 's18', lv: 'b2', focus: 'Entonação', tip: 'Pergunta de sim/não: a voz sobe no final.', text: 'Are you coming to the party tonight?' },
    { id: 's19', lv: 'b2', focus: 'Entonação', tip: 'Pergunta com wh-: a voz desce no final.', text: 'Where are you going on vacation this year?' },
    { id: 's20', lv: 'c1', focus: 'Entonação', tip: 'Enfatize a palavra que muda o sentido: "I didn\'t say SHE stole it".', text: "I didn't say she stole the money." },
    // Frases úteis do dia a dia
    { id: 's21', lv: 'b1', focus: 'Fluência', tip: 'Fale num fôlego só, sem pausas entre as palavras.', text: "Sorry, I didn't catch that. Could you say it again?" },
    { id: 's22', lv: 'b2', focus: 'Fluência', tip: 'Ritmo: as palavras importantes ficam fortes, o resto fica fraco.', text: "I'd love to, but I've got a lot on my plate right now." },
    { id: 's23', lv: 'b2', focus: 'Fluência', tip: 'Junte "kind of" → "kinda".', text: "It's kind of hard to explain, but I'll try." },
    { id: 's24', lv: 'b2', focus: 'Fluência', tip: 'Junte "going to" → "gonna".', text: "I'm going to take a few days off next month." },
    { id: 's25', lv: 'b2', focus: 'Fluência', tip: 'Pausa curta depois da vírgula.', text: "To be honest, I'm not a big fan of horror movies." },
    { id: 's26', lv: 'c1', focus: 'Fluência', tip: 'Frase longa: respire antes e mantenha o ritmo.', text: 'If it were up to me, we would have finished this project weeks ago.' },
    { id: 's27', lv: 'c1', focus: 'Fluência', tip: '"That being said" funciona como um bloco só.', text: "It's expensive. That being said, it's definitely worth it." },
    { id: 's28', lv: 'c1', focus: 'Fluência', tip: 'Ênfase em "never" e "such".', text: 'Never have I seen such a beautiful sunset.' },
    { id: 's29', lv: 'b2', focus: 'Fluência', tip: 'Fale com naturalidade, como numa conversa.', text: "Let me think about it and I'll get back to you tomorrow." },
    { id: 's30', lv: 'c1', focus: 'Fluência', tip: 'Destaque "point".', text: "I see your point, but I'm not entirely convinced." },
    { id: 's31', lv: 'b2', focus: 'Fluência', tip: '"Could you" vira "couldja".', text: 'Could you give me a hand with these boxes?' },
    { id: 's32', lv: 'c1', focus: 'Fluência', tip: 'Ritmo de narração.', text: 'By the time I realized what was happening, it was already too late.' },
    { id: 's33', lv: 'b2', focus: 'Fluência', tip: '"Want to" vira "wanna".', text: "Do you want to grab something to eat later?" },
    { id: 's34', lv: 'c1', focus: 'Fluência', tip: 'Tom de opinião, enfatize "really".', text: "What really matters is that we learn from our mistakes." },
    { id: 's35', lv: 'b2', focus: 'TH', tip: 'Muitos "th" seguidos: vá devagar e depois acelere.', text: 'They thought that the theater was further than this.' },
    { id: 's36', lv: 'c1', focus: 'Linking', tip: '"Would have" vira "woulda".', text: "I would have helped you if you had asked me." }
  ],
  prompts: [
    { id: 'o01', lv: 'b1', q: 'Describe your typical morning routine.', hints: ['first of all', 'then', 'usually', 'after that'] },
    { id: 'o02', lv: 'b1', q: 'Talk about your favorite place in your city and why you like it.', hints: ['my favorite place is', 'because', 'whenever I', 'it reminds me of'] },
    { id: 'o03', lv: 'b1', q: 'What did you do last weekend?', hints: ['on Saturday', 'went', 'had', 'ended up'] },
    { id: 'o04', lv: 'b2', q: 'What is something you used to do as a child that you no longer do?', hints: ['used to', 'nowadays', 'I remember', 'I miss'] },
    { id: 'o05', lv: 'b2', q: 'If you could live anywhere in the world, where would you live and why?', hints: ['if I could', 'I would', 'the main reason', 'on the other hand'] },
    { id: 'o06', lv: 'b2', q: 'Describe a challenge you have faced and how you dealt with it.', hints: ['I struggled with', 'I managed to', 'in the end', 'I learned that'] },
    { id: 'o07', lv: 'b2', q: 'Do you prefer working from home or at an office? Explain.', hints: ['personally', 'whereas', 'the downside is', 'overall'] },
    { id: 'o08', lv: 'b2', q: 'Tell me about a book, series or movie you recommend.', hints: ['it is about', 'what I liked most', 'I would recommend it to', 'worth it'] },
    { id: 'o09', lv: 'b2', q: 'What are the pros and cons of social media?', hints: ['on the one hand', 'on the other hand', 'however', 'in my opinion'] },
    { id: 'o10', lv: 'b2', q: 'Describe your ideal vacation.', hints: ['I would love to', 'ideally', 'spend time', 'relax'] },
    { id: 'o11', lv: 'c1', q: 'Should university education be free? Defend your opinion.', hints: ['I would argue that', 'to be fair', 'that being said', 'ultimately'] },
    { id: 'o12', lv: 'c1', q: 'What skills will be most important in the job market in ten years?', hints: ['arguably', 'is likely to', 'as a result', 'bear in mind'] },
    { id: 'o13', lv: 'c1', q: 'Is technology making us more or less connected?', hints: ['paradoxically', 'while', 'it goes without saying', 'the bottom line is'] },
    { id: 'o14', lv: 'c1', q: 'Talk about a decision you regret, or one you are proud of.', hints: ['I wish I had', 'looking back', 'if I had', 'it turned out'] },
    { id: 'o15', lv: 'c1', q: 'How has your city changed in the last ten years?', hints: ['has become', 'used to be', 'nowadays', 'for better or worse'] },
    { id: 'o16', lv: 'b2', q: 'What is the best advice anyone has ever given you?', hints: ['once told me', 'at first', 'since then', 'I realized'] },
    { id: 'o17', lv: 'c1', q: 'Should people be allowed to work four days a week?', hints: ['supporters argue', 'critics', 'on balance', 'in the long run'] },
    { id: 'o18', lv: 'b2', q: 'Describe a person who has influenced you a lot.', hints: ['looks up to', 'taught me', 'always', 'I admire'] }
  ]
};
