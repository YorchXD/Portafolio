import { es } from './es';
// import { en } from './en';

// export const languages = { es, en };
export const languages = { es };

// Definimos el tipo basado en las llaves existentes
export type Language = keyof typeof languages;

// Idioma por defecto constante
export const DEFAULT_LANG: Language = 'es';

/**
 * Función segura para obtener traducciones.
 * Si el idioma solicitado no existe, retorna español por defecto.
 */
export const getI18n = (lang: string | undefined): typeof es => {
  if (lang && lang in languages) {
    return languages[lang as Language];
  }
  return languages[DEFAULT_LANG];
};