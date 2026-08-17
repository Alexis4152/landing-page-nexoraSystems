import Logo from "../ui/Logo";
import { nav, footerServices, site } from "../../data/content";
import { getWhatsappLink } from "../../utils/whatsapp";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Logo />
          <p>{site.tagline}</p>
          <p className="footer__contact">
            WhatsApp:{" "}
            <a href={getWhatsappLink()} target="_blank" rel="noopener noreferrer">
              733 153 4406
            </a>
          </p>
        </div>

        <div className="footer__col">
          <h4>Navegación</h4>
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Servicios</h4>
          <ul>
            {footerServices.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Fundadores</h4>
          <p className="footer__founders">
            Arturo Pineda Vázquez
            <br />
            Alexis Cuauhtémoc Luna Gutiérrez
          </p>
          <p className="footer__founders-role">Ingenieros en Sistemas Computacionales</p>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {year} Nexora Systems. Todos los derechos reservados.</span>
        <span className="footer__slogan">Soluciones inteligentes · Resultados reales · Negocios que crecen</span>
      </div>
    </footer>
  );
}
