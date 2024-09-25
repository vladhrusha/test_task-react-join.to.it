"use client";
import React from "react";
import Calendar from "../calendar/components/Calendar/Calendar";
import { Box, Stack } from "@mui/material";
import * as colors from "@/styles/colors";

const page = () => {
  return (
    <Stack style={{ height: "100%", alignItems: "center" }}>
      <Box>
        <h2 style={{ padding: "20px 0px", color: colors.primary.text, fontWeight: "normal" }}>Calendar</h2>
        <Calendar />
      </Box>
    </Stack>
  );
};

export default page;
