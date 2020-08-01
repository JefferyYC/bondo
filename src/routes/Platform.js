import React from 'react';
import { Button } from "../components/AuthForm";
import { useAuth } from "../context/auth";

function Platform() {
    const { setAuthTokens } = useAuth();

    function logOut() {
      setAuthTokens("test");
    }

    return (
        <div Platform>
            <h1> Platform</h1>
            <Button onClick={logOut}>Log out</Button>
        </div>
    );
}

export default Platform;