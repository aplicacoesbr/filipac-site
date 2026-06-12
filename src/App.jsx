import { LangProvider } from './context/LangContext'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Product from './components/Product'
import Applications from './components/Applications'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <LangProvider>
      <Nav />
      <Hero />
      <Stats />
      <Product />
      <Applications />
      <About />
      <Contact />
      <Footer />
    </LangProvider>
  )
}
