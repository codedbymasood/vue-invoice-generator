export const useSettings = () => {  
  const store = useStore();

  const saveSettingsInDB = async () => {
    try {
      const response = await $fetch('/api/save-settings', {
        method: 'POST',
        body: {
          company: store.company
        }
      });

      return {
        success: true,
        message: 'Settings saved',
        data: response.data
      }
    } catch (error) {
      console.error('Error:', error.data?.message)
      throw error
    }
  }

  const getSettingsInDB = async () => {
    try {
      const response = await $fetch('/api/get-settings');

      return {
        success: true,
        data: response.data
      }
    } catch (error) {
      console.error('Error:', error.data?.message)
      throw error
    }
  }

  return {
    saveSettingsInDB,
    getSettingsInDB
  }
}
