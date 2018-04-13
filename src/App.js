import React from 'react';

import NavBar from './NavBar/NavBar.js'
import Stories from './Stories/Stories.js'
import {MuiThemeProvider} from 'material-ui/styles';

const App = () => {
  return (
    <MuiThemeProvider>
      <NavBar/>
      <br/>
      <div className="container">
        <Stories/>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
