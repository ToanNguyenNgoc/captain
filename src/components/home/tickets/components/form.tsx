import { imgs } from '@/assets/imgs'
import { TextFieldCustom } from '@/components'
import { IRQOrderTikets } from '@/interfaces'
import { tiketApi } from '@/services'
import { LoadingButton } from '@mui/lab'
import { Box, Container, Dialog, Grid, useMediaQuery } from '@mui/material'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import Image from 'next/image'
import { Dispatch, SetStateAction, useCallback, useState } from 'react'
import {
  GoogleReCaptcha,
  GoogleReCaptchaProvider,
} from 'react-google-recaptcha-v3'
import { Controller, useForm } from 'react-hook-form'
import { CgClose } from 'react-icons/cg'
import { IoCopySharp } from 'react-icons/io5'
import { toast } from 'react-toastify'
import style from './style.module.css'

interface FormData {
  fullname: string
  phone: string
  email: string
  description: string
  recaptcha: string
  facebook: string
  quantity: number
  dob: string
}

const defaultValues: FormData = {
  fullname: '',
  phone: '',
  email: '',
  description: '',
  recaptcha: '',
  facebook: '',
  quantity: 1,
  dob: '',
}

interface IOrderFormProps {
  selectedTickets: number[]
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

export function OrderForm(props: IOrderFormProps) {
  const { selectedTickets, open, setOpen } = props
  const [openPayment, setOpenPayment] = useState(false)
  const IS_MB = useMediaQuery('(max-width:767px)')
  const [refreshReCaptcha, setRefreshReCaptcha] = useState<boolean>(false)
  const [captcha, setCaptcha] = useState('')
  const verifyRecaptchaCallback = useCallback((token: string) => {
    setCaptcha(token)
  }, [])
  const copyToClipboard = () => {
    navigator.clipboard.writeText('9909052000')
    toast.success('Sao chép thành công!')
  }
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>({ defaultValues: { ...defaultValues } })

  const onSubmit = async (data: FormData) => {
    console.log('submit')
    if (captcha === '') {
      setRefreshReCaptcha((r) => !r)
      return
    }

    const tickets = selectedTickets.map((id) => ({
      id,
      quantity: Number(data.quantity),
    }))
    const newData = {
      fullname: data.fullname,
      date_of_birth: data.dob,
      email: data.email,
      facebook: data.facebook,
      telephone: data.phone,
      note: data.description,
      productable: tickets,
      // recaptcha: captcha,
    }

    console.log(newData)
    mutate(newData)
  }

  const { mutate, status } = useMutation({
    mutationFn: (body: IRQOrderTikets) => tiketApi.postOrderTikets(body),
    onSuccess: async (data) => {
      if (data) {
        setOpenPayment(true)
      }
      reset()
    },
    onError: (error: AxiosError<any>) => {
      console.error('Error:', error.response?.data)
      toast.error(error?.message)
    },
  })

  return (
    <div>
      <Dialog
        className={style.tiket__dialog}
        onClose={() => setOpen(false)}
        open={open}
      >
        <GoogleReCaptchaProvider
          reCaptchaKey={process.env.NEXT_PUBLIC_KEY_CAPTCHA || ''}
          scriptProps={{
            async: true,
            defer: true,
            appendTo: 'head',
            nonce: undefined,
          }}
          container={{
            element: 'recaptcha__element',
            parameters: {
              badge: 'bottomleft',
              theme: 'light',
            },
          }}
        >
          <Container>
            <div className={style.tiket__dialog__header}>
              <p className={style.tiket__dialog__title}>Information</p>
              <CgClose
                className={style.close__dialog}
                onClick={() => setOpen(false)}
                size={28}
                color="var(--secondary-cl)"
              />
            </div>
            <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={IS_MB ? 12 : 6}>
                  <Controller
                    name="fullname"
                    control={control}
                    rules={{
                      required: 'Full Name is required',
                      minLength: {
                        value: 2,
                        message: 'Name must be at least 2 digits',
                      },
                      maxLength: {
                        value: 32,
                        message: 'Name must be less than 32 digits',
                      },
                    }}
                    render={({ field }) => (
                      <TextFieldCustom
                        {...field}
                        label="Full Name"
                        color="secondary"
                        fullWidth
                        required
                        error={!!errors.fullname}
                        helperText={
                          errors.fullname ? errors.fullname.message : ''
                        }
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={IS_MB ? 12 : 6}>
                  <Controller
                    name="phone"
                    control={control}
                    rules={{
                      required: 'Phone is required',
                      minLength: {
                        value: 10,
                        message: 'Phone number must be at least 10 digits',
                      },
                      maxLength: {
                        value: 10,
                        message: 'Phone number must be less than 10 digits',
                      },
                      pattern: {
                        value: /^(0[1-9]{1}[0-9]{8}|84[1-9]{1}[0-9]{8})$/,
                        message: 'Invalid Vietnamese phone number format',
                      },
                    }}
                    render={({ field }) => (
                      <TextFieldCustom
                        {...field}
                        label="Phone"
                        fullWidth
                        color="secondary"
                        required
                        error={!!errors.phone}
                        helperText={errors.phone ? errors.phone.message : ''}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={IS_MB ? 12 : 6}>
                  <Controller
                    name="email"
                    control={control}
                    rules={{
                      required: 'Email is required',
                      pattern: {
                        value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                        message: 'Invalid email address',
                      },
                    }}
                    render={({ field }) => (
                      <TextFieldCustom
                        color="secondary"
                        {...field}
                        label="Email"
                        fullWidth
                        required
                        error={!!errors.email}
                        helperText={errors.email ? errors.email.message : ''}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={IS_MB ? 12 : 6}>
                  <Controller
                    name="dob"
                    control={control}
                    rules={{
                      required: 'Date of Birth is required',
                    }}
                    render={({ field }) => (
                      <TextFieldCustom
                        {...field}
                        label="Date of Birth"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                        required
                        color="secondary"
                        error={!!errors.dob}
                        helperText={errors.dob ? errors.dob.message : ''}
                      />
                    )}
                  />
                </Grid>
                {/* quantity */}
                <Grid item xs={IS_MB ? 12 : 6}>
                  <Controller
                    name="quantity"
                    control={control}
                    rules={{
                      required: 'Quantity is required',
                      min: {
                        value: 1,
                        message: 'Quantity must be at least 1',
                      },
                      pattern: {
                        value: /^[0-9]+$/,
                        message: 'Quantity must be a number',
                      },
                    }}
                    render={({ field }) => (
                      <TextFieldCustom
                        color="secondary"
                        {...field}
                        label="Quantity"
                        fullWidth
                        required
                        error={!!errors.quantity}
                        helperText={
                          errors.quantity ? errors.quantity.message : ''
                        }
                        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                      />
                    )}
                  />
                </Grid>
                {/* close quantity */}
                {/* facebook */}
                <Grid item xs={IS_MB ? 12 : 6}>
                  <Controller
                    name="facebook"
                    control={control}
                    rules={{
                      pattern: {
                        value:
                          /^(https?:\/\/)?(www\.)?facebook\.com\/[A-Za-z0-9._%+-]+\/?$/,
                        message: 'Sai định dạng',
                      },
                    }}
                    render={({ field, fieldState: { error } }) => (
                      <TextFieldCustom
                        color="secondary"
                        {...field}
                        label="Facebook"
                        fullWidth
                        error={!!error}
                        helperText={error ? error.message : ''}
                      />
                    )}
                  />
                </Grid>

                {/* close facebook */}

                <Grid item xs={12}>
                  <Controller
                    name="description"
                    control={control}
                    render={({ field }) => (
                      <TextFieldCustom
                        color="secondary"
                        {...field}
                        label="Description"
                        fullWidth
                        multiline
                        rows={3}
                      />
                    )}
                  />
                </Grid>

                {/* payment method */}
                {/* <Grid item xs={12}>
                  <Controller
                    name="payment_method_id"
                    control={control}
                    rules={{ required: 'Payment method is required' }}
                    render={({ field }) => (
                      <FormControl component="fieldset">
                        <RadioGroup row {...field}>
                          <FormControlLabel
                            value={2}
                            control={<Radio color="success" />}
                            label={
                              <Image
                                src={imgs.momo}
                                alt="Momo"
                                style={{ width: 50, height: 50 }}
                              />
                            }
                            sx={{
                              border:
                                field.value == 2
                                  ? '2px solid var(--valid-color)'
                                  : '2px solid #ccc',
                              borderRadius: '4px',
                              padding: '5px',
                              margin: '5px',
                            }}
                          />
                          <FormControlLabel
                            value={1}
                            control={<Radio color="success" />}
                            label={
                              <Image
                                src={imgs.vnpay}
                                alt="Vnpay"
                                style={{ width: 50, height: 50 }}
                              />
                            }
                            sx={{
                              border:
                                field.value == 1
                                  ? '2px solid var(--valid-color)'
                                  : '2px solid #ccc',
                              borderRadius: '4px',
                              padding: '5px',
                              margin: '5px',
                            }}
                          />
                        </RadioGroup>
                      </FormControl>
                    )}
                  />
                </Grid> */}
                {/* close payment method */}
              </Grid>
              <Box sx={{ mt: 2, mb: 2 }}>
                <LoadingButton
                  loading={status === 'pending'}
                  variant="contained"
                  color="secondary"
                  fullWidth
                  size="large"
                  type="submit"
                >
                  {status === 'pending' ? 'Loading' : 'Submit'}
                </LoadingButton>
              </Box>
            </Box>
          </Container>
          <GoogleReCaptcha
            refreshReCaptcha={refreshReCaptcha}
            onVerify={verifyRecaptchaCallback}
          />
        </GoogleReCaptchaProvider>
      </Dialog>
      <Dialog onClose={() => setOpenPayment(false)} open={openPayment}>
        <div className={style.dialog__content}>
          <div className={style.tiket__dialog__header}>
            <p className={style.tiket__dialog__title}>Thông tin chuyển khoản</p>
            <CgClose
              className={style.close__dialog}
              onClick={() => setOpenPayment(false)}
              size={28}
              color="var(--secondary-cl)"
            />
          </div>
          <div className={style.payment}>
            <div className={style.payment__img}>
              <Image
                src={imgs.qrcode}
                sizes="100%"
                alt="hero_img"
                height={0}
                width={0}
              />
            </div>
            <div className={style.payment__content}>
              <p>
                Số tài khoản: <span>9909052000</span>
                <IoCopySharp onClick={copyToClipboard} color="gray" />
              </p>
              <p>
                Chủ tài khoản: <span>TRAN BAO KHANH</span>
              </p>
              <p>
                <p style={{ whiteSpace: 'nowrap' }}>Nội dung: </p>
                <span>
                  Vui lòng chuyển khoản với nội dung là họ tên và số điện thoại
                  của bạn (Trường hợp quên thì liên hệ hotline:{' '}
                  <a className={style.hotline} href="tel:+0987654321">
                    0987654321
                  </a>
                  )
                </span>
              </p>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  )
}
