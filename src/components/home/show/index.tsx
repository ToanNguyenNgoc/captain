import { Title } from '@/components'
import { Container } from '@mui/material'
import React from 'react'
import style from './style.module.css'
import { BiBoltCircle } from 'react-icons/bi'

export function Show() {
  const data = [
    {
      id: 1,
      name: 'Lorem ipsum dolor sit amet.',
      img: <BiBoltCircle size={54} color="var(--secondary-cl)" />,
      desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, distinctio.',
    },
    {
      id: 2,
      name: 'Lorem ipsum dolor sit amet.',
      img: <BiBoltCircle size={54} color="var(--secondary-cl)" />,
      desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, distinctio.',
    },
    {
      id: 3,
      name: 'Lorem ipsum dolor sit amet.',
      img: <BiBoltCircle size={54} color="var(--secondary-cl)" />,
      desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, distinctio.',
    },
    {
      id: 4,
      name: 'Lorem ipsum dolor sit amet.',
      img: <BiBoltCircle size={54} color="var(--secondary-cl)" />,
      desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, distinctio.',
    },
    {
      id: 5,
      name: 'Lorem ipsum dolor sit amet.',
      img: <BiBoltCircle size={54} color="var(--secondary-cl)" />,
      desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, distinctio.',
    },
    {
      id: 6,
      name: 'Lorem ipsum dolor sit amet.',
      img: <BiBoltCircle size={54} color="var(--secondary-cl)" />,
      desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, distinctio.',
    },
  ]
  return (
    <section id="show" className="left">
      <Container>
        <Title
          title="Show"
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
