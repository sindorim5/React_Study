import { useState, useRef, useEffect } from "react";
import classes from "./UserProfileChangeForm.module.css";
import { Avatar, Button, TextField, FormControl, IconButton } from "@mui/material";
import axios from "axios";
import TagsInput from "./TagInput";
import PhotoCameraIcon from "../../assets/photoCameraIcon.png";

const isUnderTwoChars = (value) => value.trim().length < 2;
const isOverTenChars = (value) => value.trim().length > 10;
const isDuplicated = (value) => {
  const userInput = value.trim();
  const url = "http://i8d210.p.ssafy.io:8081/user/nickname/" + userInput;
  console.log(url);

  const data = axios
    .get(url)
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
      return { data: false };
    });
  const result = data.data;

  return result;
};

const UserProfileChangeForm = (props) => {
  const [formIsValid, setFormIsValid] = useState(true);

  // 프로필 사진
  const [imageUrl, setImageUrl] = useState(props.imageUrl);
  const [isHover, setIsHover] = useState(false);
  // 프로필 사진 업로드
  const fileInput = useRef(null);
  const fileChangeHandler = (event) => {
    if (!event.target.files) {
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        console.log(reader.result);
        setImageUrl(reader.result);
      }
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  const avatarOnMouseToggleHandler = () => {
    setIsHover((prevState) => !prevState);
  };

  // 닉네임
  const [nickName, setNickName] = useState(props.nickName);
  const [nickNameIsUnderTwoChars, setNickNameIsUnderTwoChars] = useState(false);
  const [nickNameIsOverTenChars, setNickNameIsOverTenChars] = useState(false);
  const [nickNameIsDuplicated, setNickNameIsDuplicated] = useState(false);

  const [description, setDescription] = useState(props.description);
  // description(자기소개) 글자 수
  const [count, setCount] = useState(props.description.length);

  // 소속
  const myDepartmentObj = [...props.department];
  const myDepartmentList = myDepartmentObj.map((department) => department.name);
  const [myDepartment, setMyDepartment] = useState(myDepartmentList);

  // 관심 기술
  const mySkillObj = [...props.skill];
  const mySkillList = mySkillObj.map((skill) => skill.name);
  const [mySkill, setMySkill] = useState(mySkillList);

  const nickNameInputRef = useRef();
  const descriptionInputRef = useRef();

  const nickNameOnChangeHandler = (event) => {
    setNickName(event.target.value);
    setNickNameIsUnderTwoChars(isUnderTwoChars(event.target.value));
    setNickNameIsOverTenChars(isOverTenChars(event.target.value));
  };

  useEffect(() => {
    const identifier = setTimeout(() => {
      setNickNameIsDuplicated(isDuplicated(nickNameInputRef.current.value));

      setFormIsValid(!nickNameIsUnderTwoChars && !nickNameIsOverTenChars && !nickNameIsDuplicated);
      console.log("validation check");
    }, 300);

    return () => {
      console.log("CLEAN UP");
      clearTimeout(identifier);
    };
  }, [nickName, nickNameIsDuplicated, nickNameIsOverTenChars, nickNameIsUnderTwoChars]);

  const descriptionOnChangeHandler = (event) => {
    setDescription(event.target.value);
    setCount(event.target.value.length);
  };

  const departmentOnChangeHandler = (value) => {
    setMyDepartment([...value]);
  };

  const skillOnChangeHandler = (value) => {
    setMySkill([...value]);
  };

  const onCancelClicked = () => {
    console.log("cancel");
  };

  const confirmHandler = (event) => {
    event.preventDefault();
    console.log("submit");

    const enteredNickName = nickNameInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    console.log(enteredNickName);
    console.log(enteredDescription);
    console.log(myDepartment);
    console.log(mySkill);
    console.log(imageUrl);

    const enteredNickNameIsValid = !nickNameIsUnderTwoChars || !nickNameIsOverTenChars;

    if (!enteredNickNameIsValid) {
      return;
    }

    props.onConfirm({
      nickName: nickName,
      description: description,
      department: myDepartment,
      skill: mySkill,
      imageUrl: imageUrl,
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

  const skillTagNameList = skillTagList.map((tag) => tag.name);

  const departmentTagList = [
    { name: "SSAFY", id: 0 },
    { name: "삼성", id: 1 },
    { name: "네이버", id: 2 },
    { name: "카카오", id: 3 },
    { name: "구글", id: 4 },
    { name: "애플", id: 5 },
  ];

  const departmentTagNameList = departmentTagList.map((tag) => tag.name);

  return (
    <form className={classes.userprofile} onSubmit={confirmHandler}>
      <div className={classes.header}>
        <IconButton
          onClick={() => {
            fileInput.current.click();
          }}
          onMouseEnter={avatarOnMouseToggleHandler}
          onMouseLeave={avatarOnMouseToggleHandler}
          className={classes.iconbutton}
        >
          <Avatar
            src={imageUrl || "../../assets/defualtUserProfilePic.svg"}
            sx={{ width: 100, height: 100 }}
            className={classes[`avatar-img`]}
          />
          {isHover && <img src={PhotoCameraIcon} className={classes.camera} />}
          <input
            style={{ display: "none" }}
            type="file"
            accept="image/jpg,image/png,image/jpeg"
            ref={fileInput}
            onChange={fileChangeHandler}
          />
        </IconButton>
        {props.userName}
      </div>
      <div className={classes.userdata}>
        <div className={classes.nickname}>
          <FormControl sx={{ width: "100%" }}>
            <TextField
              id="filled-basic"
              error={nickNameIsUnderTwoChars || nickNameIsOverTenChars}
              helperText={
                nickNameIsUnderTwoChars || nickNameIsOverTenChars
                  ? "닉네임은 2자 이상 10자 이하입니다."
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
              tagList={departmentTagNameList}
              label={"소속"}
              onChange={departmentOnChangeHandler}
              value={myDepartment}
            />
          </FormControl>
        </div>
        <div className={classes.skill}>
          <FormControl sx={{ width: "100%" }}>
            <TagsInput
              tagList={skillTagNameList}
              label={"관심 기술"}
              onChange={skillOnChangeHandler}
              value={mySkill}
            />
          </FormControl>
        </div>
        <div className={classes.button}>
          <Button type="button" variant="contained" sx={{ mr: 2 }} onClick={onCancelClicked}>
            취소
          </Button>
          <Button type="submit" variant="contained" disabled={!formIsValid}>
            저장
          </Button>
        </div>
      </div>
    </form>
  );
};

export default UserProfileChangeForm;
