import React, {useState} from 'react';
import classes from './MainContent.module.scss'
import Product from "../Product/Product";
import {useSelector} from "react-redux";
import Button from "../UI/Button";
import Modal from "../Modal/Modal";


const MainContent = () => {
  const product = useSelector((state) => state.productReducer)
  const [openModal, setOpenModal] = useState(false)
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
        <Button
          type="button"
          onClick={() => setOpenModal(true)}
          value="Добавить товар"
      >
      </Button>
        {filteredCatalog.map(item => {
          return <Product
              name={item.name}
              id={item.id}
              description={item.description}
              image={item.image}/>
        })}
        {openModal && <Modal setOpenModal={setOpenModal} />}
      </main>
  );
};

export default MainContent;