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
      },
      {
        id: 'created_at',
        title: 'Created At',
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
]


// {
//   title: 'Company Settings',
//   settings: [{
//       id: 'company_name',
//       title: 'Name',
//       default: '',
//       type: 'text',
//       saveIn: 'invoice'
//     },
//     {
//       id: 'company_address',
//       title: 'Address',
//       default: '',
//       type: 'text',
//       saveIn: 'invoice'
//     },
//     {
//       id: 'company_email',
//       title: 'Email',
//       default: '',
//       type: 'text',
//       saveIn: 'invoice'
//     },
//     {
//       id: 'company_website',
//       title: 'Website',
//       default: '',
//       type: 'text',
//       saveIn: 'invoice'
//     },
//     {
//       id: 'company_phone',
//       title: 'Phone',
//       default: '',
//       type: 'text',
//       saveIn: 'invoice'
//     }
//   ]
// }