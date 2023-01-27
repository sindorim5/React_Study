import { Fragment, useState, useEffect } from "react";
import classes from "./UserProfileChangeForm.module.css";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import TagsInput from "./TagInput";

const UserProfileChangeForm = (props) => {
  const [count, setCount] = useState(props.description.length);

  const nickNameOnChangeHandler = () => {
    console.log("hi");
  };

  const descriptionOnChangeHandler = (event) => {
    setCount(event.target.value.length);
  };

  function handleSelecetedTags(items) {
    console.log(items);
  }

  return (
    <form className={classes.userprofile}>
      <div className={classes.header}>
        <img src={props.imageUrl} className={classes.img} />
        {props.userName}
      </div>
      <div className={classes.userdata}>
        <div className={classes.nickname}>
          <FormControl sx={{ width: "60%" }}>
            <TextField
              id="filled-basic"
              label="Nickname"
              variant="filled"
              defaultValue={props.nickName}
              onChange={nickNameOnChangeHandler}
            />
          </FormControl>
        </div>
        <div className={classes.description}>
          <FormControl sx={{ width: "60%" }}>
            <TextField
              id="filled-multiline-static"
              label="자기소개"
              multiline
              rows={5}
              defaultValue={props.description}
              variant="filled"
              inputProps={{ maxLength: 150 }}
              helperText={`${count}/150`}
              onChange={descriptionOnChangeHandler}
            />
          </FormControl>
        </div>
        <div className={classes.skill}>
          <TagsInput
            selectedTags={handleSelecetedTags}
            fullWidth
            variant="outlined"
            id="tags"
            name="tags"
            placeholder="add Tags"
            label="tags"
          />
        </div>
      </div>
    </form>
  );
};

export default UserProfileChangeForm;
