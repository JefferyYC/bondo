import React from "react";
import styled from 'styled-components';

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  background: none;
  border: 2px solid black;
  border-radius: 3px;
  width: 100%;
`;

function SearchBar() {
    return(
        <Input defaultValue="Search For A Mentor" type="text"></Input>
    )
}

export default SearchBar;