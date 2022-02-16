import { SearchIcon } from '../../../components/Icons'

import styles from './Searchbar.module.css'

export const Searchbar = () => {
  return (
    <form className={styles.searchbar} onSubmit={() => {}}>
      <input className={styles.input} placeholder="Buscar..." />
      <button className={styles.btn}>
        <SearchIcon />
      </button>
    </form>
  )
}
