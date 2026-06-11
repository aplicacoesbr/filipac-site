import logo from '../assets/filipac.png'

export default function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        <img src={logo} alt="Filipac" className="footer-logo-img" />
      </div>
      <p>© 2025 Filipac. Todos os direitos reservados.</p>
      <p style={{ marginTop: '0.4rem' }}>filipac.com.br</p>
    </footer>
  )
}
