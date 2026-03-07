<script lang="ts">
    import { authClient } from "$lib/auth-client";
    import { client } from "$lib/rpc";
    import { toast } from "$lib/ui";
    import { navigate } from "$router";
    import { KeyIcon, XIcon } from "@lucide/svelte";

    const me = await client.users.me();
    const { data: passkeys } = await authClient.passkey.listUserPasskeys();

    async function addPasskey() {
        const { error } = await authClient.passkey.addPasskey({
            authenticatorAttachment: "platform",
        });
        if (error) {
            console.error(error)
            return toast({ category: "error", title: "Failed to add passkey" });
        }
        window.location.reload();
    }

    async function signOut() {
        await authClient.signOut();
        navigate("/");
    }

    async function deletePasskey(id: string) {
        const confirmed = window.confirm(
            "Are you sure you want to delete this passkey?",
        );
        if (!confirmed) return;
        const { error } = await authClient.passkey.deletePasskey({
            id,
        });
        if (error) {
            console.error(error)
            return toast({
                category: "error",
                title: "Failed to delete passkey",
            });
        }
        window.location.reload();
    }
</script>

<div class="flex-1 flex flex-col justify-center items-center">
    <div class="card max-w-lg w-full">
        <header>
            <h2 class="font-semibold text-lg">Settings</h2>
            <p>Manage your profile and account</p>
        </header>
        <section>
            <form class="form grid gap-6">
                <div class="grid gap-2">
                    <label for="demo-card-form-email">Email</label>
                    <input type="email" value={me?.email} disabled />
                    <button
                        type="button"
                        class="btn-outline w-full text-destructive"
                        onclick={signOut}>Sign Out</button
                    >
                </div>
                <hr />
                <div class="grid gap-2">
                    <h3 class="font-semibold text-sm">Passkeys</h3>
                    {#each passkeys as passkey}
                        <div
                            class="flex items-center justify-between border rounded-lg p-2 gap-2"
                        >
                            <KeyIcon size={16} class="ml-2" />
                            <span class="flex-1 text-sm">
                                {passkey.id}
                            </span>
                            <button
                                class="btn-icon-outline"
                                onclick={() => deletePasskey(passkey.id)}
                            >
                                <XIcon />
                            </button>
                        </div>
                    {/each}
                    <button
                        type="button"
                        class="btn-outline w-full"
                        onclick={addPasskey}>Add a Passkey</button
                    >
                </div>
            </form>
        </section>
    </div>
</div>
