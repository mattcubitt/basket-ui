import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders product dropdown", () => {
  render(<App />);

  expect(screen.getByLabelText("Select a product:")).toBeInTheDocument();
});
