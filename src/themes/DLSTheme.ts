import { createMuiTheme} from '@material-ui/core/styles';

const dlsTheme = createMuiTheme({
  typography: {
    fontFamily: [
      'lato',
      '-apple-system',
      'BlinkMacSystemFont',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
    ].join(','),
  },
  overrides: {    
    // Button
    MuiButtonBase: {
      root: {
        margin: '0 15px 15px 0',
      },
    },
    MuiButton: {
      root: {
        fontWeight: 700,
        padding: '15px 30px',
      },
      // None
      text: {
        padding: '15px 30px',
      },
      // End None

      // Primary
      contained: {
        borderRadius: 3,
        border: 0,
        color: 'white',
        boxShadow: 'none',
      },
      containedPrimary: {
        backgroundColor: '#00b437',
        '&:hover': {
          backgroundColor: '#00902c',
          borderColor: '#00902c',
        },
        '&:active': {
          boxShadow: 'none',
          backgroundColor: '#00902c',
          borderColor: '#00902c',
        },
        '&:focus': {
          boxShadow: 'none',
          backgroundColor: '#00902c',
          borderColor: '#00902c',
        },
        '&.Mui-disabled': {
          opacity: 0.7,
          backgroundColor: '#b8b8b8',
          color: '#ffffff',
        },
      },
      // End Primary

      // Secondary
      outlined: {
        borderRadius: 3,
        border: 0,
        color: 'white',
        padding: '12px 30px',
        boxShadow: 'none',
      },
      outlinedPrimary: {
        border: '3px solid #00b437',
        backgroundColor: '#ffffff',
        color: '#00b437',

        '&:hover': {
          border: '3px solid #00b437',
          backgroundColor: '#00b437',
          color: '#ffffff',
        },
        '&:active': {
          boxShadow: 'none',
          backgroundColor: '#00b437',
          border: '3px solid #00b437',
          color: '#ffffff',
        },
        '&:focus': {
          boxShadow: 'none',
          backgroundColor: '#00b437',
          border: '3px solid #00b437',
          color: '#ffffff',
        },
        '&.Mui-disabled': {
          opacity: 0.7,
          backgroundColor: '#ffffff',
          border: '3px solid #b8b8b8',
          color: '#b8b8b8',
        },
      },
      // End Secondary
    },
    // End Button

    // Link
    MuiLink: { 
      underlineNone: {
        fontWeight: 700,
        letterSpacing: '0.1rem',
        color: '#02aaf3',
        '&:hover': {
          color: '#0288c2',
        },
      },
    },
    // End Link
  },
});

export { dlsTheme };