import React, { Fragment } from "react";
import Navbar from "@/components/Navbar";
import { Stack } from "@mui/material";
import * as colors from "@/styles/colors";

const NavbarLayout = ({ children }) => {
  return (
    <Stack minWidth="1340px" sx={{ backgroundColor: colors.primary.dark }}>
      <Navbar />
      {children}
    </Stack>
  );
};

export default NavbarLayout;
