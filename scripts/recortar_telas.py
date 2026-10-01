#!/usr/bin/env python3
"""Corta a captura de pagina inteira em imagens por secao.

O --screenshot do Chromium headless nao rola ate a ancora #id, entao capturar
por ancora devolve sempre o topo. Aqui a pagina inteira e capturada uma vez e
cortada pelas posicoes reais das secoes, medidas no DOM antes (ver
`posicoes.json`, gerado pelo browser).

Uso: recortar_telas.py <posicoes.json> <largura> <altura-viewport> <nome>
"""
import subprocess, sys, json, pathlib
from PIL import Image

CHROME = pathlib.Path.home() / ".hermes/tools/chromium-1208/chrome-linux/chrome"
ROOT = pathlib.Path("/home/ubuntu/jonas-site-v2")
SHOTS = ROOT / "preview"
SHOTS.mkdir(exist_ok=True)

BASE = "http://localhost:4173/"

pos_file = pathlib.Path(sys.argv[1])
W = int(sys.argv[2])
H = int(sys.argv[3])
NAME = sys.argv[4]

secoes = json.loads(pos_file.read_text(encoding="utf-8"))

full = SHOTS / f"{NAME}-inteira.png"
cmd = [
    str(CHROME), "--headless", "--disable-gpu", "--no-sandbox",
    "--hide-scrollbars", "--force-device-scale-factor=1",
    f"--window-size={W},{H * 8}",
    f"--screenshot={full}", BASE,
]
r = subprocess.run(cmd, capture_output=True, text=True, timeout=300)
if not full.exists():
    print("FALHOU:", r.stderr[-1200:], file=sys.stderr)
    sys.exit(1)

im = Image.open(full)
print(f"inteira: {im.size[0]}x{im.size[1]}")
limite = im.size[1]

for s in secoes:
    top = max(0, min(s["top"], limite - 1))
    bot = min(s["top"] + s["h"], limite)
    if bot - top < 20:
        print(f"  ignorada {s['id']} (apenas {bot - top}px visiveis)")
        continue
    crop = im.crop((0, top, im.size[0], bot))
    out = SHOTS / f"{NAME}-{s['id']}.png"
    crop.save(out)
    print(f"  ok {out.name} {crop.size[0]}x{crop.size[1]} ({out.stat().st_size} bytes)")