---
name: background-tasks
description: Create, configure, and run Nitro server tasks. Use this skill when working with scheduled jobs, background tasks, database migrations, or any server-side automation in a Nitro or Nuxt project using the tasks API.
---

# Nitro Tasks

Nitro tasks are server-side jobs defined in `server/tasks/` that can be run on a schedule, programmatically, or manually via CLI or HTTP.

## Defining a Task

Create files at `src/tasks/[name].ts`. Nested directories use `:` as separator:

- `src/tasks/db/migrate.ts` → task name `db:migrate`

```ts
export default defineTask({
  meta: {
    name: "db:migrate",
    description: "Run database migrations",
  },
  run({ payload, context }) {
    console.log("Running DB migration task...");
    return { result: "Success" };
  },
});
```

## Scheduled Tasks

Use cron syntax in config to run tasks automatically:

```ts
export default defineNitroConfig({
  scheduledTasks: {
    "* * * * *": ["cms:update"], // every minute
    "0 * * * *": ["db:migrate"], // every hour
  },
});
```

**Supported presets:** `dev`, `node-server`, `bun`, `deno-server` (via croner engine), `cloudflare_module` (native Cron Triggers — wrangler patterns must match exactly).

## Running Tasks Programmatically

Use `runTask()` inside any event handler. Always authenticate before exposing this to users:

```ts
export default eventHandler(async (event) => {
  const payload = { ...getQuery(event) };
  const { result } = await runTask("db:migrate", { payload });
  return { result };
});
```

## Running Tasks in Dev

### CLI

```bash
nitro task list                          # list all tasks
nitro task run db:migrate --payload "{}" # run a task
```

### HTTP endpoints (dev only)

- `GET /_nitro/tasks` — list tasks and scheduled jobs
- `GET /_nitro/tasks/:name?key=value` — run task with query params as payload
- `POST /_nitro/tasks/:name` — run task with JSON body `{ "payload": { ... } }`

## Guidelines

- Task names must be unique; nested paths use `:` not `/`
- Each task runs as **one instance at a time** — parallel calls to the same task name are deduplicated and all callers receive the same return value
- Always validate and authenticate before exposing `runTask()` via an API route
- For Cloudflare, cron patterns in `scheduledTasks` must exactly match those configured in `wrangler.toml`
