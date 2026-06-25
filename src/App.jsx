import { LangProvider } from './context/LangContext'
import Nav from './components/Nav'
import Maintenance from './components/Maintenance'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LangFab from './components/LangFab'

export default function App() {
  return (
    <LangProvider>
      <Nav />
      <Maintenance />
      <Contact />
      <Footer />
      <LangFab />
    </LangProvider>
  )
}
