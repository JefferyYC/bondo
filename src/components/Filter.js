import React, {useState} from "react";
import styled from 'styled-components';
import axios from 'axios';
import { Input } from "../components/AuthForm";


const Block = styled.div`
    position: relative;
    width: 400px;
    height: 1000px;
    overflow-y: scroll;
    border: 5px solid red;
`;

function Filter() {
  const [error, setError] = useState("Sign Up Failed...")
  const [isError, setIsError] = useState(false);
  const [dataList, setDataList] = useState([]);

  function postFilter() {
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
        console.log("successful load of filter result!")
        setDataList(result.data)
        // Testing
        console.log(result.dataList)
      } else {
        console.log("unsucessful load of filter result!")
        setError(result.data)
        setIsError(true)
      }
    }).catch(e => {
      console.log("Error!")
      setError("Fail to return filter data from backend!")
      setIsError(true);
    });
  }

  return(
    <Block>
      <h1>Filter your mentors!</h1>
        <label class="container">One
            <Input type="checkbox" checked="checked"></Input>
            <span class="checkmark"></span>
        </label>

        <label class="container">Two
            <Input type="checkbox"></Input>
            <span class="checkmark"></span>
        </label>

        <label class="container">Three
            <Input type="checkbox"></Input>
            <span class="checkmark"></span>
        </label>

        <label class="container">Four
            <Input type="checkbox"></Input>
            <span class="checkmark"></span>
        </label> 
    </Block>
      
  )
}

export default Filter;