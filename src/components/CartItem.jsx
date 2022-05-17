import { IconButton } from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const CartItem = ({ item, removeHandler, incHandler, decHandler }) => {
    return (
        <>
            <li class='product_container list-group-item col-12 d-flex flex-row flex-wrap mb-1 border justify-content-between align-items-center py-2'>
                <div className='col-4 col-md-2 d-flex'>
                    <div className='col-6 col-md-12'>
                        <img src={item.image} className='item-img'></img>
                    </div>
                </div>
                <div className='col-8 col-md-10 d-flex flex-column flex-md-row justify-content-md-between'>
                    <div className='col-12 col-md-6 d-flex flex-column flex-md-row justify-content-md-between align-items-center'>
                        <h6 className='col-12 col-md-8 mx-1'>{item.name}</h6>
                        <h6 className='col-12 col-md-4 d-flex'>{item.offPrice * item.quantity} $</h6>
                    </div>
                    <div className='col-12 col-md-5 d-flex flex-row justify-content-between'>
                        <div className='d-flex col-8 col-md-6 justify-content-between align-items-center rounded border'>
                            <button onClick={() => decHandler(item)} className='btn btn-sm h-100'>-</button>
                            <p className='mt-3'>{item.quantity}</p>
                            <button onClick={() => incHandler(item)} className='btn btn-sm h-100'>+</button>
                        </div>
                        <IconButton onClick={() => removeHandler(item)}>
                            <DeleteOutlineOutlinedIcon color='secondary'></DeleteOutlineOutlinedIcon>
                        </IconButton>
                    </div>
                </div>
            </li>
        </>
    );
};

export default CartItem;