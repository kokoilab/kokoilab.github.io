import { useLanguage } from '../context/LanguageContext';

export default function Features() {
  const { t } = useLanguage();

  const features = [
    {
      model: "DI-01",
      title: t('features.modules.md01.title'),
      subtitle: t('features.modules.md01.subtitle'),
      description: t('features.modules.md01.description'),
      icon: (
        // Ícono de boceto / diseño
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-stone-700">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
        </svg>
      )
    },
    {
      model: "MC-02",
      title: t('features.modules.hf02.title'),
      subtitle: t('features.modules.hf02.subtitle'),
      description: t('features.modules.hf02.description'),
      icon: (
        // Ícono de materiales / cubo 3D
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-stone-700">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
        </svg>
      )
    },
    {
      model: "AT-03",
      title: t('features.modules.in03.title'),
      subtitle: t('features.modules.in03.subtitle'),
      description: t('features.modules.in03.description'),
      icon: (
        // Ícono de herramienta / ensamblaje
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-stone-700">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
        </svg>
      )
    },
  ];

  return (
    <section id="features" className="py-24 bg-white border-t border-stone-100">
      <div className="container-lg">

        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase block mb-3">
            {t('features.badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            {t('features.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 bg-stone-50 border border-stone-200 rounded-xl hover:border-stone-300 hover:bg-white hover:shadow-md transition-all duration-300 relative group flex flex-col justify-between min-h-[300px]"
            >

              {/* Código de referencia del módulo */}
              <div className="absolute top-6 right-6 flex items-center gap-1.5">
                <span className="text-[10px] font-mono text-stone-400 group-hover:text-stone-500 transition-colors">
                  {feature.model}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500/70 group-hover:bg-amber-500 transition-all duration-300"></span>
              </div>

              <div>
                {/* Icono del Módulo */}
                <div className="w-9 h-9 rounded-md bg-white border border-stone-200 flex items-center justify-center mb-8 group-hover:border-stone-300 group-hover:shadow-sm transition-all duration-300">
                  {feature.icon}
                </div>

                {/* Título */}
                <h3 className="text-lg font-bold text-stone-900 mb-1 group-hover:text-stone-800 transition-colors">
                  {feature.title}
                </h3>
                <span className="text-[10px] font-semibold text-amber-700 block mb-4 tracking-wider uppercase">
                  {feature.subtitle}
                </span>

                {/* Descripción */}
                <p className="text-sm text-stone-500 leading-relaxed font-normal">
                  {feature.description}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
