import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import Projetos from './components/Projetos/Projetos'
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
        <Processo />
        <Sobre />
        <Contato />
      </main>
      <Rodape />
    </>
  )
}