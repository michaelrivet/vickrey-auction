import * as React from 'react';
import { createMuiTheme, withStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import './_app.css';

const UShipButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '.5rem 1.875rem;',
    border: 'none',
    backgroundColor: '#00b437',
    borderColor: '#00b437',
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
    '&:hover': {
      backgroundColor: '#00902c',
      borderColor: '#00902c',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#00902c',
      borderColor: '#00902c',
    },
    '&.Mui-disabled': {
      color: '#ffffff',
    }
  },
})(Button)

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

/** 
 * There are no properties in the main application: nobody passes it anything. 
 */
type AppProperties = { }

/** 
 * The entry point of the application.  
 */
export const App: React.SFC<AppProperties> = () => {

  const classes = useStyles();

  return (
    <React.Fragment>
      <Container>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit">DLS In Material UI!</Typography>
          </Toolbar>
        </AppBar>
      </Container>
      <Container>
        <UShipButton variant="contained" color="primary" disableRipple className={classes.margin}>
          DLS Button
        </UShipButton>

        <UShipButton variant="contained" color="primary" disableRipple className={classes.margin} disabled>
          DLS Disabled
        </UShipButton>
      </Container>
    </React.Fragment>
  )
}