import React from 'react';
import logo from '../../images/Logo.svg'
import './Heder.css'
const Heder = () => {
    return ( 
            <nav className='Heder'>
                <img src={logo} alt="" />
                <div id='list-Itam'>
                    <a href="/HOME">HOME</a>
                    <a href="/SHOP">SHOP</a>
                    <a href="/CONTACT">CONTACT</a>
                    <a href="/ABOUT">ABOUT</a>
                </div>
            </nav>
    
    );
};

export default Heder;