export interface DentistProfile {
  id: string;
  slug: string;
  name: string;
  title: string;
  qualifications: string;
  specialization: string;
  experienceYears: number;
  bio: string;
  philosophy: string;
  education: string[];
  memberships: string[];
  specialties: string[];
  image: string;
  warmImage: string;
}

export interface ServiceDetail {
  slug: string;
  name: string;
  navLabel: string;
  tagline: string;
  shortDescription: string;
  clinicalExplanation: string;
  whoNeeds: string[];
  benefits: string[];
  indications: { condition: string; explanation: string }[];
  procedureSteps: { stepNumber: number; title: string; duration: string; description: string; clinicalDetails: string }[];
  recoveryTimeline: { period: string; expectedSensations: string; careProtocol: string }[];
  costTransparency: { baseRange: string; factors: string[]; whatIsIncluded: string[]; note: string };
  beforeAfterCase: { category: string; clinicalContext: string; beforeLabel: string; afterLabel: string; beforeImage: string; afterImage: string; timeframe: string };
  assignedDentistId: string;
  faqs: { question: string; answer: string; relatedSlug?: string }[];
}

export interface ClinicInformation {
  name: string;
  legalName: string;
  tagline: string;
  establishedYear?: number;
  primaryLocation: {
    street: string;
    suite: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    directions: string;
    landmarks: string;
    coordinates?: { lat: number; lng: number };
  };
  contact: { phone: string; emergencyPhone: string; email?: string; whatsapp: string };
  identityHighlights: string[];
  schedule: { day: string; hours: string; isOpenToday?: boolean; isEmergencyOnly?: boolean }[];
  verifiedStats: { value: number; suffix: string; label: string; description: string }[];
  accreditations: string[];
}

export const CLINIC_INFO: ClinicInformation = {
  name: 'Depósito Perimetral',
  legalName: 'Depósito Perimetral',
  tagline: 'Materiais de construção para o seu projeto.',
  primaryLocation: {
    street: 'Rua João Vicente Alves, 911, João Paulo 2',
    suite: '',
    city: 'Iguatu',
    state: 'Ceará',
    postalCode: '63508-770',
    country: 'BR',
    directions: 'Rua João Vicente Alves, 911, João Paulo 2, Iguatu - CE, 63508-770, Brasil',
    landmarks: 'MM5M+2W Iguatu, Ceará, Brasil',
  },
  contact: {
    phone: '+55 88 98817-0528',
    emergencyPhone: '+55 88 98817-0528',
    whatsapp: '+55 88 98817-0528',
    email: '',
  },
  identityHighlights: ['Compras na loja', 'Retirada no local', 'Entrega'],
  schedule: [
    { day: 'Terça-feira', hours: 'Abre às 7h' },
  ],
  verifiedStats: [
    { value: 3, suffix: ',9', label: 'Nota no Google', description: 'Com base em 88 avaliações no Google.' },
    { value: 88, suffix: '', label: 'Avaliações no Google', description: 'Avaliações de clientes no Google.' },
  ],
  accreditations: [],
};

export const DENTISTS: DentistProfile[] = [
  {
    id: 'roofing-team',
    slug: 'our-doctor',
    name: 'Depósito Perimetral',
    title: 'Loja de materiais de construção',
    qualifications: 'Iguatu, Ceará',
    specialization: 'Materiais para construção e reforma',
    experienceYears: 0,
    bio: 'Loja de materiais de construção em Iguatu com compras na loja, retirada no local e entrega.',
    philosophy: 'Ajudamos clientes a encontrar materiais para projetos de construção e reforma.',
    education: [],
    memberships: [],
    specialties: ['Materiais de construção', 'Tubos de concreto', 'Blocos decorativos', 'Entrega'],
    image: '/images/deposito-fachada.jpg',
    warmImage: '/images/deposito-fachada.jpg',
  },
];

export interface CustomerTestimonial {
  name: string;
  rating: number;
  quote: string;
  age: string;
  source: string;
}

// Keep this to the positive review text supplied by the business owner.
export const TESTIMONIALS: CustomerTestimonial[] = [
  {
    name: 'Jeft Wolf',
    rating: 5,
    quote: 'Muito bom!',
    age: 'há 2 anos',
    source: 'Avaliação no Google',
  },
  {
    name: 'Marciano Silva Silva',
    rating: 5,
    quote: 'Muito bom!',
    age: 'há 6 anos',
    source: 'Avaliação no Google',
  },
  {
    name: 'Eduardo Rocha',
    rating: 5,
    quote: 'Show!',
    age: 'há 7 anos',
    source: 'Avaliação no Google',
  },
  {
    name: 'Jair Costa',
    rating: 5,
    quote: 'Lugar bom e barato. Atendimento excelente.',
    age: 'há 9 anos',
    source: 'Avaliação no Google',
  },
];

