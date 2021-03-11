import React from "react";
import styled from "styled-components";
import { Row } from "../components/Row";
import { Product } from "../products";

const Price = styled.div`
  display: inline-block;
  align-self: flex-end;
`;

type Props = { product: Product };

const BasketItem: React.FC<Props> = ({ product }) => {
  const detailLine = product.formatDetailLine
    ? product.formatDetailLine(product, product.quantity)
    : "";
  return (
    <Row as="li">
      <div>
        {product.name} <div>{detailLine}</div>
      </div>
      <Price>{(product.quantity * product.price).toFixed(2)}</Price>
    </Row>
  );
};

export default BasketItem;
