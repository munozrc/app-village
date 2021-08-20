import { Link } from "react-router-dom";
import "./styles.css";

function Home() {
  return (
    <main className="parent-container">
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
              Estos son algunos de los programas más esenciales para
              dispositivos nuevos con Windows.
            </p>
          </header>
          <div className="home__section-content"></div>
        </section>
      </div>
    </main>
  );
}

export default Home;
