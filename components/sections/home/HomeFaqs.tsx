import React from 'react';
import Accordion, { AccordionItem } from '@/components/ui/Accordion';
import JsonLd from '@/components/ui/JsonLd';
import { generateFaqSchema } from '@/lib/seo';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';
import { CLINIC_INFO } from '@/lib/clinic-data';

const HOME_FAQS: AccordionItem[] = [
  {
    question: 'Quais são as opções de compra disponíveis?',
    answer: 'A loja oferece compras presenciais, retirada no local e entrega.',
    relatedLink: { href: '/contact/', label: 'Fale com a loja →' },
  },
  {
    question: 'Onde fica o Depósito Perimetral?',
    answer: CLINIC_INFO.primaryLocation.directions,
    relatedLink: { href: '/contact/', label: 'Como chegar →' },
  },
  {
    question: 'A loja oferece entrega?',
    answer: 'Sim. Entre em contato para confirmar a disponibilidade e combinar a entrega.',
    relatedLink: { href: '/contact/', label: 'Fale com a loja →' },
  },
  {
    question: 'Como posso entrar em contato com a loja?',
    answer: `Ligue para ${CLINIC_INFO.contact.phone}.`,
    relatedLink: { href: '/contact/', label: 'Entre em contato →' },
  },
  {
    question: 'Qual é o telefone da loja?',
    answer: CLINIC_INFO.contact.phone,
    relatedLink: { href: '/contact/', label: 'Fale conosco →' },
  },
];

export default function HomeFaqs() {
  return (
    <section className="relative z-20 w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <JsonLd data={generateFaqSchema(HOME_FAQS)} />
      <div className="max-w-site mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <AnimateOnScroll animation="fade-right" duration={0.85} className="lg:col-span-5">
            <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
              Perguntas frequentes
            </span>
            <h2 className="font-display text-33 md:text-41 text-forest-ink mb-6">
              Sobre a loja
            </h2>
            <p className="font-body text-15 md:text-17 text-forest-ink/80 leading-relaxed mb-6">
              Saiba mais sobre compras na loja, retirada e entrega.
            </p>
            <div className="p-6 bg-mist/40 border border-mist">
              <span className="font-body text-13 text-forest font-medium block mb-1">
                Ficou com alguma dúvida?
              </span>
              <p className="font-body text-13 text-forest-ink/70 mb-3">
                Ligue para a loja. Nossa equipe terá prazer em ajudar.
              </p>
              <a
                href={`tel:${CLINIC_INFO.contact.phone.replace(/[^0-9+]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-13 text-forest font-medium underline underline-offset-4"
              >
                Ligar para a loja
              </a>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-left" duration={0.85} className="lg:col-span-7">
            <Accordion items={HOME_FAQS} />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
