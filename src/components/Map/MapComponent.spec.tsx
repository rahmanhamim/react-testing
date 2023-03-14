// import { render, screen } from "@testing-library/react";

// import MapComponent from "./MapComponent";

// describe("MapComponent", () => {
//   test("renders correctly", () => {
//     render(<MapComponent />);
//   });
// });

import React from "react";
import { render } from "@testing-library/react";
import MapComponent from "./MapComponent";

test("renders the MapComponent without errors", () => {
  render(<MapComponent />);
});
