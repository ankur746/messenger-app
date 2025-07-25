import React, { useState } from 'react';

const MyButton = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div data-testid="counter">{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>Click Me</button>
    </>
  );
};

export default MyButton;
