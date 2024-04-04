import classes from "./../styles/single-product.module.css";

const SingleProduct = ({ product }) => {
  return (
    <>
      <div className={classes["single-product"]}>
        <img src={product.image} alt={product.title} />

        <div className={classes["single-product-right"]}>
          <h2>{product.title}</h2>
          <h2>
            <span>Cijena: </span>
            {product.price} €
          </h2>
          <h3>
            <span>Kategorija: </span>
            {product.category}
          </h3>

          <p>
            <span>Opis: </span>
            {product.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
