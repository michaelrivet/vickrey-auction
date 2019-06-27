import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { dlsTheme } from './themes/DLSTheme';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';

import { Button } from './components/Button';
import { Link } from './components/Link';

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
export const AppUsingWrappers: React.SFC<AppProperties> = () => {

  const onHoverConsole = () => {
    console.log('I am hovered');
  }

  const blueButtonClasses = blueButton();

  return (
    <ThemeProvider theme={dlsTheme}>      
      <Container><h2>Building Wrapper Components</h2></Container>
      <Container>
          <Button variant="primary">Default</Button>
          <Button variant="primary" disabled>Default Disabled</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="secondary" disabled>Secondary Button</Button>
          <Button variant="primary" className="redTextButton">Primary Button with styles from css</Button>
          <Button variant="primary" className={blueButtonClasses.root} disableRipple={false}>Primary Button with JSS</Button>
          <Button variant="primary" onMouseEnter={() => onHoverConsole()} aria-label="test">Kitchen Sink</Button>
      </Container>
      <Container>
        <Link href="https://www.google.com">Themed MuiLink</Link>
      </Container>
    </ThemeProvider>
  )
}