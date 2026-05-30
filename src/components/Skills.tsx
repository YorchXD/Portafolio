// src/components/Skills.tsx
import { useScrollReveal } from '../hook/UseScrollReveal';
import { getI18n, type Language } from '../locales';

export const Skills = ({ lang }: { lang: Language }) => {
  const t = getI18n(lang)
  useScrollReveal();

  return (
    <section className="px-4 max-w-6xl mx-auto">
      <div className="fixed bottom-6 right-6 opacity-[0.07] pointer-events-none z-0 select-none hidden lg:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="300"
          height="300"
          viewBox="-1 -1 26 26" // Colchón de 1px a cada lado para absorber el desborde del trazo
          fill="none"
          stroke="oklch(62.7% 0.194 149.214)" // Tu color verde exacto
          strokeWidth="0.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="overflow-visible animate-[bounce_14s_infinite_ease-in-out]" // Fuerza al navegador a renderizar fuera de la caja si es necesario
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.996 24h-12.605s.734-3.931.633-5.686c-.041-.724-.161-1.474-.54-2.104-.645-1-2.636-3.72-2.475-7.43.224-5.209 4.693-8.779 10.126-8.779 5.098 0 8.507 3.001 9.858 7.483.328 1.079.311 1.541-.151 2.607l-.006.013 1.751 2.142c.26.381.413.791.413 1.239 0 .547-.233 1.045-.61 1.399-.368.345-.767.452-1.248.642 0 0-.576 2.592-.873 3.291-.7 1.643-1.97 1.659-2.97 1.849-.394.083-.49.133-.681.681-.208.591-.363 1.435-.622 2.653zm-4.842-22c-4.285.048-7.74 2.548-8.121 6.488-.192 1.991.463 3.986 1.516 5.705.611 1 1.305 1.592 1.464 3.875.091 1.313-.05 2.636-.241 3.932h8.604c.141-.645.35-1.485.687-2.057.449-.766 1.097-1.099 1.926-1.254.838-.148 1.238-.059 1.489-.785.212-.579.612-2.221.831-3.902 1.203-.335.612-.161 1.671-.559-.206-.234-1.918-2.314-2.045-2.6-.336-.759-.046-1.19.225-1.913.086-.251.06-.357-.009-.613-1.049-3.949-3.891-6.317-7.997-6.317zm.063 14h-.447c-.117 0-.231-.039-.308-.109l-.594-.391h2.25l-.594.391c-.076.069-.189.109-.307.109zm.922-1h-2.279c-.138 0-.25-.111-.25-.25 0-.138.112-.25.25-.25h2.279c.138 0 .25.112.25.25s-.111.25-.25.25zm-1.322-.986h-1.414c-.013-2.57-1.403-2.878-1.403-4.647 0-1.695 1.327-2.852 3-2.852h.02c1.663.009 2.98 1.163 2.98 2.852 0 1.769-1.391 2.077-1.404 4.647h-1.414c0-2.735 1.318-3.614 1.318-4.651 0-.856-.694-1.333-1.5-1.348h-.019c-.798.022-1.481.499-1.481 1.348 0 1.037 1.317 1.916 1.317 4.651zm4.053-3.628l1.349.612-.414.911-1.298-.589c.151-.3.276-.607.363-.934zm-7.739 0c.086.332.208.63.359.935l-1.296.588-.413-.911 1.35-.612zm9.369-.886h-1.501c.01-.335-.021-.672-.093-1h1.594v1zm-9.499 0h-1.501v-1h1.593c-.071.327-.101.663-.092.998v.002zm7.02-2.714l1.243-.881.579.815-1.252.889c-.147-.291-.336-.566-.57-.823zm-6.043 0c-.23.251-.418.525-.569.822l-1.251-.888.578-.815 1.242.881zm4.435-1.046l.663-1.345.896.442-.663 1.345c-.278-.183-.581-.332-.896-.442zm-2.826-.001c-.316.11-.618.258-.897.442l-.663-1.344.897-.442.663 1.344zm1.913-.208c-.334-.039-.654-.041-1-.002v-1.529h1v1.531z"
          />
        </svg>
      </div>

      {/* INTRO PEQUEÑA ARRIBA */}
      <div className="text-center max-w-2xl mx-auto mb-16 px-4 reveal">
        {/* DEJAMOS SOLO LA DESCRIPCIÓN: Equilibrada, legible y con contraste premium */}
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
          {t.skills.description_principal}
        </p>
      </div>

      {/* GRILLA DE CATEGORÍAS (CARDS) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {t.skills.skillsData.map((category, idx) => (
          <div
            key={idx}
            className="reveal bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl"
          >
            <div>
              <h4 className="text-2xl font-bold text-apple-gray-500 dark:text-white leading-tight mb-6">
                {/* <span className="w-2 h-2 rounded-full bg-green-600"></span> */}
                {category.title}
              </h4>
              <p className="text-apple-gray-400 dark:text-gray-300 text-justify leading-relaxed mb-8 hyphens-auto">
                {category.description}
              </p>
            </div>

            {/* BADGES CON HOVER SUAVE */}
            <div className="flex flex-wrap justify-center gap-2">
              {category.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-3 py-1 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-lg text-xs font-medium border border-green-100 dark:border-green-800 transition-colors hover:bg-green-100 dark:hover:bg-green-900/40"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* SECCIÓN ESPECIAL: TECNOLOGÍAS DEL PORTFOLIO */}
      <div className="p-8 reveal bg-green-50 dark:bg-gray-800 rounded-2xl shadow-xl">
        {/* Ajustamos el text-center por defecto para móviles, y lg:text-left para escritorio */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-6 text-justify lg:text-left">
          <div className="max-w-xl mx-auto lg:mx-0">
            <h4 className="text-2xl font-bold text-apple-gray-500 dark:text-white leading-tight mb-6">
              {t.skills.portafolioTech.title}
            </h4>
            {/* Cambié text-justify por text-center en móvil para evitar espacios raros, manteniendo el estilo en lg */}
            <p className="text-apple-gray-400 dark:text-gray-300 lg:text-justify leading-relaxed mb-8 hyphens-auto">
              {t.skills.portafolioTech.description}
            </p>
          </div>

          {/* SOLUCIÓN AQUÍ: justify-center por defecto (teléfonos) y lg:justify-end (escritorio) */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-end">
            {t.skills.portafolioTech.skills.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-white text-green-700 dark:text-green-400 border border-green-600/20 shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;