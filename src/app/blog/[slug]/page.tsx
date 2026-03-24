import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { BLOG_POSTS, BUSINESS } from '@/data';
import { generateSeoMetadata, breadcrumbJsonLd } from '@/lib/seo';
import CTASection from '@/components/sections/CTASection';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  return generateSeoMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
  });
}

// Mock full post content (in a real app this comes from a CMS or MDX)
const POST_CONTENT: Record<string, string> = {
  'por-que-limpiar-el-coche-regularmente': `
Mantener el coche limpio no es solo una cuestión estética. La suciedad, el polvo y los contaminantes ambientales tienen un impacto real en los materiales tanto del exterior como del interior de tu vehículo.

## Los efectos del polvo y la suciedad en la pintura

La pintura de tu coche está expuesta constantemente a la lluvia ácida, los residuos de frenos, el salitre costero o la contaminación urbana. Si no se eliminan con regularidad, estas partículas se oxidan y deterioran la capa de pintura.

Una limpieza exterior periódica, idealmente cada 2-3 semanas, forma una barrera protectora que alarga la vida del barniz y mantiene el color vivo.

## El interior: salud y confort

El habitáculo es el espacio donde pasas cientos de horas al año. Los ácaros del polvo, las bacterias acumuladas en la tapicería o los restos de comida no solo dañan los materiales, sino que pueden afectar a la calidad del aire que respiras.

Una limpieza interior mensual o bimensual prolonga la vida de los tapizados, previene el mal olor y mantiene un ambiente sano.

## Impacto en el valor del vehículo

Un coche bien mantenido conserva mejor su valor de reventa. La primera impresión cuenta: un interior limpio y un exterior sin manchas o microarañazos pueden marcar una diferencia notable en el precio de venta.

## Conclusión

Limpiar el coche regularmente no es un gasto, es una inversión. Y con el servicio a domicilio de InSoulCar, no necesitas perder ni un minuto de tu tiempo.
  `,
  'diferencias-entre-lavado-y-detailing': `
Mucha gente confunde el lavado básico con el detailing profesional. Son servicios distintos con objetivos diferentes. Aquí te explicamos las claves.

## El lavado básico

Un lavado convencional elimina la suciedad superficial: polvo, barro, restos de pájaros. Es un mantenimiento de rutina que se realiza en pocos minutos y a un coste reducido. Sin embargo, no profundiza en la descontaminación de la pintura ni en el cuidado de los materiales interiores.

## El detailing profesional

El detailing va mucho más allá. Incluye:

- **Descontaminación química y mecánica** de la carrocería para eliminar partículas metálicas, resinas y contaminantes difíciles.
- **Corrección de pintura**: pulido que elimina microarañazos, swirl marks y oxidaciones leves.
- **Protección**: aplicación de ceras, sellantes o recubrimientos cerámicos que protegen la pintura durante meses.
- **Interior**: limpieza profunda de tapizados, tratamiento del cuero, desinfección.

## ¿Con qué frecuencia hacer cada uno?

- **Lavado básico**: cada 2-4 semanas según uso y entorno.
- **Detailing completo**: al menos 1-2 veces al año para mantener el vehículo en óptimas condiciones.

En InSoulCar ofrecemos ambos servicios a domicilio, para que tú decidas el nivel de cuidado que quieres para tu coche.
  `,
  'como-cuidar-la-tapiceria-del-coche': `
La tapicería es uno de los elementos que más se deterioran con el uso diario. Aquí tienes algunos consejos prácticos para mantenerla en buen estado entre limpiezas profesionales.

## Actuar rápido ante las manchas

Ante un derrame, actúa inmediatamente. Cuanto más tiempo pasa una mancha, más difícil es de eliminar. Usa un paño limpio y seco para absorber (no frotar) el líquido.

## Protege el cuero con acondicionador

Si tu vehículo tiene tapicería de cuero, aplica un acondicionador específico cada 3-4 meses. El cuero sin hidratación se reseca y agrieta con el tiempo.

## Evita la exposición prolongada al sol

Los rayos UV degradan tanto la tapicería como los plásticos del salpicadero. Si aparcas al sol habitualmente, usa parasoles en el parabrisas.

## Aspira con frecuencia

Los granos de arena y suciedad abrasiva actúan como papel de lija sobre los tejidos con cada movimiento. Un aspirado semanal o quincenal previene este desgaste.

## Usa alfombrillas protectoras

Las alfombrillas de goma o textiles lavables protegen la moqueta original, especialmente en los pies del conductor y copiloto.

## Cuándo llamar a un profesional

Si las manchas no salen con métodos caseros, o si notas mal olor persistente, es el momento de recurrir a una limpieza profunda. En InSoulCar usamos extractores de tapicería y productos profesionales que eliminan suciedad, bacterias y malos olores de forma segura.
  `,
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) notFound();

  const content = POST_CONTENT[slug] ?? post.excerpt;

  const breadcrumb = breadcrumbJsonLd([
    { name: 'Inicio', url: BUSINESS.siteUrl },
    { name: 'Blog', url: `${BUSINESS.siteUrl}/blog` },
    { name: post.title, url: `${BUSINESS.siteUrl}/blog/${slug}` },
  ]);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: BUSINESS.name,
      url: BUSINESS.siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: BUSINESS.name,
      url: BUSINESS.siteUrl,
    },
    url: `${BUSINESS.siteUrl}/blog/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Header */}
      <section className="bg-neutral-900 text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Ruta de navegación" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-neutral-400">
              <li><Link href="/" className="hover:text-white">Inicio</Link></li>
              <li>/</li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              <li>/</li>
              <li className="text-white truncate">{post.title}</li>
            </ol>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <span className="bg-brand-500/20 text-brand-300 text-xs font-semibold px-3 py-1 rounded-full border border-brand-500/30">
              {post.category}
            </span>
            <span className="text-neutral-400 text-sm">{post.readTime} de lectura</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 leading-tight">
            {post.title}
          </h1>

          <p className="text-neutral-300 text-lg mb-6">{post.excerpt}</p>

          <time dateTime={post.date} className="text-sm text-neutral-400">
            Publicado el{' '}
            {new Date(post.date).toLocaleDateString('es-ES', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>
      </section>

      {/* Article */}
      <article className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3">
              <div className="prose prose-lg prose-neutral max-w-none">
                {content.split('\n').filter(Boolean).map((paragraph, index) => {
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className="text-2xl font-black text-neutral-900 mt-8 mb-4">
                        {paragraph.replace('## ', '')}
                      </h2>
                    );
                  }
                  if (paragraph.startsWith('- **')) {
                    return (
                      <li key={index} className="text-neutral-600 mb-2">
                        <span dangerouslySetInnerHTML={{
                          __html: paragraph.replace('- ', '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'),
                        }} />
                      </li>
                    );
                  }
                  return (
                    <p key={index} className="text-neutral-600 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-brand-700 rounded-2xl p-6 text-white">
                  <h3 className="font-bold mb-3">¿Necesitas limpiar tu coche?</h3>
                  <p className="text-brand-100 text-sm mb-4">
                    Solicita presupuesto gratuito ahora.
                  </p>
                  <a
                    href={`https://wa.me/${BUSINESS.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-green-500 hover:bg-green-400 text-white font-bold py-2.5 rounded-xl text-sm transition-colors"
                  >
                    WhatsApp
                  </a>
                </div>

                <div>
                  <h3 className="font-bold text-neutral-900 mb-3">Más artículos</h3>
                  <ul className="space-y-3">
                    {BLOG_POSTS.filter((p) => p.slug !== slug).map((p) => (
                      <li key={p.slug}>
                        <Link
                          href={`/blog/${p.slug}`}
                          className="text-sm text-neutral-600 hover:text-brand-700 transition-colors leading-snug"
                        >
                          {p.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      <CTASection />
    </>
  );
}
