import React, { useContext, createContext, useReducer, useEffect } from 'react';
import CartReducer from './CartReducer';

const initialState = {
    cart: [],
    total: 0
}



const CartContext = createContext();
const CartContextDispather = createContext();

const CartProvider = ({ children }) => {
    
    const [cart, dispatch] = useReducer(CartReducer, initialState);

    return (
        <CartContext.Provider value={cart}>
            <CartContextDispather.Provider value={dispatch}>
                {children}
            </CartContextDispather.Provider>
        </CartContext.Provider>
    );
};

export default CartProvider;

export const useCart = () => useContext(CartContext);
export const useCartActions = () => useContext(CartContextDispather);
