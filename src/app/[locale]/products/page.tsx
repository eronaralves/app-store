import { SlidersHorizontal } from 'lucide-react';

// Components
import { Card, CardContent } from '@/components/ui/card';
import { ProductFilters } from '@/components/product-filters';
import { HeadingFilters } from '@/components/sections/products/heading';
import { ListProducts } from '@/components/sections/products/list-products';

export default function Products() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/10">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <HeadingFilters />

        <div className="flex gap-8">
          <div className="hidden lg:block w-80 flex-shrink-0">
            <Card className="sticky top-24 shadow-lg border-0 bg-gradient-to-br from-background to-muted/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <SlidersHorizontal className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-bold">Filtros</h2>
                </div>

                <ProductFilters />
              </CardContent>
            </Card>
          </div>

          <ListProducts />
        </div>
      </div>
    </div>
  );
}
