import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className='header-container'>
            <nav className='header'>
                <img src={logo} alt="" />
                <div>
                    <Link to={"/shop"} className={({ isActive }) => isActive ? 'active' : undefined}>Shop</Link>
                    <Link to={"/orders"}>Orders</Link>
                    <Link to={"/inventory"}>Inventory</Link>
                    <Link to={"/about"}>About</Link >
                    <Link to={"/login"}>Log In</Link >
                    <Link to={"/register"}>Sign Up</Link >
                    <span>{user?.email}</span>
                </div >
            </nav >
        </div >
    );
};

export default Header;