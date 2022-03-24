import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Product from '../Product/Product';
import {addToDb, SetStoredChart} from '../../utilities/fakedb'
import './shop.css'
const Shop = () => {
    const [products,setProduct]=useState([]);
    const [cart,setCart]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProduct(data));
    },[]);
    useEffect(()=>{
        const getToDb=SetStoredChart();
        const Addcart=[];
        for(const id in getToDb){
           const AddProduct=products.find(product=>product.id===id)
          if(AddProduct){
              const quantity=getToDb[id]
              AddProduct.quantity=quantity
             Addcart.push(AddProduct)
          }
        }
        setCart(Addcart);
    },[products])
    
    const clickAddToCard=(selectedProduct)=>{
        let newCart=[];
        const exists=products.find(product=>product.id===selectedProduct.id);
        if(!exists){
            selectedProduct.quantity=1;
            newCart=[...cart,selectedProduct]
        }
        else{
            const rest=cart.filter(product=>product.id!==selectedProduct.id);
            exists.quantity=exists.quantity+1;
            newCart=[...rest,exists];
        }
        
        setCart(newCart);
       addToDb(selectedProduct.id)
    }
    
    return (
        <div className='shopping-container'>
           <div className="shop-container">
            {
                products.map(product=><Product 
                key={product.id}
                product={product}
                clickAddToCard={clickAddToCard}
                ></Product>)
            }
           </div>
           <div className="card-container">
                <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Shop;