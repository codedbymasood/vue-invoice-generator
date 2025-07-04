export default defineNuxtPlugin(async (nuxtApp) => {
  if ( process.server )  {
    return;
  }

  const store = useStore();
  const { getInvoices } = useInvoice();

  const supabase = useSupabaseClient();

  const { data: { session } } = await supabase.auth.getSession();
  
  if (!session) {
    console.log( 'User not logged in. Skipping invoice load.' );
    return;
  }

  const invoices = await getInvoices();
  store.initInvoices(invoices);
});

