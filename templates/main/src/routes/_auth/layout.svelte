<script lang="ts">
    import type { Snippet } from "svelte";

    let { children }: { children: Snippet } = $props();
</script>

<div
    class="min-h-screen container mx-auto flex flex-col items-center justify-center"
>
    <div class="flex flex-col max-w-128 w-full">
        {@render children()}
    </div>
</div>
