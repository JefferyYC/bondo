import React from 'react';
import NavigationBar from "../components/NavigationBar"
import "../css/Platform.css"
import SearchBar from "../components/SearchBar"

function Platform() {
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
                        table
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Platform;