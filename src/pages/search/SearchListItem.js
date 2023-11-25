import React from "react";

const SearchListItem = (props) => {
  return (
    <div className="hover:scale-105 duration-300">
      <img
        className="w-full h-auto object-cover"
        src={`https://image.tmdb.org/t/p/original${props.dataMovie.poster_path}`}
        alt={props.dataMovie.title}
      />
    </div>
  );
};

export default SearchListItem;
