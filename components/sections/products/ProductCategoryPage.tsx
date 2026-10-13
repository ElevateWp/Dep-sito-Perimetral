import Image from 'next/image';
import Link from 'next/link';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Button from '@/components/ui/Button';
import { CLINIC_INFO, SERVICES } from '@/lib/clinic-data';

const categoryImages: Record<string, { src: string; alt: string }> = {
  'materiais-de-construcao': { src: '/images/deposito-fachada.jpg', alt: 'Fachada do Depósito Perimetral' },
  'tubos-de-concreto': { src: '/images/deposito-tubos.jpg', alt: 'Tubos de concreto no Depósito Perimetral' },
  'blocos-decorativos': { src: '/images/deposito-bloco-decorativo.jpg', alt: 'Bloco decorativo de concreto' },
  'materiais-para-obras': { src: '/images/deposito-parede-decorativa.jpg', alt: 'Acabamento decorativo em parede de concreto' },
  'retirada-no-local': { src: '/images/deposito-silo.jpg', alt: 'Entrega de materiais de construção em uma obra' },
  'entrega-de-materiais': { src: '/images/deposito-entrega.jpg', alt: 'Caminhão com materiais de construção para entrega' },
};

export default function ProductCategoryPage({ slug }: { slug: string }) {
  const category = SERVICES.find((item) => item.slug === slug);
  if (!category) return null;
  const image = categoryImages[slug] || categoryImages['materiais-de-construcao'];

  return (
    <main className="w-full bg-paper">
      <section className="border-b border-mist bg-paper-secondary py-14 md:py-20">
        <div className="mx-auto grid max-w-site grid-cols-1 items-center gap-10 px-6 md:px-12 lg:grid-cols-2">
          <div>
            <Breadcrumbs items={[{ name: category.name, path: `/${slug}/` }]} />
            <AnimateOnScroll animation="fade-right">
              <span className="mb-3 mt-8 block font-body text-13 font-medium uppercase tracking-wider text-brand">Depósito Perimetral · Iguatu</span>
              <h1 className="font-display text-41 text-forest-ink md:text-55">{category.name}</h1>
              <p className="mt-5 max-w-xl font-body text-17 leading-relaxed text-forest-light">{category.shortDescription}</p>
              <p className="mt-4 max-w-xl font-body text-15 leading-relaxed text-forest-light">Fale com a loja para consultar a disponibilidade e saber mais sobre o seu projeto.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={`tel:${CLINIC_INFO.contact.phone.replace(/[^0-9+]/g, '')}`} variant="forest" size="lg">Ligar para a loja</Button>
                <Link href="/contact/" className="inline-flex min-h-12 items-center rounded-pill border border-mist px-6 font-body text-15 text-forest-ink hover:border-brand">Informações da loja</Link>
              </div>
            </AnimateOnScroll>
          </div>
          <AnimateOnScroll animation="zoom-in" duration={0.8}>
            <div className="relative aspect-[4/3] overflow-hidden border border-mist bg-paper shadow-sm">
              <Image src={image.src} alt={image.alt} fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-site px-6 md:px-12">
          <AnimateOnScroll animation="fade-up">
            <span className="mb-2 block font-body text-13 font-medium uppercase tracking-wider text-brand">Opções de compra</span>
            <h2 className="font-display text-33 text-forest-ink md:text-41">Compre, retire ou combine a entrega</h2>
          </AnimateOnScroll>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {CLINIC_INFO.identityHighlights.map((highlight, index) => (
              <AnimateOnScroll key={highlight} animation="fade-up" delay={index * 0.1}>
                <div className="h-full border border-mist bg-paper p-6">
                  <span className="mb-3 block font-display text-21 text-forest-ink">{highlight}</span>
                  <p className="font-body text-15 leading-relaxed text-forest-light">Fale com a equipe para saber mais e consultar a disponibilidade.</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest py-12 text-paper md:py-16">
        <AnimateOnScroll animation="fade-up" className="mx-auto flex max-w-site flex-col justify-between gap-6 px-6 sm:flex-row sm:items-center md:px-12">
          <div>
            <h2 className="font-display text-26 md:text-33">Dúvidas sobre {category.name.toLowerCase()}?</h2>
            <p className="mt-2 font-body text-15 text-paper/75">Ligue ou visite o Depósito Perimetral em Iguatu.</p>
          </div>
          <Button href="/contact/" variant="lime" size="lg">Fale com a loja</Button>
        </AnimateOnScroll>
      </section>
    </main>
  );
}
