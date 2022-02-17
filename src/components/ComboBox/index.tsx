import { ChangeEvent } from 'react'

import styles from './styles.module.css'

interface ComboBoxProps {
  currentValue: number
  name: string
  values: string[]
  changeValue: (value: number) => void
}

export const ComboBox = ({ currentValue, name, values, changeValue }: ComboBoxProps) => {
  const handleOnChangeValue = (event: ChangeEvent<HTMLSelectElement>): void => {
    const value = parseInt(event.target.value)
    changeValue(value)
  }

  return (
    <select
      className={styles.wrapper}
      onChange={handleOnChangeValue}
      value={currentValue}
      name={name}
    >
      {values.map((valueShow, index) => (
        <option key={valueShow} value={index}>
          {valueShow}
        </option>
      ))}
    </select>
  )
}
