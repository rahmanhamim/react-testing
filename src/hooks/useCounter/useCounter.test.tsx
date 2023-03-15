import { renderHook, act } from "../../test-utils";
import { useCounter } from "./useCounter";

describe("useCounter", () => {
  test("should render the initial count", () => {
    const { result } = renderHook(() => useCounter({ initialCount: 0 }));
    expect(result.current.count).toBe(0);
  });

  test("should accept and render the same initial count", () => {
    const { result } = renderHook(() => useCounter({ initialCount: 10 }));
    expect(result.current.count).toBe(10);
  });

  test("should increment the count", () => {
    const { result } = renderHook(() => useCounter({ initialCount: 0 }));
    act(() => result.current.increment());
    expect(result.current.count).toBe(1);
  });
  test("should decrement the count", () => {
    const { result } = renderHook(() => useCounter({ initialCount: 0 }));
    act(() => result.current.decrement());
    expect(result.current.count).toBe(-1);
  });
});
