"use client";
import { Star } from "lucide-react";
import { Testemunhos } from "@/app/model/data/Testemunho";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Testemunho.css";

export default function Testemunho() {
  return (
    <main className="Testemunho-container">
      <h1 className="Testemunho-title">Veja esses depoimentos</h1>

      <Swiper
        className="swiper-testemunhos" /* Classe adicionada aqui */
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        autoHeight={false}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 3 },
        }}
        style={{ width: "100vw", maxWidth: "90vw" }}
      >
        {Testemunhos.map((t) => (
          <SwiperSlide key={t.id} className="Testemunho-slide">
            <div className="stars">
              {Array.from({ length: t.rating }).map((_, index) => (
                <Star key={index} className="star-icon" />
              ))}
            </div>

            <p className="Testemunho-text">"{t.text}"</p>

            <div className="Testemunho-author">
              <img src={t.avatar} alt={t.name} className="author-avatar" />
              <div>
                <h4 className="author-name">{t.name}</h4>
                <p className="author-since">{t.since}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}