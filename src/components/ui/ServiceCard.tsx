import Link from 'next/link';

interface ServiceCardProps {
  slug: string;
  name: string;
  shortDescription: string;
  price: string;
  duration: string;
  icon: string;
  features?: readonly string[];
  variant?: 'default' | 'featured';
}

export default function ServiceCard({
  slug,
  name,
  shortDescription,
  price,
  duration,
  icon,
  features,
  variant = 'default',
}: ServiceCardProps) {
  const isFeatured = variant === 'featured';

  return (
    <article
      className={`relative flex flex-col rounded-2xl border p-6 transition-all hover:shadow-xl hover:-translate-y-1 ${
        isFeatured
          ? 'bg-brand-700 border-brand-600 text-white shadow-lg shadow-brand-700/20'
          : 'bg-white border-neutral-200 text-neutral-800 shadow-sm'
      }`}
    >
      {isFeatured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-900 text-xs font-bold px-3 py-1 rounded-full">
          Más popular
        </span>
      )}

      {/* Icon */}
      <div
        className={`text-4xl mb-4 w-14 h-14 flex items-center justify-center rounded-xl ${
          isFeatured ? 'bg-brand-600' : 'bg-brand-50'
        }`}
      >
        {icon}
      </div>

      {/* Content */}
      <h3 className={`text-xl font-bold mb-2 ${isFeatured ? 'text-white' : 'text-neutral-900'}`}>
        {name}
      </h3>
      <p className={`text-sm leading-relaxed mb-4 ${isFeatured ? 'text-brand-100' : 'text-neutral-500'}`}>
        {shortDescription}
      </p>

      {/* Features */}
      {features && features.length > 0 && (
        <ul className="space-y-2 mb-6">
          {features.slice(0, 4).map((feature) => (
            <li
              key={feature}
              className={`flex items-start gap-2 text-sm ${
                isFeatured ? 'text-brand-100' : 'text-neutral-600'
              }`}
            >
              <svg
                className={`w-4 h-4 mt-0.5 flex-shrink-0 ${isFeatured ? 'text-brand-200' : 'text-brand-500'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto">
        {/* Price & Duration */}
        <div className="flex items-center justify-between mb-4">
          <span
            className={`text-2xl font-black ${isFeatured ? 'text-white' : 'text-brand-700'}`}
          >
            {price}
          </span>
          <span
            className={`text-xs px-2 py-1 rounded-full ${
              isFeatured
                ? 'bg-brand-600 text-brand-100'
                : 'bg-neutral-100 text-neutral-500'
            }`}
          >
            {duration}
          </span>
        </div>

        {/* CTA */}
        <Link
          href={`/servicios/${slug}`}
          className={`block w-full text-center font-semibold py-3 rounded-xl transition-colors text-sm ${
            isFeatured
              ? 'bg-white text-brand-700 hover:bg-brand-50'
              : 'bg-brand-700 text-white hover:bg-brand-800'
          }`}
        >
          Ver detalles
        </Link>
      </div>
    </article>
  );
}
