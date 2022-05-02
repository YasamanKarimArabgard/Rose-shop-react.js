import React, { useState } from 'react';
import Layout from '../../LayOut/Layout';
import { useCart, useCartActions } from '../../context/CartProvider'
import './Cart.css'
import { Link } from 'react-router-dom';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import { Button, IconButton } from '@mui/material';
// import { ToastAlert } from './ToastAlert';

const Cart = ({ setOpen }) => {

    const { cart, total } = useCart();
    const dispatch = useCartActions();

    const incHandler = (cartItem) => {
        setOpen(true)
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
            <h5 className='mt-4 text-secondary'>cart is empty :)</h5>
        </Layout>
    }

    return (
        <Layout>
            <main className='col-10 d-flex flex-row-reverse justify-content-between flex-wrap'>
                <CartSummary total={total} cart={cart} />
                <section className='col-8 d-flex flex-column mt-4'>
                    {cart.map(item => (
                        <ul class="list-group col-12 d-flex flex-column">
                            <li class='list-group-item col-12 d-flex mb-1 justify-content-between align-items-center px-4 py-1'>
                                <img src={item.image} className='col-1 item-img'></img>
                                <h6 className='col-3'>{item.name}</h6>
                                <div className='d-flex col-2 justify-content-between align-items-center rounded border border-secondary h-50'>
                                    <button onClick={() => decHandler(item)} className='btn btn-sm h-100'>-</button>
                                    <p className='mt-3'>{item.quantity}</p>
                                    <button onClick={() => incHandler(item)} className='btn btn-sm h-100'>+</button>
                                </div>
                                <h6 className='col-2 d-flex justify-content-center'>{item.offPrice * item.quantity} $</h6>
                                <IconButton onClick={() => removeHandler(item)}>
                                    <DeleteOutlineRoundedIcon color='secondary'></DeleteOutlineRoundedIcon>
                                </IconButton>
                            </li>
                        </ul>
                    ))}
                </section>
            </main>
        </Layout>
    );
};

export default Cart;

const CartSummary = ({ total, cart }) => {

    const orgPrice = cart.length ? cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0) : 0;

    return <section className='col-4 mt-4 h-50'>
        <div className='d-flex flex-column rounded border bg-white h-50 mb-1 mx-2 p-2'>
            <h5>Cart Summary</h5>
            <div className='col-12 d-flex justify-content-between align-items-center mt-3 px-1'>
                <h6>original total:</h6>
                <p>{orgPrice}$</p>
            </div>
            <div className='col-12 d-flex justify-content-between align-items-center px-1'>
                <h6>discount totoal:</h6>
                <p>{orgPrice - total}$</p>
            </div>
            <div className='col-12 d-flex justify-content-between align-items-center px-1'>
                <h6>net price:</h6>
                <p>{total}$</p>
            </div>
            <Link to='/signup?redirect=checkout' style={{ textDecoration: 'none' }}>
                <Button variant="contained" color="secondary" sx={{ width: 1 }} disableElevation>Checkout</Button>
            </Link>
        </div>
    </section>
}

