import React, { useState } from 'react';
import { useCartActions } from "../context/CartProvider";
import { IconButton } from "@mui/material";
import { ToastAlert } from "./ToastAlert";
import Searchbar from './Searchbar';
import { useProducts } from '../context/ProductsProvider';
import SelectPrice from './SelectPrice';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import Product from './Product';

const Products = () => {

    const products = useProducts();

    const [open, setOpen] = useState(false);
    const [filteredItems, setFilteredItems] = useState(products)

    const dispatch = useCartActions();

    const addToCartHandler = (product) => {
        setOpen(true)
        dispatch({ type: 'Add_To_Cart', payload: product })
    }

    const handleClose = (reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <>
            <main className="products_container col-12 d-flex flex-column align-items-center">
                <section className='searchbar_container col-10 col-md-9 d-flex flex-wrap justify-content-between p-1 bg-white border rounded mt-2 mb-2'>
                    <div className='searchbar col-12 col-md-6 d-flex flex-nowrap justify-content-start align-items-center'>
                        <IconButton>
                            <SearchIcon />
                        </IconButton>
                        <Searchbar products={products} setFilteredItems={setFilteredItems} />
                    </div>
                    <div className='selectbar col-12 col-md-6 d-flex flex-nowrap justify-content-start align-items-center'>
                        <IconButton>
                            <FilterListIcon />
                        </IconButton>
                        <SelectPrice products={filteredItems} setFilteredItems={setFilteredItems} />
                    </div>
                </section>
                <section className="product_list col-12 d-flex flex-wrap justify-content-center mb-2">
                    {filteredItems.map(product => (
                        <Product product={product} addToCartHandler={addToCartHandler}/>
                    ))}
                    <ToastAlert open={open} handleClose={handleClose} />
                </section>
            </main>
        </>
    );
};

export default Products;