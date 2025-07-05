interface InvoiceItem {
  title: string
  quantity: number
  price: number
}

interface Invoice {
  id: number
  user_id: string
  invoice_no: string
  client_name: string
  address: string
  email: string
  title: string
  amount: number
  items: InvoiceItem[]
  status: 'draft' | 'sent'
  created_at: string
  due_date: string
}

interface Setting {
  id: string
  title: string
  default: string
  type: 'text' | 'textarea' | 'number' | 'select' | 'date' | 'items'
  options ?: object
}

type Currency = '₹';

interface Company {
  id?: number
  user_id?: string
  name ?: string
  address ?: string
  website ?: string
  email ?: string
  phone ?: string
}
