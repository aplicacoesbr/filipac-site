import { useScrollReveal } from '../hooks/useScrollReveal'
import { useCountUp } from '../hooks/useCountUp'
import { useLang } from '../context/LangContext'

function StatItem({ prefix = '', target, suffix = '', label, delay }) {
  const { ref, count } = useCountUp(target)
  const revealRef = useScrollReveal()
  return (
    <div ref={el => { ref.current = el; revealRef.current = el }} className={`stat-item reveal d${delay}`}>
      <div className="stat-number">{prefix}{count}{suffix}</div>
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
  const { t } = useLang()
  return (
    <div className="stats">
      <div className="stats-grid">
        <StatItem prefix="+" target={20} label={t.stats.experience} delay={1} />
        <StatItem prefix="+" target={50} label={t.stats.machines} delay={2} />
        <StatItem target={120} label={t.stats.speed} delay={3} />
        <StatText value={t.stats.global} label={t.stats.globalLabel} delay={4} />
      </div>
    </div>
  )
}
