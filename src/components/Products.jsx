import React, { useState } from 'react';
import * as data from '../data';
import { Button } from "@mui/material";
import { useCartActions, useCart } from "../context/CartProvider";
import { checkInCart } from "../utils/CheckInCart";
import { ToastAlert } from "../Pages/Cart/ToastAlert";

const Products = () => {

    const [open, setOpen] = useState(false);

    const { cart } = useCart()
    const dispatch = useCartActions();

    const addToCartHandler = (product) => {
        setOpen(true)
        dispatch({ type: 'Add_To_Cart', payload: product })
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        }
        setOpen(false)
    }

    return (
        <>
            <main className="col-11">
                <section className="product_list d-flex flex-wrap">
                    {data.products.map(product => (
                        <section className="product col-sm-2 bg-white m-1 p-1 rounded" key={product.id}>
                            <div>
                                <img src={product.image} className="w-100 h-auto"></img>
                            </div>
                            <div className="product-information col-12 d-flex justify-content-between align-items-center">
                                <h6>{product.name}</h6>
                                <p>{product.price} $</p>
                            </div>
                            <Button variant="contained" color="primary" sx={{ width: 1 }}
                                onClick={() => addToCartHandler(product)}
                                disableElevation
                            >{checkInCart(cart, product) ? '+ more' : 'Add to cart'}</Button>
                            <ToastAlert open={open} handleClose={handleClose}/>
                        </section>
                    ))}
                </section>
            </main>
        </>
    );
};

export default Products;