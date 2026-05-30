import { getI18n, type Language } from '../locales'
import { useScrollReveal } from '../hook/UseScrollReveal';
import { useEffect, useState } from 'react';

export const InfoPrincipal = ({ lang }: { lang: Language }) => {
    const t = getI18n(lang)

    const socialLinks = [
        { name: 'GitHub', url: 'https://github.com/YorchXD', icon: 'github' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/yorch-sep%C3%BAlveda-manr%C3%ADquez-06436310a/', icon: 'linkedin' },
        { name: 'WhatsApp', url: 'https://wa.me/56949321952', icon: 'whatsapp' }
        // { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
    ]

    const [currentTime, setCurrentTime] = useState<Date | null>(null);

    useEffect(() => {
        setCurrentTime(new Date());

        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 60000);

        return () => clearInterval(timer);
    }, []);

    useScrollReveal();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:-mt-35 lg:grid-cols-4 gap-4 pb-6 reveal info-principal-delay">
            {/* Location Widget */}
            <div className="bg-white/80 dark:bg-gray-800 backdrop-blur-lg rounded-2xl p-4 shadow-lg border border-white/20">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-red-100 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-red-600">
                            <path
                                fillRule={"evenodd"}
                                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                                clipRule={"evenodd"}>
                            </path>
                        </svg>
                    </div>
                    <div>
                        <p className="text-sm text-apple-gray-400">{t.info_principal.location}</p>
                        <p className="font-medium">Talca, Maule, Chile</p>
                    </div>
                </div>
            </div>

            {/* Time Widget */}
            <div className="bg-white/80 dark:bg-gray-800 backdrop-blur-lg rounded-2xl p-4 shadow-lg border border-white/20">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-purple-100 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-purple-600">
                            <path
                                fillRule={"evenodd"}
                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
                                clipRule={"evenodd"}>
                            </path>
                        </svg>
                    </div>
                    <div>
                        <p className="text-sm text-apple-gray-400">{t.info_principal.local_hour}</p>
                        <p className="font-medium">CLT • {currentTime
                            ? currentTime.toLocaleTimeString('en-CL', {
                                hour: '2-digit',
                                minute: '2-digit',
                                hour12: true,
                            })
                            : '--:--'}</p>
                    </div>
                </div>
            </div>

            {/*Availability Widget*/}
            <div className="bg-white/80 dark:bg-gray-800 backdrop-blur-lg rounded-2xl p-4 shadow-lg border border-white/20">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-green-100 rounded-full">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                    </div>

                    <div>
                        <p className="text-sm text-apple-gray-400">{t.info_principal.available}</p>
                        <p className="font-medium">{t.info_principal.available_for_contract}</p>
                    </div>
                </div>
            </div>

            {/* Social Links Widget */}
            <div className="bg-white/80 dark:bg-gray-800 backdrop-blur-lg rounded-2xl p-4 shadow-lg border border-white/20">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-blue-600">
                            <path
                                fillRule={"evenodd"}
                                d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.745 6.745 0 011.019-4.381z"
                                clipRule={"evenodd"}></path>
                            <path
                                d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z"
                            ></path>
                        </svg>
                    </div>
                    <div className="flex-col gap-2">
                        <p className="text-sm text-apple-gray-400">{t.info_principal.social_networks}</p>
                        <div className="flex gap-2 font-medium">
                            {
                                socialLinks.map((link) => (
                                    <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-apple-gray-400 hover:text-apple-gray-500 transition-colors">
                                        <span className="sr-only">{link.name}</span>
                                        {link.icon === 'github' && (
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path
                                                    fillRule={"evenodd"}
                                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                                    clipRule={"evenodd"}
                                                />
                                            </svg>
                                        )}
                                        {link.icon === 'linkedin' && (
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path
                                                    fillRule={"evenodd"}
                                                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                                                    clipRule={"evenodd"}
                                                />
                                            </svg>
                                        )}
                                        {link.icon === 'whatsapp' && (
                                            <svg
                                                className="w-5 h-5"
                                                fill="currentColor"
                                                viewBox="0 0 32 32" // Cambiado a 32 para respetar la matriz original exacta de este vector
                                                aria-hidden="true"
                                            >
                                                {/* Silueta exterior del globo de diálogo */}
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 18.5109 2.661 20.8674 3.81847 22.905L2 30L9.31486 28.3038C11.3014 29.3854 13.5789 30 16 30ZM16 27.8462C22.5425 27.8462 27.8462 22.5425 27.8462 16C27.8462 9.45755 22.5425 4.15385 16 4.15385C9.45755 4.15385 4.15385 9.45755 4.15385 16C4.15385 18.5261 4.9445 20.8675 6.29184 22.7902L5.23077 26.7692L9.27993 25.7569C11.1894 27.0746 13.5046 27.8462 16 27.8462Z"
                                                />
                                                {/* Auricular de teléfono interno */}
                                                <path
                                                    d="M12.5 9.49989C12.1672 8.83131 11.6565 8.8905 11.1407 8.8905C10.2188 8.8905 8.78125 9.99478 8.78125 12.05C8.78125 13.7343 9.52345 15.578 12.0244 18.3361C14.438 20.9979 17.6094 22.3748 20.2422 22.3279C22.875 22.2811 23.4167 20.0154 23.4167 19.2503C23.4167 18.9112 23.2062 18.742 23.0613 18.696C22.1641 18.2654 20.5093 17.4631 20.1328 17.3124C19.7563 17.1617 19.5597 17.3656 19.4375 17.4765C19.0961 17.8018 18.4193 18.7608 18.1875 18.9765C17.9558 19.1922 17.6103 19.083 17.4665 19.0015C16.9374 18.7892 15.5029 18.1511 14.3595 17.0426C12.9453 15.6718 12.8623 15.2001 12.5959 14.7803C12.3828 14.4444 12.5392 14.2384 12.6172 14.1483C12.9219 13.7968 13.3426 13.254 13.5313 12.9843C13.7199 12.7145 13.5702 12.305 13.4803 12.05C13.0938 10.953 12.7663 10.0347 12.5 9.49989Z"
                                                />
                                            </svg>
                                        )}
                                        {/* {link.icon === 'twitter' && (
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                            </svg>
                                        )} */}
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}