import type { Metadata } from 'next';
import ContactForm from '@/components/ui/ContactForm';
import { BUSINESS } from '@/data';
import { generateSeoMetadata } from '@/lib/seo';

export const metadata: Metadata = generateSeoMetadata({
  title: 'Contacto | Solicita tu Presupuesto Gratuito',
  description:
    'Contacta con InSoulCar para solicitar tu presupuesto gratuito de limpieza de coche a domicilio. Respuesta en menos de 2 horas.',
  path: '/contacto',
});

export default function ContactoPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-neutral-900 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-black mb-4">
            Solicita tu presupuesto
          </h1>
          <p className="text-lg text-neutral-300 max-w-2xl">
            Rellena el formulario o contacta directamente por WhatsApp. Te respondemos
            en menos de 2 horas.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-neutral-100 p-8 shadow-sm">
                <h2 className="text-2xl font-black text-neutral-900 mb-2">
                  Formulario de contacto
                </h2>
                <p className="text-neutral-500 text-sm mb-8">
                  Cuéntanos qué necesitas y te preparamos un presupuesto a medida.
                </p>
                <ContactForm />
              </div>
            </div>

            {/* Contact info sidebar */}
            <aside className="lg:col-span-2">
              <div className="space-y-6">
                {/* Direct contact */}
                <div className="bg-white rounded-2xl border border-neutral-100 p-6 shadow-sm">
                  <h3 className="font-bold text-neutral-900 mb-4">Contacto directo</h3>
                  <div className="space-y-4">
                    <a
                      href={`https://wa.me/${BUSINESS.whatsapp}?text=Hola,%20quiero%20solicitar%20un%20presupuesto`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 bg-green-50 hover:bg-green-100 rounded-xl transition-colors"
                    >
                      <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <WhatsAppIcon />
                      </div>
                      <div>
                        <p className="font-semibold text-neutral-900 text-sm">WhatsApp</p>
                        <p className="text-xs text-neutral-500">Respuesta inmediata</p>
                      </div>
                    </a>

                    <a
                      href={`tel:${BUSINESS.phone}`}
                      className="flex items-center gap-3 p-4 bg-brand-50 hover:bg-brand-100 rounded-xl transition-colors"
                    >
                      <div className="w-10 h-10 bg-brand-700 rounded-xl flex items-center justify-center flex-shrink-0">
                        <PhoneIcon />
                      </div>
                      <div>
                        <p className="font-semibold text-neutral-900 text-sm">{BUSINESS.phone}</p>
                        <p className="text-xs text-neutral-500">Lun-Sáb, 8:00 - 20:00</p>
                      </div>
                    </a>

                    <a
                      href={`mailto:${BUSINESS.email}`}
                      className="flex items-center gap-3 p-4 bg-neutral-50 hover:bg-neutral-100 rounded-xl transition-colors"
                    >
                      <div className="w-10 h-10 bg-neutral-700 rounded-xl flex items-center justify-center flex-shrink-0">
                        <EmailIcon />
                      </div>
                      <div>
                        <p className="font-semibold text-neutral-900 text-sm">{BUSINESS.email}</p>
                        <p className="text-xs text-neutral-500">Respuesta en 24h</p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Business info */}
                <div className="bg-white rounded-2xl border border-neutral-100 p-6 shadow-sm">
                  <h3 className="font-bold text-neutral-900 mb-4">Información</h3>
                  <dl className="space-y-3">
                    <div>
                      <dt className="text-xs text-neutral-400 uppercase tracking-wide mb-1">Horario</dt>
                      <dd className="text-sm text-neutral-700 font-medium">Lunes a Sábado, 8:00 - 20:00</dd>
                    </div>
                    <div>
                      <dt className="text-xs text-neutral-400 uppercase tracking-wide mb-1">Zona de servicio</dt>
                      <dd className="text-sm text-neutral-700 font-medium">Toda España</dd>
                    </div>
                    <div>
                      <dt className="text-xs text-neutral-400 uppercase tracking-wide mb-1">Desplazamiento</dt>
                      <dd className="text-sm text-neutral-700 font-medium">Gratuito en tu zona</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}
