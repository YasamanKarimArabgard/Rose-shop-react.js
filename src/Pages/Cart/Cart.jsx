import Layout from '../../Layout/Layout';
import CartItem from '../../components/CartItem';
import { useCart, useCartActions } from '../../context/CartProvider';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Divider, Typography } from '@mui/material';
import emtyCartImg from '../../assets/emptycart.png'
const Cart = () => {

    const { cart, total } = useCart();
    const dispatch = useCartActions();
    const navigate = useNavigate();

    const incHandler = (e, cartItem) => {
        e.stopPropagation();
        e.preventDefault();
        dispatch({ type: 'Add_To_Cart', payload: cartItem })
    }

    const decHandler = (e, cartItem) => {
        e.stopPropagation();
        e.preventDefault();
        dispatch({ type: 'Decrement_Item', payload: cartItem })
    }

    const removeHandler = (e, cartItem) => {
        e.stopPropagation();
        e.preventDefault();
        dispatch({ type: 'Remove_Item', payload: cartItem })
    }

    if (!cart.length) {
        return <Layout>
            <div className='emptycart_container grid grid-cols-12 grid-rows-[55px-minmax(500px, _1fr)] max-w-screen-2xl gap-8'>
                <section className='col-span-10 col-start-2 row-start-4 flex justify-center'>
                    <div className='md:w-1/2 flex justify-center'>
                        <div className='flex flex-col justify-center items-center'>
                            <h5 className='mt-5 mb-4 text-red-500 text-md xl:text-lg font-bold'>Your cart is empty :)</h5>
                            <button className='btn w-28 p-2 md:w-32 md:py-3 border border-purple-500 text-purple-500 hover:bg-purple-100 rounded-xl' onClick={() => navigate('/')}>Back to shop</button>
                        </div>
                        <div className='w-1/3 md:w-1/2 ml-3 flex justify-center'>
                            <img className='w-full md:w-2/4 h-auto' src={emtyCartImg} />
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    }

    return (
        <Layout>
            <main className='cart-container grid grid-cols-12 md:grid-rows-[55px-minmax(500px, _1fr)] gap-y-11 gap-x-8 bg-purple-50 mb-2'>
                <div className='col-span-10 col-start-2 sticky top-14 z-10 bg-blur backdrop-blur-sm bg-blur bg-cover flex items-center'>
                    <h1 className='text-xl font-bold text-purple-600 my-2'>Your Cart</h1>
                </div>
                <section className='col-span-10 row-start-3 col-start-2 col-end-12 h-auto flex flex-col md:flex-row justify-between'>
                    <section className='cart grid grid-cols-3 w-full bg-purple-100 px-3 rounded-lg gap-x-4'>
                        <ul className="cart-item col-span-3 md:col-span-2 md:col-start-1 md:col-end-3">
                            {cart.map(item => (
                                <CartItem item={item}
                                    incHandler={incHandler}
                                    decHandler={decHandler}
                                    removeHandler={removeHandler}
                                    key={item.id}
                                />
                            ))}
                        </ul>
                        <CartSummary total={total} cart={cart} />
                    </section>
                </section>
            </main>
        </Layout>
    );
};

export default Cart;

const CartSummary = ({ total, cart }) => {

    const orgPrice = cart.length ? cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0) : 0;

    return <>
        <section className='cartSummry-container fixed bottom-0 right-0 left-0 md:sticky md:top-28 h-48 md:col-span-1 md:col-start-3 md:col-end-4 bg-purple-200 rounded-xl mt-2'>
            <div className='cartSummry w-full'>
                <div className='px-4 py-2 h-full flex flex-col justify-between'>
                    <h2 className='text-xl font-bold text-purple-700 mb-2'>Cart Summary</h2>
                    <div className='total flex justify-between items-center mb-2'>
                        <h4 className='text-md'>original total:</h4>
                        <h4 className='text-md'>{orgPrice}$</h4>
                    </div>
                    <div className='discount flex justify-between items-center mb-2'>
                        <h4 className='text-md'>discount totoal:</h4>
                        <h4 className='text-md'>{orgPrice - total}$</h4>
                    </div>
                    <div className='netPrice flex justify-between items-center mb-2'>
                        <h4 className='text-md'>net price:</h4>
                        <h4 className='text-md'>{total.toFixed(2)}$</h4>
                    </div>
                    <Link to='/signup?redirect=checkout' style={{ textDecoration: 'none' }}>
                        <Button variant="contained" id='checkout-btn' sx={{ width: 1, color: '#fff', mt:2 }} disableElevation={true}>Checkout</Button>
                    </Link>
                </div>
            </div>
        </section>
    </>
}

