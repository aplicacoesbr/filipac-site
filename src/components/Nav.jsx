import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <a href="#" className="nav-logo">FILI<span>PAC</span></a>

      <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
        <li><a href="#produto" onClick={close}>Produto</a></li>
        <li><a href="#aplicacoes" onClick={close}>Aplicações</a></li>
        <li><a href="#sobre" onClick={close}>Sobre</a></li>
        <li><a href="#contato" className="nav-cta" onClick={close}>Fale Conosco</a></li>
      </ul>

      <button
        className={`hamburger${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(v => !v)}
        aria-label="Abrir menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}
