import React from 'react'
import style from './style.module.css'
import { Button, Container } from '@mui/material'
import Image from 'next/image'
import { imgs } from '@/assets/imgs'
import classNames from 'classnames'
import Link from 'next/link'
import { useCountdown } from '@/hooks'
import { COUNT_DOWN } from '@/constants'
export function Hero() {
  const targetDate = new Date(COUNT_DOWN)
  const { isExpired } = useCountdown(targetDate)

  return (
    <section style={{}} className={classNames(style.hero, 'right')}>
      <div className={style.hero__bg}></div>
      <Container style={{ zIndex: '2' }} maxWidth={'lg'}>
        <div className={style.hero__content}>
          <div className={style.hero__left}>
            {/* <h1 className={style.hero__txt}>Underdog Show Sell Tickets</h1>
            <p className={style.hero__desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique, impedit.
            </p>
            <Link href="#buy" passHref>
              <Button
                disabled={isExpired}
                size="large"
                variant="contained"
                color="secondary"
              >
                {isExpired ? 'Hết hạn đăng ký' : 'Buy now'}
              </Button>
            </Link> */}
          </div>
          {/* <div className={style.hero__img}>
            <Image
              src={imgs.heroImg}
              alt="hero_img"
              sizes="100%"
              layout="responsive"
              height={500}
              width={500}
            />
          </div> */}
        </div>
      </Container>
    </section>
  )
}
