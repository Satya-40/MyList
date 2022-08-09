import Card from "./UI/Card";
import classes from "./SearchResults.module.css";
import auth from "../FirebaseConfig";
import {  useEffect, useState } from "react";


const SearchResult = (props) => {
  const data = props.input;
  const [user, setUser] = useState({})

  const change = () =>  {
      auth.onAuthStateChanged((user)=>{
        setUser(user)
      })
    }

    useEffect(()=>{change()},[user])

  return (
    
    <Card>
      {data?.map((item) => {
        const AddToListHandler = async (type) => {
          if (user) {
          console.log(user.email, item.id, type);
          const send = await fetch(`https://mylist-9aec0-default-rtdb.firebaseio.com/list/${user.uid}.json`,{
            method:'POST',
            body: JSON.stringify({
              id: (item.id),
              stage: (type),
              }),
              headers:{
                'Content-Type':'application/json'
              }
          })
          const result = send.json()
          console.log(result)
          } else {
            console.log('Please log in to use add items to your list')
          }

        };
        return (
          <li key={item.id}>
            {" "}
            <img
              src={`${item.volumeInfo.imageLinks?.smallThumbnail}`}
              alt={item.title}
            />{" "}
            <p>{item.volumeInfo.title}</p>
            <div className={classes.dropdown}>
              <div className={classes.dropbtn}>Add to List</div>
              <div className={classes["dropdown-content"]}>
                <button
                  onClick={() => {
                    AddToListHandler("Watching");
                  }}
                >
                  Watching
                </button>
                <button
                  onClick={() => {
                    AddToListHandler("Watched");
                  }}
                >
                  Watched
                </button>
                <button
                  onClick={() => {
                    AddToListHandler("Plan to Watch");
                  }}
                >
                  Plan to Watch
                </button>
              </div>
            </div>
          </li>
        );
      })}
    </Card>
  );
};

export default SearchResult;
