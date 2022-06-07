export function checkInCart(cart, product) {
    return cart.find(p => p.id === product.id)
}
