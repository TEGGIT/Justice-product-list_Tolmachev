import React, {useState} from 'react';
import classes from './MainContent.module.scss'
import Product from "../Product/Product";
import product from "../../mockdata/productData";
import Button from "../UI/Button";
const MainContent = () => {
  const [filteredCatalog, setFilteredCatalog] = useState(product)
  const filtered = (e) => {
    e.target.name === 'All'
        ? setFilteredCatalog(product)
        :setFilteredCatalog(product?.filter((el) => el.category === e.target.name))
  }
  return (
      <main className={classes.main}>
        <div className={classes.button}>
          <Button value="Все" type="button" name= "All" onClick={(e) => filtered(e)}/>
          <Button value="Чипсы" type="button" name= "chips" onClick={(e) => filtered(e)}/>
          <Button value="Газировка" type= "button" name= "soda" onClick={(e) => filtered(e)}/>
          <Button value="Пицца" type= "button"name= "pizza" onClick={(e) => filtered(e)} />
          <Button value="Шоколад" type= "button" name= "chocolate" onClick={(e) => filtered(e)}/>
        </div>
        {filteredCatalog.map(item => {
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