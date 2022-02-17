import { Link } from 'react-router-dom'

import { ArrowIcon } from '../../app/components/Icons'

import styles from './Item.module.css'

interface ItemProps {
  href: string
  icon: string
  name: string
}

export const Item = ({ href, icon, name }: ItemProps) => {
  return (
    <Link to={href} className={styles.itemContainer}>
      <img className={styles.icon} src={icon} alt={name} />
      <h3 className={styles.title}>{name}</h3>
      <span className={styles.moreInfo}>
        <ArrowIcon />
          Más Información
        <ArrowIcon />
      </span>
    </Link>
  )
}
