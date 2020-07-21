import React from 'react';
import styled from 'styled-components';
import lyk from './lyk.jpeg';
import Profilepicture from './components/profile_pictures.jsx';
import './MentorProfile.css';


const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`; 
export const MentorProfile = () => (
    <div id="mentor_profile_page">
        <div className="block" id="head">
            <div className="subblk" id="head_l">
                <Profilepicture height="200px" width="200px" url= {lyk}/>
                <h1 id="mentor_name">Yukai Luo</h1>
            </div>
            <div className="subblk" id="head_r">
                <h2>I can help you with ... </h2>
                <br></br>
                <br></br>
                <h2>Avalibility: 996</h2>
                <br></br>
                <br></br>
                <h2>Price: $998/hr</h2>
                <br></br>
                <br></br>
                <div id="mentor_buttons">
                    <button id = "message">Message</button>
                    <button id = "connect">Connect</button>
                </div>
            </div>
        </div>
        <div className="block" id="intro">
            <div className="section_title">Introduction</div>
            <div className="section_content">I'm a sucker</div>
        </div>

        <div className="block" id="exp">
            <div className="section_title">Experience</div>
            <div className="section_content">I've beening sucking for years</div>
        </div>

        <div className="block" id="edu">
            <div className="section_title">Education</div>
            <div className="section_content">University of Suck Honor Program GPA 4.01</div>
        </div>

        <div className="block" id="rating">
            <div className="section_title">Rating</div>
            <div className="section_content">ZERO</div>
        </div>
    </div>
)