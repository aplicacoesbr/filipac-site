import { useScrollReveal } from '../hooks/useScrollReveal'

const points = [
  'Documentação técnica completa (operação, diagramas, manutenção)',
  'Suporte técnico especializado pós-venda',
  'Treinamento de operadores incluído',
  'Peças de reposição disponíveis',
]

const miniStats = [
  { num: '+50', lbl: 'Máquinas entregues' },
  { num: 'Global', lbl: 'Presença internacional' },
  { num: '100%', lbl: 'Suporte técnico' },
]

export default function About() {
  const leftRef = useScrollReveal()
  const rightRef = useScrollReveal()

  return (
    <section className="about" id="sobre">
      <div className="section-inner">
        <div className="about-grid">
          <div ref={leftRef} className="reveal from-left">
            <div className="section-label">Quem Somos</div>
            <h2 className="section-title">Sobre a Filipac</h2>
            <p>
              A Filipac é especialista no desenvolvimento e fabricação de máquinas de embalagem
              para a indústria de explosivos. Com décadas de experiência, entregamos equipamentos
              que unem performance, segurança e confiabilidade.
            </p>
            <p>
              Nossa tecnologia ExPlus é referência no mercado, com clientes em diversas partes do
              mundo. Cada máquina é projetada para operar em condições industriais exigentes,
              com suporte técnico completo.
            </p>
            <div className="about-points">
              {points.map(pt => (
                <div key={pt} className="about-point">
                  <span className="about-check">✓</span>
                  {pt}
                </div>
              ))}
            </div>
          </div>

          <div ref={rightRef} className="about-card reveal from-right">
            <div className="big-number">+20</div>
            <div className="big-label">anos transformando indústrias</div>
            <div className="about-stats-grid">
              {miniStats.map(s => (
                <div key={s.lbl} className="about-stat">
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
