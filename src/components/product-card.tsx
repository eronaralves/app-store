import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Heart, ShoppingCart, Truck } from 'lucide-react';

// DTOs
import type { Product } from '@/dtos/products';

// Components
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { StarRating } from './star-rating';
import { Card, CardContent } from './ui/card';

interface ProductCardProps {
  product: Product & {
    rating?: number;
    reviewCount?: number;
    discount?: number;
    originalPrice?: number;
    isNew?: boolean;
    isBestSeller?: boolean;
    freeShipping?: boolean;
  };
}

export function ProductCard({ product }: ProductCardProps) {
  const t = useTranslations('common');

  return (
    <Card className="flex-1 group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden">
      <CardContent className="p-0 h-full flex flex-col">
        <div className="relative overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={400}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />

          <div className="absolute top-2 left-2 flex flex-col space-y-1">
            {product.isNew && (
              <Badge className="bg-green-500 text-white">NOVO</Badge>
            )}
            {product.isBestSeller && (
              <Badge className="bg-orange-500 text-white">MAIS VENDIDO</Badge>
            )}
            {product.discount && (
              <Badge className="bg-red-500 text-white">
                -{product.discount}%
              </Badge>
            )}
          </div>

          <div className="absolute top-2 right-2">
            <Button
              variant="ghost"
              size="icon"
              className="bg-background/80 hover:bg-background backdrop-blur-sm"
            >
              <Heart className={`h-4 w-4`} />
            </Button>
          </div>

          {!product.inStock && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="text-white uppercase font-semibold bg-black/70 px-3 py-1 rounded">
                {t('out_of_stock')}
              </span>
            </div>
          )}
        </div>

        <div className="p-4 flex flex-col space-y-3 flex-1">
          {product.freeShipping && (
            <div className="flex items-center text-green-600 text-xs font-medium">
              <Truck className="h-3 w-3 mr-1" />
              {t('free_shipping')}
            </div>
          )}

          <div>
            <span className="text-xs text-muted-foreground uppercase tracking-wide">
              {product.category}
            </span>
            <h3 className="font-semibold text-base line-clamp-2 mt-1 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
          </div>

          {product.rating && (
            <StarRating
              rating={product.rating}
              totalReviews={product.reviewCount}
              size="sm"
            />
          )}

          <div className="space-y-1">
            {product.originalPrice && product.discount && (
              <div className="flex items-center space-x-2">
                <span className="text-xs text-muted-foreground line-through">
                  R$ {product.originalPrice.toFixed(2)}
                </span>
                <Badge variant="destructive" className="text-xs">
                  -{product.discount}% OFF
                </Badge>
              </div>
            )}
            <div className="flex items-baseline space-x-1">
              <span className="text-2xl font-bold text-primary">
                R$ {product.price.toFixed(2)}
              </span>
              <span className="text-xs text-muted-foreground">
                ou 12x R$ {(product.price / 12).toFixed(2)}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span
              className={`text-xs px-2 py-1 rounded-full ${
                product.inStock
                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                  : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
              }`}
            >
              {product.inStock ? t('available') : t('unavailable')}
            </span>
          </div>

          <Button
            disabled={!product.inStock}
            className="w-full mt-auto bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            {product.inStock ? t('buy') : t('unavailable')}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
