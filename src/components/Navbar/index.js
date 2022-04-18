import React from "react";

import { Nav, NavbarContainer, NavLogo } from "./NavbarElements";
import logo from "../../images/navbarlogo.png";

const Navbar = () => {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <img src={logo} alt="logo" />
        </NavLogo>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
