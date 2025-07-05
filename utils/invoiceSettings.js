export default [
  {
    title: 'Invoice Settings',
    settings: [
      {
        id: 'invoice_no',
        title: 'Invoice Number',
        default: '',
        type: 'text'
      },
      {
        id: 'title',
        title: 'Title',
        default: '',
        type: 'text'
      },
      {
        id: 'client_name',
        title: 'Client Name',
        default: '',
        type: 'text'
      },
      {
        id: 'client_email',
        title: 'Client Email',
        default: '',
        type: 'text'
      },
      {
        id: 'client_address',
        title: 'Client Address',
        default: '',
        type: 'textarea'
      },
      {
        id: 'status',
        title: 'Status',
        default: 'draft',
        type: 'select',
        options: {
          draft: 'Draft',
          published: 'Published'
        }
      },
      {
        id: 'items',
        title: 'Items',
        default: [],
        type: 'items'
      },
      {
        id: 'amount',
        title: 'Amount',
        default: 0,
        type: 'number'
      },
      {
        id: 'tax',
        title: 'Tax',
        default: 'excluded',
        type: 'select',
        options: {
          included: 'Included',
          excluded: 'Excluded'
        }
      },
      {
        id: 'tax_percentage',
        title: 'Tax Percentage',
        default: 0,
        type: 'number'
      },
      {
        id: 'created_at',
        title: 'Created At',
        default: '',
        type: 'date'
      },
      {
        id: 'due_date',
        title: 'Due Date',
        default: '',
        type: 'date'
      }
    ]
  },
  {
    title: 'Company Settings',
    settings: [{
        id: 'company_name',
        title: 'Name',
        default: '',
        type: 'text'
      },
      {
        id: 'company_address',
        title: 'Address',
        default: '',
        type: 'text'
      },
      {
        id: 'company_email',
        title: 'Email',
        default: '',
        type: 'text'
      },
      {
        id: 'company_website',
        title: 'Website',
        default: '',
        type: 'text'
      },
      {
        id: 'company_phone',
        title: 'Phone',
        default: '',
        type: 'text'
      }
    ]
  }
]