import React from 'react';
import { Box, Typography } from '@mui/material';
import ONGLogo from '../../Assets/Logo/logo.png';

const CampaignHeader = ({ campaignLogo, slogan }) => (
  <header role="menu">
    <Box
      sx={{
        paddingBlock: 2,
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        maxHeight: '120px',
        background: '#ff79614f',
      }}
    >
      <img src={campaignLogo} style={{ maxWidth: '80px' }} alt="campaignLogo" />
      <Typography
        sx={{
          color: '#DB5752',
          letterSpacing: 2,
          fontWeight: 'bold',
          display: {
            xs: 'none',
            sm: 'none',
            md: 'block',
            lg: 'block',
            xl: 'block',
          },
        }}
        variant="h4"
        component="h4"
      >
        {slogan}
      </Typography>
      <Box
        sx={{
          display: {
            xs: 'none',
            sm: 'block',
            md: 'block',
            lg: 'block',
            xl: 'block',
          },
        }}
      >
        <img src={ONGLogo} style={{ maxWidth: '100px' }} alt="ONG Logo" />
      </Box>
    </Box>
  </header>
);
export default CampaignHeader;
