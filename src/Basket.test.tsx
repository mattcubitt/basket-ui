import React from "react";
import { render, screen } from "@testing-library/react";
import Basket from "./Basket";
import userEvent from "@testing-library/user-event";
import products from "./products";

const addProduct = (productToAdd: string) => {
  userEvent.selectOptions(
    screen.getByLabelText("Select a product:"),
    productToAdd
  );

  const addButton = screen.getByText("Add");

  userEvent.click(addButton);
};

test("should show multiple products in basket when clicking add", () => {
  render(<Basket />);

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

  productsToAdd.forEach((productToAdd, index) => {
    const productPrice = products.get(productToAdd)?.price;
    expect(listItems[index]).toHaveTextContent(productToAdd);
    expect(listItems[index]).toHaveTextContent(productPrice!.toFixed(2));
  });
});
