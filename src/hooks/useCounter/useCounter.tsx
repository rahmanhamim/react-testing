import { useState } from "react";
import { ICounterProps } from "./Counter.types";

export const useCounter = ({ initialCount = 0 }: ICounterProps) => {
  const [count, setCount] = useState(initialCount);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return { count, increment, decrement };
};
