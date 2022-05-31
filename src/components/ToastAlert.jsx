import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useParams } from 'react-router';

export const ToastAlert = ({ handleClose, open, products, product}) => {

    const productToast = products.find(p => p.id == product.id)

    console.log(productToast);

    return (
        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            open={open}
            autoHideDuration={1000}
            onClose={handleClose}>
            <MuiAlert onClose={handleClose} severity='success' sx={{ width: '100%' }}>
                Product added to cart successfully!
            </MuiAlert>
        </Snackbar>
    )

}