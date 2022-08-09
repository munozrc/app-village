import { useParams } from 'react-router-dom'
import { SearchField } from '../components'

import data from '../data.json'
import { DownloadIcon, PackageIcon } from '../icons'

import styles from '../styles/apps.module.css'

export const Apps = () => {
  const { category } = useParams()
  return (
    <main className={styles.wrapper}>
      <section className={styles.container}>
        <header className={styles.title}>
          <h2>Todas las Aplicaciones</h2>
          <p>Busqueda por categoria <strong>{category}</strong></p>
        </header>
        <SearchField onSubmit={() => {}}/>
      </section>
      <section className={styles.container}>
        <ul className={styles.results}>
          {data.desktop.map((app) => (
            <li key={app.icon}>
              <header>
                <img src={app.icon}/>
                <h4>{app.name}</h4>
              </header>
              <p>{app.description}</p>
              <footer>
                <button>
                  <PackageIcon size={24}/>
                  {app.versions[0].name}
                </button>
                <button>
                  <DownloadIcon size={24}/>
                  {`Descargar (${app.versions[0].extension})`}
                </button>
              </footer>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}