export const WHATS = 'https://wa.me/5533999367207'

export function waLink(msg) {
  return `${WHATS}?text=${encodeURIComponent(msg)}`
}

export const links = [
  { label: 'Projetos', href: '#projetos' },
  { label: 'Como trabalho', href: '#processo' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
]