import classes from "./SmallCardItem.module.css";
import bookmarkIcon from "../../assets/bookmarkIcon.svg";
import flatColorLikeIcon from "../../assets/flatColorLikeIcon.svg";
import defaultUserPicture from "../../assets/defaultUserPicture.svg";

const SmallCardItem = (props) => {
  return (
    <li className={classes.smallcarditem}>
      <div className={classes["smallcard-image"]}></div>
      <div className={classes["smallcard-text-contents"]}>
        <div className={classes.title}>{props.title}</div>
        <p className={classes.contents}>{props.contents}</p>
        <div className={classes["icons-div"]}>
          <img src={bookmarkIcon} />
          <span>
            <img src={flatColorLikeIcon} />
            <span className={classes["like-count"]}>12</span>
          </span>
        </div>
      </div>
      <hr className={classes.line} />
      <div className={classes["smallcard-lower-contents"]}>
        <img
          className={classes["user-picture"]}
          src={props.userpicture === "" ? defaultUserPicture : props.userpicture}
        />
        <span className={classes.username}>{props.username}</span>
        <span className={classes.date}>{props.date}</span>
      </div>
    </li>
  );
};

export default SmallCardItem;
