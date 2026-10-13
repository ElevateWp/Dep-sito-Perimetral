import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';

export default function HomeBeforeAfter() {
  return (
    <section className="relative z-20 w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <AnimateOnScroll animation="fade-right" duration={0.85} className="lg:col-span-5">
            <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
              Materiais de construção
            </span>
            <h2 className="font-display text-33 md:text-41 text-forest-ink mb-6">
              Materiais para construção e reforma
            </h2>
            <p className="font-body text-15 md:text-17 text-forest-ink/80 leading-relaxed mb-6">
              Visite a loja e conheça alguns dos materiais de construção disponíveis em Iguatu.
            </p>
            <Link
              href="https://www.google.com/maps/search/?api=1&query=Rua+Jo%C3%A3o+Vicente+Alves+911+Iguatu+CE+63508-770+Brazil"
              className="font-body text-15 text-forest font-medium hover:underline underline-offset-4"
            >
              Como chegar →
            </Link>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-left" duration={0.85} className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm">
                <Image
                  src="/images/deposito-silo.jpg"
                  alt="Materiais de construção em Iguatu"
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
                <span className="absolute bottom-3 left-3 bg-[#262222]/85 text-white font-body text-12 px-3 py-1">
                  Materiais de construção
                </span>
              </div>
              <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm">
                <Image
                  src="/images/deposito-fachada.jpg"
                  alt="Fachada da loja do Depósito Perimetral"
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
                <span className="absolute bottom-3 left-3 bg-[#262222]/85 text-white font-body text-12 px-3 py-1">
                  Depósito Perimetral
                </span>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
