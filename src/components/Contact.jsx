import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t, locale } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errors, setErrors] = useState({});

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = t('contact.form.errors.nameRequired');
    if (!formData.email.trim()) {
      tempErrors.email = t('contact.form.errors.emailRequired');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = t('contact.form.errors.emailInvalid');
    }
    if (!formData.message.trim()) tempErrors.message = t('contact.form.errors.messageRequired');
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');

    const subject = `${locale === 'es' ? 'Contacto Web' : 'Web Contact'} - ${formData.name}`;
    const body = `${locale === 'es' ? 'Nombre' : 'Name'}: ${formData.name}\n` +
                 `Email: ${formData.email}\n\n` +
                 `${locale === 'es' ? 'Mensaje' : 'Message'}:\n${formData.message}`;

    setTimeout(() => {
      window.location.href = `mailto:kokoilaboficial@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white border-t border-stone-100">
      {/* Luz ambiental */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-50/60 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-lg relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Columna de Información */}
          <div className="lg:col-span-5">
            <span className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase block mb-3">
              {t('contact.badge')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 mb-6 tracking-tight">
              {t('contact.title')}
            </h2>
            <p className="text-stone-500 mb-8 leading-relaxed">
              {t('contact.description')}
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-md bg-stone-50 border border-stone-200 flex items-center justify-center text-stone-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs text-stone-400 block">{t('contact.emailLabel')}</span>
                  <a href="mailto:kokoilaboficial@gmail.com" className="text-sm font-semibold text-stone-800 hover:text-amber-700 transition">
                    kokoilaboficial@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-md bg-stone-50 border border-stone-200 flex items-center justify-center text-stone-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs text-stone-400 block">{t('contact.hqLabel')}</span>
                  <span className="text-sm font-semibold text-stone-800">
                    {t('contact.hqValue')}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-stone-100 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_6px_rgba(22,163,74,0.6)] inline-block"></span>
              <span className="text-xs text-stone-400 uppercase tracking-widest font-bold">
                {t('contact.status')}
              </span>
            </div>
          </div>

          {/* Columna de Formulario */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 bg-stone-50 border border-stone-200 rounded-xl">

              {status === 'success' ? (
                <div className="text-center py-10">
                  <div className="w-14 h-14 rounded-full bg-green-50 border border-green-300 flex items-center justify-center mx-auto mb-6 text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-2">
                    {t('contact.success.title')}
                  </h3>
                  <p className="text-sm text-stone-500 max-w-sm mx-auto mb-8">
                    {t('contact.success.description')}
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="btn-secondary py-2 px-6"
                  >
                    {t('contact.success.cta')}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Campo Nombre */}
                  <div>
                    <label htmlFor="name" className="text-xs font-bold text-stone-500 block mb-2 uppercase tracking-wider">
                      {t('contact.form.nameLabel')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t('contact.form.namePlaceholder')}
                      disabled={status === 'submitting'}
                      className={`w-full px-4 py-3 bg-white border ${errors.name ? 'border-red-400' : 'border-stone-200 hover:border-stone-300'} focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30 text-stone-800 rounded-md text-sm outline-none transition-all duration-300 placeholder:text-stone-300`}
                    />
                    {errors.name && <span className="text-xs text-red-500 mt-1 block">{errors.name}</span>}
                  </div>

                  {/* Campo Email */}
                  <div>
                    <label htmlFor="email" className="text-xs font-bold text-stone-500 block mb-2 uppercase tracking-wider">
                      {t('contact.form.emailLabel')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t('contact.form.emailPlaceholder')}
                      disabled={status === 'submitting'}
                      className={`w-full px-4 py-3 bg-white border ${errors.email ? 'border-red-400' : 'border-stone-200 hover:border-stone-300'} focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30 text-stone-800 rounded-md text-sm outline-none transition-all duration-300 placeholder:text-stone-300`}
                    />
                    {errors.email && <span className="text-xs text-red-500 mt-1 block">{errors.email}</span>}
                  </div>

                  {/* Campo Mensaje */}
                  <div>
                    <label htmlFor="message" className="text-xs font-bold text-stone-500 block mb-2 uppercase tracking-wider">
                      {t('contact.form.messageLabel')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t('contact.form.messagePlaceholder')}
                      disabled={status === 'submitting'}
                      className={`w-full px-4 py-3 bg-white border ${errors.message ? 'border-red-400' : 'border-stone-200 hover:border-stone-300'} focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30 text-stone-800 rounded-md text-sm outline-none transition-all duration-300 resize-none placeholder:text-stone-300`}
                    />
                    {errors.message && <span className="text-xs text-red-500 mt-1 block">{errors.message}</span>}
                  </div>

                  {/* Botón de Envío */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full btn-primary flex items-center justify-center gap-2 py-3 hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-stone-50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {t('contact.form.submitting')}
                      </>
                    ) : (
                      t('contact.form.submit')
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
