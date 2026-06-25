import { useScrollReveal } from '../hooks/useScrollReveal'
import { MdEmail, MdLocationOn, MdChevronRight } from 'react-icons/md'
import { useLang } from '../context/LangContext'

export default function Contact() {
  const leftRef = useScrollReveal()
  const rightRef = useScrollReveal()
  const { t } = useLang()
  const c = t.contact
  const f = c.fields

  return (
    <section className="contact" id="contato">
      <div className="section-inner">
        <div className="contact-grid">
          <div ref={leftRef} className="contact-info reveal from-left">
            <div className="section-label">{c.label}</div>
            <h2 className="section-title">{c.title}</h2>
            <p>{c.desc}</p>

            <a className="contact-detail" href="mailto:contato@filipac.com.br">
              <div className="icon"><MdEmail size={20} /></div>
              <span>contato@filipac.com.br</span>
              <MdChevronRight size={18} style={{ marginLeft: 'auto', opacity: 0.4 }} />
            </a>
            <a className="contact-detail" href="https://www.google.com/maps/search/?api=1&query=R.+Monsaras,+19,+Magalhães+Bastos,+Rio+de+Janeiro,+RJ,+21735-050" target="_blank" rel="noopener noreferrer">
              <div className="icon"><MdLocationOn size={20} /></div>
              <span>R. Monsaras, 19 - Magalhães Bastos, Rio de Janeiro - RJ, 21735-050</span>
              <MdChevronRight size={18} style={{ marginLeft: 'auto', opacity: 0.4, flexShrink: 0 }} />
            </a>
          </div>

          <form ref={rightRef} className="contact-form reveal from-right" action="https://formspree.io/f/xdavwooa" method="POST">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="nome">{f.name}</label>
                <input type="text" id="nome" name="nome" placeholder={f.namePh} required />
              </div>
              <div className="form-group">
                <label htmlFor="empresa">{f.company}</label>
                <input type="text" id="empresa" name="empresa" placeholder={f.companyPh} required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">{f.email}</label>
              <input type="email" id="email" name="email" placeholder={f.emailPh} required />
            </div>
            <div className="form-group">
              <label htmlFor="interesse">{f.interest}</label>
              <select id="interesse" name="interesse">
                <option value="">{f.interestPh}</option>
                {c.options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="mensagem">{f.message}</label>
              <textarea id="mensagem" name="mensagem" placeholder={f.messagePh} />
            </div>
            <button type="submit" className="submit-btn">{c.submit}</button>
            <p className="form-note">{c.note}</p>
          </form>
        </div>
      </div>
    </section>
  )
}
