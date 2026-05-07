import styles from './Hero.module.css'

const sociais = [
  { emoji: '💼', href: 'https://www.linkedin.com/in/jonasfilhodev/', label: 'LinkedIn' },
  { emoji: '🐙', href: 'https://github.com/JonasFilhoDev', label: 'GitHub' },
  { emoji: '📷', href: 'https://www.instagram.com/mutleyone/', label: 'Instagram' },
  { emoji: '✉️', href: 'mailto:jonasfilho1985@gmail.com', label: 'Email' },
  { emoji: '🏅', href: 'https://www.credly.com/users/jonas-filho.02d00765', label: 'Credly' },
  { emoji: '💬', href: 'https://wa.me/5533999367207?text=Olá Jonas, vi sua página e gostaria de saber mais sobre seu portfólio!', label: 'WhatsApp' },
]

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.content}>
        <span className={styles.tag}>[ DISPONÍVEL PARA OPORTUNIDADES ]</span>

        <h1 className={styles.title}>
          Olá, eu sou<br />
          <span className={styles.accent}>Jonas Filho</span>
        </h1>

        <p className={styles.sub}>
          Desenvolvedor FullStack em formação, apaixonado por criar
          soluções digitais que fazem a diferença.
        </p>

        <div className={styles.btns}>
          <button className={styles.btnPrimary} onClick={() => scrollTo('projetos')}>
            Ver Projetos
          </button>
          <a
            className={styles.btnOutline}
            href="https://wa.me/5533999367207?text=Olá Jonas, vi sua página e gostaria de saber mais sobre seu portfólio!"
            target="_blank"
            rel="noreferrer"
          >
            Falar Comigo
          </a>
        </div>

        <div className={styles.sociais}>
          {sociais.map((s) => (
            <a
              key={s.label}
              className={styles.socialIcon}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              title={s.label}
            >
              {s.emoji}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
