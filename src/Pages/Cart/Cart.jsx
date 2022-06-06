import React, { useState } from 'react';
import Layout from '../../Layout/Layout';
import { useCart, useCartActions } from '../../context/CartProvider'
import './Cart.css'
import { Link } from 'react-router-dom';
import { Button, Divider, Typography } from '@mui/material';
import CartItem from '../../components/CartItem';

const Cart = () => {

    const { cart, total } = useCart();
    const dispatch = useCartActions();

    const incHandler = (e, cartItem) => {
        e.stopPropagation();
        e.preventDefault();
        dispatch({ type: 'Add_To_Cart', payload: cartItem })
    }

    const decHandler = (e, cartItem) => {
        e.stopPropagation();
        e.preventDefault();
        dispatch({ type: 'Decrement_Item', payload: cartItem })
    }

    const removeHandler = (e, cartItem) => {
        e.stopPropagation();
        e.preventDefault();
        dispatch({ type: 'Remove_Item', payload: cartItem })
    }

    if (!cart.length) {
        return <Layout>
            <h5 className='mt-5 text-secondary'>Your cart is empty :)</h5>
        </Layout>
    }

    return (
        <Layout>
            <main className='cart-container col-11 col-md-11 d-flex flex-column align-items-center'>
                <div className='col-12'>
                    <Typography variant='h6' sx={{ m: 1 }}>My Cart</Typography>
                </div>
                <Divider sx={{ width: '100%' }} variant="middle" />
                <section className='col-12 m-1 d-flex flex-wrap flex-md-nowrap justify-content-center'>
                    <section className='cart col-12 col-md-9 m-1'>
                        <ul className="cart-item list-group list-group-flush rounded col-12 col-md-12 mb-2">
                            {cart.map(item => (
                                <CartItem item={item}
                                    incHandler={incHandler}
                                    decHandler={decHandler}
                                    removeHandler={removeHandler}
                                    key={item.id}
                                />
                            ))}
                        </ul>
                    </section>
                    <CartSummary total={total} cart={cart} />
                </section>
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
                <Typography variant='h5'>Cart Summary</Typography>
                <div className='total col-12 d-flex justify-content-between align-items-center mt-3 px-1 m-1'>
                    <Typography variant='h6'>original total:</Typography>
                    <Typography variant='h6' sx={{ mr: 1 }}>${orgPrice}</Typography>
                </div>
                <div className='discount col-12 d-flex justify-content-between align-items-center px-1 m-1'>
                    <Typography variant='h6'>discount totoal:</Typography>
                    <Typography variant='h6' sx={{ mr: 1 }}>${orgPrice - total}</Typography>
                </div>
                <div className='netPrice col-12 d-flex justify-content-between align-items-center px-1 m-1'>
                    <Typography variant='h6'>net price:</Typography>
                    <Typography variant='h6' sx={{ mr: 1 }}>${total}</Typography>
                </div>
                <Link to='/signup?redirect=checkout' style={{ textDecoration: 'none' }}>
                    <Button variant="outlined" color="secondary" id='checkout-btn' sx={{ width: 1 }} disableElevation={true}>Checkout</Button>
                </Link>
            </div>
        </section>
    </>
}

