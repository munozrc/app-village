import { Link } from "react-router-dom";
import ArrowIcon from "../../assets/ArrowIcon";
import Programs from "../../data/programs.json";
import { program } from "../../types";
import "./styles.css";

function Home() {
  const list: program[] = Programs.slice(0, 6);
  return (
    <div className="home">
      <section className="home__section">
        <header className="home__section-header">
          <div className="home__section-title">
            <h3 className="home__section-title-text">Más Populares</h3>
            <Link to="/popular-programs" className="home__section-link">
              Ver Todos
            </Link>
          </div>
          <p className="home__section-description">
            Estos son algunos de los programas más esenciales para dispositivos
            nuevos con Windows.
          </p>
        </header>
        <div className="home__section-content">
          {list.map((ele) => (
            <Link
              key={ele.id}
              to={`/programs/${ele.id}`}
              className="home__section-item"
            >
              <img src={ele.icon} alt={ele.name} />
              <h3>{ele.name}</h3>
              <span>
                <ArrowIcon />
                Más Información
                <ArrowIcon />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
