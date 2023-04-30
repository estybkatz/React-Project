import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Link from "@mui/icons-material/Link";
import { Avatar, Switch, TextField, Fragment } from "@mui/material";
//import useSwitch from "@mui/base/useSwitch";
import { NavLink } from "react-router-dom";
import NavArrayComponent from "./NavArrayComponent";
import SearchPartial from "./SearchPartial";
import ROUTES from "../../routes/ROUTES";
import { darkThemeActions } from "../../store/darkTheme";
import NavLinkComponent from "./NavLinkComponent";
import { authActions } from "../../store/auth";
//import { Height } from "@mui/icons-material";
import SwitchUnstyled from "@mui/base/SwitchUnstyled";
//import { PayloadAction } from "@reduxjs/toolkit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import useQueryParams from "../../hooks/useQueryParams";

// access to all
const pages = [
  {
    label: <img width={50} src="/assets/images/atom.png" alt="logo" />,
    url: ROUTES.HOME,
  },
];

//not logged in users
const notAuthPages = [
  { label: "ABOUT", url: ROUTES.ABOUT },
  {
    label: "SIGNUP",
    url: ROUTES.REGISTER,
  },
  {
    label: "LOGIN",
    url: ROUTES.LOGIN,
  },
];

//logged in users
const authedPages = [
  { label: "ABOUT", url: ROUTES.ABOUT },

  { label: "FAV CARDS", url: ROUTES.FAV },
];

const avatarPages = [
  {
    label: "PROFILE",
    url: ROUTES.PROFILE,
  },
  {
    label: "LOGOUT",
    url: ROUTES.LOGOUT,
  },
];

//admin/biz pages
const BizPages = [
  {
    label: "MY CARDS",
    url: ROUTES.MYCARDS,
  },
];

const AdminPages = [{ label: "SANDBOX", url: ROUTES.SANDBOX }];

