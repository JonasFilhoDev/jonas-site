import styles from './Sobre.module.css'

const fatos = [
  { k: 'Onde', v: 'Minas Gerais' },
  { k: 'Formação', v: 'Faculdade Pitágoras Anhanguera Unopar' },
  { k: 'Estudo', v: 'DevClub' },
  { k: 'Curso', v: 'Ciências da Computação' },
  { k: 'Stack', v: 'Node · React · TypeScript' },
]

export default function Sobre() {
  return (
    <section className={styles.section} id="sobre">
      <div className={styles.inner}>
        <div className={styles.photoCol}>
          <div className={styles.photo}>
            <img src="/img/jonas.jpg" alt="Jonas Filho" width="1080" height="1080" />
          </div>
          <p className={styles.photoNote}>Foto de capa.</p>
        </div>

        <div className={styles.text}>
          <p className={styles.kicker}>Sobre</p>
          <h2 className={styles.title}>
            Aprendizado em público, do jeito que dá para manter
          </h2>
          <div className={styles.prose}>
            <p>
              Comecei nos exercícios do curso e eles continuam no GitHub: o
              histórico de como alguém evolui diz mais do que uma lista de
              front-end. O que me levou adiante foi querer ver as coisas
              funcionando fora do meu notebook, e é por isso que a Central de
              Operações existe.
            </p>
          </div>

          <dl className={styles.facts}>
            {fatos.map((f) => (
              <div key={f.k} className={styles.fact}>
                <dt>{f.k}</dt>
                <dd>{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}