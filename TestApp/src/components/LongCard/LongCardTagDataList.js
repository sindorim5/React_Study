import Chip from "@mui/material/Chip";
import { styled } from "@mui/material/styles";
import { Fragment } from "react";

const LongCardTagList = styled("li")(({ theme }) => ({
  margin: theme.spacing(0, 0.5, 0, 0),
}));

const LongCardTagDataList = (props) => {
  const TagDataItem = [];

  const maxIndex = props.tagList.length < 5 ? props.tagList.length : 5;

  const bgColorList = ["#f9f5fc", "#f5f5fc", "#fcf5eb", "#f5fceb", "#fcfceb"];
  const colorList = ["#381E72", "#013ab1", "#622100", "#1c663c", "#754502"];

  for (var i = 0; i < maxIndex; i++) {
    TagDataItem.push(
      <LongCardTagList key={i}>
        <Chip
          variant="outlined"
          label={props.tagList[i]}
          onClick={props.onClick}
          size="small"
          sx={{
            bgcolor: bgColorList[i],
            color: colorList[i],
          }}
          value={props.tagList[i]}
        />
      </LongCardTagList>
    );
  }

  console.log(TagDataItem);

  return (
    <Fragment>
      <ul>{TagDataItem}</ul>
    </Fragment>
  );
};

export default LongCardTagDataList;
