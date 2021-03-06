import styled from 'styled-components';
import React, {useState} from 'react'
import { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import 'rc-slider/assets/index.css';
import {Range} from 'rc-slider';

const Block = styled.div`
    position: relative;
    width: 400px;
    height: 1000px;
    border: 5px solid red;
`;

const SearchButton = styled.button`
  background: linear-gradient(to bottom, #6371c7, #5563c1);
  border-color: #3f4eae;
  border-radius: 3px;
  margin: 0.5em;
  padding: 1rem;
  color: white;
  font-weight: 700;
  width: 50%;
  font-size: 1rem;
`;

const PROFESSION = ["SWE", "Consulting", "Data Analysis", "Grad School Application"];
const EDUCATION = ["Bachelor", "Master", "PhD"]
const DAY = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"] //to be added
const TIME = ["7:00-12:00", "12:00-17:00", "17:00-20:00", "20:00-0:00"]
const prices={0:"0", 10:"10", 20:"20", 30:"30", 40:"40", 50:"50", 60:"60", 70:"70", 80:"80", 90:"90", 100:"100+"}

class Filter extends Component {
  state = {
    //turn [1,2,3] into {1:False, 2:False, 3:False}
    profession: PROFESSION.reduce(
      (options, option) => ({
        ...options,
        [option]: false
      }),
      {}
    ),
    education: EDUCATION.reduce(
      (options, option) => ({
        ...options,
        [option]: false
      }),
      {}
    ),
    price: [],
    day: DAY.reduce(
      (options, option) => ({
        ...options,
        [option]: false
      }),
      {}
    ), 
    time: TIME.reduce(
      (options, option) => ({
        ...options,
        [option]: false
      }),
      {}
    )
  };

  postSearch = () => {
    this.props.setIsEmpty(false)
    this.props.setCurrentPage(1)
    this.props.setFilter(this.processState())
  }

  processState = () => {
    var professions = PROFESSION.filter(p => {return this.state.profession[p]});
    professions = this.arrayToUndef(professions)
    var educations = EDUCATION.filter(e => {return this.state.education[e]});
    educations = this.highestEdu(educations)
    var days = DAY.filter(d => {return this.state.day[d]});
    days = days.map(d => {return this.dayToInt(d)})
    days = this.arrayToUndef(days)
    var times = TIME.filter(t => {return this.state.time[t]});
    times = times.map(t => {return this.timeToInt(t)});
    times = this.arrayToUndef(times)
    var prices = this.arrayToUndef(this.state.price)
    var data = {
      expertise: professions,
      education: educations,
      price: prices,
      day: days,
      time: times,
    }
    return data
  }

  arrayToUndef = (l) => {
    if (l.length === 0) {
      return undefined
    } else {
      return l
    }
  }

  highestEdu = (l) => {
    if (l.includes("PhD")) {
      return "PhD"
    }
    else if (l.includes("Master")) {
      return "Master"
    }
    else if (l.includes("Bachelor")) {
      return "Bachelor"
    } else {
      return undefined
    }
  }

  dayToInt = (d) => {
    switch (d){
      case "Mon":
        return 1;
      case "Tue":
        return 2;
      case "Wed":
        return 3;
      case "Thur":
        return 4;
      case "Fri":
        return 5;
      case "Sat":
        return 6;
      case "Sun":
          return 7
      default:
          return "hi"
    }
  }

  //code for getting different time periods, might be useful in the future
  /*
  timeToInt = (t) => {
    switch(t){
      case "7:00-12:00":
        return [7,12];
      case "12:00-17:00":
        return [12,17];
      case "17:00-20:00":
        return [17,20];
      case "20:00-0:00":
        return [20, 24]
      default:
        return "hi"
    }
  }

  getPeriod = (l) => {
    var i = 0
    while (i < l.length-1) {
      if (l[i][1] == l[i+1][0]) {
        l[i+1][0] = l[i][0]
        l.splice(i,1)
      } else {
        i += 1
      }
    }
    return l
  }
  */

 timeToInt = (t) => {
  switch(t){
    case "7:00-12:00":
      return 1;
    case "12:00-17:00":
      return 2;
    case "17:00-20:00":
      return 3;
    case "20:00-0:00":
      return 4
    default:
      return "hi"
  }
}


  handleCheckboxChange = list => {
    switch(list){
      case this.state.profession:
        return changeEvent => {
          const { name } = changeEvent.target;
      
          this.setState(prevState => ({
            profession: {
              ...prevState.profession,
              [name]: !prevState.profession[name]
            }
          }));
        };
      
      case this.state.education:
        return changeEvent => {
          const { name } = changeEvent.target;
      
          this.setState(prevState => ({
            education: {
              ...prevState.education,
              [name]: !prevState.education[name]
            }
          }));
        };

        case this.state.day:
          return changeEvent => {
            const { name } = changeEvent.target;
        
            this.setState(prevState => ({
              day: {
                ...prevState.day,
                [name]: !prevState.day[name]
              }
            }));
          };

        case this.state.time:
          return changeEvent => {
            const { name } = changeEvent.target;
        
            this.setState(prevState => ({
              time: {
                ...prevState.time,
                [name]: !prevState.time[name]
              }
            }));
          };

        default:
          console.log("not found")
    }
  }

  createCheckbox = list => {
    return option => {
    return <Col className="form-check">
      <label>
        <input
          type="checkbox"
          name={option}
          checked={list[option]}
          onChange={this.handleCheckboxChange(list)}
          className="form-check-input"
        />
        {option}
      </label>
    </Col>
    }
  };
  
  render() {
    return (
      <Block>
        <h1> Filter </h1>
        <p>Areas of Expertise: </p>
        <Container>
          <Row xs={2} md={2}>
            {PROFESSION.map(this.createCheckbox(this.state.profession))}
          </Row>
        </Container>
        <p>Education: </p>
        <Container>
          <Row xs={2} md={2}>
            {EDUCATION.map(this.createCheckbox(this.state.education))}
          </Row>
        </Container>
        <p>Price: </p>
        <Range min={0} max={100} step={10} marks={prices} allowCross={false} onChange={(r) => this.setState({price: r})}></Range>
        <br></br>
        <br></br>
        <p>Availability: </p>
        <p>Day: </p>
        <Container>
          <Row xs={2} md={2}>
            {DAY.map(this.createCheckbox(this.state.day))}
          </Row>
        </Container>
        <p>Time: </p>
        <Container>
          <Row xs={2} md={2}>
            {TIME.map(this.createCheckbox(this.state.time))}
          </Row>
        </Container>
        <SearchButton onClick={() => {this.postSearch()}}>Apply filters</SearchButton>
      </Block>
      
    )
  };
}

export default Filter;