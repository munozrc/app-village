import { Link } from 'react-router-dom'
import SearchField from '../components/search-field'

import styles from '../styles/home.module.css'

export const Home = () => {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <section className={styles.navbar}>
            <h1 className={styles.branding}>
              <Link to="/">AppVillage</Link>
            </h1>
            <nav className={styles.navigation}>
              <Link to="/desktop">Desktop</Link>
              <Link to="/android">Android</Link>
              <Link to="/drivers">Drivers</Link>
            </nav>
          </section>
          <section className={styles.wrapperHero}>
            <div className={styles.hero}>
              <h2>La fuente de Internet de Software gratuito.</h2>
              <p>Recopilación de enlaces directos a programas, drivers y aplicaciones móviles.</p>
            </div>
            <div className={styles.center}>
              <SearchField onSubmit={() => {}}/>
            </div>
          </section>
        </div>
      </header>
      <section className={styles.content}>
        <div className={styles.wrapper}></div>
      </section>
    </main>
  )
}