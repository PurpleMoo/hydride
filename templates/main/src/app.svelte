<script lang="ts">
  import { Router } from "sv-router";
  import "$router";
  import { onMount } from "svelte";
  import { setupTheme } from "$lib/ui";
  import { CONFIG } from "$lib/const";

  onMount(() => {
    setupTheme();
  });
</script>

<svelte:head>
  <title>{CONFIG.APP_NAME}</title>
</svelte:head>

<div id="toaster" class="toaster"></div>

<Router />
