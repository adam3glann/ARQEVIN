# ARQEVIN

ARQEVIN is an independent software company based in Cairo, Egypt. It builds websites, e-commerce experiences, business systems, and practical AI integrations for businesses.

This repository contains the ARQEVIN company website. It is a static, multi-page site built with semantic HTML, CSS, and vanilla JavaScript, and deployed on Cloudflare Pages.

## Website

- **Live site:** <https://arqevin-fxw.pages.dev/>
- **Hosting:** Cloudflare Pages
- **Build:** No build step or package installation is required.
- **Output directory:** Repository root (`.`)

The site includes the home, services, selected work, about, process, contact, and custom 404 pages. It also includes a favicon, social sharing image, `robots.txt`, `sitemap.xml`, and security headers in `_headers`.

## Services presented

- Websites and e-commerce experiences
- Business systems and dashboards
- Backend APIs, databases, and integrations
- AI integrations and workflow automation
- Maintenance and support

## Selected projects

- **Nuvanti** — an independent clothing brand with a live e-commerce storefront: [visit the store](https://nuvanti-shop.pages.dev/).
- **PadelSync** — a four-student academic project for MIU course SWE230, presented with selected landing page, court booking, and court administration screens. It is identified as a university team project.
- **Restaurant Management System** — a Juicy Lucy-branded project showing table and menu management, receptionist bookings, meal selection, and checkout workflows.

Project descriptions are limited to information represented in this repository. PadelSync is academic work; the site does not claim individual authorship, a production deployment, or business results. Technologies for the showcased projects are omitted unless verified from their source code.

## Run locally

From the repository root, start a local static server:

```powershell
python -m http.server 8000
```

Open <http://localhost:8000> in a browser. Serving over HTTP allows root-relative asset paths to work as they do on the deployed site.

## Deploy

Cloudflare Pages should use the following settings:

| Setting | Value |
| --- | --- |
| Framework preset | None |
| Build command | Leave blank |
| Build output directory | `.` (repository root) |

The canonical URLs, sitemap, and social metadata currently use the Cloudflare Pages address. Update them only after a custom domain has been configured and is serving the site.

## Repository structure

```text
.
├── assets/
│   ├── arqevin-social.svg
│   ├── favicon.svg
│   ├── css/site.css
│   ├── js/                 # Navigation behavior and project summaries
│   └── images/             # Project screenshots
├── docs/                   # Launch and client-delivery materials
├── 404.html
├── about.html
├── contact.html
├── index.html
├── process.html
├── services.html
├── work.html
├── _headers
├── robots.txt
└── sitemap.xml
```

## Business and delivery materials

- [`docs/LAUNCH_PLAYBOOK.md`](docs/LAUNCH_PLAYBOOK.md) — positioning, outreach, qualification, delivery, and growth guidance
- [`docs/PROPOSAL_TEMPLATE.md`](docs/PROPOSAL_TEMPLATE.md) — reusable proposal outline
- [`docs/CLIENT_QUESTIONNAIRE.md`](docs/CLIENT_QUESTIONNAIRE.md) — project discovery questions
- [`docs/STARTER_KITS.md`](docs/STARTER_KITS.md) — architecture and setup checklists

## Security and maintenance

The public website does not require a backend, authentication system, or frontend secrets. Keep credentials and private keys out of browser code. Security-related response headers are maintained in `_headers`.

When updating the site, keep project descriptions factual, verify external links, and update the canonical URLs and sitemap if the deployed domain changes.

## Contact

Use the email and WhatsApp links on the [Contact page](contact.html) to reach ARQEVIN. Contact inquiries are handled directly; the site does not submit to a custom backend.
