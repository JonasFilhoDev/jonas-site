#!/usr/bin/env python3
"""Captura telas da v2 (desktop e mobile) em PNGs separados, para comparação."""
import subprocess, sys, pathlib, time, json

CHROME = pathlib.Path.home() / ".hermes/tools/chromium-1208/chrome-linux/chrome"
ROOT = pathlib.Path(__file__).resolve().parent.parent
SHOTS = ROOT / "preview"
SHOTS.mkdir(exist_ok=True)

BASE = sys.argv[1] if len(sys.argv) > 1 else "http://localhost:4173/"

VIEWS = [
    ("desktop", 1440, 900, ["#home", "#projetos", "#processo", "#sobre", "#contato"], False),
    ("mobile", 390, 844, ["#home", "#projetos", "#contato"], True),
]


def shot(out, w, h, url, full):
    cmd = [
        str(CHROME), "--headless", "--disable-gpu", "--no-sandbox",
        "--hide-scrollbars", "--force-device-scale-factor=1",
        f"--window-size={w},{h}", f"--screenshot={out}",
    ]
    if full:
        cmd.append("--screenshot-full-page" if False else "--full-page-screenshot")
    cmd.append(url)
    r = subprocess.run(cmd, capture_output=True, text=True, timeout=180)
    if not pathlib.Path(out).exists():
        print(f"FALHOU {out}: {r.stderr[-800:]}", file=sys.stderr)
        return False
    return True


ok = True
for name, w, h, anchors, mobile in VIEWS:
    for a in anchors:
        slug = a.strip("#")
        url = f"{BASE}#{a}"
        out = SHOTS / f"{name}-{slug}.png"
        if shot(str(out), w, h, url, False):
            print(f"ok {out} ({out.stat().st_size} bytes)")
        else:
            ok = False

# full page
for name, w, h in [("desktop", 1440, 900), ("mobile", 390, 844)]:
    out = SHOTS / f"{name}-completo.png"
    if shot(str(out), w, h * 6, BASE, False):
        print(f"ok {out} ({out.stat().st_size} bytes)")

sys.exit(0 if ok else 1)