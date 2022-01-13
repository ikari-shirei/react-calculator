import './App.scss'

function App() {
  return (
    <div className="app">
      <div className="calculator-container">
        <div className="calculator-top">
          <div id="display-before">15</div>
          <div id="display">10 + 5</div>
        </div>
        <div className="calculator-bottom">
          <div className="row">
            <div id="clear" className="colorless">
              C
            </div>
            <div id="positive-negative" className="colorless">
              +/-
            </div>
            <div id="mod" className="colorless">
              %
            </div>
            <div id="divide" className="color">
              /
            </div>
          </div>
          <div className="row">
            <div id="seven" className="colorless">
              7
            </div>
            <div id="eight" className="colorless">
              8
            </div>
            <div id="nine" className="colorless">
              9
            </div>
            <div id="multiply" className="color">
              *
            </div>
          </div>
          <div className="row">
            <div id="four" className="colorless">
              4
            </div>
            <div id="five" className="colorless">
              5
            </div>
            <div id="six" className="colorless">
              6
            </div>
            <div id="subtract" className="color">
              -
            </div>
          </div>
          <div className="row">
            <div id="one" className="colorless">
              1
            </div>
            <div id="two" className="colorless">
              2
            </div>
            <div id="three" className="colorless">
              3
            </div>
            <div id="add" className="color">
              +
            </div>
          </div>
          <div className="row-bottom">
            <div id="zero" className="colorless">
              0
            </div>
            <div id="decimal" className="colorless">
              .
            </div>
            <div id="equals" className="color">
              =
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
