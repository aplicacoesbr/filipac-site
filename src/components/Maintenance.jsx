import { MdBuildCircle, MdArrowDownward } from 'react-icons/md'
import { useLang } from '../context/LangContext'

export default function Maintenance() {
  const { t } = useLang()
  const m = t.maintenance

  return (
    <section className="maintenance">
      <div className="maintenance-grid-bg" />
      <div className="maintenance-content">
        <div className="maintenance-icon">
          <MdBuildCircle size={64} />
        </div>
        <div className="maintenance-badge">
          <span className="maintenance-badge-dot" />
          {m.badge}
        </div>
        <h1>
          {m.title1} <span className="accent">{m.title2}</span>
        </h1>
        <a href="#contato" className="btn-primary">
          {m.cta}
          <MdArrowDownward size={18} />
        </a>
      </div>
    </section>
  )
}
