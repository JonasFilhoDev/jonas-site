#!/usr/bin/env python3
"""Gera o og.png (1200x630) do site a partir de HTML/CSS, via Chromium headless.

Feito como HTML em vez de AI porque image_gen está indisponível neste host e o
resultado precisa casar exatamente com a paleta da v2.
"""
import subprocess, sys, pathlib, shutil

CHROME = pathlib.Path.home() / ".hermes/tools/chromium-1208/chrome-linux/chrome"
OUT = pathlib.Path(__file__).resolve().parent.parent / "public/og.png"
TMP = pathlib.Path(__file__).resolve().parent.parent / "public/og-src.html"

HTML = """<!DOCTYPE html>
<html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
  * { margin:0; padding:0; box-sizing:border-box; }
  body {
    width:1200px; height:630px; overflow:hidden;
    font-family:'Instrument Sans', system-ui, sans-serif;
    background:#0c223b; color:#f4f2ec;
    position:relative;
  }
  .grid {
    position:absolute; inset:0;
    background-image:linear-gradient(rgba(244,242,236,.055) 1px, transparent 1px);
    background-size:100% 42px;
  }
  .glow {
    position:absolute; width:760px; height:760px; right:-220px; top:-300px;
    background:radial-gradient(circle, rgba(194,80,60,.34) 0%, rgba(194,80,60,0) 66%);
  }
  .wrap { position:absolute; left:76px; top:96px; width:880px; }
  .status {
    display:inline-flex; align-items:center; gap:12px;
    font-family:'JetBrains Mono', monospace; font-size:19px; letter-spacing:.06em;
    text-transform:uppercase; color:rgba(244,242,236,.74);
    border:1px solid rgba(244,242,236,.2); border-radius:100px;
    padding:10px 22px; margin-bottom:38px;
  }
  .dot { width:13px; height:13px; border-radius:50%; background:#6ee7a8;
         box-shadow:0 0 0 5px rgba(110,231,168,.18); }
  h1 { font-family:'Bricolage Grotesque', sans-serif; font-weight:800;
       font-size:80px; line-height:1.04; letter-spacing:-.03em; margin-bottom:30px; }
  h1 em { font-style:normal; color:#c2503c; }
  p { font-size:27px; color:rgba(244,242,236,.74); margin-bottom:52px; max-width:730px; }
  .foot { display:flex; align-items:center; gap:18px; }
  .mark { width:60px; height:60px; border-radius:4px; background:#f4f2ec; color:#0c223b;
          display:grid; place-items:center; font-family:'Bricolage Grotesque',sans-serif;
          font-weight:800; font-size:25px; }
  .who { font-size:25px; font-weight:600; }
  .who span { display:block; font-family:'JetBrains Mono',monospace; font-size:18px;
              font-weight:400; color:rgba(244,242,236,.55); margin-top:3px; }
  .bar { width:5px; height:60px; background:#c2503c; border-radius:2px; margin-left:8px; }
</style></head>
<body>
  <div class="grid"></div>
  <div class="glow"></div>
  <div class="wrap">
    <div class="status"><span class="dot"></span>disponível para oportunidades</div>
    <h1>Sistemas web que<br>rodam <em>de verdade</em>.</h1>
    <p>API, interface, banco de dados e deploy no ar.</p>
    <div class="foot">
      <div class="mark">JF</div>
      <div class="bar"></div>
      <div class="who">Jonas Filho<span>jonasfilho.dev.br</span></div>
    </div>
  </div>
</body></html>
"""

TMP.write_text(HTML, encoding="utf-8")
cmd = [
    str(CHROME), "--headless", "--disable-gpu", "--no-sandbox",
    "--hide-scrollbars", "--force-device-scale-factor=1",
    "--window-size=1200,630", f"--screenshot={OUT}", TMP.as_uri(),
]
r = subprocess.run(cmd, capture_output=True, text=True, timeout=120)
TMP.unlink(missing_ok=True)
if not OUT.exists():
    print("FALHOU:", r.stderr[-1500:], file=sys.stderr)
    sys.exit(1)
print(f"og.png gerado: {OUT} ({OUT.stat().st_size} bytes)")