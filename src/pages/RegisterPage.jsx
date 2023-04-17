// import { useState } from "react";
// //import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
// //import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import Alert from "@mui/material/Alert";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// import validateRegisterSchema from "../validation/registerValidation";
// import ROUTES from "../routes/ROUTES";

// const RegisterPage = () => {
//   const [inputState, setInputState] = useState({
//     firstName: "",
//     lastName: "",
//     middleName: "",
//     email: "",
//     phone: "",
//     password: "",
//     imageUrl: "",
//     imageAlt: "",
//     state: "",
//     country: "",
//     city: "",
//     street: "",
//     houseNumber: "",
//     zipCode: "",
//     biz: "",
//   });
//   const [inputsErrorsState, setInputsErrorsState] = useState(null);
//   const navigate = useNavigate();
//   const handleBtnClick = async (ev) => {
//     try {
//       const joiResponse = validateRegisterSchema(inputState);
//       setInputsErrorsState(joiResponse);
//       if (joiResponse) {
//         return;
//       }
//       await axios.post("/users/register", {
//         firstName: inputState.firstName,
//         middleName: inputState.middleName,
//         lastName: inputState.lastName,
//         phone: inputState.phone,
//         email: inputState.email,
//         password: inputState.password,
//         imageUrl: inputState.imageUrl,
//         imageAlt: inputState.imageAlt,
//         state: inputState.state,
//         country: inputState.country,
//         city: inputState.city,
//         street: inputState.street,
//         houseNumber: inputState.houseNumber,
//         zipCode: inputState.zipCode,
//         biz: inputState.biz,
//       });
//       navigate(ROUTES.LOGIN);
//     } catch (err) {
//       console.log("error from axios", err.response.data);
//     }
//   };
//   const handleInputChange = (ev) => {
//     let newInputState = JSON.parse(JSON.stringify(inputState));
//     newInputState[ev.target.id] = ev.target.value;
//     setInputState(newInputState);
//   };

//   const handleBizChange = (ev) => {};
//   return (
//     <Container component="main" maxWidth="xs">
//       <Box
//         sx={{
//           marginTop: 8,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//         }}
//       >
//         <Typography component="h1" variant="h5">
//           REGISTER
//         </Typography>
//         <Box component="div" noValidate sx={{ mt: 3 }}>
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 required
//                 id="firstName"
//                 label="First Name"
//                 autoFocus
//                 value={inputState.firstName}
//                 onChange={handleInputChange}
//               />
//               {inputsErrorsState && inputsErrorsState.firstName && (
//                 <Alert severity="warning">
//                   {inputsErrorsState.firstName.map((item) => (
//                     <div key={"firstName-errors" + item}>{item}</div>
//                   ))}
//                 </Alert>
//               )}
//             </Grid>

