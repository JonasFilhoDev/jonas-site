#!/usr/bin/env python3
"""Prepara a marca para o header com o miolo branco transparente.

O logo original e uma moldura quadrada marinha com o monograma JF e um selo DEV.
O interior do quadrado e branco (o desenho original). Num site de fundo papel
quente esse bloco branco destoa, entao aqui o branco INTERIOR tambem vira
transparente, sobrando so o marinho e as letras DEV (brancas dentro da caixa
marinha, preservadas porque nao tocam o exterior).

Duas Connectivity passes:
  1. branco que alcanca a BORDA da imagem  -> historicamente o fundo de fora
  2. branco INTERIOR (compartimento central) -> medido a partir de um ponto
     dentro do quadrado, sem atravessar a moldura

Saida: public/brand/jf-dev.png (marinho + letras DEV, resto transparente)
"""
import pathlib
from collections import deque
from PIL import Image

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = ROOT / "public/assets/logo.png"
OUT = ROOT / "public/brand/jf-dev.png"
WHITE_CUT = 8

rgb = Image.open(SRC).convert("RGB")
W, H = rgb.size
src = rgb.load()


def near_white(p):
    return all(c >= 255 - WHITE_CUT for c in p)


def flood(x0, y0):
    v = set()
    q = deque([(x0, y0)])
    v.add((x0, y0))
    while q:
        x, y = q.popleft()
        for nx, ny in ((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)):
            if 0 <= nx < W and 0 <= ny < H and (nx, ny) not in v and near_white(src[nx, ny]):
                v.add((nx, ny))
                q.append((nx, ny))
    return v


# 1) fundo exterior (a partir da propria borda)
ext = set()
q = deque()
for x in range(W):
    for y in (0, H - 1):
        if (x, y) not in ext and near_white(src[x, y]):
            ext.add((x, y))
            q.append((x, y))
for y in range(H):
    for x in (0, W - 1):
        if (x, y) not in ext and near_white(src[x, y]):
            ext.add((x, y))
            q.append((x, y))
while q:
    x, y = q.popleft()
    for nx, ny in ((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)):
        if 0 <= nx < W and 0 <= ny < H and (nx, ny) not in ext and near_white(src[nx, ny]):
            ext.add((nx, ny))
            q.append((nx, ny))

# 2) miolo branco: achamos um ponto dentro do quadrado. O centro da imagem
#    (deve estar no branco interno do monograma ou moldura). Varremos a linha
#    central em busca do primeiro branco DEPOIS da moldura esquerda.
meio_y = H // 2
semente = None
for x in range(W // 4, 3 * W // 4):
    if near_white(src[x, meio_y]):
        # garante que estamos dentro, nao colado na borda externa
        if (x, meio_y) not in ext:
            semente = (x, meio_y)
            break

interior = flood(*semente) if semente else set()

# o miolo some; as letras DEV sao brancas MAS cercadas de marinho (a caixa),
# entao nao fazem parte do flood do interior do quadrado grande.
branco_total = ext | interior

out = rgb.convert("RGBA")
op = out.load()
for (x, y) in branco_total:
    r, g, b, _ = op[x, y]
    op[x, y] = (r, g, b, 0)

bbox = out.getchannel("A").point(lambda v: 255 if v > 8 else 0).getbbox()
crop = out.crop(bbox)
OUT.parent.mkdir(parents=True, exist_ok=True)
crop.save(OUT)

chk = Image.open(OUT).convert("RGBA")
cw, ch = chk.size
cp = chk.load()
opacos = sum(1 for y in range(ch) for x in range(cw) if cp[x, y][3] > 200)
transp = sum(1 for y in range(ch) for x in range(cw) if cp[x, y][3] < 20)
brancos_opacos = sum(1 for y in range(ch) for x in range(cw) if cp[x, y][3] > 200 and all(v >= 247 for v in cp[x, y][:3]))

print(f"entrada {rgb.size} -> saida {crop.size}   bbox {bbox}")
print(f"branco exterior {len(ext)}  interior {len(interior)}")
print(f"opacos {opacos} ({100 * opacos / (cw * ch):.1f}%)")
print(f"transparentes {transp} ({100 * transp / (cw * ch):.1f}%)")
print(f"brancos opacos restantes (letras DEV) {brancos_opacos}")
print(f"em {OUT}")