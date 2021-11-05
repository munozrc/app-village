import React, { FC, FormEvent } from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '../../assets/SearchIcon'

import programs from '../../data/programs.json'

import './styles.css'

const AllPrograms: FC<{}> = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
  }

  return (
    <div className='all-programs'>
      <form className='all-programs__bar' onSubmit={handleSubmit}>
        <input className='all-programs__input' placeholder='Buscar...' />
        <button className='all-programs__button'>
          <SearchIcon />
        </button>
      </form>
      <section className='all-programs__content'>
        {programs.map((ele) => (
          <Link key={ele.id} className='all-programs__program' to={`/programs/${ele.id}`}>
            <img className='all-programs__icon' src={ele.icon} alt={ele.name} />
            <div className='all-programs__data'>
              <h3 className='all-programs__name'>{ele.name}</h3>
            </div>
          </Link>
        ))}
      </section>
    </div>
  )
}

export default AllPrograms
