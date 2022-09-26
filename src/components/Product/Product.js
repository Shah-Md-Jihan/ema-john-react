import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    const { name, category, img, price, quantity, ratings, seller, stock } = props.product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h3 className='product-name'>{name}</h3>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings}</small></p>
            </div>
            <button onClick={() => props.handleAddToCart(props.product)} className='cart-btn'>
                <p>Add To Cart<span className='cart-icon'><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></span></p>
            </button>
        </div>
    );
};

export default Product;