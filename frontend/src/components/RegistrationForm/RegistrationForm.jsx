import { Link } from "react-router-dom";
import classes from "./index.module.css";

const RegistrationForm = () => {
  return (
    <>
      <div className={classes["registration-form"]}>
        <h2>Welcome to Dump Webstore!</h2>
        <h3>Create your account here.</h3>

        <form>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              placeholder="example@gmail.com"
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="*********" />
          </div>

          <div>
            <label htmlFor="password">Confirm your password</label>
            <input
              type="password"
              name="passwordConfirmation"
              placeholder="*********"
            />
          </div>

          <button className={classes["registration-btn"]}>Register</button>
        </form>
        <h4 className={classes["old-member"]}>
          Already have an account? <Link to="/login">Login here!</Link>
        </h4>
      </div>
    </>
  );
};

export default RegistrationForm;
