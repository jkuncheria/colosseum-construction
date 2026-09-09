/**
 * Per-page SEO. This site previously had NO meta beyond a single <title> in
 * index.html: no description, canonical, Open Graph or structured data on any
 * page. Everything here is newly authored.
 *
 * Facts used are taken only from the site's own copy: the Greenwood address in
 * components/Contact.tsx, the phone and email in the footer, the service list
 * from the route table, and the "licensed, bonded and insured" claim that
 * appears on the roofing and new-construction pages. No credential, award,
 * rating or founding date is asserted, because none is stated anywhere on the
 * site.
 */
export const SITE = {
  name: 'Colosseum Construction',
  tagline: 'Building Legacies',
  url: 'https://www.colosseumconstruction.com',
  phone: '(317) 300-9813',
  phoneE164: '+13173009813',
  email: 'lorne@colosseumconstruction.com',
  street: '500 North Meridian Street',
  city: 'Greenwood',
  state: 'IN',
  stateFull: 'Indiana',
  zip: '46143',
  region: 'Central Indiana',
} as const;

const S = SITE;

export const PAGE_SEO = {
  Home: {
    title: `${S.name} | Home & Commercial Builder in ${S.city}, ${S.state}`,
    description: `${S.name} builds and remodels homes across ${S.region}. New home construction, remodeling, roofing, siding, windows and commercial work. Licensed, bonded and insured. Call ${S.phone}.`,
    path: '/',
  },
  About: {
    title: `About ${S.name} | ${S.city} Home Improvement Company`,
    description: `Learn about ${S.name}, a licensed, bonded and insured home improvement company in ${S.city}, ${S.stateFull}, serving Indianapolis and the surrounding counties.`,
    path: '/about',
  },
  NewHomeConstruction: {
    title: `New Home Construction ${S.city} IN | ${S.name}`,
    description: `Custom new home construction in ${S.city} and across ${S.region}. Licensed, bonded and insured builders handling framing through finish, with electrical, plumbing and HVAC installed by qualified trades.`,
    path: '/new-home-construction',
  },
  HomeRemodeling: {
    title: `Home Remodeling ${S.city} IN | ${S.name}`,
    description: `Whole-home and room-by-room remodeling in ${S.city}, ${S.stateFull}. Kitchens, bathrooms, additions and interior renovations from a licensed and insured local contractor. Call ${S.phone}.`,
    path: '/home-remodeling',
  },
  Roofing: {
    title: `${S.city} Roofing Company | Metal & Shingle Roofs | ${S.name}`,
    description: `Roofing company serving the Indianapolis area and surrounding counties. Asphalt shingle and metal roof installation, with fully licensed, bonded and insured crews. Free estimates at ${S.phone}.`,
    path: '/roofing',
  },
  Siding: {
    title: `Siding Installation ${S.city} IN | ${S.name}`,
    description: `Siding installation and replacement in ${S.city} and across ${S.region}. Durable exteriors installed by licensed, bonded and insured contractors.`,
    path: '/siding',
  },
  Windows: {
    title: `Window Replacement ${S.city} IN | ${S.name}`,
    description: `Window replacement and installation in ${S.city}, ${S.stateFull}. Improve efficiency and curb appeal with professional installation from ${S.name}.`,
    path: '/windows',
  },
  CommercialWork: {
    title: `Commercial Construction ${S.city} IN | ${S.name}`,
    description: `Commercial construction and build-outs across ${S.region}. ${S.name} handles commercial roofing, exteriors and interior work for property owners and businesses.`,
    path: '/commercial-work',
  },
  Contact: {
    title: `Contact ${S.name} | Free Estimate in ${S.city}, ${S.state}`,
    description: `Get a free estimate from ${S.name}. Call ${S.phone}, email ${S.email}, or visit ${S.street}, ${S.city}, ${S.stateFull} ${S.zip}. Serving ${S.region}.`,
    path: '/contact',
  },
  Financing: {
    title: `Financing Options | ${S.name} ${S.city} IN`,
    description: `Financing options for construction and remodeling projects with ${S.name}. Talk through payment options for your project by calling ${S.phone}.`,
    path: '/financing',
  },
  FeaturedVideos: {
    title: `Featured Project Videos | ${S.name}`,
    description: `Watch project videos from ${S.name}, showing construction and remodeling work completed across ${S.region}.`,
    path: '/featured-videos',
  },
  PrivacyPolicy: {
    title: `Privacy Policy | ${S.name}`,
    description: `How ${S.name} collects, uses and protects information submitted through this website.`,
    path: '/privacy-policy',
  },
  TermsOfService: {
    title: `Terms of Service | ${S.name}`,
    description: `The terms governing use of the ${S.name} website and services.`,
    path: '/terms-of-service',
  },
} as const;

export type PageKey = keyof typeof PAGE_SEO;

export function pageMeta(key: PageKey) {
  const p = PAGE_SEO[key];
  const url = `${S.url}${p.path === '/' ? '/' : p.path}`;
  // NOTE: a child route's meta() REPLACES the root's entirely in React Router
  // framework mode. Site-wide tags therefore have to live here, not in
  // app/root.tsx, or they vanish from every page.
  return [
    { title: p.title },
    { name: 'description', content: p.description },
    { name: 'robots', content: 'index, follow' },
    { name: 'author', content: S.name },
    { name: 'geo.region', content: `US-${S.state}` },
    { name: 'geo.placename', content: S.city },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: S.name },
    { property: 'og:locale', content: 'en_US' },
    { property: 'og:image', content: `${S.url}/og-image.jpg` },
    { property: 'og:image:type', content: 'image/jpeg' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: `${S.name} in ${S.city}, ${S.state}` },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:image', content: `${S.url}/og-image.jpg` },
    { tagName: 'link', rel: 'canonical', href: url },
    { property: 'og:title', content: p.title },
    { property: 'og:description', content: p.description },
    { property: 'og:url', content: url },
    { name: 'twitter:title', content: p.title },
    { name: 'twitter:description', content: p.description },
  ];
}
