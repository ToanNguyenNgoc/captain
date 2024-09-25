import React from 'react'
import style from './style.module.css'
import classNames from 'classnames'
import { Container } from '@mui/material'
import { Title } from '@/components/UI/title'
import Image from 'next/image'

export function Artist() {
  const data = [
    {
      id: 1,
      position: 'Rapper & creator',
      name: 'Lorem ipsum dolor sit amet.',
      img: 'https://leverage-topaz.vercel.app/assets/images/news-7-h.jpg',
      desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, distinctio.',
    },
    {
      id: 2,
      position: 'Rapper & creator',
      name: 'Lorem ipsum dolor sit amet.',
      img: 'https://leverage-topaz.vercel.app/assets/images/news-12-h.jpg',
      desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, distinctio.',
    },
    {
      id: 3,
      position: 'Rapper & creator',
      name: 'Lorem ipsum dolor sit amet.',
      img: 'https://leverage-topaz.vercel.app/assets/images/news-11-h.jpg',
      desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, distinctio.',
    },
    {
      id: 4,
      position: 'Rapper & creator',
      name: 'Lorem ipsum dolor sit amet.',
      img: 'https://leverage-topaz.vercel.app/assets/images/news-9-h.jpg',
      desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, distinctio.',
    },
    {
      id: 5,
      position: 'Rapper & creator',
      name: 'Lorem ipsum dolor sit amet.',
      img: 'https://leverage-topaz.vercel.app/assets/images/news-8-h.jpg',
      desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, distinctio.',
    },
    {
      id: 6,
      position: 'Rapper & creator',
      name: 'Lorem ipsum dolor sit amet.',
      img: 'https://leverage-topaz.vercel.app/assets/images/news-10-h.jpg',
      desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, distinctio.',
    },
  ]
  return (
    <section id="artist" className="right">
      <Container>
        <Title
          title="Artist"
          position="center"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, minima."
        />
        <div className={style.artist__list}>
          {data.map((item, index: number) => (
            <div key={index} className={style.flip__card}>
              <div className={style.flip__card__inner}>
                <div className={style.flip__card__front}>
                  <Image
                    src={item?.img}
                    alt={`artist-${index}`}
                    width={500}
                    height={300}
                  />
                </div>
                <div className={style.flip__card__back}>
                  <p className={style.artist__name}>{item?.name}</p>
                  <p className={style.artist__position}>{item?.position}</p>
                  <p className={style.artist__desc}>{item?.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
