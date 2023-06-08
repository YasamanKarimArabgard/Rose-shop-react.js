import React, { createContext, useContext, useEffect, useState } from 'react';
import getProducts from '../services/getProducts';

export const ProductsContext = createContext();
export const LoadingContext = createContext();

const ProductsProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(null)

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true)
            try {
                const { data } = await getProducts();
                const upadtedProducts = data.map(product => ({
                    ...product,
                    offPrice: product.price - 5,
                    discount: 20,
                    supports: [
                        { support: "best quality" },
                        { support: "original" },
                        { support: "free delivery" },
                    ],
                }))
                setProducts(upadtedProducts);
                setLoading(false)
            } catch (error) {
                console.log(error);
            }
        }
        getProduct();
    }, [products])


    return (
        <>
            <LoadingContext.Provider value={loading}>
                <ProductsContext.Provider value={products}>
                    {children}
                </ProductsContext.Provider>
            </LoadingContext.Provider>
        </>
    );
};

export const useProducts = () => useContext(ProductsContext);
export const useLoading = () => useContext(LoadingContext);

export default ProductsProvider;