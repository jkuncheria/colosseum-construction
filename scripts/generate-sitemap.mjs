#!/usr/bin/env node
/** Generates public/sitemap.xml and public/robots.txt from app/seo.ts,
 *  so adding a page to PAGE_SEO is the only thing you have to do. */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const src = readFileSync('app/seo.ts', 'utf8');
const url = src.match(/url:\s*'([^']+)'/)[1].replace(/\/$/, '');
const paths = [...src.matchAll(/path:\s*'([^']+)'/g)].map((m) => m[1]);
const today = new Date().toISOString().slice(0, 10);

const priority = (p) => (p === '/' ? '1.0' : /privacy|terms/.test(p) ? '0.3' : '0.8');

mkdirSync('public', { recursive: true });
writeFileSync('public/sitemap.xml',
`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((p) => `  <url>
    <loc>${url}${p}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${priority(p)}</priority>
  </url>`).join('\n')}
</urlset>
`);
writeFileSync('public/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${url}/sitemap.xml\n`);
console.log(`✓ sitemap.xml (${paths.length} urls) + robots.txt`);
