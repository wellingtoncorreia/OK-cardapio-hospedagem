import { MessageCircle, Instagram } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const whatsappLink = 'https://wa.me/5511999999999';
  const instagramLink = 'https://instagram.com/seuperfil';

  return (
    <footer className="footer-container">

      <div className="footer-content">

        {/* LADO ESQUERDO */}
        <div className="footer-info">

          <h2 className="footer-title">
            A Paraíso Ilha Comprida leva você às melhores casas da ilha!
          </h2>

          <p className="footer-subtitle">
            Clique em um dos botões abaixo para falar com nossos
            corretores ou acompanhar nossas novidades.
          </p>

          <div className="footer-contact-buttons">

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn whatsapp-btn"
            >
              <MessageCircle size={22} />
              <span>Conversar no WhatsApp</span>
            </a>

            <a
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn instagram-btn"
            >
              <Instagram size={22} />
              <span>Seguir no Instagram</span>
            </a>

          </div>

        </div>


        {/* LADO DIREITO */}
        <div className="footer-form-container">

          <h3 className="form-title">
            Ficou com dúvida? Mande uma mensagem
          </h3>

          <form className="contact-form">

            <div className="input-group">
              <input
                type="text"
                placeholder="Seu Nome"
                required
              />
            </div>

            <div className="input-group">
              <input
                type="email"
                placeholder="Seu E-mail"
                required
              />
            </div>

            <div className="input-group">
              <textarea
                placeholder="Como podemos ajudar?"
                rows={4}
                required
              />
            </div>

            <button
              type="submit"
              className="submit-btn"
            >
              Enviar Mensagem
            </button>

          </form>

        </div>

      </div>

    </footer>
  );
}