'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

// Lib
import { cn } from '@/lib/utils';

export function NavLinks() {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations('components.nav');

  const navItems = [
    { path: '/', label: t('home') },
    { path: '/products', label: t('products') },
    { path: '/contact', label: t('contact') },
  ];

  return (
    <div className="border-t border-border/40 bg-gradient-to-r from-muted/20 via-transparent to-muted/20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="hidden md:flex items-center space-x-1 py-3">
          {navItems.map((item) => {
            const isActive =
              pathname.replace(
                `${item.path !== '/' ? `/${locale}` : locale}`,
                ''
              ) === item.path;

            return (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  'px-4 py-2 font-medium transition-all duration-300 rounded-lg',
                  isActive
                    ? 'text-primary bg-primary/10 shadow-sm'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
