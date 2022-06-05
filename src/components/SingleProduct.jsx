import { useParams } from 'react-router-dom';
import { useProducts } from '../context/ProductsProvider';
import { useCartActions, useCart } from '../context/CartProvider'
import { Button, Typography, IconButton } from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const SingleProduct = () => {

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
        <main className='single-product-container col-11 col-md-11 col-lg-6 flex-wrap d-flex justify-content-center justify-content-md-start bg-white border p-1 mt-md-2 m-1'>
            <section className='single-product-image col-12 col-md-6 mx-md-3 mx-lg-3'>
                <img src={singleProduct.image} className='w-100 h-auto'></img>
            </section>
            <section className='single-product-information col-11 col-md-5 d-flex flex-column justify-content-evenly mx-lg-3 mx-md-2 mt-2'>
                <h3>{singleProduct.name}</h3>
                <div>
                    <h5 className='text-secondary'><del>{singleProduct.price}$</del></h5>
                    <Typography variant='h5' color='primary'>{singleProduct.offPrice}$</Typography>
                </div>
                <p className='text-wrap text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labor
                    e et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <div className='single_product-features mb-2'>
                    <h6 className='text-dark'>features</h6>
                    {singleProduct.description.map(support => (
                        <div className='col-6 col-sm-6 col-md-6 d-flex'>
                            <i className="bi bi-check text-secondary"></i>
                            <h6 className='text-secondary mx-1'>{support.support}</h6>
                        </div>
                    ))}
                </div>
                {cart.length > 0 && singleProductInCart.quantity >= 1 ?
                    <QuantityControls
                        singleProduct={singleProduct}
                        singleProductInCart={singleProductInCart}
                        decHandler={decHandler}
                        incHandler={incHandler}
                        removeHandler={removeHandler} />
                    : <Button variant='contained' color='secondary' onClick={() => incHandler(singleProduct)} disableElevation={true}>Add to cart</Button>
                }
            </section>
        </main>
    )
};

export default SingleProduct;


export const QuantityControls = ({ singleProduct, decHandler, incHandler, singleProductInCart, removeHandler }) => {
    return <>
        <div className='single_products_controls_container col-12 col-md-12 d-flex justify-content-between align-items-center mb-1'>
            <Typography variant='h4' color='secondary'>{singleProductInCart.offPrice * singleProductInCart.quantity}$</Typography>
            <div className='single_product_controls_quantity d-flex col-8 col-md-8 justify-content-between align-items-center rounded border' style={{ height: '2.5em' }}>
                {singleProductInCart.quantity > 1 ?
                    <button onClick={() => decHandler(singleProduct)} className='btn btn-sm h-100 mx-1'>
                        <i className="bi bi-dash-lg"></i>
                    </button> :
                    <IconButton onClick={() => removeHandler(singleProduct)} id='cartItem-control-remove'>
                        <DeleteOutlineOutlinedIcon color='secondary'></DeleteOutlineOutlinedIcon>
                    </IconButton>
                }
                <p className='mt-3'>{singleProductInCart.quantity}</p>
                <button onClick={() => incHandler(singleProduct)} className='btn btn-sm h-100 mx-1'>
                    <i class="bi bi-plus-lg"></i>
                </button>
            </div>
        </div>
    </>
}

