import { Alert, Grid, TextField, Typography } from "@mui/material";
import ControlledInput from "./controlledInput/ControlledInput";
import PropTypes from "prop-types";
import { Fragment } from "react";

const InformationComponent = ({ item, inputState, key }) => {
  return (
    <Grid item xs={12}>
      <Typography>
        <h4>{item}:</h4>
        {inputState.item ? inputState.item : ""}
        key={key}
      </Typography>
    </Grid>
  );
};

export default InformationComponent;