//             <Grid item xs={12} sm={6}>
//               <TextField
//                 required
//                 id="middleName"
//                 label="middleName"
//                 autoFocus
//                 value={inputState.middleName}
//                 onChange={handleInputChange}
//               />
//               {inputsErrorsState && inputsErrorsState.middleName && (
//                 <Alert severity="warning">
//                   {inputsErrorsState.middleName.map((item) => (
//                     <div key={"middleName-errors" + item}>{item}</div>
//                   ))}
//                 </Alert>
//               )}
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 required
//                 id="lastName"
//                 label="Last Name"
//                 value={inputState.lastName}
//                 onChange={handleInputChange}
//               />
//               {inputsErrorsState && inputsErrorsState.lastName && (
//                 <Alert severity="warning">
//                   {inputsErrorsState.lastName.map((item) => (
//                     <div key={"lastName-errors" + item}>{item}</div>
//                   ))}
//                 </Alert>
//               )}
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 required
//                 id="email"
//                 label="email"
//                 value={inputState.email}
//                 onChange={handleInputChange}
//               />
//               {inputsErrorsState && inputsErrorsState.email && (
//                 <Alert severity="warning">
//                   {inputsErrorsState.email.map((item) => (
//                     <div key={"email-errors" + item}>{item}</div>
//                   ))}
//                 </Alert>
//               )}
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 required
//                 label="Password"
//                 type="password"
//                 id="password"
//                 value={inputState.password}
//                 onChange={handleInputChange}
//               />
//               {inputsErrorsState && inputsErrorsState.password && (
//                 <Alert severity="warning">
//                   {inputsErrorsState.password.map((item) => (
//                     <div key={"password-errors" + item}>{item}</div>
//                   ))}
//                 </Alert>
//               )}
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 required
//                 id="imgeUrl"
//                 label="imgeUrl"
//                 value={inputState.imageUrl}
//                 onChange={handleInputChange}
//               />
//               {inputsErrorsState && inputsErrorsState.imageUrl && (
//                 <Alert severity="warning">
//                   {inputsErrorsState.imageUrl.map((item) => (
//                     <div key={"imageUrl-errors" + item}>{item}</div>
//                   ))}
//                 </Alert>
//               )}
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 required
//                 id="state"
//                 label="state"
//                 value={inputState.state}
//                 onChange={handleInputChange}
//               />
//               {inputsErrorsState && inputsErrorsState.state && (
//                 <Alert severity="warning">
//                   {inputsErrorsState.state.map((item) => (
//                     <div key={"state-errors" + item}>{item}</div>
//                   ))}
//                 </Alert>
//               )}
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 required
//                 id="city"
//                 label="city"
//                 value={inputState.city}
//                 onChange={handleInputChange}
//               />
//               {inputsErrorsState && inputsErrorsState.city && (
//                 <Alert severity="warning">
//                   {inputsErrorsState.city.map((item) => (
//                     <div key={"city-errors" + item}>{item}</div>
//                   ))}
//                 </Alert>
//               )}
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 required
//                 id="houseNumber"
//                 label="houseNumber"
//                 value={inputState.houseNumber}
//                 onChange={handleInputChange}
//               />
//               {inputsErrorsState && inputsErrorsState.houseNumber && (
//                 <Alert severity="warning">
//                   {inputsErrorsState.houseNumber.map((item) => (
//                     <div key={"houseNumber-errors" + item}>{item}</div>
//                   ))}
//                 </Alert>
//               )}
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 required
//                 id="phone"
//                 label="phone"
//                 value={inputState.phone}
//                 onChange={handleInputChange}
//               />
//               {inputsErrorsState && inputsErrorsState.phone && (
//                 <Alert severity="warning">
//                   {inputsErrorsState.phone.map((item) => (
//                     <div key={"phone-errors" + item}>{item}</div>
//                   ))}
//                 </Alert>
//               )}
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 required
//                 id="imageAlt"
//                 label="imageAlt"
//                 value={inputState.imageAlt}
//                 onChange={handleInputChange}
//               />
//               {inputsErrorsState && inputsErrorsState.imageAlt && (
//                 <Alert severity="warning">
//                   {inputsErrorsState.imageAlt.map((item) => (
//                     <div key={"imageAlt-errors" + item}>{item}</div>
//                   ))}
//                 </Alert>
//               )}
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 required
//                 id="country"
//                 label="country"
//                 value={inputState.country}
//                 onChange={handleInputChange}
//               />
//               {inputsErrorsState && inputsErrorsState.country && (
//                 <Alert severity="warning">
//                   {inputsErrorsState.country.map((item) => (
//                     <div key={"country-errors" + item}>{item}</div>
//                   ))}
//                 </Alert>
//               )}
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 required
//                 id="street"
//                 label="street"
//                 value={inputState.street}
//                 onChange={handleInputChange}
//               />
//               {inputsErrorsState && inputsErrorsState.street && (
//                 <Alert severity="warning">
//                   {inputsErrorsState.street.map((item) => (
//                     <div key={"street-errors" + item}>{item}</div>
//                   ))}
//                 </Alert>
//               )}
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 id="zipCode"
//                 label="zipCode"
//                 value={inputState.zipCode}
//                 onChange={handleInputChange}
//               />
//               {inputsErrorsState && inputsErrorsState.zipCode && (
//                 <Alert severity="warning">
//                   {inputsErrorsState.zipCode.map((item) => (
//                     <div key={"zipCode-errors" + item}>{item}</div>
//                   ))}
//                 </Alert>
//               )}
//             </Grid>

//             {/* <Grid item xs={12}>
//               <FormControlLabel
//                 control={
//                   <Checkbox
//                     value={inputState.biz}
//                     color="primary"
//                     onChange={handleBizChange}
//                   />
//                 }
//                 label="Signup as business"
//               />
//             </Grid> */}
//           </Grid>
//           <Button
//             fullWidth
//             variant="contained"
//             sx={{ mt: 3, mb: 2 }}
//             onClick={handleBtnClick}
//           >
//             Sign Up
//           </Button>
//         </Box>
//       </Box>
//     </Container>
//   );
// };
// export default RegisterPage;

