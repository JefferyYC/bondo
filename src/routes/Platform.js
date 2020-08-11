import React, {useState} from 'react';
import NavigationBar from "../components/NavigationBar"
import "../css/Platform.css"
import axios from 'axios';
import SearchBar from "../components/SearchBar"
import Filter from "../components/Filter"
import lyk from '../lyk.jpeg';
import MentorPicRec from '../components/MentorPicRec.js';
import { Container, Row, Col } from 'react-bootstrap';
// import cors from 'cors';
// import express from 'express';

// var app = express();
// //Bypass SOP
// app.use(cors());

function Platform() {
    const [error, setError] = useState("Load Mentor Data Failed...")
    const [isError, setIsError] = useState(false); 
    const [dataList, setDataList] = useState([]);
    const [count, setCount] = useState(0);
    
    var postData = {
        isEmpty: true
    };
    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
    
    // const list;
    // Request for mentor data on load
    window.onload = function() {
      axios.post("http://localhost:5000/api/mentor", postData, config)
    .then(result => {
      if (result.status === 200) {
        console.log("successful load mentor data!")
        setCount(result.data.remaining)
        setDataList(result.data.users)
        // Testing
        console.log(result.data.users);
        console.log(dataList);
        // list = result.data.users; 
      } else {
        console.log("unsucessful load mentor data")
        setError(result.data)
        setIsError(true);
      }
    }).catch(e => {
      console.log("Error when load mentor data!")
      setError("Fail to return data from backend")
      setIsError(true);
    });
  }


  return (
    <div className="Platform">
        <NavigationBar></NavigationBar>
        <div className="container">
            <Filter setDataList={setDataList}></Filter>
            <div className="right">
                <div className="search">
                    <SearchBar setDataList={setDataList}></SearchBar>
                </div>
                <div className="right_bottom">
                  <h1 style={{textAlign:"center"}}>Find your mentors!</h1>
                  <Container className="mentors">
                    <Row xs={2} md={2}>
                      {dataList.map(user => 
                        <Col className="card">
                          <MentorPicRec data={user.email}height="300px" width="250px" url= {lyk}/>
                        </Col>
                      )}
                    </Row>
                  </Container>

                </div>
            </div>
        </div>
    </div>
  );
}

export default Platform;