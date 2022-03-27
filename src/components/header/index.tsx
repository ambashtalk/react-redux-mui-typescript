import React from "react";
import { AppBar, Box, Button, IconButton, Typography } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import SettingsDrawer from "./settingsDrawer";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getIsAuthenticated } from "src/redux/selectors/authSelectors";
import { ModifiedToolbar } from "./index.styles";
import { useNavigate } from "react-router-dom";
import { useAuth } from "src/hooks/auth";

const Header: React.FC = () => {
  const [t] = useTranslation("main", { keyPrefix: "headerSection" });
  const navigate = useNavigate();
  const isAuthenticated = useSelector(getIsAuthenticated);
  const auth = useAuth();

  const _handleLoginButtonClick = (path: string) => {
    navigate(path);
  };

  const _handleLogoutButtonClick = async () => {
    await auth.signOut();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <ModifiedToolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            {t("companyLogo.text")}
          </Typography>
          {!isAuthenticated ? (
            <Button
              color='inherit'
              variant='outlined'
              onClick={() => _handleLoginButtonClick(t("loginButton.href"))}
            >
              {t("loginButton.text")}
            </Button>
          ) : (
            <Button
              color='secondary'
              variant='contained'
              onClick={() => _handleLogoutButtonClick()}
            >
              {t("logoutButton.text")}
            </Button>
          )}
          <SettingsDrawer />
        </ModifiedToolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
