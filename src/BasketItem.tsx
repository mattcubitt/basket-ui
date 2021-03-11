import React from "react";
import styled from "styled-components";
import { Row } from "./components/Row";
import { Product } from "./products";

const Price = styled.div`
  display: inline-block;
  align-self: flex-end;
`;

type Props = { product: Product; quantity: number };

const BasketItem: React.FC<Props> = ({ product, quantity }) => {
  const detailLine = product.formatDetailLine
    ? product.formatDetailLine(product, quantity)
    : "";
  return (
    <Row as="li">
      <div>
        {product.name} <div>{detailLine}</div>
      </div>
      <Price>{(quantity * product.price).toFixed(2)}</Price>
    </Row>
  );
};

export default BasketItem;
