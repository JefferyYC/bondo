import React from 'react';
import pic2 from './pic2.png';
import './App.css';
import Profilepicture from './components/profile_pictures.jsx'

//imported by ziang. (nav bar)
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import { Home } from './Home';
import { About } from './About';
import { NoMatch } from './NoMatch';

function App() {
  return (
  <React.Fragment>
    <Router>
    <NavigationBar />
    <Profilepicture height="200px" width="200px" url= {pic2} top="300px" left="100px" />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route component={NoMatch} />
      </Switch>   
    </Router>
  </React.Fragment>
        
  );
}

export default App;
