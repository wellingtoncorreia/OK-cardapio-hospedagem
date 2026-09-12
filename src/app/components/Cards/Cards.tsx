'use client'
import { useState } from "react";
import Btn from "../Btn/Btn";
import "../Cards/Cards.css";
import { cards } from "../../model/data/cardData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Card() {
    const [selectedCard, setSelectedCard] = useState<any>(null);

    const openModal = (card: any) => setSelectedCard(card);
    const closeModal = () => setSelectedCard(null);

    const getWhatsAppLink = (card: any) => {
        const phone = "5511999999999"; 
        const message = `Olá! Tenho interesse no imóvel: ${card.title} localizado em ${card.location}.`;
        return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    };

    return (
        <section className="container-card">
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={10}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    1024: { slidesPerView: 2 },
                }}
                style={{ width: "100%" }}
            >
                {cards?.map((card, index) => (
                    <SwiperSlide key={index}>
                        <div className="card">
                            <img src={card.imgSrc} alt={card.alt} />
                            <div className="card-content">
                                <div className="info">
                                    <h3>{card.title}</h3>
                                    <span>{card.location}</span>
                                </div>
                                <div onClick={() => openModal(card)} style={{ cursor: 'pointer' }}>
                                    <Btn name={card.btnText || "SAIBA MAIS"} />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {selectedCard && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>&times;</button>
                        
                        <div className="modal-layout">
                            <div className="modal-gallery">
                                <Swiper 
                                    modules={[Pagination, Navigation]} 
                                    pagination={{ clickable: true }} 
                                    navigation 
                                    style={{ width: '100%', height: '100%' }}
                                >
                                    {(selectedCard.gallery || [selectedCard.imgSrc]).map((img: string, i: number) => (
                                        <SwiperSlide key={i}>
                                            <img src={img} alt={`Galeria ${i}`} className="modal-img" />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>

                            <div className="modal-info">
                                <div className="modal-header">
                                    <h2>{selectedCard.title}</h2>
                                    <p className="modal-location">{selectedCard.location}</p>
                                </div>
                                
                                <div className="modal-body">
                                    <p><strong>Detalhes do Imóvel:</strong></p>
                                    <p>{selectedCard.description || "Descrição incrível deste imóvel. Perfeito para suas férias! Tem piscina, churrasqueira e fica pé na areia."}</p>
                                </div>

                                <div className="modal-footer">
                                    <a 
                                        href={getWhatsAppLink(selectedCard)} 
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