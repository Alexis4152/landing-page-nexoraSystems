import SectionHeading from "../ui/SectionHeading";
import { testimonials } from "../../data/content";
import "./Testimonials.css";

export default function Testimonials() {
  return (
    <section id="testimonios" className="section testimonials">
      <div className="container">
        <SectionHeading
          eyebrow="Testimonios"
          title="Negocios que ya dejaron atrás lo manual"
        />

        <div className="testimonials__grid">
          {testimonials.map((t) => (
            <figure className="testimonials__card" key={t.name}>
              <blockquote>“{t.quote}”</blockquote>
              <figcaption>
                <span className="testimonials__name">{t.name}</span>
                <span className="testimonials__role">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
