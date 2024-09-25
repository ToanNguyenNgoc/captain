import React from 'react'
import { useTranslation } from 'react-i18next'
import { imgs } from '../../../assets/imgs'
import Image from 'next/image'
import styles from './style.module.css'

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    localStorage.setItem('language', lng)
  }

  return (
    <div className={styles.languageSwitcher}>
      <input
        type="radio"
        id="vi"
        name="language"
        value="vi"
        onChange={() => changeLanguage('vi')}
        checked={i18n.language === 'vi'}
        className={styles.languageInput}
      />
      <label htmlFor="vi" className={styles.flag}>
        <Image src={imgs.viFlag} alt="Tiếng Việt" />
      </label>
      <input
        type="radio"
        id="en"
        name="language"
        value="en"
        onChange={() => changeLanguage('en')}
        checked={i18n.language === 'en'}
        className={styles.languageInput}
      />
      <label htmlFor="en" className={styles.flag}>
        <Image src={imgs.usFlag} alt="English" />
      </label>
    </div>
  )
}
