import React, { useState } from "react";

const State = () => {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default State;
