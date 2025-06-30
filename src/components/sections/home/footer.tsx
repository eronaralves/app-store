import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { ArrowRight } from 'lucide-react';

// Components
import { Button } from '@/components/ui/button';

export function Footer() {
  const t = useTranslations('home.footer');

  return (
    <footer className="py-20 bg-gradient-to-r from-primary to-primary/80">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
            {t('title')}
          </h2>
          <p className="text-xl text-primary-foreground/90">{t('subtitle')}</p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="px-8 py-6 text-lg hover:scale-105 transition-transform duration-300"
          >
            <Link href="/products">
              {t('explore')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
