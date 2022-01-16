import './App.scss'
import { useState, useEffect } from 'react'

function App() {
  const [displayBefore, setDisplayBefore] = useState('')
  const [display, setDisplay] = useState('0')
  const [displayClasses, setDisplayClasses] = useState({
    displayBefore: '',
    display: '',
  })
  const operators = ['+', '-', '*', '/', '%', '.']

  let newDisplay = display.slice()

  const returnLastChar = () => {
    const lastCharOfResult = newDisplay.substring(newDisplay.length - 1)

    return lastCharOfResult
  }

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
    } else if (!operators.includes(returnLastChar())) {
      setDisplay(display.concat(operator))
    }

    if (
      operator === '-' &&
      returnLastChar() !== '-' &&
      returnLastChar() !== '0'
    ) {
      setDisplay(display.concat(operator))
    }
  }

  const handleClearButton = () => {
    setDisplayBefore('')
    setDisplay('0')

    //Font size return's initial state
    checkLengthOfResult('')
  }

  // control if last char of equation is operator or not
  const controlLastChar = () => {
    const lastCharOfResult = newDisplay.substring(newDisplay.length - 1)
    let excludeLastCharOfResult = newDisplay.substring(0, newDisplay.length - 1)

    if (operators.includes(lastCharOfResult)) {
      newDisplay = String(excludeLastCharOfResult)
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
    if (
      display !== 0 &&
      display !== '0' &&
      display !== 'Infinity' &&
      returnLastChar() !== '.'
    ) {
      setDisplay(display.concat('.'))
    }
  }

  const checkIfDecimal = (result) => {
    const isDecimal = result.indexOf('.') !== -1

    return isDecimal
  }

  const checkLengthOfResult = (result) => {
    if (result.length > 10) {
      setDisplayClasses({
        displayBefore: 'display-before-decimal',
        display: 'display-decimal',
      })
    } else {
      setDisplayClasses({ displayBefore: '', display: '' })
    }
  }

  const handleEqualButton = () => {
    controlLastChar()

    let result = eval(newDisplay)
    let resultAsText = String(result)

    // Fix the number if it is decimal
    /* resultAsText = checkIfDecimal(resultAsText)
      ? String(result.toFixed(2))
      : String(result) */

    checkIfDecimal(resultAsText)
    checkLengthOfResult(resultAsText)

    setDisplayBefore(resultAsText)
    setDisplay(resultAsText)
  }

  return (
    <div className="app">
      <div className="calculator-container">
        <div className="calculator-top">
          <div id="display-before" className={displayClasses.displayBefore}>
            {displayBefore}
          </div>
          <div id="display" className={displayClasses.display}>
            {display}
          </div>
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
