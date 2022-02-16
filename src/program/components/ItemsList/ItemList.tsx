import { Item } from './Item'
import styles from './ItemList.module.css'

interface ItemElement {
  id: number,
  icon: string,
  name: string
}

interface ItemListProps {
  items: ItemElement[]
}

export const ItemList = ({ items } : ItemListProps) => {
  return (
    <div className={styles.itemListContainer}>
      {items.map(({ id, icon, name }) => (
        <Item
          key={id}
          href={`/programs/${id}`}
          icon={icon}
          name={name}
        />
      ))}
    </div>
  )
}
