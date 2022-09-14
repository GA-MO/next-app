import Footer from './Footer'
import Header from './Header'

import styles from '../styles/Home.module.css'

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className={styles.main}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}