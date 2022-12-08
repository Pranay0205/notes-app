import React from "react";
import classes from "./Layout.module.css";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import { List } from "@mui/material";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import SubjectOutlinedIcon from "@mui/icons-material/SubjectOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { useNavigate, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import styled from "@emotion/styled";
import { format } from "date-fns";
import Avatar from "@mui/material/Avatar";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const CAvatar = styled(Avatar)(({ theme }) => `margin-left: ${theme.spacing(2)};`);

const drawerWidth = 240;

const appBar = {
  width: `calc(100% - ${drawerWidth}px)`,
};

export default function Layout({ children }) {
  //For Navigating to different pages
  const navigate = useNavigate();
  //For knowing we are on which page
  const location = useLocation();

  const menuItems = [
    {
      text: "My Notes",
      icon: <SubjectOutlinedIcon color="secondary" />,
      path: "/Notes",
    },
    {
      text: "Create Note",
      icon: <AddCircleOutlineOutlinedIcon color="secondary" />,
      path: "/Create",
    },
  ];

  return (
    <div className={classes.root}>
      <AppBar style={appBar}>
        <Toolbar>
          <Typography className={classes.date}>Today is the {format(new Date(), "do MMMM Y")}</Typography>
          <Typography>Mario</Typography>
          <CAvatar src="/mario-av.png" />
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.customDrawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant="h5" className={classes.title}>
            Pranay Notes
          </Typography>
        </div>

        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => navigate(item.path)}
              className={location.pathname === item.path ? classes.active : null}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>{item.text}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className={classes.pageBg}>
        <Offset />
        {children}
      </div>
    </div>
  );
}
