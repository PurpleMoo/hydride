<script lang="ts">
    import Footer from "$lib/components/footer.svelte";
    import TopBar from "$lib/components/top-bar.svelte";
    import type { Snippet } from "svelte";

    let { children }: { children: Snippet } = $props();
</script>

<div class="flex flex-col min-h-screen">
    <TopBar />
    {@render children()}
    <Footer />
</div>
