import { ChangeEvent, FormEvent, useRef, useState } from 'react'
import useDetectOutsideClick from '../../hooks/use-detect-outside-click'
import { ChevronIcon, CloseIcon, SearchIcon } from '../../icons'
import { SoftwareApps, SoftwareAppsType,  } from '../../types'

import styles from './styles.module.css'

interface SearchFieldProps {
  onSubmit: (query: string) => void
}

const SearchField = ({ onSubmit }: SearchFieldProps) => {
  const [query, setQuery] = useState<string>('')
  const [filter, setFilter] = useState<SoftwareAppsType>('desktop')
  const [buttonFilterRef, isFilterActive, setIsActive] = useDetectOutsideClick(false)

  const isEmptyInput = () => query.trim().length === 0 ? 'hidden' : 'visible'
  const handleClearInput = () => setQuery('')
  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const search = formData.get('search') as string
    search && onSubmit(search)
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSearch}>
        <SearchIcon color="#747474" size={17}/>
        <input 
          type="text"
          placeholder="Buscar..."
          value={query}
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
      <div className={styles.verticalDivider} />
      <div className={styles.filter}>
        <button ref={buttonFilterRef} onClick={() => setIsActive(prev => !prev)}>
          {filter}
          <ChevronIcon variant='down' size={18} color="#000000" />
        </button>
        <div
          className={styles.listItems} 
          style={{ visibility: isFilterActive ? 'visible' : 'hidden' }}
        >
          {SoftwareApps.map((item) => (
            <button 
              key={item}
              className={`${filter === item ? styles.active : ''}`}
              onClick={() => setFilter(item as SoftwareAppsType)}
            >{item}</button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SearchField
