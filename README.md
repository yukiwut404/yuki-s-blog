# Yuki's Portfolio

A personal portfolio built with Next.js, React, and Tailwind CSS.

## Run locally with Docker

Install Docker Desktop or Docker Engine with the Compose plugin. From this directory, run:

```bash
docker compose up --build
```

Open [http://localhost:3000](http://localhost:3000). Docker installs the dependencies while building the image. On startup, the container runs `npm run seed` and then `npm run dev`. Changes to project files are mounted into the container for Next.js hot reload.

Stop the app with `Ctrl+C`. To remove the container and its network, run:

```bash
docker compose down
```

If you change `package.json` or `package-lock.json`, recreate the dependency volume and rebuild:

```bash
docker compose down -v
docker compose up --build
```

## Local content

`npm run seed` checks that `src/lib/data/seed.ts` exists and prints the available collections. Edit that file to update projects, posts, skills, experience, education, and certifications. Blog posts and projects can also be added as Markdown under `src/content/blog/` and `src/content/projects/`.

## Run without Docker

```bash
npm install
npm run seed
npm run dev
```

## Credits

This project is a personal recreation inspired by the portfolio and blog of [Yuta Asakura](https://asakurayuta.dev/).
