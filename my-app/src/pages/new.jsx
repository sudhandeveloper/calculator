import React, { useState, useRef } from "react";


function New() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function plus(e) {
    e.preventDefault();
    const inputValue = Number(inputRef.current.value);
    setResult((result) => result + inputValue);
    inputRef.current.value = "";
  }

  function minus(e) {
    e.preventDefault();
    const inputValue = Number(inputRef.current.value);
    setResult((result) => result - inputValue);
    inputRef.current.value = "";
  }

  function times(e) {
    e.preventDefault();
    const inputValue = Number(inputRef.current.value);
    setResult((result) => result * inputValue);
    inputRef.current.value = "";
  }

  function divide(e) {
    e.preventDefault();
    const inputValue = Number(inputRef.current.value);
    if (inputValue === 0) {
      alert("Cannot divide by zero");
    } else {
      setResult((result) => result / inputValue);
    }
    inputRef.current.value = "";
  }

  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = "";
  }

  function resetResult(e) {
    e.preventDefault();
    setResult(0);
    inputRef.current.value = "";
  }

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>{result}</p>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <button onClick={plus}>Add</button>
        <button onClick={minus}>Subtract</button>
        <button onClick={times}>Multiply</button>
        <button onClick={divide}>Divide</button>
        <button onClick={resetInput}>Reset Input</button>
        <button onClick={resetResult}>Reset Result</button>

        
      </form>
      <h2 style={{fontSize:"25px"}}>
        Note
        type number and Press Enter then type number then do the calculation</h2>
    </div>
  );
}

export default New;
