# Reusable project starter system

These are small starting structures, not prebuilt products. Copy the closest structure into a client repository, then remove what the project does not need. Keep client credentials and production data out of these templates.

## 1. Business website

**Default approach:** semantic HTML, CSS, and vanilla JavaScript for a mostly informational site. Add a framework only when the content workflow or interaction justifies it.

```text
business-site/
├── index.html
├── services.html
├── about.html
├── contact.html
├── assets/
│   ├── css/site.css
│   ├── js/site.js
│   └── images/
├── robots.txt
├── _headers
├── .gitignore
└── README.md
```

**Start with:** business goals, page list, approved copy, design tokens, mobile navigation, semantic landmarks, metadata, accessible focus states, contact handling decision, and deployment instructions.

## 2. E-commerce

**Default approach:** first decide whether the project's catalog and order workflow fits a managed commerce platform. Build custom commerce only when there is a clear need and the client accepts the added operational responsibility. Keep payment credentials and sensitive payment data with the payment provider; never collect card details in custom frontend code.

```text
commerce-project/
├── frontend/
│   ├── pages/ or routes/
│   ├── components/
│   ├── services/catalog.js
│   └── styles/
├── backend/                 # only if custom workflows require it
│   ├── src/routes/
│   ├── src/services/
│   └── src/validation/
├── docs/catalog-and-order-flows.md
├── .env.example             # variable names only; no secrets
└── README.md
```

**Before coding:** agree on product variants, stock rules, delivery, cancellation/refund flows, guest accounts, admin roles, order notifications, payment provider, and who owns those accounts. Test duplicate submissions, price and stock changes, and payment failure paths.

## 3. Admin dashboard

**Default approach:** separate interface, API, and data access; implement only roles and views needed for the client's actual workflow.

```text
admin-system/
├── frontend/
│   ├── pages/
│   ├── components/
│   └── services/api-client.js
├── backend/
│   ├── src/routes/
│   ├── src/middleware/
│   └── src/services/
├── database/
│   └── migrations/
├── docs/roles-and-workflows.md
└── README.md
```

**Before coding:** map each user role to allowed actions, identify audit needs, define data ownership and retention, and agree on export/backup expectations. Enforce permissions on the server for every protected action; hiding a button is not authorization.

## 4. Backend and API

**Default approach:** Node.js and Express where suitable, with a documented API contract, validation at request boundaries, and an explicitly selected database.

```text
api-service/
├── src/
│   ├── app.js
│   ├── server.js
│   ├── routes/
│   ├── controllers/
│   ├── services/
│   ├── middleware/
│   ├── validators/
│   └── config/
├── migrations/              # or a clearly documented document schema
├── tests/
├── .env.example
├── .gitignore
└── README.md
```

**Defaults:** environment variables for secrets; validate and normalize inputs; return consistent errors without stack traces; allow only required origins; use parameterized database operations; use secure session or token practices appropriate to the client; add request limits and logging that excludes secrets and unnecessary personal data.

## 5. AI integration

**Default approach:** call the model provider from a server-side service, never directly from browser code with a private key. Keep provider access behind an interface so the workflow is testable and replaceable.

```text
ai-feature/
├── src/routes/ai.js
├── src/services/ai-provider.js
├── src/services/task-workflow.js
├── src/validation/input.js
├── src/policies/data-handling.md
├── tests/                 # mocked provider and failure-path checks
├── .env.example
└── README.md
```

**Before coding:** define the user problem, data that may be sent, consent and retention expectations, acceptable output, human review points, provider and spending limits, rate limits, timeout behavior, and a non-AI fallback. Never promise perfect or fully reliable model output.

## Shared handover checklist

- [ ] Scope, assumptions, and exclusions are written down.
- [ ] No secrets or production data are in Git.
- [ ] Setup works from the README on a clean machine.
- [ ] User roles and critical flows are checked.
- [ ] Responsive layout, keyboard use, and error states are reviewed.
- [ ] Backup, deployment, and rollback steps are documented where relevant.
- [ ] Client-owned service accounts and billing are handed over securely.
- [ ] Known limitations and maintenance options are listed.
