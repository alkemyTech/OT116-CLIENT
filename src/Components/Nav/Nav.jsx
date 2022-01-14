import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../app/authReducer/authReducer';

const Nav = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Brand
          </Typography>
          {
            isAuthenticated
              ? <Button type="button" onClick={() => dispatch(logout())} style={{ color: 'white' }}>LogOut</Button>
              : (
                <NavLink exact to="/login" style={{ textDecoration: 'none' }}>
                  <Button style={{ color: 'white' }}>LogIn</Button>
                </NavLink>
              )
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nav;
