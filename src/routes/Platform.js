import React, {useState, useEffect} from 'react';
import NavigationBar from "../components/NavigationBar"
import "../css/Platform.css"
import axios from 'axios';
import SearchBar from "../components/SearchBar"
import Filter from "../components/Filter"
import lyk from '../lyk.jpeg';
import MentorPicRec from '../components/MentorPicRec.js';
import { Container, Row, Col } from 'react-bootstrap';
import Pagination from '../components/Pagination.js'

function Platform() {
    const [dataList, setDataList] = useState([]);
    const [count, setCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(6);

    const paginate = (n) => {
      setCurrentPage(n);
    }

    var postData = {
        isEmpty: true,
        currentPage: currentPage,
        postPerPage: postPerPage
    };
    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
    
    //make a request everytime currentPage changes
    useEffect(() => {
      console.log("activate")
      axios.post("http://localhost:5000/api/mentor", postData, config)
      .then(result => {
        if (result.status === 200) {
          console.log("successful load mentor data!")
          setCount(result.data.total)
          setDataList(result.data.users)
          console.log(dataList)
        } else {
          console.log("unsucessful load mentor data")
        }
      }).catch(e => {
        console.log("Error when load mentor data!")
      });
    }, [currentPage]);


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
                  <Pagination postPerPage={postPerPage} totalPost={count} paginate={paginate} ></Pagination>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Platform;