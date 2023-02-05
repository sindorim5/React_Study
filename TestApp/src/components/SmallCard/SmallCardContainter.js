import React, { useState, useEffect } from "react";
import classes from "./SmallCardContainter.module.css";

const SmallCardContainer = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const fetchMoreData = () => {
    setIsLoading(true);
    console.log("fetch!");
    setTimeout(() => {
      console.log("Loading...");
    }, 500);
    setIsLoading(false);
  };

  // 스크롤 이벤트 핸들러
  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight && isLoading === false) {
      // 페이지 끝에 도달하면 추가 데이터를 받아온다
      fetchMoreData();
    }
  };

  useEffect(() => {
    // scroll event listener 등록
    window.addEventListener("scroll", handleScroll);
    return () => {
      // scroll event listener 해제
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return <div className={classes.smallcard}>{props.children}</div>;
};

export default SmallCardContainer;
