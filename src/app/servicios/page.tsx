import type { Metadata } from 'next';
import Link from 'next/link';
import ServiceCard from '@/components/ui/ServiceCard';
import CTASection from '@/components/sections/CTASection';
import { SERVICES, BUSINESS } from '@/data';
import { generateSeoMetadata, breadcrumbJsonLd } from '@/lib/seo';

export const metadata: Metadata = generateSeoMetadata({
  title: 'Servicios de Limpieza de Coches a Domicilio en Ourense',
  description:
    'Insoul Essential, Insoul Select e Insoul Experience. Tres niveles de limpieza profesional a domicilio en Ourense. Precios claros y sin sorpresas.',
  path: '/servicios',
});

export default function ServiciosPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: 'Inicio', url: BUSINESS.siteUrl },
    { name: 'Servicios', url: `${BUSINESS.siteUrl}/servicios` },
  ]);

  return (
    <>
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
              <li className="text-white">Servicios</li>
            </ol>
          </nav>

          <h1 className="text-4xl sm:text-5xl font-black mb-4">
            Nuestros servicios en Ourense
          </h1>
          <p className="text-lg text-neutral-300 max-w-2xl">
            Tres niveles de limpieza profesional a domicilio. Elige el que mejor se
            adapte al estado de tu vehículo y a tu presupuesto.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <ServiceCard
                key={service.slug}
                {...service}
                variant={index === 1 ? 'featured' : 'default'}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 mb-4">
              ¿Por qué elegirnos?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '🏠',
                title: 'Servicio a domicilio',
                desc: 'Nos desplazamos a tu casa, trabajo o garaje sin coste extra.',
              },
              {
                icon: '🧴',
                title: 'Productos premium',
                desc: 'Usamos productos profesionales respetuosos con tu vehículo y el medioambiente.',
              },
              {
                icon: '⏱️',
                title: 'Puntualidad garantizada',
                desc: 'Respetamos el horario acordado. Tu tiempo es valioso.',
              },
              {
                icon: '💳',
                title: 'Precio transparente',
                desc: 'Sin sorpresas. El precio acordado es el precio final.',
              },
              {
                icon: '✅',
                title: 'Garantía de satisfacción',
                desc: 'Si no quedas satisfecho, repetimos el servicio sin coste.',
              },
              {
                icon: '📸',
                title: 'Informe fotográfico',
                desc: 'Documentamos el antes y el después de cada trabajo.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-neutral-100 p-6 shadow-sm"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-neutral-900 mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
