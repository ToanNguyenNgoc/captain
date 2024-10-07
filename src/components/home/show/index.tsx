import { Title } from '@/components'
import { Container } from '@mui/material'
import React from 'react'
import style from './style.module.css'
import {
  BiBasketball,
  BiSolidBong,
  BiSolidBomb,
  BiRun,
  BiSolidVideo,
  BiSolidAngry,
} from 'react-icons/bi'
import { useTranslation } from 'react-i18next'

export function Show() {
  const { t } = useTranslation()

  const data = [
    {
      id: 1,
      name: t('bannedWork'),
      img: <BiBasketball size={54} color="var(--secondary-cl)" />,
      desc: t('Oversized banners or items obstructing the view'),
    },
    {
      id: 2,
      name: t('bannedWork'),
      img: <BiSolidBong size={54} color="var(--secondary-cl)" />,
      desc: t('Alcoholic beverages and stimulants'),
    },
    {
      id: 3,
      name: t('bannedWork'),
      img: <BiSolidBomb size={54} color="var(--secondary-cl)" />,
      desc: t('Flammable substances, weapons, and dangerous items'),
    },
    {
      id: 4,
      name: t('Prohibited actions'),
      img: <BiRun size={54} color="var(--secondary-cl)" />,
      desc: t('Pushing and shoving'),
    },
    {
      id: 5,
      name: t('Prohibited actions'),
      img: <BiSolidVideo size={54} color="var(--secondary-cl)" />,
      desc: t('Photography in restricted areas'),
    },
    {
      id: 6,
      name: t('Prohibited actions'),
      img: <BiSolidAngry size={54} color="var(--secondary-cl)" />,
      desc: t('Offensive or aggressive behavior'),
    },
  ]
  return (
    <section id="show" className="left">
      <Container>
        <Title
          title={t('show')}
          position="center"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, minima."
        />
        <div className={style.show__list}>
          {data.map((item, index: number) => (
            <div key={index} className={style.show__item}>
              {item?.img}
              <p className={style.show__name}>{item?.name}</p>
              <p className={style.show__desc}>{item?.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
