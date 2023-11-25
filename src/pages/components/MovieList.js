import React from "react";
import MovieListCategory from "./MovieList/MovieListCategory";
import MovieListOriginal from "./MovieList/MovieListOriginal";

const MovieList = ({
  originals,
  trending,
  topRated,
  actionMovies,
  comedyMovies,
  horrorMovies,
  romanceMovies,
  documentaries,
}) => {
  return (
    <>
      {originals && <MovieListOriginal index={0} categories={originals} />}
      {trending && (
        <MovieListCategory
          categories={trending}
          categoryHeader="Xu hướng"
          index={1}
        />
      )}
      {topRated && (
        <MovieListCategory
          categories={topRated}
          categoryHeader="Xếp Hạng Cao"
          index={2}
        />
      )}
      {actionMovies && (
        <MovieListCategory
          index={3}
          categories={actionMovies}
          categoryHeader="Hành Động"
        />
      )}
      {comedyMovies && (
        <MovieListCategory
          index={4}
          categories={comedyMovies}
          categoryHeader="Hài"
        />
      )}
      {horrorMovies && (
        <MovieListCategory
          index={5}
          categories={horrorMovies}
          categoryHeader="Kinh Dị"
        />
      )}
      {romanceMovies && (
        <MovieListCategory
          index={6}
          categories={romanceMovies}
          categoryHeader="Tình Cảm"
        />
      )}
      {documentaries && (
        <MovieListCategory
          index={7}
          categories={documentaries}
          categoryHeader="Tài Liệu"
        />
      )}
    </>
  );
};

export default MovieList;
