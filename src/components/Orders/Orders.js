import React, { useState } from 'react';
import { Link, useActionData, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const { products, previousCart } = useLoaderData();
    const [cart, setCart] = useState(previousCart);
    const handleRemoveItem = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }
    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map(product => <ReviewItem key={product.id} product={product} handleRemoveItem={handleRemoveItem}></ReviewItem>)
                }
                {
                    cart.length === 0 && <h2>No product to show.Please <Link to='/shop'>Shop More...</Link></h2>
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart} handleClearCart={handleClearCart}></Cart>
            </div>
        </div>
    );
};

export default Orders;