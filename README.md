<div align="center">

# Astro Business Starter & CMS

<br />

![Astro](https://img.shields.io/badge/Astro_6.1-FF5D01?style=for-the-badge&logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Cloudflare](https://img.shields.io/badge/Cloudflare_Pages-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Static CMS](https://img.shields.io/badge/Static_CMS-4A4A4A?style=for-the-badge&logo=netlify&logoColor=white)

</div>

## About

A high-performance, minimalist Astro template tailored for local service businesses. Uses a zero-JS architecture by default and completely separates data from UI with JSON files. Designed for maximum speed, easy content management, and straightforward deployment on Cloudflare Pages.

## Features

- **Integrated Headless CMS** — Built-in `/admin` panel (Static CMS) that commits changes directly via the GitHub API. No separate backend needed.
- **Data-Driven UI** — All business content (services, pricing, gallery, contact, about) is decoupled from UI and managed through JSON files in `/src/data/`.
- **Before & After Slider** — Custom vanilla JS image comparison slider with zero external dependencies.
- **Mobile-First & Responsive** — Clean vanilla CSS architecture adapted for all screen sizes.
- **SEO Optimized** — Dynamic meta tags per page, auto-generated XML sitemap, and `robots.txt`.
- **Markdown Support** — Rich text content (e.g. biographies) rendered via the `marked` library.
- **Google Maps Ready** — Location embedding support built into the contact page.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Astro |
| Language | TypeScript |
| Styling | CSS3 |
| CMS | Static CMS (GitHub backend) |
| Content Storage | JSON |
| Icons | lucide-astro |
| Hosting | Cloudflare Pages |

## Project Structure

```
/
├── public/
│   ├── admin/
│   └── robots.txt
├── src/
│   ├── assets/
│   │   └── uploads/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── HeroSection.astro
│   │   ├── ServicesSection.astro
│   │   ├── ShowcaseSlider.astro
│   │   └── CookieBanner.astro
│   ├── data/
│   │   ├── services.json
│   │   ├── pricing.json
│   │   ├── gallery.json
│   │   ├── about.json
│   │   └── contact.json
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── index.astro
│       ├── about.astro
│       ├── contact.astro
│       ├── gallery.astro
│       ├── pricing.astro
│       └── privacy-policy.astro
├── functions/
├── astro.config.mjs
└── tsconfig.json
```

## Prerequisites

- Node.js 18+
- A GitHub account (required for the CMS backend)

## Getting Started

### Installation

```bash
git clone https://github.com/your-username/astro-business-starter.git
cd astro-business-starter
npm install
npm run dev
```

### Available Scripts

| Command | Action |
|---|---|
| `npm run dev` | Start local dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview the production build locally |

## Configuration

The CMS backend connects to GitHub via OAuth. Update `public/admin/config.yml` with your repository details before deploying:

```yaml
backend:
  name: github
  repo: your-username/astro-business-starter
  branch: main
```

All site content is stored in JSON files under `src/data/`. Edit these files directly or through the `/admin` panel.

| File | Content |
|---|---|
| `src/data/about.json` | Business name, description, biography |
| `src/data/services.json` | Service list and descriptions |
| `src/data/pricing.json` | Pricing tiers and details |
| `src/data/gallery.json` | Before & after image pairs |
| `src/data/contact.json` | Address, phone, email, map embed |

## Usage

Access the CMS admin panel at `/admin` after deployment. Changes made through the panel are committed directly to the GitHub repository and trigger a new Cloudflare Pages build automatically.

To customize the template for a specific business:

1. Update all JSON files in `src/data/` with real business content
2. Replace placeholder images in `src/assets/uploads/`
3. Set your repository details in `public/admin/config.yml`
4. Deploy to Cloudflare Pages and connect the GitHub OAuth app
