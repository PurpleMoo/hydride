import "$lib/server/server-only";
import { spawn } from "node:child_process";

import { db, schema } from "$lib/server/db";
import { Cli } from "clerc";
import { eq } from "drizzle-orm";

import packageJson from "../../../package.json";

const USE_BUN = true;
const RUNNER = USE_BUN ? "bunx" : "npx";

async function runCommand(command: string) {
  const args = command.split(" ");
  const proc = spawn(RUNNER, args, { stdio: "inherit" });
  return new Promise((resolve, reject) => {
    proc.on("close", (code) => {
      if (code === 0) {
        resolve(null);
      } else {
        reject(new Error(`Command "${command}" exited with code ${code}`));
      }
    });
    proc.on("error", (err) => {
      reject(err);
    });
  });
}

Cli()
  .scriptName("hydride")
  .description("A helper CLI for Hydride starter.")
  .version(packageJson.version)
  .command("check", "Run Svelte Check and TSC")
  .command("lint", "Run OXC Lint")
  .command("format", "Run OXC Format")
  .command("db generate", "Generate DB migrations")
  .command("db migrate", "Run DB migrations")
  .command("db studio", "Run Drizzle Studio")
  .command("db setadmin", "Set given user as admin", {
    parameters: ["<email>"],
  })
  .command("skills sync", "Fetch the latest agent skills")
  .command("router generate", "Generate TypeScript types for the router")
  .on("check", async () => {
    return runCommand("svelte-check");
  })
  .on("lint", async () => {
    return runCommand("oxlint");
  })
  .on("format", async () => {
    return runCommand("oxfmt");
  })
  .on("db generate", async () => {
    return runCommand("drizzle-kit generate");
  })
  .on("db migrate", async () => {
    return runCommand("drizzle-kit migrate");
  })
  .on("db studio", async () => {
    return runCommand("drizzle-kit studio");
  })
  .on("db setadmin", async ({ parameters }) => {
    await db
      .update(schema.user)
      .set({ role: "admin" })
      .where(eq(schema.user.email, parameters.email));
  })
  .on("skills sync", async () => {
    return runCommand("giget@latest gh:guarana-studio/hydride/skills skills");
  })
  .on("router generate", async () => {
    return runCommand("sv-router");
  })
  .parse();
