# Hydride - Nitro & Svelte starter

A starter meant for building mini SaaS apps.

## Features

- **Hybrid mode**: [Nitro](https://nitro.build/) serves a single application that has both server based API routes and [Svelte](https://svelte.dev/) SPA frontend.
- **File System Routing**: Build your app with API routes and Svelte pages in `src/routes`.
- **Type-safe backend - frontend communication**: The template ships with [ORPC](https://orpc.dev/) that provides a type-safe way to communicate between backend and frontend.
- **Type-safe ORM**: Use [Drizzle ORM](https://orm.drizzle.team/) to query and insert data into your database. The template has a preconfigured SQLite database.
- **Type-safe Authentication**: There is a preconfigured [Better Auth](https://better-auth.com/) so you don't have to pay for authentication infrastucture or roll your own auth. The default auth options are Email OTP and Passkeys.
- **Type-safe Environment Variables**: We configured the framework to expose type-safe env variables to your backend. Frontend variable are handled by Vite.
- **Type-safe Forms**: We provide [svelte-simple-form](https://github.com/harryhdt/svelte-simple-form) and [zod](https://zod.dev/) so you can easily validate your forms and display meaningful errors.
- **Linter and formatter**: The project configuration contains config for [oxc](https://oxc.rs/) libraries to lint and format your code quickly. The checks run in pre-commit as well.
- **Background tasks**: Use [Nitro powered Tasks](https://v3.nitro.build/docs/tasks) to execute code in the background. Schedule tasks with CRON.
- **KV Storage**: Use [Nitro powered KV Storage](https://v3.nitro.build/docs/storage) to store information in memory, or set it to use Redis.
- **Elegant styling with modes**: The template has preconfigured [Tailwind](https://tailwindcss.com/), [Basecoat UI](https://basecoatui.com/), [Lucide Icons](https://lucide.dev/), and Geist font.
- **AGENTS.md and skills/**: Use this template with AI Agents. We provide guides that help omit common problems and optimize token efficiency.

## New Project

### Prerequisite

- Node.js v20+
- Code editor
- Terminal

### Clone template

```sh
npx giget@latest gh:guarana-studio/hydride/templates/main <project-name>
# or Bun
bunx giget@latest gh:guarana-studio/hydride/templates/main <project-name>
```

### Install dependencies

```sh
npm i
# or Bun
bun install
```

### Development server

```sh
npm run dev
# or Bun
bun run dev
```
