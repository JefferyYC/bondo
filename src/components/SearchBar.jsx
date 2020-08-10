import React, {useState} from "react";
import styled from 'styled-components';
import axios from 'axios';

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

const Bar = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

function SearchBar(props) {
  const [error, setError] = useState("Sign Up Failed...")
  const [isError, setIsError] = useState(false);
  const [userInput, setUserInput] = useState("");
  function postSearch() {
    var postData = {
      isEmpty: false,
      queryString: userInput
    };  

    const config = {
      headers: {  
        'Content-Type': 'application/json'
      }
    };

    axios.post("http://localhost:5000/api/mentor", postData, config)
    .then(result => {
      if (result.status === 200) {
        console.log("successful load of search result!")
        console.log(props.setDataList)
        props.setDataList(result.data.users)
        // Testing
        console.log(result.data.users)
        console.log(result.dataList)
      } else {
        console.log("unsucessful load of search result!")
        setError(result.data.users)
        setIsError(true)
      }
    }).catch(e => {
      console.log(e )
      setError("Fail to return data from backend for searchBar")
      setIsError(true);
    });
  }

  return(
    <Bar>
      <Input 
      defaultValue="Search For A Mentor" 
      type="text"
      value={userInput}
      onChange={e => {
          setUserInput(e.target.value);
      }}>
      </Input>
      <SearchButton onClick={postSearch}>Search</SearchButton>
    </Bar>
      
  )
}

export default SearchBar;