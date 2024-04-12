import { Link } from "react-router-dom";
import classes from "./index.module.css";

const LoginForm = () => {
  return (
    <>
      <div className={classes["login-form"]}>
        <h2>Welcome back!</h2>
        <h3>Enter your credentials to log in.</h3>

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

          <button className={classes["login-btn"]}>Login</button>
        </form>
        <h4 className={classes["new-member"]}>
          New member? <Link to="/registration">Register here!</Link>
        </h4>
      </div>
    </>
  );
};

export default LoginForm;
