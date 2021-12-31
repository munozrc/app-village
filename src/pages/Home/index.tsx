import { FC } from 'react'
import { Link } from 'react-router-dom'
import ListCards from '../../components/ListCards'
import programs from '../../data/programs.json'

import styles from './styles.module.css'

const Home: FC<{}> = () => {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <header className={styles.sectionHeader}>
          <div className={styles.sectionTitle}>
            <h3 className={styles.sectionTitleText}>Más Populares</h3>
            <Link to="/programs" className={styles.sectionLink}>Ver Todos</Link>
          </div>
          <p className={styles.sectionDescription}>
            Estos son algunos de los programas más esenciales para dispositivos
            nuevos con Windows.
          </p>
        </header>
        <ListCards>
          {programs.slice(0, 4).map((ele) => (
            <ListCards.Card
              key={ele.id}
              title={ele.name}
              image={ele.icon}
              href={`/programs/${ele.id}`}
            />
          ))}
        </ListCards>
      </section>
    </div>
  )
}

export default Home
