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

function SearchBar() {
  const [error, setError] = useState("Sign Up Failed...")
  const [isError, setIsError] = useState(false);
  const [dataList, setDataList] = useState([]);

  function postSearch() {
    var postData = {
      isEmpty: true
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
        setDataList(result.data)
        // Testing
        console.log(result.dataList)
      } else {
        console.log("unsucessful load of search result!")
        setError(result.data)
        setIsError(true)
      }
    }).catch(e => {
      console.log("Error!")
      setError(e.response.data)
      setIsError(true);
    });
  }

  return(
    <Bar>
      <Input defaultValue="Search For A Mentor" type="text"></Input>
      <SearchButton onClick={postSearch}>Search</SearchButton>
    </Bar>
      
  )
}

export default SearchBar;