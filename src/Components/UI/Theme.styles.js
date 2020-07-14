import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

const favPurple = purple[900];
const arcBlue = '#0B72B9';
const arcOrange = '#FFBA60';
const arcGrey = '#868686';

const theme = createMuiTheme({
  palette: {
    common: {
      blue: favPurple,
      orange: favPurple,
    },
    primary: {
      main: favPurple,
      otherMain: favPurple,
    },
    secondary: {
      main: arcBlue,
      otherMain: arcOrange,
    },
  },
  typography: {
    tab: {
      fontFamily: 'Ubuntu, sans-serif',
      fontWeight: 500,
      fontSize: '1.2rem',
      minWidth: 10,
      margin: '25px',
    },
    estimate: {
      fontFamily: 'Pacifico',
      fontSize: '1rem',
      textTransform: 'none',
      color: 'white',
    },
    h2: {
      fontFamily: 'Raleway',
      fontWeight: 700,
      fontSize: '2.5rem',
      color: favPurple,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: 'Pacifico',
      fontSize: '2.5rem',
      color: 'white',
    },
    h4: {
      // fontFamily: 'Raleway',
      fontSize: '1.75rem',
      color: favPurple,
      fontWeight: 700,
    },
    h6: {
      fontWeight: 500,
      // fontFamily: 'Raleway',
      color: favPurple,
    },
    subtitle1: {
      fontSize: '1.25rem',
      fontWeight: 300,
      color: arcGrey,
    },
    subtitle2: {
      color: 'white',
      fontWeight: 300,
      fontSize: '1.25rem',
    },
    body1: {
      fontSize: '1.25rem',
      color: arcGrey,
      fontWeight: 300,
    },
    caption: {
      fontSize: '1rem',
      fontWeight: 300,
      color: arcGrey,
    },
    learnButton: {
      borderColor: favPurple,
      borderWidth: 2,
      textTransform: 'none',
      color: favPurple,
      borderRadius: 50,
      fontFamily: 'Roboto',
      fontWeight: 'bold',
    },
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: favPurple,
        fontSize: '1rem',
      },
    },
    MuiInput: {
      root: {
        color: arcGrey,
        fontWeight: 300,
      },
      underline: {
        '&:before': {
          borderBottom: `2px solid ${favPurple}`,
        },
        '&:hover:not($disabled):not($focused):not($error):before': {
          borderBottom: `2px solid ${favPurple}`,
        },
      },
    },
  },
});
export default theme;
