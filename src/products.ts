export type Product = { name: string; price: number };

const products = new Map<string, Product>();
products.set("Face Mask", { name: "Face Mask", price: 2.5 });
products.set("Toilet Paper", { name: "Toilet Paper", price: 0.65 });
products.set("Hand Sanitizer", { name: "Hand Sanitizer", price: 19.99 });

export default products;
