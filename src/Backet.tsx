import { useState } from "react";

const Backet: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState("");
  const [addedProducts, setAddedProducts] = useState<string[]>([]);
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
        <option>Face Mask</option>
        <option>Toilet Paper</option>
        <option>Hand Sanitizer</option>
      </select>
      <button
        onClick={() => {
          setAddedProducts([...addedProducts, selectedProduct]);
        }}
        disabled={selectedProduct === ""}
      >
        Add
      </button>
      <label htmlFor="backetList">Basket:</label>
      <ul>
        {addedProducts.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
    </>
  );
};

export default Backet;
