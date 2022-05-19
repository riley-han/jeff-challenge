import React, { useState } from "react"
import NumberButton from "../components/buttons/numberButton.jsx"
import TotalDisplay from "../components/display/totalDisplay.jsx"
import styles from "../styles/calculator.module.css"
import composeUrl from "../utils/composeUrl.js"

// setting state of numbers being calculated
// if num1 is not null setNum1(number clicked) else setNum2(number clicked)

const Calculator = () => {
  const [number1, setNumber1] = useState(null)
  const [number2, setNumber2] = useState(null)

  const getNumbers = () => {
    if (number1 === null) {
      setNumber1((number1) => numberClicked)
    } else {
      setNumber2((number2) => numberClicked)
    }
  }
  const fnMethod = "add/sum/"
  console.log(composeUrl(fnMethod, 2, 5))
  const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <>
      <div>
        <TotalDisplay result={0} />
        <div className={styles.calculatorBody}>
          {values.map((value) => {
            return (
              <NumberButton
                value={value}
                key={value}
              ></NumberButton>
            )
          })}
          <button className="text-white">=</button>
        </div>
        <div className="flex flex-col">
          <button className={styles.functionButton}>
            -
          </button>
          <button className={styles.functionButton}>
            +
          </button>
          <button className={styles.functionButton}>
            /
          </button>
          <button className={styles.functionButton}>
            *
          </button>
        </div>
      </div>
    </>
  )
}

export default Calculator
