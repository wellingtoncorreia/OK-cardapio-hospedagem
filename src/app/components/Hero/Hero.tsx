'use client'
import Btn from "../Btn/Btn";
import "./Hero.css";

export default function Hero() {
    // Função que faz a página rolar suavemente até os cards
    const handleScrollToCards = () => {
        const section = document.getElementById("cards-secao");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="section-hero">
            <h1>Descubra um mundo novo com as belezas da Ilha Comprida</h1>
            <p>Hospedagens exclusivas pacotes a partir de R$ 3.500,00</p>
            
            {/* O onClick aciona a rolagem suave */}
            <div onClick={handleScrollToCards} style={{ cursor: 'pointer' }}>
                <Btn name="Me aventurar" />
            </div>
        </section>
    );
}