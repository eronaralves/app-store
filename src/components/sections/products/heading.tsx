import { ProductFilters } from '@/components/product-filters';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Filter, Grid, List } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function HeadingFilters() {
  const t = useTranslations('products');

  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8 space-y-4 lg:space-y-0">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          {t('title')}
        </h1>

        <p className="text-muted-foreground text-lg">
          10 {'\n'}
          {t('subtitle')}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center bg-muted/30 rounded-lg p-1">
          <Button variant={'default'} size="sm" className="h-8 px-3">
            <Grid className="h-4 w-4" />
          </Button>
          <Button variant={'ghost'} size="sm" className="h-8 px-3">
            <List className="h-4 w-4" />
          </Button>
        </div>

        <Select>
          <SelectTrigger className="w-48 bg-background shadow-sm">
            <SelectValue placeholder="Ordenar por" />
          </SelectTrigger>
          <SelectContent className="bg-background border shadow-xl">
            <SelectItem value="relevance">Mais relevantes</SelectItem>
            <SelectItem value="price-low">Menor preço</SelectItem>
            <SelectItem value="price-high">Maior preço</SelectItem>
            <SelectItem value="rating">Melhor avaliados</SelectItem>
            <SelectItem value="newest">Mais novos</SelectItem>
          </SelectContent>
        </Select>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="lg:hidden shadow-sm">
              <Filter className="h-4 w-4 mr-2" />
              Filtros
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="bg-background w-80 border-r shadow-xl"
          >
            <SheetHeader>
              <SheetTitle className="text-xl font-bold">Filtros</SheetTitle>
            </SheetHeader>

            <div className="mt-6 p-4 flex flex-col overflow-auto">
              <ProductFilters />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
