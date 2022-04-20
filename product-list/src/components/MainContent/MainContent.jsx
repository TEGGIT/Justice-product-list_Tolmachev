import React from 'react';
import Filter from "../Filter/Filter";
import classes from './MainContent.module.scss'
import Product from "../Product/Product";
import product from "../../mockdata/productData";

const MainContent = () => {
  return (
      <main className={classes.main}>
        <Filter/>
        {product.map(item => {
          return <Product
              name={item.name}
              id={item.id}
              description={item.description}
              image={item.image}/>

        })}

      </main>
  );
};

export default MainContent;