import { FormEvent } from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom'

import { SearchIcon } from '../../../components/Icons'

import styles from './SearchForm.module.css'

export const SearchForm = () => {
  const navigate = useNavigate()

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const searchValue = formData.get('search') as string

    navigate({
      pathname: '/programs',
      search: `?${createSearchParams({
        search_query: searchValue
      })}`
    })
  }

  return (
    <form className={styles.searchbar} onSubmit={handleSubmit}>
      <input className={styles.input} placeholder="Buscar..." type="text" name="search" />
      <button className={styles.btn}>
        <SearchIcon />
      </button>
    </form>
  )
}
