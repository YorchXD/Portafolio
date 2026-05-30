import { getI18n, type Language } from "../locales"
import { useScrollReveal } from "../hook/UseScrollReveal"


export const Education = ({ lang }: { lang: Language }) => {
    const t = getI18n(lang)

    useScrollReveal();

    return (
        <div className="space-y-8">
            {/* Ícono de fondo fijo (Sombrero de Graduado) */}
            <div className="fixed bottom-6 right-6 opacity-[0.07] pointer-events-none z-0 select-none hidden lg:block">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="300" 
                    height="300" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="oklch(62.7% 0.194 149.214)" 
                    strokeWidth="0.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="animate-[bounce_12s_infinite_ease-in-out]"
                >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
            </div>
            <div className="bg-white/80 dark:bg-gray-800 backdrop-blur-lg rounded-3xl p-6 shadow-xl  reveal">
                <h3 className="text-2xl font-semibold mb-6">{t.formation.item_education.title}</h3>
                <div className="space-y-6">
                    {t.formation.item_education.education.map((edu) => (
                        <div className="border-l-2 border-green-600 pl-4 pb-6">
                            <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-4">
                                <div>
                                    <h4 className="text-xl font-medium text-apple-gray-500">{edu.title}</h4>
                                    <p className="text-apple-gray-400">{edu.institution}</p>
                                </div>
                                <span className="text-sm text-white font-bold bg-green-600 px-3 py-1 rounded-full whitespace-nowrap">
                                    {edu.period}
                                </span>
                            </div>
                            <ul className="list-disc list-inside text-apple-gray-400 space-y-1">
                                {edu.details.map((detail) => (
                                    <li>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-white/80 dark:bg-gray-800 backdrop-blur-lg rounded-3xl p-6 shadow-xl reveal">
                <h3 className="text-2xl font-semibold mb-6">{t.formation.item_complementary_education.title}</h3>
                <div className="space-y-6">
                    {t.formation.item_complementary_education.education.map((edu) => (
                        <div className="border-l-2 border-green-600 pl-4 pb-6">
                            <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-4">
                                <div>
                                    <h4 className="text-xl font-medium text-apple-gray-500">{edu.title}</h4>
                                    <p className="text-apple-gray-400">{edu.institution}</p>
                                </div>
                                <span className="text-sm text-white font-bold bg-green-600 px-3 py-1 rounded-full whitespace-nowrap">
                                    {edu.period}
                                </span>
                            </div>
                            <ul className="list-disc list-inside text-apple-gray-400 space-y-1">
                                {edu.details.map((detail) => (
                                    <li>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-white/80 dark:bg-gray-800 backdrop-blur-lg rounded-3xl p-6 shadow-xl reveal">
                <h3 className="text-2xl font-semibold mb-6">{t.formation.item_academic_experience.title}</h3>
                <div className="space-y-6">
                    {t.formation.item_academic_experience.education.map((edu) => (
                        <div className="border-l-2 border-green-600 pl-4 pb-6">
                            <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-4">
                                <div>
                                    <h4 className="text-xl font-medium text-apple-gray-500">{edu.title}</h4>
                                    <p className="text-apple-gray-400">{edu.institution}</p>
                                </div>
                                <span className="text-sm text-white font-bold bg-green-600 px-3 py-1 rounded-full whitespace-nowrap">
                                    {edu.period}
                                </span>
                            </div>
                            <ul className="list-disc list-inside text-apple-gray-400 space-y-1 mb-4">
                                {edu.items?.map((item) => (
                                    <li>{item}</li>
                                ))}
                            </ul>
                            <div className="space-y-6">
                                <div className="border-l-2 border-gray-400 pl-4">
                                    <p className="text-apple-gray-400">{edu.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}


