<script lang="ts">
    import { DownloadIcon, SearchIcon } from "@lucide/svelte";

    const today = new Date().toISOString().split("T")[0];
</script>

<div class="flex flex-col gap-4 my-4">
    <div class="flex justify-between items-center">
        <div class="relative max-w-80 w-full">
            <input type="text" class="input pl-9" placeholder="Search" />
            <div
                class="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground"
            >
                <SearchIcon size={16} />
            </div>
        </div>
        <div class="flex items-center gap-2">
            <input type="date" class="input" value={today} />
            <button class="btn-outline">
                <DownloadIcon />
                <span>Export</span>
            </button>
        </div>
    </div>
    <div class="card flex-row justify-between">
        <section>
            <h2 class="text-sm font-semibold">Total Balance</h2>
            <span class="text-3xl">$320.20</span>
        </section>
        <footer class="gap-2">
            <button class="btn-lg">Top Up</button>
            <button class="btn-lg-outline">Send</button>
        </footer>
    </div>
    <div class="card">
        <header>
            <h2>Recent activity</h2>
        </header>
        <section class="overflow-x-auto">
            <table class="table">
                <thead>
                    <tr>
                        <th>Invoice</th>
                        <th>Status</th>
                        <th>Method</th>
                        <th class="text-right">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="font-medium">INV001</td>
                        <td>Paid</td>
                        <td>Credit Card</td>
                        <td class="text-right">$250.00</td>
                    </tr>
                    <tr>
                        <td class="font-medium">INV002</td>
                        <td>Pending</td>
                        <td>PayPal</td>
                        <td class="text-right">$150.00</td>
                    </tr>
                    <tr>
                        <td class="font-medium">INV003</td>
                        <td>Unpaid</td>
                        <td>Bank Transfer</td>
                        <td class="text-right">$350.00</td>
                    </tr>
                    <tr>
                        <td class="font-medium">INV004</td>
                        <td>Paid</td>
                        <td>Paypal</td>
                        <td class="text-right">$450.00</td>
                    </tr>
                    <tr>
                        <td class="font-medium">INV005</td>
                        <td>Paid</td>
                        <td>Credit Card</td>
                        <td class="text-right">$550.00</td>
                    </tr>
                    <tr>
                        <td class="font-medium">INV006</td>
                        <td>Pending</td>
                        <td>Bank Transfer</td>
                        <td class="text-right">$200.00</td>
                    </tr>
                    <tr>
                        <td class="font-medium">INV007</td>
                        <td>Unpaid</td>
                        <td>Credit Card</td>
                        <td class="text-right">$300.00</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="3">Total</td>
                        <td class="text-right">$2,500.00</td>
                    </tr>
                </tfoot>
            </table>
        </section>
    </div>
</div>
