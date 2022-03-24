import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    const {img,name,price,seller,ratings}=props.product; 
    const {clickAddToCard}=props
    return (
        <div className='product'>
        <img src={img} alt="" />
        <div id='text'>
        <h4>{name}</h4>
        <h5>price : ${price}</h5>
        <p>manufacture : {seller}</p>
        <p>ratings : {ratings}</p>
        </div>
        <button onClick={()=>clickAddToCard(props.product)} id='button'>Add to card <FontAwesomeIcon id='icon' icon={faShoppingCart}></FontAwesomeIcon></button>
        </div>
    );
};

export default Product;