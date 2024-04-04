import classes from "./../styles/single-product.module.css";
import { useEffect, useState } from "react";
import ProductCardsContainer from "./ProductCardsContainer";

const RelevantProducts = () => {
  const [products, setProducts] = useState([]);
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const numbers = [];
    while (numbers.length < 3) {
      let randomNumber = Math.floor(Math.random() * 19);
      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    }

    const randomProds = numbers.map((index) => products[index]);
    setRandomProducts(randomProds);
  }, [products]);

  return (
    <>
      <h2 id={classes["relevant-products-title"]}>Možda će vam se svidjeti</h2>
      <ProductCardsContainer products={randomProducts} />
    </>
  );
};

export default RelevantProducts;
