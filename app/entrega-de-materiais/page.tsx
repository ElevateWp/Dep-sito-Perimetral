import type { Metadata } from 'next';
import ProductCategoryPage from '@/components/sections/products/ProductCategoryPage';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Entrega de materiais',
  description: 'Consulte o Depósito Perimetral sobre a entrega de materiais de construção em Iguatu, Ceará.',
  pathname: '/entrega-de-materiais/',
});

export default function MaterialsDeliveryPage() {
  return <ProductCategoryPage slug="entrega-de-materiais" />;
}
