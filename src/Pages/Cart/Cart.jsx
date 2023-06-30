import Layout from '../../Layout/Layout';
import CartItem from '../../components/CartItem';
import { useCart, useCartActions } from '../../context/CartProvider';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Divider, Typography } from '@mui/material';
import emtyCartImg from '../../assets/images/emptycart (2).png'
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
            <section className='col-span-10 col-start-2 row-start-4 flex justify-center min-h-screen'>
                <div className='flex justify-center items-start'>
                    <div className='flex flex-col-reverse items-center md:flex-row md:justify-center'>
                        <div className='flex flex-col justify-center items-center xl:w-2/5'>
                            <h5 className='mt-5 mb-4 text-red-500 text-md xl:text-lg font-bold'>Your cart is empty :)</h5>
                            <button className='btn w-2/3 p-1 md:w-32 text-sm md:py-3 border border-purple-500 text-purple-500 hover:bg-purple-100 rounded-xl' onClick={() => navigate('/')}>Back to shop</button>
                        </div>
                        <div className='w-2/3 md:w-1/2 xl:w-3/5 ml-3 flex justify-center'>
                            <img className='w-full md:w-3/4 h-auto' src={emtyCartImg} />
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    }

    return (
        <Layout>
            <main className='col-span-10 col-start-2 row-start-4 min-h-screen'>
                <div className='sticky top-14 z-10 bg-blur backdrop-blur-sm bg-blur bg-cover flex items-center'>
                    <h1 className='text-xl font-bold text-purple-500 my-2'>Your Cart</h1>
                </div>
                <section className='h-auto flex flex-col md:flex-row justify-between'>
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
        <section className='cartSummry-container fixed bottom-0 right-0 left-0 h-48 md:sticky md:top-36 md:col-span-1 md:col-start-3 md:col-end-4 bg-purple-200 rounded-tr-xl rounded-tl-xl md:rounded-xl mt-2'>
            <div className='cartSummry w-full'>
                <div className='px-4 py-2 h-full flex flex-col justify-between'>
                    <h2 className='text-xl font-bold text-purple-800 md:text-purple-700 mb-2'>Cart Summary</h2>
                    <div className='total flex justify-between items-center mb-2'>
                        <h4 className='text-md'>original total:</h4>
                        <h4 className='text-md'>{orgPrice.toFixed(2)}$</h4>
                    </div>
                    <div className='discount flex justify-between items-center mb-2'>
                        <h4 className='text-md'>discount totoal:</h4>
                        <h4 className='text-md text-red-500'>- {orgPrice - total}$</h4>
                    </div>
                    <div className='netPrice flex justify-between items-center mb-2'>
                        <h4 className='text-md font-bold'>net price:</h4>
                        <h4 className='text-lg font-bold'>{total.toFixed(2)}$</h4>
                    </div>
                    <Link to='/signup?redirect=checkout' style={{ textDecoration: 'none' }}>
                        <Button variant="contained" id='checkout-btn' sx={{ width: 1, color: '#fff', mt: 2 }} disableElevation={true}>Checkout</Button>
                    </Link>
                </div>
            </div>
        </section>
    </>
}

