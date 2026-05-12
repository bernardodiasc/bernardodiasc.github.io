# bernardodiasc.github.io

Personal blog and portfolio built with [Astro](https://astro.build/).

**Live site:** https://bernardodiasdacruz.com

## Requirements

Node.js v22 _(use [nvm](https://github.com/nvm-sh/nvm) to manage Node versions)_

## Getting started

```sh
yarn install
```

## Scripts

- **Development:** `yarn dev` — starts the dev server at http://localhost:4321/
- **Build:** `yarn build` — generates static files in `dist/`
- **Preview:** `yarn preview` — serves the production build locally
- **Deploy:** `yarn deploy` — publishes `dist/` to GitHub Pages via `gh-pages`

## Draft mode

Posts with `draft: true` in their frontmatter are hidden from all listings by default.

To preview drafts:

- **Local dev:** drafts are always visible on `localhost` — just run `yarn dev`
- **Production:** add `?draft` to any URL (e.g. `https://bernardodiasdacruz.com/?draft`)

Draft post pages are always built and accessible by direct URL. The `?draft` flag only controls whether they appear in listings.

To publish a draft, remove the flag or set it to `false`:

```yaml
---
draft: true   # hidden from listings unless ?draft
draft: false  # always visible (default when omitted)
---
```

## Tech stack

- [Astro 5](https://astro.build/) with MDX support
- Sitemap generation (`@astrojs/sitemap`)
- Auto-imported components (`astro-auto-import`)
- [D3.js](https://d3js.org/) for data visualizations
- Multi-language content (EN / PT)
