import Card from "./UI/Card";
import classes from "./SearchResults.module.css";

const SearchResult = (props) => {
  const data = props.input;

  return (
    <Card>
      {data?.map((item) => {
        const addToListHandler = (type) => {
          console.log(item.id, type);
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
                    addToListHandler("Watching");
                  }}
                >
                  Watching
                </button>
                <button
                  onClick={() => {
                    addToListHandler("Watched");
                  }}
                >
                  Watched
                </button>
                <button
                  onClick={() => {
                    addToListHandler("Plan to Watch");
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
