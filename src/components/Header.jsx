import React from "react";
import { AppBar, Toolbar, Button } from "@mui/material";
import { NavLink as RouterLink } from "react-router-dom";

const headersData = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Auctions list",
    href: "/auctions",
  },
  {
    label: "Closed auctions list",
    href: "/auctions/closed",
  },
  {
    label: "Add auction",
    href: "/auctions/add",
  },
];

const Header = () => {
  const displayDesktop = () => {
    return (
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169"
          alt="logo"
          width="80"
          height="50"
        />
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <header>
      <AppBar
        sx={{
          position: "relative",
          color: "black",
          backgroundColor: theme =>
            theme.palette.mode === "light" ? theme.palette.grey[200] : theme.palette.grey[800],
        }}
      >
        {displayDesktop()}
      </AppBar>
    </header>
  );
};

export default Header;
