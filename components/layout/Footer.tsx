import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const locale = useLocale();

  const navItems = [
    { href: `/${locale}`, label: tNav('home') },
    { href: `/${locale}/about`, label: tNav('about') },
    { href: `/${locale}/services`, label: tNav('services') },
    { href: `/${locale}/orunmila`, label: tNav('orunmila') },
    { href: `/${locale}/contact`, label: tNav('contact') },
  ];

  return (
    <footer className="relative border-t border-gold-900/30 bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center">
          {/* Logo */}
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full gold-bg flex items-center justify-center shadow-lg">
              <span className="font-display text-dark-950 text-xl font-bold">I</span>
            </div>
            <div className="text-left">
              <span className="font-display text-2xl tracking-widest gold-text font-semibold block">
                IFANGBAYELO
              </span>
              <span className="font-display text-sm tracking-[0.2em] text-dark-400">
                TRADO MEDICARE
              </span>
            </div>
          </div>

          {/* Tagline */}
          <p className="font-serif text-lg text-dark-400 mb-8">{t('tagline')}</p>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-6 mb-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-body text-dark-400 hover:text-gold-400 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Registration */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <svg className="w-5 h-5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="font-body text-sm text-dark-400">{t('registered')}</span>
          </div>
          <p className="font-display text-base text-gold-500 tracking-wider mb-8">{t('reg')}</p>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-24 h-px bg-gold-900/50" />
            <div className="w-2 h-2 rotate-45 gold-bg" />
            <div className="w-24 h-px bg-gold-900/50" />
          </div>

          <p className="font-body text-sm text-dark-500">{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
