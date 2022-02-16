import { ReactNode } from 'react'

import { Header } from './Header'
import styles from './PageLayout.module.css'

interface PageLayoutProps {
  children: ReactNode
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <main className={styles.container}>
      <Header />
      {children}
    </main>
  )
}
