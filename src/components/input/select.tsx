import useDetectOutsideClick from '../../hooks/use-detect-outside-click'
import { ChevronIcon } from '../../icons'

import styles from './styles.module.css'

interface SelectInputProps<T> {
  value: T
  options: readonly T[]
  setValue: (value: T) => void
}

const SelectInput = <T extends string> ({ value, options, setValue } : SelectInputProps<T>) => {
  const [buttonRef, isFilterActive, setIsActive] = useDetectOutsideClick(false)
  return (
    <div className={styles.selectWrapper}>
      <button ref={buttonRef} onClick={() => setIsActive(prev => !prev)}>
        {value}
        <ChevronIcon variant='down' size={18} color="#000000" />
      </button>
      <div
        className={styles.selectOptions} 
        style={{ visibility: isFilterActive ? 'visible' : 'hidden' }}
      >
        {options.map((option) => (
          <button 
            key={option}
            className={`${value === option ? styles.active : ''}`}
            onClick={() => setValue(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}

export default SelectInput