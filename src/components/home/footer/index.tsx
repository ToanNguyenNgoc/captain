import React from 'react'
import style from './style.module.css'

export function Footer() {
  return (
    <div className={`${style.footer} ${style.container_fluid}`}>
      <p className={style.footer_text}>Captian Boy</p>
    </div>
  )
}
