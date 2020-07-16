import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Main from './Main'
import * as serviceWorker from './serviceWorker';
//imported by ziang. (nav bar)
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import { Home } from './Home';
import { About } from './About';
import { NoMatch } from './NoMatch';

ReactDOM.render(
  <React.StrictMode>
    <React.Fragment>
      <Router>
      <NavigationBar />
      <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route component={NoMatch} />
      </Switch>   
      </Router>
    </React.Fragment>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
