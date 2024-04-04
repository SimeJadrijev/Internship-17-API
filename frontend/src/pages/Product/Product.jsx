import { useParams } from "react-router-dom";
import SingleProduct from "../../components/SingleProduct/SingleProduct";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import RelevantProducts from "../../components/RelevantProducts/RelevantProducts";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [searchTermValue, setSearchTermValue] = useState("");

  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchTermValue(e.target.value);
  };

  const handleClick = () => {
    navigate(`/`, {
      state: { search: searchTermValue },
    });

    setSearchTermValue("");
  };

  useEffect(() => {
    const FetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };
    FetchProduct();
  }, [id]);

  return (
    <>
      <Header onSearchChange={handleSearchChange} handleClick={handleClick} />
      {product ? <SingleProduct product={product} /> : <p>Loading...</p>}
      <RelevantProducts />
    </>
  );
};
export default Product;
