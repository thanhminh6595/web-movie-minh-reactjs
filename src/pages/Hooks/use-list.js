import React, { useState } from "react";
import styles from "../components/MovieList/MovieListCategory.module.css";

const useList = (categories, image_path, overflowCss, isOri) => {
  //Khai báo
  const [isClicked, setIsClicked] = useState(false);
  const [idMovie, setIdMovie] = useState();
  const [dataMovie, setDataMovie] = useState();
  const [key, setKey] = useState();

  //Chỉ hiển thị 10 movie
  const updateCategories = categories.slice(0, 10);

  //Lấy dữ liệu từ api, yêu cầu https lấy VIDEO dựa vào id của movie
  const movieItem = updateCategories.map((category, index) => {
    const fetchYoutube = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${category.id}/videos?api_key=ee30bf8cad3af09970ebff1dff73d61f`
        );

        if (!response.ok) {
          setKey([]);
          throw new Error("Something went wrong!");
        }

        const data = await response.json();

        setKey(() => {
          return data.results;
        });
      } catch (err) {
        console.error(err);
      }
    };

    const clickMovieDetailHandler = () => {
      //Xử lý điều kiện khi click vào ảnh movie, thỏa điều kiện thì sẽ show/ hide movie
      if (category.id === idMovie && isClicked) {
        setIsClicked(false);
        return;
      } else {
        setDataMovie(category);
        setIdMovie(category.id);
        setIsClicked(true);
        fetchYoutube();
      }
    };

    return (
      <li
        key={category[`${image_path}`]}
        className={`${
          isOri ? "" : `w-56 h-48 pr-2 absolute ${styles[`listItem--${index}`]}`
        }`}
      >
        <img
          onClick={clickMovieDetailHandler}
          className={`w-full h-auto object-cover hover:scale-110 duration-200 ${overflowCss}`}
          src={`https://image.tmdb.org/t/p/original${
            category[`${image_path}`]
          }`}
          alt={category.title}
        />
      </li>
    );
  });

  return {
    isClicked,
    idMovie,
    dataMovie,
    key,
    movieItem,
  };
};

export default useList;
