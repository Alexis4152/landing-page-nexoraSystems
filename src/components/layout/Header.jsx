import { useEffect, useState } from "react";
import Logo from "../ui/Logo";
import Button from "../ui/Button";
import { nav } from "../../data/content";
import { getWhatsappLink } from "../../utils/whatsapp";
import "./Header.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="container header__inner">
        <a href="#top" className="header__logo">
          <Logo />
        </a>

        <nav className={`header__nav ${menuOpen ? "header__nav--open" : ""}`}>
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <Button
            as="a"
            href={getWhatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="header__cta-mobile"
          >
            Reserva una llamada
          </Button>
        </nav>

        <div className="header__actions">
          <Button as="a" href={getWhatsappLink()} target="_blank" rel="noopener noreferrer">
            Reserva una llamada
          </Button>
          <button
            className={`header__burger ${menuOpen ? "header__burger--open" : ""}`}
            aria-label="Abrir menú"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
