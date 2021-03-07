export type Product = {
  name: string;
  price: number;
  unit: string;
  canAmendQuantity: boolean;
  quantity: number;
};

const products = new Map<string, Product>();
products.set("Face Mask", {
  name: "Face Mask",
  price: 2.5,
  unit: "each",
  canAmendQuantity: false,
  quantity: 1,
});
products.set("Toilet Paper", {
  name: "Toilet Paper",
  price: 0.65,
  unit: "per roll",
  canAmendQuantity: false,
  quantity: 1,
});
products.set("Hand Sanitizer", {
  name: "Hand Sanitizer",
  price: 19.99,
  unit: "per litre",
  canAmendQuantity: true,
  quantity: 1,
});

export default products;
