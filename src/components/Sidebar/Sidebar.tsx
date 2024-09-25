import React, { Fragment } from "react";

import { FaSymbol } from "@fortawesome/fontawesome-svg-core";

import { HomeIcon } from "../Icons/IconsV1";
import { List, ListItem, Stack } from "@mui/material";
import Link from "next/link";

import { page } from "@/routes/routes";

const sidebarItems = [
  {
    label: "Home",
    icon: HomeIcon,
    link: page.home.path,
  },
  {
    label: "Dashboard",
    icon: HomeIcon,
    link: page.dashboard.path,
  },
  {
    label: "Inbox",
    icon: HomeIcon,
    link: page.inbox.path,
  },
  {
    label: "Products",
    icon: HomeIcon,
    link: page.products.path,
  },
  {
    label: "Invoices",
    icon: HomeIcon,
    link: page.invoices.path,
  },
  {
    label: "Customers",
    icon: HomeIcon,
    link: page.customers.path,
  },
  ,
  {
    label: "Chat Room",
    icon: HomeIcon,
    link: page.chatRoom.path,
  },
  ,
  {
    label: "Calendar",
    icon: HomeIcon,
    link: page.calendar.path,
  },
  ,
  {
    label: "Help Center",
    icon: HomeIcon,
    link: page.helpCenter.path,
  },
  ,
  {
    label: "Settings",
    icon: HomeIcon,
    link: page.settings.path,
  },
];

const Sidebar = () => {
  return (
    <Stack sx={{ height: "100vh" }}>
      <h1
        style={{
          color: "white",
          fontSize: "1.5rem",
          padding: "1rem",
          backgroundColor: "#43425D",
        }}
      >
        IMPEKABLE
      </h1>
      <List sx={{ height: "100%", fontSize: "15px", backgroundColor: "#43425D", color: "white" }}>
        {sidebarItems.map((item, index) => (
          <ListItem key={index}>
            <Link href={item.link}>
              <item.icon />
              {item.label}
            </Link>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};

export default Sidebar;
