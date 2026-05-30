import Scene3D from './Scene3D'
import { getI18n, type Language } from '../locales'
import { useScrollReveal } from '../hook/UseScrollReveal'

export const Home = ({ lang }: { lang: Language }) => {
    const t = getI18n(lang)

    useScrollReveal();

    return (
        // <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-apple-gray-50">
        <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
            
            {/* Background 3D */}
            <div className="absolute inset-0 z-0 pointer-events-none reveal">
                <Scene3D />
            </div>

            <div className="container mx-auto px-4 z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="flex flex-col items-center mb-8">
                        {/* Foto de Perfil con estilo Apple (Vidrio y Sombra suave)*/}
                        <div className="w-50 h-50 rounded-full border-4 border-white/50 shadow-xl mb-6 overflow-hidden bg-gradient-to-br from-pink-100 to-pink-50 reveal">
                            <img
                                src="/images/mi_perfil.png"
                                alt="Yorch"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        {/* Nombre */}
                        <h1 className="text-6xl font-bold mb-2 reveal" style={{ transitionDelay: '200ms' }}>
                            {t.home.title}
                        </h1>

                        {/* Profesión */}
                        <h2 className="text-3xl text-apple-gray-400 mb-4 reveal" style={{ transitionDelay: '375ms' }}>
                            {t.home.subtitle}
                        </h2>
                    </div>

                    <p className="text-xl text-apple-gray-500 mb-4 reveal" style={{ transitionDelay: '450ms' }}>
                        {t.home.slogan}
                    </p>
                </div>
            </div>
        </section>
    )
}

