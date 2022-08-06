import { Fragment,  useCallback,    useState } from 'react';
import './App.css';
import Login from './Components/Login';
import SearchBar from './Components/SearchBar';
import SearchResult from './Components/SearchResults';
import NavBar from './Components/UI/NavBar';

function App() {
  const [input, setInput] = useState([])
  const [loginClick, setLoginClick] = useState(false)
  

  const setInputHandler = data => {
    setInput(data)
  }

  const loginHandler = useCallback(async(loginState) => {
    setLoginClick(loginState);
  },[]);

  return (
    <Fragment>
        {loginClick && <Login/>}
        <NavBar onLogin={loginHandler} />
        <SearchBar setData={setInputHandler} />
        <SearchResult input = {input}/>
    </Fragment>
  );
}

export default App;
