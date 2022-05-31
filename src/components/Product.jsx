import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { checkInCart } from '../utils/CheckInCart';
import { IconButton } from "@mui/material";
import { Link } from 'react-router-dom';
import { ToastAlert } from './ToastAlert';

const Product = ({ product, addToCartHandler, cart}) => {
    return (
        <section className="product col-6 col-md-4 col-lg-3 bg-white p-1 border" key={product.id}>
            <Link to={`/dresses/${product.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                <img src={product.image} className="w-100 h-auto"></img>
                <div className='product-information col-12 col-m-12 d-flex flex-column align-items-center p-1'>
                    <div className="col-12 pt-1">
                        <h6 className='col-12 text-nowrap text-truncate'>{product.name}</h6>
                    </div>
                    <div className='col-12 d-flex align-items-end justify-content-between'>
                        <h6 className='col-9'>{product.price}$</h6>
                        <div className='col-3 d-flex justify-content-end'>
                            <IconButton
                                size='small'
                                onClick={(e) => addToCartHandler(e, product)}
                                color='secondary'
                                disableElevation>
                                {
                                    checkInCart(cart, product) ?
                                        <AddShoppingCartOutlinedIcon /> :
                                        <ShoppingCartOutlinedIcon />
                                }
                            </IconButton>
                        </div>
                    </div>
                </div>
            </Link>
        </section>
    )
};

export default Product;