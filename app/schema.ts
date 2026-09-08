import { SITE } from './seo';

/**
 * LocalBusiness structured data. The site had none. Every value below appears
 * in the site's own copy; nothing is asserted that is not already published
 * (no rating, no review count, no founding date, no certifications).
 */
export const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  name: SITE.name,
  slogan: SITE.tagline,
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.street,
    addressLocality: SITE.city,
    addressRegion: SITE.state,
    postalCode: SITE.zip,
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'City', name: 'Greenwood' },
    { '@type': 'City', name: 'Indianapolis' },
    { '@type': 'AdministrativeArea', name: 'Central Indiana' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Construction Services',
    itemListElement: [
      'New Home Construction',
      'Home Remodeling',
      'Roofing',
      'Siding',
      'Windows',
      'Commercial Construction',
    ].map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
  },
} as const;

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    item: `${SITE.url}${it.path}`,
  })),
});
