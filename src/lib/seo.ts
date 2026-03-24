import { Metadata } from 'next';
import { BUSINESS } from '@/data';

interface SeoProps {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
}

export function generateSeoMetadata({
  title,
  description,
  path = '',
  noIndex = false,
}: SeoProps): Metadata {
  const url = `${BUSINESS.siteUrl}${path}`;

  return {
    title,
    description,
    metadataBase: new URL(BUSINESS.siteUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: BUSINESS.name,
      locale: 'es_ES',
      type: 'website',
      images: [
        {
          url: `${BUSINESS.siteUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

// JSON-LD: LocalBusiness schema
export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BUSINESS.name,
    description: BUSINESS.description,
    url: BUSINESS.siteUrl,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.province,
      postalCode: BUSINESS.address.postalCode,
      addressCountry: BUSINESS.address.countryCode,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    openingHours: BUSINESS.openingHours,
    priceRange: '€€',
    image: `${BUSINESS.siteUrl}/og-image.jpg`,
    sameAs: [BUSINESS.social.instagram, BUSINESS.social.facebook],
    areaServed: {
      '@type': 'Country',
      name: 'España',
    },
  };
}

// JSON-LD: Service schema
export function serviceJsonLd(name: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'LocalBusiness',
      name: BUSINESS.name,
      url: BUSINESS.siteUrl,
    },
    areaServed: {
      '@type': 'Country',
      name: 'España',
    },
    url,
  };
}

// JSON-LD: BreadcrumbList schema
export function breadcrumbJsonLd(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// JSON-LD: FAQPage schema
export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
