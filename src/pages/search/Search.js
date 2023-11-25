import React, { useState } from "react";
import NavBar from "../components/NavBar";
import SearchForm from "./SearchForm";
import SearchList from "./SearchList";

const Search = () => {
  //Khai báo
  const [results, setResults] = useState([]);

  //Gọi hàm submit khi nhấn search
  const onSubmitSearch = (results) => {
    setResults(results);
  };

  return (
    <div className="app">
      <NavBar />
      <SearchForm onSubmitSearch={onSubmitSearch} />
      <SearchList results={results} />
    </div>
  );
};

export default Search;
