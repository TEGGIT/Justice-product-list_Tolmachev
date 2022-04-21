import React from 'react';
import classes from './Button.module.scss'
const Button = ({type, onClick, value, name}) => {
  return (
      <>
        <div
        onClick={onClick}
        >
      <button
          className={classes.btn}
          type={type}
          name={name}>
        {value}
      </button>
        </div>
</>
  );
};

export default Button;