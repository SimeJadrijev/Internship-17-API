import classes from "./../styles/product-card.module.css";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  const path = `/product/${product.id}`;
  return (
    <>
      <Link to={path} className={classes["product-card-link"]}>
        <div className={classes["product-card"]}>
          <img src={product.image} alt="${product.title} image" />

          <div className={classes["product-card-bottom"]}>
            <h3 className={classes["product-card-title"]}>{product.title}</h3>
            <h3 className={classes["product-card-price"]}>{product.price} €</h3>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
