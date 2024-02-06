// CategoryFilter.test.js

import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "../components/App";

test("clicking the category button filters the task list", async () => {
  render(<App />);

  const codeButton = screen.getByRole("button", { name: "Code" });

  fireEvent.click(codeButton);

  await waitFor(() => {
    expect(screen.getByText("Build a todo app")).toBeInTheDocument();
    expect(screen.queryByText("Buy rice")).not.toBeInTheDocument();
  });
});
