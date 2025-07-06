export default defineNuxtPlugin(async (nuxtApp) => {
  const store = useStore();
  const { getInvoices } = useInvoice();
  const supabase = useSupabaseClient();

  if ( process.server )  {
    return;
  }

  try {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      console.log( 'User not logged in. Skipping invoice load.' );
      return;
    }

    const invoices = await getInvoices();

    if ( invoices ) {
      store.initInvoices(invoices);
    }
  } catch (error) {
    console.error('Error:', error.data?.message)
    throw error
  }
  
});

