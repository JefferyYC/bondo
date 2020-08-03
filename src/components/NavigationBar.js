import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
import { useAuth } from "../context/auth";
import { Button } from "../components/AuthForm";

const Styles = styled.div`
  .navbar { background-color: #3b5998; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #FFFFFF;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #FFFFFF;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;


function NavigationBar() {
  const { setAuthTokens } = useAuth();
  function logOut() {
    setAuthTokens("test");
  }

  return (
    <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/platform">Bondo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/platform">Home</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/message">Message</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/myprofile">MyProfile</Nav.Link></Nav.Item> 
          <Button onClick={logOut}>Log out</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
  );
}


export default NavigationBar