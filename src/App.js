import { Fragment, useState } from 'react';
import './App.css';
import HomeScreen from './Components/HomeScreen';
import Login from './Components/Login';
import Register from './Components/Register';
import SearchBar from './Components/SearchBar';
import SearchResult from './Components/SearchResults';
import NavBar from './Components/UI/NavBar';


function App() {
  const [input, setInput] = useState([])
  const [loginShower, setLoginShower] = useState(null)
  const [registerShower, setRegisterShower] = useState(null)
  const [showHomeScreen , setShowHomeScreen] = useState(true)
  const [showResults, setShowResults] = useState(false)
  

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

  const hideHomeScreenHandler = () => {
    setShowHomeScreen(true)
    setShowResults(false)
  }

  const showSearchResultsHandler = () => {
    setShowHomeScreen(false)
    setShowResults(true)
  }

  return (
    <Fragment>
        {registerShower && <Register onClose={hideRegisterHandler} onLogin={loginHandler}/>}
        {loginShower && <Login onClose={hideLoginHandler} onRegister={registerHandler}/>}
        <NavBar onLogin={loginHandler} onHome={hideHomeScreenHandler} />
        <SearchBar setData={setInputHandler} onSearch={showSearchResultsHandler}  />
        {showHomeScreen && <HomeScreen/>}
        {showResults && <SearchResult input = {input}/>}
    </Fragment>
  );
}

export default App;
