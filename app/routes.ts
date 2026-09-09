import { type RouteConfig, index, route } from '@react-router/dev/routes';

/** Every path here prerenders to its own static HTML file at build time. */
export default [
  index('routes/home.tsx'),
  route('about', 'routes/about.tsx'),
  route('new-home-construction', 'routes/new-home-construction.tsx'),
  route('home-remodeling', 'routes/home-remodeling.tsx'),
  route('roofing', 'routes/roofing.tsx'),
  route('siding', 'routes/siding.tsx'),
  route('windows', 'routes/windows.tsx'),
  route('contact', 'routes/contact.tsx'),
  route('financing', 'routes/financing.tsx'),
  route('commercial-work', 'routes/commercial-work.tsx'),
  route('featured-videos', 'routes/featured-videos.tsx'),
  route('privacy-policy', 'routes/privacy-policy.tsx'),
  route('terms-of-service', 'routes/terms-of-service.tsx'),
] satisfies RouteConfig;
