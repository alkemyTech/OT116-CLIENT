import { Container } from '@mui/material';
import React from 'react';

const Header = function () {
  return (
    <Container
      maxWidth={false}
      sx={{
        display: 'flex', backgroundColor: '#28527A', justifyContent: 'space-between', padding: '0 15px 0 10px',
      }}
    >
      Header
    </Container>
  );
};

export default Header;
