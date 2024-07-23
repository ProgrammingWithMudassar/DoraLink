import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const font = 'Nunito, sans-serif';

const theme = createTheme({
  palette: {
    primary: {
      main: '#005050',
    },
  },
  typography: {
    fontFamily: font,
    allVariants: {
      color: '#005050',
    },
    button: {
      background: '#EDC700',
      border: 0,
      color: '#005050',
      height: 30,
      fontSize: '20px',
      padding: '10px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      textTransform: 'none',
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          background: '#EDC700',
          border: 0,
          color: '#005050',
          height: 30,
          fontSize: '20px',
          padding: '10px',
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
          textTransform: 'none',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        '@global': {
          '*::-webkit-scrollbar': {
            width: '0px',
            height: '10px',
          },
          '*::-webkit-scrollbar-thumb': {
            width: '0rem',
            backgroundColor: '#D5073C',
            borderRadius: '2rem',
          },
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          "& .MuiDataGrid-columnHeaders": {
            fontSize: 17.8,
          },
          "& .MuiDataGrid-row.Mui-selected": {
            backgroundColor: "red",
          },
        },
      },
    },
  },
});

export default theme;