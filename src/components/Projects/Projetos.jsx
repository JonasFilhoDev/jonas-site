import styles from './Projetos.module.css'

const projetos = [
  {
    emoji: '💱',
    title: 'Conversor de Moedas',
    desc: 'Aplicação web que converte valores entre diferentes moedas. Lógica de conversão construída em JavaScript puro com interface simples e intuitiva.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    href: 'https://jonasfilhodev.github.io/Projeto---Conversor-de-Moedas/',
    wip: false,
  },
  {
    emoji: '⏱️',
    title: 'Cronômetro',
    desc: 'Cronômetro funcional com controles de iniciar, pausar e resetar. Projeto focado em manipulação de tempo e eventos do DOM com JavaScript.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    href: 'https://jonasfilhodev.github.io/Projeto---Cronometro/',
    wip: false,
  },
  {
    emoji: '🏀',
    title: 'Página da NBA',
    desc: 'Página informativa sobre a NBA com dados sobre times, jogadores e história da liga.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    href: 'https://jonasfilhodev.github.io/NBA-Dev/',
    wip: false,
  },
  {
    emoji: '✊',
    title: 'Jokenpô',
    desc: 'Jogo clássico de Pedra, Papel e Tesoura contra a máquina com placar e animações. Lógica construída em JavaScript puro.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    href: 'https://jonasfilhodev.github.io/Projeto--Jokenpo/',
    wip: false,
  },
  {
    emoji: '🚌',
    title: 'Deuzinho Transportes',
    desc: 'Aplicação web para compra de passagens de onibus. Projeto construido com React, CRUD e consumo de API.',
    tags: ['React', 'Styled-Components', 'Node.js', 'Express', 'MongoDB'],
    href: 'https://frontend-iota-opal-zqdoejb5v8.vercel.app/',
    wip: false,
  },
]

export default function Projetos() {
  return (
    <section className={styles.section} id="projetos">
      <div className={styles.inner}>
        <div className={styles.label}>// projetos</div>
        <h2 className={styles.title}>O que eu construí</h2>

        <div className={styles.grid}>
          {projetos.map((p) => (
            <div key={p.title} className={styles.card}>
              <div className={styles.cardImg}>
                <span>{p.emoji}</span>
                <div className={styles.overlay} />
                {p.wip && <div className={styles.wipBadge}>EM BREVE</div>}
              </div>
              <div className={styles.cardBody}>
                <div className={styles.tags}>
                  {p.tags.map((t) => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>
                <h3 className={styles.cardTitle}>{p.title}</h3>
                <p className={styles.desc}>{p.desc}</p>
                {p.href ? (
                  <a
                    className={styles.link}
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ver Projeto →
                  </a>
                ) : (
                  <span className={styles.linkDisabled}>Em breve →</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.githubWrap}>
          <a
            className={styles.githubBtn}
            href="https://github.com/JonasFilhoDev"
            target="_blank"
            rel="noreferrer"
          >
            Ver mais no GitHub →
          </a>
        </div>
      </div>
    </section>
  )
}
