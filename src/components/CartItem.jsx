import { IconButton, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const CartItem = ({ item, removeHandler, incHandler, decHandler }) => {
    return (
        <Link to={`/dresses/${item.id}`} style={{ textDecoration: 'none', color: 'black' }}>
            <li className='cartItem_container list-group-item col-12 d-flex flex-row flex-wrap mb-1 border justify-content-between align-items-center rounded py-2'>
                <div className='cartItem_image_container col-4 col-md-2 d-flex'>
                    <div className='cartItem-image col-9 col-md-6 col-lg-3'>
                        <img src={item.image} className='w-100 h-auto' id='item-img' alt={item.name}></img>
                    </div>
                </div>
                <div className='cartItem_information_container col-8 col-md-10 d-flex flex-column flex-md-row justify-content-md-between'>
                    <div className='cartItem-information col-12 col-md-6 d-flex flex-column flex-md-row justify-content-md-between align-items-center'>
                        <h5 className='cartItem-name col-12 col-md-9 col-lg-8 mx-1'>{item.name}</h5>
                        <div className='col-12 col-lg-4 d-flex flex-column my-1'>
                            <Typography variant='h6'>${item.offPrice * item.quantity}</Typography>
                            <Typography color='secondary' variant='p'>- ${item.discount} discount</Typography>
                        </div>
                    </div>
                    <div className='cartItem_controls_container col-12 col-md-5 d-flex flex-row justify-content-between'>
                        <div className='cartItem_controls_quantity d-flex col-6 col-md-6 justify-content-between align-items-center rounded border' style={{ height: '3em' }}>
                            {item.quantity > 1 ?
                                <button onClick={(e) => decHandler(e, item)} className='btn btn-sm h-100 mx-1 shadow-none'>
                                    <i class="bi bi-dash"></i>
                                </button> :
                                <IconButton onClick={(e) => removeHandler(e, item)} id='cartItem-control-remove'>
                                    <DeleteOutlineOutlinedIcon color='secondary'></DeleteOutlineOutlinedIcon>
                                </IconButton>
                            }
                            <p className='mt-3'>{item.quantity}</p>
                            <button onClick={(e) => incHandler(e, item)} className='btn btn-sm h-100 mx-1 shadow-none'>
                                <i class="bi bi-plus"></i>
                            </button>
                        </div>
                        <IconButton onClick={(e) => removeHandler(e, item)} id='cartItem-control-remove'>
                            <DeleteOutlineOutlinedIcon color='secondary'></DeleteOutlineOutlinedIcon>
                        </IconButton>
                    </div>
                </div>
            </li>
        </Link>
    );
};

export default CartItem;