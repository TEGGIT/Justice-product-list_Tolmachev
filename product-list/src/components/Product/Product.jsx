import React from 'react';
import classes from  './Product.module.scss'

const Product = ({image, name , description, id}) => {
  return (
      <div className={classes.content}>
        <div className={classes.content__card}>
          <div className={classes.content__card__image}>
           <img src={image}/>
          </div>
          <div className={classes.content__card__description}>
          <p className={classes.name}>{name}</p>
            <p className={classes.description}><span style={{fontWeight:"bold"}}>Описание</span>: {description}</p>
           <p className={classes.id}>id:{id}</p>

          </div>
        </div>
      </div>
  );
};

export default Product;