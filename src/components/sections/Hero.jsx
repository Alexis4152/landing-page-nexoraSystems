import Button from "../ui/Button";
import { hero } from "../../data/content";
import { getWhatsappLink } from "../../utils/whatsapp";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="section-eyebrow">{hero.eyebrow}</span>
          <h1>
            Haz que tu negocio venda más{" "}
            <span className="text-gradient">sin contratar más personal</span>
          </h1>
          <p className="hero__subtitle">{hero.subtitle}</p>

          <div className="hero__cta">
            <Button as="a" href={getWhatsappLink()} target="_blank" rel="noopener noreferrer" size="lg">
              {hero.ctaPrimary}
            </Button>
            <Button as="a" href="#como-funciona" variant="secondary" size="lg">
              {hero.ctaSecondary}
            </Button>
          </div>
          <p className="hero__note">{hero.note}</p>
        </div>

        <div className="hero__visual">
          <DashboardMock />
        </div>
      </div>
    </section>
  );
}

function DashboardMock() {
  return (
    <div className="dash">
      <div className="dash__card dash__card--main">
        <div className="dash__row dash__row--top">
          <div className="dash__brand-dot" />
          <span>Resumen general</span>
        </div>

        <div className="dash__stats">
          <div className="dash__stat">
            <span className="dash__stat-label">Ventas del día</span>
            <span className="dash__stat-value">$24,850</span>
            <span className="dash__stat-delta">+12.4%</span>
          </div>
          <div className="dash__stat">
            <span className="dash__stat-label">Órdenes</span>
            <span className="dash__stat-value">52</span>
          </div>
          <div className="dash__stat">
            <span className="dash__stat-label">Clientes activos</span>
            <span className="dash__stat-value">320</span>
          </div>
        </div>

        <div className="dash__chart">
          <svg viewBox="0 0 320 110" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(79,195,247,0.45)" />
                <stop offset="100%" stopColor="rgba(79,195,247,0)" />
              </linearGradient>
            </defs>
            <path
              d="M0 80 L40 65 L80 72 L120 45 L160 55 L200 30 L240 40 L280 18 L320 26 L320 110 L0 110 Z"
              fill="url(#chart-fill)"
            />
            <path
              d="M0 80 L40 65 L80 72 L120 45 L160 55 L200 30 L240 40 L280 18 L320 26"
              fill="none"
              stroke="#4fc3f7"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className="dash__card dash__card--float dash__card--orders">
        <span className="dash__float-label">Pedido #1042</span>
        <span className="dash__float-value">$1,250.00</span>
        <span className="dash__badge dash__badge--success">Pagado</span>
      </div>

      <div className="dash__card dash__card--float dash__card--ai">
        <span className="dash__ai-icon">✦</span>
        <div>
          <span className="dash__float-label">Lead calificado por IA</span>
          <span className="dash__float-sub">Alta probabilidad de cierre</span>
        </div>
      </div>
    </div>
  );
}
