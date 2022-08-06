import { useState } from "react";
import Modal from "./UI/Modal";
import classes from "./Login.module.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const formSubmitHandler = () => {
    console.log(username, password);
  };

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  return (
    <Modal>
        <form onSubmit={formSubmitHandler}>
          <h1>Sign In</h1>
          <label className={classes.label}>Username</label>
          <input className={classes.input} onChange={usernameChangeHandler} />
          <label className={classes.label}>Password</label>
          <input className={classes.input} onChange={passwordChangeHandler} />
          <button
            className={classes["submit-button"]}
            onClick={formSubmitHandler}
          >
            Submit
          </button>
          <button className={classes.registerButton}>
            Register if new user
          </button>
        </form>
    </Modal>
  );
};

export default Login;
