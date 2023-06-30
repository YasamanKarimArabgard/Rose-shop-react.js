import { IconButton, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const CartItem = ({ item, removeHandler, incHandler, decHandler }) => {

    const totalItemPrice = item.offPrice * item.quantity;
    return (
        <Link to={`/product/${item.id}`} style={{ textDecoration: 'none', color: 'black' }} className='w-full'>
            <li className='cartItem_container w-full bg-white flex justify-around items-center my-2 p-2 rounded-lg h-42 xl:h-32'>
                {/* cart item img */}
                <div className='cartItem-image w-1/2 xl:w-1/6 flex items-center justify-center xl:justify-start p-1'>
                    <img src={item.image} className='w-4/5 md:w-1/2 h-auto' id='item-img' alt={item.title}></img>
                </div>
                <div className='cartItem_information_container w-1/2 xl:w-3/4 flex flex-col xl:flex-row justify-evenly md:justify-between h-full'>
                    <div className='cartItem-information w-full xl:w-2/3 flex flex-col justify-around xl:flex-row md:items-start xl:items-center h-1/2 md:h-full'>
                        <h5 className='cartItem-name w-full xl:w-3/5 text-sm md:text-md font-bold truncate mb-1 text-slate-800'>{item.title}</h5>
                        <div className='flex items-center justify-start xl:justify-center w-full md:w-3/5'>
                            <div className='flex flex-col'>
                                <span className='font-bold text-md md:text-lg text-slate-800 mb-1'>{totalItemPrice.toFixed(2)}$</span>
                                <span className='text-red-600 text-sm'>- {item.discount}$ discount</span>
                            </div>
                        </div>
                    </div>
                    <div className='cartItem_controls_container w-1/3 flex justify-between'>
                        <div className='cartItem_controls_quantity flex items-center'>
                            <div className='flex justify-between items-center bg-purple-200 p-1 h-3/4 xl:h-1/3 rounded-xl'>
                                {item.quantity > 1 ?
                                    <button onClick={(e) => decHandler(e, item)} className=''>
                                        <span className='px-2 py-3 xl:py-0 flex justify-center' >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-purple-500 font-bold">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                                            </svg>
                                        </span>
                                    </button> :
                                    <IconButton onClick={(e) => removeHandler(e, item)} id='cartItem-control-remove'>
                                        <DeleteOutlineOutlinedIcon color='error'></DeleteOutlineOutlinedIcon>
                                    </IconButton>
                                }
                                <p className='text-purple-600'>{item.quantity}</p>
                                <button onClick={(e) => incHandler(e, item)} className=''>
                                    <span className='px-2 py-3 xl:py-0 flex justify-center'>
                                        <svg xmlns="ttp://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-purple-500 font-bold">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <IconButton onClick={(e) => removeHandler(e, item)} id='cartItem-control-remove'>
                            <DeleteOutlineOutlinedIcon color='error'></DeleteOutlineOutlinedIcon>
                        </IconButton>
                    </div>
                </div>
            </li>
        </Link>
    );
};

export default CartItem;