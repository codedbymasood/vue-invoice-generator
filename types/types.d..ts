interface User {
  id: string
  email: string
}

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
  client_address: string
  client_email: string
  title: string
  amount: number
  tax_percentage: number
  items: InvoiceItem[]
  status: 'draft' | 'sent'
  issue_date: string
  due_date: string
}

interface Setting {
  id: string
  title: string
  default: string
  type: 'text' | 'textarea' | 'number' | 'select' | 'date' | 'items'
  mod?: 'email' | 'number'
  options?: object
}

type Currency = '₹';

interface Company {
  id?: number
  user_id?: string
  company_name?: string
  company_address?: string
  company_website?: string
  company_email?: string
  company_phone?: string
}
