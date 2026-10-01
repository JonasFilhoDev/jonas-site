#!/usr/bin/env python3
"""Recorta o header (com o logo novo) e a secao de contato, em PNGs separados."""
import subprocess, sys, pathlib, json
from PIL import Image

CHROME = pathlib.Path.home() / ".hermes/tools/chromium-1208/chrome-linux/chrome"
ROOT = pathlib.Path("/home/ubuntu/jonas-site-v2")
SHOTS = ROOT / "preview"
BASE = "https://seasons-logged-schemes-updated.trycloudflare.com/"

W, H, NAME = 1440, 900, "desktop"
pos = json.loads((SHOTS / f"posicoes-{NAME}.json").read_text(encoding="utf-8"))

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