import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

import styles from './SectionLayout.module.css'

interface SectionLayoutProps {
  description: string
  href: string
  title: string
  children: ReactNode
}

export const SectionLayout = ({ description, href, title, children }: SectionLayoutProps) => {
  return (
    <section className={styles.sectionLayout}>
      <header className={styles.header}>
        <div className={styles.info}>
          <h3 className={styles.title}>{title}</h3>
          <Link to={href} className={styles.link}>Ver Todos</Link>
        </div>
        <p className={styles.description}>{description}</p>
      </header>
      {children}
    </section>
  )
}
