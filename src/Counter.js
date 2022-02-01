import React, { useState } from "react";

function Counter() {
  let [counter, setCounter] = useState(0);

  const addFunction = () => {
    setCounter(counter + 1);
  };

  const removeFunction = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="counterSection">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={addFunction}>ADD + 1</button>

        <h1>{counter}</h1>
        <button onClick={removeFunction}>REMOVE - 1</button>
      </div>
      <div className="starsArea">
        <div
          className="starContainer"
          style={{ backgroundColor: "rgba(0, 0, 0, .7)" }}
        >
          Hello World
        </div>
      </div>
    </div>
  );
}

export default Counter;
