export const useAuth = () => {
  const supabase = useSupabaseClient()
  const user = useSupabaseUser()

  const signUp = async (email, password, userData = {}) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: userData
        }
      })
      if (error) {
        throw error
      }
      return { data, error: null }
    } catch (error) {
      return { data: null, error: error.message }
    }
  }

  const signIn = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })
      if (error) {
        throw error
      }
      await navigateTo('/');
      return { data, error: null }
    } catch (error) {
      return { data: null, error: error.message }
    }
  }

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) {
        throw error;
      }
      await navigateTo('/login')
      return { error: null }
    } catch (error) {
      return { error: error.message }
    }
  }

  return {
    user: readonly(user),
    signUp,
    signIn,
    signOut
  }
}