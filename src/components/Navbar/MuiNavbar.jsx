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
import MenuItem from "@mui/material/MenuItem";
import { Avatar } from "@mui/material";
import { NavLink } from "react-router-dom";
import NavArrayComponent from "./NavArrayComponent";
import SearchPartial from "./SearchPartial";
import ROUTES from "../../routes/ROUTES";
import { darkThemeActions } from "../../store/darkTheme";
import { authActions } from "../../store/auth";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";

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
  const [anchorAvatar, setAnchorAvatar] = React.useState(false);
  const dispatch = useDispatch();
  const isDarkTheme = useSelector(
    (bigPie) => bigPie.darkThemeSlice.isDarkTheme
  );

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    console.log("open");
    console.log("ancor", anchorElNav);
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

          <Box>
            <SearchPartial />
          </Box>
          <Box
            sx={{
              my: 2,
              p: 1,
            }}
          >
            {isDarkTheme ? (
              <WbSunnyIcon checked={isDarkTheme} onClick={changeTheme} />
            ) : (
              <DarkModeIcon onClick={changeTheme} />
            )}
          </Box>

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
