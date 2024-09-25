import { Divider, FormControl, Input, InputAdornment, Stack } from "@mui/material";
import React from "react";
import { faMagnifyingGlass, faBell, faComments, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as colors from "@/styles/colors";

import Avatar from "./avatar.jpg";

import Image from "next/image";
const Navbar = () => {
  return (
    <Stack
      flexDirection="row"
      sx={{
        height: "70px",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: colors.primary.main,
      }}
    >
      <FormControl>
        <Input
          placeholder="Search transactions, invoices or help"
          sx={{ width: "1000px", paddingLeft: "10px" }}
          disableUnderline={true}
          startAdornment={
            <InputAdornment position="start">
              <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" height={16} />
            </InputAdornment>
          }
        />
      </FormControl>

      <Stack flexDirection="row" sx={{ alignItems: "center", columnGap: "16px" }}>
        <FontAwesomeIcon icon={faQuestion} size="xl" height={24} color={colors.primary.icons} />
        <FontAwesomeIcon icon={faComments} size="xl" height={24} color={colors.primary.icons} />
        <FontAwesomeIcon icon={faBell} size="xl" height={24} color={colors.primary.icons} />
        <Divider orientation="vertical" flexItem />

        <p>John Doe</p>
        <Image src={Avatar} alt="avatar" width="38" height="38" />
      </Stack>
    </Stack>
  );
};

export default Navbar;
