#!/usr/bin/env python3
"""Recorta o header (com o logo novo) e secoes escolhidas, em PNGs separados.

O --screenshot do Chromium headless nao rola ate a ancora #id, entao capturar
por ancora devolve sempre o topo. Aqui a pagina inteira e capturada uma vez e
cortada pelas posicoes reais das secoes, medidas no DOM antes (ver
`posicoes.json`, gerado pelo browser).

Uso: recortar_header.py [nome] [largura] [altura-viewport]
"""
import subprocess, sys, pathlib, json
from PIL import Image

CHROME = pathlib.Path.home() / ".hermes/tools/chromium-1208/chrome-linux/chrome"
ROOT = pathlib.Path(__file__).resolve().parent.parent
SHOTS = ROOT / "preview"
SHOTS.mkdir(exist_ok=True)

# a URL pode vir do primeiro argumento; sem ela, usa o preview local
BASE = sys.argv[1] if len(sys.argv) > 1 else "http://localhost:4173/"

NAME = sys.argv[2] if len(sys.argv) > 2 else "desktop"
W = int(sys.argv[3]) if len(sys.argv) > 3 else 1440
H = int(sys.argv[4]) if len(sys.argv) > 4 else 900

pos_file = SHOTS / f"posicoes-{NAME}.json"
if not pos_file.exists():
    print(f"falta {pos_file} — meca as secoes no DOM antes", file=sys.stderr)
    sys.exit(1)
pos = json.loads(pos_file.read_text(encoding="utf-8"))

full = SHOTS / f"{NAME}-inteira.png"
cmd = [
    str(CHROME), "--headless", "--disable-gpu", "--no-sandbox",
    "--hide-scrollbars", "--force-device-scale-factor=1",
    f"--window-size={W},{H * 8}", f"--screenshot={full}", BASE,
]
r = subprocess.run(cmd, capture_output=True, text=True, timeout=300)
if not full.exists():
    print("FALHOU:", r.stderr[-1000:], file=sys.stderr)
    sys.exit(1)

im = Image.open(full)
print(f"inteira {im.size}")

# header: 0 ate o inicio da primeira secao
primeira = min(s["top"] for s in pos)
header = im.crop((0, 0, im.size[0], int(primeira) + 6))
header.save(SHOTS / f"{NAME}-header.png")
print(f"header {header.size} -> {SHOTS / (NAME + '-header.png')}")

for alvo in ("projetos", "contato", "sobre"):
    s = next((x for x in pos if x["id"] == alvo), None)
    if not s:
        continue
    top, bot = s["top"], min(s["top"] + s["h"], im.size[1])
    crop = im.crop((0, top, im.size[0], bot))
    crop.save(SHOTS / f"{NAME}-{alvo}.png")
    print(f"{alvo} {crop.size}")