import { useScrollReveal } from '../hooks/useScrollReveal'
import { MdLocalFireDepartment, MdScience, MdBolt, MdWater, MdOpacity, MdPrecisionManufacturing } from 'react-icons/md'

const apps = [
  { icon: <MdLocalFireDepartment size={36} />, title: 'Emulsão a Gás', desc: 'Embalagem precisa de emulsão a gás com controle rigoroso de pressão e temperatura.' },
  { icon: <MdScience size={36} />, title: 'Emulsão Sensibilizada', desc: 'Compatível com emulsão sensibilizada com microesferas, garantindo integridade do produto.' },
  { icon: <MdBolt size={36} />, title: 'ANFO', desc: 'Embalagem de ANFO com velocidade e precisão, mantendo especificações técnicas.' },
  { icon: <MdWater size={36} />, title: 'WaterGel / Slurry', desc: 'Processamento de produtos aquosos e semiviscosos com vedação perfeita.' },
  { icon: <MdOpacity size={36} />, title: 'Produtos Viscosos', desc: 'Adaptável para diversos produtos viscosos e semiviscosos além de explosivos.' },
  { icon: <MdPrecisionManufacturing size={36} />, title: 'Projetos Especiais', desc: 'Soluções customizadas para necessidades específicas da sua linha de produção.' },
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

  return (
    <section className="applications" id="aplicacoes">
      <div className="section-inner">
        <div ref={headerRef} className="section-header-center reveal">
          <div className="section-label">Versatilidade</div>
          <h2 className="section-title">Aplicações do ExPlus</h2>
          <p className="section-desc">
            Equipamento desenvolvido para trabalhar com uma ampla gama de produtos explosivos e viscosos.
          </p>
        </div>

        <div className="app-grid">
          {apps.map((a, i) => (
            <AppCard key={a.title} {...a} delay={(i % 3) + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
