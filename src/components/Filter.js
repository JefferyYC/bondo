import styled from 'styled-components';
import React from 'react'
import {Component } from 'react';


const Block = styled.div`
    position: relative;
    width: 400px;
    height: 1000px;
    border: 5px solid red;
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
    )  
  };

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
      </Block>
    )
  };
}

export default Filter;