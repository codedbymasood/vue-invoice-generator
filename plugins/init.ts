export default defineNuxtPlugin(async (nuxtApp) => {
  const store = useStore();
  const { getSettingsInDB } = useSettings();
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

    const { id, email } = session.user;

    store.initUser( id, email );

    const settings = await getSettingsInDB();

    if ( settings.data ) {
      const { company } : { company: Company} = settings.data;
      store.initCompany(company);      
    }

  } catch (error) {
    console.error('Error:', error.data?.message)
    throw error
  }
  
});