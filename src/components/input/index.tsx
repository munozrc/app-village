import { useState } from 'react'
import SearchInput from './search'
import SelectInput from './select'

import styles from './styles.module.css'

interface SearchFieldProps {
  onSubmit: (value: string) => void
}

interface SearchFieldSelectionProps<T> {
  options: readonly T[]
  onSubmit: (value: string, option: T) => void
}

export const SearchFieldSelection = <T extends string>({ options, onSubmit }: SearchFieldSelectionProps<T>) => {
  const [optionActive, setOptionActive] = useState<T>(options[0])
  return (
    <div className={styles.container}>
      <SearchInput onSubmit={(value) => onSubmit(value, optionActive)}/>
      <div className={styles.verticalDivider} />
      <SelectInput options={options} setValue={setOptionActive} value={optionActive} />
    </div>
  )
}

export const SearchField = ({onSubmit}: SearchFieldProps) => {
  return (
    <div className={styles.container}>
      <SearchInput onSubmit={onSubmit}/>
    </div>
  )
}