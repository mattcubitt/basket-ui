import { Product } from "./products";

export const calculateDiscounts = (products: Product[]) => {
  const discounts = [];
  const faceMasks = products.filter((product) => product.name === "Face Mask");
  if (faceMasks.length > 1) {
    const unitSaving = -1;
    const quantity = Math.floor(faceMasks.length / 2);

    discounts.push({
      saving: quantity * unitSaving,
      discription: "Face Masks 2 for £4",
    });
  }

  const toiletPapers = products.filter(
    (product) => product.name === "Toilet Paper"
  );

  if (toiletPapers.length > 1) {
    const unitSaving = -0.65;
    const quantity = Math.floor(toiletPapers.length / 6);

    if (quantity > 0) {
      discounts.push({
        saving: quantity * unitSaving,
        discription: "Toilet Paper 6 for 5",
      });
    }
  }

  const totalSavings = discounts.reduce((prev, curr) => prev + curr.saving, 0);

  return { discounts, totalSavings };
};
