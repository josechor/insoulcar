import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { BUSINESS } from '@/data';
import { localBusinessJsonLd } from '@/lib/seo';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.siteUrl),
  title: {
    default: `${BUSINESS.name} | Limpieza de Coches a Domicilio`,
    template: `%s | ${BUSINESS.name}`,
  },
  description: BUSINESS.description,
  keywords: [
    'limpieza coches domicilio',
    'lavado coche domicilio',
    'detailing coche',
    'limpieza interior coche',
    'limpieza exterior coche',
    'detailing a domicilio España',
  ],
  authors: [{ name: BUSINESS.name }],
  creator: BUSINESS.name,
  icons: {
    icon: '/images/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: BUSINESS.siteUrl,
    siteName: BUSINESS.name,
    title: `${BUSINESS.name} | Limpieza de Coches a Domicilio`,
    description: BUSINESS.description,
    images: [
      {
        url: `${BUSINESS.siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${BUSINESS.name} - Limpieza de coches a domicilio`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${BUSINESS.name} | Limpieza de Coches a Domicilio`,
    description: BUSINESS.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        {/* JSON-LD: LocalBusiness (global) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd()) }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
