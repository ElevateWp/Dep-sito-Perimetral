import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';

export default function HomeFeaturedTreatments() {
  return (
    <section className="relative z-20 w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <AnimateOnScroll animation="fade-up" duration={0.8} className="mb-16">
          <span className="font-body text-13 text-[#292525] block mb-2 font-medium uppercase tracking-wider">
            Materiais de construção
          </span>
          <h2 className="font-display text-33 md:text-41 text-[#292525]">
            Materiais para o seu projeto
          </h2>
        </AnimateOnScroll>

        <div className="flex flex-col space-y-24">
          {/* Products and shopping options */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <AnimateOnScroll animation="fade-right" duration={0.9} className="lg:col-span-6 order-2 lg:order-1">
              <span className="font-body text-13 text-[#292525] uppercase tracking-wider block mb-2 font-medium">
                Materiais de construção
              </span>
              <h3 className="font-display text-26 md:text-33 text-[#292525] mb-4">
                Produtos para o seu projeto
              </h3>
              <p className="font-body text-15 md:text-17 text-[#292525]/80 leading-relaxed mb-6">
                Encontre materiais para diferentes etapas da sua obra ou reforma.
              </p>
              <div className="p-4 bg-[#F8F5F5] border-l-4 border-[#292525] mb-6 rounded-sm">
                <span className="font-body text-13 text-[#292525]/80">
                  <strong className="text-[#292525] font-semibold">Opções de compra:</strong> compras na loja, retirada no local e entrega.
                </span>
              </div>
              <Button href={`tel:+5588988170528`} variant="ghost" size="md">
                Fale com a loja
              </Button>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-left" duration={0.9} className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm">
                <Image
                  src="/images/deposito-fachada.jpg"
                  alt="Fachada do Depósito Perimetral"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>
            </AnimateOnScroll>
          </div>

          {/* Materials and delivery */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <AnimateOnScroll animation="fade-right" duration={0.9} className="lg:col-span-6">
              <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm">
                <Image
                  src="/images/deposito-entrega.jpg"
                  alt="Caminhão carregado com materiais de construção"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-left" duration={0.9} className="lg:col-span-6">
              <span className="font-body text-13 text-[#292525] uppercase tracking-wider block mb-2 font-medium">
                Tubos e acabamentos
              </span>
              <h3 className="font-display text-26 md:text-33 text-[#292525] mb-4">
                Materiais para diferentes projetos
              </h3>
              <p className="font-body text-15 md:text-17 text-[#292525]/80 leading-relaxed mb-6">
                Conheça alguns materiais e produtos apresentados pela loja.
              </p>
              <div className="p-4 bg-[#F8F5F5] border-l-4 border-[#292525] mb-6 rounded-sm">
                <span className="font-body text-13 text-[#292525]/80">
                  <strong className="text-[#292525] font-semibold">Consulte nossa equipe:</strong> confirme a disponibilidade e a entrega.
                </span>
              </div>
              <Button href={`tel:+5588988170528`} variant="ghost" size="md">
                Ligar para a loja
              </Button>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
