import React from 'react';
import './Header.css'
import logo from '../../assets/Ellipse 1.png'

const Header = () => {
    return (
        <div>
            <div className='container'>
        <div className=" d-flex align-items-center justify-content-between py-2">
            <h1 className='custom-font-style'>Knowledge Cafe</h1>
            <img src={logo} alt="" />
        </div>
        
    </div>
        </div>
    );
};

export default Header;