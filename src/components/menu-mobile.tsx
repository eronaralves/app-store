'use client';

import { useState } from 'react';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { Heart, LogIn, Menu, ShoppingCart } from 'lucide-react';

// Components
import { Button } from './ui/button';
import { SearchBarMobile } from './search-bar-mobile';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from './ui/sheet';

export function MenuMobile() {
  const searchParams = useSearchParams();
  const queryParams = searchParams.get('q') ?? '';

  const [isSearching, setIsSearching] = useState(queryParams.length > 0);

  const t = useTranslations();

  const navItems = [
    { path: '/', label: t('components.nav.home') },
    { path: '/products', label: t('components.nav.products') },
    { path: '/contact', label: t('components.nav.contact') },
  ];

  console.log({
    isSearching,
    queryParams,
  });

  return (
    <div className="md:hidden flex items-center gap-1.5">
      <SearchBarMobile
        isSearching={isSearching}
        setIsSearching={setIsSearching}
      />

      {!isSearching && !queryParams && (
        <>
          <Link href="/wishlist" tabIndex={-1}>
            <Button variant="ghost" size="icon" className="relative">
              <Heart className="h-4 w-4" />
            </Button>
          </Link>

          <Link href="/cart" tabIndex={-1}>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>

            <SheetContent className="bg-background w-80">
              <div className="flex flex-col px-4 py-4 h-full">
                <SheetTitle>Menu</SheetTitle>

                <div className="border-b pb-4 mt-4 mb-4">
                  <Button variant="default" className="w-full">
                    <LogIn className="h-4 w-4 mr-2" />
                    {t('common.login')}
                  </Button>
                </div>

                <nav className="flex-1 space-y-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      className="block py-3 px-4 text-lg font-medium hover:bg-accent/50 rounded-lg transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </>
      )}
    </div>
  );
}
