import Layout from '../../Layout/Layout';
import CartItem from '../../components/CartItem';
import { useCart, useCartActions } from '../../context/CartProvider';
import { Link, useNavigate } from 'react-router-dom';
import { Button} from '@mui/material';
import emtyCartImg from '../../assets/images/error.png'
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
                            <img className='w-full md:w-3/4 h-auto' src={emtyCartImg} alt='error banner'/>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    }

    return (
        <Layout>
            <main className='col-span-10 col-start-2 row-start-3 min-h-screen '>
                <div className='sticky top-12 xl:top-11 z-10 bg-blur backdrop-blur-sm bg-blur bg-cover flex items-center ml-3'>
                    <h1 className='text-2xl font-bold text-purple-500 my-2'>Your cart</h1>
                </div>
                <section className='h-auto flex flex-col md:flex-row justify-between'>
                    <section className='cart grid grid-cols-3 w-full bg-purple-100 p-3 rounded-lg gap-x-4 mb-2'>
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
                        <div className='h-40 md:hidden bg-purple-100'></div>
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
    const discountTotal = orgPrice - total;

    return <>
        <section className='cartSummry-container fixed bottom-0 right-0 left-0 h-48 md:sticky md:top-36 md:col-span-1 md:col-start-3 md:col-end-4 bg-white md:bg-purple-200 rounded-tr-xl rounded-tl-xl md:rounded-xl mt-2 shadow-md'>
            <div className='cartSummry w-full'>
                <div className='px-4 py-2 h-full flex flex-col justify-between'>
                    <h2 className='text-xl font-bold text-purple-800 md:text-purple-700 mb-2'>Cart Summary</h2>
                    <div className='total flex justify-between items-center mb-2'>
                        <h4 className='text-md text-slate-800'>original total:</h4>
                        <h4 className='text-md text-slate-800'>{orgPrice.toFixed(2)}$</h4>
                    </div>
                    <div className='discount flex justify-between items-center mb-2'>
                        <h4 className='text-md text-slate-800'>discount totoal:</h4>
                        <h4 className='text-md text-red-500'>- {discountTotal.toFixed(2)}$</h4>
                    </div>
                    <div className='netPrice flex justify-between items-center mb-2'>
                        <h4 className='text-md font-bold text-slate-800'>net price:</h4>
                        <h4 className='text-lg font-bold text-slate-800'>{total.toFixed(2)}$</h4>
                    </div>
                    <Link to='/signup?redirect=checkout' style={{ textDecoration: 'none' }}>
                        <Button variant="contained" id='checkout-btn' sx={{ width: 1, color: '#fff', mt: 2 }} disableElevation={true}>Checkout</Button>
                    </Link>
                </div>
            </div>
        </section>
    </>
}

