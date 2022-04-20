import React from 'react';
import classes from './Filter.module.scss'
import Button from "../UI/Button";
const Filter = () => {
  return (
      <div className={classes.button}>
      <Button text="Чипсы" type="button" />
        <Button text="Газировка" type= "button" />
        <Button text="Пицца" type= "button" />
        <Button text="Шоколад" type= "button" />


      </div>
  );
};

export default Filter;