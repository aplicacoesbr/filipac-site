import { useScrollReveal } from '../hooks/useScrollReveal'
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'

export default function Contact() {
  const leftRef = useScrollReveal()
  const rightRef = useScrollReveal()

  return (
    <section className="contact" id="contato">
      <div className="section-inner">
        <div className="contact-grid">
          <div ref={leftRef} className="contact-info reveal from-left">
            <div className="section-label">Contato</div>
            <h2 className="section-title">Fale com nossa equipe</h2>
            <p>
              Tem interesse no ExPlus ou precisa de uma solução personalizada?
              Preencha o formulário e nossa equipe entrará em contato em até 1 dia útil.
            </p>
            <a className="contact-detail" href="mailto:contato@filipac.com.br">
              <div className="icon"><MdEmail size={20} /></div>
              <span>contato@filipac.com.br</span>
            </a>
            <a className="contact-detail" href="https://wa.me/5524981119365" target="_blank" rel="noopener noreferrer">
              <div className="icon"><MdPhone size={20} /></div>
              <span>(24) 98111-9365</span>
            </a>
            <a className="contact-detail" href="https://www.google.com/maps/search/?api=1&query=R.+Monsaras,+19,+Magalhães+Bastos,+Rio+de+Janeiro,+RJ,+21735-050" target="_blank" rel="noopener noreferrer">
              <div className="icon"><MdLocationOn size={20} /></div>
              <span>R. Monsaras, 19 - Magalhães Bastos, Rio de Janeiro - RJ, 21735-050</span>
            </a>
          </div>

          <form
            ref={rightRef}
            className="contact-form reveal from-right"
            action="https://formspree.io/f/xdavwooa"
            method="POST"
          >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="nome">Nome completo *</label>
                <input type="text" id="nome" name="nome" placeholder="Seu nome" required />
              </div>
              <div className="form-group">
                <label htmlFor="empresa">Empresa *</label>
                <input type="text" id="empresa" name="empresa" placeholder="Nome da empresa" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">E-mail *</label>
                <input type="email" id="email" name="email" placeholder="email@empresa.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="telefone">Telefone</label>
                <input type="tel" id="telefone" name="telefone" placeholder="(XX) XXXXX-XXXX" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="interesse">Interesse</label>
              <select id="interesse" name="interesse">
                <option value="">Selecione...</option>
                <option value="explus">ExPlus 2000 — Compra</option>
                <option value="orcamento">Solicitar orçamento</option>
                <option value="tecnico">Suporte técnico</option>
                <option value="pecas">Peças de reposição</option>
                <option value="outro">Outro</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="mensagem">Mensagem</label>
              <textarea id="mensagem" name="mensagem" placeholder="Descreva sua necessidade ou dúvida..." />
            </div>
            <button type="submit" className="submit-btn">Enviar mensagem →</button>
            <p className="form-note">Respondemos em até 1 dia útil. Seus dados são tratados com confidencialidade.</p>
          </form>
        </div>
      </div>
    </section>
  )
}
