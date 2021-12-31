import { FC, FormEvent } from 'react'
import SearchIcon from '../../assets/SearchIcon'
import ListCards from '../../components/ListCards'

import programs from '../../data/programs.json'

import './styles.css'

const AllPrograms: FC<{}> = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
  }

  return (
    <div className="all-programs">
      <form className="all-programs__bar" onSubmit={handleSubmit}>
        <input className="all-programs__input" placeholder="Buscar..." />
        <button className="all-programs__button">
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
