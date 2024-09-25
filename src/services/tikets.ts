import { baseURL } from '@/configs'
import {
  IOrderTikets,
  IPaymentGateway,
  IResponseDetail,
  IResponseList,
  IRQOrderTikets,
  ITicket,
} from '@/interfaces'
import axios from 'axios'

export const tiketApi = {
  postOrderTikets: (body: IRQOrderTikets) => {
    return axios
      .post(`${baseURL}/api/orders`, body)
      .then((res) => res.data as IResponseDetail<IOrderTikets>)
  },
  getTikets: () => {
    return axios
      .get(`${baseURL}/api/tickets`, {
        params: { limit: '15', page: '1' },
      })
      .then((res) => res.data as IResponseList<ITicket[]>)
  },
  getTransaction: (id: string) => {
    return axios
      .get(`${baseURL}/api/paymentgateways/${id}`)
      .then((res) => res.data as IResponseDetail<IPaymentGateway[]>)
  },
}
