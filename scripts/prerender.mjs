/**
 * Pré-renderiza as três línguas para HTML estático.
 *
 * Roda depois do build do cliente e do build SSR. Lê dist/index.html como
 * molde, injeta o markup de cada língua e grava dist/index.html (pt),
 * dist/en/index.html e dist/es/index.html, cada um com lang, title,
 * description, canonical, og e hreflang próprios.
 *
 * Sem navegador: renderToString do React resolve no build, inclusive na Vercel.
 */
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const raiz = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = resolve(raiz, 'dist')
const ssr = resolve(raiz, 'dist-ssr/entry-server.js')

const BASE = 'https://jonasfilho.dev.br'
const CAMINHO = { pt: '/', en: '/en/', es: '/es/' }
const OG_LOCALE = { pt: 'pt_BR', en: 'en_US', es: 'es_ES' }

const { render, meta } = await import(pathToFileURL(ssr).href)

const molde = await readFile(resolve(dist, 'index.html'), 'utf8')

function escaparHtml(texto) {
  return texto.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

function montar(lang) {
  const m = meta(lang)
  const url = `${BASE}${CAMINHO[m.lang]}`
  const markup = render(lang)

  const alternates = ['pt', 'en', 'es']
    .map((codigo) => `    <link rel="alternate" hreflang="${codigo}" href="${BASE}${CAMINHO[codigo]}" />`)
    .concat(`    <link rel="alternate" hreflang="x-default" href="${BASE}/" />`)
    .join('\n')

  let html = molde
    .replace(/<html lang="[^"]*">/, `<html lang="${m.htmlLang}">`)
    .replace(/<title>[^<]*<\/title>/, `<title>${escaparHtml(m.title)}</title>`)
    .replace(
      /(<meta\s+name="description"\s+content=")[^"]*(")/,
      `$1${escaparHtml(m.description)}$2`,
    )
    .replace(
      /(<link rel="canonical" href=")[^"]*("\s*\/>)/,
      `$1${url}$2\n${alternates}`,
    )
    .replace(/(<meta property="og:locale" content=")[^"]*(")/, `$1${OG_LOCALE[m.lang]}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${escaparHtml(m.title)}$2`)
    .replace(
      /(<meta\s+property="og:description"\s+content=")[^"]*(")/,
      `$1${escaparHtml(m.description)}$2`,
    )
    .replace(
      /<div id="root"><\/div>/,
      `<div id="root" data-lang="${m.lang}">${markup}</div>`,
    )

  if (!html.includes(`data-lang="${m.lang}"`)) {
    throw new Error(`molde sem <div id="root"></div> vazio para ${m.lang}`)
  }
  if (!html.includes(`hreflang="pt"`)) {
    throw new Error(`hreflang não entrou no HTML de ${m.lang}`)
  }

  return { html, url, caminho: CAMINHO[m.lang], lang: m.lang, titulo: m.title }
}

const resultados = []
for (const lang of ['pt', 'en', 'es']) {
  const { html, ...info } = montar(lang)
  const destino = lang === 'pt' ? resolve(dist, 'index.html') : resolve(dist, lang, 'index.html')
  await mkdir(dirname(destino), { recursive: true })
  await writeFile(destino, html, 'utf8')
  resultados.push({ ...info, destino: destino.replace(`${raiz}/`, '') })
}

for (const r of resultados) {
  console.log(`${r.lang.padEnd(3)} ${String(r.titulo).slice(0, 60)}`)
  console.log(`    ${r.destino}  (${r.url})`)
}
