export default defineNuxtPlugin(async (nuxtApp) => {
  if ( process.server )  {
    return;
  }

  const store = useStore();

  const supabase = useSupabaseClient();

  const { data: { session } } = await supabase.auth.getSession();
  
  console.log( session );
  // TODO: Here needs to get and store the user and company details in the store

  if (!session) {
    return;
  }
});