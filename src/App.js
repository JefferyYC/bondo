import React, { useState } from "react";
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from './routes/Home';
import About from './routes/About';
import { AuthContext } from './context/auth';
import PrivateRoute from './components/PrivateRoute';
import Login from './routes/Login'
import Signup from './routes/Signup'
import Platform from './routes/Platform'
import Profile from './routes/MyProfile'
import Message from './routes/Message'
import Mentorsignup from './routes/MentorSignup'

//reference: https://medium.com/better-programming/building-basic-react-authentication-e20a574d5e71
import { MentorProfile} from './routes/MentorProfile';

function App() {

  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingTokens);

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }

  return (
    <AuthContext.Provider value={{authTokens, setAuthTokens: setTokens}}>
      <Router>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/mentorprofile" component={MentorProfile} />
        <Route path="/myprofile" component={Profile}/>
        <Route path="/message" component={Message}/>
        <Route path="/mentorsignup" component={Mentorsignup}/>
        <PrivateRoute path="/platform" component={Platform} />  
        <PrivateRoute path="/about" component={About} />  
        </Switch> 
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
