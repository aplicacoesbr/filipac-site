import expluspng from '../assets/explus2000.png'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid-bg" />
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Chub Packaging Technology
          </div>

          <h1>
            Máquinas que<br />
            <span className="accent">transformam</span><br />
            indústrias
          </h1>

          <p className="hero-desc">
            Equipamentos de alta performance para embalagem de explosivos e produtos viscosos.
            Tecnologia desenvolvida para segurança e eficiência máximas na sua linha de produção.
          </p>

          <div className="hero-buttons">
            <a href="#contato" className="btn-primary">
              Solicitar Proposta →
            </a>
            <a href="#produto" className="btn-secondary">
              Conhecer o ExPlus
            </a>
          </div>

          <div className="machine-badge">
            <div>
              <div className="model">ExPlus 2000</div>
              <div className="tag">Produto Principal</div>
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
