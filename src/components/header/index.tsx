import {
  AppBar,
  Box,
  Button,
  FormControlLabel,
  FormGroup,
  IconButton,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";

import { Menu as MenuIcon } from "@mui/icons-material";
import React, { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { toggleDarkMode } from "../../redux/actions";

const Header: React.FC = () => {
  const dispatch = useDispatch();

  const _onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(toggleDarkMode(event.target.checked));
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
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
            SkyLine
          </Typography>
          <Button color='inherit' variant='outlined'>
            Login
          </Button>
          <FormGroup>
            <FormControlLabel
              control={<Switch onChange={_onChangeHandler} color='secondary' />}
              label='Dark Mode'
              labelPlacement='start'
            />
          </FormGroup>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
