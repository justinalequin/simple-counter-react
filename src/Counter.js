import React, { useState } from "react";
import GreenChecks from "./GreenChecks";
import RedX from "./RedX";

function Counter() {
  let [counter, setCounter] = useState(0);

  const addFunction = () => {
    setCounter(counter + 1);
  };

  const removeFunction = () => {
    setCounter(counter - 1);
  };

  const updateRedX = [];
  const updateGreenCheck = [];
  if (counter > 0) {
    for (let greenCheckKey = 0; greenCheckKey < counter; greenCheckKey++) {
      updateGreenCheck.push(<GreenChecks key={greenCheckKey} />);
    }
  }
  if (counter < 0) {
    let newCounter = counter * -1;
    for (let redXKey = 0; redXKey < newCounter; redXKey++) {
      updateRedX.push(<RedX key={redXKey} />);
    }
  }

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
          {updateGreenCheck}
          {updateRedX}
        </div>
      </div>
    </div>
  );
}

export default Counter;
