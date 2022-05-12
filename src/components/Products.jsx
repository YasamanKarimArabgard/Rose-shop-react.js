import React, { useState } from 'react';
import * as data from '../data';
import { Button, IconButton } from "@mui/material";
import { useCartActions, useCart } from "../context/CartProvider";
import { checkInCart } from "../utils/CheckInCart";
import { ToastAlert } from "./ToastAlert";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

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
            return;
        }

        setOpen(false);
    };

    return (
        <>
            <main className="products_container col-10">
                <section className="product_list col-12 d-flex flex-wrap justify-content-between">
                    {data.products.map(product => (
                        <section className="product col-5 col-md-2 bg-white rounded m-1 p-3" key={product.id}>
                            <div>
                                <img src={product.image} className="w-100 h-auto"></img>
                            </div>
                            <div className='product-information col-12 col-m-12 d-flex flex-column align-items-center p-1'>
                                <div className="col-12 d-flex flex-column">
                                    <h6 className='col-12'>{product.name}</h6>
                                </div>
                                <div className='col-12 d-flex align-items-end'>
                                    <h6 className='col-9'>{product.price} $</h6>
                                    <IconButton
                                    className='col-3'
                                        onClick={() => addToCartHandler(product)}
                                        disableElevation
                                    >
                                        <ShoppingCartOutlinedIcon color="secondary" />
                                    </IconButton>
                                </div>
                            </div>
                            <ToastAlert open={open} handleClose={handleClose} />
                        </section>
                    ))}
                </section>
            </main>
        </>
    );
};

export default Products;