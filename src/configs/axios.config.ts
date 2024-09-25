import axios from 'axios'
import queryString from 'query-string'

export const baseURL = process.env.NEXT_PUBLIC_API_URL
export const axiosConfig = axios.create({
  baseURL: baseURL,
  withCredentials: true,
  headers: {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
  },
  paramsSerializer: {
    encode: (param: string) => {},
    serialize: (params) => queryString.stringify(params),
    indexes: false,
  },
})

axiosConfig.interceptors.request.use(async (config) => {
  // const token = localStorage.getItem("accessToken");
  // config.headers.Authorization = `${token}`;
  return config
})

axiosConfig.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    throw error
  }
)
