import type { Metadata } from 'next';
import ProductCategoryPage from '@/components/sections/products/ProductCategoryPage';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Tubos de concreto',
  description: 'Consulte o Depósito Perimetral sobre tubos de concreto para seu projeto em Iguatu.',
  pathname: '/tubos-de-concreto/',
});

export default function ConcretePipesPage() {
  return <ProductCategoryPage slug="tubos-de-concreto" />;
}