import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import validateRegisterSchema from "../validation/registerValidation";
import Alert from "@mui/material/Alert";
import ROUTES from "../routes/ROUTES";
import axios from "axios";
import { toast } from "react-toastify";
import CachedIcon from "@mui/icons-material/Cached";
const RegisterPage = () => {
  const [inputState, setInputState] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
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
  let joiResponse = validateRegisterSchema(inputState);

  const [inputsErrorState, setinputsErrorState] = useState(null);
  const navigate = useNavigate();
  const handeleBtnClick = async (ev) => {
    try {
      joiResponse = validateRegisterSchema(inputState);
      setinputsErrorState(joiResponse);
      if (joiResponse) {
        return;
      }
      await axios.post("/users/register", {
        firstName: inputState.firstName,
        middleName: inputState.middleName,
        lastName: inputState.lastName,
        phone: inputState.phone,
        email: inputState.email,
        password: inputState.password,
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
      navigate(ROUTES.LOGIN);
    } catch (err) {
      console.log("error from axios", err.response.data);
      toast.error("registered user");
    }
  };
  const handleInputChange = (ev) => {
    let newInputState = JSON.parse(JSON.stringify(inputState));
    newInputState[ev.target.id] = ev.target.value;
    setInputState(newInputState);
    joiResponse = validateRegisterSchema(inputState);
    setinputsErrorState(joiResponse);

    // activateButton = true;
    // Object.keys(canClick).forEach((key) => {
    //   activateButton = activateButton && canClick[key];
    // });
  };
  const handleBizChange = (ev) => {
    let newInputState = JSON.parse(JSON.stringify(inputState));
    newInputState["biz"] = ev.target.checked;
    setInputState(newInputState);
  };
  const resetForm = () => {
    let newInputState = JSON.parse(JSON.stringify(inputState));
    newInputState = {
      firstName: "",
      middleName: "",
      lastName: "",
      phone: "",
      email: "",
      password: "",
      imageUrl: "",
      imageAlt: "",
      state: "",
      country: "",
      city: "",
      street: "",
      houseNumber: "",
      zipCode: "",
      biz: false,
    };

    setInputState(newInputState);

    joiResponse = validateRegisterSchema(inputState);
    if (!joiResponse) {
      return;
    }

    let newjoiResponse = JSON.parse(JSON.stringify(joiResponse));
    Object.keys(newjoiResponse).forEach((index) => {
      newjoiResponse[index] = "";
    });
    setinputsErrorState(newjoiResponse);
  };

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
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="div" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={inputState.firstName}
                onChange={handleInputChange}
              />
              {inputsErrorState && inputsErrorState.firstName && (
                <Alert severity="warning">
                  {inputsErrorState.firstName.map((item) => (
                    <div key={"lastName-errors" + item}>{item}</div>
                  ))}
                </Alert>
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="middleName"
                label="Middle Name"
                name="middleName"
                autoComplete="family-name"
                value={inputState.middleName}
                onChange={handleInputChange}
              />
              {inputsErrorState && inputsErrorState.middleName && (
                <Alert severity="warning">
                  {inputsErrorState.middleName.map((item) => (
                    <div key={"middleName-errors" + item}>{item}</div>
                  ))}
                </Alert>
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                value={inputState.lastName}
                onChange={handleInputChange}
              />
              {inputsErrorState && inputsErrorState.lastName && (
                <Alert severity="warning">
                  {inputsErrorState.lastName.map((item) => (
                    <div key={"lastName-errors" + item}>{item}</div>
                  ))}
                </Alert>
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="phone"
                label="Phone"
                name="phone"
                autoComplete="phone"
                value={inputState.phone}
                onChange={handleInputChange}
              />
              {inputsErrorState && inputsErrorState.phone && (
                <Alert severity="warning">
                  {inputsErrorState.phone.map((item) => (
                    <div key={"phone-errors" + item}>{item}</div>
                  ))}
                </Alert>
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={inputState.email}
                onChange={handleInputChange}
              />
              {inputsErrorState && inputsErrorState.email && (
                <Alert severity="warning">
                  {inputsErrorState.email.map((item) => (
                    <div key={"email-errors" + item}>{item}</div>
                  ))}
                </Alert>
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                value={inputState.password}
                onChange={handleInputChange}
              />
              {inputsErrorState && inputsErrorState.password && (
                <Alert severity="warning">
                  {inputsErrorState.password.map((item) => (
                    <div key={"password-errors" + item}>{item}</div>
                  ))}
                </Alert>
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="imageUrl"
                label="Image Url "
                name="imageUrl"
                autoComplete="imageUrl"
                value={inputState.imageUrl}
                onChange={handleInputChange}
              />
              {inputsErrorState && inputsErrorState.imageUrl && (
                <Alert severity="warning">
                  {inputsErrorState.imageUrl.map((item) => (
                    <div key={"imageUrl-errors" + item}>{item}</div>
                  ))}
                </Alert>
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="imageAlt"
                label="Image Alt "
                name="imageAlt"
                autoComplete="imageAlt"
                value={inputState.imageAlt}
                onChange={handleInputChange}
              />
              {inputsErrorState && inputsErrorState.imageAlt && (
                <Alert severity="warning">
                  {inputsErrorState.imageAlt.map((item) => (
                    <div key={"imageAlt-errors" + item}>{item}</div>
                  ))}
                </Alert>
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="state"
                label="State "
                name="state"
                autoComplete="state"
                value={inputState.state}
                onChange={handleInputChange}
              />
              {inputsErrorState && inputsErrorState.state && (
                <Alert severity="warning">
                  {inputsErrorState.state.map((item) => (
                    <div key={"state-errors" + item}>{item}</div>
                  ))}
                </Alert>
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="country"
                label="Country "
                name="country"
                autoComplete="country"
                value={inputState.country}
                onChange={handleInputChange}
              />
              {inputsErrorState && inputsErrorState.country && (
                <Alert severity="warning">
                  {inputsErrorState.country.map((item) => (
                    <div key={"country-errors" + item}>{item}</div>
                  ))}
                </Alert>
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="city"
                label="City "
                name="city"
                autoComplete="city"
                value={inputState.city}
                onChange={handleInputChange}
              />
              {inputsErrorState && inputsErrorState.city && (
                <Alert severity="warning">
                  {inputsErrorState.city.map((item) => (
                    <div key={"city-errors" + item}>{item}</div>
                  ))}
                </Alert>
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="street"
                label="Street "
                name="street"
                autoComplete="street"
                value={inputState.street}
                onChange={handleInputChange}
              />
              {inputsErrorState && inputsErrorState.street && (
                <Alert severity="warning">
                  {inputsErrorState.street.map((item) => (
                    <div key={"street-errors" + item}>{item}</div>
                  ))}
                </Alert>
              )}
            </Grid>{" "}
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="houseNumber"
                label="House Number "
                name="houseNumber"
                autoComplete="houseNumber"
                value={inputState.houseNumber}
                onChange={handleInputChange}
              />
              {inputsErrorState && inputsErrorState.houseNumber && (
                <Alert severity="warning">
                  {inputsErrorState.houseNumber.map((item) => (
                    <div key={"houseNumber-errors" + item}>{item}</div>
                  ))}
                </Alert>
              )}
            </Grid>{" "}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="zipCode"
                label="Zip Code "
                name="zipCode"
                autoComplete="zipCode"
                value={inputState.zipCode}
                onChange={handleInputChange}
              />
              {inputsErrorState && inputsErrorState.zipCode && (
                <Alert severity="warning">
                  {inputsErrorState.zipCode.map((item) => (
                    <div key={"zipCode-errors" + item}>{item}</div>
                  ))}
                </Alert>
              )}
            </Grid>
            {/* <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="biz"
                label="Biz "
                name="biz"
                autoComplete="biz"
                value={inputState.biz}
                onChange={handleInputChange}
              />
              {inputsErrorState && inputsErrorState.biz && (
                <Alert severity="warning">
                  {inputsErrorState.biz.map((item) => (
                    <div key={"biz-errors" + item}>{item}</div>
                  ))}
                </Alert>
              )}
            </Grid> */}
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    id="biz"
                    value={inputState.biz}
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
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 1, mb: 1 }}
                {...(!joiResponse ? { disabled: false } : { disabled: true })}
                onClick={handeleBtnClick}
              >
                Sign Up
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

export default RegisterPage;
