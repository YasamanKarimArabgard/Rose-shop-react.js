import { IconButton } from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const CartItem = ({ item, removeHandler, incHandler, decHandler }) => {
    return (
        <>
            <li class='cartItem_container list-group-item col-12 d-flex flex-row flex-wrap mb-1 border justify-content-between align-items-center py-2'>
                <div className='cartItem_image_container col-4 col-md-2 d-flex'>
                    <div className='cartItem-image col-9 col-md-3'>
                        <img src={item.image} className='w-100 h-auto' id='item-img'></img>
                    </div>
                </div>
                <div className='cartItem_information_container col-8 col-md-10 d-flex flex-column flex-md-row justify-content-md-between'>
                    <div className='cartItem-information col-12 col-md-6 d-flex flex-column flex-md-row justify-content-md-between align-items-center'>
                        <h5 className='cartItem-name col-12 col-md-8 mx-1'>{item.name}</h5>
                        <h6 className='cartItem-price col-12 col-md-4 d-flex mt-1 text-dark'>{item.offPrice * item.quantity} $</h6>
                    </div>
                    <div className='cartItem_controls_container col-12 col-md-5 d-flex flex-row justify-content-between'>
                        <div className='cartItem_controls_quantity d-flex col-6 col-md-6 justify-content-between align-items-center rounded border' style={{ height: '3em' }}>
                            <button onClick={() => decHandler(item)} className='btn btn-sm h-100 mx-1'>
                                <i class="bi bi-dash-lg"></i>
                            </button>
                            <p className='mt-3'>{item.quantity}</p>
                            <button onClick={() => incHandler(item)} className='btn btn-sm h-100 mx-1'>
                                <i class="bi bi-plus-lg"></i>
                            </button>
                        </div>
                        <IconButton onClick={() => removeHandler(item)} id='cartItem-control-remove'>
                            <DeleteOutlineOutlinedIcon color='secondary'></DeleteOutlineOutlinedIcon>
                        </IconButton>
                    </div>
                </div>
            </li>
        </>
    );
};

export default CartItem;