import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-white">
      <div className="text-center px-4">
        <p className="text-8xl font-black text-brand-700 mb-4">404</p>
        <h1 className="text-2xl font-black text-neutral-900 mb-3">
          Página no encontrada
        </h1>
        <p className="text-neutral-500 mb-8 max-w-md mx-auto">
          La página que buscas no existe o ha sido movida. Vuelve al inicio o
          explora nuestros servicios.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="bg-brand-700 hover:bg-brand-800 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Volver al inicio
          </Link>
          <Link
            href="/servicios"
            className="bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Ver servicios
          </Link>
        </div>
      </div>
    </div>
  );
}
