"use client";
import React, { useEffect, useState } from "react";

import { HomeIcon } from "../Icons/IconsV1";
import { List, ListItem, Stack } from "@mui/material";
import Link from "next/link";

import { page } from "@/routes/routes";
import Logo from "./components/Logo";

import * as colors from "@/styles/colors";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  const [activeItem, setActiveItem] = useState<string>("/home");

  useEffect(() => {
    sidebarItems.forEach((item) => {
      if (item.link === pathname) {
        setActiveItem(item.link);
      }
    });
  }, [pathname]);

  return (
    <Stack sx={{ minWidth: "260px" }}>
      <Logo />
      <List
        sx={{
          height: "100%",
          fontSize: "15px",
          backgroundColor: colors.secondary.main,
          color: "white",
          padding: 0,
        }}
      >
        {sidebarItems.map((item, index) => (
          <Link key={index} href={item!.link}>
            <ListItem
              sx={{
                width: "100%",
                backgroundColor: activeItem === item!.link ? colors.secondary.dark : colors.secondary.main,
                "&:hover": {
                  backgroundColor: colors.secondary.dark,
                  cursor: "pointer",
                },
              }}
              onClick={() => setActiveItem(item!.link)}
            >
              <Stack flexDirection="row" columnGap="10px" sx={{ width: "inherit" }}>
                <item.icon />
                {item!.label}
              </Stack>
            </ListItem>
          </Link>
        ))}
      </List>
    </Stack>
  );
};

export default Sidebar;

type SidebarItem = {
  label: string;
  icon: React.FC;
  link: string;
};

const sidebarItems: SidebarItem[] = [
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
