import { ChangeEvent, FormEvent, useState } from "react"
import { CloseIcon, SearchIcon } from "../../icons"

import styles from './styles.module.css'

interface SearchInputProps {
  onSubmit: (value: string) => void
}

const SearchInput = ({ onSubmit }: SearchInputProps) => {
  const [value, setValue] = useState<string>('')

  const isEmptyInput = () => value.trim().length === 0 ? 'hidden' : 'visible'
  const handleClearInput = () => setValue('')
  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const search = formData.get('search') as string
    search && onSubmit(search)
  }

  return (
    <form className={styles.search} onSubmit={handleSearch}>
      <SearchIcon color="#747474" size={17}/>
      <input 
        type="text"
        name="search"
        placeholder="Buscar..."
        value={value}
        onChange={handleChangeInput}
      />
      <button 
        type="button" 
        onClick={handleClearInput}
        style={{ visibility: isEmptyInput()}}
      >
        <CloseIcon color="#FFFFFF" size={12}/>
      </button>
    </form>
  )
}

export default SearchInput
