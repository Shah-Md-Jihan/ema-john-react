import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    let totalPrice = 0;
    let shipping = 0;

    for (const product of cart) {
        totalPrice = totalPrice + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((totalPrice * 0.1).toFixed(2));
    const grandTotal = totalPrice + shipping + tax;
    return (
        <div>
            <h2>Oreder Summery</h2>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h2>Grand Total: ${grandTotal.toFixed(2)}</h2>
        </div>
    );
};

export default Cart;