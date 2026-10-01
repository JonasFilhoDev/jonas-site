import styles from './Processo.module.css'

const etapas = [
  {
    n: '01',
    t: 'Entendo o problema antes de escolher a ferramenta',
    d: 'Qualquer projeto começa por saber o que precisa acontecer, não por decidir se uso React ou CSS. A escolha da stack é consequência da restrição: volume de dados, quem vai manter, o que já existe rodando.',
  },
  {
    n: '02',
    t: 'Construo a parte que dá problema primeiro',
    d: 'Autenticação, banco, upload e deploy são onde o software quebra. Faço esses dois dias de trabalho antes de polir tela, porque descobrir um problema de permissão depois da interface pronta custa dez vezes mais.',
  },
  {
    n: '03',
    t: 'Deploy é parte do trabalho, não o final',
    d: 'Se não está no ar, não está pronto. Versiono, publico, verifico que a versão no servidor é a que está no meu disco. Foi assim que a Central de Operações deixou de ser um projeto local.',
  },
]

export default function Processo() {
  return (
    <section className={styles.section} id="processo">
      <div className={styles.inner}>
        <div className={styles.head}>
          <p className={styles.kicker}>Como eu trabalho</p>
          <h2 className={styles.title}>
            Três decisões que se repetem em cada projeto
          </h2>
        </div>

        <ol className={styles.steps}>
          {etapas.map((e) => (
            <li key={e.n} className={styles.step}>
              <span className={styles.n}>{e.n}</span>
              <h3 className={styles.stepTitle}>{e.t}</h3>
              <p className={styles.stepText}>{e.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}