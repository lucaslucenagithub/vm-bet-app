import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// https://tailwindcss.com/docs/customizing-colors - zinc palette

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#0f172a',
    },
    secondary: {
      main: '#09090b',
    },
    error: {
      main: red.A400,
    },
    success: {
      main: '#00ff00',
    },
    background: {
      default: '#020617',
    },
  },
});

export default theme;