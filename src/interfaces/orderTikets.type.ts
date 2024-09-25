export interface ITicket {
  id: number
  title: string
  content: string
  status: boolean
  date_start: string
  date_end: string
  price: number
  price_sale: number
  note: string
  address: string
  deleted_at: string | null
  created_at: string
  updated_at: string
}

export interface IProductable {
  id: number
  quantity: number
  base_price: number
  ticket: ITicket
}

export interface IOrderTikets {
  id: number
  tran_uid: string
  fullname: string
  date_of_birth: string // ISO date string
  email: string
  facebook: string
  telephone: string
  note: string
  status: string // "PENDING" | "COMPLETED" | ...
  amount: number
  check_in: boolean
  deleted_at: string | null
  created_at: string
  updated_at: string
  productable: IProductable[]
}
