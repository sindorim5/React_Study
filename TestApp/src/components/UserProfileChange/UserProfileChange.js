import React from "react";
import classes from "./UserProfileChange.module.css";
import InputOneLine from "./InputOneLine";

const UserProfileChange = (props) => {
  const nickNameOnChangeHandler = () => {
    console.log("hi");
  };

  return (
    <form className={classes.userprofile}>
      <div className={classes.header}>
        <img src={props.imageUrl} className={classes.img} />
        {props.userName}
      </div>
      <div className={classes.userData}>
        <InputOneLine
          label={"Nickname"}
          defaultValue={props.nickName}
          onChange={nickNameOnChangeHandler}
        />
      </div>
    </form>
  );
};

export default UserProfileChange;
