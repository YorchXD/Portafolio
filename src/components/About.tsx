import { getI18n, type Language } from "../locales"
import { useScrollReveal } from "../hook/UseScrollReveal"


export const About = ({ lang }: { lang: Language }) => {
    const t = getI18n(lang)

    useScrollReveal();

    return (
        <div className="space-y-8">
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
                    <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A11.95 11.95 0 0112 21.75c-2.907 0-5.625-. outline-.932-8.011-1.35a.75.75 0 01-.438-.695z"
                        clipRule="evenodd"
                    />
                    {/* Líneas sutiles que simulan código al lado del perfil */}
                    <path
                        fillRule="evenodd"
                        d="M19.5 4.5a.75.75 0 01.75.75v3a.75.75 0 01-1.5 0v-3a.75.75 0 01.75-.75zm0 6a.75.75 0 01.75.75v3a.75.75 0 01-1.5 0v-3a.75.75 0 01.75-.75z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
            <div className="bg-white/80 dark:bg-gray-800 backdrop-blur-lg rounded-3xl p-6 shadow-xl reveal">
                <div className="space-y-6">
                    {t.about.text.map((paragraph, index) => (
                        <p key={index} className="text-apple-gray-400 dark:text-gray-300 text-justify leading-relaxed mb-4 hyphens-auto">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    )
}






















