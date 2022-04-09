import Link from "next/link"

import styles from "./Layout.module.css"

export const SectionLayout = ({ description = "", href, title, children }) => {
  return (
    <section className={styles.section__layout}>
      <header className={styles.section__header}>
        <div className={styles.section__info}>
          <h3 className={styles.section__title}>{title}</h3>
          <Link href={href}>
            <a className={styles.section__link}>Ver Todos</a>
          </Link>
        </div>
        <p className={styles.section__description}>{description}</p>
      </header>
      {children}
    </section>
  )
}
