import { useScrollReveal } from '../hooks/useScrollReveal'
import { useCountUp } from '../hooks/useCountUp'

function StatItem({ prefix = '', target, suffix = '', label, delay }) {
  const { ref, count } = useCountUp(target)
  const revealRef = useScrollReveal()

  return (
    <div
      ref={(el) => {
        ref.current = el
        revealRef.current = el
      }}
      className={`stat-item reveal d${delay}`}
    >
      <div className="stat-number">
        {prefix}{count}{suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

function StatText({ value, label, delay }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className={`stat-item reveal d${delay}`}>
      <div className="stat-number">{value}</div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

export default function Stats() {
  return (
    <div className="stats">
      <div className="stats-grid">
        <StatItem prefix="+" target={20} label="Anos de experiência" delay={1} />
        <StatItem prefix="+" target={50} label="Máquinas entregues" delay={2} />
        <StatItem target={750} suffix="+" label="Embalagens/hora" delay={3} />
        <StatText value="Global" label="Clientes internacionais" delay={4} />
      </div>
    </div>
  )
}
