import classes from "./index.module.css";
import { Link } from "react-router-dom";

const Header = ({ onSearchChange, handleClick }) => {
  return (
    <>
      <header>
        <Link to="/">
          <img
            id={classes["header-image"]}
            src="https://turizam.njuskalo.hr/storage/app/uploads/public/628/ce2/edc/628ce2edc0400343308751.jpeg"
            alt="njuskalo header image"
          />
        </Link>
        <input type="text" onChange={onSearchChange} />
        <button onClick={handleClick}>Traži</button>
      </header>
    </>
  );
};

export default Header;
