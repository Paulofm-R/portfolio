import React, { useEffect, useState } from "react";
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
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const navigate = useNavigate();
  const location = useLocation();

  // Efeito para encolher a Navbar ao baixar a tela
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setIsScrolled(true);
      else setIsScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Efeito para detetar a seção ativa no scroll (IntersectionObserver)
  useEffect(() => {
    if (location.pathname !== "/") return;

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // Verifica se o utilizador chegou mesmo ao fundo da página
      const caughtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight;

      console.log(caughtBottom);
      if (caughtBottom) {
        setActiveTo("#contactSection");
        return; // Sai mais cedo e ignora o observer normal
      }

      // Se não estiver no fundo, segue a lógica normal do observer
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTo(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    links.forEach((link) => {
      const el = document.querySelector(link.to);
      if (el) observer.observe(el);
    });

    // 3. Ouvir também o evento de scroll para apanhar o momento exato em que bate no fundo
    const handleScrollBottomCheck = () => {
      const caughtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 10;
      if (caughtBottom) {
        setActiveTo("#contactSection");
      }
    };

    window.addEventListener("scroll", handleScrollBottomCheck);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScrollBottomCheck);
    };
  }, [location.pathname]);

  // Handler quando clicam num link do menu
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    to: string,
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
    <nav
      className={`navBar ${isScrolled ? "shrunk" : ""}`}
      aria-label="Main navigation"
    >
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
