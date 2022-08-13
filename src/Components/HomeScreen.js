import { useEffect, useState } from "react";
import auth from "../FirebaseConfig";
import Card from "./UI/Card";

const HomeScreen = () => {
  const [result, setResult] = useState([]);
  const [user, setUser] = useState({});

  const change = () => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  };

  useEffect(() => {
    change();
  }, [user]);

  useEffect(() => {
    const getter = async () => {
      const array = await fetch(
        `https://mylist-9aec0-default-rtdb.firebaseio.com/list/${user.uid}.json`
      );
      const arrayData = await array.json();

      const arrayDataMapped = [];

      for (const key in arrayData) {
        const data = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${arrayData[key].id}`);
        const dataJson = await data.json()
        const name = dataJson.items[0].volumeInfo.title
        const image = dataJson.items[0].volumeInfo.imageLinks?.smallThumbnail

        arrayDataMapped.push({
          key:key,
          name:name,
          image:image,
          id: arrayData[key].id,
          stage: arrayData[key].stage,
        });
      }
      setResult(arrayDataMapped);

    };

    getter();
  }, [user?.uid]);

  return (
    <Card>
      {result.map((a)=>{return <li key={a.key}><img src= {a.image} alt='' />  <p>{a.name}</p>  {a.stage}</li>})}
    </Card>
  );
};

export default HomeScreen;
