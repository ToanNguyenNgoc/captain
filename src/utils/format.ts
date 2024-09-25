export const formatMoney = (amount: number): string => {
  const formattedAmount = amount.toLocaleString('vi-VN')
  return `${formattedAmount}đ`
}
export const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-GB') // 'en-GB' formats the date to DD-MM-YYYY
}

export const formatTime = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleTimeString('vi-VN', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })
}
