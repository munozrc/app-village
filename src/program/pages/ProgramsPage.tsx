import { ItemList } from '../components/ItemsList'
import { Searchbar } from '../components/Searchbar'
import { usePrograms } from '../hooks/usePrograms'

import styles from './ProgramsPage.module.css'

export const ProgramsPage = () => {
  const { normalizeListItems } = usePrograms()

  return (
    <div className={styles.programsPage}>
      <Searchbar />
      <ItemList items={normalizeListItems()} />
    </div>
  )
}
