import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  const pillars = [
    {
      title: t('about.pillars.warmth.title'),
      subtitle: t('about.pillars.warmth.subtitle'),
      description: t('about.pillars.warmth.description'),
      icon: (
        // Ícono modularidad — cuadrícula / grid
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-stone-700">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
        </svg>
      )
    },
    {
      title: t('about.pillars.precision.title'),
      subtitle: t('about.pillars.precision.subtitle'),
      description: t('about.pillars.precision.description'),
      icon: (
        // Ícono artesanía — mano / estrella
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-stone-700">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
        </svg>
      )
    },
    {
      title: t('about.pillars.quality.title'),
      subtitle: t('about.pillars.quality.subtitle'),
      description: t('about.pillars.quality.description'),
      icon: (
        // Ícono sostenibilidad — hoja
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-stone-700">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
        </svg>
      )
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-stone-50 border-t border-stone-100">
      {/* Luz ambiental cálida */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-amber-50/80 rounded-full blur-[140px] pointer-events-none" />

      <div className="container-lg relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase block mb-3">
            {t('about.badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 mb-6 tracking-tight">
            {t('about.title')}
          </h2>
          <p className="text-base sm:text-lg text-stone-500 leading-relaxed">
            {t('about.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="p-8 bg-white border border-stone-200 rounded-lg hover:border-stone-300 hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-md bg-stone-50 border border-stone-200 flex items-center justify-center mb-6 group-hover:border-amber-200 group-hover:bg-amber-50 transition-all duration-300">
                {pillar.icon}
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-1 group-hover:text-stone-800 transition-colors">
                {pillar.title}
              </h3>
              <span className="text-xs font-medium text-amber-700 block mb-4 tracking-wide uppercase">
                {pillar.subtitle}
              </span>
              <p className="text-sm text-stone-500 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
