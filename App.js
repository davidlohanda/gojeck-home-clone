import React, { Component } from 'react';
import Router from './src/config/router';

class App extends Component {
  render() {
    console.disableYellowBox = true;
    return(
      <Router />
    )
  }
}

export default App;
