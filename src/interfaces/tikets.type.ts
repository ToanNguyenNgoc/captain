export interface ITicket {
  id: number
  title: string
  content: string
  status: boolean
  date_start: string
  date_end: string
  price: number
  price_sale: number | null
  note: string | null
  address: string | null
  created_at: string
  updated_at: string
  deleted_at: string | null
  image_url: string | null
}
