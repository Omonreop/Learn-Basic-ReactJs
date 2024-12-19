import { useState } from "react";

function Search(props) {
  const [search, setSearch] = useState("");

  const onSearchChange = (event) => {
    props.onSearchChange(search);
  };

  const searchKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearchChange();
    }
  };

  return (
    <>
      <div>
        Cari artikel :{" "}
        <input
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={searchKeyDown}
        ></input>
        <button onClick={onSearchChange}>Cari</button>
      </div>
      <small>
        Ditemukan {props.totalPosts} data dengan pencarian kata {search}
      </small>
    </>
  );
}

export default Search;
