import React from 'react';
import pic2 from './pic2.png';
import './App.css';
import Profilepicture from './components/profile_pictures.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={pic} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Profilepicture height="200px" width="200px" url= {pic2} top="300px" left="100px" />
      </header>
    </div>
  );
}

export default App;
