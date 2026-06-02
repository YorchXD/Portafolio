// src/components/Logo.tsx
import { getI18n, type Language } from '../locales';

export const Logo = ({ lang }: { lang: Language }) => {
  const t = getI18n(lang);
  return (
    <a 
      href="/" 
      className="group flex items-center focus:outline-none select-none"
      aria-label={"YS | " + t.logo.ing + " " + t.logo.digital}
    >
      {/* ISOTIPO SVG POLIGONAL / DIGITAL */}
      {/* Añadido 'overflow-visible' para evitar el recorte de las ondas de radar */}
      <svg 
        className="w-10 h-10 lg:w-12 lg:h-12 transition-transform duration-300 ease-out group-hover:scale-105 flex-shrink-0 overflow-visible" 
        viewBox="0 0 240 200" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ANIMACIÓN CSS OPTIMIZADA */}
        <defs>
          <style>{`
            @keyframes pulseRadar {
              0% { 
                transform: scale(1); 
                opacity: 0.9; 
              }
              100% { 
                transform: scale(2.8); 
                opacity: 0; 
              }
            }
            .radar-wave {
              animation: pulseRadar 2.2s cubic-bezier(0.21, 0.61, 0.35, 1) infinite;
            }
          `}</style>
        </defs>

        {/* LETRA 'S' RECTANGULAR */}
        <path 
          d="M165 65L125 35L100 70L175 125L135 165L90 130" 
          stroke="#16A34A" 
          strokeWidth="20" 
          strokeLinecap="square" 
          strokeLinejoin="miter"
          className="transition-colors duration-300"
        />

        {/* 'Y' FANTASMA (Sombra/Reflejo de fondo) */}
        <path 
          d="M133 40L90 100V165" 
          stroke="#c8e4d3" 
          strokeWidth="20" 
          strokeLinecap="square" 
          strokeLinejoin="miter"
          className="transition-colors duration-300" 
        />

        {/* LETRA 'Y' PRINCIPAL (Gris Grafito) */}
        <path 
          d="M35 35L81 95L125 35M81 95V165" 
          stroke="#334155" 
          strokeWidth="20" 
          strokeLinecap="square" 
          strokeLinejoin="miter"
          className="transition-colors duration-300"
        />

        {/* Fondo sutil verde claro para el punto de estado */}
        <circle cx="175" cy="70" r="19" fill="#89e2ac" opacity="0.4" />

        {/* --- ONDAS CONCÉNTRICAS DE PULSO (Se renderizan abajo del punto central) --- */}
        {/* El radio inicial se fijó en 12 para que el escalado no rompa el trazo */}
        <circle cx="175" cy="70" r="12" stroke="#D97706" strokeWidth="1.5" fill="none" className="radar-wave" style={{ transformOrigin: '175px 70px' }} />
        <circle cx="175" cy="70" r="12" stroke="#D97706" strokeWidth="1.5" fill="none" className="radar-wave" style={{ transformOrigin: '175px 70px', animationDelay: '0.7s' }} />
        <circle cx="175" cy="70" r="12" stroke="#D97706" strokeWidth="1.5" fill="none" className="radar-wave" style={{ transformOrigin: '175px 70px', animationDelay: '1.4s' }} />

        {/* --- INDICADOR ÁMBAR CENTRAL --- */}
        <circle cx="175" cy="70" r="14" fill="#D97706" />

        {/* --- LÍNEA DIVISORA VERTICAL EN SVG --- */}
        <line 
          x1="220" 
          y1="35" 
          x2="220" 
          y2="165" 
          stroke="#94A3B8" 
          strokeWidth="6" 
          strokeLinecap="round"
          className="hidden lg:block transition-colors duration-300"
        />
      </svg>

      {/* TEXTO CORPORATIVO TAILWIND */}
      <div className="hidden lg:flex flex-col justify-center ml-1 -mt-1">
        <span className="text-base font-black tracking-wider text-slate-800 uppercase transition-colors duration-300">
          {t.logo.ing}
        </span>
        <span className="text-xs font-bold tracking-[0.38em] text-green-600 uppercase -mt-1">
          {t.logo.digital}
        </span>
      </div>
    </a>
  );
};

export default Logo;