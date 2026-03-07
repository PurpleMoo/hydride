<script>
    import { authClient } from "$lib/auth-client";
    import { CONFIG } from "$lib/const";
    import { client } from "$lib/rpc";
    import { isActive, navigate, p } from "$router";
    import { UserIcon } from "@lucide/svelte";

    const isHome = $derived(isActive("/"));
    const me = await client.users.me().catch(() => undefined);
</script>

<header
    class="border-b sticky top-0 inset-x-0 bg-background/90 backdrop-blur-lg z-10"
>
    <div class="container mx-auto p-2 flex justify-between items-center">
        <div class="flex items-center gap-2">
            <a href={p(isHome || !me ? "/" : "/dashboard")} class="btn-ghost">
                <img src="/logo.svg" class="size-6 dark:invert" alt="Logo" />
                <span>{CONFIG.APP_NAME}</span>
            </a>
            {#if me.role === "admin"}
                <a href={p("/admin")} class="btn-ghost">Admin Panel</a>
            {/if}
        </div>
        {#if me}
            {#if isHome}
                <a href={p("/dashboard")} class="btn">Go to Dashboard</a>
            {:else}
                <a href={p("/settings")} class="btn-outline">
                    <UserIcon />
                    {me.email}
                </a>
            {/if}
        {:else}
            <a href={p("/sign-in")} class="btn">Sign In</a>
        {/if}
    </div>
</header>