const projectPhotos = [
  '/images/roof-saffron-walden-1024x768-1.jpg',
  '/images/roofb3-1.jpg',
  '/images/Michael.jpg',
  '/images/m9.jpg',
  '/images/m8.jpg',
  '/images/m7.jpg',
  '/images/m6.jpg',
  '/images/m5.jpg',
  '/images/m4.jpg',
  '/images/m3.jpg',
  '/images/m2.jpg',
  '/images/IMG-20181001-WA0056.jpg',
  '/images/IMG-20181001-WA0042.jpg',
  '/images/IMG-20181001-WA0032.jpg',
  '/images/IMG-20181001-WA0014.jpg',
  '/images/caslast.jpg',
  '/images/cas4.jpg',
];

const makeService = (
  slug: string,
  name: string,
  navLabel: string,
  tagline: string,
  description: string,
  problems: string[],
  benefits: string[],
  faqs: { question: string; answer: string }[],
  photoIndex: number,
): ServiceDetail => ({
  slug,
  name,
  navLabel,
  tagline,
  shortDescription: description,
  clinicalExplanation: description,
  whoNeeds: problems,
  benefits,
  indications: problems.map((condition) => ({ condition, explanation: `Our team can inspect the roof and explain the options for ${condition.toLowerCase()}.` })),
  procedureSteps: [
    { stepNumber: 1, title: 'Roof inspection', duration: 'By appointment', description: 'We assess the roof and note visible areas that need attention.', clinicalDetails: 'The inspection helps define the right scope for the property.' },
    { stepNumber: 2, title: 'Clear proposal', duration: 'After inspection', description: 'We explain the recommended work and materials before starting.', clinicalDetails: 'Price and timing are confirmed once the work is assessed.' },
    { stepNumber: 3, title: 'Roofing work', duration: 'As agreed', description: 'Our team completes the agreed work with care for your property.', clinicalDetails: 'Access and safety arrangements are agreed in advance.' },
    { stepNumber: 4, title: 'Final review', duration: 'At completion', description: 'We review the completed work and share any relevant maintenance guidance.', clinicalDetails: 'The final scope reflects the work agreed with you.' },
  ],
  recoveryTimeline: [
    { period: 'Before work begins', expectedSensations: 'We assess the roof and agree the scope with you.', careProtocol: 'Share any photos and describe when the issue occurs.' },
    { period: 'During the work', expectedSensations: 'Timing depends on access, materials and the work involved.', careProtocol: 'Keep people and pets clear of the work area.' },
    { period: 'After completion', expectedSensations: 'Our team explains what has been completed.', careProtocol: 'Follow any roof maintenance guidance provided by the team.' },
  ],
  costTransparency: {
    baseRange: 'Request a quote after an assessment.',
    factors: ['Roof type and condition', 'Roof access and height', 'Materials and extent of work'],
    whatIsIncluded: ['Agreed scope of work', 'Description of planned materials', 'Guidance on the completed work'],
    note: 'Pricing, timings and availability are confirmed by the team after assessment.',
  },
  beforeAfterCase: {
    category: name,
    clinicalContext: 'Examples of roofing work from the CJ Roofing photo gallery.',
    beforeLabel: 'Roofing project',
    afterLabel: 'Roofing project',
    beforeImage: projectPhotos[photoIndex % projectPhotos.length],
    afterImage: projectPhotos[(photoIndex + 1) % projectPhotos.length],
    timeframe: 'Project photos',
  },
  assignedDentistId: 'roofing-team',
  faqs,
});

