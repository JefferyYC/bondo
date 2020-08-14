import React, {useState} from "react";
import styled from 'styled-components';

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  background: none;
  border: 2px solid black;
  border-radius: 3px;
  width: 95%;
`;

const SearchButton = styled.button`
  background: linear-gradient(to bottom, #6371c7, #5563c1);
  border-color: #3f4eae;
  border-radius: 3px;
  margin: 0.5em;
  padding: 1rem;
  color: white;
  font-weight: 700;
  width: 10%;
  font-size: 1rem;
`;

const Bar = styled.form`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

function SearchBar(props) {
  const [userInput, setUserInput] = useState("");
  function postSearch(event) {
    event.preventDefault(); 
    props.setCurrentPage(1)
    props.setQueryString(userInput)
    props.setIsEmpty(false)
  }

  return(
      <Bar onSubmit={(e) => postSearch(e)}>
      <Input 
      defaultValue="" 
      type="text"
      value={userInput}
      onChange={e => {
          setUserInput(e.target.value);
      }}>
      </Input>
      <SearchButton type="submit">Search</SearchButton>
      </Bar>
  )
}

export default SearchBar;