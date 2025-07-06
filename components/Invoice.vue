<script setup lang="ts">
const props = defineProps<{
  invoice: Invoice,
  company: Company
}>();

const store = useStore();
console.log(store.company);


const invoiceItems : ComputedRef<Invoice['items']> = computed( () => props.invoice.items )

const subTotal : ComputedRef<number> = computed( () => {
  let amount = 0;
  invoiceItems.value.forEach( item => {
    amount += item.price || 0;
  });

  return amount;
});

const taxPercentage : ComputedRef<number> = computed( () => props.invoice.tax_percentage ?? 0 );

const taxAmount : ComputedRef<number> = computed( () => Math.round( subTotal.value * (taxPercentage.value/100) ) );

const total : ComputedRef<number> = computed( () => subTotal.value + taxAmount.value );

const currency : ComputedRef<Currency> = computed( () => '₹' );
</script>
<template>
  <div class="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg font-sans text-sm text-gray-700 grow">
    <!-- Header -->
    <div class="flex justify-between items-center border-b pb-6">
      <!-- Logo -->
      <div class="flex items-center gap-4">
        <!-- <img src="/logo.png" alt="Brand Logo" class="h-12 w-12 object-contain" /> -->
        <div>
          <h2 v-if="company && company.company_name" class="text-xl font-bold text-gray-800">{{ company.company_name }}</h2>
          <p v-if="company && company.website" class="text-gray-500 text-xs">{{ company.website }}</p>
        </div>
      </div>
      <!-- Invoice Info -->
      <div class="text-right">
        <h1 class="text-3xl font-bold text-gray-800">{{ invoice.title }}</h1>
        <p class="text-gray-500 text-sm">#{{ invoice.invoice_no }}</p>
      </div>
    </div>

    <!-- Address Info -->
    <div class="grid grid-cols-2 gap-6 mt-6">
      <!-- Company Address -->
      <div>
        <p class="text-gray-500 font-medium mb-1">From:</p>
        <p v-if="company && company.company_name" class="text-gray-800">{{ company.company_name }}</p>
        <div v-if="company && company.address">
          {{ company.address }}
        </div>
        <p v-if="company && company.email">Email: {{ company.email }}</p>
        <p v-if="company && company.phone">Phone: {{ company.phone }}</p>
      </div>
      <!-- Client Address -->
      <div class="text-right">
        <p class="text-gray-500 font-medium mb-1">Bill To:</p>
        <p v-if="invoice.client_name" class="text-gray-800">{{ invoice.client_name }}</p>
        <div v-if="invoice.client_address">
          {{ invoice.client_address }}
        </div>
        <p v-if="invoice.client_email">Email: {{ invoice.client_email }}</p>
      </div>
    </div>

    <!-- Dates -->
    <div class="flex justify-between mt-6">
      <div></div>
      <div class="text-right">
        <p>Issue Date: <span class="text-gray-800">{{ invoice.created_at }}</span></p>
        <p>Due Date: <span class="text-gray-800">{{ invoice.due_date }}</span></p>
      </div>
    </div>

    <!-- Items Table -->
    <div class="mt-8">
      <table class="w-full text-left border-collapse">
        <thead>
          <tr class="bg-gray-100 text-gray-600 uppercase text-xs">
            <th class="p-3">Item</th>
            <th class="p-3 text-right">Qty</th>
            <th class="p-3 text-right">Rate</th>
            <th class="p-3 text-right">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b" v-for="item in invoiceItems">
            <td class="p-3">{{ item.title }}</td>
            <td class="p-3 text-right">{{ item.quantity }}</td>
            <td class="p-3 text-right">{{currency}}{{ item.price }}</td>
            <td class="p-3 text-right">{{currency}}{{ item.quantity * item.price }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Summary -->
    <div class="mt-6 flex justify-end">
      <div class="w-full max-w-xs">
        <div class="flex justify-between py-2">
          <span>Subtotal</span>
          <span>{{currency}}{{subTotal}}</span>
        </div>
        <div class="flex justify-between py-2">
          <span>Tax ({{taxPercentage}}%)</span>
          <span>{{currency}}{{taxAmount}}</span>
        </div>
        <div class="flex justify-between py-2 text-lg font-bold border-t mt-2">
          <span>Total</span>
          <span>{{currency}}{{total}}</span>
        </div>
      </div>
    </div>

    <!-- Footer Note -->
    <div class="mt-8 text-xs text-center text-gray-500 border-t pt-4">
      Thank you for your business!
    </div>
  </div>

</template>