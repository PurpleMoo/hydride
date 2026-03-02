<script>
    import { CONFIG } from "$lib/const";
    import { GithubIcon, MoonIcon, SunIcon } from "@lucide/svelte";

    const year = new Date().getFullYear();
</script>

<footer class="flex items-center justify-between py-4 px-2 container mx-auto">
    <div class="flex gap-2 items-center">
        <a class="btn-ghost" href="/">{CONFIG.APP_NAME}</a>
        <a class="btn-link text-foreground/60">Privacy</a>
        <a class="btn-link text-foreground/60">Terms</a>
    </div>
    <div class="flex gap-2 items-center">
        <p class="text-sm text-foreground/60">
            Copyright © {year}
            {CONFIG.APP_NAME}
        </p>
        <a
            href="https://hydride.guarana.studio"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-link text-foreground/60"
        >
            Built with Hydride
        </a>
        <a
            href="https://github.com/guarana-studio/hydride"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-icon-outline"
        >
            <GithubIcon size={16} />
        </a>
        <button
            type="button"
            aria-label="Toggle dark mode"
            data-tooltip="Toggle dark mode"
            data-side="top"
            data-align="end"
            onclick={() =>
                document.dispatchEvent(new CustomEvent("basecoat:theme"))}
            class="btn-icon-outline size-8"
        >
            <span class="hidden dark:block"><SunIcon /></span>
            <span class="block dark:hidden"><MoonIcon /></span>
        </button>
    </div>
</footer>
