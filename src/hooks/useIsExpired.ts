export const useIsExpired = (COUNT_DOWN: string) => {
  const targetDate = new Date(COUNT_DOWN)
  const now = new Date()
  const difference = targetDate.getTime() - now.getTime()
  const isExpired = difference < 0
  return isExpired
}
