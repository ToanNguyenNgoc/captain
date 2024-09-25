interface ExtraData {
  payUrl: string
}

interface PaymentGatewayHistory {
  id: number
  event_name: string
  payment_gateway_id: number
  message: string
}

export interface IPaymentGateway {
  id: number
  status: string
  amount: number
  description: string
  transaction_uuid: string
  extra_data: ExtraData
  payment_method_id: number
  paymentable_type: string
  paymentable_id: number
  created_at: string
  updated_at: string
  deleted_at: string | null
  payment_gateway_histories: PaymentGatewayHistory[]
}
