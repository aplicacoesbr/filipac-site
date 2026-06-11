import { useScrollReveal } from '../hooks/useScrollReveal'

const features = [
  { icon: '⚡', title: 'Alta Produtividade', desc: 'Até 120 cartuchos por minuto em operação contínua' },
  { icon: '🛡️', title: 'Segurança', desc: 'Projetado com rigorosos padrões de segurança para explosivos' },
  { icon: '🎛️', title: 'HMI Intuitivo', desc: 'Interface touchscreen com controle completo de parâmetros' },
  { icon: '🔧', title: 'Fácil Manutenção', desc: 'Acesso facilitado a componentes e documentação técnica completa' },
]

const specs = [
  { key: 'Modelo', val: 'ExPlus 2000' },
  { key: 'Tecnologia', val: 'Chub Packaging' },
  { key: 'Tipo de embalagem', val: 'Filme flexível / Cartucho cilíndrico' },
  { key: 'Fechamento', val: 'Clipe metálico (wire clip)' },
  { key: 'Interface', val: 'HMI Touchscreen' },
  { key: 'Aplicação', val: 'Explosivos e produtos viscosos' },
  { key: 'Fabricante', val: 'Filipac' },
]

export default function Product() {
  const leftRef = useScrollReveal()
  const rightRef = useScrollReveal()

  return (
    <section className="product" id="produto">
      <div className="section-inner">
        <div className="product-grid">
          <div ref={leftRef} className="reveal from-left">
            <div className="section-label">Produto Principal</div>
            <h2 className="section-title">ExPlus 2000<br />Chub Packaging</h2>
            <p className="section-desc">
              Equipamento versátil e de alta performance para embalagem em filme flexível,
              gerando cartuchos cilíndricos com clipe em cada extremidade.
            </p>
            <div className="product-features">
              {features.map((f, i) => (
                <div key={f.title} className={`feature-card d${i + 1}`}>
                  <span className="icon">{f.icon}</span>
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div ref={rightRef} className="product-specs reveal from-right">
            <h3>Especificações Técnicas — ExPlus 2000</h3>
            {specs.map(s => (
              <div key={s.key} className="spec-row">
                <span className="spec-key">{s.key}</span>
                <span className="spec-val">{s.val}</span>
              </div>
            ))}
            <div style={{ marginTop: '1.5rem' }}>
              <a href="#contato" className="btn-primary" style={{ display: 'block', textAlign: 'center' }}>
                Solicitar ficha técnica completa
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
