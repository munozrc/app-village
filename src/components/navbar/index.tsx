import { Link } from 'react-router-dom'
import Logo from './logo'

import styles from './styles.module.css'

export const Navbar = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <Link to="/">
          <Logo />
        </Link>
        <nav className={styles.navigation}>
          <Link to="/desktop">Desktop</Link>
          <Link to="/android">Android</Link>
          <Link to="/drivers">Drivers</Link>
        </nav>
      </div>
    </header>
  )
}