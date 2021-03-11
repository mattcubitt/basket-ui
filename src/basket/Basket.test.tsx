import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Basket from "./Basket";
import userEvent from "@testing-library/user-event";
import products from "../products";

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

test("should calculate price per litre when adding hand sanitizer", async () => {
  render(<Basket />);

  const expectedProductToAdd = "Hand Sanitizer";
  const expectedQuantity = 0.175;

  userEvent.selectOptions(
    screen.getByLabelText("Select a product:"),
    expectedProductToAdd
  );

  const quantityInput = await screen.findByPlaceholderText("Select quantity");

  fireEvent.change(quantityInput, { target: { value: expectedQuantity } });

  const addButton = screen.getByText("Add");

  userEvent.click(addButton);

  const listItems = screen.getAllByRole("listitem");

  expect(listItems).toHaveLength(1);

  const productPrice = products.get(expectedProductToAdd)?.price;
  expect(listItems[0]).toHaveTextContent(expectedProductToAdd);
  expect(listItems[0]).toHaveTextContent(
    (expectedQuantity * productPrice!).toFixed(2)
  );

  expect(listItems[0]).toHaveTextContent(`${expectedQuantity} l @ £19.99/l`);
});

test("should show correct totals", () => {
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

  expect(screen.getByLabelText("Sub-total")).toHaveTextContent("28.89");

  expect(screen.getByLabelText("Total savings")).toHaveTextContent("-1.65");

  expect(screen.getByLabelText("Total to Pay")).toHaveTextContent("27.24");
});
