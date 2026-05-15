# Forge Academy

Forge Academy is a cohort application site for program registration, track selection, applicant details, structured form data, validation, and CRM-ready submissions.

This website is powered by Wix Headless and built using [wix-headless.dev](https://www.wix-headless.dev).

## Links

- Live site: [https://forge-acad-3199e0e5-gonenj.wix-site-host.com](https://forge-acad-3199e0e5-gonenj.wix-site-host.com)
- Source: [https://github.com/wix-incubator/forgeacademy](https://github.com/wix-incubator/forgeacademy)
- Wix site ID: `30c04322-4fa3-4ca1-a127-c3ee7a6fc219`

## What It Showcases

- A custom Astro education/application funnel backed by Wix Forms.
- Wix-hosted form schema loading with custom UI rendering.
- Form validation and submission routing from a headless front end.
- Branded success states for program applicants.
- Public `robots.txt` and `llms.txt` configured through Wix SEO txt APIs.
- Deployment with `wix release`.

## Wix Solutions Used

- Wix Headless Site for the managed site/runtime foundation.
- Wix Forms for cohort application fields and submissions.

## Wix SDKs And Packages

- `@wix/astro`
- `@wix/astro-pages`
- `@wix/sdk`
- `@wix/forms`

## Local Development

Create a local env file from `.env.example` or run the Wix CLI env setup for the connected site.

```bash
npm install
npm run dev
```

## Build And Release

```bash
npm run build
npm run release
```
