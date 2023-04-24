import { Fragment } from "react";
import NavLinkComponent from "./NavLinkComponent";
import MenuItem from "@mui/material/MenuItem";
const NavArrayComponent = ({ linkArray = [], logoutClick, isMenu = false }) => {
  return (
    <Fragment>
      {isMenu
        ? linkArray.map((page) => (
            <MenuItem key={page.url}>
              <NavLinkComponent
                key={page.url}
                {...page}
                logoutClick={logoutClick}
              />
            </MenuItem>
          ))
        : linkArray.map((page) => (
            <NavLinkComponent
              key={page.url}
              {...page}
              logoutClick={logoutClick}
            />
          ))}
    </Fragment>
  );
};
export default NavArrayComponent;
