import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAkpzgsCFV5gzTvY1PYVM4qhdpqB8XYS7M",
    authDomain: "mylist-9aec0.firebaseapp.com",
    databaseURL: "https://mylist-9aec0-default-rtdb.firebaseio.com",
    projectId: "mylist-9aec0",
    storageBucket: "mylist-9aec0.appspot.com",
    messagingSenderId: "94309890663",
    appId: "1:94309890663:web:62215ffd904acfcf8e32c2"
  };

  const app = initializeApp(firebaseConfig)
  
  const auth = getAuth(app)

  export default auth

