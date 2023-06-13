import React, { createContext, useContext, useEffect, useState } from 'react';
import getProducts from '../services/getProducts';

export const ProductsContext = createContext();
export const ErrorContext = createContext();

const ProductsProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

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
                if (error) {
                    setError(true);
                }
            }
        }
        getProduct();
    }, [products])


    return (
        <>
            <ErrorContext.Provider value={error}>
                <ProductsContext.Provider value={products}>
                    {children}
                </ProductsContext.Provider>
            </ErrorContext.Provider>
        </>
    );
};

export const useProducts = () => useContext(ProductsContext);
export const useError = () => useContext(ErrorContext);

export default ProductsProvider;