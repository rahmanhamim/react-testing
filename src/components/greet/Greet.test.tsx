/**
 * @Greet should render the text hello and if a name is passed into the component it should render hello followed by the name
 */

import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

describe("Greet", () => {
  test("render correctly", () => {
    render(<Greet />);
    const greetElement = screen.getByText(/hello/i);
    expect(greetElement).toBeInTheDocument();
  });

  // test.only
  // test.skip

  // describe("Nested", () => {
  //   test("render correctly with name", () => {
  //     render(<Greet name="Hamim" />);
  //     const greetElement = screen.getByText(/hello Hamim/i);
  //     expect(greetElement).toBeInTheDocument();
  //   });
  // });
});
