import { Link } from 'react-router-dom'
import styles from '../styles/home.module.css'

export const Home = () => {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <section className={styles.navbar}>
            <h1 className={styles.branding}>
              <Link to="/">ToolPack</Link>
            </h1>
            <nav className={styles.navigation}>
              <Link to="/programas">Programas</Link>
              <Link to="/aplicaciones">Aplicaciones</Link>
              <Link to="/drivers">Drivers</Link>
            </nav>
          </section>
          <div className={styles.hero}>
            <h2>La fuente de Internet de Software gratuito.</h2>
            <p>Recopilación de enlaces directos a programas, drivers y aplicaciones móviles.</p>
          </div>
          <div>
            <form>
              <input type="text" placeholder="Buscar..." />
            </form>
          </div>
        </div>
      </header>
      <section className={styles.content}>
        <div className={styles.wrapper}></div>
      </section>
    </main>
  )
}