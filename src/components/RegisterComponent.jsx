import { Alert, Grid, TextField } from "@mui/material";
import ControlledInput from "./controlledInput/ControlledInput";
import PropTypes from "prop-types";
import { Fragment } from "react";

const mustFields = [
  "firstName",
  "lastName",
  "phone",
  "email",
  "password",
  "country",
  "city",
  "street",
  "houseNumber",
];
const RegisterComponent = ({
  item,
  label,
  onChange,
  inputsErrorState,
  inputState,
}) => {
  const isRequired = mustFields.includes(item);
  if (item === "biz") return;
  return (
    <Grid item xs={12} sm={6}>
      <TextField
        name={item}
        required={isRequired}
        fullWidth
        type={item}
        autoFocus={item === "firstName"}
        id={item}
        label={label}
        //value={inputState.item}
        onChange={onChange}
        autoComplete="family-name"
        value={inputState[item] ? inputState[item] : ""}
      />
      {inputsErrorState && inputsErrorState[item] && (
        <Alert severity="warning">
          {inputsErrorState[item].map((error) => (
            <div key={"errors" + error + item}>{error}</div>
          ))}
        </Alert>
      )}
    </Grid>
  );
};

export default RegisterComponent;
