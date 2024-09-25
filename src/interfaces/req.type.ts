interface Ticket {
  id: number
  quantity: number
}

export interface IRQOrderTikets {
  fullname: string
  date_of_birth: string
  email: string
  facebook: string
  telephone: string
  note: string
  // recaptcha: string
  productable: Ticket[]
}
