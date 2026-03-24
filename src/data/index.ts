// Datos globales del negocio
export const BUSINESS = {
  name: 'InSoulCar',
  tagline: 'Limpieza de coches a domicilio en Ourense',
  description:
    'Servicio profesional de limpieza y detailing de coches a domicilio en Ourense. Nos desplazamos hasta donde estés. Sin colas, sin esperas.',
  phone: '+34 600 000 000',
  whatsapp: '+34600000000',
  email: 'hola@insoulcar.es',
  address: {
    street: 'Calle Ejemplo, 1',
    city: 'Ourense',
    province: 'Ourense',
    postalCode: '32001',
    country: 'España',
    countryCode: 'ES',
  },
  geo: {
    latitude: '42.3364',
    longitude: '-7.8642',
  },
  openingHours: 'Mo-Sa 08:00-20:00',
  siteUrl: 'https://www.insoulcar.es',
  social: {
    instagram: 'https://instagram.com/insoulcar',
    facebook: 'https://facebook.com/insoulcar',
  },
} as const;

export const SERVICES = [
  {
    slug: 'insoul-essential',
    name: 'Insoul Essential',
    shortDescription: 'Exterior e interior completo. Ideal para mantenimiento o suciedad leve.',
    description:
      'El punto de entrada perfecto para mantener tu coche siempre presentable. El Insoul Essential cubre una limpieza completa de exterior e interior enfocada en vehículos con suciedad leve o que ya siguen un mantenimiento regular.',
    price: 'Desde 79€',
    duration: '1h',
    icon: '✨',
    features: [
      'Lavado exterior a mano',
      'Limpieza de llantas y neumáticos',
      'Aspirado completo del habitáculo',
      'Limpieza de salpicadero y plásticos',
      'Limpieza de cristales interiores y exteriores',
      'Abrillantado de neumáticos',
    ],
  },
  {
    slug: 'insoul-select',
    name: 'Insoul Select',
    shortDescription: 'Exterior e interior completo. Para suciedad moderada.',
    description:
      'El servicio más reservado de InSoulCar. El Insoul Select es el equilibrio perfecto entre profundidad de limpieza y precio. Diseñado para vehículos con suciedad moderada que necesitan una puesta a punto completa.',
    price: 'Desde 109€',
    duration: '2h',
    icon: '⭐',
    features: [
      'Todo lo incluido en Insoul Essential',
      'Desengrasado profundo de llantas y bajos',
      'Limpieza y acondicionamiento de tapizados',
      'Limpieza de maletero',
      'Tratamiento de plásticos interiores',
      'Eliminación de malos olores',
    ],
  },
  {
    slug: 'insoul-experience',
    name: 'Insoul Experience',
    shortDescription: 'Transformación total. Regalos y sorpresas incluidas.',
    description:
      'La experiencia definitiva de InSoulCar. Una transformación completa de tu vehículo con acabados de máximo nivel y detalles exclusivos que van más allá de la limpieza. Incluye sorpresas y regalos pensados para hacer la experiencia inolvidable.',
    price: 'Desde 199€',
    duration: '3h-5h',
    icon: '🏆',
    features: [
      'Todo lo incluido en Insoul Select',
      'Corrección de pintura (pulido)',
      'Aplicación de sellante protector',
      'Acondicionamiento de cuero',
      'Informe fotográfico antes y después',
      'Regalos y sorpresas exclusivas incluidas',
    ],
  },
] as const;

export type ServiceSlug = (typeof SERVICES)[number]['slug'];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Carlos M.',
    city: 'Ourense',
    rating: 5,
    text: 'Increíble servicio. Vinieron a casa y dejaron el coche como recién salido del concesionario. Muy puntuales y profesionales.',
  },
  {
    id: 2,
    name: 'Laura G.',
    city: 'Ourense',
    rating: 5,
    text: 'El Insoul Experience superó todas mis expectativas. La pintura quedó perfecta y los detalles sorpresa fueron un plus increíble.',
  },
  {
    id: 3,
    name: 'Javier R.',
    city: 'Ourense',
    rating: 5,
    text: 'Precio justo y trabajo impecable. Lo que más me gustó fue la comodidad de no tener que desplazarme a ningún sitio.',
  },
  {
    id: 4,
    name: 'Ana P.',
    city: 'Ourense',
    rating: 4,
    text: 'Muy buenos profesionales. El coche quedó perfecto por dentro y por fuera con el Insoul Select. Repetiré sin duda.',
  },
  {
    id: 5,
    name: 'Miguel L.',
    city: 'Ourense',
    rating: 5,
    text: 'Me contactaron por WhatsApp y en menos de una hora ya tenían fecha para venir. Servicio rápido y de calidad.',
  },
  {
    id: 6,
    name: 'Sofía T.',
    city: 'Ourense',
    rating: 5,
    text: 'El mejor servicio de limpieza de coches que he probado en Ourense. El resultado es espectacular y el trato muy amable.',
  },
];

export const GALLERY_IMAGES = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&q=80',
    alt: 'Limpieza interior de coche profesional',
    category: 'interior',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    alt: 'Lavado exterior de vehículo a domicilio',
    category: 'exterior',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&q=80',
    alt: 'Detailing profesional de carrocería',
    category: 'detailing',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80',
    alt: 'Limpieza de tapicería y asientos',
    category: 'interior',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
    alt: 'Coche limpio y brillante tras detailing',
    category: 'exterior',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80',
    alt: 'Pulido y corrección de pintura',
    category: 'detailing',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80',
    alt: 'Aspirado profesional del habitáculo',
    category: 'interior',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80',
    alt: 'Limpieza de llantas y neumáticos',
    category: 'exterior',
  },
];

export const BLOG_POSTS = [
  {
    slug: 'por-que-limpiar-el-coche-regularmente',
    title: '¿Por qué deberías limpiar tu coche regularmente?',
    excerpt:
      'Mantener tu vehículo limpio no solo es estética: alarga la vida de los materiales y protege tu inversión.',
    date: '2025-03-10',
    readTime: '4 min',
    category: 'Consejos',
  },
  {
    slug: 'diferencias-entre-lavado-y-detailing',
    title: 'Diferencias entre lavado básico y detailing profesional',
    excerpt:
      'Descubre qué incluye un servicio de detailing y por qué merece la pena invertir en él al menos dos veces al año.',
    date: '2025-02-20',
    readTime: '5 min',
    category: 'Servicios',
  },
  {
    slug: 'como-cuidar-la-tapiceria-del-coche',
    title: 'Cómo cuidar la tapicería de tu coche entre limpiezas',
    excerpt:
      'Pequeños hábitos que marcan la diferencia para mantener el interior de tu vehículo en perfectas condiciones.',
    date: '2025-01-15',
    readTime: '3 min',
    category: 'Consejos',
  },
];
