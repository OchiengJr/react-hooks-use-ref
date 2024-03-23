import React, { useState } from "react";

function CounterState() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <h1>CounterState</h1>
      <button onClick={incrementCount}>{count}</button>
    </div>
  );
}

export default CounterState;
