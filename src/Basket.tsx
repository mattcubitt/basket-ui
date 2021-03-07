import { useState } from "react";
import products, { Product } from "./products";

const Basket: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [addedProducts, addProductToBasket] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <>
      <label htmlFor="productList">Select a product:</label>
      <select
        id="productList"
        value={selectedProduct?.name}
        onChange={(event) => {
          const foundProduct = products.get(event.target.value);

          if (foundProduct) {
            setSelectedProduct(foundProduct);
          }
        }}
      >
        <option></option>
        {Array.from(products).map(([key, product]) => (
          <option key={key} value={product.name}>{`${
            product.name
          } (${product.price.toLocaleString("en-GB", {
            style: "currency",
            currency: "GBP",
          })} ${product.unit})`}</option>
        ))}
      </select>
      {selectedProduct?.canAmendQuantity && (
        <input
          type="number"
          placeholder="Select quantity"
          onChange={(event) => {
            setQuantity(parseFloat(event.target.value));
          }}
          value={quantity}
          min={0}
          max={10}
          step={0.175}
        />
      )}
      <button
        onClick={() => {
          if (selectedProduct) {
            addProductToBasket([
              ...addedProducts,
              {
                ...selectedProduct,
                quantity: selectedProduct.canAmendQuantity
                  ? quantity
                  : selectedProduct.quantity,
              },
            ]);
          }
        }}
        disabled={selectedProduct === null}
      >
        Add
      </button>
      <div>
        <label htmlFor="basketList">Basket:</label>
        <ul id="basketList">
          {addedProducts.map((product, index) => (
            <li key={index}>{`${product.name} ${(
              quantity * product.price
            ).toFixed(2)}`}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Basket;
