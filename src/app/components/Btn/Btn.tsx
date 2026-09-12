import { ArrowUpRight } from "lucide-react";
import "./Btn.css";

export default function Btn(props: { name: string }) {
    return (
        <button className="adventure-button">
            {/* Cápsula de texto com os 4 cantos arredondados */}
            <span className="btn-text">{props.name}</span>
            
            {/* O Pescoço (Bridge) - Curvas ajustadas para um pescoço mais grosso */}
            <svg className="btn-bridge" viewBox="0 0 40 50" width="40" height="50">
                {/* 
                  M 0 5: Inicia a curva superior mais perto da borda
                  Q 20 15: O ponto central desce menos, deixando o meio mais grosso
                  A base também sobe menos, fechando a forma com uma espessura central de 20px 
                */}
                <path d="M 0 5 Q 20 15 40 5 L 40 45 Q 20 35 0 45 Z" />
            </svg>

            {/* Círculo com o ícone */}
            <div className="icon-circle">
                <ArrowUpRight color="white" strokeWidth={2.5} size={22} />
            </div>
        </button>
    );
}