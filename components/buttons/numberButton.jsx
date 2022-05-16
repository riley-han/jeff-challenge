import React from "react"
import styles from "../../styles/numberButton.module.css"

const NumberButton = ({ value }) => {
  return (
    <button className={styles.numberButton}>{value}</button>
  )
}

export default NumberButton
