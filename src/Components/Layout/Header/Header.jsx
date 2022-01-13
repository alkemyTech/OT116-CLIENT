import React from 'react';
import { useSelector } from 'react-redux';
import { Button, Container, Stack } from '@mui/material';
import { NavLink } from 'react-router-dom';
import ONGLogo from '../../../Assets/Logo/logo.png';
import './Header.css';

const Header = function () {
  const { isAuthenticated } = useSelector(({ auth }) => auth);
  return (
    <Container
      as="header"
      maxWidth={false}
      sx={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 15px 0 10px',
      }}
    >
      <Stack
        spacing={2}
        direction="row"
        alignItems="center"
      >
        <img style={{ maxWidth: '80px', maxHeight: '80px' }} src={ONGLogo} alt="" />
        <Stack
          as="nav"
          spacing={4}
          direction="row"
          alignItems="center"
        >
          <NavLink className="navlink" activeClassName="active" to="/"> Home </NavLink>
          <NavLink className="navlink" activeClassName="active" to="/us"> Nosotros </NavLink>
          <NavLink className="navlink" activeClassName="active" to="/news"> Novedades </NavLink>
          <NavLink className="navlink" activeClassName="active" to="/activities"> Actividades </NavLink>
          <NavLink className="navlink" activeClassName="active" to="/testimonials"> Testimonios </NavLink>
          <NavLink className="navlink" activeClassName="active" to="/contact"> Contacto </NavLink>
          <NavLink className="navlink" activeClassName="active" to="/donations"> Contribuye </NavLink>
        </Stack>
      </Stack>

      <Stack spacing={2} direction="row">

        {isAuthenticated ? <Button color="error" variant="contained">Log Out</Button>
          : (
            <>
              <Button>Log In</Button>
              <Button variant="contained">Register</Button>
            </>
          )}
      </Stack>
    </Container>
  );
};

export default Header;
