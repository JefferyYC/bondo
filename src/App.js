import React, { useState } from "react";
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import { Home } from './Home';
import About from './About';
import { NoMatch } from './NoMatch';
import { AuthContext } from './context/auth';
import PrivateRoute from './PrivateRoute';
import Login from './Login'
import Signup from './Signup'

//reference: https://medium.com/better-programming/building-basic-react-authentication-e20a574d5e71

function App() {

  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingTokens);

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }

  return (
    <AuthContext.Provider value={{authTokens, setAuthTokens: setTokens }}>
      <Router>
        <NavigationBar />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <PrivateRoute path="/about" component={About} />
            <Route component={NoMatch} />
        </Switch>   
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
