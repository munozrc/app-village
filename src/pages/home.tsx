import SearchField from '../components/search-field'

import styles from '../styles/home.module.css'

export const Home = () => {
  return (
    <main className={styles.wrapper}>
      <section className={styles.container}>
        <div className={styles.hero}>
          <h2>Un pequeño lugar en Internet de Software gratuitos.</h2>
          <p>Recopilación de enlaces directos a programas, drivers y aplicaciones móviles.</p>
        </div>
        <div className={styles.search}>
          <SearchField onSubmit={() => {}}/>
        </div>
      </section>
    </main>
  )
}