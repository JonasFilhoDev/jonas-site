import styles from './Contato.module.css'

const canais = [
  { emoji: '💼', label: 'LinkedIn',  val: 'jonasfilhodev',            href: 'https://www.linkedin.com/in/jonasfilhodev/' },
  { emoji: '🐙', label: 'GitHub',    val: 'JonasFilhoDev',            href: 'https://github.com/JonasFilhoDev' },
  { emoji: '✉️', label: 'Email',     val: 'jonasfilho1985@gmail.com', href: 'mailto:jonasfilho1985@gmail.com' },
  { emoji: '📲', label: 'WhatsApp',  val: 'Enviar mensagem',          href: 'https://wa.me/5533999367207?text=Olá Jonas, vi sua página e gostaria de saber mais sobre seu portfólio!' },
  { emoji: '📷', label: 'Instagram', val: '@mutleyone',               href: 'https://www.instagram.com/mutleyone/' },
  { emoji: '🏅', label: 'Credly',    val: 'Certificações',            href: 'https://www.credly.com/users/jonas-filho.02d00765' },
]

export default function Contato() {
  return (
    <section className={styles.section} id="contato">
      <div className={styles.inner}>
        <div className={styles.label}>// contato</div>
        <h2 className={styles.title}>Vamos conversar?</h2>
        <p className={styles.sub}>
          Estou aberto a oportunidades, freelas e colaborações.
          Fique à vontade para me chamar por qualquer canal.
        </p>
        <div className={styles.card}>
          <div className={styles.grid}>
            {canais.map((c) => (
              <a
                key={c.label}
                className={styles.canal}
                href={c.href}
                target="_blank"
                rel="noreferrer"
              >
                <div className={styles.icon}>{c.emoji}</div>
                <div>
                  <div className={styles.canalLabel}>{c.label}</div>
                  <div className={styles.canalVal}>{c.val}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
