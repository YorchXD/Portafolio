import { getI18n, type Language } from "../locales"
import { useScrollReveal } from "../hook/UseScrollReveal"
import { useState } from 'react';
import type { SyntheticEvent } from 'react';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export const Contact = ({ lang }: { lang: Language }) => {
    const t = getI18n(lang);
    const [status, setStatus] = useState<FormStatus>('idle');
    useScrollReveal();

    const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('sending');

        const form = e.currentTarget;
        const formData = new FormData(form);
        const formspreeEndpoint = import.meta.env.PUBLIC_FORMSPREE_ENDPOINT;

        try {
            const response = await fetch(formspreeEndpoint, {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('success');
                form.reset();
                // Opcional: volver al estado idle después de 5 segundos
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <div>
            <div className="fixed bottom-6 right-6 opacity-[0.07] pointer-events-none z-0 select-none hidden lg:block">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="300"
                    height="300"
                    viewBox="-1 -1 26 26" // Agrega margen interno para absorber el grosor del stroke
                    fill="none"
                    stroke="oklch(62.7% 0.194 149.214)"
                    strokeWidth="0.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="animate-[bounce_14s_infinite_ease-in-out]"
                >
                    <path
                        d="M12 2.02c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 12.55l-5.992-4.57h11.983l-5.991 4.57zm0 1.288l-6-4.629v6.771h12v-6.771l-6 4.629z"
                    />
                </svg>
            </div>

            <section id="contact" className="bg-white/80 dark:bg-gray-800 backdrop-blur-lg rounded-3xl p-8 shadow-lg reveal">
                <h3 className="text-2xl font-semibold mb-6">{t.contact.title}</h3>
                <div className="grid md:grid-cols-2 gap-8">
                    {/* <!-- Contact Form --> */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <fieldset disabled={status === 'sending'} className="space-y-4 border-none p-0">

                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-apple-gray-400 mb-2">
                                    {t.contact.form.name}
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full px-4 py-3 rounded-xl bg-white/50 border border-apple-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                                    placeholder={t.contact.form.placeholder_name}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-apple-gray-400 mb-2">
                                    {t.contact.form.email}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-4 py-3 rounded-xl bg-white/50 border border-apple-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                                    placeholder={t.contact.form.placeholder_email}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-apple-gray-400 mb-2">
                                    {t.contact.form.message}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl bg-white/50 border border-apple-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors resize-none"
                                    placeholder={t.contact.form.placeholder_message}
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white font-medium px-6 py-3 rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === 'sending' ? t.contact.form.sending : t.contact.form.submit}
                            </button>

                            <div className="h-6"> {/* Contenedor con altura fija para evitar saltos visuales */}
                                {status === 'success' && (
                                    <p className="text-center text-green-600 font-medium animate-in fade-in duration-300">
                                        {t.contact.form.success}
                                    </p>
                                )}
                                {status === 'error' && (
                                    <p className="text-center text-red-500 font-medium animate-in fade-in duration-300">
                                        {t.contact.form.error}
                                    </p>
                                )}
                            </div>
                        </fieldset>
                    </form>

                    {/* Contact Information */}
                    <div className="space-y-6">
                        <div className="bg-green-50 rounded-2xl p-6 mb-6">
                            <h4 className="text-lg font-medium text-apple-gray-500 mb-4">{t.contact.info_contact.title}</h4>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 flex items-center justify-center bg-green-100 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-600">
                                            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                                        </svg>
                                    </div>
                                    <a href="mailto:contact@example.com" className="text-apple-gray-500 hover:text-green-600 transition-colors">
                                        {t.contact.info_contact.email}
                                    </a>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 flex items-center justify-center bg-green-100 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-600">
                                            <path fillRule={"evenodd"} d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule={"evenodd"} />
                                        </svg>
                                    </div>
                                    <a href="tel:+56949321952" className="text-apple-gray-500 hover:text-green-600 transition-colors">
                                        {t.contact.info_contact.phone}
                                    </a>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 flex items-center justify-center bg-green-100 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-600">
                                            <path fillRule={"evenodd"} d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule={"evenodd"} />
                                        </svg>
                                    </div>
                                    <span className="text-apple-gray-500">
                                        {t.contact.info_contact.location}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-purple-50 rounded-2xl p-6">
                            <h4 className="text-lg font-medium text-apple-gray-500 mb-4">{t.contact.business_hours.title}</h4>
                            <div className="space-y-2 text-apple-gray-400">
                                <p>{t.contact.business_hours.day}</p>
                                <p className="font-medium text-apple-gray-500">{t.contact.business_hours.hours}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

