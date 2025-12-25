'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import { locales, type Locale } from '@/i18n';
import clsx from 'clsx';

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/about`, label: t('about') },
    { href: `/${locale}/services`, label: t('services') },
    { href: `/${locale}/orunmila`, label: t('orunmila') },
    { href: `/${locale}/contact`, label: t('contact') },
  ];

  const switchLocale = (newLocale: Locale) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    return segments.join('/');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-950/95 backdrop-blur-md border-b border-gold-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-3 group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-gold-500/50 shadow-lg shadow-gold-900/50">
              <Image
                src="/images/babalawo-1.jpg"
                alt="Ifangbayelo"
                width={48}
                height={48}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="hidden sm:block">
              <span className="font-display text-sm md:text-base tracking-widest gold-text font-semibold">
                IFANGBAYELO
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  'text-sm font-body tracking-wide transition-colors',
                  pathname === item.href ? 'text-gold-400' : 'text-dark-300 hover:text-gold-400'
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Language + Mobile Menu */}
          <div className="flex items-center gap-3">
            <div className="flex border border-gold-700/50 rounded overflow-hidden">
              {locales.map((l) => (
                <Link
                  key={l}
                  href={switchLocale(l)}
                  className={clsx(
                    'px-3 py-1.5 text-xs font-display tracking-wider transition-all',
                    locale === l
                      ? 'gold-bg text-dark-950 font-semibold'
                      : 'text-dark-400 hover:text-gold-400'
                  )}
                >
                  {l.toUpperCase()}
                </Link>
              ))}
            </div>
            <button
              className="lg:hidden p-2 text-gold-500"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="lg:hidden py-4 border-t border-gold-900/30">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={clsx(
                  'block w-full text-left py-3 px-4 font-body transition-all rounded',
                  pathname === item.href
                    ? 'text-gold-400 bg-gold-900/20'
                    : 'text-dark-300 hover:text-gold-400 hover:bg-gold-900/10'
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
