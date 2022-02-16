import { ItemList } from '../components/ItemsList'
import { SearchForm } from '../components/SearchForm'
import { usePrograms } from '../hooks/usePrograms'

import styles from './ProgramsPage.module.css'

export const ProgramsPage = () => {
  const { normalizeListItems } = usePrograms()

  return (
    <div className={styles.programsPage}>
      <SearchForm />
      <ItemList items={normalizeListItems()} />
    </div>
  )
}
