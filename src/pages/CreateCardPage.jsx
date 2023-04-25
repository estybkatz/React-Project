import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ROUTES from "../routes/ROUTES";
import validateCreateSchema from "../validation/createValidation";
import atom from "../logo.svg";
import { toast } from "react-toastify";
import CachedIcon from "@mui/icons-material/Cached";
import CreateEditComponent from "../components/Navbar/CreateAndEditComponent";

const CreateCardPage = () => {
  const [inputState, setInputState] = useState({
    url: "",
    alt: "",
    title: "",
    subTitle: "",
    description: "",
    phone: "",
    email: "",
    web: "",
    state: "",
    country: "",
    city: "",
    street: "",
    houseNumber: "",
    zipCode: "",
  });
  let joiResponse = validateCreateSchema(inputState);
  const [inputsErrorsState, setInputsErrorsState] = useState(null);
  const navigate = useNavigate();
  const handleSaveBtnClick = async (ev) => {
    try {
      const joiResponse = validateCreateSchema(inputState);
      console.log("hi");
      setInputsErrorsState(joiResponse);
      console.log(joiResponse);
      if (!joiResponse) {
        //move to homepage
        await axios.post("/cards/", inputState);
        toast.success("A new business card has been created");
        navigate(ROUTES.HOME);
      }
    } catch (err) {
      console.log("err", err);
      toast.error("errrrrrror Your new card didn't saved");
    }
  };

  const handleCancelBtnClick = (ev) => {
    //move to homepage
    navigate(ROUTES.HOME);
  };
  const handleInputChange = (ev) => {
    let newInputState = JSON.parse(JSON.stringify(inputState));
    newInputState[ev.target.id] = ev.target.value;
    setInputState(newInputState);
    //
    joiResponse = validateCreateSchema(inputState);
    setInputsErrorsState(joiResponse);
  };

  const resetForm = () => {
    let newInputState = JSON.parse(JSON.stringify(inputState));
    newInputState = {
      url: "",
      alt: "",
      title: "",
      subTitle: "",
      description: "",
      phone: "",
      email: "",
      web: "",
      state: "",
      country: "",
      city: "",
      street: "",
      houseNumber: "",
      zipCode: "",
    };

    setInputState(newInputState);

    joiResponse = validateCreateSchema(inputState);
    if (!joiResponse) {
      return;
    }

    let newjoiResponse = JSON.parse(JSON.stringify(joiResponse));
    Object.keys(newjoiResponse).forEach((index) => {
      newjoiResponse[index] = "";
    });
    setInputsErrorsState(newjoiResponse);
  };
  const keys = Object.keys(inputState);
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
          <EditIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Create card
        </Typography>
        <Typography component="h2" variant="h5">
          Here you can create a new cards
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
              <CreateEditComponent
                key={item}
                item={item}
                inputState={inputState}
                handleInputChange={handleInputChange}
                inputsErrorsState={inputsErrorsState}
              />
            ))}
            {/* <Grid item xs={12}>
              <TextField
                fullWidth
                id="url"
                label="Image Url"
                name="url"
                autoComplete="url"
                value={inputState.url}
                onChange={handleInputChange}
              />
              {inputsErrorsState && inputsErrorsState.url && (
                <Alert severity="warning">
                  {inputsErrorsState.url.map((item) => (
                    <div key={"url-errors" + item}>{item}</div>
                  ))}
                </Alert>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="title"
                label="Title"
                name="title"
                autoComplete="title"
                value={inputState.title}
                onChange={handleInputChange}
              />
              {inputsErrorsState && inputsErrorsState.title && (
                <Alert severity="warning">
                  {inputsErrorsState.title.map((item) => (
                    <div key={"title-errors" + item}>{item}</div>
                  ))}
                </Alert>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="subTitle"
                label="Subtitle"
                type="text"
                id="subTitle"
                autoComplete="subTitle"
                value={inputState.subTitle}
                onChange={handleInputChange}
              />
              {inputsErrorsState && inputsErrorsState.subTitle && (
                <Alert severity="warning">
                  {inputsErrorsState.subTitle.map((item) => (
                    <div key={"subTitle-errors" + item}>{item}</div>
                  ))}
                </Alert>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="description"
                label="Description"
                id="description"
                autoComplete="description"
                value={inputState.description}
                onChange={handleInputChange}
              />
              {inputsErrorsState && inputsErrorsState.description && (
                <Alert severity="warning">
                  {inputsErrorsState.description.map((item) => (
                    <div key={"description-errors" + item}>{item}</div>
                  ))}
                </Alert>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="alt"
                label="imgAlt"
                id="alt"
                autoComplete="imgAlt"
                value={inputState.alt}
                onChange={handleInputChange}
              />
              {inputsErrorsState && inputsErrorsState.alt && (
                <Alert severity="warning">
                  {inputsErrorsState.alt.map((item) => (
                    <div key={"alt-errors" + item}>{item}</div>
                  ))}
                </Alert>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="phone"
                label="Phone"
                id="phone"
                autoComplete="phone"
                value={inputState.phone}
                onChange={handleInputChange}
              />
              {inputsErrorsState && inputsErrorsState.phone && (
                <Alert severity="warning">
                  {inputsErrorsState.phone.map((item) => (
                    <div key={"phone-errors" + item}>{item}</div>
                  ))}
                </Alert>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="state"
                label="State"
                name="state"
                autoComplete="state"
                value={inputState.state}
                onChange={handleInputChange}
              />
              {inputsErrorsState && inputsErrorsState.state && (
                <Alert severity="warning">
                  {inputsErrorsState.state.map((item) => (
                    <div key={"state-errors" + item}>{item}</div>
                  ))}
                </Alert>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="country"
                label="Country"
                name="country"
                autoComplete="country"
                value={inputState.country}
                onChange={handleInputChange}
              />
              {inputsErrorsState && inputsErrorsState.country && (
                <Alert severity="warning">
                  {inputsErrorsState.country.map((item) => (
                    <div key={"country-errors" + item}>{item}</div>
                  ))}
                </Alert>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="city"
                label="City"
                name="city"
                autoComplete="city"
                value={inputState.city}
                onChange={handleInputChange}
              />
              {inputsErrorsState && inputsErrorsState.city && (
                <Alert severity="warning">
                  {inputsErrorsState.city.map((item) => (
                    <div key={"city-errors" + item}>{item}</div>
                  ))}
                </Alert>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="street"
                label="Street"
                name="street"
                autoComplete="street"
                value={inputState.street}
                onChange={handleInputChange}
              />
              {inputsErrorsState && inputsErrorsState.street && (
                <Alert severity="warning">
                  {inputsErrorsState.street.map((item) => (
                    <div key={"street-errors" + item}>{item}</div>
                  ))}
                </Alert>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="houseNumber"
                label="House Number"
                name="houseNumber"
                autoComplete="houseNumber"
                value={inputState.houseNumber}
                onChange={handleInputChange}
              />
              {inputsErrorsState && inputsErrorsState.houseNumber && (
                <Alert severity="warning">
                  {inputsErrorsState.houseNumber.map((item) => (
                    <div key={"houseNumber-errors" + item}>{item}</div>
                  ))}
                </Alert>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="zipCode"
                label="Zip Code"
                name="zipCode"
                autoComplete="zipCode"
                value={inputState.zipCode}
                onChange={handleInputChange}
              />
              {inputsErrorsState && inputsErrorsState.zipCode && (
                <Alert severity="warning">
                  {inputsErrorsState.zipCode.map((item) => (
                    <div key={"zipCode-errors" + item}>{item}</div>
                  ))}
                </Alert>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                value={inputState.email}
                onChange={handleInputChange}
              />
              {inputsErrorsState && inputsErrorsState.email && (
                <Alert severity="warning">
                  {inputsErrorsState.email.map((item) => (
                    <div key={"email-errors" + item}>{item}</div>
                  ))}
                </Alert>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="web"
                label="web"
                name="web"
                autoComplete="web"
                value={inputState.web}
                onChange={handleInputChange}
              />
              {inputsErrorsState && inputsErrorsState.web && (
                <Alert severity="warning">
                  {inputsErrorsState.web.map((item) => (
                    <div key={"web-errors" + item}>{item}</div>
                  ))}
                </Alert>
              )}
            </Grid> */}

            <Grid item xs={12} sm={6}>
              <Button
                size="large"
                fullWidth
                variant="contained"
                sx={{ mt: 1, mb: 1 }}
                //href={ROUTES.REGISTER}
                onClick={resetForm}
                endIcon={<CachedIcon />}
              ></Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 1, mb: 1 }}
                onClick={handleCancelBtnClick}
              >
                CANCEL
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 1, mb: 1 }}
                onClick={handleSaveBtnClick}
                {...(!joiResponse ? { disabled: false } : { disabled: true })}
              >
                SUBMIT
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default CreateCardPage;
