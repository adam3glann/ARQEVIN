# ARQEVIN website

A static, multi-page company website built with HTML, CSS, and vanilla JavaScript. It has no build step, runtime dependencies, backend, or secrets. It can be served from the repository root on Cloudflare Pages.

## Run locally

Serve the repository root with any static HTTP server. For example, from this directory:

```powershell
python -m http.server 8000
```

Then open <http://localhost:8000>. A local server is recommended so absolute asset paths behave as they do in deployment.

## Pages

- `index.html` — home
- `services.html` — service descriptions
- `work.html` — editable project case studies
- `about.html` — company purpose and approach
- `process.html` — six project stages
- `contact.html` — quote form preview

## Business and delivery materials

- `docs/LAUNCH_PLAYBOOK.md` — positioning, first-client outreach, qualification, delivery, and growth roadmap
- `docs/PROPOSAL_TEMPLATE.md` — reusable client proposal outline
- `docs/CLIENT_QUESTIONNAIRE.md` — project discovery questions
- `docs/STARTER_KITS.md` — reusable architecture and setup checklists for common project types

## Portfolio updates

The project data is collected in `assets/js/projects.js`. The current work page keeps a readable static HTML fallback; the page updates repeated project summaries and case-study facts from that data file when JavaScript is available. Keep project labels accurate and verify feature claims, links, and screenshots before publishing.

The Nuvanti case study links to its public storefront, but its technical details are explicitly marked for source verification. PadelSync is labeled as a university team project. Inventory & Sales Tracker is labeled as academic work.

## Contact form configuration

The quote form validates required fields in the browser and clearly says that it does not send or store submissions. It does not collect data until an endpoint is configured. Before launch:

1. Choose a form service or implement a server-side endpoint.
2. Configure its public submission URL in `assets/js/contact.js` or replace the submit handler with the provider's supported integration.
3. Validate and rate-limit submissions server-side, configure spam protection and notification routing, and add a privacy notice appropriate to the chosen provider and applicable requirements.
4. Test successful delivery, invalid input, and failure handling before advertising the form.

Never put private API keys or credentials in browser JavaScript. Any endpoint URL placed in frontend code is public.

## Deployment on Cloudflare Pages

Create a Pages project from the Git repository and deploy the static HTML files from the repository root. Cloudflare Pages supports a static HTML site without a framework or generated build. Use these settings:

- Framework preset: **None**
- Build command: leave blank
- Build output directory: `.` (repository root, where `index.html` is located)

The repository is connected to Cloudflare Pages and currently deploys at <https://arqevin-fxw.pages.dev/>. The static HTML uses that address for canonical URLs, the sitemap, and social metadata. If the Pages project name or public domain changes, update those URLs and redeploy.

The `_headers` file sets baseline browser security headers for Cloudflare Pages.

## Before launch

- Replace project notes with details verified from each source repository.
- Add only screenshots and links that are authorized and working.
- Connect and test the quote form; it is intentionally non-submitting now.
- Review contact and company details before publication.
- Update canonical, sitemap, and social metadata URLs if the public domain changes.
