import { MdBuildCircle, MdArrowDownward } from 'react-icons/md'

export default function Maintenance() {
  return (
    <section className="maintenance">
      <div className="maintenance-grid-bg" />
      <div className="maintenance-content">
        <div className="maintenance-icon">
          <MdBuildCircle size={64} />
        </div>
        <div className="maintenance-badge">
          <span className="maintenance-badge-dot" />
          EM MANUTENÇÃO
        </div>
        <h1>
          Site em <span className="accent">Manutenção</span>
        </h1>
        <p className="maintenance-desc">
          Estamos trabalhando para melhorar nossa plataforma e trazer novidades em breve.<br />
          Agradecemos a sua paciência.
        </p>
        <a href="#contato" className="btn-primary">
          Entre em contato
          <MdArrowDownward size={18} />
        </a>
      </div>
    </section>
  )
}
