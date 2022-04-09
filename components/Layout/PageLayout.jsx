import styles from "./Layout.module.css"

export const PageLayout = ({ children }) => {
  return (
    <main className={styles.page__layout}>
      {children}
    </main>
  )
}