const MuiNavbar = () => {
  const isLoggedIn = useSelector(
    (bigPieBigState) => bigPieBigState.authSlice.isLoggedIn
  );
  const payload = useSelector((bigPie) => bigPie.authSlice.payload);
  console.log(payload);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElNavAvatar, setAnchorElNavAvatar] = React.useState(null);
  const [anchorAvatar, setAnchorAvatar] = React.useState(false);
  const dispatch = useDispatch();
  const isDarkTheme = useSelector(
    (bigPie) => bigPie.darkThemeSlice.isDarkTheme
  );
  const [originalCardsArr, setOriginalCardsArr] = React.useState(null);
  let qparams = useQueryParams();
  const [cardsArr, setCardsArr] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    console.log("open");
    console.log("ancor", anchorElNav);
  };

  const handleOpenNavMenuAvatar = (event) => {
    setAnchorElNavAvatar(event.currentTarget);
    console.log("open");
    console.log(event.currentTarget);
    //console.log("ancor", anchorElNavAvatar);
  };

  const handleCloseNavMenuAvatar = () => {
    setAnchorAvatar(null);
    console.log("close");
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    console.log("close");
  };

  const changeTheme = () => {
    dispatch(darkThemeActions.changeTheme());
  };

  const logoutClick = () => {
    localStorage.clear();
    dispatch(authActions.logout());
  };

  const handleOpenAvatarMenu = (event) => {
    setAnchorAvatar(event.currentTarget);
  };

  // const filterFunc = (data) => {
  //   if (!originalCardsArr && !data) {
  //     return;
  //   }
  //   let filter = "";
  //   if (qparams.filter) {
  //     filter = qparams.filter;
  //   }
  //   if (!originalCardsArr && data) {
  //     /*
  //       when component loaded and states not loaded
  //     */
  //     setOriginalCardsArr(data);
  //     setCardsArr(
  //       data.filter(
  //         (card) =>
  //           card.title.startsWith(filter) || card.bizNumber.startsWith(filter)
  //       )
  //     );
  //     return;
  //   }
  //   if (originalCardsArr) {
  /*
        when all loaded and states loaded
      */
  //     let newOriginalCardsArr = JSON.parse(JSON.stringify(originalCardsArr));
  //     setCardsArr(
  //       newOriginalCardsArr.filter(
  //         (card) =>
  //           card.title.startsWith(filter) || card.bizNumber.startsWith(filter)
  //       )
  //     );
  //   }
  // };

  // const handleSearchInputChange = (event) => {
  //   const newFilter = event.target.value;
  //   filterFunc(newFilter);
  // };
  // const { onChange } = props;

  // const handleInput = (event) => {
  //   const query = event.target.value;
  //   onChange(query);
  // };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          {/* main navbar */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <NavArrayComponent linkArray={pages} />
            {isLoggedIn ? (
              <NavArrayComponent linkArray={authedPages} />
            ) : (
              <NavArrayComponent linkArray={notAuthPages} />
            )}
            {isLoggedIn && payload.biz ? (
              <NavArrayComponent linkArray={BizPages} />
            ) : (
              ""
            )}
            {isLoggedIn && payload.isAdmin ? (
              <NavArrayComponent linkArray={AdminPages} />
            ) : (
              ""
            )}
          </Box>
          {/* <Box>
            <TextField
              label="Search"
              variant="outlined"
              onInput={handleInput}
            />
          </Box> */}
          <Box>
            <SearchPartial />
          </Box>
          <Box
            sx={{
              my: 2,
              p: 1,
            }}
          >
            {/* <Typography sx={{ display: { xs: "none", md: "inline" } }}>
              {isDarkTheme ? "Dark" : "Light"} Mode
            </Typography> */}
            {/* {<Switch checked={isDarkTheme} onChange={changeTheme} />} */}
            {/* {<DarkModeIcon checked={isDarkTheme} onClick={changeTheme} />} */}
            {isDarkTheme ? (
              <WbSunnyIcon checked={isDarkTheme} onClick={changeTheme} />
            ) : (
              <DarkModeIcon onClick={changeTheme} />
            )}
          </Box>
          {/* {isLoggedIn ? (
            <React.Fragment>
              <IconButton
                size="large"
                onClick={handleOpenAvatarMenu}
                color="inherit"
              >
                <Avatar src="/broken-image.jpg" />
              </IconButton>
              {anchorAvatar
                ? avatarPages.map((page) =>
                    page.url === ROUTES.LOGOUT ? (
                      <NavLinkComponent
                        key={page.url}
                        {...page}
                        onClick={logoutClick}
                      />
                    ) : (
                      <NavLinkComponent key={page.url} {...page} />
                    )
                  )
                : ""}
            </React.Fragment>
          ) : (
            ""
          )}
*/}

          {isLoggedIn ? (
            <React.Fragment>
              <IconButton
                size="large"
                onClick={handleOpenAvatarMenu}
                color="inherit"
              >
                <Avatar src="/broken-image.jpg" />
              </IconButton>
              <Menu
                anchorEl={anchorAvatar}
                open={Boolean(anchorAvatar)}
                onClose={handleCloseNavMenuAvatar}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                onBackdropClick={handleCloseNavMenuAvatar}
              >
                {anchorAvatar ? (
                  <NavArrayComponent
                    linkArray={avatarPages}
                    logoutClick={logoutClick}
                  />
                ) : (
                  ""
                )}
                {/* {anchorAvatar
                  ? avatarPages.map((page) =>
                      page.url === ROUTES.LOGOUT ? (
                        <MenuItem key={page.url}>
                          <NavLinkComponent
                            key={page.url}
                            {...page}
                            onClick={logoutClick}
                          />
                        </MenuItem>
                      ) : (
                        <MenuItem key={page.url}>
                          <NavLinkComponent key={page.url} {...page} />
                        </MenuItem>
                      )
                    )
                  : ""}{" "} */}
              </Menu>
            </React.Fragment>
          ) : (
            ""
          )}

          {/*hamburger with menu */}
          <Box
            sx={{
              flexGrow: 1,
              flex: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={"miniLinks" + page.url}
                  onClick={handleCloseNavMenu}
                >
                  <NavLink to={page.url}>
                    {/* if the current page and the link is the same then it will change the color of the link */}
                    {({ isActive }) => (
                      <Typography
                        sx={{
                          textAlign: "center",
                          color: `${isActive ? "red" : "yellow"}`,
                        }}
                      >
                        {page.label}
                      </Typography>
                    )}
                  </NavLink>
                </MenuItem>
              ))}

              {isLoggedIn
                ? authedPages.map((page) =>
                    page.url === ROUTES.LOGOUT ? (
                      <MenuItem
                        key={"miniLinks" + page.url}
                        onClick={logoutClick}
                      >
                        <NavLink to={page.url}>
                          {({ isActive }) => (
                            <Typography
                              sx={{
                                textAlign: "center",
                                color: `${isActive ? "red" : "yellow"}`,
                              }}
                            >
                              {"Log out"}
                            </Typography>
                          )}
                        </NavLink>
                      </MenuItem>
                    ) : (
                      <MenuItem
                        key={"miniLinks" + page.url}
                        onClick={handleCloseNavMenu}
                      >
                        <NavLink to={page.url}>
                          {({ isActive }) => (
                            <Typography
                              sx={{
                                textAlign: "center",
                                color: `${isActive ? "red" : "yellow"}`,
                              }}
                            >
                              {page.label}
                            </Typography>
                          )}
                        </NavLink>
                      </MenuItem>
                    )
                  )
                : notAuthPages.map((page) => (
                    <MenuItem
                      key={"miniLinks" + page.url}
                      onClick={handleCloseNavMenu}
                    >
                      <NavLink to={page.url}>
                        {/* if the current page and the link is the same then it will change the color of the link */}
                        {({ isActive }) => (
                          <Typography
                            sx={{
                              textAlign: "center",
                              color: `${isActive ? "red" : "yellow"}`,
                            }}
                          >
                            {page.label}
                          </Typography>
                        )}
                      </NavLink>
                    </MenuItem>
                  ))}

              {isLoggedIn && payload.biz
                ? BizPages.map((page) => (
                    <MenuItem
                      key={"miniLinks" + page.url}
                      onClick={handleCloseNavMenu}
                    >
                      <NavLink to={page.url}>
                        {/* if the current page and the link is the same then it will change the color of the link */}
                        {({ isActive }) => (
                          <Typography
                            sx={{
                              textAlign: "center",
                              color: `${isActive ? "red" : "yellow"}`,
                            }}
                          >
                            {page.label}
                          </Typography>
                        )}
                      </NavLink>
                    </MenuItem>
                  ))
                : ""}

              {isLoggedIn && payload.isAdmin
                ? AdminPages.map((page) => (
                    <MenuItem
                      key={"miniLinks" + page.url}
                      onClick={handleCloseNavMenu}
                    >
                      <NavLink to={page.url}>
                        {/* if the current page and the link is the same then it will change the color of the link */}
                        {({ isActive }) => (
                          <Typography
                            sx={{
                              textAlign: "center",
                              color: `${isActive ? "red" : "yellow"}`,
                            }}
                          >
                            {page.label}
                          </Typography>
                        )}
                      </NavLink>
                    </MenuItem>
                  ))
                : ""}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default MuiNavbar;

