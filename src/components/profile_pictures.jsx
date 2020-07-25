import React, {Component} from 'react'
import '../css/profile_pictures.css';

function Profilepicture(props) {
    const style1 = {
        height: props.height,
        width: props.width,
        backgroundImage: "url(" + props.url + ")",
        top: props.top,
        left: props.left
    }
    return (
        <div>
            <div className="Circle" style={style1}> </div>
        </div>
    )
} export default Profilepicture