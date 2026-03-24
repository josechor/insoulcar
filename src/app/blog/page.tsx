import type { Metadata } from 'next';
import Link from 'next/link';
import { BLOG_POSTS, BUSINESS } from '@/data';
import { generateSeoMetadata } from '@/lib/seo';

export const metadata: Metadata = generateSeoMetadata({
  title: 'Blog | Consejos de Limpieza y Cuidado del Coche',
  description:
    'Artículos, guías y consejos profesionales sobre limpieza de coches, detailing y mantenimiento del vehículo. Por los expertos de InSoulCar.',
  path: '/blog',
});

export default function BlogPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-neutral-900 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-black mb-4">Blog</h1>
          <p className="text-lg text-neutral-300 max-w-2xl">
            Consejos, guías y novedades sobre limpieza de coches, detailing profesional
            y mantenimiento del vehículo.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                className="bg-white border border-neutral-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                {/* Placeholder image area */}
                <div className="h-48 bg-gradient-to-br from-brand-700 to-brand-900 flex items-center justify-center">
                  <span className="text-5xl">🚗</span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-brand-50 text-brand-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-neutral-400">{post.readTime} lectura</span>
                  </div>

                  <h2 className="text-lg font-bold text-neutral-900 mb-2 leading-snug">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-brand-700 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-sm text-neutral-500 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <time
                      dateTime={post.date}
                      className="text-xs text-neutral-400"
                    >
                      {new Date(post.date).toLocaleDateString('es-ES', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-sm font-semibold text-brand-700 hover:text-brand-800 flex items-center gap-1"
                    >
                      Leer
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
