// Components
import { Footer } from '@/components/sections/home/footer';
import { Features } from '@/components/sections/home/features';
import { ExploreProducts } from '@/components/sections/home/explore-products';
import { FeaturedProducts } from '@/components/sections/home/featured-products';

export default function Home() {
  return (
    <main className="min-h-screen">
      <ExploreProducts />

      <FeaturedProducts />

      <Features />

      <Footer />
    </main>
  );
}
