import React from 'react';
import { Links, Meta, Outlet, Scripts, ScrollRestoration, isRouteErrorResponse } from 'react-router';
import type { Route } from './+types/root';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { PAGE_SEO, SITE } from './seo';
import { LOCAL_BUSINESS_SCHEMA } from './schema';
import { TAILWIND_CONFIG, GLOBAL_STYLES } from './headAssets';

export const links: Route.LinksFunction = () => [
  { rel: 'icon', type: 'image/svg+xml', href: '/vite.svg' },
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Playfair+Display:wght@400;600;700&display=swap',
  },
];

export function meta() {
  const home = PAGE_SEO.Home;
  return [
    { title: home.title },
    { name: 'description', content: home.description },
    { name: 'robots', content: 'index, follow' },
    { name: 'author', content: SITE.name },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: SITE.name },
    { property: 'og:locale', content: 'en_US' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'geo.region', content: 'US-IN' },
    { name: 'geo.placename', content: SITE.city },
  ];
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Meta />
        <Links />
        {/* Tailwind is served from the CDN and configured inline. The config
            defines the site's fonts and custom colours, so it must load before
            the CDN script processes the markup. */}
        <script src="https://cdn.tailwindcss.com"></script>
        <script dangerouslySetInnerHTML={{ __html: TAILWIND_CONFIG }} />
        <style dangerouslySetInnerHTML={{ __html: GLOBAL_STYLES }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }}
        />
        {/* RenoLens AI Visualizer. The config must be defined BEFORE embed.js
            runs; the old index.html declared it after the async script, which
            was a race the widget could lose. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.renolensConfig = {
  clientId: 'RL-JDJEDGHN',
  position: 'bottom-right',
  buttonText: 'Try Our AI Visualizer',
  buttonIcon: '\u2728',
  industries: ['kitchen-bath', 'landscaping', 'roofing', 'bathroom']
};`,
          }}
        />
        <script src="https://renolens.com/embed.js" async></script>
      </head>
      <body className="bg-slate-50 text-slate-800 antialiased selection:bg-orange-500 selection:text-white">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  const is404 = isRouteErrorResponse(error) && error.status === 404;
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <main className="px-6 py-24 text-center">
        <h1 className="text-4xl font-serif font-bold text-slate-900 mb-4">
          {is404 ? 'Page not found' : 'Something went wrong'}
        </h1>
        <p className="text-slate-600 mb-8">
          {is404 ? 'That page does not exist or has moved.' : `Please try again, or call ${SITE.phone}.`}
        </p>
        <a href="/" className="text-orange-600 font-semibold hover:underline">Back to home</a>
      </main>
      <Footer />
    </div>
  );
}
