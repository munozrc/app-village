import { Link } from 'react-router-dom'

import { usePrograms } from '../../hooks/usePrograms'
import { ItemList } from '../ItemsList'

import styles from './ProgramSection.module.css'

export const ProgramSection = () => {
  const { programSearchList } = usePrograms()
  return (
    <section className={styles.programSection}>
      <header className={styles.header}>
        <div className={styles.info}>
          <h3 className={styles.title}>Más Populares</h3>
          <Link to="/programs" className={styles.link}>Ver Todos</Link>
        </div>
        <p className={styles.description}>
          Estos son algunos de los programas más esenciales para dispositivos
          nuevos con Windows.
        </p>
      </header>
      <ItemList items={programSearchList.slice(0, 4)} />
    </section>
  )
}
