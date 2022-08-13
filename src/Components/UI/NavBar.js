import {  useEffect, useState } from 'react'
import auth from '../../FirebaseConfig'
import classes from './NavBar.module.css'


const NavBar = (props) => {
    const [user, setUser] = useState({})

    const change = () => {
      auth.onAuthStateChanged((user)=>{
        setUser(user)
      })
    }

    useEffect(()=>{change()},[user])


    const signOutHandler =  (auth) => {
        user.auth.signOut()
    }


    return (
      <div className={classes.unlis}>
        <div className={classes.lis}>
          <button className={classes.active} onClick={props.onHome} >Home</button>
        </div>
        {user ? (
          <div className={classes["lis-Login"]}>
            <button onClick={signOutHandler}>Sign Out</button>
          </div>
        ) : (
          <div className={classes["lis-Login"]}>
            <button onClick={props.onLogin}>Login</button>
          </div>
        )}
        <span className={classes.id}>{user?.email}</span>
      </div>
    );
}

export default NavBar