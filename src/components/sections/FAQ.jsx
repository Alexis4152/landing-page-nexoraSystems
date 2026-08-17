import { useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import { faqs } from "../../data/content";
import "./FAQ.css";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section faq">
      <div className="container">
        <SectionHeading eyebrow="Preguntas frecuentes" title="Resolvemos tus dudas" />

        <div className="faq__list">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div className={`faq__item ${isOpen ? "faq__item--open" : ""}`} key={item.question}>
                <button
                  className="faq__question"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <span className="faq__icon">{isOpen ? "−" : "+"}</span>
                </button>
                <div className="faq__answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
