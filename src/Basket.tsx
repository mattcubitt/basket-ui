import { useState } from "react";
import products, { Product } from "./products";

const Basket: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState("");
  const [addedProducts, addProductToBasket] = useState<Product[]>([]);

  return (
    <>
      <label htmlFor="productList">Select a product:</label>
      <select
        id="productList"
        value={selectedProduct}
        onChange={(event) => {
          setSelectedProduct(event.target.value);
        }}
      >
        <option></option>
        {Array.from(products).map(([key, product]) => (
          <option key={key}>{product.name}</option>
        ))}
      </select>
      <button
        onClick={() => {
          const foundProduct = products.get(selectedProduct);

          if (foundProduct) {
            addProductToBasket([...addedProducts, foundProduct]);
          }
        }}
        disabled={selectedProduct === ""}
      >
        Add
      </button>
      <div>
        <label htmlFor="basketList">Basket:</label>
        <ul id="basketList">
          {addedProducts.map((product, index) => (
            <li key={index}>{`${product.name} ${product.price.toFixed(2)}`}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Basket;
