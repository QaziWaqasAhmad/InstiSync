import React, { useState, useEffect, useContext } from "react";
import { FormControl, useTheme } from "@mui/material";
import {
  Box,
  Toolbar,
  List,
  CssBaseline,
  Typography,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Icon,
  Menu,
  MenuItem,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { CustomAppBar, DrawerHeader, CustomDrawer } from "./styledComponents";
// import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  VerifiedUser,
  PersonAddAltOutlined,
} from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import {
  ProfileHeader,
  MenuItemStyle,
  NavigationStyle,
  DrawerStyle,
  CustomCard,
  ActiveBtn,
  InactiveBtn,
  Count,
  AvatarStyle,
  Title,
  GlobalBtnStyle,
  GlobalInputLabel,
  GlobalDialogContentStyle,
} from "./style"; //
import { AppContext } from "../../context";
// import Products from "../../constainers/appStack/Products";
// import CategoryIcon from '@mui/icons-material/Category';
const userData = JSON.parse(localStorage.getItem("user"));
import logo2 from "../../assets/logo2.png";
import message from "../../assets/sms.png";
import setting from "../../assets/Setting.svg";
import teacher from "../../assets/teacher.png";
import calendar from "../../assets/calendar.png";
import category from "../../assets/Category.png";
import admin from "../../assets/people.png";
import logoutbtn from "../../assets/Logout.png";

export default function NavigationDrawer(props) {
  const { openDrawer, setOpenDrawer, logout, user } = useContext(AppContext);
  // console.log(user, "usersssssssssssssssssssssssssssssss")
  const navigate = useNavigate();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  useEffect(() => {
    const toggleItem = JSON.parse(localStorage.getItem("toggle_drawer"));

    if (toggleItem) setOpenDrawer(toggleItem);
  }, []);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const routes = [
    {
      icon: <img src={category} />,
      path: "/home",
      label: "Dashboard",
    },
    {
      icon: <img src={admin} />,
      path: "/admission",
      label: "Admission",
    },
    {
      icon: <PersonAddAltOutlined />,
      path: "/user",
      label: "Users",
    },
    {
      icon: <img src={teacher} />,
      path: "/form1",
      label: "Forms",
    },
    {
      icon: <img src={calendar} />,
      path: "/calendar",
      label: "Calendar",
    },
    {
      icon: <img src={message} />,
      path: "/message",
      label: "Message",
    },
    {
      icon: <img src={setting} />,
      path: "/setting",
      label: "Setting",
    },
  ];

  const navigateToPage = (route) => {
    localStorage.setItem("toggle_drawer", openDrawer);
    navigate(route);
  };
  let location = useLocation();
  console.log(location.pathname)
  return (
    <Box sx={{ display: "flex" }} /* style={{backgroundColor:"#f0f0f0"}} */>
      <CssBaseline />
      <CustomAppBar position="fixed" open={openDrawer} className="">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: "36px",
              color: "black",
              ...(openDrawer && { display: "none" }),
              boxShadow: "none",
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>

          <div>
            <ListItem
              className={ProfileHeader}
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
              style={{ cursor: "pointer", paddingRight: 0 }}
            >
              <ListItemAvatar>
                <Avatar>
                  {/* {user?.userDetails.name == "Admin" ? (
                    user.userDetails.name?.charAt(0)
                  ):(
                    <img width={40} height={40} src="https://media.licdn.com/dms/image/D4D03AQHB7uIB9yCnjA/profile-displayphoto-shrink_400_400/0/1689335216207?e=1700697600&v=beta&t=VY8xnW3VVL6ccFY_34ges7xT1PMZ8YZqvlH6N5xe890" />
                  )} */}
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={user?.name} />
            </ListItem>

            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem
                onClick={() => {
                  // handleClose();
                  // localStorage.clear();
                  // navigate("/");
                  logout();
                  // window.location.pathname = "/login";
                }}
                className={MenuItemStyle}
              >
                Logout
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </CustomAppBar>
      <CustomDrawer
        variant="permanent"
        open={openDrawer}
        className="dashboard-sidebar"
      >
        <div
          style={{
            // backgroundColor: openDrawer ? "#f0f0f0" : "#fff",
            background: "black",
            paddingBottom: "25px",
          }}
        >
          <DrawerHeader style={{ minHeight: "42px" }}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon
                  style={{
                    background: "#fff",
                    borderRadius: "50%",
                    fontSize: "12px",
                  }}
                />
              ) : (
                <ChevronLeftIcon
                  style={{
                    background: "#fff",
                    borderRadius: "50%",
                    fontSize: "20px",
                  }}
                />
              )}
            </IconButton>
          </DrawerHeader>

          <div
            style={{
              display: openDrawer ? "flex" : "none",
              justifyContent: "center",

              // margin: "15px 0 10px",
            }}
          >
            {/* <ListItemAvatar> */}
            <div className="logoCard">
              <img src={logo2} alt="logo" style={{ width: 55, height: 50 }} />
              <div className="logotext">InstiSync</div>
            </div>
            {/* <Avatar style={{ width: 60, height: 60 }}>
              
                 {userData?.image ? (
                <img width={55} height={55} src={} />
              ) : ( 
                  
                 {userData.role == "Admin" ? (
                  userData?.name?.charAt(0)
                  
                ) : (
                  <img
                    style={{ width: 60, height: 60 }}
                    src={userData?.logoImage}
                  />
                )}  
                
              </Avatar> */}

            {/* {/* </ListItemAvatar> */}
          </div>
        </div>
        <List style={{ background: "black", height: "100vh"}}>
          <>
            {routes.map((route, index) => (
              <ListItem
                className={`listItem ${
                  location.pathname === '/home' ? "active" : ""
                } `}
                key={index}
                // className={NavigationStyle}
                onClick={() => navigateToPage(route.path)}
              >
                <ListItemIcon style={{ cursor: "pointer", color: "#fff" }}>
                  {route.icon}
                </ListItemIcon>
                <ListItemText
                  primary={route.label}
                  style={{
                    display: openDrawer ? "block" : "none",
                    cursor: "pointer",
                  }}
                  className={"listText"}
                />
              </ListItem>
            ))}
            <div
              className="logout"
              onClick={() => {
                logout();
              }}
            >
              <img src={logoutbtn} alt="" />
              <div className="logoutText">Logout</div>
            </div>
          </>
        </List>
      </CustomDrawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, overflowX: "auto" }}>
        <div style={{ marginBottom: "50px" }}></div>
        {props.children}
      </Box>
      <CustomCard />
    </Box>
  );
}
