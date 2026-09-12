'use client'
import { useState } from 'react';
import { destinos } from '../../model/data/destinos';
import './Galeria.css';
import { ArrowUpRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Galeria() {
  const [selectedDestino, setSelectedDestino] = useState(null);

  const openModal = (destino:any) => setSelectedDestino(destino);
  const closeModal = () => setSelectedDestino(null);

  const getWhatsAppLink = (destino:any) => {
    const phone = "5511999999999"; // Substitua pelo seu número
    const message = `Olá! Gostaria de saber mais sobre o destino: ${destino.titulo}.`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section className="secao-destinos">
      <h2>Escolha o seu destino</h2>
      
      <div className="container-galeria">
        {destinos.map((destino, index) => (
          <div 
            key={index} 
            className="galeria"
            style={{ backgroundImage: `url(${destino.imagem})` }}
          >
            <div className="galeria-conteudo">
              <h3>{destino.titulo}</h3>
              <p>{destino.descricao}</p>
              <button onClick={() => openModal(destino)}>
                SAIBA MAIS
                <span className="seta-icone"><ArrowUpRight color="white" strokeWidth={2.5} size={20} /></span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL ESTILO INSTAGRAM */}
      {selectedDestino && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            
            <div className="modal-layout">
              {/* Esquerda: Galeria de Imagens do Modal */}
              <div className="modal-gallery">
                <Swiper 
                  modules={[Pagination, Navigation]} 
                  pagination={{ clickable: true }} 
                  navigation 
                  style={{ width: '100%', height: '100%' }}
                >
                  {/* Usa a matriz 'galeria' se existir, ou cai de volta para a 'imagem' de capa */}
                  {(selectedDestino.galeria || [selectedDestino.imagem]).map((img, i) => (
                    <SwiperSlide key={i}>
                      <img src={img} alt={`${selectedDestino.titulo} - Imagem ${i + 1}`} className="modal-img" />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Direita: Informações e Contato */}
              <div className="modal-info">
                <div className="modal-header">
                  <h2>{selectedDestino.titulo}</h2>
                </div>
                
                <div className="modal-body">
                  <p><strong>Detalhes:</strong></p>
                  <p>{selectedDestino.descricao}</p>
                </div>

                <div className="modal-footer">
                  <a 
                    href={getWhatsAppLink(selectedDestino)} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-whatsapp"
                  >
                    Consultar no WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}