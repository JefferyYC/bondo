import React, { useState } from "react";
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import logoImg from "../lyk.jpeg";
import { Card, Logo, Input, Button, Error } from '../components/AuthForm';
import Profilepicture from '../components/profile_pictures.jsx';
import styled from 'styled-components';


const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

function Signup() {

  const [isSignedUp, setSignedUp] = useState(false);
  const [error, setError] = useState("Sign Up Failed...")
  const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function register(event) {
    event.preventDefault();
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
    <div>
      <Link to="/">
        <Profilepicture height="60px" width="60px" url= {logoImg} top="20px" left="40px"/>
      </Link>
      <Card>
        <Logo src={logoImg} />
        <Form onSubmit={(e) => register(e)}>
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
          <Button type="submit">Sign Up</Button>
        </Form>
        <Link to="/login">Already have an account?</Link>
        { isError &&<Error>{error}</Error> }
      </Card>
    </div>
  );
}

export default Signup;