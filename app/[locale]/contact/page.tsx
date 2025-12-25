import { Metadata } from 'next';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { useTranslations, useLocale } from 'next-intl';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact' });
  return { title: t('title'), description: t('intro') };
}

export default function ContactPage() {
  const t = useTranslations('contact');
  const tFooter = useTranslations('footer');
  const locale = useLocale();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />
        <div className="absolute inset-0 pattern-adinkra" />

        <div className="relative z-10 container-custom text-center">
          <p className="font-display text-gold-500 tracking-[0.3em] text-sm mb-4">{t('subtitle')}</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl gold-text tracking-wide mb-6">{t('title')}</h1>
          <div className="divider-gold mb-8">
            <div className="w-3 h-3 rotate-45 gold-bg" />
          </div>
          <p className="font-serif text-xl text-dark-300 max-w-3xl mx-auto">{t('intro')}</p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="section-dark">
        <div className="absolute inset-0 bg-dark-900/30" />
        <div className="relative z-10 container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {/* WhatsApp Card */}
              <div className="card-dark p-6 sm:p-8 text-center group hover:border-green-500/50 transition-colors">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-green-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl sm:text-2xl text-gold-400 mb-2 sm:mb-3">WhatsApp</h3>
                <p className="font-body text-dark-400 text-sm sm:text-base mb-4 sm:mb-6">{t('whatsappDesc')}</p>
                <a
                  href="https://wa.me/2347033450691"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-display text-sm tracking-wider rounded-lg hover:bg-green-700 transition-colors"
                >
                  {t('whatsapp')}
                </a>
              </div>

              {/* Phone Card */}
              <div className="card-dark p-6 sm:p-8 text-center group hover:border-gold-500/50 transition-colors">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full gold-bg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-dark-950" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl sm:text-2xl text-gold-400 mb-2 sm:mb-3">{t('call')}</h3>
                <p className="font-body text-dark-400 text-sm sm:text-base mb-4 sm:mb-6">{t('callDesc')}</p>
                <a
                  href="tel:+2347033450691"
                  className="inline-flex items-center gap-2 px-6 py-3 gold-bg text-dark-950 font-display text-sm tracking-wider rounded-lg hover:opacity-90 transition-opacity"
                >
                  +234 703 345 0691
                </a>
              </div>

              {/* Facebook Card */}
              <div className="card-dark p-6 sm:p-8 text-center group hover:border-blue-500/50 transition-colors sm:col-span-2 lg:col-span-1">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl sm:text-2xl text-gold-400 mb-2 sm:mb-3">Facebook</h3>
                <p className="font-body text-dark-400 text-sm sm:text-base mb-4 sm:mb-6">{t('facebookDesc')}</p>
                <a
                  href="https://www.facebook.com/share/1HQHZPpJAN/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-display text-sm tracking-wider rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {t('facebook')}
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="mt-8 card-dark p-6 sm:p-8 text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full gold-bg flex items-center justify-center">
                  <svg className="w-6 h-6 text-dark-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-lg text-gold-400 mb-1">{t('locationTitle')}</h3>
                  <p className="font-body text-dark-300">Ijan Ekiti, Ekiti State, Nigeria</p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="mt-8 card-dark p-6 sm:p-8 text-center">
              <h3 className="font-display text-xl text-gold-400 mb-6">{t('hours.title')}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-body text-dark-300">
                <div className="p-4 bg-dark-900/50 rounded-lg">
                  <p className="text-gold-500 font-display text-sm mb-1">Mon - Fri</p>
                  <p>9:00 AM - 6:00 PM</p>
                </div>
                <div className="p-4 bg-dark-900/50 rounded-lg">
                  <p className="text-gold-500 font-display text-sm mb-1">Saturday</p>
                  <p>10:00 AM - 4:00 PM</p>
                </div>
                <div className="p-4 bg-dark-900/50 rounded-lg">
                  <p className="text-gold-500 font-display text-sm mb-1">Sunday</p>
                  <p>By Appointment</p>
                </div>
              </div>
            </div>

            {/* Registration Badge */}
            <div className="mt-8 flex justify-center">
              <div className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 gold-bg rounded-lg">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-dark-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="font-display text-dark-950 text-sm sm:text-base font-semibold tracking-wide">{tFooter('reg')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
