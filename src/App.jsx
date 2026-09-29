import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Nav from './components/Nav'
import ScrollProgress from './components/ScrollProgress'
import Strengths from './components/Strengths'
import Work from './components/Work'
import { useReveal } from './hooks/useReveal'

export default function App() {
  useReveal()

  return (
    <>
      <ScrollProgress />
      <Nav />

      <main>
        <Hero />
        <Marquee />
        <Work />
        <About />
        <Strengths />
      </main>

      <Contact />

      <div className="noise" aria-hidden="true" />
    </>
  )
}
