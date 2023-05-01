import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import validateRegisterSchema from "../validation/registerValidation";
import ROUTES from "../routes/ROUTES";
import axios from "axios";
import { toast } from "react-toastify";
import CachedIcon from "@mui/icons-material/Cached";
import RegisterComponent from "../components/RegisterComponent";
import { useSelector } from "react-redux";
import validateProfileSchema from "../validation/profileValidation";
import { Avatar } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
const ProfilePage = () => {
  const [inputState, setInputState] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    phone: "",
    email: "",
    imageUrl: "",
    imageAlt: "",
    state: "",
    country: "",
    city: "",
    street: "",
    houseNumber: "",
    zipCode: "",
    biz: false,
  });
  let joiResponse = validateProfileSchema(inputState);
  const [inputsErrorState, setinputsErrorState] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/users/userInfo");
        let newInputState = {
          ...data,
        };
        if (data.zipCode == null) {
          newInputState.zipCode = "";
        }
        delete newInputState._id;
        delete newInputState.isAdmin;
        delete newInputState.password;
        setInputState(newInputState);
        joiResponse = validateProfileSchema(newInputState);
        setinputsErrorState(joiResponse);

        if (joiResponse) {
          // there was errors = incorrect id
          // navigate("/");
          return;
        }
      } catch {
        toast.error("opps");
      }
    })();
  }, []);
  const handeleBtnClick = async (ev) => {
    try {
      joiResponse = validateProfileSchema(inputState);
      if (joiResponse) {
        return;
      }
      if (inputState.zipCode == "") {
        inputState.zipCode = null;
      }
      await axios.put("/users/userInfo", {
        firstName: inputState.firstName,
        middleName: inputState.middleName,
        lastName: inputState.lastName,
        phone: inputState.phone,
        email: inputState.email,
        imageUrl: inputState.imageUrl,
        imageAlt: inputState.imageAlt,
        state: inputState.state,
        country: inputState.country,
        city: inputState.city,
        street: inputState.street,
        houseNumber: inputState.houseNumber,
        zipCode: inputState.zipCode,
        biz: inputState.biz,
      });
      toast.success("The update was successful You must log in again");
      navigate(ROUTES.LOGIN);
    } catch {
      toast.error("registered user");
    }
  };
  const handleInputChange = (ev) => {
    let newInputState = JSON.parse(JSON.stringify(inputState));
    newInputState[ev.target.id] = ev.target.value;
    setInputState(newInputState);
    joiResponse = validateProfileSchema(inputState);
    setinputsErrorState(joiResponse);
  };
  const handleBizChange = (ev) => {
    let newInputState = JSON.parse(JSON.stringify(inputState));
    newInputState["biz"] = ev.target.checked;
    setInputState(newInputState);
  };

  const keys = Object.keys(inputState);
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <EditIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Profile
        </Typography>
        <Box component="div" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            {keys.map((key) => (
              <RegisterComponent
                item={key}
                label={key}
                inputState={inputState}
                onChange={handleInputChange}
                onClick={handleInputChange}
                inputsErrorState={inputsErrorState}
                key={key}
              />
            ))}
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    id="biz"
                    checked={inputState.biz}
                    color="primary"
                    onClick={handleBizChange}
                  />
                }
                label="Signup as business."
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                fullWidth
                sx={{ mt: 1, mb: 1 }}
                color="primary"
                href={ROUTES.HOME}
              >
                CANCEL
              </Button>
            </Grid>

            <Grid item xs={6}>
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 1, mb: 1 }}
                {...(!joiResponse ? { disabled: false } : { disabled: true })}
                onClick={handeleBtnClick}
              >
                SUBMIT
              </Button>
            </Grid>
          </Grid>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to={ROUTES.LOGIN}>
                <Typography variant="body2">
                  Already have an account? Sign in
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
export default ProfilePage;
