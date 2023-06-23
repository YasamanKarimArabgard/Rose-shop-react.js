import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProducts, useError } from '../context/ProductsProvider';
import { useCartActions, useCart } from "../context/CartProvider";
import { ToastAlert } from "./ToastAlert";
import Searchbar from './Searchbar';
import SelectPrice from './SelectPrice';
import Product from './Product';
import ProductsLoading from '../components/Loading/ProductsLoading';
import HomeBanner from '../components/Home/HomeBanner';

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
            {/* check if category is false then show component */}
            {!category ? <HomeBanner /> : ''}
            <main className="products_container grid grid-cols-12 md:grid-rows-[55px-minmax(500px, _1fr)] gap-8 max-w-screen-2xl bg-purple-50">
                <section className='searchbar_container col-span-10 row-start-3 col-start-2 flex items-center justify-between flex-wrap md:mt-3'>
                    <Searchbar
                        products={products}
                        filteredItems={filteredItems}
                        setFilteredItems={setFilteredItems}
                        category={category}
                    />
                    <SelectPrice
                        products={filteredItems}
                        setFilteredItems={setFilteredItems}
                    />
                </section>
                <section className="product_list col-span-10 row-start-4 col-start-2 flex">
                    <section className='grid gap-2 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 md:p-0 sm:gap-x-4 md:gap-x-6 xl:gap-x-8 md:gap-y-3 mb-2'>

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
                </section>
            </main>

        </>
    );
};

export default Products;