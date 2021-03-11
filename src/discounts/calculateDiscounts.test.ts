import { calculateDiscounts } from "./calculateDiscounts";
import { Product } from "../products";

jest.mock("uuid");

test("should return correct discounts for 2 face masks", () => {
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
  const discounts = calculateDiscounts(products);

  expect(discounts).toEqual({
    totalSavings: -1,
    discounts: [
      {
        discription: "Face Masks 2 for £4",
        saving: -1,
      },
    ],
  });
});

test("should return correct discounts for 5 face masks", () => {
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
    {
      name: "Face Mask",
      price: 2.5,
      unit: "each",
      canAmendQuantity: false,
      quantity: 1,
    },
  ];
  const discounts = calculateDiscounts(products);

  expect(discounts).toEqual({
    totalSavings: -2,
    discounts: [
      {
        discription: "Face Masks 2 for £4",
        saving: -2,
      },
    ],
  });
});

test("should return correct discounts for 6 toilet papers", () => {
  const products: Product[] = [
    {
      name: "Toilet Paper",
      price: 0.65,
      unit: "per roll",
      canAmendQuantity: false,
      quantity: 1,
    },
    {
      name: "Toilet Paper",
      price: 0.65,
      unit: "per roll",
      canAmendQuantity: false,
      quantity: 1,
    },
    {
      name: "Toilet Paper",
      price: 0.65,
      unit: "per roll",
      canAmendQuantity: false,
      quantity: 1,
    },
    {
      name: "Toilet Paper",
      price: 0.65,
      unit: "per roll",
      canAmendQuantity: false,
      quantity: 1,
    },
    {
      name: "Toilet Paper",
      price: 0.65,
      unit: "per roll",
      canAmendQuantity: false,
      quantity: 1,
    },
    {
      name: "Toilet Paper",
      price: 0.65,
      unit: "per roll",
      canAmendQuantity: false,
      quantity: 1,
    },
  ];
  const discounts = calculateDiscounts(products);

  expect(discounts).toEqual({
    totalSavings: -0.65,
    discounts: [
      {
        discription: "Toilet Paper 6 for 5",
        saving: -0.65,
      },
    ],
  });
});

test("should return correct discounts for 14 toilet papers", () => {
  const products: Product[] = [
    {
      name: "Toilet Paper",
      price: 0.65,
      unit: "per roll",
      canAmendQuantity: false,
      quantity: 1,
    },
    {
      name: "Toilet Paper",
      price: 0.65,
      unit: "per roll",
      canAmendQuantity: false,
      quantity: 1,
    },
    {
      name: "Toilet Paper",
      price: 0.65,
      unit: "per roll",
      canAmendQuantity: false,
      quantity: 1,
    },
    {
      name: "Toilet Paper",
      price: 0.65,
      unit: "per roll",
      canAmendQuantity: false,
      quantity: 1,
    },
    {
      name: "Toilet Paper",
      price: 0.65,
      unit: "per roll",
      canAmendQuantity: false,
      quantity: 1,
    },
    {
      name: "Toilet Paper",
      price: 0.65,
      unit: "per roll",
      canAmendQuantity: false,
      quantity: 1,
    },
    {
      name: "Toilet Paper",
      price: 0.65,
      unit: "per roll",
      canAmendQuantity: false,
      quantity: 1,
    },
    {
      name: "Toilet Paper",
      price: 0.65,
      unit: "per roll",
      canAmendQuantity: false,
      quantity: 1,
    },
    {
      name: "Toilet Paper",
      price: 0.65,
      unit: "per roll",
      canAmendQuantity: false,
      quantity: 1,
    },
    {
      name: "Toilet Paper",
      price: 0.65,
      unit: "per roll",
      canAmendQuantity: false,
      quantity: 1,
    },
    {
      name: "Toilet Paper",
      price: 0.65,
      unit: "per roll",
      canAmendQuantity: false,
      quantity: 1,
    },
    {
      name: "Toilet Paper",
      price: 0.65,
      unit: "per roll",
      canAmendQuantity: false,
      quantity: 1,
    },
    {
      name: "Toilet Paper",
      price: 0.65,
      unit: "per roll",
      canAmendQuantity: false,
      quantity: 1,
    },
    {
      name: "Toilet Paper",
      price: 0.65,
      unit: "per roll",
      canAmendQuantity: false,
      quantity: 1,
    },
  ];
  const discounts = calculateDiscounts(products);

  expect(discounts).toEqual({
    totalSavings: -1.3,
    discounts: [
      {
        discription: "Toilet Paper 6 for 5",
        saving: -1.3,
      },
    ],
  });
});

test("should return correct discounts and total savings for 2 face masks and 6 toilet paper", () => {
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
    {
      name: "Toilet Paper",
      price: 0.65,
      unit: "per roll",
      canAmendQuantity: false,
      quantity: 1,
    },
    {
      name: "Toilet Paper",
      price: 0.65,
      unit: "per roll",
      canAmendQuantity: false,
      quantity: 1,
    },
    {
      name: "Toilet Paper",
      price: 0.65,
      unit: "per roll",
      canAmendQuantity: false,
      quantity: 1,
    },
    {
      name: "Toilet Paper",
      price: 0.65,
      unit: "per roll",
      canAmendQuantity: false,
      quantity: 1,
    },
    {
      name: "Toilet Paper",
      price: 0.65,
      unit: "per roll",
      canAmendQuantity: false,
      quantity: 1,
    },
    {
      name: "Toilet Paper",
      price: 0.65,
      unit: "per roll",
      canAmendQuantity: false,
      quantity: 1,
    },
  ];
  const discounts = calculateDiscounts(products);

  expect(discounts).toEqual({
    totalSavings: -1.65,
    discounts: [
      {
        discription: "Face Masks 2 for £4",
        saving: -1,
      },
      {
        discription: "Toilet Paper 6 for 5",
        saving: -0.65,
      },
    ],
  });
});
