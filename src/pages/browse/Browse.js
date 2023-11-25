import React from "react";
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import MovieList from "../components/MovieList";
import useHttps from "../Hooks/use-https";

function Browse() {
  //Khai báo biến từ hooks
  const {
    banner,
    originals,
    isLoading,
    trending,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  } = useHttps();

  return (
    <div className="app">
      <NavBar />
      {/* loading... khi đang chờ dữ liệu phản hồi về */}
      {isLoading && (
        <h1 className="font-bold text-4xl text-white text-center absolute top-1/2 left-1/2 -translate-x-1/2">
          Loading...
        </h1>
      )}
      {!isLoading && banner && <Banner banner={banner} />}
      {!isLoading && (
        <MovieList
          originals={originals}
          trending={trending}
          topRated={topRated}
          actionMovies={actionMovies}
          comedyMovies={comedyMovies}
          horrorMovies={horrorMovies}
          romanceMovies={romanceMovies}
          documentaries={documentaries}
        />
      )}
    </div>
  );
}

export default Browse;
