import { createTheme } from '@mui/material/styles';

const tema = createTheme({
  palette: {
    boton: {
      main: '#28527a',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    lightBotons: {
      main: '#ffffff',
    },
  },
});

export default tema;
