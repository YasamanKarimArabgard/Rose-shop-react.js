import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProducts, useError } from '../context/ProductsProvider';
import { IconButton } from "@mui/material";
import { useCartActions, useCart } from "../context/CartProvider";
import { ToastAlert } from "./ToastAlert";
import Searchbar from './Searchbar';
import SelectPrice from './SelectPrice';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import Product from './Product';
import ProductsLoading from '../components/Loading/ProductsLoading'

const Products = () => {

    const products = useProducts();
    const { cart } = useCart();
    const error = useError();

    const [open, setOpen] = useState(false);
    const [filteredItems, setFilteredItems] = useState([]);

    const dispatch = useCartActions();
    const { category } = useParams();

    useEffect(() => {
        const filterProducts = () => {
            if (!category) {
                setFilteredItems(products);
            } else {
                const filteredProd = products.filter(product => {
                    return product.category === category
                })
                setFilteredItems(filteredProd);
            }
        }
        filterProducts();
    }, [category]);

    const addToCartHandler = (e, product) => {
        e.stopPropagation();
        e.preventDefault();
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
            <main className="products_container col-11 d-flex flex-column align-items-center">
                <section className='searchbar_container col-12 col-md-12 d-flex flex-wrap justify-content-between p-1 bg-white border rounded mt-2 mb-2'>
                    <div className='searchbar col-12 col-md-6 d-flex flex-nowrap justify-content-start align-items-center'>
                        <IconButton>
                            <SearchIcon />
                        </IconButton>
                        <Searchbar
                            products={products}
                            filteredItems={filteredItems}
                            setFilteredItems={setFilteredItems}
                            category={category}
                        />
                    </div>
                    <div className='selectbar col-12 col-md-6 d-flex flex-nowrap justify-content-start align-items-center'>
                        <IconButton>
                            <FilterListIcon />
                        </IconButton>
                        <SelectPrice products={filteredItems} setFilteredItems={setFilteredItems} />
                    </div>
                </section>
                <section className="product_list col-12 d-flex flex-wrap justify-content-center mb-2">
                {/* first check error then check categories */}
                    {
                        error ?
                         <h3 className='text-danger mt-5'>The Server is not responding!</h3> :
                            filteredItems.length === 0 ?
                                <ProductsLoading /> :
                                filteredItems.map(product => (
                                    <Product
                                        product={product}
                                        addToCartHandler={addToCartHandler}
                                        cart={cart}
                                        key={product.id} />
                                ))
                    }
                    <ToastAlert open={open} handleClose={handleClose} products={products} />
                </section>
            </main>

        </>
    );
};

export default Products;