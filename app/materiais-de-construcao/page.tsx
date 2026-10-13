import type { Metadata } from 'next';
import ProductCategoryPage from '@/components/sections/products/ProductCategoryPage';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Materiais de construção',
  description: 'Materiais de construção para projetos de construção e reforma no Depósito Perimetral, em Iguatu, Ceará.',
  pathname: '/materiais-de-construcao/',
});

export default function BuildingMaterialsPage() {
  return <ProductCategoryPage slug="materiais-de-construcao" />;
}
