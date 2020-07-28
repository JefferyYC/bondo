import React from 'react';
import styled from 'styled-components';
import lyk from '../lyk.jpeg';
import Profilepicture from '../components/profile_pictures.jsx';
import '../css/Home.css';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;

export const Home = (props) => (
    <div className = "Home">
        <div className = "Intro">
            <h1 id="introHeader"> 
                Bondo<br></br>World Leading Mentorship Platform
            </h1>
            <p id="introP">
                We are a platform dedicated to providing the best mentorship for you.
            </p>
            <p id="introP">
                You pay for your future!
            </p>
            <p id="introP">
                Don't hesitate. Sign up now!
            </p>
        </div>

        <Container fluid className = "Procedure">
            <Row id = "step1">
                <Col>
                    <Profilepicture height="160px" width="160px" url= {lyk} top="20px" left="1200px"/>
                    <h1 id="procedureHeader">
                        Find a Mentor
                    </h1>
                    <p id="procedureP">
                        Look through hundreds of experienced in various industries to find the one who suits you best.
                    </p>
                </Col>
            </Row>
            <Row id = "step2">
                <Col>
                    <Profilepicture height="160px" width="160px" url= {lyk} top="20px" left="1200px"/>
                    <h1 id="procedureHeader">
                        Confirm Interest
                    </h1>
                    <p id="procedureP">
                        Tell your mentor your need and interest. Confirm your mentorship with a refundable fee.
                    </p>
                </Col>
            </Row>
            <Row id = "step3">
                <Col>
                    <Profilepicture height="160px" width="160px" url= {lyk} top="20px" left="1200px"/>
                    <h1 id="procedureHeader">
                        Get “Exclusive” Mentorship
                    </h1>
                    <p id="procedureP">
                        Get Exlusive Mentorship and make appointment with your private mentor!
                    </p>
                </Col>
            </Row> 
        </Container>

        <Container fluid className = "Mentor">
            <Row>
                <Col>
                    <Profilepicture height="300px" width="300px" top="0px" left="50%" url= {lyk}/>
                </Col>
                <Col>
                    <Profilepicture height="300px" width="300px" top="0px" left="50%" url= {lyk}/>
                </Col> 
                <Col>
                    <Profilepicture height="300px" width="300px" top="0px" left="50%" url= {lyk}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className = "MentorBio">
                        <h1 id="mentorName">
                        Yukai Luo
                        </h1>
                        <h2 id="mentorDescription">
                            Dad of Bondo!Dad of BondoDad of BondoDad of BondoDad of BondoDad of Bondo
                        </h2>
                        <h3 id="mentorDescription">
                            King of the Undying
                        </h3>
                        <h4 id="mentorDescription">
                            Slayer of Dragons
                        </h4>
                    </div>
                </Col>
                <Col>
                    <div className = "MentorBio">
                        <h1 id="mentorName">
                        Yukai Luo
                        </h1>
                        <p id="mentorDescription">
                            Dad of Bondo
                        </p>
                    </div>
                </Col> 
                <Col>
                <div className = "MentorBio">
                        <h1 id="mentorName">
                        Yukai Luo
                        </h1>
                        <p id="mentorDescription">
                            Dad of Bondo
                        </p>
                    </div>
                </Col>
            </Row>
            <button id = "more_button">More Mentors</button>
        </Container>

        {/* Mentee bio */}
        <Container fluid className="Mentee">
            <Row>
                <Col>
                    <Profilepicture height="300px" width="300px" top="0px" left="50%" url= {lyk}/>
                </Col>
                <Col>
                    <div className = "MenteeBio">
                        <h1 id="menteeName">
                            Yukai Luo
                        </h1>
                        <h2 id="menteeDescription">
                            Yukai Luo is the Dad of Bondo and has a GPA of 4.0 at University of Zoom
                        </h2>
                    </div>
                </Col>
            </Row>
        </Container>

        <Container fluid className="Contact">
            <h1>Contact us</h1>
            <p>陈鹏宇:4008823823</p>
            <br></br>
            <p>罗玉凯:10086</p>
        </Container>
    </div>
)
