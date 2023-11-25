import React from "react";
import ReactDOM from "react-dom";

const Movie = (props) => {
  const {
    name,
    vote_average: vote,
    first_air_date: releaseDate,
    overview,
    original_title,
  } = props.dataMovie;

  const keyMovie =
    props.keyMovie &&
    props.keyMovie.filter((value) => value.type === "Teaser") &&
    props.keyMovie.filter((value) => value.type === "Trailer");

  return (
    <>
      <div className="grid grid-cols-2 text-white w-full ">
        <div className="w-full px-10">
          <div className="pb-5 border-b-2 text-4xl font-bold">
            {keyMovie && keyMovie.length !== 0 && <p>{keyMovie[0].name}</p>}
            {keyMovie && keyMovie.length === 0 && <p>{name}</p>}
          </div>
          <div className="mb-5 pt-5 font-bold">
            {releaseDate && <p>{`ReleaseDate: ${releaseDate}`}</p>}
            {!releaseDate && keyMovie && keyMovie.length !== 0 && (
              <p>{`ReleaseDate: ${keyMovie[0].published_at.slice(0, 10)}`}</p>
            )}

            <p>{`Vote: ${vote}/10`}</p>
          </div>
          <div>
            <p className="text-sm">{overview}</p>
          </div>
        </div>
        <div className="pr-5">
          {keyMovie && keyMovie.length !== 0 && (
            <iframe
              title="m1"
              width="100%"
              height="400"
              src={`https://www.youtube.com/embed/${keyMovie[0].key}`}
            ></iframe>
          )}

          {keyMovie && keyMovie.length === 0 && (
            <img
              alt="replaceAssets"
              className="object-cover"
              title={name}
              src={`https://image.tmdb.org/t/p/original/${props.dataMovie.backdrop_path}`}
            ></img>
          )}
        </div>
      </div>
    </>
  );
};

const MovieDetail = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Movie keyMovie={props.keyMovie} dataMovie={props.dataMovie} />,
        document.getElementById(`movie-list_${props.index}`)
      )}
    </>
  );
};

export default MovieDetail;
