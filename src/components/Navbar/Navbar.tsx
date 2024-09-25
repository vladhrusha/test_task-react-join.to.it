import { Divider, FormControl, Input, InputAdornment, Stack, TextField } from "@mui/material";
import React from "react";
import { faMagnifyingGlass, faBell, faComments, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Avatar from "./avatar.jpg";

import Image from "next/image";
const Navbar = () => {
  return (
    <Stack
      flexDirection="row"
      sx={{
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <FormControl>
        <Input
          startAdornment={
            <InputAdornment position="start">
              <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" height={24} />
            </InputAdornment>
          }
        />
      </FormControl>

      <Stack flexDirection="row">
        <FontAwesomeIcon icon={faQuestion} size="xl" height={24} />
        <FontAwesomeIcon icon={faComments} size="xl" height={24} />
        <FontAwesomeIcon icon={faBell} size="xl" height={24} />
      </Stack>

      <Stack flexDirection="row">
        <p>John Doe</p>
        <Image src={Avatar} alt="avatar" width="38" height="38" />
      </Stack>
    </Stack>
  );
};

export default Navbar;
