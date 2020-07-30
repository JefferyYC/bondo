import React, { useState } from "react";
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import logoImg from "../lyk.jpeg";
import { Card, Logo, Form, Input, Button, Error } from '../components/AuthForm';

function Signup() {

  const [isSignedUp, setSignedUp] = useState(false);
  const [error, setError] = useState("Sign Up Failed...")
  const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function register() {
    var postData = {
      name: userName,
      email: email,
      password: password
    };

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    axios.post("http://localhost:5000/api/user/register", postData, config)
    .then(result => {
      if (result.status === 200) {
        console.log("successful register!")
        setSignedUp(true);
      } else {
        console.log("unsucessful")
        setError(result.data)
        setIsError(true);
      }
    }).catch(e => {
      console.log("Error!")
      setError(e.response.data)
      setIsError(true);
    });
  }

  //If successfully signed up, redirect to login page
  if (isSignedUp) {
    return <Redirect to="/Login" />;
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
            type="username"
            value={userName}
            onChange={e => {
              setUserName(e.target.value);
            }}
            placeholder="username"
          />
          <Input
            type="password"
            value={password}
            onChange={e => {
              setPassword(e.target.value);
            }}
            placeholder="password"
          />
        <Button onClick={register}>Sign Up</Button>
      </Form>
      <Link to="/login">Already have an account?</Link>
      { isError &&<Error>{error}</Error> }
    </Card>
  );
}

export default Signup;