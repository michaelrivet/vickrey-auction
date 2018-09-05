/** 
 * This is the main entry point of your React application. 
 * The React application is a React component like any other react components. 
 */
import * as React from 'react';

/** 
 * There are no properties in the main application: nobody passes it anything. 
 */
export type AppProperties = { }

/** 
 * This is a state object for the whole Theme information is stored in app state. Optionally this could have been added to the store and added it 
 * as its own reducer, but it would have added a lot of additional complexity for a simple string value. 
 */
export type AppState = { };

/** 
 * The entry point of the application.  
 */
export class App extends React.PureComponent<AppProperties, AppState> 
{
  state: AppState = { }
    
  render(): React.ReactNode 
  {
    return (
      <div>Hello react!</div>
    );
  }
}