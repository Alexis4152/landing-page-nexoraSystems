import SectionHeading from "../ui/SectionHeading";
import { steps } from "../../data/content";
import "./HowItWorks.css";

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="section how">
      <div className="container">
        <SectionHeading
          eyebrow="Cómo funciona"
          title="De diagnóstico a automatización en 3 pasos"
          description="Un proceso simple, pensado para que veas resultados sin fricción operativa."
        />

        <div className="how__grid">
          {steps.map((step) => (
            <div className="how__card" key={step.number}>
              <span className="how__number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
