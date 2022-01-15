import { Container, TableFooter } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';
import ONGLogo from '../../Assets/Logo/logo.png';
import './Footer.css';

const Footer = function () {
  return (
    <>
      <div className="ContenedorWaveFooter" />
      <TableFooter
        as="footer"
        sx={{
          display: { xs: 'flex' },
          justifyContent: { xs: 'center' },
          alignItems: { xs: 'center' },
          flexDirection: { xs: 'column' },
          color: 'white',
        }}
      >
        <Container
          sx={{
            display: { xs: 'grid', sm: 'flex' },
            justifyContent: { xs: 'center' },
            gap: '2rem',
            alignItems: { xs: 'center' },
          }}
        >
          <Link className="footerLink" to="/toys-campaign">Campaña de Jugutes</Link>
          <Link to="/"><img src={ONGLogo} alt="somos mas logo" /></Link>
          <Link className="footerLink" to="/school-campaign">Campaña Escolar</Link>
        </Container>
        <p className="copyright">2021 by Alkemy. All Rights Reserved.</p>
      </TableFooter>
    </>
  );
};

export default Footer;
