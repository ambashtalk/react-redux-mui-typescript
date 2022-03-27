import React, { ChangeEvent, useState } from "react";
import {
  Brightness3,
  Brightness5,
  Close,
  Settings,
  History,
  Logout,
  Person,
  ShoppingCart,
} from "@mui/icons-material";
import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
  Tooltip,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  SideBarDrawer,
  SideBarPage,
  SideBarTitle,
  TitleContainer,
} from "./settingsDrawer.styles";
import { toggleDarkMode } from "src/redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { getDarkMode } from "src/redux/selectors";
import { getIsAuthenticated } from "src/redux/selectors/authSelectors";
import { useNavigate } from "react-router-dom";
import { useAuth } from "src/hooks/auth";

const SettingsDrawer: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [t] = useTranslation("main", { keyPrefix: "headerSection" });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isAuthenticated = useSelector(getIsAuthenticated);
  const auth = useAuth();

  const isDarkMode = useSelector(getDarkMode);
  const sideBarItems = t("settingsSideBar.items");

  const _handleSettingsIconClick = () => {
    setIsSidebarOpen(true);
  };

  const _handleListItemClick = (path: string) => {
    navigate(path);
  };

  const _handleLogoutButtonClick = async () => {
    await auth.signOut();
  };

  const _handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

  const _onChangeDarkModeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(toggleDarkMode(event.target.checked));
  };

  const getSideBarItemIcon = (iconName: string) => {
    switch (iconName) {
      case "Person":
        return <Person />;
      case "History":
        return <History />;
      case "ShoppingCart":
        return <ShoppingCart />;
    }
  };

  return (
    <>
      <Tooltip title={t("settingsIcon.tooltip")}>
        <IconButton color='inherit' onClick={_handleSettingsIconClick}>
          <Settings />
        </IconButton>
      </Tooltip>
      <SideBarDrawer
        PaperProps={{ style: { backgroundColor: "transparent" } }}
        anchor='right'
        open={isSidebarOpen}
        onClose={_handleSidebarClose}
      >
        <SideBarPage>
          <TitleContainer>
            <SideBarTitle variant='body1'>
              {t("settingsSideBar.title")}
            </SideBarTitle>
            <IconButton onClick={_handleSidebarClose}>
              <Close />
            </IconButton>
          </TitleContainer>
          <Divider />
          <List>
            <ListItem>
              <ListItemIcon>
                {isDarkMode ? <Brightness3 /> : <Brightness5 />}
              </ListItemIcon>
              <ListItemText primary={t("settingsSideBar.darkMode.title")} />
              <Switch
                checked={isDarkMode}
                onChange={_onChangeDarkModeHandler}
                color='secondary'
              />
            </ListItem>
            {isAuthenticated &&
              sideBarItems.map((item) => (
                <ListItemButton
                  onClick={() => _handleListItemClick(item.href)}
                  key={item.name}
                >
                  <ListItemIcon>{getSideBarItemIcon(item.icon)}</ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              ))}
            {isAuthenticated && (
              <ListItemButton onClick={() => _handleLogoutButtonClick()}>
                <ListItemIcon>
                  <Logout />
                </ListItemIcon>
                <ListItemText primary={t("logoutButton.text")} />
              </ListItemButton>
            )}
          </List>
        </SideBarPage>
      </SideBarDrawer>
    </>
  );
};

export default SettingsDrawer;
