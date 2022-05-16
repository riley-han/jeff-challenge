import Head from "next/head"
import Image from "next/image"
import NumberButton from "../components/buttons/numberButton.jsx"
import TotalDisplay from "../components/display/totalDisplay.jsx"
import styles from "../styles/calculator.module.css"

const Calculator = () => {
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
      </div>
    </>
  )
}

export default Calculator
