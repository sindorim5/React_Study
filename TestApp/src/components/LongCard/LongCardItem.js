import classes from "./LongCardItem.module.css";
import PhotoCameraIcon from "../../assets/photoCameraIcon.png";

const LongCardItem = (props) => {
  return (
    <li>
      <div className={classes.longcarditem}>
        <div>
          <h1>테스트</h1>
        </div>
        <div className={classes[`card-image`]}>
          <img src={PhotoCameraIcon} />
        </div>
      </div>
    </li>
  );
};

export default LongCardItem;
