import { Product } from "../products";

export const calculateTotal = (products: Product[], totalSavings: number) => {
  const subTotal = products.reduce(
    (prev, curr) => prev + curr.price * curr.quantity,
    0
  );
  const total =
    products.reduce((prev, curr) => prev + curr.price * curr.quantity, 0) +
    totalSavings;

  return { subTotal, total };
};
