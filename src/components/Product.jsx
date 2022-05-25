import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
// import { checkInCart } from '../utils/CheckInCart';
import { IconButton } from "@mui/material";
import { Link } from 'react-router-dom'

const Product = ({ product, addToCartHandler }) => {
    return (
        <>
            <section className="product col-5 col-md-3 bg-white rounded m-1 p-1" key={product.id}>
                <Link to={`/dresses/${product.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                    <div>
                        <img src={product.image} className="w-100 h-auto"></img>
                    </div>
                    <div className='product-information col-12 col-m-12 d-flex flex-column align-items-center p-1'>
                        <div className="col-12 pt-1">
                            <h6 className='col-12 text-nowrap text-truncate'>{product.name}</h6>
                        </div>
                        <div className='col-12 d-flex align-items-end justify-content-between'>
                            <h6 className='col-9'>{product.price}$</h6>
                            <div className='col-3 d-flex justify-content-end'>
                                <IconButton
                                    size='small'
                                    sx={{ bgcolor: 'lightPink.main' }}
                                    onClick={() => addToCartHandler(product)}
                                    color='secondary'
                                    disableElevation
                                >
                                    <ShoppingCartOutlinedIcon color='secondary' />
                                </IconButton>
                            </div>
                        </div>
                    </div>
                </Link>
            </section>
        </>
    );
};

export default Product;