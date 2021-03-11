import { calculateTotal } from "./calculateTotal";
import { Product } from "../products";

test("should calculate total as zero when no products", () => {
  const total = calculateTotal([], 0);

  expect(total).toEqual({ subTotal: 0, total: 0 });
});

test("should calculate total when products are added", () => {
  const products: Product[] = [
    {
      name: "Face Mask",
      price: 2.5,
      unit: "each",
      canAmendQuantity: false,
      quantity: 1,
    },
    {
      name: "Face Mask",
      price: 2.5,
      unit: "each",
      canAmendQuantity: false,
      quantity: 1,
    },
  ];

  const total = calculateTotal(products, 0);

  expect(total).toEqual({ subTotal: 5, total: 5 });
});

test("should calculate total when products are added and there are savings", () => {
  const products: Product[] = [
    {
      name: "Face Mask",
      price: 2.5,
      unit: "each",
      canAmendQuantity: false,
      quantity: 1,
    },
    {
      name: "Face Mask",
      price: 2.5,
      unit: "each",
      canAmendQuantity: false,
      quantity: 1,
    },
  ];

  const total = calculateTotal(products, -2.5);

  expect(total).toEqual({ subTotal: 5, total: 2.5 });
});
