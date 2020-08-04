import React from 'react';
import NavigationBar from "../components/NavigationBar"
import "../css/Platform.css"
import SearchBar from "../components/SearchBar"
import lyk from '../lyk.jpeg';
import MentorPicRec from '../components/MentorPicRec.js';
import { Link } from "react-router-dom"


function Platform() {
    return (
        <div className="Platform">
            <NavigationBar></NavigationBar>
            <div className="container">
                <div className="filter">
                    this is for filter
                </div>
                <div className="right">
                    <div className="search">
                        <SearchBar></SearchBar>
                    </div>
                    <div className="table">
                        <MentorPicRec data="This is a test test te  is a test test te  is a test test te  is a test test te  is a test test te  is a test test te  is a test test te st te  is a test test te st te  is a test test te st te  is a test test te  " height="300px" width="250px" url= {lyk}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Platform;