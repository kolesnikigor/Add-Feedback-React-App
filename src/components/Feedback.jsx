import React from 'react';

import '../style/Feedback.css';


const Feedback = (props) => { 
  return(
  <div className="feedback-wrapper">
    <div className="author">{props.author}</div>
    <div className="date">{props.date}</div>
    <p className="text">{props.text}</p>
  </div>
  );
}

export default Feedback;