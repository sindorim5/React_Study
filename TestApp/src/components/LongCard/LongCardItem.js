import { useState } from "react";
import classes from "./LongCardItem.module.css";
import LongCardTagDataList from "./LongCardTagDataList";
import { IconButton, createTheme, ThemeProvider, Avatar, colors } from "@mui/material";
import PhotoCameraIcon from "../../assets/photoCameraIcon.png";
import bookmarkIconFlat from "../../assets/BookmarkIconFlat.svg";
import bookmarkIconFill from "../../assets/BookmarkIconFill.svg";
import likeIconFlat from "../../assets/LikeIconFlat.svg";
import likeIconFill from "../../assets/LikeIconFill.svg";
import defaultUserPicture from "../../assets/defaultUserPicture.svg";

const avatarTheme = createTheme({
  components: {
    MuiAvatar: {
      styleOverrides: {
        root: { marginRight: 4 },
      },
    },
  },
});

const LongCardItem = (props) => {
  const [isBookmark, setIsBookmark] = useState(false);
  const [isLike, setIsLike] = useState(false);

  const thumbnail = () => {
    if (props.thumbnail === "") {
      return (
        <div className={classes[`card-image`]} style={{ backgroundColor: "#c9c9c9" }}>
          <img src={PhotoCameraIcon} />
        </div>
      );
    } else {
      return (
        <div className={classes[`card-image`]} style={{ backgroundColor: "#fff" }}>
          <img src={props.thumbnail} />
        </div>
      );
    }
  };

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
          <div className={classes.title}>{props.title}</div>
          <div className={classes.contents}>{props.contents}</div>
          <div className={classes.tags}>
            <LongCardTagDataList tagList={props.tags} onClick={tagOnClickHandler} />
          </div>
          <div className={classes[`icon-user`]}>
            <div className={classes.iconbutton}>
              <IconButton
                onClick={bookmarkClickHandler}
                style={{
                  paddingTop: 0,
                  paddingRight: 0,
                  paddingBottom: 0,
                  paddingLeft: 0,
                  marginRight: 10,
                }}
              >
                <img src={isBookmark ? bookmarkIconFill : bookmarkIconFlat} />
              </IconButton>
              <IconButton
                onClick={likeClickHandler}
                style={{
                  paddingTop: 0,
                  paddingRight: 0,
                  paddingBottom: 0,
                  paddingLeft: 0,
                }}
              >
                <img src={isLike ? likeIconFill : likeIconFlat} />
              </IconButton>
              <div className={classes.likecount}>{props.likeCount}</div>
            </div>
            <div className={classes.user}>
              <ThemeProvider theme={avatarTheme}>
                <Avatar
                  src={props.userpicture === "" ? defaultUserPicture : props.userpicture}
                  sx={{
                    width: 24,
                    height: 24,
                    border: "1px solid lightgray",
                    objectFit: "scale-down",
                  }}
                />
              </ThemeProvider>
              <div className={classes.username}>{props.username}</div>
              <div className={classes.date}>{props.date}</div>
            </div>
          </div>
        </div>
        {thumbnail()}
      </div>
    </li>
  );
};

export default LongCardItem;
