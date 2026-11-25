# Auren Living — Luxury Furniture E-Commerce Storefront

**Thoughtfully Designed. Beautifully Lived.**

A production-ready, responsive e-commerce storefront built with React, TypeScript, Vite, Tailwind CSS, and React Router, ready for static deployment on Hostinger or any modern static host.

## Features

- **Editorial Storefront**: Warm neutral palette, `Cormorant Garamond` serif headings, `DM Sans` body typography, bespoke interior and studio product photography.
- **Full Product Catalog & Filtering**: Shop all pieces, filter by room collection, material, and price range, sort by popularity or price, and perform instant search.
- **Interactive Product Detail Pages**: Multi-angle gallery with zoom modal, color finish swatches, size options, dimensions, materials, care FAQs, and related items.
- **Persistent Shopping Bag & Wishlist**: Slide-out cart drawer and wishlist saved in `localStorage`.
- **Demo Checkout Experience**: Multi-section shipping, delivery, and order summary interface with order confirmation receipt.
- **Hostinger Static Hosting Ready**: Includes `.htaccess` SPA routing fallback, `robots.txt`, and `sitemap.xml`.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

The compiled static site is output to the `dist/` directory.

## Deploying to Hostinger

1. Run `npm run build` locally to generate the `dist/` folder.
2. Log in to Hostinger hPanel and open **File Manager** (or connect via FTP/SFTP).
3. Navigate to `public_html/`.
4. Upload **all contents inside** `dist/` (including `index.html`, `assets/`, `favicon.svg`, `robots.txt`, `sitemap.xml`, and `.htaccess`) directly into `public_html/`.
5. Ensure `.htaccess` is visible and present in `public_html/` so deep links (such as `/shop` or `/product/the-haven-three-seater-sofa`) resolve cleanly.
