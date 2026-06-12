import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLang } from '../context/LangContext'
import { MdLocalFireDepartment, MdScience, MdBolt, MdWater, MdOpacity, MdPrecisionManufacturing } from 'react-icons/md'

const ICONS = [
  <MdLocalFireDepartment size={36} />,
  <MdScience size={36} />,
  <MdBolt size={36} />,
  <MdWater size={36} />,
  <MdOpacity size={36} />,
  <MdPrecisionManufacturing size={36} />,
]

function AppCard({ icon, title, desc, delay }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className={`app-card reveal d${delay}`}>
      <span className="app-icon">{icon}</span>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  )
}

export default function Applications() {
  const headerRef = useScrollReveal()
  const { t } = useLang()
  const a = t.applications

  return (
    <section className="applications" id="aplicacoes">
      <div className="section-inner">
        <div ref={headerRef} className="section-header-center reveal">
          <div className="section-label">{a.label}</div>
          <h2 className="section-title">{a.title}</h2>
          <p className="section-desc">{a.desc}</p>
        </div>
        <div className="app-grid">
          {a.items.map((item, i) => (
            <AppCard key={i} icon={ICONS[i]} title={item.title} desc={item.desc} delay={(i % 3) + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
