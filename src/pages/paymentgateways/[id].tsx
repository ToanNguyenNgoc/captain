import { GetServerSideProps } from 'next'
import axios from 'axios'
import { baseURL } from '@/configs'
import styles from './style.module.css'
import Image from 'next/image'
import { imgs } from '@/assets/imgs'
import { Button, useMediaQuery } from '@mui/material'
import Link from 'next/link'
interface PaymentProps {
  initialStatus: string
  paymentId: string
}

const PaymentStatus = ({ initialStatus, paymentId }: PaymentProps) => {
  console.log(initialStatus)
  const IS_MB = useMediaQuery('(max-width:1023px)')
  return (
    <div className={styles.paymentStatus}>
      {initialStatus === 'PAID' ? (
        <>
          <Image alt="paid" width={250} height={250} src={imgs.success} />
          <h4>Payment ID: {paymentId}</h4>
          <h2>Thanh toán thành công</h2>
          <h3>Vui lòng kiểm tra Email để xem thông tin vé!</h3>
          <Link href={'/'}>
            <Button
              size={IS_MB ? 'small' : 'large'}
              variant="contained"
              color="secondary"
            >
              {' '}
              Về Trang chủ
            </Button>
          </Link>
        </>
      ) : initialStatus === 'PENDING' ? (
        <>
          <Image alt="paid" width={250} height={250} src={imgs.pending} />
          <h4>Payment ID: {paymentId}</h4>
          <h2>Đang chờ thanh toán</h2>
          <h3>Vui lòng hoàn thành bước thanh toán!</h3>
          <Link href={'/'}>
            <Button
              size={IS_MB ? 'small' : 'large'}
              variant="contained"
              color="secondary"
            >
              {' '}
              Về Trang chủ
            </Button>
          </Link>
        </>
      ) : (
        <>
          <Image alt="paid" width={250} height={250} src={imgs.cancel} />
          <h4>Payment ID: {paymentId}</h4>
          <h2>Thanh toán bị hủy</h2>
          <h3>
            Bạn đã hủy thanh toán hoặc quá hạn thanh toán, vui lòng đặt lại vé!
          </h3>
          <Link href={'/'}>
            <Button
              size={IS_MB ? 'small' : 'large'}
              variant="contained"
              color="secondary"
            >
              Về Trang chủ
            </Button>
          </Link>
        </>
      )}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as { id: string }
  // console.log(id)
  if (!id) {
    return {
      notFound: true,
    }
  }

  let initialStatus = 'PENDING'

  try {
    const response = await axios.get(`${baseURL}/api/paymentgateways/${id}`)
    if (response.data && response.data.status) {
      initialStatus = response.data.context.status
    }
    // console.log(response)
  } catch (error) {
    console.error('Error fetching payment status:', error)
  }

  return {
    props: {
      initialStatus,
      paymentId: id,
    },
  }
}

export default PaymentStatus
