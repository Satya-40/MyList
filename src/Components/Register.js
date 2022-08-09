import { useState } from 'react';
import classes from './Register.modal.css'
import Modal from './UI/Modal'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../FirebaseConfig';

const Register = props => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordMissMatch, setPasswordMissMatch] = useState(null)
    const [emptyFeild, setEmptyFeild] = useState(null)


    const usernameChangeHandler = (event) => {
      setUsername(event.target.value);
      if (username === '' || password===''){
        setEmptyFeild(false)
      }
    };
  
    const passwordChangeHandler = (event) => {
      setPassword(event.target.value);
    };

    const confirmPasswordChangeHandler = event => {
        setConfirmPassword(event.target.value)
        if(password!==confirmPassword){
          setPasswordMissMatch(true)
          return
        }
        setPasswordMissMatch(false)
      }

  
    const formSubmitHandler = async (event) => {
      event.preventDefault()
      if (username === '' || password===''){
        setEmptyFeild(true)
        return
      }
      if(password!==confirmPassword){
        setPasswordMissMatch(true)
        return
      }
      else {
        console.log(username,password, confirmPassword)
        setPasswordMissMatch(false)
      }      
   
      try{
      const user = await createUserWithEmailAndPassword( auth, username, password )
      } catch(error) {
        console.log(error.message)
      }
      props.onClose()
    }

    return <Modal onClose={props.onClose} >
      <span onClick={props.onClose}>&#10006;</span>
      <form onSubmit={formSubmitHandler}>
        <h1>Register</h1>
        <label className={classes.label}>Username</label>
        <input className={classes.input} onChange={usernameChangeHandler} />
        <label className={classes.label}>Password</label>
        <input className={classes.input} onChange={passwordChangeHandler} />
        <label className={classes.label}>Confirm Password</label>
        <input className={classes.input} onChange={confirmPasswordChangeHandler} />
        {emptyFeild && <p style={{color:'red'}}>No empty feilds</p>}
        {passwordMissMatch && <p style={{color:'red'}}>Passwords do not match</p>}
        <button
          className={classes["submit-button"]}
          onClick={formSubmitHandler}
        >
          Submit
        </button>
        <p
          className={classes.loginp}
          onClick={props.onLogin}
        >
          Login if existing user
        </p>
      </form>
    </Modal>
}

export default Register