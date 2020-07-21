import React from "react";
import { Button } from "../components/AuthForms";
import { useAuth } from "../context/auth";
import { Redirect } from "react-router-dom";

function Admin(props) {
  const { setAuthTokens } = useAuth();

  function logOut() {
    setAuthTokens();
    return <Redirect to='/' />;
  }

  return (
    <div>
      <div>Admin Page</div>
      <Button onClick={logOut}>Log out</Button>
    </div>
  );
}

export default Admin;