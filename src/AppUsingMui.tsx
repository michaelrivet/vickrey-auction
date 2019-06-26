import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { dlsTheme } from './themes/DLSTheme';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import './App.css';

const blueButton = makeStyles({
  root: {
    backgroundColor: '#02aaf3',
    '&:hover': {
      backgroundColor: '#0288c2',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0288c2',
    },
    '&:focus': {
      boxShadow: 'none',
      backgroundColor: '#0288c2',
    },
  },
});

/** 
 * There are no properties in the main application: nobody passes it anything. 
 */
type AppProperties = { }

/** 
 * The entry point of the application.  
 */
export const AppUsingMui: React.SFC<AppProperties> = () => {

  const blueButtonClasses = blueButton();

  return (
    <ThemeProvider theme={dlsTheme}>
      <Container><h2>Using Material UI Components Directly</h2></Container>
      <Container>
        <Button disableRipple>Themed MuiButton</Button>
        <Button disableRipple variant="contained" color="primary">Themed MuiButton</Button>
        <Button disabled variant="contained" color="primary">Disabled MuiButton</Button>
        <Button variant="contained" color="secondary">Secondary MuiButton</Button>
        <Button disableRipple variant="contained" className={blueButtonClasses.root}>Themed MuiButton with JSS</Button>
        <Button disableRipple variant="contained" color="primary" className="redTextButton">Themed MuiButton with JSS</Button>
      </Container>
      <Container>
          <Button variant="outlined" color="primary" disableRipple>Primary Outlined MuiButton</Button>
          <Button variant="outlined" color="secondary">Secondary Outlined MuiButton</Button>
          <Button variant="outlined" color="primary"  disabled>Disabled Outlined MuiButton</Button>
      </Container>
      <Container>
        <Typography>
          <Link href="https://www.google.com" underline="none">Themed MuiLink</Link>
        </Typography>
      </Container>
    </ThemeProvider>
  )
}