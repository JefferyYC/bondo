import React from 'react';
import '../css/MentorProfile.css';


function MentorPicRec(props) {
    const style1 = {
        height: props.height,
        width: props.width
    }
    const style2 = {
        backgroundImage: "url(" + props.url + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'noRepeat'
    }
    
    return (
        <div className="profileblk" style={style1}>
            <div className="profileblkpic" style={style2}></div>
            <h3 id="description_mentor_name">Yukai Luo</h3>
            <p id="description_mentor_content">
            {props.data}
            </p>
            
        </div>
        
    )
}

export default MentorPicRec;