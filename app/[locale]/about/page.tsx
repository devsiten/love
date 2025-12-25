import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { useTranslations, useLocale } from 'next-intl';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });
  return { title: t('title'), description: t('intro') };
}

const galleryImages = [
  { src: '/images/babalawo-1.jpg', alt: 'Babalawo in traditional Aso-Oke attire' },
  { src: '/images/babalawo-2.jpg', alt: 'Babalawo with coral beads and traditional crown' },
  { src: '/images/babalawo-3.jpg', alt: 'Babalawo portrait in ceremonial dress' },
  { src: '/images/babalawo-4.jpg', alt: 'Babalawo in white traditional attire' },
  { src: '/images/babalawo-5.jpg', alt: 'Babalawo smiling in traditional dress' },
];

export default function AboutPage() {
  const t = useTranslations('about');
  const locale = useLocale();

  return (
    <>
      {/* Hero with Main Image */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />
        <div className="absolute inset-0 pattern-adinkra" />

        <div className="relative z-10 container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <p className="font-display text-gold-500 tracking-[0.3em] text-sm mb-4">{t('subtitle')}</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl gold-text tracking-wide mb-6">{t('title')}</h1>
              <div className="divider-gold mb-8 lg:justify-start">
                <div className="w-3 h-3 rotate-45 gold-bg" />
              </div>
              <p className="font-serif text-xl text-dark-300 max-w-xl">{t('intro')}</p>
            </div>

            {/* Hero Image */}
            <div className="relative order-1 lg:order-2">
              <div className="relative w-64 h-80 sm:w-80 sm:h-96 mx-auto">
                <div className="relative w-full h-full rounded-lg overflow-hidden border-2 border-gold-500/30">
                  <Image
                    src="/images/babalawo-3.jpg"
                    alt="Ifa Priest Ojuade Kabir"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
                <p className="font-display text-gold-500 text-sm tracking-wider mt-4 text-center">IFA PRIEST OJUADE KABIR</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-dark">
        <div className="absolute inset-0 bg-dark-900/50" />
        <div className="relative z-10 container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl gold-text text-center mb-12">{t('story.title')}</h2>
            <div className="space-y-6 font-body text-lg text-dark-300 leading-relaxed">
              <p>{t('story.p1')}</p>
              <p>{t('story.p2')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="section-dark">
        <div className="absolute inset-0 pattern-dots opacity-30" />
        <div className="relative z-10 container-custom">
          <div className="text-center mb-12">
            <p className="font-display text-gold-500 tracking-[0.3em] text-sm mb-4">{t('gallery.subtitle')}</p>
            <h2 className="font-display text-3xl gold-text">{t('gallery.title')}</h2>
          </div>

          {/* Responsive Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-[3/4] rounded-lg overflow-hidden border border-gold-900/30 hover:border-gold-500/50 transition-all duration-300"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-dark">
        <div className="absolute inset-0 bg-gradient-to-r from-gold-900/20 via-dark-950 to-gold-900/20" />
        <div className="relative z-10 container-custom text-center">
          <h2 className="font-display text-3xl gold-text mb-8">{t('philosophy.title')}</h2>
          <p className="font-serif text-xl text-dark-300 max-w-3xl mx-auto leading-relaxed">
            {t('philosophy.text')}
          </p>
        </div>
      </section>

      {/* Location */}
      <section className="section-dark">
        <div className="absolute inset-0 bg-dark-900/30" />
        <div className="relative z-10 container-custom text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-dark-900 border border-gold-700/30 rounded-lg">
            <svg className="w-6 h-6 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="font-display text-dark-200 tracking-wide">{t('location')}</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative">
        <div className="absolute inset-0 gold-bg opacity-10" />
        <div className="relative z-10 container-custom text-center">
          <Link href={`/${locale}/contact`} className="btn-gold text-lg px-12 py-5">
            {t('cta')} →
          </Link>
        </div>
      </section>
    </>
  );
}
