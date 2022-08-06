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
          <Link to="apps">Desktop</Link>
          <Link to="apps">Android</Link>
          <Link to="apps">Drivers</Link>
        </nav>
      </div>
    </header>
  )
}