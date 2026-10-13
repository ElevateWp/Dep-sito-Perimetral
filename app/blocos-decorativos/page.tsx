import type { Metadata } from 'next';
import ProductCategoryPage from '@/components/sections/products/ProductCategoryPage';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Blocos decorativos',
  description: 'Conheça os blocos decorativos de concreto do Depósito Perimetral, em Iguatu, Ceará.',
  pathname: '/blocos-decorativos/',
});

export default function DecorativeBlocksPage() {
  return <ProductCategoryPage slug="blocos-decorativos" />;
}
