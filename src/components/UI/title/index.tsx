import React from 'react'
import classNames from 'classnames'
import styles from './style.module.css'

interface IProps {
  title: string
  description?: string
  position?: Position
}

type Position = 'left' | 'center' | 'right'

export function Title(props: IProps) {
  const { title, position = 'center', description } = props
  return (
    <div
      className={classNames({
        [styles.titleStart]: position === 'left',
        [styles.titleCenter]: position === 'center',
        [styles.titleEnd]: position === 'right',
      })}
    >
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}
