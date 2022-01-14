import React from 'react';
import { Container, Stack } from '@mui/material';
import { NavLink } from 'react-router-dom';
import ONGLogo from '../../../Assets/Logo/logo.png';
import './Header.css';

const Header = () => (
  <Container
    as="header"
    maxWidth={false}
    sx={{
      background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 15px 0 10px',
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
        <NavLink className="navlink" activeClassName="active" to="/"> Inicio </NavLink>
        <NavLink className="navlink" activeClassName="active" to="/toys-campaign"> Campaña de Juguetes </NavLink>
        <NavLink className="navlink" activeClassName="active" to="/school-campaign"> Campaña de Escolar </NavLink>
      </Stack>
    </Stack>
  </Container>
);

export default Header;
