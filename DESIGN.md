# Inglês com Thiago · Design

Visual "Floresta", escolhido pelo usuário em 26/10/2026. O layout segue o ivykids.com: menu horizontal no topo, título central grande com serifa, botões em pílula, cartões com contorno de 1px e faixas de cor sólida ocupando a largura toda.

## Cores (`css/app.css`, `:root`)
| Token | Valor | Uso |
|---|---|---|
| `--bg` | `#FBF7EC` | fundo papel creme (fixado pelo briefing do Ivy Kids) |
| `--paper` | `#FFFDF6` | cartão no hover, painéis, tarefa do exercício |
| `--ink` | `#14261E` | texto principal |
| `--soft` / `--mute` | `#3E4F46` / `#67756D` | texto secundário |
| `--line` / `--rule` | `#BFC6B6` / `#E4E0CF` | contorno dos cartões / divisórias |
| `--green` | `#1F5C43` | ação principal (pílulas), destaques |
| `--deep` | `#173E2F` | faixas, player de áudio, verso do flashcard, selo do logo |
| `--sage` / `--tint` | `#DCE6D2` / `#EEF0E2` | estado ativo, linha tocando, item concluído |
| `--mustard-tint` | `#F5E9C8` | dicas e callouts |
| `--ok` `--bad` `--warn` | verde / tijolo / ocre | feedback dos exercícios |

## Tipografia
- Títulos: **Gloock** (serifa de alto contraste, sempre no peso regular), de 72px no hero a 21px em listas.
- Texto e interface: **Onest** 400/500/600, corpo com 16,5px.
- Números em tabelas e contadores usam `font-variant-numeric: tabular-nums`.

## Componentes
- **Pílula** (`.pill`, `.line`, `.soft`, `.cream`, `.sm`, `.icon`, `.rec`): raio de 40px, altura mínima de 46px.
- **Tile e cartão** (`.tile`, `.card`): 1px `--line`, raio de 16px, fundo transparente. No hover, a borda fica na cor da tinta, o fundo vira `--paper` e o cartão sobe 3px. O tile principal (`.feature`) é verde sólido e ocupa duas linhas.
- **Faixa** (`.band`): `--deep` em largura total, com estatísticas em grade contornada.
- **Linha da trilha** (`.lrow`): número em serifa, título em serifa e status à direita.
- **Player** (`.player`): pílula grande `--deep`, botão de tocar creme e seletor de velocidade segmentado. As falas destacam a linha que está tocando (`.line.active`).
- **Ícones**: sprite SVG inline em `index.html`, no estilo Lucide com traço de 1.75.

## Movimento
Há um único momento autoral: a tela de conclusão, onde o selo desenha o ✓ e a nota sobe até o valor final. Fora isso:
- As páginas entram com 8px de deslocamento e opacidade.
- O flashcard vira em 3D.
- Todas as transições usam `cubic-bezier(.16,1,.3,1)`.
- `prefers-reduced-motion` desliga tudo.

## Áudio
Todo o conteúdo tem MP3 gerado com vozes neurais da Microsoft pelo `edge-tts`:
- EUA: Ava, Emma, Andrew e Brian.
- Reino Unido: Sonia, Libby, Ryan e Thomas.

O arquivo `audio/manifest.js` liga cada texto ao seu arquivo. Quando um texto não tem MP3, o site usa a voz do navegador. Para regenerar os áudios depois de editar os textos, rode `extract.js` e depois `gen_audio.py`; veja o README.

## Exceção registrada
O detector aponta o fundo creme como "padrão de IA". Aqui ele é intencional: o usuário fixou o ivykids.com como referência.
