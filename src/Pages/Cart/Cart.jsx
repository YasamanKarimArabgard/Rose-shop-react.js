import React, { useState } from 'react';
import Layout from '../../Layout/Layout';
import { useCart, useCartActions } from '../../context/CartProvider'
import './Cart.css'
import { Link } from 'react-router-dom';
import { Button, Divider } from '@mui/material';
import CartItem from '../../components/CartItem';

const Cart = () => {

    const { cart, total } = useCart();
    const dispatch = useCartActions();

    const incHandler = (cartItem) => {
        dispatch({ type: 'Add_To_Cart', payload: cartItem })
    }

    const decHandler = (cartItem) => {
        dispatch({ type: 'Decrement_Item', payload: cartItem })
    }

    const removeHandler = (cartItem) => {
        dispatch({ type: 'Remove_Item', payload: cartItem })
    }

    if (!cart.length) {
        return <Layout>
            <h5 className='mt-5 text-secondary'>cart is empty :)</h5>
        </Layout>
    }

    return (
        <Layout>
            <main className='cart-container col-11 col-md-11 d-flex flex-wrap flex-md-nowrap justify-content-between'>
                <section className='cart col-12 col-md-9 m-1'>
                    {cart.map(item => (
                        <ul class="cart-item list-group list-group-flush rounded col-12 col-md-12 d-flex mb-2">
                            <CartItem item={item}
                                incHandler={incHandler}
                                decHandler={decHandler}
                                removeHandler={removeHandler}
                            />
                        </ul>
                    ))}
                </section>
                <CartSummary total={total} cart={cart} />
            </main>
        </Layout>
    );
};

export default Cart;

const CartSummary = ({ total, cart }) => {

    const orgPrice = cart.length ? cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0) : 0;

    return <>
        <section className='cartSummry-container col-12 col-md-3 m-1'>
            <div className='cartSummry col-12 d-flex flex-column rounded border bg-white h-auto mb-1 p-2 '>
                <h5>Cart Summary</h5>
                <div className='total col-12 d-flex justify-content-between align-items-center mt-3 px-1'>
                    <h6>original total:</h6>
                    <p>{orgPrice}$</p>
                </div>
                <div className='discount col-12 d-flex justify-content-between align-items-center px-1'>
                    <h6>discount totoal:</h6>
                    <p>{orgPrice - total}$</p>
                </div>
                <div className='netPrice col-12 d-flex justify-content-between align-items-center px-1'>
                    <h6>net price:</h6>
                    <p>{total}$</p>
                </div>
                <Link to='/signup?redirect=checkout' style={{ textDecoration: 'none' }}>
                    <Button variant="outlined" color="secondary" id='checkout-btn' sx={{ width: 1 }} disableelevation>Checkout</Button>
                </Link>
            </div>
        </section>
    </>
}

