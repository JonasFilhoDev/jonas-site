export const WHATS = 'https://wa.me/5533999367207'

export function waLink(msg) {
  return `${WHATS}?text=${encodeURIComponent(msg)}`
}