//   <Box
//     sx={{
//       flexGrow: 1,
//       flex: 1,
//       display: { xs: "flex", md: "none" },
//       justifyContent: "flex-end",
//     }}
//   >
//     <IconButton
//       size="large"
//       onClick={handleOpenNavMenu}
//       color="inherit"
//     >
//       <MenuIcon />
//     </IconButton>
//     <Menu
//       id="menu-appbar"
//       anchorEl={anchorElNav}
//       anchorOrigin={{
//         vertical: "bottom",
//         horizontal: "left",
//       }}
//       keepMounted
//       transformOrigin={{
//         vertical: "top",
//         horizontal: "left",
//       }}
//       open={Boolean(anchorElNav)}
//       onClose={handleCloseNavMenu}
//       sx={{
//         display: { xs: "block", md: "none" },
//       }}
//     >
//       {pages.map((page) => (
//         <MenuItem
//           key={"miniLinks" + page.url}
//           onClick={handleCloseNavMenu}
//         >
//           <NavLink to={page.url}>
//
//             {({ isActive }) => (
//               <Typography
//                 sx={{
//                   textAlign: "center",
//                   color: `${isActive ? "red" : ""}`,
//                 }}
//               >
//                 {page.label}
//               </Typography>
//             )}
//           </NavLink>
//         </MenuItem>
//       ))}
//     </Menu>
//   </Box>
//
