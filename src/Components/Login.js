import { useState } from "react";
import Modal from "./UI/Modal";
import classes from "./Login.module.css";
import { signInWithEmailAndPassword,} from "firebase/auth";
import auth from "../FirebaseConfig";


const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const formSubmitHandler = async(event) => {
    event.preventDefault()
    console.log(username, password);

    try{
      const user = await signInWithEmailAndPassword( auth, username, password )
      console.log(user)
      } catch(error) {
        console.log(error.message)
      }
      
    props.onClose()
  };



  return (
    <Modal onClose={props.onClose} >
      <span onClick={props.onClose}>&#10006;</span>
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
        <p
          className={classes.registerp}
          onClick={props.onRegister}
        >
          Register if new user
        </p>
      </form>
    </Modal>
  );
};

export default Login;
