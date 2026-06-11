import { useScrollReveal } from '../hooks/useScrollReveal'

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
            <div className="contact-detail">
              <div className="icon">📧</div>
              <span>contato@filipac.com.br</span>
            </div>
            <div className="contact-detail">
              <div className="icon">📞</div>
              <span>(XX) XXXX-XXXX</span>
            </div>
            <div className="contact-detail">
              <div className="icon">📍</div>
              <span>Brasil</span>
            </div>
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
