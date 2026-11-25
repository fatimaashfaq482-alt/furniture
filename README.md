# Auren Living — Luxury Furniture E-Commerce Storefront

**Thoughtfully Designed. Beautifully Lived.**

A production-ready, responsive e-commerce storefront built with React, TypeScript, Vite, Tailwind CSS, and React Router, configured for both GitHub Pages and Hostinger static deployment.

## Features

- **Editorial Storefront**: Warm neutral palette, `Cormorant Garamond` serif headings, `DM Sans` body typography, bespoke interior and studio product photography.
- **Full Product Catalog & Filtering**: Shop all pieces, filter by room collection, material, and price range, sort by popularity or price, and perform instant search.
- **Interactive Product Detail Pages**: Multi-angle gallery with zoom modal, color finish swatches, size options, dimensions, materials, care FAQs, and related items.
- **Persistent Shopping Bag & Wishlist**: Slide-out cart drawer and wishlist saved in `localStorage`.
- **Demo Checkout Experience**: Multi-section shipping, delivery, and order summary interface with order confirmation receipt.
- **Static Hosting Ready**: Configured with relative asset paths (`base: './'`) and `HashRouter` so every route and asset loads cleanly on GitHub Pages subpaths as well as Hostinger.

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

## Deploying to GitHub Pages

Do **not** set GitHub Pages to serve raw source files from the repository root (`main` / `/`), as browsers cannot execute raw `.tsx` files—always deploy the built `dist/` bundle.

### Automatic Deployment (Recommended)

This repository includes `.github/workflows/deploy.yml`:

1. Push your code to the `main` branch on GitHub.
2. Open your repository **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. GitHub will automatically run `npm run build` and publish `dist/` to your GitHub Pages URL.

### Manual `gh-pages` Deployment

If deploying manually, build first (`npm run build`) and publish the contents of the `dist/` folder (not the repo root) to your `gh-pages` branch.

## Deploying to Hostinger

1. Run `npm run build` locally to generate the `dist/` folder.
2. Log in to Hostinger hPanel and open **File Manager** (or connect via FTP/SFTP).
3. Navigate to `public_html/`.
4. Upload **all contents inside** `dist/` directly into `public_html/`.
