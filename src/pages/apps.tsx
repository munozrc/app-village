import { useParams } from 'react-router-dom'
import { SearchField } from '../components'

import data from '../data.json'

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
      <ul>
        {data.desktop.map((app) => (
          <li key={app.name}><img src={app.icon}/></li>
        ))}
      </ul>
    </main>
  )
}