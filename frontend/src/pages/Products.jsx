import { useState } from "react";
import Header from "../components/Header";
import ProductCardsContainer from "../components/ProductCardsContainer";
import { useNavigate, useLocation } from "react-router-dom";

const Products = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const { state } = useLocation();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleClick = () => {
    navigate(`/?search=${searchTerm}`);
  };

  const filteredProducts = products
    ? products.filter((product) =>
        product.title
          .toLowerCase()
          .includes(
            state?.search && state?.search !== ""
              ? state?.search
              : searchTerm.toLowerCase()
          )
      )
    : [];

  return (
    <>
      <Header onSearchChange={handleSearchChange} handleClick={handleClick} />
      {filteredProducts.length > 0 ? (
        <ProductCardsContainer products={filteredProducts} />
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Products;
