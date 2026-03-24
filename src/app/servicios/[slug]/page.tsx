import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import CTASection from '@/components/sections/CTASection';
import { SERVICES, BUSINESS } from '@/data';
import { generateSeoMetadata, serviceJsonLd, breadcrumbJsonLd } from '@/lib/seo';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};

  return generateSeoMetadata({
    title: `${service.name} | Limpieza a Domicilio en Ourense`,
    description: service.description,
    path: `/servicios/${slug}`,
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) notFound();

  const structuredData = serviceJsonLd(
    service.name,
    service.description,
    `${BUSINESS.siteUrl}/servicios/${service.slug}`
  );

  const breadcrumb = breadcrumbJsonLd([
    { name: 'Inicio', url: BUSINESS.siteUrl },
    { name: 'Servicios', url: `${BUSINESS.siteUrl}/servicios` },
    { name: service.name, url: `${BUSINESS.siteUrl}/servicios/${service.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Page header */}
      <section className="bg-neutral-900 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Ruta de navegación" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-neutral-400">
              <li><Link href="/" className="hover:text-white">Inicio</Link></li>
              <li>/</li>
              <li><Link href="/servicios" className="hover:text-white">Servicios</Link></li>
              <li>/</li>
              <li className="text-white">{service.name}</li>
            </ol>
          </nav>

          <div className="text-5xl mb-6">{service.icon}</div>
          <h1 className="text-4xl sm:text-5xl font-black mb-4">
            {service.name}
          </h1>
          <p className="text-lg text-neutral-300 max-w-2xl mb-6">
            {service.shortDescription}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-3xl font-black text-brand-300">{service.price}</span>
            <span className="bg-neutral-800 text-neutral-300 text-sm px-3 py-1 rounded-full">
              Duración: {service.duration}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 mb-6">
                ¿Qué incluye {service.name}?
              </h2>
              <p className="text-neutral-600 leading-relaxed text-lg mb-8">
                {service.description}
              </p>

              <h3 className="text-xl font-bold text-neutral-900 mb-4">
                Incluido en este servicio
              </h3>
              <ul className="space-y-3 mb-10">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-brand-600 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-neutral-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold text-neutral-900 mb-4">
                ¿Cómo se realiza el servicio?
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Una vez acordada la cita, nuestro equipo se desplaza a tu domicilio, lugar de
                trabajo o garaje en Ourense. Llevamos todo el material necesario: productos
                profesionales, aspirador, equipo de presión y herramientas especializadas.
                No necesitas tener acceso a agua ni electricidad en la mayoría de los casos.
              </p>
            </div>

            {/* Sidebar CTA */}
            <aside>
              <div className="bg-neutral-50 rounded-2xl border border-neutral-200 p-6 sticky top-24">
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  Solicitar presupuesto
                </h3>
                <p className="text-sm text-neutral-500 mb-6">
                  Obtén un presupuesto gratuito y sin compromiso en menos de 2 horas.
                </p>

                <div className="text-3xl font-black text-brand-700 mb-1">{service.price}</div>
                <p className="text-xs text-neutral-400 mb-6">Precio orientativo. El precio final puede variar según el estado del vehículo.</p>

                <a
                  href={`https://wa.me/${BUSINESS.whatsapp}?text=Hola,%20me%20interesa%20el%20servicio%20de%20${encodeURIComponent(service.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl mb-3 transition-colors"
                >
                  Pedir por WhatsApp
                </a>
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="block w-full text-center bg-brand-700 hover:bg-brand-800 text-white font-bold py-3 rounded-xl transition-colors"
                >
                  Llamar ahora
                </a>

                <Link
                  href="/contacto"
                  className="block w-full text-center text-brand-700 hover:text-brand-800 font-semibold py-3 text-sm mt-2"
                >
                  Formulario de contacto
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-neutral-900 mb-6">
            Otros servicios que pueden interesarte
          </h2>
          <div className="flex flex-wrap gap-3">
            {SERVICES.filter((s) => s.slug !== service.slug).map((s) => (
              <Link
                key={s.slug}
                href={`/servicios/${s.slug}`}
                className="flex items-center gap-2 px-5 py-3 bg-white border border-neutral-200 rounded-xl hover:border-brand-500 hover:text-brand-700 transition-colors text-sm font-medium"
              >
                <span>{s.icon}</span>
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
