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
    const [queryString, setQueryString] = useState("")
    const [isEmpty, setIsEmpty] = useState(true)
    const [query, setQuery] = useState({
      isEmpty: true,
      currentPage: 1,
      postPerPage: 6,
      queryString: "",
      count: 0
  })

    const paginate = (n) => {
      setCurrentPage(n);
    }

    //when current page changes, query change
    useEffect(() => {
      setQuery({
        isEmpty: isEmpty,
        currentPage: currentPage,
        postPerPage: 6,
        queryString: queryString,
        count: count
    })
    }, [currentPage, queryString, isEmpty, count])

    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
    
    //when query changes, we make a new request
    useEffect(() => {
      console.log("query changed, activate server call. query at request is")
      console.log(query)
      axios.post("http://localhost:5000/api/mentor", query, config)
      .then(result => {
        if (result.status === 200) {
          console.log("successful load mentor data!")
          setCount(result.data.total)
          console.log(count)
          setDataList(result.data.users)
        } else {
          console.log("unsucessful load mentor data")
        }
      }).catch(e => {
        console.log("Error when load mentor data!")
      });
    }, [query]);


  return (
    <div className="Platform">
        <NavigationBar></NavigationBar>
        <div className="container">
            <Filter setDataList={setDataList}></Filter>
            <div className="right">
                <div className="search">
                    <SearchBar setIsEmpty={setIsEmpty} setCurrentPage={setCurrentPage} setQueryString={setQueryString}></SearchBar>
                </div>
                <div className="right_bottom">
                  <h1 style={{textAlign:"center"}}>Find your mentors!</h1>
                  <Container className="mentors">
                    <Row xs={2} md={2}>
                      {dataList.map(user => 
                        <Col>
                          <MentorPicRec email={user.email} name={user.name} height="300px" width="250px" url= {lyk}/>
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