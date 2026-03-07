<script>
    import { p } from "$router";
    import {
        ArrowBigRightIcon,
        ArrowRightIcon,
        ClockArrowUpIcon,
        CoinsIcon,
        HandshakeIcon,
        ToolCaseIcon,
        WalletIcon,
    } from "@lucide/svelte";
</script>

{#snippet feature({ title, description, Icon })}
    <div class="flex flex-col p-8 gap-4">
        <Icon size={24} />
        <h3 class="text-xl font-semibold">{title}</h3>
        <p class="text-foreground/60">{description}</p>
    </div>
{/snippet}

<div class="container mx-auto p-2 flex-1 flex flex-col max-w-7xl my-40">
    <div class="flex flex-col items-center justify-center gap-8">
        <a class="btn-sm-secondary">
            <span>Important announcement goes here</span>
            <ArrowRightIcon />
        </a>
        <h2
            class="text-7xl max-w-200 text-center font-semibold text-balance leading-tight"
        >
            Never forget about your laundry again
        </h2>
        <p
            class="text-xl max-w-200 text-center text-balance text-foreground/60 leading-relaxed"
        >
            Are your washing machine and laundry basket full again? Try our
            laundry management tool and never forget about your laundry
            schedule.
        </p>
        <div class="flex justify-center items-center gap-4">
            <a href={p("/sign-in")} class="btn-lg">Sign In</a>
            <a class="btn-lg-secondary">API Documentation</a>
        </div>
    </div>
    <div class="flex flex-col items-center justify-center mt-40 gap-8">
        <h3 class="text-xl text-foreground/60">Trusted by</h3>
        <div class="flex items-center justify-center gap-16">
            <img src="/acme.svg" class="dark:invert" alt="Acme" />
            <img src="/acme.svg" class="dark:invert" alt="Acme" />
            <img src="/acme.svg" class="dark:invert" alt="Acme" />
            <img src="/acme.svg" class="dark:invert" alt="Acme" />
        </div>
    </div>
    <div
        class="grid grid-cols-3 mt-40 [&>*:nth-child(-n+3)]:border-b [&>*:nth-child(3n+2)]:border-l [&>*:nth-child(3n+2)]:border-r *:transition-colors *:hover:bg-foreground/4"
    >
        {@render feature({
            title: "Highly Available",
            description: "99.99% uptime guaranteed",
            Icon: ClockArrowUpIcon,
        })}
        {@render feature({
            title: "Pay as you go",
            description: "Pay only for what you use",
            Icon: CoinsIcon,
        })}
        {@render feature({
            title: "Satisfaction Guaranteed",
            description: "If you're not satisfied, we will refund you",
            Icon: HandshakeIcon,
        })}
        {@render feature({
            title: "Easy to use",
            description: "Easy to use and integrate",
            Icon: ArrowBigRightIcon,
        })}
        {@render feature({
            title: "Simple pricing",
            description: "Pricing suited to your needs",
            Icon: WalletIcon,
        })}
        {@render feature({
            title: "Connect your tools",
            description: "Integrate with tools you love",
            Icon: ToolCaseIcon,
        })}
    </div>
    <div
        class="flex flex-col items-center justify-center mt-40 gap-8 bg-primary rounded-xl p-20"
    >
        <h2 class="text-3xl font-semibold text-background">
            Schedule your laundry with ease
        </h2>
        <p
            class="text-xl text-background/80 max-w-200 text-balance text-center leading-relaxed"
        >
            Try out our best in class laundry schedule experience and join
            thousands of satisfied users.
        </p>
        <a href={p("/sign-in")} class="btn-lg-secondary">Sign In</a>
    </div>
</div>
