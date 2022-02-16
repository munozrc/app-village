import { Link } from 'react-router-dom'

import { MenuIcon } from '../../components/Icons'
import useToggle from '../../hooks/useToggle'

import styles from './Header.module.css'

export const Header = () => {
  const [hidden, setHidden] = useToggle(true)
  return (
    <header className={styles.wrapper}>
      <Link to="/" className={styles.logo}>
        <h1>SOFTLINK</h1>
      </Link>
      <nav className={`${styles.navWrapper} ${hidden ? styles.hidden : ''}`}>
        <ul className={styles.navList}>
          <li className={styles.navItem}><Link to="/programs">Programas</Link></li>
          <li className={styles.navItem}><Link to="/files">Archivos</Link></li>
        </ul>
      </nav>
      <button
        className={styles.navToggle}
        onClick={setHidden}
      >
        <MenuIcon />
      </button>
    </header>
  )
}
