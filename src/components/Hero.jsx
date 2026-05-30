import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t, locale } = useLanguage();

  return (
    <section className="min-h-[85vh] relative flex items-center overflow-hidden bg-stone-50 furniture-grid py-20">

      {/* Luz ambiental cálida */}
      <div className="absolute top-1/4 right-0 w-[32rem] h-[32rem] bg-amber-100/60 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-stone-200/40 rounded-full blur-[100px] pointer-events-none" />

      {/* Formas geométricas modulares flotantes (evoca muebles modulares) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        {/* Cuadrado grande derecha */}
        <div className="float-shape absolute top-[15%] right-[8%] w-28 h-28 border-2 border-stone-200/70 rounded-sm opacity-50" style={{ animationDelay: '0s' }} />
        {/* Cuadrado pequeño dentro */}
        <div className="float-shape absolute top-[20%] right-[12%] w-14 h-14 bg-amber-100/50 border border-amber-200/60 rounded-sm opacity-60" style={{ animationDelay: '1.5s' }} />
        {/* Rectángulo horizontal */}
        <div className="float-shape absolute top-[55%] right-[6%] w-40 h-12 border border-stone-200/60 rounded-sm opacity-40" style={{ animationDelay: '3s' }} />
        {/* Cuadrado medio superior */}
        <div className="float-shape absolute top-[8%] right-[22%] w-10 h-10 bg-stone-200/40 rounded-sm opacity-50" style={{ animationDelay: '2s' }} />
        {/* Línea decorativa */}
        <div className="absolute top-[35%] right-[4%] w-px h-40 bg-gradient-to-b from-transparent via-stone-300/50 to-transparent" />
        <div className="absolute top-[35%] right-[18%] w-px h-28 bg-gradient-to-b from-transparent via-amber-300/30 to-transparent" />
        {/* Cuadrado abajo izquierda */}
        <div className="float-shape absolute bottom-[20%] right-[14%] w-20 h-20 border border-stone-300/50 rounded-sm opacity-35" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container-lg relative z-10 w-full">
        <div className="max-w-2xl">

          {/* Badge de estudio */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-white border border-stone-200 rounded-full mb-8 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_6px_rgba(22,163,74,0.6)]"></span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500">
              {t('hero.badge')}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-stone-900 mb-6 leading-[1.1] tracking-tight">
            {locale === 'es' ? (
              <>
                {t('hero.title')} <br className="hidden sm:inline" />
                <span className="text-amber-700">{t('hero.titleInnovative')}</span>
              </>
            ) : (
              <>
                {t('hero.titleInnovative')} <br className="hidden sm:inline" />
                <span className="text-amber-700">{t('hero.title')}</span>
              </>
            )}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-stone-500 mb-10 leading-relaxed font-normal max-w-xl">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            <a href="#features" className="btn-primary py-3 px-8 text-center">
              {t('hero.ctaExplore')}
            </a>
            <a href="#about" className="btn-secondary py-3 px-8 text-center">
              {t('hero.ctaPhilosophy')}
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
