import { FC } from 'react'
import { Link } from 'react-router-dom'
import ListCards from '../../components/ListCards'
import programs from '../../data/programs.json'

import './styles.css'

const Home: FC<{}> = () => {
  return (
    <div className="home">
      <section className="home__section">
        <header className="home__section-header">
          <div className="home__section-title">
            <h3 className="home__section-title-text">Más Populares</h3>
            <Link to="/programs" className="home__section-link">Ver Todos</Link>
          </div>
          <p className="home__section-description">
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
