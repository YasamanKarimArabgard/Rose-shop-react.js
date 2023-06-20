import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { checkInCart } from '../utils/CheckInCart';
import { IconButton } from "@mui/material";
import { Link } from 'react-router-dom';

const Product = ({ product, addToCartHandler, cart }) => {
    return (
        <section className="product bg-white pt-1 rounded-md shadow-sm shadow-purple-200 h-full" key={product.id}>
            <Link to={`/product/${product.id}`} className='flex flex-col justify-between'>
            {/* product img */}
                <div className='flex justify-center items-center h-40 md:h-44 xl:h-64 px-2 mt-2'>
                    <img src={product.image} className="w-3/4 md:w-1/2 h-auto py-2" alt={product.title}></img>
                </div>
                <div className='product-information w-full flex flex-wrap justify-between p-2 py-3 rounded-br-md rounded-bl-md'>
                    <div className='w-full flex flex-col md:flex-row items-start md:items-center'>
                        {/* product title */}
                        <span className='w-3/4 mb-2'>
                            <h6 className='truncate text-black font-bold text-xs xl:text-md'>{product.title}</h6>
                        </span>
                        <div className='w-1/4 flex justify-end items-center'>
                            {/* product rate */}
                            <span class='text-yellow-500 mr-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 xl:w-6 xl:h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                </svg>
                            </span>
                            <h6 className='text-xs md:text-sm text-gray-500'>{product.rating.rate}</h6>
                        </div>
                    </div>
                    <div className='w-full flex justify-between items-center'>
                        {/* product price */}
                        <h6 className='text-purple-600 font-bold text-sm md:text-md xl:text-lg'>Price: {product.price}$</h6>
                        {/* product cart button */}
                        <div className=''>
                            <IconButton
                                size='medium'
                                onClick={(e) => addToCartHandler(e, product)}
                                color='primary'>
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