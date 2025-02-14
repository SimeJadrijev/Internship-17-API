import React from "react";
import classes from "./index.module.css";
import ProductCard from "../ProductCard/ProductCard";

const ProductCardsContainer = ({ products }) => {
  return (
    <div className={classes["product-cards-container"]}>
      {products.map(
        (product) =>
          product &&
          product.id && <ProductCard key={product.id} product={product} />
      )}
    </div>
  );
};

export default ProductCardsContainer;
