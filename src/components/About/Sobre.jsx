import styles from './Sobre.module.css'

const chips = ['📍 Minas Gerais', '🎓 Ciências da Computação', '⚽ Esportes', '💻 FullStack']

export default function Sobre() {
  return (
    <section className={styles.sobre} id="sobre">
      <div className={styles.inner}>
        <div className={styles.imgWrap}>
          <div className={styles.imgFrame}>
            <div className={styles.imgInner}>
              <img
                src="https://jonasfilhodev.github.io/Minha-Pagina/img/Jonas.jpg"
                alt="Foto de Jonas Filho"
                onError={(e) => { e.target.style.display = 'none' }}
              />
            </div>
          </div>
          <div className={styles.badge}>
            <div className={styles.badgeLabel}>STATUS</div>
            <div className={styles.badgeVal}>● Sempre pronto pro desafio!</div>
          </div>
        </div>

        <div className={styles.text}>
          <div className={styles.label}>// sobre mim</div>
          <h2 className={styles.title}>Quem é Jonas?</h2>
          <p className={styles.p}>
            Nascido em Taboão da Serra (SP), atualmente morando em Minas Gerais.
            Sou um desenvolvedor em formação, apaixonado por tecnologia e fã de
            esportes! 🖤🤍
          </p>
          <p className={styles.p}>
            Cursando Ciências da Computação pela Universidade Pitágoras Unopar
            Anhanguera e programação FullStack pelo{' '}
            <a href="https://aulas.devclub.com.br//" target="_blank" rel="noreferrer" className={styles.link}>
              DevClub
            </a>
            . Foco atual em desenvolvimento web com projetos práticos nas ferramentas
            mais utilizadas no mercado.
          </p>
          <p className={styles.p}>
            Meu objetivo é criar soluções digitais que facilitem a vida das
            pessoas e continuar evoluindo na stack de programação.
          </p>
          <div className={styles.chips}>
            {chips.map((c) => (
              <span key={c} className={styles.chip}>{c}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
