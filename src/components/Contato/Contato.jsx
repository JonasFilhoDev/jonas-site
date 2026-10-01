import { Icon } from '../Icon'
import { waLink } from '../../data'
import styles from './Contato.module.css'

const canais = [
  {
    icon: 'whatsapp',
    nome: 'WhatsApp',
    valor: 'Responder no mesmo dia',
    href: waLink(
      'Olá Jonas, vi seu portfólio e gostaria de conversar sobre uma oportunidade.',
    ),
    externo: true,
  },
  {
    icon: 'mail',
    nome: 'E-mail',
    valor: 'jonasfilho1985@gmail.com',
    href: 'mailto:jonasfilho1985@gmail.com',
    externo: false,
  },
  {
    icon: 'linkedin',
    nome: 'LinkedIn',
    valor: 'jonasfilhodev',
    href: 'https://www.linkedin.com/in/jonasfilhodev/',
    externo: true,
  },
  {
    icon: 'github',
    nome: 'GitHub',
    valor: 'JonasFilhoDev',
    href: 'https://github.com/JonasFilhoDev',
    externo: true,
  },
]

export default function Contato() {
  return (
    <section className={styles.section} id="contato">
      <div className={styles.inner}>
        <p className={styles.kicker}>Contato</p>
        <h2 className={styles.title}>
          Se a sua vaga ou projeto precisa de alguém que entrega o que está no ar, vamos conversar.
        </h2>
        <p className={styles.sub}>
          Prefiro WhatsApp, mas qualquer canal funciona. Se você tem um
          problema técnico em mente, escreva o que ele é em uma frase. Para mim
          vale mais do que um currículo.
        </p>

        <ul className={styles.channels}>
          {canais.map((c) => (
            <li key={c.nome}>
              <a href={c.href} target={c.externo ? '_blank' : undefined} rel="noreferrer">
                <span className={styles.chIcon}>
                  <Icon name={c.icon} size={19} />
                </span>
                <span className={styles.chText}>
                  <strong>{c.nome}</strong>
                  <em>{c.valor}</em>
                </span>
                {c.externo && <Icon name="external" size={16} />}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}