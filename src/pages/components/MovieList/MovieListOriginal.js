import React from "react";
import MovieDetail from "../MovieDetail";
import useList from "../../Hooks/use-list";

const MovieListOriginal = (props) => {
  const { isClicked, dataMovie, key, movieItem } = useList(
    props.categories,
    "poster_path",
    "",
    true
  );

  return (
    <div className="my-10" id={`movie-list_${props.index}`}>
      {/* className */}
      <ul className="grid gap-2 grid-cols-10 mr-2 px-10 my-10 relative">
        {movieItem}

        {/* Kiểm tra nếu click vào ảnh thì sẽ hiện movie và ngược lại */}
        {isClicked && (
          <MovieDetail
            keyMovie={key}
            dataMovie={dataMovie}
            index={props.index}
          />
        )}
      </ul>
    </div>
  );
};

export default MovieListOriginal;
