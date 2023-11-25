import React from "react";
import MovieDetail from "../MovieDetail";
import useList from "../../Hooks/use-list";

const MovieListCategory = (props) => {
  const { isClicked, dataMovie, key, movieItem } = useList(
    props.categories,
    "backdrop_path",
    "overflow-hidden",
    false
  );

  return (
    <div className="my-10" id={`movie-list_${props.index}`}>
      {/* h2 */}
      <h2 className="text-white pl-5 font-bold text-xl">
        {props.categoryHeader}
      </h2>
      {/* className */}
      <ul className="flex flex-nowrap my-10 px-10 relative overflow-auto h-52 w-full ">
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

export default MovieListCategory;
