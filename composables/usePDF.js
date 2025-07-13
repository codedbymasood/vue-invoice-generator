export const usePDF = () => {
  const generatePDF = async (elementId, filename = 'invoice.pdf', options = {}) => {
    try {
      // Get HTML content from element
      const element = document.getElementById(elementId)
      
      if (!element) {
        throw new Error('Element not found')
      }
      
      const html = element.outerHTML
      
      // Call server API
      const response = await $fetch('/api/generate-pdf', {
        method: 'POST',
        body: {
          html,
          filename,
          options
        },
        responseType: 'arrayBuffer'
      });

      return response;
      
    } catch (error) {
      console.error('PDF generation failed:', error)
      return { success: false, error: error.message }
    }
  }

  const downloadPDF = async(elementId, filename = 'invoice.pdf', options = {}) => {    
    const response = await generatePDF(elementId, filename, options);

    // Create blob and download
    const blob = new Blob([response], { type: 'application/pdf' })
    const url = URL.createObjectURL(blob)
    const downloadBtn = Object.assign(
      document.createElement('a'), {
        href: url,
        download: filename,
      }
    )

    downloadBtn.click();
    URL.revokeObjectURL(url)
    
    return { success: true }
  }

  return {
    generatePDF,
    downloadPDF
  }
}