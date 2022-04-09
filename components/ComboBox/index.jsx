import styles from "./styles.module.css"

export const ComboBox = ({ currentValue, name, values, changeValue }) => {
  const handleOnChangeValue = (event) => {
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
