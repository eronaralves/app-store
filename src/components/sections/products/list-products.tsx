// Components
import { ProductCard } from '@/components/product-card';

export function ListProducts() {
  const products = [
    {
      id: 1,
      name: 'Garrafa Térmica Eco',
      price: 89.9,
      image:
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
      description:
        'Garrafa térmica feita com materiais recicláveis e isolamento a vácuo.',
      category: 'Acessórios',
      inStock: true,
      rating: 4.56,
      reviewCount: 324,
      discount: 19,
      originalPrice: 107.88,
      isNew: true,
      isBestSeller: true,
      freeShipping: false,
    },
    {
      id: 2,
      name: 'Camiseta Orgânica Unissex',
      price: 59.0,
      image:
        'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=500&h=500&fit=crop',
      description:
        'Camiseta feita com algodão 100% orgânico, confortável e sustentável.',
      category: 'Vestuário',
      inStock: true,
      rating: 3.87,
      reviewCount: 217,
      discount: undefined,
      originalPrice: undefined,
      isNew: false,
      isBestSeller: false,
      freeShipping: false,
    },
    {
      id: 3,
      name: 'Escova de Bambu',
      price: 19.9,
      image:
        'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
      description: 'Escova de dentes biodegradável com cabo de bambu.',
      category: 'Higiene',
      inStock: false,
      rating: 4.33,
      reviewCount: 111,
      discount: undefined,
      originalPrice: undefined,
      isNew: false,
      isBestSeller: true,
      freeShipping: false,
    },
    {
      id: 4,
      name: 'Mochila Sustentável',
      price: 229.0,
      image:
        'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=500&h=500&fit=crop',
      description: 'Mochila feita com tecidos reciclados e resistente à água.',
      category: 'Acessórios',
      inStock: true,
      rating: 4.71,
      reviewCount: 483,
      discount: 23,
      originalPrice: 274.8,
      isNew: false,
      isBestSeller: false,
      freeShipping: true,
    },
    {
      id: 5,
      name: 'Sabonete Natural de Lavanda',
      price: 14.5,
      image:
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
      description:
        'Sabonete artesanal com óleo essencial de lavanda e sem químicos.',
      category: 'Higiene',
      inStock: true,
      rating: 3.79,
      reviewCount: 63,
      discount: undefined,
      originalPrice: undefined,
      isNew: true,
      isBestSeller: false,
      freeShipping: false,
    },
    {
      id: 6,
      name: 'Tênis Vegano Conforto',
      price: 279.9,
      image:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
      description: 'Tênis feito com materiais veganos, confortável e estiloso.',
      category: 'Vestuário',
      inStock: true,
      rating: 4.08,
      reviewCount: 415,
      discount: undefined,
      originalPrice: undefined,
      isNew: false,
      isBestSeller: true,
      freeShipping: true,
    },
    {
      id: 7,
      name: 'Pano de Cera de Abelha Reutilizável',
      price: 34.0,
      image:
        'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
      description:
        'Alternativa ecológica ao plástico filme, ideal para embalar alimentos.',
      category: 'Casa',
      inStock: true,
      rating: 4.91,
      reviewCount: 356,
      discount: 17,
      originalPrice: 40.8,
      isNew: false,
      isBestSeller: false,
      freeShipping: false,
    },
    {
      id: 8,
      name: 'Canudo de Inox Reutilizável',
      price: 9.9,
      image:
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
      description: 'Canudo durável e reutilizável com escovinha para limpeza.',
      category: 'Acessórios',
      inStock: true,
      rating: 3.96,
      reviewCount: 190,
      discount: undefined,
      originalPrice: undefined,
      isNew: false,
      isBestSeller: true,
      freeShipping: false,
    },
    {
      id: 9,
      name: 'Óleo Essencial de Eucalipto',
      price: 24.9,
      image:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
      description: 'Óleo essencial 100% puro, ideal para aromaterapia.',
      category: 'Bem-estar',
      inStock: true,
      rating: 4.32,
      reviewCount: 277,
      discount: undefined,
      originalPrice: undefined,
      isNew: true,
      isBestSeller: false,
      freeShipping: false,
    },
    {
      id: 10,
      name: 'Copo de Silicone Retrátil',
      price: 44.9,
      image:
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
      description: 'Copo reutilizável, retrátil e fácil de transportar.',
      category: 'Acessórios',
      inStock: false,
      rating: 4.61,
      reviewCount: 391,
      discount: 28,
      originalPrice: 53.88,
      isNew: false,
      isBestSeller: true,
      freeShipping: false,
    },
  ];

  return (
    <div className="flex-1">
      <div
        className={
          'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6'
        }
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="animate-fade-in flex-1 flex flex-col"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
