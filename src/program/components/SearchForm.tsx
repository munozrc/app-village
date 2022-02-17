import { SearchIcon } from '../../app/components/Icons'
import { usePrograms } from '../hooks/usePrograms'

import styles from './SearchForm.module.css'

export const SearchForm = () => {
  const { handleSubmitSearch } = usePrograms()

  return (
    <form className={styles.searchbar} onSubmit={handleSubmitSearch}>
      <input className={styles.input} placeholder="Buscar..." type="text" name="search" />
      <button className={styles.btn}>
        <SearchIcon />
      </button>
    </form>
  )
}
