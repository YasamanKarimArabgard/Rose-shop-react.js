import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

export const ToastAlert = ({ handleClose, open }) => {

    return (
        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            open={open}
            autoHideDuration={2000}
            onClose={handleClose}>
            <MuiAlert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Product added to cart successfully!
            </MuiAlert>
        </Snackbar>
    )

}