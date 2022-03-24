import React from 'react';
import './cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import {faTrash , faArrowRight} from '@fortawesome/free-solid-svg-icons'
const Cart = ({cart}) => {
   let TotalPrice=0;
   let Shipping=0;
   let quantity=0;
   for(const product of cart){
       quantity=quantity+product.quantity;
       TotalPrice=TotalPrice+product.price * product.quantity;
       Shipping=Shipping+product.shipping * product.quantity;
   }
   const tax=parseInt((TotalPrice*0.1).toFixed(2));
   const grandTotal=TotalPrice+Shipping+tax
   
    return (
        <div className='cart'>
            <h2 id='order'>Order summary</h2>
                <p>Selected itam : {quantity}</p>
                <p>Total price : ${TotalPrice} </p>
                <p>Total shopping charge :${Shipping}</p>
                <p>Tax : ${tax}</p>
                <h4>Grand total : ${grandTotal}</h4>
                <button id='btn' >Clear Cart <FontAwesomeIcon id='trash' icon={faTrash}></FontAwesomeIcon></button><br /><br />
                <button id='btn2'>Review others <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
        </div>
    );
};

export default Cart;