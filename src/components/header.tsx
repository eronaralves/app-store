import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Heart, LogIn, ShoppingCart, User } from 'lucide-react';

// Components
import { Button } from './ui/button';
import { SearchBar } from './search-bar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { MenuMobile } from './menu-mobile';

export function Header() {
  const t = useTranslations();

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center space-x-2 text-primary font-medium py-1">
          <span>🚚</span>
          <span className="mt-1 text-sm">{t('common.free_shipping')}</span>
        </div>

        <div className="h-16 flex items-center justify-between gap-5">
          <Link
            href="/"
            className="flex items-center space-x-2 md:space-x-3 group"
          >
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary via-primary/90 to-primary/70 flex items-center justify-center duration-300">
              <span className="text-primary-foreground font-bold text-lg">
                E
              </span>
            </div>
            <span className="hidden md:flex font-bold text-xl md:text-2xl bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
              EcoStore
            </span>
          </Link>

          {/* Web */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <SearchBar />
          </div>

          {/* Web */}
          <nav className="hidden md:flex items-center space-x-3">
            <Link href="/wishlist" tabIndex={-1}>
              <Button
                variant="ghost"
                size="icon"
                className="relative cursor-pointer hover:bg-accent/50 transition-all duration-300 hover:scale-110"
              >
                <Heart className="h-5 w-5" />
              </Button>
            </Link>

            <Link href="/wishlist" tabIndex={-1}>
              <Button
                variant="ghost"
                size="icon"
                className="relative cursor-pointer hover:bg-accent/50 transition-all duration-300 hover:scale-110"
              >
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative hover:bg-accent/50 transition-all duration-300 hover:scale-110 cursor-pointer"
                >
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="end"
                className="bg-background border shadow-xl w-56"
              >
                <DropdownMenuItem className="cursor-pointer">
                  <Link href="/profile" className="flex items-center">
                    <User className="h-4 w-4 mr-3" />
                    {t('components.nav.profile')}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Link href="/wishlist" className="flex items-center">
                    <Heart className="h-4 w-4 mr-3" />
                    {t('components.nav.wishlist')}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer text-destructive focus:text-destructive">
                  <LogIn className="h-4 w-4 mr-3 text-destructive" />
                  {t('common.logout')}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Mobile */}
          <MenuMobile />
        </div>
      </div>
    </header>
  );
}
