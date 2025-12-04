import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type LinkItem = { to: string; label: string };

const links: LinkItem[] = [
  { to: "#homeSection", label: "Home" },
  { to: "#aboutSection", label: "About" },
  { to: "#educationSection", label: "Education" },
  { to: "#projectsSection", label: "Projects" },
  { to: "#skillsSection", label: "Skills" },
  { to: "#contactSection", label: "Contact" },
];

const NavBar: React.FC = () => {
  const [activeTo, setActiveTo] = useState<string>("#homeSection");

  const navRef = useRef<HTMLElement | null>(null);
  const lastY = useRef(0);
  const ticking = useRef(false);
  const threshold = 10; //px antes de considerar "scolled"

  const navigate = useNavigate();
  const location = useLocation();

  // toggla classe scrolled conforme scroll
  useEffect(() => {
    const onScroll = () => {
      lastY.current = window.scrollY;
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const scrolled = lastY.current > threshold;
          navRef.current?.classList.toggle("scrolled", scrolled);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // IntersectionOberver para hihliht do link activo
  useEffect(() => {
    const sectionElements = links
      .map((l) => document.querySelector(l.to))
      .filter(Boolean) as HTMLElement[];

    if (!sectionElements.length) return;

    // calcula a altura da navbar
    const navHeight = navRef.current ? navRef.current.offsetHeight : 0;

    const observer = new IntersectionObserver(
      (entries) => {
        // obtem as secções intersectando e escolhe a mais "visível"
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) setActiveTo(`#${visible[0].target.id}`);
      },
      {
        root: null,
        // top negativo = ignoira a área da navbar fixa
        rootMargin: `-${navHeight + navHeight / 2}px 0px -40% 0px`,
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    sectionElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Handler quando clicam num link do menu
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    to: string
  ) => {
    // se o utilizador pretender abrir em nova aba (middle click / ctrl/cmd), deixa o default acontecer:
    if (e.metaKey || e.ctrlKey || e.button === 1) return;

    e.preventDefault();

    // estamos já na página inicial?
    if (location.pathname === "/") {
      // scroll suave para a secção
      const el = document.querySelector(to) as HTMLElement | null;
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        // actualiza o hash sem forçar reload (opcional)
        history.replaceState(null, "", to);
      } else {
        // se não existir, podemos actualizar o location.hash e o IntersectionObserver cuidará do resto
        history.replaceState(null, "", to);
      }
    } else {
      // não estamos na "/" → navegar para a home com hash
      // navegar para "/#aboutSection" — no carregamento da home, adiciona um effect para ler location.hash e scrollear
      navigate(`/${to}`);
    }
  };

  return (
    <nav ref={navRef} className="navBar" aria-label="Main navigation">
      <span className="name">Paulo Rodrigues</span>
      <ul className="nav-link">
        {links.map(({ to, label }) => (
          <li key={to}>
            <a
              href={to}
              onClick={(e) => handleLinkClick(e, to)}
              className={activeTo === to ? "selectNavBar" : undefined}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
