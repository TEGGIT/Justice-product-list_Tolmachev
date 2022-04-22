import React from 'react';
import classes from './Button.module.scss'
const Button = ({type, onClick, value, name, disabled}) => {
  return (
      <>
        <div
        onClick={onClick}
        >
      <button
          className={classes.btn}
          type={type}
          name={name}
           disabled={disabled}>
        {value}
      </button>
        </div>
</>
  );
};

export default Button;