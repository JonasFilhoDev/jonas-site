import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        © 2026 <span className={styles.accent}>Jonas Filho Dev</span> — Feito com dedicação, paciência e muito café ☕
      </p>
    </footer>
  )
}
