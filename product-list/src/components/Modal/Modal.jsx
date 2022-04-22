import React, {useRef} from 'react';
import classes from "./Modal.module.scss";
import {useDispatch} from "react-redux";
import noImage from '../../assets/noImage.png'
const Modal = ({setOpenModal}) => {
  const closeModal = () => setOpenModal(false)
  const dispatch = useDispatch()
  const addProduct = (nameProduct,descriptionProduct,categoryProduct) => {
    if(nameProduct.length && descriptionProduct.length){
      dispatch({type:"ADD_NEW_PRODUCT", payload: {
          category: categoryProduct,
          image: noImage,
          id: Date.now(),
          description: descriptionProduct,
          name: nameProduct,
        }})
    }
  }
  const nameProduct = useRef('')
  const descriptionProduct = useRef('')
  const categoryProduct = useRef(null)
  return (
      <>
        <div className={classes.background} onClick={closeModal}>
          <div
              className={classes.background__card}
              onClick={(e) => e.stopPropagation()}
          >
            <form className={classes.background__card__form}>
            <input
                ref = {nameProduct}
                placeholder="Название продукта"
                />
              <input
                  ref = {descriptionProduct}
                  placeholder="Описание продукта"
              />
              <select ref={categoryProduct}>
                <option>chips</option>
                <option>soda</option>
                <option>pizza</option>
                <option>chocolate</option>

              </select>
            <button type={"button"}  onClick={() => addProduct(
                nameProduct.current.value,descriptionProduct.current.value,categoryProduct.current.value)} > Добавить</button>
          </form>
          </div>
        </div>
      </>
  );
};

export default Modal;