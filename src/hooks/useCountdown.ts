import { useState, useEffect, useMemo } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const calculateTimeLeft = (targetDate: Date): TimeLeft => {
  const now = new Date()
  const difference = targetDate.getTime() - now.getTime()

  let timeLeft: TimeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  }

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    }
  }

  return timeLeft
}

export const useCountdown = (targetDate: Date) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(
    calculateTimeLeft(targetDate)
  )
  const [isExpired, setIsExpired] = useState(false)

  useEffect(() => {
    if (isExpired) return

    const timer = setTimeout(() => {
      const newTimeLeft = calculateTimeLeft(targetDate)
      setTimeLeft(newTimeLeft)
      if (
        newTimeLeft.days === 0 &&
        newTimeLeft.hours === 0 &&
        newTimeLeft.minutes === 0 &&
        newTimeLeft.seconds === 0
      ) {
        setIsExpired(true)
      }
    }, 1000)

    return () => clearTimeout(timer)
  }, [timeLeft, targetDate, isExpired])

  return useMemo(() => ({ timeLeft, isExpired }), [timeLeft, isExpired])
}
