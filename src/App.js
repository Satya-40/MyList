import { Fragment, useState } from 'react';
import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import SearchBar from './Components/SearchBar';
import SearchResult from './Components/SearchResults';
import NavBar from './Components/UI/NavBar';


function App() {
  const [input, setInput] = useState([])
  const [loginShower, setLoginShower] = useState(null)
  const [registerShower, setRegisterShower] = useState(null)
  

  const setInputHandler = data => {
    setInput(data)
  }

  const loginHandler = () => {
    setRegisterShower(false)
    setLoginShower(true);
  };

  const hideLoginHandler = () =>{
    setLoginShower(false)
  }

  const registerHandler = ()=> {
    setLoginShower(false)
    setRegisterShower(true)
  }
 

  const hideRegisterHandler = () => {
    setRegisterShower(false)
  }

  return (
    <Fragment>
        {registerShower && <Register onClose={hideRegisterHandler} onLogin={loginHandler}/>}
        {loginShower && <Login onClose={hideLoginHandler} onRegister={registerHandler}/>}
        <NavBar onLogin={loginHandler} />
        <SearchBar setData={setInputHandler} />
        <SearchResult input = {input}/>
    </Fragment>
  );
}

export default App;
