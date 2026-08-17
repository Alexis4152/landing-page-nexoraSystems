import SectionHeading from "../ui/SectionHeading";
import { problems } from "../../data/content";
import "./Problems.css";

export default function Problems() {
  return (
    <section className="section problems">
      <div className="container">
        <SectionHeading
          eyebrow="El costo de seguir igual"
          title="Así es como las tareas manuales frenan tu crecimiento"
          description="Si algo de esto te suena familiar, tu negocio está listo para automatizar."
        />

        <div className="problems__grid">
          {problems.map((p) => (
            <div className="problems__card" key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
