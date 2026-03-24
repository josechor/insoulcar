import { MetadataRoute } from 'next';
import { BUSINESS } from '@/data';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
    ],
    sitemap: `${BUSINESS.siteUrl}/sitemap.xml`,
    host: BUSINESS.siteUrl,
  };
}
