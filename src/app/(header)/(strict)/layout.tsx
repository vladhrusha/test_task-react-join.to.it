import React, { Fragment } from "react";
import Navbar from "@/components/Navbar";

const NavbarLayout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      {children}
    </Fragment>
  );
};

export default NavbarLayout;
