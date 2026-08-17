import { mission, vision } from "../../data/content";
import "./MissionVision.css";

export default function MissionVision() {
  return (
    <section className="section mission section--tight">
      <div className="container mission__grid">
        <div className="mission__card">
          <span className="section-eyebrow">Misión</span>
          <p>{mission}</p>
        </div>
        <div className="mission__card">
          <span className="section-eyebrow">Visión</span>
          <p>{vision}</p>
        </div>
      </div>
    </section>
  );
}
