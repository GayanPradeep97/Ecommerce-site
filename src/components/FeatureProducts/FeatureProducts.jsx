/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import { PRODUCTS } from "../Products/products";

const FeatureProducts = () => {
  return (
    <>
      <div className="card">
        {PRODUCTS.slice(2, 6).map((product) => (
          <img src={product.image} alt="" />
        ))}
      </div>
    </>
  );
};

export default FeatureProducts;
