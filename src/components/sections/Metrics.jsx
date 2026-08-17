import { metrics } from "../../data/content";
import "./Metrics.css";

export default function Metrics() {
  return (
    <section className="metrics section--tight">
      <div className="container metrics__grid">
        {metrics.map((m) => (
          <div className="metrics__item" key={m.label}>
            <span className="metrics__value text-gradient">{m.value}</span>
            <span className="metrics__label">{m.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
