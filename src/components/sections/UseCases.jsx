import SectionHeading from "../ui/SectionHeading";
import { useCases } from "../../data/content";
import "./UseCases.css";

export default function UseCases() {
  return (
    <section id="casos-de-uso" className="section usecases">
      <div className="container">
        <SectionHeading
          eyebrow="Casos de uso"
          title="Automatización aplicada a tu operación diaria"
          description="Ejemplos reales de lo que podemos implementar en tu negocio desde las primeras semanas."
        />

        <div className="usecases__grid">
          {useCases.map((item) => (
            <div className="usecases__card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
