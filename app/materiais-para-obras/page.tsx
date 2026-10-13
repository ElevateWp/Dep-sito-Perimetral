import type { Metadata } from 'next';
import ProductCategoryPage from '@/components/sections/products/ProductCategoryPage';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Materiais para obras',
  description: 'Materiais para construção e reforma no Depósito Perimetral, em Iguatu.',
  pathname: '/materiais-para-obras/',
});

export default function ConstructionMaterialsPage() {
  return <ProductCategoryPage slug="materiais-para-obras" />;
}
