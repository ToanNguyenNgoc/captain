import { Container } from '@mui/material'
import React, { useMemo, useEffect, useState } from 'react'
import style from './style.module.css'
import classNames from 'classnames'
import { COUNT_DOWN } from '@/constants/varible'
import { MdOutlineAccessTimeFilled } from 'react-icons/md'
import { useCountdown } from '@/hooks/useCountdown'

const timelineData = [
  {
    title: 'Lorem ipsum dolor sit amet.',
    subtitle: 'Ho Chi Minh city',
    calendar: '19:30',
    position: 'right',
  },
  {
    title: 'Lorem ipsum dolor sit amet.',
    subtitle: 'Ho Chi Minh city',
    calendar: '20:00',
    position: 'left',
  },
  {
    title: 'Lorem ipsum dolor sit amet.',
    subtitle: 'Ho Chi Minh city',
    calendar: '20:30',
    position: 'right',
  },
  {
    title: 'Lorem ipsum dolor sit amet.',
    subtitle: 'Ho Chi Minh city',
    calendar: '21:00',
    position: 'left',
  },
  {
    title: 'Lorem ipsum dolor sit amet.',
    subtitle: 'Ho Chi Minh city',
    calendar: '2024',
    position: 'right',
  },
]

export function Timeline() {
  const targetDate = useMemo(() => new Date(COUNT_DOWN), [])
  const { isExpired, timeLeft } = useCountdown(targetDate)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const formatDate = (date: Date): string => {
    const formattedDate = `${date.getDate().toString().padStart(2, '0')}-${(
      date.getMonth() + 1
    )
      .toString()
      .padStart(2, '0')}-${date.getFullYear().toString().padStart(2, '0')}`
    return formattedDate
  }

  const formatTime = (date: Date): string => {
    const formattedTime = `${date.getHours().toString().padStart(2, '0')}:${date
      .getMinutes()
      .toString()
      .padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`
    return formattedTime
  }

  if (!isClient) {
    return null
  }

  return (
    <section id="timeline" className={classNames('none', style.timeline)}>
      <Container>
        <h2 className={style.timeline__title}>Time Line</h2>
        <p
          className={style.timeline__desc}
        >{`Starts on ${formatDate(targetDate)} at ${formatTime(targetDate)}`}</p>
        {isExpired && (
          <p className={style.time__line__isExpired}>Đang diển ra</p>
        )}

        <div className={style.timeline__actives}>
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={classNames(
                style.timeline__active,
                style[item.position]
              )}
              aria-label={`Timeline event ${index + 1}`}
            >
              {item.position === 'right' && (
                <>
                  <div className={style.timeline__active__content}>
                    <h3 className={style.timeline__active__title}>
                      {item.title}
                    </h3>
                    <span className={style.timeline__active__subtitle}>
                      {item.subtitle}
                    </span>
                    <div className={style.timeline__active__calendar}>
                      <MdOutlineAccessTimeFilled
                        size={18}
                        color="var(--white-cl)"
                      />
                      <p>{item.calendar}</p>
                    </div>
                  </div>
                  <div>
                    <span className={style.timeline__active__rounder}></span>
                    <span className={style.timeline__active__line}></span>
                  </div>
                  <div></div>
                </>
              )}
              {item.position === 'left' && (
                <>
                  <div></div>
                  <div>
                    <span className={style.timeline__active__rounder}></span>
                    <span className={style.timeline__active__line}></span>
                  </div>
                  <div className={style.timeline__active__content}>
                    <h3 className={style.timeline__active__title}>
                      {item.title}
                    </h3>
                    <span className={style.timeline__active__subtitle}>
                      {item.subtitle}
                    </span>
                    <div className={style.timeline__active__calendar}>
                      <MdOutlineAccessTimeFilled
                        size={18}
                        color="var(--white-cl)"
                      />
                      <p>{item.calendar}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        <div className={style.timeline__list}>
          <div className={style.timeline__item}>
            <p className={classNames(style.timeline__time)}>
              {timeLeft.days.toString().padStart(2, '0')}
            </p>
            <p className={classNames(style.timeline__time__text)}>Ngày</p>
          </div>
          <div className={style.timeline__item}>
            <p className={classNames(style.timeline__time)}>
              {timeLeft.hours.toString().padStart(2, '0')}
            </p>
            <p className={classNames(style.timeline__time__text)}>Giờ</p>
          </div>
          <div className={style.timeline__item}>
            <p className={classNames(style.timeline__time)}>
              {timeLeft.minutes.toString().padStart(2, '0')}
            </p>
            <p className={classNames(style.timeline__time__text)}>Phút</p>
          </div>
          <div className={classNames(style.timeline__item)}>
            <p className={classNames(style.timeline__time)}>
              {timeLeft.seconds.toString().padStart(2, '0')}
            </p>
            <p className={classNames(style.timeline__time__text)}>Giây</p>
          </div>
        </div>
      </Container>
    </section>
  )
}
