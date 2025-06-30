import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { ArrowRight } from 'lucide-react';

// Components
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/product-card';

export function FeaturedProducts() {
  const t = useTranslations('home.featured_products');

  const featuredProducts = [
    {
      id: 1,
      name: 'Smartwatch Premium',
      price: 899,
      image:
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
      description:
        'Smartwatch de última geração com design elegante e funcionalidades avançadas.',
      category: 'Tecnologia',
      inStock: true,
    },
    {
      id: 2,
      name: 'Fones Wireless Pro',
      price: 599,
      image:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
      description:
        'Fones de ouvido sem fio com cancelamento de ruído e qualidade de áudio superior.',
      category: 'Áudio',
      inStock: true,
    },
    {
      id: 3,
      name: 'Mochila Design',
      price: 299,
      image:
        'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
      description:
        'Mochila moderna com compartimentos organizados e design sustentável.',
      category: 'Acessórios',
      inStock: true,
    },
    {
      id: 4,
      name: 'Câmera Instantânea',
      price: 199,
      image:
        'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=500&h=500&fit=crop',
      description: 'Câmera instantânea retrô para capturar momentos especiais.',
      category: 'Fotografia',
      inStock: false,
    },
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('title')}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="transform hover:scale-105 transition-transform duration-300"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="px-8 py-6 text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <Link href="/products">
              {t('see_products')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
