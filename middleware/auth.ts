export default defineNuxtRouteMiddleware(async(to, _from) => {
  const user = useSupabaseUser()
  const supabase = useSupabaseClient()
  const session = await supabase.auth.getSession()

  if (!session.data.session || !user.value) {
    return navigateTo('/login')
  }
})