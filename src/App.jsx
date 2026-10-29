import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import Projetos from './components/Projetos/Projetos'
import Ia from './components/Ia/Ia'
import Processo from './components/Processo/Processo'
import Sobre from './components/Sobre/Sobre'
import Contato from './components/Contato/Contato'
import Rodape from './components/Rodape/Rodape'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Projetos />
        <Ia />
        <Processo />
        <Sobre />
        <Contato />
      </main>
      <Rodape />
    </>
  )
}