import { FC } from 'react'
import { Link } from 'react-router-dom'

import styles from '../styles.module.css'

import ArrowSVG from './ArrowSVG'

export interface CardProps {
  image: string
  title: string
  href: string
}

const Card: FC<CardProps> = ({ image, title, href }) => {
  return (
    <Link to={href} className={styles.cardWrapper}>
      <img className={styles.cardImage} src={image} alt={title} />
      <h3 className={styles.cardTitle}>{title}</h3>
      <span className={styles.cardInfo}>
        <ArrowSVG />Más Información<ArrowSVG />
      </span>
    </Link>
  )
}

export default Card
