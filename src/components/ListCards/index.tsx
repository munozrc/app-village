import { FC } from 'react'
import Card, { CardProps } from './components/Card'

import styles from './styles.module.css'

interface ReturnType {
  Card: FC<CardProps>
}

const ListCards: FC<{}> & ReturnType = ({ children }) => {
  return (
    <div className={styles.listCardsWrapper}>
      {children}
    </div>
  )
}

ListCards.Card = Card

export default ListCards
