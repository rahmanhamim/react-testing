import { render, screen } from "@testing-library/react";
import Skills from "./Skills";

describe("Skills", () => {
  const skills = ["HTML", "CSS", "JS"];

  test("renders correctly", () => {
    render(<Skills skills={skills} />);
    const skillsList = screen.getByRole("list");
    expect(skillsList).toBeInTheDocument();
  });

  test("renders a list of elements", () => {
    render(<Skills skills={skills} />);
    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).toHaveLength(skills.length);
  });
});
