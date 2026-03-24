import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/sections/Hero';
import ServiceCard from '@/components/ui/ServiceCard';
import TestimonialsSection from '@/components/sections/Testimonials';
import CTASection from '@/components/sections/CTASection';
import { SERVICES, BUSINESS } from '@/data';
import { generateSeoMetadata, faqJsonLd } from '@/lib/seo';

export const metadata: Metadata = generateSeoMetadata({
  title: `${BUSINESS.name} | Limpieza de Coches a Domicilio en Ourense`,
  description:
    'Limpieza profesional de coches a domicilio en Ourense. Insoul Essential, Select y Experience. Nos desplazamos hasta ti. Presupuesto gratis.',
  path: '/',
});

const FAQS = [
  {
    question: '¿Cómo funciona el servicio de limpieza a domicilio en Ourense?',
    answer:
      'Te contactamos, acordamos día y hora, y nuestro equipo se desplaza a tu domicilio, trabajo o garaje en Ourense. Llevamos todo el material necesario.',
  },
  {
    question: '¿Cuánto tarda cada servicio?',
    answer:
      'El Insoul Essential dura aproximadamente 1 hora. El Insoul Select, unas 2 horas. El Insoul Experience, entre 3 y 5 horas según el estado del vehículo.',
  },
  {
    question: '¿Tengo que tener agua o luz disponible?',
    answer:
      'Para la mayoría de servicios no es necesario. Disponemos de equipamiento autónomo. En casos específicos te lo indicamos de antemano.',
  },
  {
    question: '¿Qué incluye el Insoul Experience?',
    answer:
      'Es nuestra transformación total: exterior e interior completo al máximo nivel, corrección de pintura, protección y detalles exclusivos como regalos y sorpresas incluidas.',
  },
];

const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Solicita presupuesto',
    description: 'Contacta por WhatsApp o formulario. Respuesta en menos de 2 horas.',
  },
  {
    step: '02',
    title: 'Acordamos la cita',
    description: 'Elegimos día y hora que te convenga. Flexibilidad total.',
  },
  {
    step: '03',
    title: 'Vamos a tu coche',
    description: 'Nuestro equipo se desplaza con todo el material necesario.',
  },
  {
    step: '04',
    title: 'Disfruta del resultado',
    description: 'Tu coche queda impecable. Garantía de satisfacción incluida.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* JSON-LD FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQS)) }}
      />

      {/* Hero */}
      <Hero
        badge="Servicio profesional en Ourense"
        title="Limpieza de coches a domicilio en Ourense"
        subtitle="Dejamos tu coche impecable donde estés"
        description="Nos desplazamos a tu casa, trabajo o garaje en Ourense. Sin colas, sin esperas. Elige el tratamiento que mejor se adapte a tu vehículo."
      />

      {/* Services section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 mb-4">
              Nuestros servicios
            </h2>
            <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
              Tratamientos profesionales adaptados a las necesidades de tu vehículo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.map((service, index) => (
              <ServiceCard
                key={service.slug}
                {...service}
                variant={index === 1 ? 'featured' : 'default'}
              />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 text-brand-700 hover:text-brand-800 font-semibold text-sm"
            >
              Ver todos los servicios
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 mb-4">
              ¿Cómo funciona?
            </h2>
            <p className="text-neutral-500 text-lg max-w-xl mx-auto">
              Reservar tu limpieza es tan fácil como en 4 pasos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {HOW_IT_WORKS.map((step) => (
              <div key={step.step} className="relative text-center">
                <div className="w-16 h-16 bg-brand-700 text-white text-2xl font-black rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="font-bold text-neutral-900 mb-2">{step.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* FAQ */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 mb-4">
              Preguntas frecuentes
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq) => (
              <details
                key={faq.question}
                className="bg-white border border-neutral-100 rounded-2xl px-6 py-4 group"
              >
                <summary className="font-semibold text-neutral-900 cursor-pointer list-none flex justify-between items-center gap-4">
                  {faq.question}
                  <svg
                    className="w-5 h-5 text-neutral-400 flex-shrink-0 group-open:rotate-180 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-3 text-neutral-500 text-sm leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
