import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import logoIcon from '../assets/kokoilab-icon.png';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, locale, setLocale } = useLanguage();

  // Añadir sombra/borde al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled
      ? 'bg-stone-50/90 backdrop-blur-md border-b border-stone-200 shadow-[0_4px_24px_rgba(120,113,108,0.1)]'
      : 'bg-stone-50/70 backdrop-blur-sm border-b border-stone-100'
      }`}>
      <nav className="container-lg flex items-center justify-between h-16">

        {/* Logotipo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <img src={logoIcon} alt="Kokoilab" className="h-9 w-9 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 object-contain" />
          <span className="font-extrabold text-lg text-stone-900 tracking-tight group-hover:text-stone-700 transition-colors duration-300">
            kokoilab
          </span>
        </a>

        {/* Enlaces Escritorio */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-xs font-semibold tracking-wider text-stone-500 hover:text-stone-900 uppercase transition-all duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-amber-600 after:transition-all after:duration-300 hover:after:w-full">
            {t('header.features')}
          </a>
          <a href="#about" className="text-xs font-semibold tracking-wider text-stone-500 hover:text-stone-900 uppercase transition-all duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-amber-600 after:transition-all after:duration-300 hover:after:w-full">
            {t('header.about')}
          </a>
          <a href="#contact" className="text-xs font-semibold tracking-wider text-stone-500 hover:text-stone-900 uppercase transition-all duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-amber-600 after:transition-all after:duration-300 hover:after:w-full">
            {t('header.contact')}
          </a>
        </div>

        {/* Botón Acción e Idioma Escritorio */}
        <div className="hidden md:flex items-center gap-4">
          {/* Selector de Idioma */}
          <button
            onClick={() => setLocale(locale === 'es' ? 'en' : 'es')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-stone-300 bg-stone-100/60 text-[10px] font-bold tracking-wider text-stone-500 hover:text-stone-900 hover:border-stone-400 hover:bg-stone-100 transition-all duration-300"
            aria-label="Toggle language"
          >
            <span className={locale === 'en' ? 'text-amber-700' : ''}>EN</span>
            <span className="text-stone-300 font-normal">|</span>
            <span className={locale === 'es' ? 'text-amber-700' : ''}>ES</span>
          </button>

          <a href="#contact" className="btn-primary">
            {t('header.cta')}
          </a>
        </div>

        {/* Botón Hamburguesa Móvil */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-md text-stone-500 hover:text-stone-900 focus:outline-none transition-colors"
          aria-label={t('header.toggleMenu')}
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>

      </nav>

      {/* Menú Desplegable Móvil */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 border-t border-stone-200 ${mobileMenuOpen ? 'max-h-80 opacity-100 bg-stone-50/98 backdrop-blur-md' : 'max-h-0 opacity-0 pointer-events-none'
        }`}>
        <div className="px-6 py-6 space-y-4 flex flex-col">
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-bold tracking-wider text-stone-500 hover:text-stone-900 uppercase transition-colors"
          >
            {t('header.features')}
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-bold tracking-wider text-stone-500 hover:text-stone-900 uppercase transition-colors"
          >
            {t('header.about')}
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-bold tracking-wider text-stone-500 hover:text-stone-900 uppercase transition-colors"
          >
            {t('header.contact')}
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-primary text-center w-full block mt-2"
          >
            {t('header.cta')}
          </a>

          {/* Fila Selector Idioma Móvil */}
          <div className="flex items-center justify-between border-t border-stone-200 pt-4 mt-2">
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">
              {locale === 'es' ? 'Idioma' : 'Language'}
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => { setLocale('en'); setMobileMenuOpen(false); }}
                className={`px-3 py-1 rounded text-xs font-bold transition-all duration-300 ${locale === 'en' ? 'bg-amber-100 text-amber-700 border border-amber-300' : 'text-stone-400 hover:text-stone-600'}`}
              >
                EN
              </button>
              <button
                onClick={() => { setLocale('es'); setMobileMenuOpen(false); }}
                className={`px-3 py-1 rounded text-xs font-bold transition-all duration-300 ${locale === 'es' ? 'bg-amber-100 text-amber-700 border border-amber-300' : 'text-stone-400 hover:text-stone-600'}`}
              >
                ES
              </button>
            </div>
          </div>
        </div>
      </div>

    </header>
  );
}
