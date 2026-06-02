// src/components/Project.tsx
import { useScrollReveal } from '../hook/UseScrollReveal';
import { getI18n, type Language } from '../locales';

export const Project = ({ lang }: { lang: Language }) => {
    const t = getI18n(lang);
    useScrollReveal();

    return (
        <section className="px-4 max-w-6xl mx-auto">
            <div className="fixed bottom-6 right-12 opacity-[0.07] pointer-events-none z-0 select-none hidden lg:block">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="300"
                    height="300"
                    viewBox="-1 -1 26 26" // Colchón interno que absorbe el grosor del stroke en los bordes 0 y 24
                    fill="none"
                    stroke="oklch(62.7% 0.194 149.214)" // Tu color verde exacto
                    strokeWidth="0.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="animate-[bounce_14s_infinite_ease-in-out]"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M24 24h-11v-6h4v-4h7v10zm-12-22h9l3 3v2h-3v2h3v3h-7v-3h3v-2h-8v17h-6v-17h-1v2h-5v-7h6v-2h6v2zm5 18h-2v2h2v-2zm5 0h-3v2h3v-2zm-12 .052l-2 .952v.996h2v-1.948zm-2-1.821v1.773l2-.952v-1.774l-2 .953zm14-2.231h-3v2h3v-2zm-14-.628v1.859l2-.953v-1.858l-2 .952zm0-2.785v1.785l2-.952v-1.785l-2 .952zm0-2.768v1.768l2-.952v-1.768l-2 .952zm2-2.819h-2v1.819l2-.952v-.867zm10.017-3h-18.017v3h1v-2h18l-.983-1zm-10.017-3h-2v1h2v-1z"
                    />
                </svg>
            </div>

            {/* INTRO PEQUEÑA ARRIBA */}
            <div className="text-center max-w-2xl mx-auto mb-16 px-4 reveal">
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-medium">
                    {t.project.description_principal}
                </p>
            </div>

            {/* CONTENEDOR TEMPORAL CON FLEX: Centrado absoluto e inmune a saltos de posicionamiento */}
            <div className="flex justify-center items-center min-h-[200px]">

                {/* ========================================================================= */}
                {/* OPCIÓN 1: CARD ACTUAL TEMPORAL (Activa, minimalista, fondo blanco y centrada) */}
                {/* ========================================================================= */}
                <div className="p-20 bg-white/80 backdrop-blur-lg rounded-3xl flex flex-col justify-center items-center text-center shadow-lg reveal">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-xs font-semibold uppercase tracking-wider text-green-600">
                            {t.project.coming_soon}
                        </span>
                    </div>
                    <p className="text-sm text-gray-500 font-medium text-justify px-4 leading-relaxed italic">
                        {t.project.available_soon}
                    </p>
                </div>

                {/* ========================================================================= */}
                {/* OPCIÓN 2: CARD AVANZADA COMPLETA (Comentada para uso futuro)               */}
                {/* ========================================================================= */}
                {/* <div className="p-6 rounded-2xl bg-white border border-dashed border-gray-300 hover:border-green-600/50 transition-all duration-500 flex flex-col justify-between min-h-[280px] relative overflow-hidden group max-w-sm w-full">
                    <div className="absolute -right-10 -top-10 w-32 h-32 bg-green-600/5 rounded-full blur-2xl group-hover:bg-green-600/10 transition-all duration-500 pointer-events-none" />
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-xs font-semibold uppercase tracking-wider text-green-600">
                                Próximamente
                            </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-400 mb-3 group-hover:text-gray-600 transition-colors duration-300">
                            Nuevo Proyecto Full Stack
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed italic text-justify">
                            Actualmente diseñando y programando una nueva aplicación web enfocada en resolver problemas del mundo real. ¡Disponible muy pronto!
                        </p>
                    </div>
                    <div className="mt-6">
                        <div className="flex flex-wrap gap-2 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                            {futureTech.map((tech, idx) => (
                                <span
                                    key={idx}
                                    className="px-2.5 py-1 text-xs font-medium rounded-md bg-gray-100 border border-gray-200"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div> 
                */}

            </div>
        </section>
    );
};

export default Project;