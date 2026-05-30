import { createContext, useContext, useState, useEffect } from 'react';
import esTranslations from '../locales/es.json';
import enTranslations from '../locales/en.json';

const LanguageContext = createContext();

const translations = {
  es: esTranslations,
  en: enTranslations
};

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState(() => {
    // 1. Detect saved language preference
    const saved = localStorage.getItem('preferred-language');
    if (saved === 'es' || saved === 'en') return saved;

    // 2. Fallback to browser language detection
    const browserLang = navigator.language || navigator.userLanguage;
    return browserLang.startsWith('es') ? 'es' : 'en';
  });

  useEffect(() => {
    localStorage.setItem('preferred-language', locale);
    document.documentElement.lang = locale;
  }, [locale]);

  // Safe dot-notation translation resolver with variable interpolation
  const t = (key, variables = {}) => {
    const keys = key.split('.');
    let value = translations[locale];

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return `[${key}]`; // Safe fallback
      }
    }

    if (typeof value !== 'string') return `[${key}]`;

    // Simple variable interpolation replacement (e.g., {{year}} -> value)
    return Object.entries(variables).reduce((acc, [varKey, varVal]) => {
      return acc.replaceAll(`{{${varKey}}}`, String(varVal));
    }, value);
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
