import React, { useEffect, useState } from "react";

// =======================================================
// useEffect
// =======================================================

function Example1() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

const Example2 = () => {
  const [count, setCount] = useState(0);

  useEffect (() => {
    console.log (`You have clicked the first button ${count} times`);
  }, [count]);

  const [count2, setCount2] = useState(0);

  useEffect (() => {
    console.log (`You have clicked the second button ${count2} times`);
  }, [count2]);

  return (
    <div>
      <button onClick={() => setCount (count + 1)}>Button 1</button>
      <button onClick={() => setCount2 (count2 + 1)}>Button 2</button>
			<p>check console</p>
		</div>
  )
}

function Effect() {
	return (
		<div>
			<Example1 />
			<br /><br />
			<Example2 />
		</div>
	)
}

export default Effect;