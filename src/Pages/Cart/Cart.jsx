import React from 'react';
import Layout from '../../LayOut/Layout';
import { useCart, useCartActions } from '../../context/CartProvider'
import './Cart.css'

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
                <section className='col-4 mt-3'>
                    <h6 className='mx-4'>Cart Summary</h6>
                    <div className='d-flex flex-column rounded border bg-white h-50 mb-1 mx-2 p-2'>
                       <h6>Total Price :{total} $</h6>
                    </div>
                </section>
                <section className='col-8 d-flex flex-column mt-2'>
                    <h5 className='mx-4'>Cart List</h5>
                    {cart.map(item => (
                        <ul class="list-group col-12 d-flex flex-column">
                            <li class='list-group-item col-12 d-flex my-1 justify-content-between align-items-center px-4 py-1'>
                                <img src={item.image} class='item-img'></img>
                                <h6>{item.name}</h6>
                                <div className='d-flex justify-content-between align-items-center rounded border border-secondary h-50'>
                                    <button onClick={() => decHandler(item)} className='btn btn-sm h-100'>-</button>
                                    <p className='mt-3'>{item.quantity}</p>
                                    <button onClick={() => incHandler(item)} className='btn btn-sm h-100'>+</button>
                                </div>
                                <p>{item.price * item.quantity} $</p>
                            </li>
                        </ul>
                    ))}
                </section>
            </main>
        </Layout>
    );
};

export default Cart;