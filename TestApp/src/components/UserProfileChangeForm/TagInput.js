import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";

const TagInput = (props) => {
  return (
    <Autocomplete
      multiple
      id="tags-filled"
      options={props.tagList.map((option) => option.name)}
      freeSolo
      renderTags={(tagValue, getTagProps) =>
        tagValue.map((option, index) => (
          <Chip variant="outlined" label={option} {...getTagProps({ index })} size="small" />
        ))
      }
      renderInput={(params) => <TextField {...params} variant="filled" label={props.label} />}
      onChange={(event, value) => props.onChange(value)}
      defaultValue={props.initialValue.name}
    />
  );
};

export default TagInput;
