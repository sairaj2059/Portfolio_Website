import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import "../resources/css/dashboard.css";
import axios from "axios";
// import userName from
import {
  DEFAULT_SIDE_MENU,
  IconTitleMap,
} from "../Utils/Constants";
import {
  Avatar,
  Menu,
  MenuItem,
  Skeleton,
  Snackbar,
  Tooltip,
} from "@mui/material";
import { Link, Route, Routes } from "react-router-dom";
import Academics from "./Academics";
import Projects from "./Projects";
import Resume from "./Resume";
import BreadCrumbComponent from "./BreadCrumbComponent";
import SocialProfiles from "./SocialProfiles";
import { setDrawerOpen, setSnackbarOpen } from "../redux/slices/systemSlice";
import { useDispatch, useSelector } from "react-redux";
import { setActivePage, setActiveSideMenu } from "../redux/slices/navSlice";
import { CloseRounded } from "@mui/icons-material";
import Home from "./Home";
import userImage from "../resources/images/dp_image.png"
import { useState } from "react";
import { useEffect } from "react";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  border: "none",
  margin: "1%",
  backgroundColor: "transparent",
  borderRadius: "21px 21px 21px 21px",
  height: `calc(100vh - 5%)`,
});
const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  border: "none",
  margin: "1%",
  background: "transparent",
  borderRadius: "21px 21px 21px 21px",
  height: `calc(100vh - 5%)`,
  "&:hover": {
    transition: "0.3s all ease-in-out",
  },
  // background: '#F0F0F0',
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingTop: "1%",
  paddingLeft: "1%",
  boxShadow: "none",
  // border: '2px solid red',
  background: "transparent",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px - 1%)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",

  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Dashboard() {
  const [userProfileDefaultData, setUserProfileDefaultData] = useState({})

  useEffect(() => {
    function fetch_data() {
        axios.get("http://localhost:13000/users/getData")
            .then((response) => {
                setUserProfileDefaultData(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    fetch_data();
}, []);

  const theme = useTheme();
  const [dataStatus, setDataStatus] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const userName = userProfileDefaultData.Name;
  const openAvatarMenu = Boolean(anchorEl);

  const dispatch = useDispatch();
  const ActivePage = useSelector((state) => state.navigation.ActivePage);
  const activeSideMenu = useSelector(
    (state) => state.navigation.activeSideMenu
  );
  const drawerOpen = useSelector((state) => state.system.drawerOpen);
  const openSnackbar = useSelector((state) => state.system.snackbarOpen);
  const snackbarMessage = useSelector((state) => state.system.snackbarMessage);
  const handleDrawerOpen = () => {
    dispatch(setDrawerOpen({ drawerOpen: true }));
  };
  const handleDrawerClose = () => {
    dispatch(setDrawerOpen({ drawerOpen: false }));
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseAvatarMenu = () => {
    setAnchorEl(null);
  };

  const AvatarMenuClickHandler = (index) => {
    setAnchorEl(null);
    if (index === 0) {
      return;
    }
    let message = "";
    if (index === 1) message = "Resume Download Started";
    else if (index === 2) message = "Dark Mode is On";
    dispatch(setSnackbarOpen({ snackbarOpen: true, snackbarMessage: message }));
  };

  const activeBtnChange = (index) => {
    setDataStatus(true);
    dispatch(setActivePage({ activePage: DEFAULT_SIDE_MENU[index].title }));
    dispatch(setActiveSideMenu({ activeSideMenu: index }));
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(setSnackbarOpen({ snackbarOpen: false, snackbarMessage: null }));
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleCloseSnackbar}
      >
        <CloseRounded fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <Box sx={{ display: "flex" }} className="MainContainer">
      <CssBaseline />
      <AppBar open={drawerOpen} className="AppBar">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              color: "#544600",
              ...(drawerOpen && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={drawerOpen}>
        <DrawerHeader
          className={`${drawerOpen ? "show sideFloatClass" : "hide"}`}
        >
          <Avatar
            alt="User Image"
            src={userImage}
            sx={{ border: "3px solid #544600" }}
          />
          <h1
            style={{
              marginRight: "auto",
              marginLeft: "4%",
              fontSize: "18px",
              color: "#544600",
            }}
          >
            {userName}
          </h1>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <List className="sideMenuContainer" sx={{ background: "transparent" }}>
          {DEFAULT_SIDE_MENU.map((data, index) => (
            <div
              key={index}
              className={drawerOpen ? "sideFloatClass" : ""}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <Link className="sideMenuLinks" to={data.link}>
                <ListItem
                  key={index}
                  disablePadding
                  sx={{ display: "block" }}
                  className={
                    index === activeSideMenu
                      ? drawerOpen
                        ? "activeOpenBtn"
                        : "activeCloseBtn"
                      : "sideMenuItem"
                  }
                  onClick={() => activeBtnChange(index)}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: drawerOpen ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <Tooltip title={data.title} placement="right">
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: drawerOpen ? 3 : "auto",
                          justifyContent: "center",
                          color: index === activeSideMenu ? "white" : "#544600",
                        }}
                      >
                        {data.icon}
                      </ListItemIcon>
                    </Tooltip>
                    <ListItemText
                      primary={data.title}
                      sx={{ opacity: drawerOpen ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>
              </Link>
            </div>
          ))}
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
          <div className="MainComponent">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/social-profile" element={<SocialProfiles />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/academics" element={<Academics />} />
              <Route path="*" element={<h1>Jai sairam! Page not found</h1>} />
            </Routes>
          </div>
      </Box>
    </Box>
  );
}
