import { useLang } from '../context/LangContext'

export default function Footer() {
  const { t } = useLang()
  return (
    <footer>
      <p>{t.footer.copy}</p>
      <p style={{ marginTop: '0.4rem' }}>filipac.com.br</p>
    </footer>
  )
}
