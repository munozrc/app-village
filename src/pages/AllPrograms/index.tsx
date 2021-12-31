import { FC, FormEvent } from 'react'
import SearchIcon from '../../assets/SearchIcon'
import ListCards from '../../components/ListCards'

import programs from '../../data/programs.json'

import styles from './styles.module.css'

const AllPrograms: FC<{}> = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
  }

  return (
    <div className={styles.container}>
      <form className={styles.bar} onSubmit={handleSubmit}>
        <input className={styles.inputSearch} placeholder="Buscar..." />
        <button className={styles.btnSearch}>
          <SearchIcon />
        </button>
      </form>
      <ListCards>
        {programs.map((ele) => (
          <ListCards.Card
            key={ele.id}
            title={ele.name}
            image={ele.icon}
            href={`/programs/${ele.id}`}
          />
        ))}
      </ListCards>
    </div>
  )
}

export default AllPrograms
