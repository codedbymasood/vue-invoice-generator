export default [
  {
    title: 'Invoice Settings',
    settings: [
      {
        id: 'invoice_no',
        title: 'Invoice Number',
        default: '',
        type: 'text',
        saveIn: 'invoice'
      },
      {
        id: 'title',
        title: 'Title',
        default: '',
        type: 'text',
        saveIn: 'invoice'
      },
      {
        id: 'items',
        title: 'Items',
        default: [],
        type: 'items',
        saveIn: 'invoice'
      },
      {
        id: 'tax_percentage',
        title: 'Tax Percentage',
        default: 0,
        type: 'text',
        mod: 'number',
        saveIn: 'invoice'
      }
    ]
  },
  {
    title: 'Client Settings',
    settings: [
      {
        id: 'client_name',
        title: 'Client Name',
        default: '',
        type: 'text',
        saveIn: 'invoice'
      },
      {
        id: 'client_email',
        title: 'Client Email',
        default: '',
        type: 'text',
        saveIn: 'invoice'
      },
      {
        id: 'client_address',
        title: 'Client Address',
        default: '',
        type: 'textarea',
        saveIn: 'invoice'
      }
    ]
  },
  {
    title: 'Date',
    settings: [
      {
        id: 'issue_date',
        title: 'Issue Date',
        default: '',
        type: 'date',
        saveIn: 'invoice'
      },
      {
        id: 'due_date',
        title: 'Due Date',
        default: '',
        type: 'date',
        saveIn: 'invoice'
      }
    ]
  }
];