import { render, screen, logRoles } from "@testing-library/react";
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

  test("renders login button", () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole("button", {
      name: "Login",
    });
    expect(loginButton).toBeInTheDocument();
  });

  test("starts learning button is not visible", () => {
    render(<Skills skills={skills} />);
    const startLearningButton = screen.queryByRole("button", {
      name: "Start Learning",
    });
    expect(startLearningButton).not.toBeInTheDocument();
  });

  test("Start learning button is eventually visible", async () => {
    const view = render(<Skills skills={skills} />);
    logRoles(view.container);
    // screen.debug();
    const startLearningButton = await screen.findByRole(
      "button",
      {
        name: "Start Learning",
      },
      {
        timeout: 2000,
      }
    );
    // screen.debug();
    expect(startLearningButton).toBeInTheDocument();
  });
});
