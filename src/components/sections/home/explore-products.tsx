import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// Components
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';

export function ExploreProducts() {
  const t = useTranslations('home.explore_products');

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative py-10 md:py-32 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent leading-tight">
            {t('title')}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6">
          <Button
            asChild
            size="lg"
            className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Link href="/products">
              {t('explore')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
