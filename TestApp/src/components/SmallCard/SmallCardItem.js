import { useState } from "react";
import { IconButton, createTheme, ThemeProvider, Avatar } from "@mui/material";
import classes from "./SmallCardItem.module.css";
import bookmarkIconFlat from "../../assets/BookmarkIconFlat.svg";
import bookmarkIconFill from "../../assets/BookmarkIconFill.svg";
import likeIconFlat from "../../assets/LikeIconFlat.svg";
import likeIconFill from "../../assets/LikeIconFill.svg";
import PhotoCameraIcon from "../../assets/photoCameraIcon.png";
import defaultUserProfilePic from "../../assets/defaultUserProfilePic.svg";

const avatarTheme = createTheme({
  components: {
    MuiAvatar: {
      styleOverrides: {
        root: { marginRight: 4 },
      },
    },
  },
});

const SmallCardItem = (props) => {
  const [isBookmark, setIsBookmark] = useState(false);
  const [isLike, setIsLike] = useState(false);

  const bookmarkClickHandler = () => {
    setIsBookmark((prevState) => !prevState);
  };

  const likeClickHandler = () => {
    setIsLike((prevState) => !prevState);
  };

  const thumbnail = () => {
    if (props.thumbnail === "") {
      return (
        <div className={classes[`smallcard-image`]} style={{}}>
          <img src={PhotoCameraIcon} />
        </div>
      );
    } else {
      return (
        <div className={classes[`smallcard-image`]} style={{}}>
          <img src={props.thumbnail} />
        </div>
      );
    }
  };

  return (
    <li>
      <div className={classes.smallcarditem}>
        {thumbnail()}
        <div className={classes[`smallcard-text-contents`]}>
          <div className={classes.title}>{props.title}</div>
          <div className={classes.contents}>{props.contents}</div>
          <div className={classes[`icons-div`]}>
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
            <div className={classes.like}>
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
              <div className={classes[`like-count`]}>12</div>
            </div>
          </div>
        </div>
        <div className={classes["smallcard-lower-contents"]}>
          <ThemeProvider theme={avatarTheme}>
            <Avatar
              src={props.userpicture === "" ? defaultUserProfilePic : props.userpicture}
              sx={{
                width: 24,
                height: 24,
                border: "1px solid lightgray",
                objectFit: "scale-down",
              }}
            />
          </ThemeProvider>
          <span className={classes.username}>{props.username}</span>
          <span className={classes.date}>{props.date}</span>
        </div>
      </div>
    </li>
  );
};

export default SmallCardItem;
