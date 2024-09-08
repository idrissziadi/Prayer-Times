import { createTheme } from '@mui/material/styles';

// Define the light theme
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    common: {
      black: '#000',
      white: '#fff',
    },
    primary: {
      main: '#378dfc', // blue
    },
    secondary: {
      main: '#d9e3f1', // gray-200
    },
    success: {
      main: '#43cc29', // green
    },
    info: {
      main: '#5b62f4', // purple
    },
    warning: {
      main: '#ffc107', // yellow
    },
    danger: {
      main: '#e52527', // red
    },
    light: {
      main: '#f0f5fa', // gray-100
    },
    dark: {
      main: '#212529', // gray-900
    },
    background: {
      default: '#d9e3f1', // gray-200
      paper: '#f0f5fa', // light background
    },
    text: {
      primary: '#7b8ab8', // gray-700
      secondary: '#7f8a99', // gray-600
      disabled: '#adb5bd', // gray-500
      hint: '#dee2e6', // gray-300
    },
  },
  typography: {
    fontFamily: [
      'Nunito',
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
    fontWeightBold: 600,
    button: {
      textTransform: 'none', // Disable uppercase transformation for buttons
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '1rem 1.5rem',
          borderRadius: '50rem',
          boxShadow: '5px 5px 10px rgba(33,37,41,0.2), -5px -5px 10px rgba(255,255,255,0.4)',
        },
        sizeLarge: {
          padding: '1.5rem 2.25rem',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: '#f0f5fa', // gray-100
          '&::placeholder': {
            color: '#adb5bd', // muted text
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '0', // Custom border radius for cards
          boxShadow: '8px 8px 40px rgba(33,37,41,0.15)',
        },
      },
    },
    // Add more component overrides as needed
  },
});

// Define the dark theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    common: {
      black: '#000',
      white: '#fff',
    },
    primary: {
      main: '#378dfc', // blue
    },
    secondary: {
      main: '#d9e3f1', // gray-200
    },
    success: {
      main: '#43cc29', // green
    },
    info: {
      main: '#5b62f4', // purple
    },
    warning: {
      main: '#ffc107', // yellow
    },
    danger: {
      main: '#e52527', // red
    },
    light: {
      main: '#f0f5fa', // gray-100
    },
    dark: {
      main: '#212529', // gray-900
    },
    background: {
      default: '#212529', // dark background
      paper: '#343a40', // darker paper background
    },
    text: {
      primary: '#e9ecef', // light text
      secondary: '#adb5bd', // muted text
      disabled: '#6c757d', // disabled text
      hint: '#495057', // dark hint text
    },
  },
  typography: {
    fontFamily: [
      'Nunito',
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
    fontWeightBold: 600,
    button: {
      textTransform: 'none', // Disable uppercase transformation for buttons
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '1rem 1.5rem',
          borderRadius: '50rem',
          boxShadow: '5px 5px 10px rgba(33,37,41,0.2), -5px -5px 10px rgba(255,255,255,0.4)',
        },
        sizeLarge: {
          padding: '1.5rem 2.25rem',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: '#343a40', // dark background
          '&::placeholder': {
            color: '#6c757d', // muted text
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '0', // Custom border radius for cards
          boxShadow: '8px 8px 40px rgba(33,37,41,0.15)',
        },
      },
    },
    // Add more component overrides as needed
  },
});

export { lightTheme, darkTheme };
