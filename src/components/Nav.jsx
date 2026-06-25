import { useState, useEffect } from 'react'
import logo from '../assets/logo_filipac.png'
import { useLang } from '../context/LangContext'

export default function Nav() {
  const [scrolled, setScrolled] = useState(() => window.scrollY > 20)
  const { lang, setLang, t } = useLang()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <a href="#" className="nav-logo">
        <img src={logo} alt="Filipac" className="nav-logo-img" />
      </a>

      <div className="nav-right">
        <div className="lang-toggle" aria-label="Mudar idioma">
          <button className={`lang-opt${lang === 'pt' ? ' active' : ''}`} onClick={() => setLang('pt')}>PT</button>
          <span className="lang-sep">|</span>
          <button className={`lang-opt${lang === 'en' ? ' active' : ''}`} onClick={() => setLang('en')}>EN</button>
        </div>
        <a href="#contato" className="nav-cta">{t.nav.contact}</a>
      </div>
    </nav>
  )
}
