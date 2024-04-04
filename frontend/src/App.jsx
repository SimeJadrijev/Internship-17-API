import "./App.css";
import Products from "./pages/Products";
import ProductCard from "./components/ProductCard";
import SingleProduct from "./components/SingleProduct";
import React, { useState, useEffect } from "react";
import ProductCardsContainer from "./components/ProductCardsContainer";
import { Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import NotFoundPage from "./pages/NotFoundPage";
import RelevantProducts from "./components/RelevantProducts";

function App() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const FetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Greška:", error);
      }
    };

    FetchProducts();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Products products={products} />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
