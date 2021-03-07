import React from "react";
import { render, screen } from "@testing-library/react";
import Backet from "./Backet";
import userEvent from "@testing-library/user-event";

const addProduct = (productToAdd: string) => {
  userEvent.selectOptions(
    screen.getByLabelText("Select a product:"),
    productToAdd
  );

  const addButton = screen.getByText("Add");

  userEvent.click(addButton);
};

test("should show selected product in basket when clicking add", () => {
  render(<Backet />);

  const productToAdd = "Face Mask";

  addProduct(productToAdd);

  const listItems = screen.getAllByRole("listitem");

  expect(listItems).toHaveLength(1);

  expect(listItems[0]).toHaveTextContent(productToAdd);
});

test("should show multiple products in basket when clicking add", () => {
  render(<Backet />);

  const productsToAdd = [
    "Face Mask",
    "Face Mask",
    "Toilet Paper",
    "Toilet Paper",
    "Toilet Paper",
    "Toilet Paper",
    "Toilet Paper",
    "Toilet Paper",
    "Hand Sanitizer",
  ];

  productsToAdd.forEach(addProduct);

  const listItems = screen.getAllByRole("listitem");

  expect(listItems).toHaveLength(productsToAdd.length);

  productsToAdd.forEach((productToAdd, index) =>
    expect(listItems[index]).toHaveTextContent(productToAdd)
  );
});
