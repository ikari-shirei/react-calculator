import './App.scss'
import { useState } from 'react'

function App() {
  const [displayBefore, setDisplayBefore] = useState('')
  const [display, setDisplay] = useState('0')
  const operators = ['+', '-', '*', '/', '%', '.']

  const handleNumberClick = (e) => {
    const numberAsText = e.target.textContent
    if (display === 0 || display === '0' || display === 'Infinity') {
      setDisplay(numberAsText)
    } else {
      setDisplay(display.concat(numberAsText))
    }
  }

  const handleOperatorClick = (e) => {
    const operator = e.target.textContent
    if (display === 0 || display === '0' || display === 'Infinity') {
      setDisplay('0')
    } else {
      setDisplay(display.concat(operator))
    }
  }

  const handleClearButton = () => {
    setDisplayBefore('')
    setDisplay('0')
  }

  let newDisplay = display.slice()

  // control if last char of equation is operator or not
  const controlLastChar = () => {
    const lastCharOfResult = newDisplay.substring(newDisplay.length - 1)
    let excludeLastCharOfResult = newDisplay.substring(0, newDisplay.length - 1)
    if (operators.includes(lastCharOfResult)) {
      newDisplay = String(excludeLastCharOfResult)
      controlLastChar()
    }
  }

  const handlePositiveNegativeButton = () => {
    controlLastChar()

    if (display !== 'Infinity') {
      if (display && display > 0) {
        const newDisplay = display * -1
        setDisplay(String(newDisplay))
      } else {
        const newDisplay = Math.abs(display)
        setDisplay(String(newDisplay))
      }
    }
  }

  const handleDecimalButton = () => {
    controlLastChar()

    if (display !== 0 && display !== '0' && display !== 'Infinity') {
      setDisplay(display.concat('.'))
    }
  }

  const checkIfDecimal = (result) => {
    return result.indexOf('.') !== -1
  }

  const handleEqualButton = () => {
    controlLastChar()

    let result = eval(newDisplay)
    let resultAsText = String(result)

    // Fix the number if it is decimal
    /* resultAsText = checkIfDecimal(resultAsText)
      ? String(result.toFixed(2))
      : String(result) */

    setDisplayBefore(resultAsText)
    setDisplay(resultAsText)
  }

  return (
    <div className="app">
      <div className="calculator-container">
        <div className="calculator-top">
          <div id="display-before">{displayBefore}</div>
          <div id="display">{display}</div>
        </div>
        <div className="calculator-bottom">
          <div className="row">
            <div id="clear" className="colorless" onClick={handleClearButton}>
              C
            </div>
            <div
              id="positive-negative"
              className="colorless"
              onClick={handlePositiveNegativeButton}
            >
              +/-
            </div>
            <div id="mod" className="colorless" onClick={handleOperatorClick}>
              %
            </div>
            <div id="divide" className="color" onClick={handleOperatorClick}>
              /
            </div>
          </div>
          <div className="row">
            <div
              id="seven"
              className="colorless"
              onClick={(e) => handleNumberClick(e)}
            >
              7
            </div>
            <div
              id="eight"
              className="colorless"
              onClick={(e) => handleNumberClick(e)}
            >
              8
            </div>
            <div
              id="nine"
              className="colorless"
              onClick={(e) => handleNumberClick(e)}
            >
              9
            </div>
            <div id="multiply" className="color" onClick={handleOperatorClick}>
              *
            </div>
          </div>
          <div className="row">
            <div
              id="four"
              className="colorless"
              onClick={(e) => handleNumberClick(e)}
            >
              4
            </div>
            <div
              id="five"
              className="colorless"
              onClick={(e) => handleNumberClick(e)}
            >
              5
            </div>
            <div
              id="six"
              className="colorless"
              onClick={(e) => handleNumberClick(e)}
            >
              6
            </div>
            <div id="subtract" className="color" onClick={handleOperatorClick}>
              -
            </div>
          </div>
          <div className="row">
            <div
              id="one"
              className="colorless"
              onClick={(e) => handleNumberClick(e)}
            >
              1
            </div>
            <div
              id="two"
              className="colorless"
              onClick={(e) => handleNumberClick(e)}
            >
              2
            </div>
            <div
              id="three"
              className="colorless"
              onClick={(e) => handleNumberClick(e)}
            >
              3
            </div>
            <div id="add" className="color" onClick={handleOperatorClick}>
              +
            </div>
          </div>
          <div className="row-bottom">
            <div
              id="zero"
              className="colorless"
              onClick={(e) => handleNumberClick(e)}
            >
              0
            </div>
            <div
              id="decimal"
              className="colorless"
              onClick={handleDecimalButton}
            >
              .
            </div>
            <div id="equals" className="color" onClick={handleEqualButton}>
              =
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
