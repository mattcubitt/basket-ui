import React, { useState } from "react";
import { calculateDiscounts } from "./calculateDiscounts";
import { calculateTotal } from "./calculateTotal";
import { List } from "./components/List";
import { HighlightedSection } from "./components/HighlightedSection";
import { Row } from "./components/Row";
import products, { Product } from "./products";
import BasketItem from "./BasketItem";

const Basket: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [addedProducts, addProductToBasket] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState<number>(1);
  const { discounts, totalSavings } = calculateDiscounts(addedProducts);
  const { subTotal, total } = calculateTotal(addedProducts, totalSavings);

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
      <HighlightedSection>
        <div>
          <label htmlFor="basketList">Basket:</label>
          <List id="basketList">
            {addedProducts.map((product, index) => (
              <BasketItem product={product} quantity={quantity} key={index} />
            ))}
          </List>
        </div>

        <div>-----</div>
        <Row>
          <label id="sub-total">Sub-total</label>
          <div aria-labelledby="sub-total"> {subTotal.toFixed(2)}</div>
        </Row>

        <label id="savings">Savings</label>
        <div aria-labelledby="savings">
          {discounts.map((discount, index) => (
            <Row key={index}>
              <div>{discount.discription}</div>
              <div>{discount.saving.toFixed(2)}</div>
            </Row>
          ))}
        </div>

        <div>-----</div>
        <Row>
          <label id="total-savings">Total savings</label>
          <div aria-labelledby="total-savings">{totalSavings.toFixed(2)}</div>
        </Row>

        <div>---------------------------</div>
        <Row>
          <label id="total-to-pay">Total to Pay</label>
          <div aria-labelledby="total-to-pay">{total.toFixed(2)}</div>
        </Row>
      </HighlightedSection>
    </>
  );
};

export default Basket;
