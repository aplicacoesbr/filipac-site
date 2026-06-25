import { MdLanguage } from 'react-icons/md'
import { useLang } from '../context/LangContext'

export default function LangFab() {
  const { lang, setLang } = useLang()

  return (
    <div className="lang-fab">
      <MdLanguage size={16} className="lang-fab-icon" />
      <button
        className={`lang-fab-opt${lang === 'pt' ? ' active' : ''}`}
        onClick={() => setLang('pt')}
      >
        PT
      </button>
      <span className="lang-fab-sep">|</span>
      <button
        className={`lang-fab-opt${lang === 'en' ? ' active' : ''}`}
        onClick={() => setLang('en')}
      >
        EN
      </button>
    </div>
  )
}
