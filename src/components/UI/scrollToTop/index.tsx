// components/ScrollToTop.js
import { useEffect, useState } from 'react'
import styles from './style.module.css'
import { FaArrowUp } from 'react-icons/fa'
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div className={styles.scroll_to_top}>
      {isVisible && (
        <button onClick={scrollToTop} className={styles.scroll_to_top_btn}>
          <FaArrowUp color="var(--primary-cl)" />
        </button>
      )}
    </div>
  )
}

export default ScrollToTop
