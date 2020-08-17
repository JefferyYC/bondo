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
const TIME = ["7:00 - 12:00", "12:00-17:00", "17:00-20:00", "20:00-0:00"]
const NAMES = ["Jeffery", "lyk"]

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
    names: NAMES.reduce(
      (options, option) => ({
        ...options,
        [option]: false
      }),
      {}
    ),    
  };

  postSearch = (n) => {
    var postData = {
      isEmpty: false,
      names: n
    };
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    axios.post("http://localhost:5000/api/mentor", postData, config)
    .then(result => {
    if (result.status === 200) {
      console.log("successful load of filter search result!")
      this.props.setDataList(result.data.users)
    } else {
      console.log("unsucessful load of filter search result!")
    }
    }).catch(e => {
    console.log(e)
    });
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

      case this.state.names:
        return changeEvent => {
          const { name } = changeEvent.target;
      
          this.setState(prevState => ({
            names: {
              ...prevState.names,
              [name]: !prevState.names[name]
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
        <p>Names: </p>
        {NAMES.map(this.createCheckbox(this.state.names))}
        <SearchButton onClick={() => {this.postSearch(NAMES)}}>Apply filters</SearchButton>
      </Block>
      
    )
  };
}

export default Filter;