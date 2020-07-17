import React from 'react';
import styled from 'styled-components';
import pic2 from './pic2.png';
import Profilepicture from './components/profile_pictures.jsx';
import './Main.css';

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
  <div classNameName = "Main">
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
                <div className = "Procedure">
                    <h1 id="procedureHeader">
                        Find a Mentor
                    </h1>
                    <p id="procedureP">
                        Look through hundreds of experienced in various industries to find the one who suits you best.
                    </p>
                </div>
<<<<<<< HEAD
                <Profilepicture height="200px" width="200px" url= {pic2} />
=======
>>>>>>> b5b1070cac1a9825bccf56d1152edab6e20e5a73
                <div className = "Procedure">
                    <h1 id="procedureHeader">
                        Confirm Interest
                    </h1>
                    <p id="procedureP">
                        Look through hundreds of experienced in various industries to find the one who suits you bestTell your mentor your need and interest. Confirm your mentorship with a refundable fee. .
                    </p>
                </div>
                <div className = "Procedure">
                    <h1 id="procedureHeader">
                        Get “Exclusive” Mentorship
                    </h1>
                    <p id="procedureP">
                        Get Exlusive Mentorship and make appointment with your private mentor!
                    </p>
                </div>
                <Container fluid className = "Mentor">
                    <Row>
                        <Col>
                            Jeffery Chen 
                            <br></br> 
                            CEO of Bondo
                        </Col>
                        <Col>2 of 3</Col>
                            <Profilepicture height="200px" width="200px" url= {pic2}/>
                        <Col>3 of 3</Col>
                    </Row>
                </Container>

            </div>
)
