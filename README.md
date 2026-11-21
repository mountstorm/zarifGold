# ZarifGold

**A website for a hand-woven silk carpet company from Uzbekistan: story, products, gallery, artisans and contact on one page.**

[![Live site](https://img.shields.io/badge/live-zarif--gold.vercel.app-b8956a)](https://zarif-gold.vercel.app)

**Live:** https://zarif-gold.vercel.app

Built for ZarifGold, a maker of silk and wool carpets, handwoven in the Fergana Valley in the tradition of the Silk Road. The site
introduces the founder and the weavers, shows the collection, and gives customers a way to ask
questions and get in touch.

## What's on the page

- **Hero and About**: the story of the company and its master craftsman
- **Products and Gallery**: the carpet collection
- **Team**: the dye specialist, pattern designer and other artisans behind each piece
- **Reviews and FAQ**: customer testimonials and common questions
- **Contact** and footer
- **Multi-language ready** through `react-i18next` with browser language detection

## Stack

React 19, TypeScript, Vite, Tailwind CSS and React Router. The repo also has Supabase, Stripe,
Firebase and Recharts installed for later checkout, accounts and analytics work.

## Run it

Needs Node 20 or newer.

```bash
npm install
npm run dev
```

| Script | What it does |
|---|---|
| `npm run dev` | Vite dev server |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | ESLint, no warnings allowed |
| `npm run type-check` | TypeScript check with `tsc --noEmit` |

## Known limitations

- **Content is mock data.** Products, artisans, reviews and FAQs live in `src/mocks/`, not a database.
- **No checkout yet.** The payment and backend packages are installed but not wired up.
- **One page.** There is a single home route plus a 404.
- **No translations are checked in yet.** The i18n loader is set up, but the language files are not there.

Made by [Muzaffar Khaydarov](https://github.com/mountstorm).
