import { useRouter } from "next/router"

import styles from '../styles/Home.module.css'

export default function Header() {
  const router = useRouter()
  const { locale, pathname, asPath, query } = router


  function handleClickChangeLanguage(lang: string) {
    router.push({ pathname, query }, asPath, { locale: lang })
  }

  return (
    <div className={styles.grid}>
      <div className={`btn ${locale === 'th' && 'active'}`} onClick={() => handleClickChangeLanguage('th')}>TH</div>
      <div className={`btn ${locale === 'en' && 'active'}`} onClick={() => handleClickChangeLanguage('en')}>EN</div>
    </div>
  )
}