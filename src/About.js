import React from 'react';
import { Button } from "./components/AuthForm";
import { useAuth } from "./context/auth";
import { Redirect } from "react-router-dom";


function About(props) {
  const { setAuthTokens } = useAuth();

  function logOut() {
    setAuthTokens("wrong");
  }

  return (
    <div>
      <div>About Page</div>
      <Button onClick={logOut}>Log out</Button>
    </div>
  );
}

export default About;