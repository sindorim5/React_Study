import { useState, useRef } from "react";
import classes from "./UserProfileChangeForm.module.css";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import TagsInput from "./TagInput";

const isEmpty = (value) => value.trim() === "";
const isOverTenChars = (value) => value.trim().length > 10;

const UserProfileChangeForm = (props) => {
  console.log(props);
  const [nickName, setNickName] = useState(props.nickName);
  const [nickNameIsEmpty, setNickNameIsEmpty] = useState(false);
  const [nickNameIsOverTenChars, setNickNameIsOverTenChars] = useState(false);

  const [description, setDescription] = useState(props.description);
  // description(자기소개) 글자 수
  const [count, setCount] = useState(props.description.length);

  const [department, setDepartment] = useState(props.department);
  const [skill, setSkill] = useState([props.skill]);

  const nickNameInputRef = useRef();
  const descriptionInputRef = useRef();

  const nickNameOnChangeHandler = (event) => {
    setNickName(event.target.value);
    setNickNameIsEmpty(isEmpty(event.target.value));
    setNickNameIsOverTenChars(isOverTenChars(event.target.value));
  };

  const descriptionOnChangeHandler = (event) => {
    setDescription(event.target.value);
    setCount(event.target.value.length);
  };

  const departmentOnChangeHandler = (value) => {
    console.log("department");
    console.log(value);
    setDepartment([...value]);
  };

  const skillOnChangeHandler = (value) => {
    setSkill([...value]);
  };

  const confirmHandler = (event) => {
    event.preventDefault();
    console.log("submit");

    const enteredNickName = nickNameInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    console.log(enteredNickName);
    console.log(enteredDescription);
    console.log(department);
    console.log(skill);

    const enteredNickNameIsValid = !nickNameIsEmpty || !nickNameIsOverTenChars;

    if (!enteredNickNameIsValid) {
      return;
    }

    props.onConfirm({
      nickName: nickName,
      description: description,
      department: department,
      skill: skill,
    });
  };

  const skillTagList = [
    { name: "Python", id: 0 },
    { name: "Java", id: 1 },
    { name: "C++", id: 2 },
    { name: "C", id: 3 },
    { name: "JavaScript", id: 4 },
    { name: "React", id: 5 },
  ];

  const departmentTagList = [
    { name: "SSAFY", id: 0 },
    { name: "삼성", id: 1 },
    { name: "네이버", id: 2 },
    { name: "카카오", id: 3 },
    { name: "구글", id: 4 },
    { name: "애플", id: 5 },
  ];

  return (
    <form className={classes.userprofile} onSubmit={confirmHandler}>
      <div className={classes.header}>
        <img src={props.imageUrl} className={classes.img} />
        {props.userName}
      </div>
      <div className={classes.userdata}>
        <div className={classes.nickname}>
          <FormControl sx={{ width: "100%" }}>
            <TextField
              id="filled-basic"
              error={nickNameIsEmpty || nickNameIsOverTenChars}
              helperText={
                nickNameIsEmpty
                  ? "닉네임을 입력해주세요"
                  : nickNameIsOverTenChars
                  ? "닉네임은 10자 이하입니다"
                  : ""
              }
              label="Nickname"
              variant="filled"
              defaultValue={nickName}
              inputRef={nickNameInputRef}
              onChange={nickNameOnChangeHandler}
            />
          </FormControl>
        </div>
        <div className={classes.description}>
          <FormControl sx={{ width: "100%" }}>
            <TextField
              id="filled-multiline-static"
              label="자기소개"
              multiline
              rows={5}
              defaultValue={description}
              variant="filled"
              inputProps={{ maxLength: 150 }}
              helperText={`${count}/150`}
              inputRef={descriptionInputRef}
              onChange={descriptionOnChangeHandler}
            />
          </FormControl>
        </div>
        <div className={classes.skill}>
          <FormControl sx={{ width: "100%" }}>
            <TagsInput
              tagList={departmentTagList}
              label={"소속"}
              onChange={departmentOnChangeHandler}
              initialValue={department}
            />
          </FormControl>
        </div>
        <div className={classes.skill}>
          <FormControl sx={{ width: "100%" }}>
            <TagsInput
              tagList={skillTagList}
              label={"관심 기술"}
              onChange={skillOnChangeHandler}
              initialValue={skill}
            />
          </FormControl>
        </div>
        <div className={classes.button}>
          <Button type="submit" variant="contained">
            저장
          </Button>
        </div>
      </div>
    </form>
  );
};

export default UserProfileChangeForm;