export const SERVICES: ServiceDetail[] = [
  makeService(
    'materiais-de-construcao', 'Materiais de construção', 'Materiais de construção',
    'Materiais para construção e reforma em Iguatu.',
    'Encontre materiais para diferentes etapas do seu projeto de construção ou reforma. Consulte a loja sobre disponibilidade e entrega.',
    ['Leaks during rain', 'Damp patches on ceilings', 'Loose or broken roof tiles'],
    ['Inspect visible sources of water entry', 'Assess tiles, joins and roof finishes', 'Agree the repair scope before work begins'],
    [{ question: 'How can you find the source of a roof leak?', answer: 'The source may not be directly above an indoor stain. An inspection of the roof and its joins can help identify where water is entering.' }], 0,
  ),
  makeService(
    'tubos-de-concreto', 'Tubos de concreto', 'Tubos de concreto',
    'Tubos de concreto para obras.',
    'Consulte a loja sobre opções de tubos de concreto e disponibilidade para o seu projeto.',
    ['Blocked or overflowing gutters', 'Loose or damaged fascias', 'Water collecting near walls or eaves'],
    ['Check water flow and visible damage', 'Identify joins that may need sealing', 'Plan cleaning or repairs for the roofline'],
    [{ question: 'How often should gutters be checked?', answer: 'It depends on nearby trees, rainfall and the property. Regular checks can help spot blockages and visible damage.' }], 3,
  ),
  makeService(
    'blocos-decorativos', 'Blocos decorativos', 'Blocos decorativos',
    'Opções de blocos decorativos para construção e acabamento.',
    'Veja exemplos de blocos decorativos e consulte a equipe sobre disponibilidade.',
    ['Worn or damaged roof coverings', 'Repeated problems across a roof', 'Planning a full roof renewal'],
    ['Assess the existing roof and its condition', 'Discuss suitable roof materials and scope', 'Plan replacement work for your property'],
    [{ question: 'When might a roof need to be replaced?', answer: 'The right option depends on the roof’s condition, age, materials and repair history. An assessment can help clarify whether repair or replacement is suitable.' }], 10,
  ),
  makeService(
    'materiais-para-obras', 'Materiais para construção', 'Materiais para construção',
    'Materiais de construção para diferentes projetos.',
    'Entre em contato com a loja para consultar os materiais disponíveis para o seu projeto.',
    ['Leaks on flat roofs', 'Visible wear or damage', 'A planned flat roof replacement'],
    ['Assess the roof surface and drainage', 'Identify joints and areas needing attention', 'Agree the preparation and work scope'],
    [{ question: 'Can a flat roof leak be repaired?', answer: 'The right approach depends on the roof surface, condition and source of the leak. An inspection helps determine whether a repair or replacement is appropriate.' }], 12,
  ),
  makeService(
    'retirada-no-local', 'Retirada no local', 'Retirada no local',
    'Compre na loja e consulte a opção de retirada no local.',
    'A loja oferece compras presenciais e retirada no local. Fale com a equipe para combinar seu pedido.',
    ['A roof without a recent inspection', 'Visible wear or loose roof components', 'Planning seasonal roof maintenance'],
    ['Record areas that may need attention', 'Prioritise repairs based on the roof condition', 'Plan ongoing roof maintenance'],
    [{ question: 'Does an inspection require access to the roof?', answer: 'The assessment method depends on the property and safe access. The team will agree a suitable approach before work begins.' }], 1,
  ),
  makeService(
    'entrega-de-materiais', 'Entrega de materiais', 'Entrega',
    'Consulte a loja sobre entrega de materiais em Iguatu e região.',
    'A loja oferece entrega. Fale com a equipe para confirmar disponibilidade e combinar os detalhes.',
    ['Tiles displaced by wind', 'Leaks after heavy rain', 'Loose gutters, flashings or roof finishes'],
    ['Identify visible storm damage', 'Prioritise areas where water may enter', 'Discuss suitable repair options'],
    [{ question: 'What should I do if my roof starts leaking during a storm?', answer: 'Move belongings away from the water and collect drips if it is safe. Do not climb onto a wet roof or touch electrical fittings affected by water.' }], 5,
  ),
];

export interface EmergencyCondition {
  id: string;
  title: string;
  urgency: 'Immediate (0–2 hours)' | 'Same-Day (2–6 hours)' | 'Urgent (Within 24 hours)';
  symptoms: string[];
  immediateAction: string[];
  clinicTreatment: string;
}

