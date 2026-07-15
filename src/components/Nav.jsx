import { useState, useEffect } from 'react'
import { useLang } from '../context/LangContext'

export default function Nav() {
  const [scrolled, setScrolled] = useState(() => window.scrollY > 20)
  const { lang, setLang, t } = useLang()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    // Force mobile browsers to recalculate position:fixed layout on first paint
    const id = requestAnimationFrame(() => {
      window.scrollTo(window.scrollX, window.scrollY)
    })
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
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
