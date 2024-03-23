import React, { useRef, useState } from "react";

function CounterRef() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <h1>CounterRef</h1>
      <button onClick={handleClick}>{count}</button>
    </div>
  );
}

export default CounterRef;
