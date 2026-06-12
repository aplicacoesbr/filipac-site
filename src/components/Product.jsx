import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLang } from '../context/LangContext'
import { MdBolt, MdSecurity, MdTouchApp, MdBuild } from 'react-icons/md'

const ICONS = [<MdBolt size={28} />, <MdSecurity size={28} />, <MdTouchApp size={28} />, <MdBuild size={28} />]

export default function Product() {
  const leftRef = useScrollReveal()
  const rightRef = useScrollReveal()
  const { t } = useLang()
  const p = t.product

  return (
    <section className="product" id="produto">
      <div className="section-inner">
        <div className="product-grid">
          <div ref={leftRef} className="reveal from-left">
            <div className="section-label">{p.label}</div>
            <h2 className="section-title">{p.title1}<br />{p.title2}</h2>
            <p className="section-desc">{p.desc}</p>
            <div className="product-features">
              {p.features.map((f, i) => (
                <div key={i} className={`feature-card d${i + 1}`}>
                  <span className="icon">{ICONS[i]}</span>
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div ref={rightRef} className="product-specs reveal from-right">
            <h3>{p.specsTitle}</h3>
            {p.specs.map(s => (
              <div key={s.key} className="spec-row">
                <span className="spec-key">{s.key}</span>
                <span className="spec-val">{s.val}</span>
              </div>
            ))}
            <div style={{ marginTop: '1.5rem' }}>
              <a href="#contato" className="btn-primary" style={{ display: 'block', textAlign: 'center' }}>
                {p.specsCta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
