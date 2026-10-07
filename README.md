# ARQEVIN

ARQEVIN is an independent software company building practical digital products and business systems, with AI where it solves a real problem.

## What we do

- Websites and e-commerce experiences
- Business systems and dashboards
- Backend APIs, databases, and integrations
- AI integrations and workflow automation
- Maintenance and support

## Selected projects

- **Nuvanti** — an independent clothing-brand storefront. [Visit the live store](https://nuvanti-shop.pages.dev/).
- **PadelSync** — a university team project completed by four students for MIU course SWE230.
- **Inventory & Sales Tracker** — an academic C++ console application.

PadelSync and Inventory & Sales Tracker are academic work. Portfolio copy is limited to project context and publicly observable facts; no unverified features or results are claimed.

## Technology

The ARQEVIN company website itself uses semantic HTML, CSS, and vanilla JavaScript. It is served as static files from Cloudflare Pages, with no build step, backend, runtime dependencies, or frontend secrets. Other technologies should be listed on a project page only when verified against that project's source.

## Deployment

The site is deployed at <https://arqevin-fxw.pages.dev/>. Cloudflare Pages settings:

- Framework preset: **None**
- Build command: leave blank
- Build output directory: `.` (repository root)

The repository includes `robots.txt`, `sitemap.xml`, and `_headers`. The custom domain should replace the Pages URL in canonical links, sitemap entries, and social metadata only after it is configured and serving the site.

## Project structure

```text
.
├── assets/
│   ├── css/site.css
│   ├── js/                 # Navigation, contact preview, project summaries
│   ├── favicon.svg
│   └── arqevin-social.svg
├── docs/                   # Launch playbook and client delivery templates
├── about.html
├── contact.html
├── 404.html
├── index.html
├── process.html
├── services.html
├── work.html
├── robots.txt
├── sitemap.xml
└── _headers
```

## Run locally

No package installation or compilation is required. From the repository root, run:

```powershell
python -m http.server 8000
```

Then visit <http://localhost:8000>. A local HTTP server helps exercise the same root-relative asset paths used in deployment.

## Business and delivery materials

- `docs/LAUNCH_PLAYBOOK.md` — positioning, first-client outreach, qualification, delivery, and growth roadmap
- `docs/PROPOSAL_TEMPLATE.md` — reusable client proposal outline
- `docs/CLIENT_QUESTIONNAIRE.md` — project discovery questions
- `docs/STARTER_KITS.md` — architecture and setup checklists for common project types

## Contact form

The Contact page provides direct email and WhatsApp links. The quote form validates fields and displays a local preview message, but does not send or store inquiries. Use the direct links for real inquiries unless a form service is configured later. Never put private API keys or credentials in browser code.
