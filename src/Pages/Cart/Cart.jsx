import React from 'react';
import Layout from '../../LayOut/Layout';
import { useCart } from '../../context/CartProvider'
import './Cart.css'

const Cart = () => {

    const { cart } = useCart();
    // console.log(cart);

    // if (!cart.length) {
    //     return <main className='col-10 d-flex justify-content-center'>
    //         <p>cart is empty</p>
    //     </main>
    // }
    return (
        <Layout>
            <main className='col-10 d-flex flex-row-reverse justify-content-between'>
                <section className='col-4 d-flex flex-column rounded border bg-white h-50 my-1 mx-2'>
                    cart summary
                </section>
                {cart.length ? cart.map(item => (
                    <ul class="list-group col-8">
                        <li class='list-group-item col-12 d-flex my-1 justify-content-around align-items-center px-1 py-1'>
                        <img src={item.image} class='item-img'></img>
                            <h6>{item.name}</h6>
                            <div className='d-flex justify-content-between align-items-center rounded border border-secondary h-75'>
                                <button className='btn btn-sm h-100'>-</button>
                                <p className='mt-3'>{item.quantity}</p>
                                <button className='btn btn-sm h-100'>+</button>
                            </div>
                            <p>${item.price}</p>
                        </li>
                    </ul>
                )) : <h5 className='text-end text-secondary mt-3'>cart is empty</h5>}
            </main>
        </Layout>
    );
};

export default Cart;