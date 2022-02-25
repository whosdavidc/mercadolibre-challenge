import React from 'react';
import "./Answer.css";
type answer = { answer:string };

const Answer = ({answer}:answer) => {
  return (
    <div className='answer'>
      <div className='corner-icon'></div>
      {answer}
    </div>
  )
}

export default Answer