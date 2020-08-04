import React from 'react';
import { Button } from "../components/AuthForm";
import { useAuth } from "../context/auth";
import lyk from '../lyk.jpeg';
import MentorPicRec from '../components/MentorPicRec.js';
import { Link } from "react-router-dom"
import {testText} from '../testText.txt'


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
                <MentorPicRec data="This is a test test te  is a test test te  is a test test te  is a test test te  is a test test te  is a test test te  is a test test te st te  is a test test te st te  is a test test te st te  is a test test te  " height="300px" width="250px" url= {lyk}/>
            </Link>
            
        </div>
    );
}

export default Platform;