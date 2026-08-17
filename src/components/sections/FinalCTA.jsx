import Button from "../ui/Button";
import { getWhatsappLink } from "../../utils/whatsapp";
import "./FinalCTA.css";

export default function FinalCTA() {
  return (
    <section className="section final-cta">
      <div className="container final-cta__card">
        <h2>
          Tu negocio puede vender más y operar mejor,{" "}
          <span className="text-gradient">empezando esta semana</span>
        </h2>
        <p>
          Agenda tu diagnóstico gratuito de automatización y descubre en 30 minutos dónde tu
          negocio está perdiendo tiempo y dinero.
        </p>
        <Button as="a" href={getWhatsappLink()} target="_blank" rel="noopener noreferrer" size="lg">
          Reserva tu llamada gratuita
        </Button>
      </div>
    </section>
  );
}
