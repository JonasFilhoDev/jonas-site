import styles from './Rodape.module.css'

export default function Rodape() {
  return (
    <footer className={styles.foot}>
      <div className={styles.inner}>
        <p className={styles.copy}>
          © {new Date().getFullYear()} Jonas Filho Dev. Feito com React e
          deploy no ar.
        </p>
        <a
          className={styles.top}
          href="#home"
          aria-label="Voltar ao topo"
        >
          topo
          <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  )
}