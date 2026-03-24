'use client';

import { useState } from 'react';
import { BUSINESS } from '@/data';

interface FormState {
  name: string;
  phone: string;
  email: string;
  service: string;
  city: string;
  message: string;
}

const SERVICES_OPTIONS = [
  { value: '', label: 'Selecciona un servicio' },
  { value: 'limpieza-interior', label: 'Limpieza Interior' },
  { value: 'limpieza-exterior', label: 'Limpieza Exterior' },
  { value: 'detailing-completo', label: 'Detailing Completo' },
];

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    email: '',
    service: '',
    city: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Backend integration would go here (e.g., API route, email service)
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-neutral-900 mb-2">
          ¡Mensaje enviado!
        </h3>
        <p className="text-neutral-500 mb-6">
          Te contactaremos en menos de 24 horas para confirmar tu cita.
        </p>
        <a
          href={`https://wa.me/${BUSINESS.whatsapp}?text=Hola,%20acabo%20de%20enviar%20el%20formulario`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
        >
          También puedes contactarnos por WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1.5">
            Nombre completo <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Juan García"
            className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition text-neutral-900 text-sm"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1.5">
            Teléfono <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            placeholder="+34 600 000 000"
            className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition text-neutral-900 text-sm"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1.5">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="tu@email.com"
          className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition text-neutral-900 text-sm"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-1.5">
            Servicio <span className="text-red-500">*</span>
          </label>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition text-neutral-900 text-sm"
          >
            {SERVICES_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-neutral-700 mb-1.5">
            Ciudad
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={form.city}
            onChange={handleChange}
            placeholder="Madrid"
            className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition text-neutral-900 text-sm"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1.5">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          placeholder="Cuéntanos qué necesitas: tipo de coche, estado, preferencia de fecha..."
          className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition text-neutral-900 text-sm resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-brand-700 hover:bg-brand-800 text-white font-bold py-4 rounded-xl transition-colors text-base shadow-lg shadow-brand-700/20"
      >
        Solicitar presupuesto gratuito
      </button>

      <p className="text-xs text-center text-neutral-400">
        Al enviar el formulario aceptas nuestra{' '}
        <a href="/politica-privacidad" className="underline hover:text-neutral-600">
          política de privacidad
        </a>
        . No compartimos tus datos con terceros.
      </p>
    </form>
  );
}
