import { AxiosResponse } from 'axios'

export interface AxiosCusError<D> extends AxiosResponse<D> {
  response: {
    data: D
  }
}

interface Link {
  url: string | null
  label: string
  active: boolean
}

export interface IResponseList<T> {
  status: number
  message: string | null
  context: {
    current_page: number
    data: T
    first_page_url: string
    from: number
    last_page: number
    last_page_url: string
    links: Link[]
    next_page_url: string | null
    path: string
    per_page: string
    prev_page_url: string | null
    to: number
    total: number
  }
}

export interface IResponseDetail<T> {
  context: T
  status: number
  message: string | null
  name: string | null
}
