import { useEffect, useState } from 'react'
import classes from './NavBar.module.css'

const NavBar = (props) => {
  const [loginClicked, setLoginClicked] = useState(false)

    const loginButtonClickHandler=() => {
      setLoginClicked(!loginClicked)
      props.onLogin(loginClicked)
    }

    useEffect(()=>{},[])

    return (<div className={classes.unlis}>
        <div className={classes.lis}><button className={classes.active} >Home</button></div>
        <div className={classes.lis}><button >News</button></div>
        <div className={classes.lis}><button >Contact</button></div>
        <div className={classes['lis-Login']} id='signInDiv' ><button onClick={loginButtonClickHandler}>Login</button></div>
      </div>)
}

export default NavBar