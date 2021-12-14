import { Container, TableFooter } from '@mui/material';
import React from 'react';

const Footer = function () {
  return (
    <>
      <div className="ContenedorWaveFooter" />
      <TableFooter
        sx={{
          display: { xs: 'flex' },
          justifyContent: { xs: 'center' },
          alignItems: { xs: 'center' },
          flexDirection: { xs: 'column' },
          backgroundColor: '#28527A',
          color: 'white',
        }}
      >
        <Container
          sx={{
            display: { xs: 'grid', sm: 'flex' },
            justifyContent: { xs: 'center' },
            alignItems: { xs: 'center' },
          }}
        >
          Footer
        </Container>
      </TableFooter>
    </>
  );
};

export default Footer;
