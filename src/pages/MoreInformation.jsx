import { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import ROUTES from "../routes/ROUTES";
import validateEditSchema, {
  validateEditCardParamsSchema,
} from "../validation/editValidation";
import { CircularProgress } from "@mui/material";
import atom from "../logo.svg";
import { toast } from "react-toastify";

const MoreInformationPage = () => {
  const { id } = useParams();

  const [inputState, setInputState] = useState(null);

  const [inputsErrorsState, setInputsErrorsState] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const errors = validateEditCardParamsSchema({ id });
        if (errors) {
          // there was errors = incorrect id
          navigate("/");
          return;
        }
        const { data } = await axios.get("/cards/card/" + id);
        let newInputState = {
          ...data,
        };
        if (data.image && data.image.url) {
          newInputState.url = data.image.url;
        } else {
          newInputState.url = "";
        }
        if (data.image && data.image.alt) {
          newInputState.alt = data.image.alt;
        } else {
          newInputState.alt = "";
        }
        delete newInputState.image;
        delete newInputState.likes;
        delete newInputState._id;
        delete newInputState.user_id;
        delete newInputState.bizNumber;
        delete newInputState.createdAt;
        delete newInputState.__v;

        setInputState(newInputState);
      } catch (err) {
        console.log("error from axios", err);
      }
    })();
  }, [id]);
  const handleCancelBtnClick = (ev) => {
    navigate(ROUTES.HOME);
  };
  if (!inputState) {
    return <CircularProgress />;
  }
  const newInputState = Object.keys(inputState).map((key) => {
    return { [key]: inputState[key] };
  });

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <ContactEmergencyIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          More Information
        </Typography>
        <Box
          component="img"
          sx={{
            height: 233,
            width: 350,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          alt={inputState.alt ? inputState.alt : ""}
          src={inputState.url ? inputState.url : atom}
        />
        <Box component="div" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            {/* newInputState.map */}
            <Grid item xs={12}>
              <Typography>
                Url: <br></br>
                {inputState.url ? inputState.url : ""}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>
                Title:<br></br> {inputState.title ? inputState.title : ""}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>
                SubTiTle:<br></br>
                {inputState.subTitle ? inputState.subTitle : ""}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>
                Description:<br></br>
                {inputState.description ? inputState.description : ""}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>
                Alt:<br></br>
                {inputState.alt ? inputState.alt : ""}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>
                Phone:<br></br>
                {inputState.phone ? inputState.phone : ""}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>
                State:<br></br>
                {inputState.state ? inputState.state : ""}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>
                Country:<br></br>
                {inputState.country ? inputState.country : ""}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>
                City:<br></br>
                {inputState.city ? inputState.city : ""}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>
                Street:<br></br>
                {inputState.street ? inputState.street : ""}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>
                houseNumber:<br></br>
                {inputState.houseNumber ? inputState.houseNumber : ""}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              {" "}
              <Typography>
                zipCode:<br></br>
                {inputState.zipCode ? inputState.zipCode : ""}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              {" "}
              <Typography>
                Email:<br></br>
                {inputState.email ? inputState.email : ""}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>
                Web:<br></br> {inputState.web ? inputState.web : ""}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleCancelBtnClick}
              >
                Return to HomePage
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
export default MoreInformationPage;
