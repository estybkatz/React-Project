import * as React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ErrorIcon from "@mui/icons-material/Error";
import CoPresentTwoToneIcon from "@mui/icons-material/CoPresentTwoTone";
import InfoIcon from "@mui/icons-material/Info";
import ROUTES from "../routes/ROUTES";
import { useSelector } from "react-redux";
//import About from "../pages/About";

const Footer = () => {
  const [value, setValue] = React.useState(0);
  const isLoggedIn = useSelector(
    (bigPieBigState) => bigPieBigState.authSlice.isLoggedIn
  );
  const payload = useSelector((bigPie) => bigPie.authSlice.payload);

  return (
    <Box sx={{ width: 500, margin: "auto" }}>
      <br></br>
      <br></br>
      <br></br>
      <hr></hr>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="About"
          icon={<InfoIcon />}
          component={Link}
          to="/about"
        />
        {/* <Box> */}
        {isLoggedIn ? (
          <BottomNavigationAction
            label="Favorites"
            icon={<FavoriteIcon />}
            component={Link}
            to="/favCards"
          />
        ) : (
          ""
        )}
        {/* </Box> */}

        {/* <Box> */}
        {isLoggedIn && (payload.biz || payload.isAdmin) ? (
          <BottomNavigationAction
            label="My Cards"
            icon={<CoPresentTwoToneIcon />}
            component={Link}
            to="/myCards"
          />
        ) : (
          ""
        )}
        {/* </Box> */}
      </BottomNavigation>
    </Box>
  );
};
export default Footer;
