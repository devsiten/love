import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

export default function HomePage() {
  const t = useTranslations('home');
  const locale = useLocale();

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />
        <div className="absolute inset-0 pattern-adinkra" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-dark-950/50" />

        {/* Corner frames */}
        <div className="hidden md:block corner-frame corner-frame-tl" />
        <div className="hidden md:block corner-frame corner-frame-tr" />
        <div className="hidden md:block corner-frame corner-frame-bl" />
        <div className="hidden md:block corner-frame corner-frame-br" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center py-12">
          {/* Sacred Symbol */}
          <div className="mb-8 animate-float">
            <div className="inline-flex items-center justify-center w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-gold-500/50 bg-dark-900/50 backdrop-blur">
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-full gold-bg flex items-center justify-center shadow-2xl shadow-gold-500/30">
                <span className="font-display text-dark-950 text-3xl md:text-5xl font-bold">Ọ̀</span>
              </div>
            </div>
          </div>

          {/* Tagline */}
          <p className="font-body text-gold-400/80 text-sm md:text-base tracking-[0.2em] md:tracking-[0.3em] uppercase mb-6 animate-fade-in">
            {t('tagline')}
          </p>

          {/* Main Business Name */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-wider mb-4 animate-shimmer">
            <span className="gold-text">IFANGBAYELO</span>
          </h1>

          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl tracking-[0.2em] md:tracking-[0.3em] text-dark-100/90 mb-8 animate-fade-in animate-delay-100">
            TRADO MEDICARE
          </h2>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in animate-delay-200">
            <div className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent to-gold-500" />
            <div className="w-3 h-3 rotate-45 gold-bg" />
            <div className="w-16 md:w-24 h-px bg-gradient-to-l from-transparent to-gold-500" />
          </div>

          {/* Hero Text */}
          <p className="font-serif text-xl sm:text-2xl md:text-3xl text-dark-300 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up animate-delay-200">
            {t('heroText')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 animate-fade-in-up animate-delay-300">
            <Link href={`/${locale}/contact`} className="btn-gold">
              {t('cta')}
            </Link>
            <Link href={`/${locale}/orunmila`} className="btn-outline">
              {t('learnMore')}
            </Link>
          </div>

          {/* Registration Badge */}
          <div className="mt-16 inline-flex items-center gap-2 px-6 py-3 bg-dark-900/80 border border-gold-700/30 rounded-full animate-fade-in animate-delay-400">
            <svg className="w-5 h-5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="font-display text-sm tracking-wider text-gold-400">{t('reg')}</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-6 h-10 border-2 border-gold-500/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-gold-500 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-dark">
        <div className="absolute inset-0 pattern-dots" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900/95 to-dark-950" />

        <div className="relative z-10 container-custom">
          <div className="text-center mb-16">
            <p className="font-display text-gold-500 tracking-[0.3em] text-sm mb-4">
              {t('services.subtitle')}
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl gold-text tracking-wide">
              {t('services.title')}
            </h2>
            <div className="divider-gold mt-6">
              <div className="w-2 h-2 rotate-45 border border-gold-500" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {['divination', 'spiritual', 'herbal', 'advisory'].map((key, i) => (
              <div key={key} className="card-dark group">
                <div className="absolute top-0 left-0 w-full h-1 gold-bg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-t-lg" />
                <div className="text-4xl mb-6 text-gold-500 group-hover:scale-110 transition-transform">
                  {['◉', '☀', '❧', '⚖'][i]}
                </div>
                <h3 className="font-display text-xl text-dark-100 tracking-wide mb-3">
                  {t(`services.${key}.title`)}
                </h3>
                <p className="font-body text-dark-400 leading-relaxed">
                  {t(`services.${key}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-dark">
        <div className="absolute inset-0 bg-gradient-to-r from-gold-900/20 via-dark-900 to-gold-900/20" />
        <div className="absolute inset-0 pattern-adinkra opacity-50" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl gold-text tracking-wide">
              {t('why.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {['authentic', 'registered', 'confidential'].map((key, i) => (
              <div key={key} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border-2 border-gold-500/50 bg-dark-900 mb-6">
                  {i === 0 && (
                    <svg className="w-8 h-8 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                    </svg>
                  )}
                  {i === 1 && (
                    <svg className="w-8 h-8 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )}
                  {i === 2 && (
                    <svg className="w-8 h-8 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                  )}
                </div>
                <h3 className="font-display text-xl text-dark-100 tracking-wide mb-3">
                  {t(`why.${key}.title`)}
                </h3>
                <p className="font-body text-dark-400">
                  {t(`why.${key}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-dark">
        <div className="absolute inset-0 gold-bg opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-transparent to-dark-950" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="w-1 h-16 gold-bg mx-auto mb-8" />
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl gold-text tracking-wide mb-6">
            {t('cta2.title')}
          </h2>
          <p className="font-serif text-xl md:text-2xl text-dark-300 mb-12">
            {t('cta2.text')}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="group inline-flex items-center btn-gold text-lg px-12 py-5"
          >
            {t('cta2.button')}
            <span className="ml-3 inline-block group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
