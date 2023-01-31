import { useState } from "react";
import classes from "./LongCardItem.module.css";
import PhotoCameraIcon from "../../assets/photoCameraIcon.png";
import LongCardTagDataList from "./LongCardTagDataList";
import { IconButton, createTheme, ThemeProvider, Avatar } from "@mui/material";
import bookmarkIconFlat from "../../assets/BookmarkIconFlat.svg";
import bookmarkIconFill from "../../assets/BookmarkIconFill.svg";
import likeIconFlat from "../../assets/LikeIconFlat.svg";
import likeIconFill from "../../assets/LikeIconFill.svg";

const DUMMY_POST = {
  id: "p1",
  title: "Ditto",
  thumbnail: "",
  contents:
    "Woo woo woo woo ooh Woo woo woo woo Stay in the middle Like you a little Don't want no riddle 말해줘 say it back Oh say it ditto 아침은 너무 멀어 So say it ditto 훌쩍 커버렸어 함께한 기억처럼 널 보는 내 마음은 어느새 여름 지나 가을 기다렸지 all this time Do you want somebody Like I want somebody 날 보고 웃었지만 Do you think about me now yeah All the time yeah All the time I got no time to lose",
  date: "2023-01-07",
  tag: ["ador", "hybe", "python", "google", "삼성", "애플", "페이스북", "갤럭시", "아이패드"],
  user: {
    picture: "",
    username: "뉴진스",
  },
  likeCount: 722,
};

const bookmarkTheme = createTheme({
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: { paddingTop: 0, paddingRight: 0, paddingBottom: 0, paddingLeft: 0, marginRight: 10 },
      },
    },
  },
});

const likeTheme = createTheme({
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: { paddingTop: 0, paddingRight: 0, paddingBottom: 0, paddingLeft: 0 },
      },
    },
  },
});

const LongCardItem = (props) => {
  const [isBookmark, setIsBookmark] = useState(false);
  const [isLike, setIsLike] = useState(false);

  const bookmarkClickHandler = () => {
    setIsBookmark((prevState) => !prevState);
  };

  const likeClickHandler = () => {
    setIsLike((prevState) => !prevState);
  };

  const tagOnClickHandler = (event) => {
    console.log(event.currentTarget.innerText);
  };

  return (
    <li>
      <div className={classes.longcarditem}>
        <div className={classes[`card-text`]}>
          <div className={classes.title}>{DUMMY_POST.title}</div>
          <div className={classes.contents}>{DUMMY_POST.contents}</div>
          <div className={classes.tags}>
            {/* <LongCardTagDataList tagList={DUMMY_POST.tag} onClick={tagOnClickHandler} /> */}
          </div>
          <div className={classes[`icon-user`]}>
            <div className={classes.iconbutton}>
              <ThemeProvider theme={bookmarkTheme}>
                <IconButton onClick={bookmarkClickHandler}>
                  <img src={isBookmark ? bookmarkIconFill : bookmarkIconFlat} />
                </IconButton>
              </ThemeProvider>
              <ThemeProvider theme={likeTheme}>
                <IconButton onClick={likeClickHandler}>
                  <img src={isLike ? likeIconFill : likeIconFlat} />
                </IconButton>
              </ThemeProvider>
              <div className={classes.likecount}>{DUMMY_POST.likeCount}</div>
            </div>
            <div className={classes.user}>
              <Avatar sx={{ width: 20, height: 20 }} />
              {DUMMY_POST.user.username}
            </div>
          </div>
        </div>
        <div className={classes[`card-image`]}>
          <img src={PhotoCameraIcon} />
        </div>
      </div>
    </li>
  );
};

export default LongCardItem;
