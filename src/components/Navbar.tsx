// src/components/Navbar.tsx
import { useState, useEffect } from 'react';
import { getI18n, type Language } from '../locales';
import { Logo } from './Logo'; 

export const Navbar = ({ currentPath, lang }: { currentPath: string; lang: Language }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const t = getI18n(lang);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.about, href: "/about" },
    { name: t.nav.skills, href: "/skills" },
    { name: t.nav.experience, href: "/workExperience" },
    { name: t.nav.education, href: "/education" },
    { name: t.nav.project, href: "/projects" },
    { name: t.nav.contact, href: "/contact" },
  ];

  const currentLink = navLinks.find(link => link.href === currentPath);
  const pageTitle = currentLink ? currentLink.name : "Menú";

  return (
    <header className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out nav-header-responsive
      ${isScrolled
        ? 'scrolled-nav px-4 flex justify-center'
        : 'top-nav px-4 flex justify-center'
      }`}
    >
      {/* INYECCIÓN DE CSS CRÍTICO: Control absoluto a los 825px */}
      <style dangerouslySetInnerHTML={{
        __html: `
        /* ========================================== */
        /* COMPORTAMIENTO ESCRITORIO (Desde 826px hacia arriba) */
        /* ========================================== */
        @media (min-width: 826px) {
          .ssr-mobile-only { display: none !important; }
          .ssr-desktop-only { display: flex !important; }
          
          .nav-header-responsive { top: 1.5rem; width: 100%; }
          .nav-header-responsive.scrolled-nav {
            top: 0 !important;
            background-color: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(24px);
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
          }
        }

        /* ========================================== */
        /* COMPORTAMIENTO MÓVIL/HAMBURGUESA (Hasta 825px) */
        /* ========================================== */
        @media (max-width: 825px) {
          .ssr-desktop-only { display: none !important; }
          .ssr-mobile-only { display: flex !important; }
          
          .nav-header-responsive {
            top: 0 !important;
            width: 100% !important;
            background-color: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(24px);
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
          }

          /* FUERZA AL LOGO A SER MINIMALISTA ESCONDIENDO EL TEXTO INTERNO Y LA LÍNEA */
          .mobile-logo-container line,
          .mobile-logo-container div {
            display: none !important;
          }

          .mobile-menu-list:not(.is-open) {
            display: none !important;
          }
          .mobile-toggle-btn {
            right: 1.5rem !important;
            left: auto !important;
          }
        }
      `}} />

      <nav className="transition-all duration-500 ease-in-out max-w-7xl mx-auto flex items-center justify-between px-6 py-2 rounded-full w-full relative min-h-[56px]">

        {/* ========================================================================= */}
        {/* 1. CONTROLES EXCLUSIVOS PARA MÓVIL (<= 825px)                            */}
        {/* ========================================================================= */}

        {/* LOGO MINIMALISTA EN MÓVIL: Posicionado de forma fija a la izquierda */}
        <div className="absolute left-6 top-[8px] lg:hidden ssr-mobile-only mobile-logo-container z-50">
          <Logo lang={lang} />
        </div>

        {/* BOTÓN HAMBURGUESA: Mantiene su posición limpia a la derecha */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute right-6 top-[8px] w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md text-gray-600 hover:text-green-600 focus:outline-none transition-all duration-300 z-50 ssr-mobile-only mobile-toggle-btn"
          aria-label="Toggle Menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* TÍTULO DINÁMICO (Oculto cuando el menú móvil se despliega) */}
        <span className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-bold text-gray-700 uppercase tracking-widest whitespace-nowrap ssr-mobile-only
          ${isOpen
            ? 'opacity-0 pointer-events-none scale-95'
            : 'opacity-100 scale-100 transition-all duration-300'
          }`}
        >
          {pageTitle}
        </span>

        {/* Lista desplegable móvil */}
        <ul className={`items-center gap-1 flex-col w-full pt-14 pb-2 ssr-mobile-only mobile-menu-list ${isOpen ? "flex is-open" : "hidden"}`}>
          {navLinks.map((link) => {
            const isActive = currentPath === link.href || (currentPath === '' && link.href === '/');
            return (
              <li key={link.href} className="w-full text-center">
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block text-xs sm:text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 ${
                    isActive ? "bg-green-600 text-white shadow-md scale-105" : "text-gray-600 hover:text-green-600 hover:bg-white/50"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>

        {/* ========================================================================= */}
        {/* 2. ESTRUCTURA DE ESCRITORIO (> 825px)                                    */}
        {/* ========================================================================= */}
        <div className="items-center justify-between w-full ssr-desktop-only hidden gap-4">
          <div className="flex-shrink-0">
            <Logo lang={lang} />
          </div>

          <ul className="flex items-center gap-1 flex-nowrap">
            {navLinks.map((link) => {
              const isActive = currentPath === link.href || (currentPath === '' && link.href === '/');
              return (
                <li key={link.href} className="flex-shrink-0">
                  <a
                    href={link.href}
                    className={`text-xs sm:text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 whitespace-nowrap ${
                      isActive ? "bg-green-600 text-white shadow-md scale-105" : "text-gray-600 hover:text-green-600 hover:bg-white/50"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;