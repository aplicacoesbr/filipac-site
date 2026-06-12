import { useState, useEffect } from 'react'
import logo from '../assets/logo_filipac.png'
import { useLang } from '../context/LangContext'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang, setLang, t } = useLang()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <a href="#" className="nav-logo">
        <img src={logo} alt="Filipac" className="nav-logo-img" />
      </a>

      <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
        <li><a href="#produto" onClick={close}>{t.nav.product}</a></li>
        <li><a href="#aplicacoes" onClick={close}>{t.nav.applications}</a></li>
        <li><a href="#sobre" onClick={close}>{t.nav.about}</a></li>
        <li><a href="#contato" className="nav-cta" onClick={close}>{t.nav.contact}</a></li>
        <li>
          <button
            className="lang-btn"
            onClick={() => { setLang(lang === 'pt' ? 'en' : 'pt'); close() }}
            aria-label="Mudar idioma"
          >
            {lang === 'pt' ? 'EN' : 'PT'}
          </button>
        </li>
      </ul>

      <div className="nav-right">
        <button
          className="lang-btn"
          onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
          aria-label="Mudar idioma"
        >
          {lang === 'pt' ? 'EN' : 'PT'}
        </button>
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Abrir menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
