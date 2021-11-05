import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'

const Header: FC<{}> = () => {
  return (
    <header className={styles.wrapper}>
      <Link to='/' className={styles.logo}>
        <h1>SOFTLINK</h1>
      </Link>
    </header>
  )
}

export default Header
