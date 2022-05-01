import React from 'react';
import Layout from '../../LayOut/Layout';
import { useCart, useCartActions } from '../../context/CartProvider'
import './Cart.css'
import { Link } from 'react-router-dom';

const Cart = () => {

    const { cart, total } = useCart();
    const dispatch = useCartActions();

    const incHandler = (cartItem) => {
        dispatch({ type: 'Add_To_Cart', payload: cartItem })
    }

    const decHandler = (cartItem) => {
        dispatch({ type: 'Decrement_Item', payload: cartItem })
    }

    if (!cart.length) {
        return <Layout>
            <h5 className='mt-4 text-secondary'>cart is empty :)</h5>
        </Layout>
    }

    return (
        <Layout>
            <main className='col-10 d-flex flex-row-reverse justify-content-between'>
                <CartSummary total={total} cart={cart} />
                <section className='col-8 d-flex flex-column mt-4'>
                    {cart.map(item => (
                        <ul class="list-group col-12 d-flex flex-column">
                            <li class='list-group-item col-12 d-flex mb-1 justify-content-between align-items-center px-4 py-1'>
                                <img src={item.image} class='item-img'></img>
                                <h6>{item.name}</h6>
                                <div className='d-flex justify-content-between align-items-center rounded border border-secondary h-50'>
                                    <button onClick={() => decHandler(item)} className='btn btn-sm h-100'>-</button>
                                    <p className='mt-3'>{item.quantity}</p>
                                    <button onClick={() => incHandler(item)} className='btn btn-sm h-100'>+</button>
                                </div>
                                <p>{item.offPrice * item.quantity} $</p>
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

    const orgPrice = cart.length ? cart.reduce((acc, curr) => acc + curr.quantity * curr.price , 0) : 0;

    return <section className='col-4 mt-4 h-50'>
        <div className='d-flex flex-column rounded border bg-white h-50 mb-1 mx-2 p-2'>
            <h5>Cart Summary</h5>
            <div className='col-12 d-flex justify-content-between align-items-center mt-3 px-1'>
                <p>original total:</p>
                <p>{orgPrice}$</p>
            </div>
            <div className='col-12 d-flex justify-content-between align-items-center px-1'>
                <p>discount totoal:</p>
                <p>{orgPrice - total }$</p>
            </div>
            <div className='col-12 d-flex justify-content-between align-items-center px-1'>
                <p>net price:</p>
                <p>{total}$</p>
            </div>
            <Link to='/signup?redirect=checkout'>
                <button className='col-12 btn btn-sm btn-primary'>Go to Checkout</button>
            </Link>
        </div>
    </section>
}