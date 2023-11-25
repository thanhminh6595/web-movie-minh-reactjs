import React, { useState, useEffect } from "react";
import classes from "./NavBar.module.css";

const NavBar = (props) => {
  const [isScroll, setIsScroll] = useState(false);

  //sử dụng cho lần tải trang đầu tiên
  useEffect(() => {
    //Khai báo hàm xử lý sự kiện scroll
    const handleScroll = (event) => {
      window.scrollY >= 100 ? setIsScroll(true) : setIsScroll(false);
    };

    //bắt sự kiện scroll
    window.addEventListener("scroll", handleScroll);
  }, []);

  //Chuyển trang đến search
  const clickSearchHandler = (event) => {
    window.location.href = "./search";
  };

  //Chuyển trang đến home
  const clickBrowseHandler = (event) => {
    window.location.href = "./";
  };

  //Thay đổi css khi scroll >100px
  const classScroll = isScroll ? "scroll" : "";

  return (
    <div
      className={`fixed z-30 bg-transparent w-full delay-0 duration-700 ease-out px-5 flex items-center justify-between py-4 ${classes[classScroll]}`}
    >
      <h1
        className="font-bold text-2xl text-red-600 cursor-pointer"
        onClick={clickBrowseHandler}
      >
        Movie App
      </h1>
      <div className="cursor-pointer" onClick={clickSearchHandler}>
        <svg
          className="svg-inline--fa fa-search  w-6"
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
      </div>
    </div>
  );
};

export default NavBar;
