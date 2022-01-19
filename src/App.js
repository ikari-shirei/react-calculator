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

  const returnLastChar = (currentDisplay) => {
    const lastCharOfResult = currentDisplay.substring(currentDisplay.length - 1)

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

    if (
      display.length > 0 &&
      display !== '.' &&
      returnLastChar(display) !== '.'
    ) {
      if (Number(display) < 0) {
        const negativeDisplayInParentheses = `(${display})`
        setDisplayBefore(
          displayBefore.concat(negativeDisplayInParentheses.concat(operator))
        )
        setDisplay('')
      } else {
        setDisplayBefore(displayBefore.concat(display.concat(operator)))
        setDisplay('')
      }
    } else {
      if (
        operators.includes(returnLastChar(displayBefore)) &&
        operator !== '-'
      ) {
        setDisplayBefore(displayBefore.slice(0, -1) + operator)
      }
    }

    if ((operator === '-' && display === '') || display === '0') {
      setDisplay('-')
    }
  }

  const handlePositiveNegativeButton = () => {
    if (Number(display) > 0) {
      setDisplay(String(Number(display) * -1))
    } else if (Number(display) < 0) {
      setDisplay(String(Math.abs(Number(display))))
    }
  }

  const handleDecimalButton = () => {
    console.log(display.charAt(display.length - 1))
    if (!display.split('').find((x) => x === '.')) {
      setDisplay(display.concat('.'))
    }
  }

  const handleClearButton = () => {
    setDisplayBefore('')
    setDisplay('0')
  }

  const handleEqualButton = () => {
    let result

    const displayBeforeWithoutLastOperator = displayBefore.substring(
      -1,
      displayBefore.length - 1
    )

    if (display === '') {
      result = eval(displayBeforeWithoutLastOperator)
    } else {
      if (Number(display) < 0) {
        const negativeDisplayInParentheses = `(${display})`
        const concatDisplays = displayBefore.concat(
          negativeDisplayInParentheses
        )

        result = eval(concatDisplays)
      } else {
        result = eval(displayBefore.concat(display))
      }
    }

    setDisplayBefore('')
    setDisplay(String(result))
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
