import React, { Fragment } from "react";
import Sidebar from "@/components/Sidebar";

const SidebarLayout = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Sidebar /> {children}
    </div>
  );
};

export default SidebarLayout;
