import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';
import logoImg from "../lyk.jpeg";
import { Card, Logo, Input, Button, Error } from "../components/AuthForm";
import { useAuth } from "../context/auth";
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;



function Login() {

    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const { authTokens, setAuthTokens } = useAuth();

    function postLogin(event) {
      event.preventDefault();
      var postData = {
        email: userName,
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
          setIsError(true);
        }
      }).catch(e => {
        console.log("error")
        setIsError(true);
      });
    }

    if (isLoggedIn) {
        return <Redirect to="/Platform" />;
      }

    return (
        <Card>
            <Logo src={logoImg} />
            <Form onSubmit={(e) => postLogin(e)}>
                <Input
                type="username"
                value={userName}
                onChange={e => {
                    setUserName(e.target.value);
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
                <Button type="submit">Sign In</Button>
            </Form>
            <Link to="/signup">Don't have an account?</Link>
            { isError &&<Error>The username or password provided were incorrect!</Error> }
        </Card>
    );
}

export default Login;