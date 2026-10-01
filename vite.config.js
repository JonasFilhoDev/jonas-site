import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Host liberado só para o preview local/túnel. `true` deixa qualquer host
// falar com o dev server, o que é o padrão do Vite — restrito aqui porque
// este preview fica exposto por um túnel durante a revisão da v2.
const allowedHosts = [
  'localhost',
  '127.0.0.1',
  'seasons-logged-schemes-updated.trycloudflare.com',
]

export default defineConfig({
  plugins: [react()],
  server: { host: true, allowedHosts },
  preview: { host: true, allowedHosts },
})