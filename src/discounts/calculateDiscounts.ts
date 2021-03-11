import { discountConfig } from "./discountConfig";
import { Product } from "../products";
import { v4 as uuidv4 } from "uuid";

export const calculateDiscounts = (products: Product[]) => {
  const discounts = [];
  for (const discountConfigItem of discountConfig) {
    const filteredProducts = products.filter(
      (product) => product.name === discountConfigItem.productName
    );

    if (filteredProducts.length > 1) {
      const quantity = Math.floor(
        filteredProducts.length / discountConfigItem.prdocutCount
      );

      if (quantity > 0) {
        discounts.push({
          id: uuidv4(),
          saving: quantity * discountConfigItem.unitSaving,
          discription: discountConfigItem.discription,
        });
      }
    }
  }

  const totalSavings = discounts.reduce((prev, curr) => prev + curr.saving, 0);

  return { discounts, totalSavings };
};
