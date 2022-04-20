const cartReducer = (state, action) => {
    switch (action.type) {
        case 'Add_To_Cart':
            const updatedCart = [...state.cart]
            const index = updatedCart.findIndex(item => item.id === action.payload.id)
            if (index < 0) {
                updatedCart.push({
                    ...action.payload, quantity: 1
                })
            } else {
                const updatedItem = { ...updatedCart[index] }
                updatedItem.quantity++;
                updatedCart[index] = updatedItem;
            }
            return {
                ...state,
                cart: updatedCart,
                total: state.total + action.payload.offPrice
            };
        case 'Decrement_Item':
            const updateCart = [...state.cart]
            const indexItem = updateCart.findIndex(item => item.id === action.payload.id)
            const updateItem = { ...updateCart[indexItem] }
            if (updateItem.quantity === 1) {
                const filter = updateCart.filter(item => item.id !== action.payload.id)
                return {
                    ...state,
                    cart: filter,
                    total: state.total - action.payload.offPrice
                }
            } else {
                updateItem.quantity--;
                updateCart[indexItem] = updateItem;
                return {
                    ...state,
                    cart: updateCart,
                    total: state.total + action.payload.offPrice
                }
            }
        default:
            return state;
    }
}

export default cartReducer;