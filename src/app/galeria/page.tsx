import type { Metadata } from 'next';
import GalleryGrid from '@/components/ui/GalleryGrid';
import CTASection from '@/components/sections/CTASection';
import { BUSINESS } from '@/data';
import { generateSeoMetadata } from '@/lib/seo';

export const metadata: Metadata = generateSeoMetadata({
  title: 'Galería de Trabajos | Antes y Después',
  description:
    'Galería de resultados reales de nuestros servicios de limpieza de coches a domicilio. Descubre el nivel de detalle y calidad de InSoulCar.',
  path: '/galeria',
});

export default function GaleriaPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-neutral-900 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-black mb-4">
            Galería de trabajos
          </h1>
          <p className="text-lg text-neutral-300 max-w-2xl">
            Resultados reales de nuestros servicios. Cada imagen muestra el nivel de
            cuidado y detalle que ponemos en cada vehículo.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryGrid />
        </div>
      </section>

      <CTASection />
    </>
  );
}
