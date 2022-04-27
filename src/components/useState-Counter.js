import React, { useState } from "react";

function Counter({initialCount}) {
  const [count, setCount] = useState(initialCount);
  return (
    <>
      <p>Count : {count}</p>
      <button onClick={() =>
        setCount(initialCount)}>Reset</button>
      <button onClick={() =>
        setCount(count => count - 1)}>-</button>
      <button onClick={() =>
        setCount(count => count + 1)}>+</button>
    </>
  )
}

export default Counter;