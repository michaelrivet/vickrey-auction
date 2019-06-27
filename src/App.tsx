import * as React from 'react';
import { StylesProvider, ThemeProvider } from '@material-ui/styles';
import { dlsTheme } from './themes/DLSTheme';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { AppUsingMui } from './AppUsingMui';
import { AppUsingWrappers } from './AppUsingWrappers';

import './App.css';

/** 
 * There are no properties in the main application: nobody passes it anything. 
 */
type AppProperties = { }

/** 
 * The entry point of the application.  
 */
export const App: React.SFC<AppProperties> = () => {

  return (
    <React.Fragment>
      <StylesProvider injectFirst>
        <ThemeProvider theme={dlsTheme}>
          <Container>
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h6" color="inherit">DLS In Material UI!</Typography>
              </Toolbar>
            </AppBar>
          </Container>
        </ThemeProvider>

        <AppUsingWrappers />
          
      </StylesProvider>
    </React.Fragment>
  )
}