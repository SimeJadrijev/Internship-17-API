import React, { useState, useEffect } from "react";
import Products from "./pages/Products/Products";
import { Routes, Route } from "react-router-dom";
import Product from "./pages/Product/Product";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Greška: ", error);
      }
    })();
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
