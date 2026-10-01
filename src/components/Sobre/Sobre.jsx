import styles from './Sobre.module.css'

const fatos = [
  { k: 'Onde', v: 'Minas Gerais' },
  { k: 'Formação', v: 'Ciências da Computação' },
  { k: 'Estudo', v: 'DevClub' },
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
          <p className={styles.photoNote}>
            Foto de capa. Moro em Minas, vim de Taboão da Serra (SP).
          </p>
        </div>

        <div className={styles.text}>
          <p className={styles.kicker}>Sobre</p>
          <h2 className={styles.title}>
            Aprendizado em público, do jeito que dá para manter
          </h2>
          <div className={styles.prose}>
            <p>
              Estudo FullStack pelo DevClub e Ciências da Computação na
              universidade. Os primeiros projetos foram os exercícios do
              curso, e continuam no GitHub: o histórico de como alguém evolui
              diz mais do que uma lista de front-end.
            </p>
            <p>
              O que me levou adiante foi querer ver as coisas funcionando fora
              do meu notebook. Daí a Central de Operações: um servidor meu, com
              HTTPS, autenticação e publicação automatizada, que eu uso todo dia
              para organizar o que faço. Começou como necessidade de não perder
              o controle do que estava em andamento e foi resolvida com o que
              eu vinha aprendendo no curso.
            </p>
            <p>
              Sou Corinthians. No código funciona do mesmo jeito: prefiro o
              defeito que apareceu no ar e me mostrou o caminho para um
              defeito que eu ainda não testei.
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