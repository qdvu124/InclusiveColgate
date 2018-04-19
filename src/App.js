import React from 'react';

import NavBar from './NavBar/NavBar.js'
import Stories from './Stories/Stories.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from './styles.js'
function App(){
  return (
      <MuiThemeProvider muiTheme={muiTheme}>
        
        <NavBar/>
        <br/>

        <div className="container">
          <Stories/>
        </div>
      </MuiThemeProvider>
  );
}

export default App;
