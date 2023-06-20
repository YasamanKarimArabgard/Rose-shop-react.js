import { useParams } from 'react-router-dom';
import { useProducts } from '../context/ProductsProvider';
import { useCartActions, useCart } from '../context/CartProvider';
import { Button, Typography, IconButton } from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { v4 as uuidv4 } from 'uuid';

const SigleProd = () => {

    const { id } = useParams();
    const products = useProducts();
    const { cart } = useCart();
    const dispatch = useCartActions();

    const singleProduct = products.find(p => p.id == id);
    const singleProductInCart = cart.find(p => p.id == id);

    const incHandler = (cartItem) => {
        dispatch({ type: 'Add_To_Cart', payload: cartItem })
    }

    const decHandler = (cartItem) => {
        dispatch({ type: 'Decrement_Item', payload: cartItem })
    }

    const removeHandler = (cartItem) => {
        dispatch({ type: 'Remove_Item', payload: cartItem })
    }

    return (
        <main className='single-product-container grid grid-cols-12 row-start-3 grid-rows-[55px-minmax(500px, _1fr)] gap-8'>
            <div className='single-product col-span-10 row-start-3 md:row-start-6 col-start-2 flex flex-col md:flex-row xl:justify-betwee bg-white p-1 py-5 rounded-2xl md:rounded-md shadow-sm'>
                <section className='single-product-image md:w-1/2 xl:w-3/5 flex justify-center items-center p-2 px-5'>
                    <img src={singleProduct.image} className='md:w-4/5 xl:w-2/5 h-auto' alt={singleProduct.title}></img>
                </section>
                <section className='single-product-information fixed md:static bottom-0 left-0 right-0 bg-purple-100 md:bg-white md:w-1/2 xl:w-2/5 px-5 p-2 md:p-1 flex flex-col justify-between rounded-tr-3xl rounded-tl-3xl'>
                    <h6 className='text-xs md:text-lg font-thin text-gray-400 mb-2'>{singleProduct.category}</h6>
                    <h4 className='md:text-md xl:text-2xl font-bold text-black my-1'>{singleProduct.title}</h4>
                    <div className='flex items-center'>
                        <h5 className='md:text-md xl:text-xl line-through text-gray-500 mr-3'>{singleProduct.price}$</h5>
                        <div className='font-bold text-xl md:text-2xl text-purple-700'>{singleProduct.offPrice}$</div>
                    </div>
                    <div className='hidden md:flex flex-col justify-between mb-1'>
                        <h6 className='font-bold text-sm xl:text-lg'>Description : </h6>
                        <p className='font-thin text-gray-500 mt-2 text-xs md:text-lg'>{singleProduct.description}</p>
                    </div>
                    <div className='single_product-features mb-2'>
                        <h6 className='text-sm md:text-lg font-bold text-gray-600 mb-2'>features :</h6>
                        {singleProduct.supports.map(support => (
                            <div className='flex items-center mb-1' key={uuidv4(JSON.stringify(support))}>
                                <span className='mr-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-500">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                    </svg>
                                </span>
                                <h6 className='text-xs md:text-lg text-gray-500'>{support.support}</h6>
                            </div>
                        ))}
                    </div>
                    <div className='w-4/5 mx-auto'>
                        {cart.length > 0 && singleProductInCart.quantity >= 1 ?
                            <QuantityControls
                                singleProduct={singleProduct}
                                singleProductInCart={singleProductInCart}
                                decHandler={decHandler}
                                incHandler={incHandler}
                                removeHandler={removeHandler} />
                            : <Button variant='contained' sx={{ color: ' #fff', width: '1' }} onClick={() => incHandler(singleProduct)} disableElevation={true}>Add to cart</Button>
                        }
                    </div>
                </section>
            </div>
        </main>
    );
};

export default SigleProd;


export const QuantityControls = ({ singleProduct, decHandler, incHandler, singleProductInCart, removeHandler }) => {

    const totalSingleProdPrice = singleProductInCart.offPrice * singleProductInCart.quantity;
    return <>
        <div className='single_products_controls_container w-full mx-auto flex justify-between items-center'>
            <div className='text-lg md:text-xl text-purple-700 font-bold mr-2'>{totalSingleProdPrice.toFixed(2)}$</div>
            <div className='single_product_controls_quantity bg-white md:bg-purple-200 shadow-sm rounded-md flex-1 mx-1 flex justify-around items-center' style={{ height: '2.5em' }}>
                {singleProductInCart.quantity > 1 ?
                    <button onClick={() => decHandler(singleProduct)} className=''>
                        <span className='mx-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-purple-500 font-bold">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                            </svg>
                        </span>
                    </button> :
                    <IconButton onClick={() => removeHandler(singleProduct)} id='cartItem-control-remove'>
                        <DeleteOutlineOutlinedIcon color='error'></DeleteOutlineOutlinedIcon>
                    </IconButton>
                }
                <p className=''>{singleProductInCart.quantity}</p>
                <button onClick={() => incHandler(singleProduct)} className=''>
                    <span className='mx-1'>
                        <svg xmlns="ttp://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-purple-500 font-bold">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    </>
}
