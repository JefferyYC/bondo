import React, {useState} from 'react';
import NavigationBar from "../components/NavigationBar"
import "../css/Platform.css"
import axios from 'axios';
import SearchBar from "../components/SearchBar"
import lyk from '../lyk.jpeg';
import MentorPicRec from '../components/MentorPicRec.js';




function Platform() {
    const [error, setError] = useState("Load Mentor Data Failed...")
    const [isError, setIsError] = useState(false); 
    
    var postData = {};
    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
    
    var mentorList = [];
    // Request for mentor data on load
    axios.post("http://localhost:5000/api/mentor", postData, config)
    .then(result => {
      if (result.status === 200) {
        console.log("successful load mentor data!")
        mentorList = result.data;
        // Testing
        console.log(mentorList);
      } else {
        console.log("unsucessful load mentor data")
        setError(result.data)
        setIsError(true);
      }
    }).catch(e => {
      console.log("Error when load mentor data!")
      setError(e.response.data)
      setIsError(true);
    });

    return (
        <div className="Platform">
            <NavigationBar></NavigationBar>
            <div className="container">
                <div className="filter">
                    this is for filter
                </div>
                <div className="right">
                    <div className="search">
                        <SearchBar></SearchBar>
                    </div>
                    <div className="table">
                        <MentorPicRec data="This is a test test te  is a test test te  is a test test te  is a test test te  is a test test te  is a test test te  is a test test te st te  is a test test te st te  is a test test te st te  is a test test te  " height="300px" width="250px" url= {lyk}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Platform;