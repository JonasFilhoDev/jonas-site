import { useEffect, useState } from 'react'
import { Icon } from '../Icon'
import styles from './Escritos.module.css'

const USUARIO_DEVTO = 'jonasfilhodev'

/* Lista de reserva: entra se a API do dev.to não responder.
   O que está aqui é o último estado conhecido, com data e URL reais. */
const ARTIGOS = [
  {
    title: 'JSON ids above 2^53 arrive rounded, and a reviver only fixes the leaf',
    published_at: '2026-10-28T00:00:00Z',
    url: 'https://dev.to/jonasfilhodev/json-ids-above-253-arrive-rounded-and-a-reviver-only-fixes-the-leaf-55g3',
  },
  {
    title: 'Your asset URL returned 200. It was serving index.html.',
    published_at: '2026-10-26T00:00:00Z',
    url: 'https://dev.to/jonasfilhodev/your-asset-url-returned-200-it-was-serving-indexhtml-4p56',
  },
  {
    title: "Four bugs my publisher's validator could not see",
    published_at: '2026-10-23T00:00:00Z',
    url: 'https://dev.to/jonasfilhodev/four-bugs-my-publishers-validator-could-not-see-p4f',
  },
  {
    title: 'Three ways a sync job reports success while reading nothing',
    published_at: '2026-10-21T00:00:00Z',
    url: 'https://dev.to/jonasfilhodev/three-ways-a-sync-job-reports-success-while-reading-nothing-44pm',
  },
  {
    title: 'Your vision model cannot see a broken layout. Measure the pixels instead.',
    published_at: '2026-10-19T00:00:00Z',
    url: 'https://dev.to/jonasfilhodev/your-vision-model-cannot-see-a-broken-layout-measure-the-pixels-instead-15c1',
  },
]

const MESES = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez']

function dataCurta(iso) {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return ''
  return `${d.getUTCDate()} ${MESES[d.getUTCMonth()]} ${d.getUTCFullYear()}`
}

export default function Escritos() {
  const [artigos, setArtigos] = useState(ARTIGOS)

  useEffect(() => {
    let ativo = true
    fetch(`https://dev.to/api/articles?username=${USUARIO_DEVTO}&per_page=5`)
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error('sem resposta'))))
      .then((dados) => {
        if (ativo && Array.isArray(dados) && dados.length > 0) setArtigos(dados)
      })
      .catch(() => {})
    return () => {
      ativo = false
    }
  }, [])

  return (
    <section className={styles.section} id="escritos">
      <div className={styles.inner}>
        <header className={styles.head}>
          <p className={styles.kicker}>Escritos técnicos</p>
          <h2 className={styles.title}>
            O que quebrou enquanto eu construía, escrito no detalhe
          </h2>
          <p className={styles.sub}>
            Publico no dev.to, em inglês, o problema que apareceu e como
            descobri a causa. É o mesmo tipo de conferência que faço antes de
            publicar qualquer coisa: medir, não supor.
          </p>
        </header>

        <ul className={styles.list}>
          {artigos.map((a) => (
            <li key={a.url}>
              <a href={a.url} target="_blank" rel="noreferrer">
                <span className={styles.date}>{dataCurta(a.published_at)}</span>
                <span className={styles.name}>{a.title}</span>
                <Icon name="external" size={15} />
              </a>
            </li>
          ))}
        </ul>

        <a
          className={styles.more}
          href={`https://dev.to/${USUARIO_DEVTO}`}
          target="_blank"
          rel="noreferrer"
        >
          <span>
            <em>Todos os artigos no dev.to</em>
            Escrevo sobre o que estou construindo e sobre o que quebra no caminho.
          </span>
          <Icon name="arrow" size={18} />
        </a>
      </div>
    </section>
  )
}
