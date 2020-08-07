import styled from 'styled-components';
import React, {useState} from 'react'
import {Component } from 'react';
import axios from 'axios';


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

const PROFESSION = ["SWE", "Consulting", "HR"];
const EXPERIENCE = ["Entry-Level", "Manager"]


class Filter extends Component {
  state = {
    //turn [1,2,3] into {1:False, 2:False, 3:False}
    professions: PROFESSION.reduce(
      (options, option) => ({
        ...options,
        [option]: false
      }),
      {}
    ),
    experiences: EXPERIENCE.reduce(
      (options, option) => ({
        ...options,
        [option]: false
      }),
      {}
    ),
    dataList: [],
  };

  

  

  postSearch = (prof, exp) => {
    var postData = {
      isEmpty: true,
      professions: prof,
      experience: exp
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
      this.setState(() => ({
        dataList: result.data.users
      }));
    } else {
      console.log("unsucessful load of filter search result!")
      // this.setState(() => ({
      //   err: result.data.error
      // }));
      // setIsError(true)
    }
    }).catch(e => {
    console.log("Error!")
    // console.log(e.response.data)
    // setError(e.response.data)
    // setIsError(true);
    });
  }

  handleCheckboxChange = list => {
    switch(list){
      case this.state.professions:
        return changeEvent => {
          const { name } = changeEvent.target;
      
          this.setState(prevState => ({
            professions: {
              ...prevState.professions,
              [name]: !prevState.professions[name]
            }
          }));
        };
        break
      
      case this.state.experiences:
        return changeEvent => {
          const { name } = changeEvent.target;
      
          this.setState(prevState => ({
            experiences: {
              ...prevState.experiences,
              [name]: !prevState.experiences[name]
            }
          }));
        };
        break

        default:
          console.log("not found")
    }
  }


  createCheckbox = list => {
    return option => {
    return <div className="form-check">
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
    </div>
    }
  };
  

  


  render() {
    return (
      <Block>
        <h1> Filter </h1>
        <p>Profession: </p>
        {PROFESSION.map(this.createCheckbox(this.state.professions))}
        <p>Experience: </p>
        {EXPERIENCE.map(this.createCheckbox(this.state.experiences))}
        <SearchButton onClick={() => {this.postSearch(PROFESSION, EXPERIENCE)}}>Apply filters</SearchButton>
      </Block>
    )
  };
}

export default Filter;