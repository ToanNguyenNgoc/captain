import { useIsExpired } from '@/hooks'
import { Button, useMediaQuery } from '@mui/material'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import style from './style.module.css'
import { COUNT_DOWN } from '@/constants'
import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from '@/components/UI/languageSwitcher'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const IS_MB = useMediaQuery('(max-width:1023px)')
  const isExpired = useIsExpired(COUNT_DOWN)
  const { t } = useTranslation()

  const handleActiveHambuger = useCallback(() => {
    document.body.classList.toggle(style.body_active)
  }, [])

  const handleRemoveHambuger = useCallback(() => {
    document.body.classList.remove(style.body_active)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 66) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      className={`${style.header} ${style.container_fluid} ${isScrolled ? style.scrolled : ''}`}
      role="banner"
    >
      <div className={style.header_left}>
        <button
          onClick={handleActiveHambuger}
          className={style.hamburger}
          id={style.hamburger}
          aria-label="Toggle navigation"
        >
          <span className={style.line}></span>
          <span className={style.line}></span>
          <span className={style.line}></span>
        </button>
        <Link href="/" className={style.header_logo} aria-label="Homepage">
          Sell Tickets
        </Link>
      </div>
      <HeaderNav handleRemoveHambuger={handleRemoveHambuger} />
      <div className={style.header_right}>
        <LanguageSwitcher />
        <Link style={isExpired ? { pointerEvents: 'none' } : {}} href={'#buy'}>
          <Button
            size={IS_MB ? 'small' : 'large'}
            variant="contained"
            color="secondary"
            disabled={isExpired}
          >
            {isExpired ? t('expired') : t('buyNow')}
          </Button>
        </Link>
      </div>
    </div>
  )
}

interface IProps {
  handleRemoveHambuger: () => void
}

const HeaderNav = (props: IProps) => {
  const { t } = useTranslation()
  const { handleRemoveHambuger } = props

  return (
    <nav className={style.nav} role="navigation">
      <ul className={style.nav_ul}>
        <li onClick={handleRemoveHambuger} className={style.nav_li}>
          <Link href={'#show'}>{t('show')}</Link>
        </li>
        <li onClick={handleRemoveHambuger} className={style.nav_li}>
          <Link href="#artist">{t('artist')}</Link>
        </li>
        <li onClick={handleRemoveHambuger} className={style.nav_li}>
          <Link href="#buy">{t('buyTicket')}</Link>
        </li>
        <li onClick={handleRemoveHambuger} className={style.nav_li}>
          <Link href="#location">{t('location')}</Link>
        </li>
        <li onClick={handleRemoveHambuger} className={style.nav_li}>
          <Link href="#timeline">{t('timeline')}</Link>
        </li>
      </ul>
    </nav>
  )
}
