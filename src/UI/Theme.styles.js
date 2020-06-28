import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const favPurple = purple[900];
const favGreen = green[500];
const theme = createMuiTheme({
  palette: {
    primary: {
      main: `${favPurple}`,
    },
    secondary: {
      main: `${favGreen}`,
    },
  },
});
export default theme;
