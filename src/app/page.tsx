import Card from "./components/Cards/Cards";
import Footer from "./components/Footer/Footer";
import Galeria from "./components/Galeria/Galeria";
import Hero from "./components/Hero/Hero";
import Testemunho from "./components/Testemunho/Testemunho";
import PlanoViagem from "./components/PlanoViagem/PlanoViagem";


export default function Home() {
  return (
    <main>
      <Hero />
      <Card  />
      <PlanoViagem />
      <Testemunho />
      <Galeria />
      <Footer />

    </main>
  );
}