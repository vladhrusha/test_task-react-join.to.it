import React, { Fragment } from "react";
import Sidebar from "@/components/Sidebar";

const SidebarLayout = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        minHeight: "100vh",
      }}
    >
      <Sidebar /> {children}
    </div>
  );
};

export default SidebarLayout;
