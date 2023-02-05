import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";

const SingleTagInput = (props) => {
  console.log(props);
  return (
    <Autocomplete
      id="tags-filled"
      freeSolo
      options={props.tagList}
      renderInput={(params) => <TextField {...params} variant="filled" label={props.label} />}
      defaultValue={props.defaultValue}
    />
  );
};

export default SingleTagInput;
