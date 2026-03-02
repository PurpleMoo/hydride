import path from "node:path";

import { svelte } from "@sveltejs/vite-plugin-svelte";
import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";
import { router } from "sv-router/vite-plugin";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [nitro(), svelte(), router(), tailwindcss()],
  resolve: {
    alias: {
      $assets: path.resolve(import.meta.dirname, "src", "assets"),
      $lib: path.resolve(import.meta.dirname, "src", "lib"),
      $router: path.resolve(import.meta.dirname, ".router", "router.ts"),
    },
  },
  nitro: {
    serverDir: "./src",
    experimental: {
      tasks: true,
      asyncContext: true,
    },
  },
});
