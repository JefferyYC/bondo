import React from 'react';
import { Button } from "../components/AuthForm";
import { useAuth } from "../context/auth";
import lyk from '../lyk.jpeg';
import MentorPicRec from '../components/MentorPicRec.js';
import { Link } from "react-router-dom"

function Platform() {
    const { setAuthTokens } = useAuth();

    function logOut() {
      setAuthTokens("test");
    }

    return (
        <div Platform>
            <h1> Platform</h1>
            <Button onClick={logOut}>Log out</Button>
            <Link to="/mentorprofile">
                <MentorPicRec data="This is a testThis is a testThis is a testThis is a testThis is a testThis is a testThis is a testThis is a testThis is a testThis is a testThis is a testThis is a testThis is a testThis is a testThis is a testThis is a testThis is a test" height="300px" width="250px" url= {lyk}/>
            </Link>
            
        </div>
    );
}

export default Platform;