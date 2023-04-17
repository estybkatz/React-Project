// import {
//   Card,
//   CardActionArea,
//   CardMedia,
//   CardHeader,
//   CardContent,
//   Typography,
//   CardActions,
//   Button,
// } from "@mui/material";
import { Alert, Grid, TextField } from "@mui/material";
import ControlledInput from "./controlledInput/ControlledInput";
import PropTypes from "prop-types";
import { Fragment } from "react";

const RegisterComponent = ({
  key,
  name,
  id,
  label,
  required,
  autoFocus,
  value,
  inputsErrorsState,
  onChange,
}) => {
  // const handleDeleteBtnClick = () => {
  //   console.log("id", id);
  //   onDelete(id);
  // };
  // const handleEditBtnClick = () => {
  //   onEdit(id);
  // };
  return (
    <Grid item xs={12} sm={6}>
      <TextField
        id={id}
        label={label}
        name={name}
        value={value}
        //onChange={handleInputChange}
        onChange={onChange}
        key={key}
      />
    </Grid>
  );
};

// RegisterComponent.propTypes = {
//   id: PropTypes.string,
//   img: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   subTitle: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   onDelete: PropTypes.func,
//   onEdit: PropTypes.func,
//   canEdit: PropTypes.bool,
// };

// RegisterComponent.defaultProps = {
//   img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
//   subTitle: "",
//   canEdit: false,
// };

export default RegisterComponent;
