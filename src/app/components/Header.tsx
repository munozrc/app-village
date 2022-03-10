import { useState } from 'react'
import { Link } from 'react-router-dom'

import { MenuIcon } from './Icons'
import styles from './Header.module.css'

export const Header = () => {
  const [hidden, setHidden] = useState<boolean>(true)
  return (
    <header className={styles.wrapper}>
      <Link to="/" className={styles.logo}>
        <h1>SOFTLINK</h1>
      </Link>
      <nav className={`${styles.navWrapper} ${hidden ? styles.hidden : ''}`}>
        <ul className={styles.navList}>
          <li className={styles.navItem}><Link to="/programs">Programas</Link></li>
          <li className={styles.navItem}><Link to="/posts">Posts</Link></li>
        </ul>
      </nav>
      <button
        className={styles.navToggle}
        onClick={() => setHidden(prev => !prev)}
      >
        <MenuIcon />
      </button>
    </header>
  )
}
