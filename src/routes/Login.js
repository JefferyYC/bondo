import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';
import logoImg from "../lyk.jpeg";
import { Card, Logo, Form, Input, Button, Error } from "../components/AuthForm";
import { useAuth } from "../context/auth";

function Login() {

    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { authTokens, setAuthTokens } = useAuth();
    const [error, setError] = useState("");

    function postLogin() {
      setLoggedIn(true);

      var postData = {
        email: email,
        password: password
      };

      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      axios.post("http://localhost:5000/api/user/login", postData, config)
      .then(result => {
        if (result.status === 200) {
          console.log("successful login")
          setAuthTokens(result.data);
          setLoggedIn(true);
        } else {
          console.log("unsuccessful")
          setError(result.data);
          setIsError(true);
        }
      }).catch(e => {
        console.log("error")
        setError(e.response.data)
        setIsError(true);
      });
    }

    //if successfully logged in, redirect to home page
    if (isLoggedIn) {
        return <Redirect to="/platform" />;
      }

    return (
        <Card>
            <Logo src={logoImg} />
            <Form>
                <Input
                type="email"
                value={email}
                onChange={e => {
                    setEmail(e.target.value);
                }}
                placeholder="email"
                />
                <Input
                type="password"
                value={password}
                onChange={e => {
                    setPassword(e.target.value);
                }}
                placeholder="password"
                />
                <Button onClick={postLogin}>Sign In</Button>
            </Form>
            <Link to="/signup">Don't have an account?</Link>
            { isError &&<Error>{error}</Error> }
        </Card>
    );
}

export default Login;