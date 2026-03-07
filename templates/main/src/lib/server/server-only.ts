const isNode = typeof process !== "undefined" && process.versions?.node != null;

// Covers: drizzle-kit generate, migrate, studio, check, push, etc.
const RAN_BY_DRIZZLE =
  isNode &&
  (process.env?.npm_lifecycle_script?.includes("drizzle-kit") ||
    process.argv?.some((arg) => arg.includes("drizzle-kit")));

const IS_SSR =
  // Vite SSR context
  (typeof import.meta !== "undefined" && import.meta.env?.SSR === true) ||
  // Plain Node.js (no Vite) — e.g. scripts, CLI tools
  (isNode && typeof window === "undefined");

if (!RAN_BY_DRIZZLE && !IS_SSR) {
  throw new Error("This module can only be imported on the server or via drizzle-kit");
}
