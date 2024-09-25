import React, { Fragment } from "react";
import Navbar from "@/components/Navbar";
import { Stack } from "@mui/material";

const NavbarLayout = ({ children }) => {
  return (
    <Stack>
      <Navbar />
      {children}
    </Stack>
  );
};

export default NavbarLayout;
