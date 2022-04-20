import React from 'react';
import classes from './Button.module.scss'
const Button = ({type, onClick, text, name}) => {
  return (
      <>
        <div
        onClick={onClick}
        >
      <button
          className={classes.btn}
          type={type}
          name={name}>
        {text}
      </button>
        </div>
</>
  );
};

export default Button;