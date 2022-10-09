import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './ReviewItem.css';

const ReviewItem = ({ product, handleRemoveItem }) => {
    const { id, name, price, shipping, quantity, img } = product;
    return (
        <div className='review-item'>
            <div className='review-image'>
                <img src={img} alt="" />
            </div>
            <div className='review-item-detail'>
                <div className='review-info'>
                    <p>{name}</p>
                    <p><small>Price: ${price}</small></p>
                    <p><small>Shipping: ${shipping}</small></p>
                    <p>Quantity: <small>{quantity}</small></p>
                </div>
                <div className='button-container'>
                    <button onClick={() => handleRemoveItem(id)} className='delete-button'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrash}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;