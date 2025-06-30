import { useTranslations } from 'next-intl';

import { Star, Truck, Shield, Headphones } from 'lucide-react';

// Components
import { Card, CardContent } from '@/components/ui/card';

export function Features() {
  const t = useTranslations('home.features');

  const features = [
    {
      icon: Truck,
      title: t('fast_delivery.title'),
      description: t('fast_delivery.description'),
    },
    {
      icon: Shield,
      title: t('safe_purchase.title'),
      description: t('safe_purchase.description'),
    },
    {
      icon: Headphones,
      title: t('support.title'),
      description: t('support.description'),
    },
    {
      icon: Star,
      title: t('qualidade_premium.title'),
      description: t('qualidade_premium.description'),
    },
  ];

  return (
    <section className="py-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card"
            >
              <CardContent className="space-y-4 p-0">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
