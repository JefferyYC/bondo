import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import { Home } from './Home';
import { About } from './About';
import { NoMatch } from './NoMatch';
import { MentorProfile} from './MentorProfile';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/mentorprofile" component={MentorProfile} />
          <Route component={NoMatch} />
      </Switch>   
    </Router>
  );
}

export default App;
