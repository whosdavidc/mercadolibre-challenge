import React from 'react';

interface myProp {
  text: string;
}

const Button = (props:myProp) => {
  return ( 
        <button className="button">
          {props.text}
        </button>
  )
};

export default Button;