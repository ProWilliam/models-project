import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Animation from './components/Animation/Animation' ;

import Navigation from './components/navbar/Navigation';

function App() {
  return (
    <Router>
      <Navigation/>
      
      <Route exact path="/" component={Animation} />
    </Router>
  );
}

export default App;
