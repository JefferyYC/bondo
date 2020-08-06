import styled from 'styled-components';
import React from 'react'
import {Component } from 'react';


const Block = styled.div`
    position: relative;
    width: 400px;
    height: 1000px;
    border: 5px solid red;
`;

const OPTIONS = ["SWE", "Consulting", "HR"];

console.log(...OPTIONS)


class Filter extends Component {
  state = {
    //turn [1,2,3] into {1:False, 2:False, 3:False}
    checkboxes: OPTIONS.reduce(
      (options, option) => ({
        ...options,
        [option]: false
      }),
      {}
    )
  };

  handleCheckboxChange = changeEvent => {
    const { name } = changeEvent.target;
    //const name = changeEvent.target.name;

    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name]
      }
    }));

    console.log(this.state.checkboxes[name])
  };

  createCheckbox = option => (
    <div className="form-check">
      <label>
        <input
          type="checkbox"
          name={option}
          checked={this.state.checkboxes[option]}
          onChange={this.handleCheckboxChange}
          className="form-check-input"
        />
        {option}
      </label>
    </div>
  )


  render() {
    return (
      <Block>
        <h1> Filter </h1>
        <p>Profession: </p>
        {OPTIONS.map(this.createCheckbox)}
      </Block>
    )
  };
}

export default Filter;