import React from 'react';
import './Main.css';
import './components/profile_pictures.css'
import pic2 from './pic2.png';
import Profilepicture from './components/profile_pictures.jsx';

class Main extends React.Component {
    render() {
        return (
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
                <Profilepicture height="200px" width="200px" url= {pic2} top="200px" left="800px" />
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

                <div class="row">
                    <div class="column left">
                        <h2>Column 1</h2>
                        <p>Some text..</p>
                    </div>
                    <div class="column middle">
                        <h2>Column 2</h2>
                        <p>Some text..</p>
                    </div>
                    <div class="column right">
                        <h2>Column 3</h2>
                        <p>Some text..</p>
                    </div>
                </div>

                <Container fluid>
                    <Row>
                        <Col>1 of 1</Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Main