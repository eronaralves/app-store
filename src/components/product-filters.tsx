'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

// Components
import { Button } from './ui/button';
import { Slider } from './ui/slider';
import { Checkbox } from './ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface FilterOptions {
  categories: string[];
  priceRange: [number, number];
  inStock: boolean;
  brands: string[];
}

export function ProductFilters() {
  const [filters, setFilters] = useState<FilterOptions>({
    categories: [],
    priceRange: [0, 10000],
    inStock: false,
    brands: [],
  });

  const t = useTranslations('components.filters');

  const categories = [
    'electronics',
    'clothing',
    'home',
    'sports',
    'books',
    'beauty',
  ] as const;

  const brands = ['samsung', 'apple', 'nike', 'adidas', 'sony', 'lg'] as const;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Filtros aplicados</span>
        <Button variant="ghost" size="sm">
          Limpar filtros
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">{t('categories.title')}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox id={category} />
              <label
                htmlFor={category}
                className="text-sm cursor-pointer flex-1"
              >
                {t(`categories.items.${category}`)}
              </label>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">{t('price_range.title')}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Slider
            value={filters.priceRange}
            onValueChange={(value) =>
              setFilters({ ...filters, priceRange: value as [number, number] })
            }
            max={10000}
            step={50}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>R$ {filters.priceRange[0]}</span>
            <span>R$ {filters.priceRange[1]}</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">{t('brands.title')}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {brands.map((brand) => (
            <div key={brand} className="flex items-center space-x-2">
              <Checkbox id={brand} />
              <label htmlFor={brand} className="text-sm cursor-pointer flex-1">
                {t(`brands.items.${brand}`)}
              </label>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">{t('availability.title')}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="availability"
              checked={filters.inStock}
              onCheckedChange={(checked) =>
                setFilters({ ...filters, inStock: !!checked })
              }
            />
            <label htmlFor="availability" className="text-sm cursor-pointer">
              {t('availability.items.in_stock')}
            </label>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
