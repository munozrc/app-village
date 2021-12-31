import { ChangeEvent, FC } from 'react'
import styles from './styles.module.css'

interface Props {
  name: string
  values: string[]
  currentValue: number
  changeValue: (value: number) => void
}

const ComboBox: FC<Props> = ({ name, values, currentValue, changeValue }) => {
  const handleOnChangeValue = (event: ChangeEvent<HTMLSelectElement>): void => {
    const value = parseInt(event.target.value)
    changeValue(value)
  }

  return (
    <select
      name={name}
      value={currentValue}
      onChange={handleOnChangeValue}
      className={styles.wrapper}
    >
      {values.map((valueShow, index) => (
        <option key={valueShow} value={index}>
          {valueShow}
        </option>
      ))}
    </select>
  )
}

export default ComboBox
