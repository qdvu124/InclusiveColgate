import React from 'react';

import NavBar from './NavBar/NavBar.js';
import Stories from './Stories/Stories.js';
import './styles/App.css'; 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './styles.js';

function App(){
  return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <NavBar/>
        <div className="image">
          <div className="inclusive-text"> For an inclusive Colgate </div>
        </div>
        <div className="stories ">
          <Stories/>
        </div>
      </MuiThemeProvider>
  );
}

export default App;
