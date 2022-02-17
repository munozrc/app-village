import { ItemList, SearchForm } from '../../program/components'
import { usePrograms } from '../../program/hooks'

import styles from './ProgramsPage.module.css'

export const ProgramsPage = () => {
  const { programSearchList } = usePrograms()
  return (
    <div className={styles.container}>
      <SearchForm />
      <ItemList items={programSearchList} />
    </div>
  )
}
