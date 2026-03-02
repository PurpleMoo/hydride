# Hydride

Hydride is a hybrid [Svelte](https://svelte.dev/) framework based on [Vite](https://vite.dev/) and [Nitro](https://v3.nitro.build/). It combines Nitro's server capabilities such as API routes in `src/routes` with Svelte based Single Page Application and File System based router. The framework is meant for building medium and small SaaS applications. The setup is opinionated, but based on battle tested and efficient tools.

## Commands

- `bun run dev` - start dev server
- `bun run build` - production build
- `bun run check` - find Svelte error and warning diagnostics
- `bun run lint` - run oxlint
- `bun run fmt` - run oxfmt
- `bun run nitro task list` - list defined background jobs when the dev server is running
- `bun run db:generate` - generate db migrations
- `bun run db:migrate` - migrate db

## Project Structure

```
.
├── drizzle/                # DB migrations and snapshots
├── public/                 # Assets that should be carried over to dist
├── src/                    # App's source code
│   ├── assets/             # directory for dynamically imported assets
│   ├── lib/                # directory for application's library/
│   │   ├── /components     # Svelte UI components
│   │   └── /server         # Server-only code (db, auth, orpc router)
│   ├── routes/             # API Routes and Svelte pages/
│   │   ├── /_auth          # Authentication related pages
│   │   ├── /_dashboard     # Pages accessible for authenticated users
│   │   ├── /_marketing     # Pages accessible for everyone
│   │   ├── /api/auth       # Better Auth handler
│   │   └── /rpc            # ORPC handler
│   ├── tasks/              # Background task definitions
│   ├── app.css             # App's main styling entry
│   ├── app.d.ts            # App's main (ambient) type definitions
│   ├── app.svelte          # App's main Svelte component that gets mounted
│   └── main.ts             # App's main TS module that gets bundled with Vite
├── .env                    # Env variables
├── .env.example            # Blank env variables to copy and fill in
├── .oxfmtrc.json           # oxfmt config
├── .oxlintrc.json          # oxlint config
├── AGENTS.json             # this file
└── drizzle.config.ts       # ORM config
```

## General rules

- Read helper files before doing anything: DOCS.md, SPECIFICATION.md, IMPLEMENTATION.md.
- Use Context7 MCP to get more context about `nitrojs/nitro`, `sveltejs/svelte` and `vitejs.vite`.

## Code Conventions

### Do

- Use strict TypeScript.
- Use Bun runtime for development.
- Use ORPC for all frontend <> backend communication - avoid using Fetch API directly from components.
- Use Drizzle for all DB queries, inserts, and updates - no raw SQL.
- Use `svelte-simple-form` + Zod for any form with validation.
- Prefer small, focused `.svelte` components. Always include `lang="ts"` attribute in the `<script>`.
- When styling UI: prefer using existing Basecoat UI components. Fall back to writing Tailwind styling. Never write inline CSS in `<style>` tag.
- Use `@lucide/svelte` icons. Don't add a separate icon library.
- Use Svelte 5 runes for state management.
- Prioritize code readability and maintainability.

### Don't

- Do not stub or mock anything in the codebase without confirmation.
- Do not add new NPM dependencies without confirmation.
- Do not use hard coded colors (ex. #ff0000) and accurate measures (ex. 17px). Prefere tailwind tokens (ex. text-neutral-300) and measures (max-w-120).
- Do not import server-only code from client components. Ensure everything you import from `$lib/server` has `import "$lib/server/server-only";` at the top.
- Do not add comments everywhere. Keep comments concise and relevant.
- Do not rely on else statements. Prefer early returns and pattern matching.

## Framework features

### Nitro server

Nitro serves a single application that has both server based API routes and Svelte SPA frontend.

- **Hybrid mode**: Nitro serves a single application that has both server based API routes and Svelte SPA frontend.
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
