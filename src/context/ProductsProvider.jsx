import React, { createContext, useContext, useEffect, useState } from 'react';
import getProducts from '../services/getProducts';

export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProduct = async () => {
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
            } catch (error) {
                console.log(error);
            }
        }
        getProduct();
    }, [products])


    return (
        <>
            <ProductsContext.Provider value={products}>
                {children}
            </ProductsContext.Provider>
        </>
    );
};

export const useProducts = () => useContext(ProductsContext);

export default ProductsProvider;