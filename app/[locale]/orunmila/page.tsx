import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { useTranslations, useLocale } from 'next-intl';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'orunmila' });
  return { title: t('title'), description: t('intro') };
}

// The 16 Principal Odu (Oju Odu / Olodu)
const oduMeji = [
  { name: 'Eji Ogbe', yoruba: 'Èjì Ogbè', signs: [['I', 'I'], ['I', 'I'], ['I', 'I'], ['I', 'I']] },
  { name: 'Oyeku Meji', yoruba: 'Òyěkú Méjì', signs: [['II', 'II'], ['II', 'II'], ['II', 'II'], ['II', 'II']] },
  { name: 'Iwori Meji', yoruba: 'Ìwòrì Méjì', signs: [['II', 'II'], ['I', 'I'], ['I', 'I'], ['II', 'II']] },
  { name: 'Odi Meji', yoruba: 'Òdí Méjì', signs: [['I', 'I'], ['II', 'II'], ['II', 'II'], ['I', 'I']] },
  { name: 'Irosun Meji', yoruba: 'Ìròsùn Méjì', signs: [['I', 'I'], ['I', 'I'], ['II', 'II'], ['II', 'II']] },
  { name: 'Owonrin Meji', yoruba: 'Òwónrín Méjì', signs: [['II', 'II'], ['II', 'II'], ['I', 'I'], ['I', 'I']] },
  { name: 'Obara Meji', yoruba: 'Ọ̀bàrà Méjì', signs: [['I', 'I'], ['II', 'II'], ['II', 'II'], ['II', 'II']] },
  { name: 'Okanran Meji', yoruba: 'Ọ̀kànràn Méjì', signs: [['II', 'II'], ['II', 'II'], ['II', 'II'], ['I', 'I']] },
  { name: 'Ogunda Meji', yoruba: 'Ògúndá Méjì', signs: [['I', 'I'], ['I', 'I'], ['I', 'I'], ['II', 'II']] },
  { name: 'Osa Meji', yoruba: 'Ọ̀sá Méjì', signs: [['II', 'II'], ['I', 'I'], ['I', 'I'], ['I', 'I']] },
  { name: 'Irete Meji', yoruba: 'Ìrẹ̀tẹ̀ Méjì', signs: [['I', 'I'], ['I', 'I'], ['II', 'II'], ['I', 'I']] },
  { name: 'Otura Meji', yoruba: 'Òtúrá Méjì', signs: [['I', 'I'], ['II', 'II'], ['I', 'I'], ['I', 'I']] },
  { name: 'Oturupon Meji', yoruba: 'Òtúrúpọ̀n Méjì', signs: [['II', 'II'], ['II', 'II'], ['I', 'I'], ['II', 'II']] },
  { name: 'Ose Meji', yoruba: 'Ọ̀ṣẹ́ Méjì', signs: [['I', 'I'], ['II', 'II'], ['I', 'I'], ['II', 'II']] },
  { name: 'Ofun Meji', yoruba: 'Òfún Méjì', signs: [['II', 'II'], ['I', 'I'], ['II', 'II'], ['I', 'I']] },
  { name: 'Ika Meji', yoruba: 'Ìká Méjì', signs: [['II', 'II'], ['I', 'I'], ['II', 'II'], ['II', 'II']] },
];

export default function OrunmilaPage() {
  const t = useTranslations('orunmila');
  const locale = useLocale();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />
        <div className="absolute inset-0 pattern-adinkra" />

        <div className="relative z-10 container-custom text-center">
          <div className="mb-8 animate-float">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full border-2 border-gold-500/50 bg-dark-900/50 overflow-hidden">
              <Image
                src="/images/babalawo-2.jpg"
                alt="Babalawo"
                width={96}
                height={96}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
          <p className="font-display text-gold-500 tracking-[0.3em] text-sm mb-4">{t('subtitle')}</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl gold-text tracking-wide mb-6">{t('title')}</h1>
          <div className="divider-gold mb-8">
            <div className="w-3 h-3 rotate-45 gold-bg" />
          </div>
          <p className="font-serif text-xl text-dark-300 max-w-3xl mx-auto">{t('intro')}</p>
        </div>
      </section>

      {/* Who is Orunmila */}
      <section className="section-dark">
        <div className="absolute inset-0 bg-dark-900/50" />
        <div className="relative z-10 container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl gold-text mb-8">{t('who.title')}</h2>
            <p className="font-serif text-xl text-dark-300 leading-relaxed">{t('who.text')}</p>
          </div>
        </div>
      </section>

      {/* What is Ifa */}
      <section className="section-dark">
        <div className="absolute inset-0 bg-gradient-to-r from-gold-900/20 via-dark-950 to-gold-900/20" />
        <div className="relative z-10 container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl gold-text mb-8">{t('what.title')}</h2>
            <p className="font-serif text-xl text-dark-300 leading-relaxed">{t('what.text')}</p>
          </div>
        </div>
      </section>

      {/* 16 Principal Odu Ifa */}
      <section className="section-dark">
        <div className="absolute inset-0 pattern-adinkra opacity-30" />
        <div className="relative z-10 container-custom">
          <div className="text-center mb-16">
            <p className="font-display text-gold-500 tracking-[0.3em] text-sm mb-4">{t('odu.subtitle')}</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl gold-text tracking-wide mb-6">{t('odu.title')}</h2>
            <div className="divider-gold mb-8">
              <div className="w-2 h-2 rotate-45 border border-gold-500" />
            </div>
            <p className="font-serif text-lg text-dark-400 max-w-3xl mx-auto">{t('odu.intro')}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {oduMeji.map((odu, index) => (
              <div key={odu.name} className="card-dark p-4 sm:p-6 group hover:border-gold-500/50 transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1 gold-bg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-t-lg" />

                {/* Odu Number */}
                <div className="text-gold-600/50 font-display text-xs sm:text-sm mb-2 sm:mb-3">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Odu Signs - 4 rows, 2 columns each as I or II */}
                <div className="flex flex-col items-center gap-1 mb-3 sm:mb-4">
                  {odu.signs.map((row: string[], rowIndex: number) => (
                    <div key={rowIndex} className="flex gap-3 sm:gap-4">
                      {row.map((sign: string, colIndex: number) => (
                        <span key={colIndex} className="font-mono text-gold-500 text-sm sm:text-base font-bold w-4 sm:w-5 text-center">
                          {sign}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>

                {/* Odu Name */}
                <h3 className="font-display text-base sm:text-lg text-gold-400 tracking-wide mb-1 group-hover:text-gold-300 transition-colors">
                  {odu.name}
                </h3>
                <p className="font-serif text-dark-400 text-xs sm:text-sm italic">
                  {odu.yoruba}
                </p>
              </div>
            ))}
          </div>

          {/* Note about 256 Odu */}
          <div className="mt-16 max-w-3xl mx-auto text-center">
            <div className="card-dark p-8 border-gold-700/50">
              <h3 className="font-display text-xl text-gold-400 mb-4">{t('odu.note.title')}</h3>
              <p className="font-body text-dark-400 leading-relaxed">{t('odu.note.text')}</p>
            </div>
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
