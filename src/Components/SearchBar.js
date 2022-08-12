import React, { useCallback, useEffect, useState } from "react";
import classes from "./SearchBar.module.css";

const SearchBar = (props) => {
  const [demand, setDemand] = useState("");
  const [finalResultsData, setFinalResultData] = useState([]);
  const [linkForGet, setLinkForGet] = useState("");

  var buffer = "";

  for (var i in demand) {
    if (demand[i - 1] === " " && demand[i] === " ") {
      continue;
    }
    buffer += demand[i];
  }

  useEffect(() => {
    setLinkForGet(
      `https://www.googleapis.com/books/v1/volumes?q=${buffer}`
    );
  }, [buffer]);

  const inputChangeHandler = (event) => {
    setDemand(event.target.value);
  };

  const getData = useCallback(async () => {
    const result = await fetch(`${linkForGet}`);
    const finalResults = await result.json();
    setFinalResultData(finalResults.items);
  },[linkForGet]);

  useEffect(() => {
    getData();
  }, [getData]);

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    console.log(buffer);
    console.log(finalResultsData);
    console.log(linkForGet);
    props.setData(finalResultsData);
  };

  return (
    <div>
      <form onSubmit={formSubmitHandler} className={classes.input}>
        <input type="text" onChange={inputChangeHandler} />
      </form>
    </div>
  );
};

export default SearchBar;
