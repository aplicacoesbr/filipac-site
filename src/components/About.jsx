import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLang } from '../context/LangContext'

export default function About() {
  const leftRef = useScrollReveal()
  const rightRef = useScrollReveal()
  const { t } = useLang()
  const a = t.about

  return (
    <section className="about" id="sobre">
      <div className="section-inner">
        <div className="about-grid">
          <div ref={leftRef} className="reveal from-left">
            <div className="section-label">{a.label}</div>
            <h2 className="section-title">{a.title}</h2>
            <p>{a.p1}</p>
            <p>{a.p2}</p>
            <div className="about-points">
              {a.points.map(pt => (
                <div key={pt} className="about-point">
                  <span className="about-check">✓</span>
                  {pt}
                </div>
              ))}
            </div>
          </div>

          <div ref={rightRef} className="about-card reveal from-right">
            <div className="big-number">+20</div>
            <div className="big-label">{a.bigLabel}</div>
            <div className="about-stats-grid">
              {a.stats.map(s => (
                <div key={s.lbl} className={`about-stat${s.full ? ' about-stat-full' : ''}`}>
                  <div className="num">{s.num}</div>
                  <div className="lbl">{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
