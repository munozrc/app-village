import { useState } from "react"
import Link from "next/link"

import { MenuIcon } from "../Icons"

import styles from "./Header.module.css"

export const Header = () => {
  const [hidden, setHidden] = useState(true)
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <Link href="/">SOFTLINK</Link>
      </h1>
      <nav className={`${styles.navWrapper} ${hidden ? styles.hidden : ""}`}>
        <ul className={styles.navList}>
          <li className={styles.navItem}><Link href="/programs">Programas</Link></li>
          <li className={styles.navItem}><Link href="/posts">Posts</Link></li>
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
