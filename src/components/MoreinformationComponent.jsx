import { Alert, Box, Card, Grid, TextField, Typography } from "@mui/material";
import ControlledInput from "./controlledInput/ControlledInput";
import PropTypes from "prop-types";
import { Fragment, useEffect } from "react";

const InformationComponent = ({ item, inputState }) => {
  return (
    <Box sx={{ justifyContent: "center" }}>
      <Typography variant="h6">
        {item}:<br></br>
      </Typography>
      <Typography variant="body1" style={{ wordBreak: "break-all" }}>
        {inputState[item] ? inputState[item] : ""}
        <br />
        <br />
      </Typography>
    </Box>
  );
};

export default InformationComponent;
