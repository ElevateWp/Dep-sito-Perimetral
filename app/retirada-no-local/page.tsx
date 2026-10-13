import type { Metadata } from 'next';
import ProductCategoryPage from '@/components/sections/products/ProductCategoryPage';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Retirada no local',
  description: 'Compre no Depósito Perimetral e consulte a disponibilidade de retirada no local em Iguatu.',
  pathname: '/retirada-no-local/',
});

export default function CurbsidePickupPage() {
  return <ProductCategoryPage slug="retirada-no-local" />;
}
