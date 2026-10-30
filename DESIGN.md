# Inglês com Thiago · Design

Visual nas cores da bandeira dos EUA (opção "C · Vermelho", escolhida pelo usuário em 30/10/2026), substituindo o antigo "Floresta". O layout segue o ivykids.com: menu horizontal no topo, título central grande com serifa, botões em pílula, cartões com contorno de 1px e faixas de cor sólida ocupando a largura toda. Os tokens mantêm os nomes antigos (`--green`, `--sage`...) para não mexer no resto do CSS.

## Cores (`css/app.css`, `:root`)
| Token | Valor | Uso |
|---|---|---|
| `--bg` / `--paper` | `#FFFFFF` | fundo branco, painéis, tarefa do exercício |
| `--ink` | `#0E1A2E` | texto principal (azul-marinho quase preto) |
| `--soft` / `--mute` | `#34425A` / `#5F6B80` | texto secundário |
| `--line` / `--rule` | `#CDD3DE` / `#E8EBF1` | contorno dos cartões / divisórias |
| `--green` | `#B22234` | ação principal (pílulas), destaques, tile principal: vermelho da bandeira |
| `--deep` | `#002868` | faixas, player de áudio, verso do flashcard, selo do logo: azul da bandeira |
| `--sage` / `--tint` | `#FBE3E6` / `#F3F5F9` | estado ativo, linha tocando, item concluído |
| `--mustard-tint` | `#DFE6F3` | dicas e callouts |
| `--ok` `--bad` `--warn` | verde / tijolo / ocre | feedback dos exercícios (o verde de "certo" continua verde) |

## Tipografia
- Títulos: **Gloock** (serifa de alto contraste, sempre no peso regular), de 72px no hero a 21px em listas.
- Texto e interface: **Onest** 400/500/600, corpo com 16,5px.
- Números em tabelas e contadores usam `font-variant-numeric: tabular-nums`.

## Componentes
- **Pílula** (`.pill`, `.line`, `.soft`, `.cream`, `.sm`, `.icon`, `.rec`): raio de 40px, altura mínima de 46px.
- **Tile e cartão** (`.tile`, `.card`): 1px `--line`, raio de 16px, fundo transparente. No hover, a borda fica na cor da tinta, o fundo vira `--paper` e o cartão sobe 3px. O tile principal (`.feature`) é vermelho sólido e ocupa duas linhas.
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
