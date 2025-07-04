export default [
  {
    title: 'Invoice Settings',
    settings: [
      {
        id: 'invoice_no',
        default: '',
        type: 'text'
      },
      {
        id: 'client_name',
        default: '',
        type: 'text'
      },
      {
        id: 'client_email',
        default: '',
        type: 'text'
      },
      {
        id: 'client_address',
        default: '',
        type: 'textarea'
      },
      {
        id: 'title',
        default: '',
        type: 'text'
      },
      {
        id: 'status',
        default: 'draft',
        type: 'select',
        options: {
          draft: 'Draft',
          published: 'Published'
        }
      },
      {
        id: 'items',
        default: [],
        type: 'items'
      },
      {
        id: 'amount',
        default: 0,
        type: 'number'
      },
      {
        id: 'tax',
        default: 'excluded',
        type: 'select',
        options: {
          included: 'Included',
          excluded: 'Excluded'
        }
      },
      {
        id: 'tax_percentage',
        default: 0,
        type: 'number'
      },
      {
        id: 'created_at',
        default: '',
        type: 'date'
      },
      {
        id: 'due_date',
        default: '',
        type: 'date'
      }
    ]
  },
  {
    title: 'Company Settings',
    settings: [
      {
        id: 'company_email',
        default: '',
        type: 'text'
      }
    ]
  }
]