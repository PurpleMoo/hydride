<script lang="ts">
    import { z } from 'zod';
    import { client } from "$lib/rpc";
import { navigate, route } from "$router"

const ENTITIES = ["users"] as const
const EntitySchema = z.enum(ENTITIES)

const entity = EntitySchema.parse(route.params.entity)
if (!entity) {
  throw navigate("/admin")
}
const list = await client.admin[entity].list({})
console.log('>>>R', list)
</script>

<div class="overflow-x-auto">
<table class="table">
  <thead>
    <tr>
      <th>ID</th>
      <th>Status</th>
      <th>Method</th>
      <th class="text-right">Actions</th>
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
      <td colspan="3">Records</td>
      <td class="text-right">{list.totalItems}</td>
    </tr>
  </tfoot>
</table>
</div>
