import React, { useState, useCallback, useEffect } from "react";

const SearchForm = (props) => {
  const [page, setPage] = useState(1);
  const [enteredSearch, setEnteredSearch] = useState("");
  const [enteredSearchIsValid, setEnteredSearchIsValid] = useState(false);
  const [enteredSearchWasFocused, setEnteredSearchWasFocused] = useState(false);

  const enteredSearchIsInValid =
    !enteredSearchIsValid && enteredSearchWasFocused;
  const classInValid = enteredSearchIsInValid
    ? "bg-red-300"
    : "focus:bg-slate-100";

  //Lấy dữ liệu danh sách movie được tìm kiếm theo từ khóa.
  const fetchSearch = useCallback(async (enteredSearch) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${enteredSearch}&include_adult=false&language=en-US&page=${page}&api_key=ee30bf8cad3af09970ebff1dff73d61f`
      );

      if (!response.ok) throw new Error("Something went wrong!");

      const data = await response.json();

      props.onSubmitSearch(data.results);
    } catch (err) {
      console.error(err.message);
    }
  }, []);

  //Lấy dữ liệu danh sách movie mỗi khi hàm fetchSearch thay đổi. Nếu muốn thay đổi khi gõ phím => thêm enteredSearch vào dependence.
  useEffect(() => {
    fetchSearch(enteredSearch);
  }, [fetchSearch]);

  //Hàm thay đổi khi gõ phím
  const changeSearchHandler = (event) => {
    setEnteredSearch(event.target.value);
    if (event.target.value.trim() === "") {
      setEnteredSearchIsValid(false);
    } else {
      setEnteredSearchIsValid(true);
    }
  };

  //Hàm focus
  const blurSearchHandler = (event) => {
    setEnteredSearchWasFocused(true);
  };

  //Gọi hàm submit Search
  const submitSearchHandler = (event) => {
    event.preventDefault();
    if (enteredSearch.trim() === "") {
      setEnteredSearchIsValid(false);
      return;
    } else {
      fetchSearch(enteredSearch);
      // setEnteredSearch("");
    }
  };

  //Gọi hàm reset
  const clickResetHandler = () => {
    setEnteredSearch("");
    setEnteredSearchWasFocused(false);
    setEnteredSearchIsValid(false);
  };

  return (
    <div className="pt-20 mb-10" id="overlay-movie">
      <form
        className="w-1/2 mx-auto h-60 bg-white"
        type="submit"
        onSubmit={submitSearchHandler}
      >
        <div className="border-solid border-blue-400 border-b-2 p-5">
          <div className="flex justify-between items-center h-1/2 mb-4">
            <input
              value={enteredSearch}
              onChange={changeSearchHandler}
              onBlur={blurSearchHandler}
              type="text"
              id="search"
              className={`w-full mr-4 text-lg pl-2 h-10 focus:outline-none border-solid border-{#ccc} border ${classInValid}`}
            />
            <label htmlFor="search" className="">
              <svg
                className="svg-inline--fa fa-search  w-9"
                fill="#ccc"
                aria-hidden="true"
                data-prefix="fas"
                data-icon="search"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
              </svg>
            </label>
          </div>
          {enteredSearchIsInValid && (
            <p className="text-red-700 italic">Please enter your text!</p>
          )}
        </div>

        <div className="p-5 text-right mt-5 mr-4">
          <button
            onClick={clickResetHandler}
            type="button"
            className="bg-white px-4 py-2 mr-3 hover:bg-blue-600 hover:text-white"
          >
            Reset
          </button>
          <button
            className="bg-blue-400 text-white px-4 py-2 hover:bg-blue-600"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
