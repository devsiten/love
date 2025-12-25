import { Metadata } from 'next';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { useTranslations, useLocale } from 'next-intl';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services' });
  return { title: t('title'), description: t('intro') };
}

export default function ServicesPage() {
  const t = useTranslations('services');
  const tHome = useTranslations('home.services');
  const locale = useLocale();

  const services = [
    { key: 'divination', icon: '◉' },
    { key: 'spiritual', icon: '☀' },
    { key: 'herbal', icon: '❧' },
    { key: 'advisory', icon: '⚖' },
  ];

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

      {/* Services Grid */}
      <section className="section-dark">
        <div className="absolute inset-0 pattern-dots" />
        <div className="absolute inset-0 bg-dark-950/90" />

        <div className="relative z-10 container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.key} className="card-dark group p-10">
                <div className="absolute top-0 left-0 w-full h-1 gold-bg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-t-lg" />
                <div className="text-5xl mb-6 text-gold-500">{service.icon}</div>
                <h3 className="font-display text-2xl text-dark-100 tracking-wide mb-4">
                  {tHome(`${service.key}.title`)}
                </h3>
                <p className="font-body text-dark-400 leading-relaxed text-lg">
                  {tHome(`${service.key}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative">
        <div className="absolute inset-0 gold-bg opacity-10" />
        <div className="relative z-10 container-custom text-center">
          <Link href={`/${locale}/contact`} className="btn-gold text-lg px-12 py-5">
            Book Consultation →
          </Link>
        </div>
      </section>
    </>
  );
}
