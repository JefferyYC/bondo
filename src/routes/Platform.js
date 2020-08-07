import React, {useState} from 'react';
import NavigationBar from "../components/NavigationBar"
import "../css/Platform.css"
import axios from 'axios';
import SearchBar from "../components/SearchBar"
import Filter from "../components/Filter"
import lyk from '../lyk.jpeg';
import MentorPicRec from '../components/MentorPicRec.js';
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
    function tempt() {
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
    // const list0 = dataList[0];
    // const list1 = dataList[1];
    if (this.state.dataList === null) return null;
    return (
        <div className="Platform">
            <NavigationBar></NavigationBar>
            <div className="container">
                <Filter></Filter>
                <div className="right">
                    <div className="search">
                        <SearchBar></SearchBar>
                    </div>
                    <div className="right_bottom">
                      <h1 style={{textAlign:"center"}}>Find your mentors!</h1>
                        {/* <div className="table">
                            <MentorPicRec data= {dataList[0].email} height="300px" width="250px" url= {lyk}/>
                            <MentorPicRec data= {dataList[1].email} height="300px" width="250px" url= {lyk}/>
                        </div>
                        <div className="table">
                            <MentorPicRec data="This is a test test te  is a test test te  is a test test te  is a test test te  is a test test te  is a test test te  is a test test te st te  is a test test te st te  is a test test te st te  is a test test te  " height="300px" width="250px" url= {lyk}/>
                            <MentorPicRec data="This is a test test te  is a test test te  is a test test te  is a test test te  is a test test te  is a test test te  is a test test te st te  is a test test te st te  is a test test te st te  is a test test te  " height="300px" width="250px" url= {lyk}/>
                        </div>
                        <div className="table">
                            <MentorPicRec data="This is a test test te  is a test test te  is a test test te  is a test test te  is a test test te  is a test test te  is a test test te st te  is a test test te st te  is a test test te st te  is a test test te  " height="300px" width="250px" url= {lyk}/>
                            <MentorPicRec data="This is a test test te  is a test test te  is a test test te  is a test test te  is a test test te  is a test test te  is a test test te st te  is a test test te st te  is a test test te st te  is a test test te  " height="300px" width="250px" url= {lyk}/>
                        </div> */}
                        <div>
                          {this.state.dataList.map(user => <MentorPicRec data={user.email}height="300px" width="250px" url= {lyk}/>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Platform;