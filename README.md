# WayneMathNotes

Source for [WayneMathNotes.com](https://waynemathnotes.com/).

The site is intentionally lightweight: semantic HTML, shared CSS, and small amounts
of JavaScript where a page actually needs it.

## Repository structure

- `public/` contains everything that may be served publicly.
- `public/math-notes/` contains mathematics notes.
- `public/comp232/` contains COMP 232 programming work.
- `wrangler.jsonc` contains the Cloudflare Workers deployment configuration.
- `package.json` pins the Wrangler version used for deployments.

## Local development

```bash
npm install
npm run dev
```

## Deployment

Cloudflare Workers is connected to this repository.

- `main` is the production branch.
- Changes should be developed on a separate branch when practical.
- Cloudflare preview deployments can be reviewed before merging into `main`.
- A merge or push to `main` triggers the production deployment.

The production custom domain is `waynemathnotes.com`.
