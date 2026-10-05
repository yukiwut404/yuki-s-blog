# Portfolio Frontend

A frontend-only extraction of the public portfolio experience from `portfolio-v2`.

## What was removed

- Prisma / PostgreSQL / Neon
- AWS / Cognito / S3 / SES
- Admin CMS
- API routes
- Sentry / Upstash
- Database migrations and server-side seed

## What remains

- Next.js 16
- React 19
- Tailwind CSS 4
- Public home page
- Projects + project detail pages
- Blog + blog detail pages
- About page
- Dark mode
- EN / JA locale toggle
- Local TypeScript seed data

## Local data

Edit:

`src/lib/data/seed.ts`

That file is your local CMS replacement. Add/remove projects, posts, skills, education, etc. there. There is no database to migrate or seed.

## Run

```bash
npm install
npm run seed
npm run dev
```

Open http://localhost:3000

## Production

```bash
npm run build
npm start
```

## Vercel

Push this folder to GitHub and import the repository into Vercel.

Optional environment variable:

```env
NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
```

No database or other backend environment variables are required.

## Important

The original author's sample content has been replaced with generic placeholder content in `src/lib/data/seed.ts`. Replace it with your own portfolio information and images before publishing.

## Content

Blog and project detail pages use local Markdown files. Add a new post under `src/content/blog/` or a new project under `src/content/projects/`. The filename becomes the URL slug.
