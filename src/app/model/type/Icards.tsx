export interface CardData {
  imgSrc: string;
  alt: string;
  title: string;
  location: string;
  btnText?: string;
  description?: string; // Adicionado opcional
  gallery?: string[];    // Adicionado opcional para aceitar a galeria de fotos
}