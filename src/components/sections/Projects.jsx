import { useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import { projects } from "../../data/content";
import { getWhatsappLink } from "../../utils/whatsapp";
import "./Projects.css";

export default function Projects() {
  const [activeId, setActiveId] = useState(projects[0].id);
  const active = projects.find((p) => p.id === activeId);

  return (
    <section id="soluciones" className="section projects">
      <div className="container">
        <SectionHeading
          eyebrow="Nuestras soluciones"
          title="Un sistema listo para cada tipo de negocio"
          description="Elige tu giro y descubre cómo Nexora te ayuda a vender más, organizarte mejor y dejar atrás lo manual."
        />

        <div className="projects__tabs" role="tablist" aria-label="Soluciones Nexora">
          {projects.map((p) => (
            <button
              key={p.id}
              id={`tab-${p.id}`}
              role="tab"
              aria-selected={p.id === activeId}
              aria-controls={`panel-${p.id}`}
              className={`projects__tab ${p.id === activeId ? "projects__tab--active" : ""}`}
              onClick={() => setActiveId(p.id)}
            >
              {p.name}
            </button>
          ))}
        </div>

        <div
          key={active.id}
          id={`panel-${active.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${active.id}`}
          className="projects__panel"
        >
          <div className="projects__intro">
            <span className="projects__category">{active.category}</span>
            <h3>{active.name}</h3>
            <p className="projects__tagline">{active.tagline}</p>
            <p>{active.description}</p>
            <blockquote className="projects__highlight">{active.highlight}</blockquote>
            <p className="projects__ideal">
              <strong>Ideal para:</strong> {active.idealFor}
            </p>
            <Button
              as="a"
              href={getWhatsappLink(
                `Hola, me interesa la solución de ${active.name} de Nexora Systems. ¿Me pueden dar más información?`
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Quiero {active.name}
            </Button>
          </div>

          <div className="projects__details">
            <div className="projects__block">
              <h4>Qué incluye</h4>
              <ul>
                {active.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
            <div className="projects__block projects__block--benefits">
              <h4>Cómo te beneficia</h4>
              <ul>
                {active.benefits.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
