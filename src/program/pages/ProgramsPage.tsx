import { SearchIcon } from '../../components/Icons'
import { ItemList } from '../components/ItemsList'
import { usePrograms } from '../hooks/usePrograms'

import styles from './ProgramsPage.module.css'

export const ProgramsPage = () => {
  const { normalizeListItems } = usePrograms()

  return (
    <div className={styles.programsPage}>
      <form className={styles.bar} onSubmit={() => {}}>
        <input className={styles.inputSearch} placeholder="Buscar..." />
        <button className={styles.btnSearch}>
          <SearchIcon />
        </button>
      </form>
      <ItemList items={normalizeListItems()} />
    </div>
  )
}