export const EMERGENCY_CONDITIONS: EmergencyCondition[] = [
  { id: 'active-leak', title: 'Active roof leak', urgency: 'Same-Day (2–6 hours)', symptoms: ['Water dripping through the ceiling', 'A damp patch growing during rain'], immediateAction: ['Move people and belongings away from the wet area.', 'If safe, collect dripping water. Keep away from electrical fittings affected by water.', 'Do not climb onto the roof during rain.'], clinicTreatment: 'Assessment of the leak and the repair options once the property can be accessed safely.' },
  { id: 'storm-damage', title: 'Roof tiles displaced by wind', urgency: 'Urgent (Within 24 hours)', symptoms: ['Tiles on the ground or out of place', 'Areas of the roof exposed'], immediateAction: ['Keep clear of loose materials.', 'Photograph visible damage from the ground if safe.', 'Do not climb onto the roof or try to replace tiles yourself.'], clinicTreatment: 'Inspection of the affected roof areas when access is safe.' },
  { id: 'ceiling-water', title: 'Water near electrical fittings', urgency: 'Immediate (0–2 hours)', symptoms: ['Dampness near lights or sockets', 'Ceiling sagging or changing shape'], immediateAction: ['Leave the affected area and do not touch wet electrical equipment.', 'If there may be electrical danger, contact a qualified professional to isolate the power.', 'Seek emergency assistance if anyone or the property is in immediate danger.'], clinicTreatment: 'Make the property safe first; the roof can be assessed once the area is secure.' },
];

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  publishDate: string;
  lastUpdated: string;
  authorId: string;
  excerpt: string;
  leadImage: string;
  relatedServiceSlug: string;
  content: { intro: string; sections: { heading: string; body: string }[]; faqs?: { question: string; answer: string }[] };
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'planning-a-building-materials-order', title: 'Como planejar seu pedido de materiais', category: 'Planejamento da obra', readTime: '3 min de leitura', publishDate: '2026-10-08', lastUpdated: '2026-10-08', authorId: 'our-doctor',
    excerpt: 'Uma lista clara dos materiais e das necessidades da obra ajuda a consultar a disponibilidade e combinar retirada ou entrega.', leadImage: '/images/deposito-fachada.jpg', relatedServiceSlug: 'materiais-de-construcao',
    content: { intro: 'Antes de falar com a loja, faça uma lista dos materiais necessários e anote as medidas ou quantidades relevantes. Assim, a equipe poderá ajudar a consultar a disponibilidade e explicar as opções de compra.', sections: [
      { heading: 'Prepare sua lista', body: 'Organize os itens de acordo com as etapas da obra e inclua as medidas que você já tiver. Se não souber o nome de um produto, leve uma foto ou descrição para explicar o que procura.' },
      { heading: 'Consulte retirada e entrega', body: 'O Depósito Perimetral oferece compras na loja, retirada no local e entrega. Entre em contato para confirmar os detalhes do seu pedido.' },
    ], faqs: [{ question: 'Posso consultar a disponibilidade antes de ir à loja?', answer: 'Sim. Ligue para a loja e pergunte sobre os produtos que você procura e a disponibilidade atual.' }] },
  },
  {
    slug: 'concrete-pipes-for-projects', title: 'Tubos de concreto para obras', category: 'Guia de produtos', readTime: '3 min de leitura', publishDate: '2026-10-08', lastUpdated: '2026-10-08', authorId: 'our-doctor',
    excerpt: 'Consulte a loja sobre opções de tubos de concreto e disponibilidade para sua obra.', leadImage: '/images/deposito-tubos.jpg', relatedServiceSlug: 'tubos-de-concreto',
    content: { intro: 'Tubos de concreto são utilizados em diferentes projetos de construção e infraestrutura. A escolha depende do planejamento e das especificações da sua obra.', sections: [
      { heading: 'Tenha os detalhes do projeto em mãos', body: 'Ao entrar em contato com a loja, tenha as dimensões e especificações que você está considerando. Essas informações ajudam a equipe a entender qual produto você procura.' },
      { heading: 'Confirme a disponibilidade', body: 'Fale com o Depósito Perimetral para consultar tubos de concreto e combinar a retirada ou entrega do seu pedido.' },
    ] },
  },
  {
    slug: 'decorative-concrete-blocks', title: 'Blocos decorativos de concreto para acabamento', category: 'Guia de produtos', readTime: '3 min de leitura', publishDate: '2026-10-08', lastUpdated: '2026-10-08', authorId: 'our-doctor',
    excerpt: 'Veja exemplos de blocos decorativos e consulte a loja sobre as opções disponíveis.', leadImage: '/images/deposito-bloco-decorativo.jpg', relatedServiceSlug: 'blocos-decorativos',
    content: { intro: 'Blocos decorativos de concreto podem acrescentar textura e destaque visual a um projeto. As fotos da loja mostram alguns exemplos de produtos e acabamentos.', sections: [
      { heading: 'Pense no acabamento desejado', body: 'Considere onde os blocos serão usados e o visual que deseja criar. Medidas e uma foto de referência podem ajudar na conversa sobre o projeto.' },
      { heading: 'Consulte a loja', body: 'Entre em contato com o Depósito Perimetral para perguntar sobre a disponibilidade de blocos decorativos e as opções de retirada ou entrega.' },
    ] },
  },
  {
    slug: 'arranging-materials-delivery', title: 'Como combinar a entrega de materiais', category: 'Serviços da loja', readTime: '3 min de leitura', publishDate: '2026-10-08', lastUpdated: '2026-10-08', authorId: 'our-doctor',
    excerpt: 'A loja oferece entrega. Fale com a equipe para confirmar a disponibilidade e conversar sobre seu pedido.', leadImage: '/images/deposito-entrega.jpg', relatedServiceSlug: 'entrega-de-materiais',
    content: { intro: 'Planejar como os materiais chegarão à sua obra faz parte do pedido. Além das compras presenciais e da retirada no local, o Depósito Perimetral também oferece entrega.', sections: [
      { heading: 'Informe os detalhes do pedido', body: 'Conte à equipe quais materiais procura e para qual endereço a entrega deverá ser feita. A loja poderá confirmar as opções disponíveis.' },
      { heading: 'Combine o prazo', body: 'Entre em contato com a loja para conversar sobre os detalhes do pedido. A disponibilidade e o prazo da entrega devem ser confirmados com a equipe.' },
    ] },
  },
];
