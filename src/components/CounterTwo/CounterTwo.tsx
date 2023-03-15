import React from "react";
import { ICounterTwoProps } from "./CounterTwo.types";

const CounterTwo = ({
  count,
  handleDecrement,
  handleIncrement,
}: ICounterTwoProps) => {
  return (
    <div>
      <h1>Counter Two</h1>
      <p>{count}</p>
      {handleIncrement && <button onClick={handleIncrement}>Increment</button>}
      {handleDecrement && <button onClick={handleDecrement}>Decrement</button>}
    </div>
  );
};

export default CounterTwo;
