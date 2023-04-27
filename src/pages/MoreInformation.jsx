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

import { CircularProgress } from "@mui/material";
import atom from "../logo.svg";

import { toast } from "react-toastify";
import InformationComponent from "../components/MoreinformationComponent";
import { object } from "joi";

const MoreInformationPage = () => {
  const { id } = useParams();
  const [inputState, setInputState] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      try {
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

        delete newInputState.__v;

        setInputState(newInputState);
      } catch (err) {
        console.log("error from axios", err);
      }

      console.log(inputState);
    })();
  }, [id]);
  const handleCancelBtnClick = (ev) => {
    navigate(ROUTES.HOME);
  };
  if (!inputState) {
    return <CircularProgress />;
  }
  let keys = Object.keys(inputState);
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
            {keys.map((item) => (
              <InformationComponent
                item={item}
                inputState={inputState}
                key={item}
              />
            ))}

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
