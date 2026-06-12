import logo from '../assets/logo_filipac.png'
import { useLang } from '../context/LangContext'

export default function Footer() {
  const { t } = useLang()
  return (
    <footer>
      <div className="footer-logo">
        <img src={logo} alt="Filipac" className="footer-logo-img" />
      </div>
      <p>{t.footer.copy}</p>
      <p style={{ marginTop: '0.4rem' }}>filipac.com.br</p>
    </footer>
  )
}
