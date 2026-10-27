# Gerar os áudios com voz neural

Rode estes comandos sempre que editar ou adicionar textos em `js/data/`. Eles precisam de Node e Python.

    pip install edge-tts
    node tools/extract.js . tools/items.json
    python tools/gen_audio.py tools/items.json audio

O primeiro comando instala o gerador. O segundo lista todos os textos do site. O terceiro gera só os MP3 que ainda não existem e atualiza o `audio/manifest.js`.

As vozes de cada diálogo ficam no campo `v` de cada fala em `js/data/listening.js`.