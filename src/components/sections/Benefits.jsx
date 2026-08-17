import SectionHeading from "../ui/SectionHeading";
import { benefits } from "../../data/content";
import "./Benefits.css";

export default function Benefits() {
  return (
    <section id="beneficios" className="section benefits">
      <div className="container">
        <SectionHeading
          eyebrow="Beneficios"
          title="Lo que cambia en tu negocio al automatizar con Nexora"
          description="No vendemos software por vender: conectamos tecnología con resultados de negocio medibles."
        />

        <div className="benefits__grid">
          {benefits.map((b, i) => (
            <div className="benefits__card" key={b.title}>
              <span className="benefits__index">{String(i + 1).padStart(2, "0")}</span>
              <h3>{b.title}</h3>
              <p>{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
