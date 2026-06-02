import { useScrollReveal } from '../hook/UseScrollReveal';
import { getI18n, type Language } from "../locales"


export const WorkExperience = ({ lang }: { lang: Language }) => {
  useScrollReveal();
  const t = getI18n(lang);
  const totalItems = t.experiences.items.length;

  return (
    <section className="container mx-auto px-4 max-w-6xl">

      <div className="fixed bottom-6 right-6 opacity-[0.07] pointer-events-none z-0 select-none hidden lg:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="300"
          height="300"
          viewBox="0 0 24 24"
          fill="none"
          stroke="oklch(62.7% 0.194 149.214)" // Tu color verde exacto
          strokeWidth="0.7" // Estilo lineal fino para marca de agua elegante
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-[bounce_14s_infinite_ease-in-out]" // Flotación sutil de fondo
        >
          {/* Cuerpo del maletín */}
          <rect x="3" y="8" width="18" height="12" rx="2" />

          {/* Tapa / Solapa superior */}
          <path d="M3 10V8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2" />

          {/* Manija del maletín */}
          <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />

          {/* Símbolo de insignia / más (adaptado a solo contorno fino) */}
          <circle cx="12" cy="14" r="3" />
          <path d="M12 12v4M10 14h4" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative">
        {/* Línea Vertical Central */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200 hidden md:block reveal"></div>

        <div className="space-y-16">
          {t.experiences.items.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={index} className={`relative flex items-center justify-between w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>

                {/* 1. Lado del Contenido (Se alterna gracias a flex-row-reverse) */}
                <div className="w-full md:w-[45%]">
                  <div className="reveal bg-white p-8 rounded-2xl shadow-xl border-t-4 border-green-600">

                    {/* Header de la tarjeta */}
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
                      <div>
                        <h4 className="text-2xl font-bold text-apple-gray-500 leading-tight">{item.title}</h4>
                        <p className="text-green-600 font-semibold mt-1">{item.company}</p>
                      </div>
                      <span className="text-xs font-bold text-white bg-green-600 px-3 py-1 rounded-full uppercase tracking-wider whitespace-nowrap">
                        {item.period}
                      </span>
                    </div>

                    {/* Descripción Justificada */}
                    <p className="text-apple-gray-400 text-justify leading-relaxed mb-8 hyphens-auto">
                      {item.description}
                    </p>

                    {/* Tecnologías Centradas */}
                    <div className="flex flex-wrap justify-center gap-2">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-green-50 text-green-600 rounded-lg text-xs font-medium border border-green-100 transition-colors hover:bg-green-100"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 2. Círculo con Número Central (Solo Desktop) */}
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center justify-center w-10 h-10 bg-green-500 rounded-full border-4 border-white z-10 shadow-lg reveal">
                  <span className="text-white font-bold text-sm">{totalItems - index}</span>
                </div>

                {/* 3. Lado Vacío para el Zigzag */}
                <div className="hidden md:block md:w-[45%]"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

