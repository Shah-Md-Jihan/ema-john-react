import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    console.log(cart);
    let totalPrice = 0;
    let shipping = 0;
    let quantity = 0;

    for (const product of cart) {
        quantity = quantity + product.quantity;
        totalPrice = totalPrice + product.price * product.quantity;
        shipping = shipping + product.shipping * product.quantity;
    }
    const tax = parseFloat((totalPrice * 0.1).toFixed(2));
    const grandTotal = totalPrice + shipping + tax;
    return (
        <div>
            <h2>Oreder Summery</h2>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h2>Grand Total: ${grandTotal.toFixed(2)}</h2>
        </div>
    );
};

export default Cart;