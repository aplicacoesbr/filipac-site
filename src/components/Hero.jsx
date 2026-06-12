import expluspng from '../assets/explus2000.png'
import { useLang } from '../context/LangContext'

export default function Hero() {
  const { t } = useLang()

  return (
    <section className="hero">
      <div className="hero-grid-bg" />
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            {t.hero.badge}
          </div>

          <h1>
            {t.hero.line1}<br />
            <span className="accent">{t.hero.line2}</span><br />
            {t.hero.line3}
          </h1>

          <p className="hero-desc">{t.hero.desc}</p>

          <div className="hero-buttons">
            <a href="#contato" className="btn-primary">{t.hero.cta1}</a>
            <a href="#produto" className="btn-secondary">{t.hero.cta2}</a>
          </div>

          <div className="machine-badge">
            <div>
              <div className="model">ExPlus 2000</div>
              <div className="tag">{t.hero.modelTag}</div>
            </div>
          </div>
        </div>

        <div className="hero-image-wrap">
          <img src={expluspng} alt="Filipac ExPlus 2000 - Chub Packaging Technology" />
        </div>
      </div>
    </section>
  )
}
