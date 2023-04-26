import { Alert, Grid, TextField, Typography } from "@mui/material";
import ControlledInput from "./controlledInput/ControlledInput";
import PropTypes from "prop-types";
import { Fragment } from "react";

const InformationComponent = ({ item, inputState }) => {
  return (
    <Grid item xs={12}>
      <Typography>
        {item}:<br></br>
        {inputState[item] ? inputState[item] : ""}
      </Typography>
    </Grid>
  );
};

export default InformationComponent;
