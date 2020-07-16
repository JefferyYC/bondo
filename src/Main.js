import React from 'react';
import './Main.css';

//imported by ziang. (nav bar)
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import { Home } from './Home';
import { About } from './About';
import { NoMatch } from './NoMatch';

class Main extends React.Component {
    render() {
        return (
            <div classNameName = "Main">
                <div className = "NavBar">
                    <React.Fragment>
                        <Router>
                        <NavigationBar />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/about" component={About} />
                            <Route component={NoMatch} />
                        </Switch>   
                        </Router>
                    </React.Fragment>
                </div>
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
                <div className = "MentorRow">
                    <div className = "MentorCol">
                        <h2>Column 1</h2>
                    </div>
                    <div className = "MentorCol">
                        <h2>Column 2</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main